Rails.application.routes.draw do
  
  resources :assistances, only: [:index, :show, :create, :destroy]
  resources :cores, only: [:index, :show, :create, :destroy]
  resources :workouts, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create, :destroy]

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
