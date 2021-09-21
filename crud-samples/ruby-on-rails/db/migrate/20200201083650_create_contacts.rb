class CreateContacts < ActiveRecord::Migration[6.0]
  def change
    create_table :contacts do |t|
      t.string :email
      t.string :name
      t.string :mobile
      t.references :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
