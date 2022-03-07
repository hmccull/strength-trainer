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

w1 = Workout.create!(name: "Bench", duration: 67, active_calories: 288, body_weight: 125, date: DateTime.new(2022, 2, 27), user_id: u1.id)
w2 = Workout.create!(name: "Squats", duration: 78, active_calories: 365, body_weight: 127, date: DateTime.new(2022, 2, 28), user_id: u1.id)
w3 = Workout.create!(name: "Shoulders", duration: 67, active_calories: 288, body_weight: 123, date: DateTime.new(2022, 3, 1), user_id: u1.id)
w4 = Workout.create!(name: "Deads", duration: 75, active_calories: 398, body_weight: 125, date: DateTime.new(2022, 3, 2), user_id: u1.id)
w5 = Workout.create!(name: "Didn't have fun", duration: 79, active_calories: 398, body_weight: 125, date: DateTime.new(2022, 3, 4), user_id: u1.id)
w6 = Workout.create!(name: "Ate a lot of bad food", duration: 82, active_calories: 450, body_weight: 128, date: DateTime.new(2022, 3, 7), user_id: u1.id)
w7 = Workout.create!(name: "Shoulder Deload", duration: 81, active_calories: 212, body_weight: 124, date: DateTime.new(2022, 3, 6), user_id: u1.id)
w8 = Workout.create!(name: "Deads Deload", duration: 81, active_calories: 248, body_weight: 123, date: DateTime.new(2022, 3, 5), user_id: u1.id)

puts "Seeding cores..."

Core.create!(name: "bench", reps: 10, lift_weight: 45, workout_id: w1.id)
Core.create!(name: "bench", reps: 8, lift_weight: 55, workout_id: w1.id)
Core.create!(name: "bench", reps: 6, lift_weight: 65, workout_id: w1.id)

Core.create!(name: "squat", reps: 10, lift_weight: 95, workout_id: w2.id)
Core.create!(name: "squat", reps: 8, lift_weight: 105, workout_id: w2.id)
Core.create!(name: "squat", reps: 6, lift_weight: 115, workout_id: w2.id)

Core.create!(name: "shoulder press", reps: 10, lift_weight: 45, workout_id: w3.id)
Core.create!(name: "shoulder press", reps: 8, lift_weight: 50, workout_id: w3.id)
Core.create!(name: "shoulder press", reps: 6, lift_weight: 55, workout_id: w3.id)

Core.create!(name: "deadlift", reps: 10, lift_weight: 135, workout_id: w4.id)
Core.create!(name: "deadlift", reps: 8, lift_weight: 155, workout_id: w4.id)
Core.create!(name: "deadlift", reps: 6, lift_weight: 175, workout_id: w4.id)

Core.create!(name: "bench", reps: 10, lift_weight: 50, workout_id: w5.id)
Core.create!(name: "bench", reps: 8, lift_weight: 60, workout_id: w5.id)
Core.create!(name: "bench", reps: 6, lift_weight: 70, workout_id: w5.id)

Core.create!(name: "squat", reps: 10, lift_weight: 105, workout_id: w6.id)
Core.create!(name: "squat", reps: 8, lift_weight: 115, workout_id: w6.id)
Core.create!(name: "squat", reps: 6, lift_weight: 125, workout_id: w6.id)

Core.create!(name: "shoulder press", reps: 10, lift_weight: 50, workout_id: w7.id)
Core.create!(name: "shoulder press", reps: 8, lift_weight: 55, workout_id: w7.id)
Core.create!(name: "shoulder press", reps: 6, lift_weight: 65, workout_id: w7.id)

Core.create!(name: "deadlift", reps: 10, lift_weight: 145, workout_id: w8.id)
Core.create!(name: "deadlift", reps: 8, lift_weight: 165, workout_id: w8.id)
Core.create!(name: "deadlift", reps: 6, lift_weight: 185, workout_id: w8.id)

puts "Seeding assistance..."

Assistance.create!(name: "push-ups", reps: 10, lift_weight: 0, core_lift: "bench", workout_id: w1.id)
Assistance.create!(name: "push-ups", reps: 10, lift_weight: 0, core_lift: "bench", workout_id: w1.id)
Assistance.create!(name: "push-ups", reps: 10, lift_weight: 0, core_lift: "bench", workout_id: w1.id)

Assistance.create!(name: "cable flys", reps: 10, lift_weight: 10, core_lift: "bench", workout_id: w1.id)
Assistance.create!(name: "cable flys", reps: 10, lift_weight: 15, core_lift: "bench", workout_id: w1.id)
Assistance.create!(name: "cable flys", reps: 10, lift_weight: 20, core_lift: "bench", workout_id: w1.id)

Assistance.create!(name: "dips", reps: 10, lift_weight: -20, core_lift: "bench", workout_id: w1.id)
Assistance.create!(name: "dips", reps: 10, lift_weight: -10, core_lift: "bench", workout_id: w1.id)
Assistance.create!(name: "dips", reps: 10, lift_weight: 0, core_lift: "bench", workout_id: w1.id)

Assistance.create!(name: "leg press", reps: 10, lift_weight: 110, core_lift: "squat", workout_id: w2.id)
Assistance.create!(name: "leg press", reps: 10, lift_weight: 130, core_lift: "squat", workout_id: w2.id)
Assistance.create!(name: "leg press", reps: 10, lift_weight: 150, core_lift: "squat", workout_id: w2.id)

Assistance.create!(name: "lunges", reps: 20, lift_weight: 20, core_lift: "squat", workout_id: w2.id)
Assistance.create!(name: "lunges", reps: 20, lift_weight: 20, core_lift: "squat", workout_id: w2.id)
Assistance.create!(name: "lunges", reps: 20, lift_weight: 20, core_lift: "squat", workout_id: w2.id)

Assistance.create!(name: "kickbacks", reps: 10, lift_weight: 30, core_lift: "squat", workout_id: w2.id)
Assistance.create!(name: "kickbacks", reps: 8, lift_weight: 35, core_lift: "squat", workout_id: w2.id)
Assistance.create!(name: "kickbacks", reps: 6, lift_weight: 40, core_lift: "squat", workout_id: w2.id)

Assistance.create!(name: "military press", reps: 10, lift_weight: 20, core_lift: "shoulder press", workout_id: w3.id)
Assistance.create!(name: "military press", reps: 8, lift_weight: 30, core_lift: "shoulder press", workout_id: w3.id)
Assistance.create!(name: "military press", reps: 8, lift_weight: 40, core_lift: "shoulder press", workout_id: w3.id)

Assistance.create!(name: "db lat raises", reps: 10, lift_weight: 10, core_lift: "shoulder press", workout_id: w3.id)
Assistance.create!(name: "db lat raises", reps: 10, lift_weight: 10, core_lift: "shoulder press", workout_id: w3.id)
Assistance.create!(name: "db lat raises", reps: 8, lift_weight: 15, core_lift: "shoulder press", workout_id: w3.id)

Assistance.create!(name: "cable high pulls", reps: 10, lift_weight: 80, core_lift: "shoulder press", workout_id: w3.id)
Assistance.create!(name: "cable high pulls", reps: 8, lift_weight: 85, core_lift: "shoulder press", workout_id: w3.id)
Assistance.create!(name: "cable high pulls", reps: 6, lift_weight: 90, core_lift: "shoulder press", workout_id: w3.id)

Assistance.create!(name: "pull-ups", reps: 10, lift_weight: -40, core_lift: "dealift", workout_id: w4.id)
Assistance.create!(name: "pull-ups", reps: 8, lift_weight: -30, core_lift: "dealift", workout_id: w4.id)
Assistance.create!(name: "pull-ups", reps: 6, lift_weight: -20, core_lift: "dealift", workout_id: w4.id)

Assistance.create!(name: "back extensions", reps: 10, lift_weight: 25, core_lift: "deadlift", workout_id: w4.id)
Assistance.create!(name: "back extensions", reps: 10, lift_weight: 25, core_lift: "deadlift", workout_id: w4.id)
Assistance.create!(name: "back extensions", reps: 10, lift_weight: 25, core_lift: "deadlift", workout_id: w4.id)

Assistance.create!(name: "single arm landmine row", reps: 10, lift_weight: 10, core_lift: "deadlift", workout_id: w4.id)
Assistance.create!(name: "single arm landmine row", reps: 8, lift_weight: 15, core_lift: "deadlift", workout_id: w4.id)
Assistance.create!(name: "single arm landmine row", reps: 6, lift_weight: 20, core_lift: "deadlift", workout_id: w4.id)

Assistance.create!(name: "push-ups", reps: 10, lift_weight: 0, core_lift: "bench", workout_id: w5.id)
Assistance.create!(name: "push-ups", reps: 10, lift_weight: 0, core_lift: "bench", workout_id: w5.id)
Assistance.create!(name: "push-ups", reps: 10, lift_weight: 0, core_lift: "bench", workout_id: w5.id)

Assistance.create!(name: "cable flys", reps: 10, lift_weight: 10, core_lift: "bench", workout_id: w5.id)
Assistance.create!(name: "cable flys", reps: 10, lift_weight: 15, core_lift: "bench", workout_id: w5.id)
Assistance.create!(name: "cable flys", reps: 10, lift_weight: 20, core_lift: "bench", workout_id: w5.id)

Assistance.create!(name: "dips", reps: 10, lift_weight: -20, core_lift: "bench", workout_id: w5.id)
Assistance.create!(name: "dips", reps: 10, lift_weight: -10, core_lift: "bench", workout_id: w5.id)
Assistance.create!(name: "dips", reps: 10, lift_weight: 0, core_lift: "bench", workout_id: w5.id)

Assistance.create!(name: "leg press", reps: 10, lift_weight: 110, core_lift: "squat", workout_id: w6.id)
Assistance.create!(name: "leg press", reps: 10, lift_weight: 130, core_lift: "squat", workout_id: w6.id)
Assistance.create!(name: "leg press", reps: 10, lift_weight: 150, core_lift: "squat", workout_id: w6.id)

Assistance.create!(name: "lunges", reps: 20, lift_weight: 20, core_lift: "squat", workout_id: w6.id)
Assistance.create!(name: "lunges", reps: 20, lift_weight: 20, core_lift: "squat", workout_id: w6.id)
Assistance.create!(name: "lunges", reps: 20, lift_weight: 20, core_lift: "squat", workout_id: w6.id)

Assistance.create!(name: "kickbacks", reps: 10, lift_weight: 30, core_lift: "squat", workout_id: w6.id)
Assistance.create!(name: "kickbacks", reps: 8, lift_weight: 35, core_lift: "squat", workout_id: w6.id)
Assistance.create!(name: "kickbacks", reps: 6, lift_weight: 40, core_lift: "squat", workout_id: w6.id)

Assistance.create!(name: "military press", reps: 10, lift_weight: 20, core_lift: "shoulder press", workout_id: w7.id)
Assistance.create!(name: "military press", reps: 8, lift_weight: 30, core_lift: "shoulder press", workout_id: w7.id)
Assistance.create!(name: "military press", reps: 8, lift_weight: 40, core_lift: "shoulder press", workout_id: w7.id)

Assistance.create!(name: "db lat raises", reps: 10, lift_weight: 10, core_lift: "shoulder press", workout_id: w7.id)
Assistance.create!(name: "db lat raises", reps: 10, lift_weight: 10, core_lift: "shoulder press", workout_id: w7.id)
Assistance.create!(name: "db lat raises", reps: 8, lift_weight: 15, core_lift: "shoulder press", workout_id: w7.id)

Assistance.create!(name: "cable high pulls", reps: 10, lift_weight: 80, core_lift: "shoulder press", workout_id: w7.id)
Assistance.create!(name: "cable high pulls", reps: 8, lift_weight: 85, core_lift: "shoulder press", workout_id: w7.id)
Assistance.create!(name: "cable high pulls", reps: 6, lift_weight: 90, core_lift: "shoulder press", workout_id: w7.id)

Assistance.create!(name: "pull-ups", reps: 10, lift_weight: -40, core_lift: "dealift", workout_id: w8.id)
Assistance.create!(name: "pull-ups", reps: 8, lift_weight: -30, core_lift: "dealift", workout_id: w8.id)
Assistance.create!(name: "pull-ups", reps: 6, lift_weight: -20, core_lift: "dealift", workout_id: w8.id)

Assistance.create!(name: "back extensions", reps: 10, lift_weight: 25, core_lift: "deadlift", workout_id: w8.id)
Assistance.create!(name: "back extensions", reps: 10, lift_weight: 25, core_lift: "deadlift", workout_id: w8.id)
Assistance.create!(name: "back extensions", reps: 10, lift_weight: 25, core_lift: "deadlift", workout_id: w8.id)

Assistance.create!(name: "single arm landmine row", reps: 10, lift_weight: 10, core_lift: "deadlift", workout_id: w8.id)
Assistance.create!(name: "single arm landmine row", reps: 8, lift_weight: 15, core_lift: "deadlift", workout_id: w8.id)
Assistance.create!(name: "single arm landmine row", reps: 6, lift_weight: 20, core_lift: "deadlift", workout_id: w8.id)
