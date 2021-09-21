class AccountsController < ApplicationController
  before_action :set_account, only: [:show, :update, :destroy]

  # GET /accounts
  def index
    @accounts = nil
    if params[:all_accounts] == 'true'
      @accounts = Account.order('amount = 0 ASC, name ASC')
    else
      @accounts = Account.where(:is_closed => 0).order('name ASC')
    end
    render json: @accounts
  end

  def frequent
    @accounts = Account.where(:is_closed => 0, is_frequent: 1).order('name ASC')
    render json: @accounts
  end

  def share
#select
# a.id, a.slug, t.name, a.amount, SUM(a.amount) OVER (PARTITION BY a.account_type_id ) as sum
#from accounts a
#left join account_types t on a.account_type_id = t.id
#where a.amount !=0 and a.is_snapshot_disable = 0
#order by a.account_type_id, a.slug;
    holding_balance_sql = "select
     t.name as 'Account', SUM(a.amount) as 'Amount per Account'
    from accounts a
    left join account_types t on a.account_type_id = t.id
    where a.amount !=0 and a.is_snapshot_disable = 0 and a.is_closed != 1
    group by a.account_type_id order by t.name='Saving' desc, t.name='Credit' desc, t.name='Wallet' desc,
    t.name='Stocks Equity' desc, t.name='Loan' desc, t.name='Mutual Funds' desc, t.name='Deposit' desc;";
    holding_balance = ApplicationRecord.connection.exec_query(holding_balance_sql)

    account_balance_sql = "select a.name as account, t.name as type, a.amount as balance
    from accounts a
    left join account_types t on a.account_type_id = t.id
    where a.amount !=0 and a.is_snapshot_disable = 0 and a.is_closed != 1
    order by t.name='Saving' desc, t.name='Credit' desc, t.name='Wallet' desc,
    t.name='Deposit' desc, t.name='Loan' desc, t.name='Stocks Equity', a.name;"
    account_balance = ApplicationRecord.connection.exec_query(account_balance_sql)

    ccBills = []
    total = 0.0
    ccIndex = 0
    loan = 0.0
    ccBills.unshift(['Balance', total])

    array = holding_balance.rows
    array.each_with_index {|val, index|
      if val[1].to_f < 0
        ccBills.unshift(['CC Bill', 0 - val[1].to_f])
        ccIndex = index
      end
      if val[0] == 'Deposit' || val[0] == 'Stocks Equity' || val[0] == 'Mutual Funds'
      elsif val[0] == 'Loan'
        loan = val[1].to_f
      else
        total += val[1].to_f
      end
      array[index][1] = val[1].to_f
    }
    array.delete_at(ccIndex)
    #if !ccBills[1][1].nil?
    ccBills[1][1] = total
    ccBills.unshift(['Loan', loan])
    ccBills.unshift(holding_balance.columns)

    array.unshift(holding_balance.columns)

    render json: { holding: array, balance: account_balance, totalBalance: ccBills }
  end

  # GET /accounts/1
  def show
    render json: @account
  end

  # GET /accounts/1
  def show
    render json: @account
  end

  # POST /accounts
  def create
    @account = Account.new(account_params)

    if @account.save
      render json: @account, status: :created, location: @account
    else
      render json: @account.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /accounts/1
  def update
    if @account.update(account_params)
      render json: @account
    else
      render json: @account.errors, status: :unprocessable_entity
    end
  end

  # DELETE /accounts/1
  def destroy
    @account.destroy
  end

  # GET /accounts/1
  def expenses
    condition = " AND year(event_date) = " + params[:year] + " AND month(event_date) = " + params[:month]
    if params[:year] == 0 || params[:year] == "0"
      condition = ""
    end
    holding_balance_sql = "SELECT COALESCE(sub.name, tag.name) as tag, SUM(act.amount) as amount
    FROM `activities` as act
    LEFT JOIN `tags` tag ON `tag`.`id` = `act`.`tag_id`
    LEFT JOIN `tags` sub ON `sub`.`id` = `act`.`sub_tag_id`
    WHERE `act`.`transaction_type_id` = 2 " + condition + "
    GROUP BY tag.name, sub.name ORDER BY SUM(act.amount) ASC";
    holding_balance = ApplicationRecord.connection.exec_query(holding_balance_sql)

    months_sql = "SELECT DISTINCT year(event_date) as year, month(event_date) as month, MONTHNAME(event_date) as mon FROM activities " +
    " WHERE transaction_type_id = 2 ORDER BY year(event_date) DESC, month(event_date) DESC"
    months = ApplicationRecord.connection.exec_query(months_sql)

    total = 0.0
    array = holding_balance.rows
    array.each_with_index {|val, index|
      total += val[1].to_f
      array[index][1] = val[1].to_f
    }
    array.unshift(holding_balance.columns)
    render json: { holding: array, expenses: total, months: months }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_account
      @account = Account.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def account_params
      params.require(:account).permit(:name, :slug, :account_type_id, :amount, :is_frequent, :is_snapshot_disable, :is_closed)
    end
end
