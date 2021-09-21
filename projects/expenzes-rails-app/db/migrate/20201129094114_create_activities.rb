class CreateActivities < ActiveRecord::Migration[6.0]
  def change
    create_table :activities do |t|
      t.references :from_account, null: true, foreign_key: {to_table: :accounts}
      t.references :to_account, null: true, foreign_key: {to_table: :accounts}
      t.references :tag, null: false, foreign_key: true
      t.decimal :amount, precision: 20, scale: 2
      t.date :event_date
      t.text :remarks
      t.references :transaction_type, null: false, foreign_key: true

      t.timestamps null: true
    end
  end
end
