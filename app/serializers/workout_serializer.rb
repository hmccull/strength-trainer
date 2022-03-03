class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :name, :duration, :active_calories, :body_weight, :date, :one_rep_max, :cores, :assistances
  
  has_one :user
  has_many :cores
  has_many :assistances
end
