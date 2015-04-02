Rails.application.routes.draw do
  # resources :scenes

  root 'scenes#index'
  get 'scenes/show', to: 'scenes#show'
end
