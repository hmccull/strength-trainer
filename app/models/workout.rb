class Workout < ApplicationRecord
  belongs_to :user
  has_many :cores
  has_many :assistances
end
