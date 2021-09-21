Rails.application.routes.draw do
  resources :snapshots
  resources :activities
  resources :transaction_types
  resources :passbooks
  resources :accounts
  resources :account_types
  resources :tags

  get '/tags/transactions/:from/:to', to: 'tags#transaction_types'
  get '/passbooks/accounts/:account_id', to: 'passbooks#accounts'
  get '/accounts/frequent/list', to: 'accounts#frequent'
  get '/activities/passbook/log', to: 'activities#log'
  get '/accounts/chart/share', to: 'accounts#share'
  get '/accounts/chart/expenses/:year/:month', to: 'accounts#expenses'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
