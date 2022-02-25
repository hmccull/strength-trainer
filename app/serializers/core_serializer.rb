class CoreSerializer < ActiveModel::Serializer
  attributes :name, :reps, :lift_weight
  has_one :workout
end
