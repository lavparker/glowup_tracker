Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
    # get "/articles", to: "articles#index"
    namespace :api, defaults: { format: :json } do
      resources :users, only: [:create, :show]
      resource :session, only: [:create, :destroy, :show]
    end

  # Defines the root path route ("/")
  # root "articles#index"
end
