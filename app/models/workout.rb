class Workout < ApplicationRecord
  validates :name, presence: true, uniqueness: { scope: :user_id }
  
  belongs_to :user
  has_many :cores, dependent: :destroy
  has_many :assistances, dependent: :destroy

  def one_rep_max
      if (self.cores.length > 0)
         max_lift = self.cores.order(:lift_weight).last
         weight = max_lift.lift_weight
         reps = max_lift.reps
         "%.2f" % (weight / (1.0278 - (0.0278 * reps)))
      end
   end
   
end
