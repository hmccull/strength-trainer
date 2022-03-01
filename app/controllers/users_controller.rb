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
        render json: @current_user, include: ['workouts', 'workouts.cores', 'workouts.assistances']
    end

    private 
    
    def user_params
        params.permit(:username, :password, :password_confirmation)
    end
end
