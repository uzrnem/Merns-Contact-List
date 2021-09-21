class Tag < ApplicationRecord
  has_many :activities
  belongs_to :transaction_type
  belongs_to :tag
  has_many :tags
end
