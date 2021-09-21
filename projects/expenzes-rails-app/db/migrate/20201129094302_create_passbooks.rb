class CreatePassbooks < ActiveRecord::Migration[6.0]
  def change
    create_table :passbooks do |t|
      t.references :account, null: false, foreign_key: true
      t.references :activity
      t.decimal :previous_balance, precision: 20, scale: 2
      t.references :transaction_type, null: false, foreign_key: true
      t.decimal :balance, precision: 20, scale: 2

      t.timestamps null: true
    end
  end
end
