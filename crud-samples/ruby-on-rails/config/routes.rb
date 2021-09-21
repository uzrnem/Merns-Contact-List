Rails.application.routes.draw do

	post '/login', to: 'index#login'
	post '/register', to: 'index#register'

	resources :contact, :controller => "contacts",  only: [] do
		collection do
			get '', :action => "list"
			post '', :action => "create"
		end
		member do
			get '', :action =>'read'
			post '', :action =>'update'
			delete '', :action =>'delete'
		end
	end
end
# For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

# post '/check', to: 'index#check' , constraints: { subdomain: 'admin' }

=begin
	get '/contact/:id', to: 'contacts#read'
	post '/contact', to: 'contacts#create'
	put '/contact/:id', to: 'contacts#update'
	delete '/contact/:id', to: 'contacts#delete'
=end

<<-DOC
	resources :user,  only: [] do
		collection do
			get '', to: 'users#list'
			post '', to: 'users#create'
		end
		member do
			get '', to: 'users#read'
			put '', to: 'users#update'
			delete '', to: 'users#delete'
		end
	end
DOC
