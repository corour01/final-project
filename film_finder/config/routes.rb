Rails.application.routes.draw do
  # resources :scenes

  root 'scenes#index'
  get 'scenes', to: 'scenes#index'
  post 'scenes/search', to: 'scenes#search_director'

  resource :scenes
end
