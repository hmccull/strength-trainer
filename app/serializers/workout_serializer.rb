class WorkoutSerializer < ActiveModel::Serializer
  attributes :name, :duration, :active_calories, :body_weight, :date, :cores, :assistances
  has_one :user
  has_many :cores
  has_many :assistances
end
