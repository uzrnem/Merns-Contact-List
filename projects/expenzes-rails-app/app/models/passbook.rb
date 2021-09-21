class Passbook < ApplicationRecord
  belongs_to :account
  belongs_to :activity
end
