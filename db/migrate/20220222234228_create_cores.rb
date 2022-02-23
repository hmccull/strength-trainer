class CreateCores < ActiveRecord::Migration[6.1]
  def change
    create_table :cores do |t|
      t.string :name
      t.integer :reps
      t.integer :lift_weight
      t.integer :body_weight
      t.integer :one_rep_max
      t.belongs_to :workout, null: false, foreign_key: true

      t.timestamps
    end
  end
end
