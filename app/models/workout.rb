class Workout < ApplicationRecord
  belongs_to :user
  has_many :cores, dependent: :destroy
  has_many :assistances, dependent: :destroy
end
