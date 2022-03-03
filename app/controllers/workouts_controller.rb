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

    # def one_rep_max
    #     w = find_workout
    #     max_lift = w.cores.order(:lift_weight).last
    #     weight = max_lift.lift_weight
    #     reps = max_lift.reps
    #     one_rep_max = weight / (1.0278 - (0.0278 * reps))
    #     render json: one_rep_max, status: 201
    # end

    private

    def find_workout
        Workout.find(params[:id])
    end

    def workout_params
        params.permit(:name, :duration, :active_calories, :body_weight, :date)
    end
end
