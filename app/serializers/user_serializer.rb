class UserSerializer < ActiveModel::Serializer
  attributes :username, :workouts
  has_many :workouts
end
