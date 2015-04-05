class ScenesController < ApplicationController


  def index
  @scenes = Scene.all
  @scene_list = []
  @scenes.each do |scene|
    @scene_list << scene
  end
  
   respond_to do |format|
      format.html
      format.json {render json: @scene_list}      
    end
  end

  def search
    @scenes = Scene.all
    @search_results = []
    @scenes.each do |scene|
      if (scene.director.include? params[:keyword] or scene.film.include? params[:keyword])
        @search_results << scene
      end
    end
    respond_to do |format|
      format.html
      format.json {render json: @search_results}
    end
  end

  # def return
  #   self.search
  #   respond_to do |format|
  #     format.html
  #     format.json {render json: @search_results}
  #   end
  # end

end
