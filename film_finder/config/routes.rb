Rails.application.routes.draw do
  # resources :scenes

  root 'scenes#index'
  get 'scenes', to: 'scenes#index'
  get 'scenes/search', to: 'scenes#search'
end
