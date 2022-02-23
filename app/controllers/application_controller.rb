class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_422
  rescue_from ActiveRecord::RecordNotFound, with: :render_404

  before_action :authorize

  private

  def authorize
    @current_user = User.find_by(id: session[:user_id]);
    render json: { errors: ["Not authorized"] }, status: 401 unless @current_user
  end

  def render_422(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: 422
  end

  def render_404(err)
    render json: { errors: err }, status: 404
  end

end
