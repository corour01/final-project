class ScenesController < ApplicationController

  def show

    @scenes = Scene.all
    @scenes.each do |scene|
      lat = scene[:Latitude]
      lng = scene[:Longitude]
      Pry.start(binding)
    end

  end

end
