class ContactsController < GateController
	before_action :find_contact, :except => [:create, :list] #:only => [:read, :update, :delete]
	attr_accessor :contact

	@contact

	def create
		data = contact_params
		data[:user_id] = @user[:id]
		contact = Contact.create data
		#if contact.valid?
		unless contact.new_record?
			render json: { success: true, message: 'Contact Created!', data: contact.to_object}, status: 201
		else
			render json: { success: false, message: 'Validation Failed!', error: contact.errors }, status: :unprocessable_entity
		end
	end

	def read
		render json: { success: true, message: 'Contact Found!', data: @contact.to_object }, status: 200
	end

	def update
		if @contact.update contact_params
			render json: { success: true, message: 'Contact Updated!', data: @contact.to_object }, status: 200
		else
			render json: { success: false, message: 'Validation Failed!', error: @contact.errors }, status: :unprocessable_entity
		end
	end

	def delete
		if @contact.destroy
			render json: { success: true, message: 'Contact Deleted!'}, status: 200
		else
			render json: { success: false, message: 'Validation Failed!', error: @contact.errors }, status: :unprocessable_entity
		end
	end

	def list
		contact = model_list
		render json: {
			success: true,
			message: 'Contact List!',
			total: contact.limit(nil).reorder(nil).count,
			data: contact
		}, status: 200
	end

	private

	def contact_params
		params.require(:contact).permit(:id, :email, :name, :mobile)
	end

	def find_contact
		@contact = Contact.find_by_id_and_user_id(params[:id], @user[:id])
		if @contact.nil?
			render json: { success: false, message: 'Contact Not Found!'}, status: 404
			return false
		end
		#@contact = Contact.where("id = ? AND user_id = ?", params[:id], @user[:id]).first
		# result from where clause not allow destroy without ID
	end

	def model_list
		filter = ActiveSupport::JSON.decode(params[:filter] || '{}')
		sort = ActiveSupport::JSON.decode(params[:sort] || '{}')
		limit = get_limit params[:limit]
		offset = get_offset limit, params[:page]
		contact = Contact.where("user_id = ?", @user[:id]).select(:id, :name, :mobile, :email)
		unless filter.nil?
			filter.map { |k, v| contact = contact.where("#{k} like ?", "%#{v}%")  }
		end
		unless sort.nil?
			contact = contact.order("#{sort['key']} #{sort['value']}")
		end
		contact = contact.limit(limit)
		contact = contact.offset(offset)
		contact
	end

	def get_limit (limit)
		limit = limit || 10
		limit = limit.to_i || 10
		limit = 10 if limit.present? and limit <= 0
		limit
	end

	def get_offset (limit, page)
		page = page || 1
		page = page.to_i || 1
		page = 1 if page.present? and page <= 0
		offset = 0 if page == 1
		offset = limit * (page - 1) if page > 1
		offset
	end
end