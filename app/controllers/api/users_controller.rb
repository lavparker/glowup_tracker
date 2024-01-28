module Api
class UsersController < ApplicationController
    skip_before_action :verify_authenticity_token, only: [:create]
    # before_action :require_logged_in, only: [:index, :show]


    def index
      @users = User.all
      render:index
    end

    def new
      @user = User.new
      render :new
    end

    def create
    #   debugger
      @user = User.new(user_params)

      if @user.save
        login!(@user)
        render :show
      else
        render json: @user.errors.full_messages, status: 422
      end
    end

    def show
      @user = User.find(params[:id])

      if @user
        render :show
      else
        render json: ["user not found"], status: 404
      end
    end




  private
    def user_params
        params.require(:user).permit(:first_name, :last_name, :phone_number, :email, :username, :password)
    end

end
end
