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
      if (scene.director.downcase.include? params[:keyword].downcase or scene.film.downcase.include? params[:keyword].downcase)
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
