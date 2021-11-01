Rails.application.routes.draw do
  resources :users
  resources :dogs

  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  delete "/logout", to: "sessions#destroy"
  post "/login", to: "sessions#create"

  delete "/delete-dog/:id", to: "dogs#delete_user_dog"

  # get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
