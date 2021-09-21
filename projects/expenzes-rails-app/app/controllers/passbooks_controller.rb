class PassbooksController < ApplicationController
  before_action :set_passbook, only: [:show, :update, :destroy]

  # GET /passbooks
  def index
    @passbooks = Passbook.all

    render json: @passbooks
  end

  # GET /passbooks/1
  def show
    render json: @passbook
  end

  def accounts
    sql = "select
     ct.name as current_account, p.previous_balance, p.balance, tt.name as transaction_type,
     CASE
      WHEN ot.name is null THEN tg.name
      WHEN tt.slug = 'credit' THEN CONCAT(tg.name, ' from ', ot.name)
      ELSE CONCAT(tg.name, ' to ', ot.name)
     END as comment, tg.name as tag_name, t.amount, t.event_date, ot.name as opposite_account, t.remarks
    from passbooks p
    left join transaction_types tt on p.transaction_type_id = tt.id
    left join activities t on p.activity_id = t.id
    left join tags tg on t.tag_id = tg.id
    left join accounts ct on p.account_id = ct.id
    left join accounts ot on (tt.slug = 'credit' and t.from_account_id = ot.id) or (tt.slug = 'debit' and t.to_account_id = ot.id)
    where p.account_id = "

    @passbook = ApplicationRecord.connection.exec_query(sql+params[:account_id] + ' ORDER BY `t`.`event_date` DESC, `p`.`id` DESC LIMIT 15')
    render json: @passbook
  end

  # POST /passbooks
  def create
    @passbook = Passbook.new(passbook_params)

    if @passbook.save
      render json: @passbook, status: :created, location: @passbook
    else
      render json: @passbook.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /passbooks/1
  def update
    if @passbook.update(passbook_params)
      render json: @passbook
    else
      render json: @passbook.errors, status: :unprocessable_entity
    end
  end

  # DELETE /passbooks/1
  def destroy
    @passbook.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_passbook
      @passbook = Passbook.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def passbook_params
      params.require(:passbook).permit(:accounts_id, :previous_balance, :credit, :debit, :balance)
    end
end
