class AssistancesController < ApplicationController

    def create
        a = Assistance.create!(assistance_params)
        render json: a, status: 201
    end

    private

    def assistance_params
        params.permit(:name, :lift_weight, :reps, :core_lift, :favorite, :workout_id)
    end

end
