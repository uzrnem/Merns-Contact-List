class Contact < ApplicationRecord
	belongs_to :user

	EMAIL_REGEX = /\A[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}\Z/i

	validates :name,	length: { minimum: 2, maximum: 50 }

	validates :mobile,	:presence => {:message => 'Empty Mobile Number'},
						:numericality => true,
						:uniqueness => true,
						:length => { :minimum => 10, :maximum => 15 }

	validates :email,	:presence => true,
						:length => { :minimum => 5, :maximum => 50 },
						:uniqueness => { :case_sensitive => false },
						:format => { :with => EMAIL_REGEX }

	def to_object
		contact = self
		{
			id: contact.id,
			mobile: contact.mobile,
			email: contact.email
		}.as_json
	end
end
