class GateController < ApplicationController
	before_action :is_user_logged_in?
	attr_accessor :user

	@user

	private

	def is_user_logged_in?
		jwt_obj = decode
		if jwt_obj.nil?
			render json: { message: 'Unauthorized Access' }, status: :unauthorized
			return false
		else
			@user = jwt_obj[:user]
			return true
		end
	end
	
	def decode
		token = request.headers[:HTTP_AUTHORIZATION]
		jwt_obj = JWT.decode(
		 	token,
		 	Rails.application.secrets.secret_key_base, 
		 	true,
		 	{
		 		algorithm: 'HS256'
		 	}
		)[0]
		return HashWithIndifferentAccess.new jwt_obj
		rescue
		nil
	end
end
