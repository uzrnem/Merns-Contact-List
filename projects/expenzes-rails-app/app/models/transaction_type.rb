class TransactionType < ApplicationRecord
  has_many :tags
  has_many :activities
  accepts_nested_attributes_for :tags
end
