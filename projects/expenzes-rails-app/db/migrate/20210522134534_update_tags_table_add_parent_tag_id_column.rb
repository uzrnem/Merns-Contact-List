class UpdateTagsTableAddParentTagIdColumn < ActiveRecord::Migration[6.0]
  def change
    add_reference :tags, :tag, foreign_key: true, null: true
  end
end
