class MenusController < ApplicationController
  def index
    @menus = Menu.all
    @menu = Menu.new
  end

  def show
    @menu = Menu.find(params[:id])
  end

  def create
    @menu = Menu.new(params[:menu])
    if @menu.save
      respond_to do |format|
        format.html do
          request.xhr? ? render(@menu, layout: false) : redirect_to(root_path)
        end
        format.json do
          render json: @menu
        end
      end
    else
      @menus = Menu.all
      flash[:errors] = @menu.errors.full_messages
      render :index
    end
  end
end
