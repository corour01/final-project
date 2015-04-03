class ScenesController < ApplicationController


  def index

  @scenes = Scene.all
   respond_to do |format|
      format.html
      format.json {render json: @scenes}      
    end

  end

end
