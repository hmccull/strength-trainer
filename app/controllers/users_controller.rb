class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def index
        render json: User.all
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: 201
    end

    def show
        user = User.find(session[:user_id])
        if user
            render json: user, status: 200
        end
    end

    private 
    
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
