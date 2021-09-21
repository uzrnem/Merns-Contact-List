class CreateTags < ActiveRecord::Migration[6.0]
  def change
    create_table :tags do |t|
      t.string :name
      t.string :slug
      t.references :transaction_type, null: false, foreign_key: true

      t.timestamps null: true
    end
  end
end
