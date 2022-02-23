class WorkoutSerializer < ActiveModel::Serializer
  attributes :name, :duration, :active_calories
  has_one :user
end
