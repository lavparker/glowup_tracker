class Api::SessionsController < ApplicationController
  before_action :require_logged_in!, only: [:destroy]

  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy

    logout!
    render json: {}

    # render a Render a 404 message if there is no current_user to logout.

  end
end
