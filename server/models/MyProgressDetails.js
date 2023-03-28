const mongoose = require('mongoose');
const myProgressSetsAndReps = require('./MyProgressSetsAndReps');
const { Schema } = mongoose;

const myProgressDetails = new Schema({
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  workoutId: {
    type: Schema.Types.ObjectId,
    required: false,
  },
  exercises: [{
    exersieId: {
      type: Schema.Types.ObjectId,
      required: false,  
    },
    sets: [myProgressSetsAndReps]
  }],

});

const MyProgressDetails = mongoose.model('MyProgress', myProgressDetails);

module.exports = MyProgressDetails;
