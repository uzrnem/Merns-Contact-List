class UpdateAccountsTableAddIsClosedColumn < ActiveRecord::Migration[6.0]
  def change
    add_column :accounts, :is_closed, :boolean, :default => false
  end
end
