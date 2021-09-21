class CreateUniqueContraints < ActiveRecord::Migration[6.0]
  def change
    add_index :transaction_types, :name, :unique => true
    add_index :transaction_types, :slug, :unique => true

    add_index :account_types, :name, :unique => true
    add_index :account_types, :slug, :unique => true

    add_index :tags, :name, :unique => true
    add_index :tags, :slug, :unique => true

    add_index :accounts, :name, :unique => true
    add_index :accounts, :slug, :unique => true
  end
end
