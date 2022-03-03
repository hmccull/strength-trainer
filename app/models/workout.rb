class Workout < ApplicationRecord
  validates :name, presence: true, uniqueness: { scope: :user_id }
  
  belongs_to :user
  has_many :cores, dependent: :destroy
  has_many :assistances, dependent: :destroy
end
