Rails.application.routes.draw do
  # resources :scenes

  root 'scenes#index'
  get 'scenes', to: 'scenes#index'
  post 'scenes/search', to: 'scenes#search'
  get 'scenes/all', to: 'scenes#all'

  resource :scenes
end
