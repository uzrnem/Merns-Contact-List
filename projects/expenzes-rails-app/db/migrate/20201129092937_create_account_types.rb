class CreateAccountTypes < ActiveRecord::Migration[6.0]
  def change
    create_table :account_types do |t|
      t.string :name
      t.string :slug

      t.timestamps null: true
    end
  end
end
