class MenusController < ApplicationController
  def index
    @menus = Menu.all
    @menu = Menu.new
  end

  def show
    @menu = Menu.find params[:id]
  end

  def create
    @menu = Menu.new params[:menu]
    if @menu.save
      respond_to do |format|
        format.html {
          if request.xhr?
            render(@menu, layout: false)
          else
            redirect_to root_path
          end
        }
        format.json { render json: @menu }
      end

    else
      @menus = Menu.all
      render :index
    end
  end
end
