class IndexController < ApplicationController
	def login
		user = User.where(email: params_login[:email]).first
		if user.nil?
			render json: { success: false, message: 'User not found!' }
		elsif user.authenticate(params_login[:password]) == false
			render json: { success: false, message: 'Password not matched!' }
		else
			render json: { success: true, message: 'User Logged In!', token: generate_jwt(user), user: user.to_object }, status: :ok
		end
	end

	def register
		user = User.create params_register
		#if user.valid?
		unless user.new_record?
			render json: { success: true, message: 'Account Created!', token: generate_jwt(user), user: user.to_object }, status: 201
		else
			render json: { success: false, message: 'Validation Failed!', error: user.errors }, status: :unprocessable_entity
		end
	end

	private

	def params_login
		params.permit(:email, :password)
	end

	def params_register
		params.permit(:name, :email, :password)
	end

	def generate_jwt(user)
		payload = {
			user: user.to_object,
			exp: ( Time.now + 10.hours ).to_i, 
			iat: Time.now.to_i
		}
		JWT.encode payload, Rails.application.secrets.secret_key_base, 'HS256'
	end

end
