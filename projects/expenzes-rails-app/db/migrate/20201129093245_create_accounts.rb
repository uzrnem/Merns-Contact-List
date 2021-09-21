class CreateAccounts < ActiveRecord::Migration[6.0]
  def change
    create_table :accounts do |t|
      t.string :name
      t.string :slug
      t.references :account_type, null: false, foreign_key: true
      t.decimal :amount, precision: 20, scale: 2

      t.timestamps null: true
    end
  end
end
