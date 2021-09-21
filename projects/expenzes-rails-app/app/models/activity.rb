class Activity < ApplicationRecord
  belongs_to :from_account, :class_name => 'Account', :optional => true
  belongs_to :to_account, :class_name => 'Account', :optional => true
  belongs_to :tag
  has_many :passbooks
  belongs_to :transaction_type
  validates :amount, :numericality => { :greater_than_or_equal_to => 0.01 }

end
