const mongoose = require('mongoose');

const { Schema } = mongoose;


const workoutExerciseSchema = new Schema({
  exerciseName: {
    type: String,
    required: false,
    trim: true
  },
  exerciseType: {
    type: String,
    required: false,
    trim: true
  },
  sets: {
    type: String,
    required: false,
    default: 0
  },
  reps: {
    type: String,
    required: false,
    default: 0
  },
  secondsRest: {
    type: String,
    required: false,
    default: 0
  },
  minutesDuration: {
    type: String,
    required: false,
    default: 0
  },
  intensity: { 
    type: String,
    required: false,
  }
});

module.exports = workoutExerciseSchema;
