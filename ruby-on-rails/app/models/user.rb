class User < ApplicationRecord
	has_secure_password

	EMAIL_REGEX = /\A[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}\Z/i

	validates :email,	:presence => true,
						:length => { :minimum => 5, :maximum => 50 },
						:uniqueness => { :case_sensitive => false },
						:format => { :with => EMAIL_REGEX }

	def to_object
		user = self
		{
			id: user.id,
			name: user.name,
			email: user.email
		}.as_json
	end

end