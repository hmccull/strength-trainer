class WorkoutsController < ApplicationController

    def index 
        render json: Workout.all, status: 200
    end

    def show
        w = find_workout
        render json: w, include: ['cores', 'assistances'], status: 200
    end
    
    def create
        w = @current_user.workouts.create!(workout_params)
        render json: w, status: 201
    end

    def destroy
        find_workout.destroy
        head :no_content
    end

    private

    def find_workout
        Workout.find(params[:id])
    end

    def workout_params
        params.permit(:name, :duration, :active_calories, :body_weight, :date)
    end
end
