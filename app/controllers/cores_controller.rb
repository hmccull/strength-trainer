class CoresController < ApplicationController

    def create
        c = Core.create!(core_params)
        render json: c, status: 201
    end

    private

    def core_params
        params.permit(:name, :lift_weight, :reps, :workout_id)
    end

end
