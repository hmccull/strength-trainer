class Assistance < ApplicationRecord
  validates :name, presence: true
  validates :lift_weight, presence: true
  validates :reps, presence: true
  
  belongs_to :workout
end
