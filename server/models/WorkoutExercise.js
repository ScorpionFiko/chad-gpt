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
    type: Number,
    required: false,
    default: 0
  },
  reps: {
    type: Number,
    required: false,
    default: 0
  },
  secondsRest: {
    type: Number,
    required: false,
    default: 0
  },
  minutesDuration: {
    type: Number,
    required: false,
    default: 0
  },
  intensity: { 
    type: String,
    required: false,
  }
});

module.exports = workoutExerciseSchema;
