const mongoose = require('mongoose');
const { Schema } = mongoose;

const workoutQuestions = new Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  fieldType: {
    type: String,
    required: true
    // possible fieldTypes: 
    // text: user free form input
    // textarea: long form user free form input
    // range: min and max value
    // select: dropdown box
    // multiple: dropdown box with multiple selections

  },
  validation: {
    type: String,
    required: false
    // regex for validating text and text area
  },
  minValue: {
    type: String,
    required: false
    // min value for range input
  },
  maxValue: {
    type: String,
    required: false
    // max value for range input
  },
  stepValue: {
    type: String,
    required: false
    // step value for slider for range input
  },
  optionValues: [{
    type: String,
    required: false
    // option values for select input boxes
  }],
  fieldName: {
    type: String,
    required:true
    //name of the field
  }
},
{ collection: 'workoutquestions' });

const WorkoutQuestions = mongoose.model('WorkoutQuestions', workoutQuestions);

module.exports = WorkoutQuestions;
