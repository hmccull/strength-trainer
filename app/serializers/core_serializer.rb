class CoreSerializer < ActiveModel::Serializer
  attributes :name, :reps, :lift_weight, :body_weight, :one_rep_max
  has_one :workout
end
