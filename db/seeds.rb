# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Seeding users..."

u1 = User.create!(username: "ghost", password: "ghost")
u2 = User.create!(username: "brock", password: "brock")

puts "Seeding workouts..."

w1 = Workout.create!(name: "Bench", duration: 67, active_calories: 288, body_weight: 125, date: DateTime.new(2022, 2, 23), user_id: u1.id)
w2 = Workout.create!(name: "Squats", duration: 78, active_calories: 365, body_weight: 127, date: DateTime.new(2022, 2, 21), user_id: u1.id)
w3 = Workout.create!(name: "Shoulders", duration: 67, active_calories: 288, body_weight: 123, date: DateTime.new(2022, 2, 24), user_id: u1.id)
w4 = Workout.create!(name: "deads", duration: 75, active_calories: 398, body_weight: 125, date: DateTime.new(2022, 2, 22), user_id: u1.id)


# w5 = Workout.create!(name: "deads", duration: 101, active_calories: 400, date: DateTime.new(2022, 2, 22), user_id: u2.id)
# w6 = Workout.create!(name: "shoulders", duration: 87, active_calories: 385, date: DateTime.new(2022, 2, 21), user_id: u2.id)

puts "Seeding cores..."

c4 = Core.create!(name: "bench", reps: 10, lift_weight: 45, workout_id: w1.id)
c5 = Core.create!(name: "bench", reps: 8, lift_weight: 55, workout_id: w1.id)
c6 = Core.create!(name: "bench", reps: 6, lift_weight: 65, workout_id: w1.id)

c7 = Core.create!(name: "squat", reps: 10, lift_weight: 45, workout_id: w2.id)
c8 = Core.create!(name: "squat", reps: 8, lift_weight: 55, workout_id: w2.id)
c9 = Core.create!(name: "squat", reps: 6, lift_weight: 65, workout_id: w2.id)

c7 = Core.create!(name: "shoulder press", reps: 10, lift_weight: 45, workout_id: w3.id)
c8 = Core.create!(name: "shoulder press", reps: 8, lift_weight: 55, workout_id: w3.id)
c9 = Core.create!(name: "shoulder press", reps: 6, lift_weight: 65, workout_id: w3.id)

c10 = Core.create!(name: "deadlift", reps: 10, lift_weight: 45, workout_id: w4.id)
c11 = Core.create!(name: "deadlift", reps: 8, lift_weight: 55, workout_id: w4.id)
c12 = Core.create!(name: "deadlift", reps: 6, lift_weight: 65, workout_id: w4.id)

# --------------------------------------

c1 = Core.create!(name: "deadlift", reps: 5, lift_weight: 115, workout_id: w4.id)
c2 = Core.create!(name: "deadlift", reps: 5, lift_weight: 130, workout_id: w4.id)
c3 = Core.create!(name: "deadlift", reps: 15, lift_weight: 150, workout_id: w4.id)

puts "Seeding assistance..."

a1 = Assistance.create!(name: "push-ups", reps: 10, lift_weight: 10, favorite: true, core_lift: "bench", workout_id: w1.id)
a2 = Assistance.create!(name: "cable flys", reps: 10, lift_weight: 13, favorite: false, core_lift: "bench", workout_id: w1.id)
a3 = Assistance.create!(name: "dips", reps: 10, lift_weight: -20, favorite: true, core_lift: "bench", workout_id: w1.id)

a4 = Assistance.create!(name: "pull-ups", reps: 10, lift_weight: -40, favorite: true, core_lift: "dealift", workout_id: w4.id)
a5 = Assistance.create!(name: "back extensions", reps: 10, lift_weight: 25, favorite: true, core_lift: "deadlift", workout_id: w4.id)
a6 = Assistance.create!(name: "single arm landmine row", reps: 10, lift_weight: 10, favorite: false, core_lift: "deadlift", workout_id: w4.id)
