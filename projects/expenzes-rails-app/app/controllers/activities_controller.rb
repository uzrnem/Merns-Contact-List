class ActivitiesController < ApplicationController
  before_action :set_activity, only: [:show, :update, :destroy]

  # GET /activities
  def index
    sql = "SELECT act.id, act.amount, act.event_date, act.remarks, act.created_at, act.updated_at,
     fa.name as from_account, ta.name as to_account, tg.name as tag, s_tg.name as sub_tag,
     transaction_types.name as transaction_type
    FROM `activities` as act
    LEFT JOIN `tags` tg ON `tg`.`id` = `act`.`tag_id`
    LEFT JOIN `tags` s_tg ON `s_tg`.`id` = `act`.`sub_tag_id`
    LEFT JOIN `transaction_types` ON `transaction_types`.`id` = `act`.`transaction_type_id`
    LEFT JOIN accounts as fa ON fa.id = act.from_account_id
    LEFT JOIN accounts as ta ON ta.id = act.to_account_id
    ORDER BY `act`.`created_at` DESC, `act`.`event_date` DESC, `act`.`id` DESC LIMIT 5 -- OFFSET 0"
    @activities = ApplicationRecord.connection.exec_query(sql)

    render json: @activities
  end

  # GET /activities/1
  def show
    render json: @activity
  end

  # POST /transactions
  def create
    input_params = params.require(:activity).permit(:from_account_id, :to_account_id,
    :amount, :event_date, :remarks, :tag_id, :sub_tag_id)
    transaction_type = 'transfer'
    if input_params[:from_account_id] == 0 || input_params[:from_account_id] == "0"
      input_params.delete(:from_account_id)
      transaction_type = 'credit'
    elsif input_params[:to_account_id] == 0 || input_params[:to_account_id] == "0"
      input_params.delete(:to_account_id)
      transaction_type = 'debit'
    end
    if input_params[:sub_tag_id] == 0 || input_params[:sub_tag_id] == "0"
      input_params.delete(:sub_tag_id)
    end
    transactionType = TransactionType.find_by( slug: transaction_type);
    input_params[:transaction_type] = transactionType
    puts input_params

    @activity = Activity.new(input_params)
    if @activity.save
      render json: @activity, status: :created, location: @activity
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  # POST /activities
  def create1
    @activity = Activity.new(activity_params)
    if @activity.save
      render json: @activity, status: :created, location: @activity
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /activities/1
  def update
    if @activity.update(activity_params)
      render json: @activity
    else
      render json: @activity.errors, status: :unprocessable_entity
    end
  end

  # DELETE /activities/1
  def destroy
    @activity.destroy
  end

  # GET /activities
  def log
    data = request.query_parameters
    conditionTag = nil
    conditionTransactionType = nil
    conditionAccount = nil
    conditionStartDate = nil
    conditionEndDate = nil
    tag_id = data[:tag_id].to_i
    account_id = data[:account_id].to_i
    account_key = data[:account_key].to_i
    transaction_type_id = data[:transaction_type_id].to_i

    if tag_id > 0
      conditionTag = '( act.tag_id = '+data[:tag_id] + ' or act.sub_tag_id = '+data[:tag_id] + ')'
    end
    if account_id > 0 and account_key > 0
      conditionAccount = '( ( act.from_account_id = '+data[:account_id] + ' and act.to_account_id = ' +data[:account_key] + ') or' +
        '( act.from_account_id = '+data[:account_key] + ' and act.to_account_id = ' +data[:account_id] + ') )'
    elsif account_id > 0
      conditionAccount = '( act.from_account_id = '+data[:account_id] + ' or act.to_account_id = ' +data[:account_id] + ')'
    end
    if transaction_type_id > 0
      conditionTransactionType = ' act.transaction_type_id = '+ data[:transaction_type_id]
    end
    if !data[:start_date].nil?
      conditionStartDate = "act.event_date >= '"+data[:start_date]+"'"
    end
    if !data[:end_date].nil?
      conditionEndDate = "act.event_date <= '"+data[:end_date]+"'"
    end
    isStarted = false
    condition = ''
    if !conditionTag.nil?
      condition = conditionTag
      isStarted = true
    end
    if !conditionAccount.nil?
      if isStarted == true
        condition = condition + ' and ' + conditionAccount
      else
        condition = conditionAccount
        isStarted = true
      end
    end
    if !conditionStartDate.nil?
      if isStarted == true
        condition = condition + ' and ' + conditionStartDate
      else
        condition = conditionStartDate
        isStarted = true
      end
    end
    if !conditionEndDate.nil?
      if isStarted == true
        condition = condition + ' and ' + conditionEndDate
      else
        condition = conditionEndDate
        isStarted = true
      end
    end
    if !conditionTransactionType.nil?
      if isStarted == true
        condition = condition + ' and ' + conditionTransactionType
      else
        condition = conditionTransactionType
        isStarted = true
      end
    end

    if isStarted == true
      condition = ' WHERE ' + condition
    end
    limit = data[:page_size].to_i
    offset = (data[:page_index].to_i - 1 ) * limit
    puts condition
    sql = "SELECT act.id, act.amount, act.event_date, act.remarks, act.created_at, act.updated_at,
             fa.name as from_account, ta.name as to_account, tg.name as tag, s_tg.name as sub_tag,
             transaction_types.name as transaction_type, fp.previous_balance as fp_previous_balance,
             fp.balance as fp_balance, tp.previous_balance as tp_previous_balance, tp.balance as tp_balance
        FROM `activities` as act
        LEFT JOIN `tags` tg ON `tg`.`id` = `act`.`tag_id`
        LEFT JOIN `tags` s_tg ON `s_tg`.`id` = `act`.`sub_tag_id`
        LEFT JOIN `transaction_types` ON `transaction_types`.`id` = `act`.`transaction_type_id`
        LEFT JOIN `passbooks`as fp ON `fp`.`activity_id` = `act`.`id` and act.from_account_id = fp.account_id
        LEFT JOIN `passbooks`as tp ON `tp`.`activity_id` = `act`.`id` and act.to_account_id = tp.account_id
        LEFT JOIN accounts as fa ON fa.id = act.from_account_id
        LEFT JOIN accounts as ta ON ta.id = act.to_account_id
        " + condition + "
        ORDER BY `act`.`event_date` DESC, `act`.`id` DESC LIMIT " + limit.to_s+ " offset " + offset.to_s

      count = "SELECT count(act.id) as count FROM `activities` as act " + condition
      sum = "SELECT SUM(act.amount) as sum FROM `activities` as act " + condition

    puts sql
    puts count
    @result = ApplicationRecord.connection.exec_query(sql)
    @total = ApplicationRecord.connection.exec_query(count).first
    @sum = ApplicationRecord.connection.exec_query(sum).first

    render json: { list: @result, total: @total['count'], sum: @sum['sum'] }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activity
      @activity = Activity.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def activity_params
      params.require(:activity).permit(:from_account_id, :to_account_id, :tag_id, :sub_tag_id, :amount, :event_date, :remarks, :transaction_types_id)
    end
end
