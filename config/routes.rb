# config/routes.rb
Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :stocks, only: [:index, :show]
    end
  end

  root 'home#index'

  # Add a catch-all route for React frontend
  get '*path', to: 'home#index', constraints: ->(request) { !request.xhr? && request.format.html? }
end