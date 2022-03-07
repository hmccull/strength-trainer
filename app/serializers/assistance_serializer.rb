class AssistanceSerializer < ActiveModel::Serializer
  attributes :name, :reps, :lift_weight, :core_lift
  has_one :workout
end
