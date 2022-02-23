class AssistanceSerializer < ActiveModel::Serializer
  attributes :name, :reps, :lift_weight, :core_lift, :favorite
  has_one :workout
end
