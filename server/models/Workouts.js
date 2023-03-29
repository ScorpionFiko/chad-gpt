const mongoose = require('mongoose');

const { Schema } = mongoose;
const WorkoutRoutine = require('./WorkoutRoutine');

const workoutsSchema = new Schema({
  workoutName: {
    type: String,
    required: false,
    trim: true
  },
  dateCreated: {
    type: Date,
    required: false,
    default: Date.now
  },
  routine: [WorkoutRoutine],
},
{ collection: 'workouts' });



const Workouts = mongoose.model('Workouts', workoutsSchema);

module.exports = Workouts;
