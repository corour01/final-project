class ScenesController < ApplicationController


  def index
  @scenes = Scene.all
   respond_to do |format|
      format.html
      format.json {render json: @scenes}      
    end
  end

  def search
    @scenes = Scene.all
    @search_results = []
    @scenes.each do |scene|
      if scene.director == keyword[:parameters]
        @search_results << scene
      end
    end
    Pry.start(binding)
    respond_to do |format|
      format.html
      format.json {render json: @search_results}
      # Pry.start(binding)
    end
  end

  def return
    self.search
    respond_to do |format|
      format.html
      format.json {render json: @search_results}
    end
  end

end
