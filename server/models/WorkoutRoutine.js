const mongoose = require('mongoose');

const { Schema } = mongoose;
const workoutExerciseSchema = require('./WorkoutExercise');

const workoutRoutineSchema = new Schema(
  {
    day: {
      type: String,
      required: false,
      unique: false
    },
    exercises: [workoutExerciseSchema]
  },
  { collection: 'workoutroutines' });

module.exports = workoutRoutineSchema;
