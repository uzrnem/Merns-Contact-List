class AccountsAddIsFrequest < ActiveRecord::Migration[6.0]
  def change
    add_column :accounts, :is_frequent, :boolean
  end
end
