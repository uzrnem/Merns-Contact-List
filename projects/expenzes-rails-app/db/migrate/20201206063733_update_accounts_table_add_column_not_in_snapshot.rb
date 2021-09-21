class UpdateAccountsTableAddColumnNotInSnapshot < ActiveRecord::Migration[6.0]
  def change
    add_column :accounts, :is_snapshot_disable, :boolean
  end
end
