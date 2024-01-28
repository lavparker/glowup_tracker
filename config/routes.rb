Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  resources :users, only: [:new, :create, :show]

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :new, :create, :show] # This will handle POST requests to /api/users
    resource :session, only: [:create, :destroy, :show]
  end

  # Defines the root path route ("/")
  root to: 'static_pages#root'

  # Add the route for manifest.json
  get '/manifest.json', to: 'your_controller#manifest'
end
