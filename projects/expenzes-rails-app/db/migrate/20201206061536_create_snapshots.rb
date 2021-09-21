class CreateSnapshots < ActiveRecord::Migration[6.0]
  def change
    create_table :snapshots do |t|
      t.decimal :saving, precision: 20, scale: 2
      t.decimal :credit, precision: 20, scale: 2
      t.decimal :loan, precision: 20, scale: 2
      t.decimal :invest, precision: 20, scale: 2
      t.decimal :deposit, precision: 20, scale: 2
      t.decimal :donate, precision: 20, scale: 2
      t.decimal :wallet, precision: 20, scale: 2
      t.date :event_date

      t.timestamps null: true
    end
  end
end
