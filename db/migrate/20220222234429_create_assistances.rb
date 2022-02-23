class CreateAssistances < ActiveRecord::Migration[6.1]
  def change
    create_table :assistances do |t|
      t.string :name
      t.integer :reps
      t.integer :lift_weight
      t.string :core_lift
      t.boolean :favorite
      t.belongs_to :workout, null: false, foreign_key: true

      t.timestamps
    end
  end
end
