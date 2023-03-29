const mongoose = require('mongoose');
const workoutAnswerSchema = require('./WorkoutAnswers');
const { Schema } = mongoose;

const workoutQuestions = new Schema({
  question: {
    type: String,
    required: true,
    trim: true
  },
  answerType: {
    type: String,
    required: true
    // possible answerTypes: 
    // input: user input value
    // select: dropdown box
    // multiple: dropdown box with multiple selections

  },
  validation: {
    type: String,
    required: false
    // regex for validating input
  },
  answers: [workoutAnswerSchema]
},
{ collection: 'workoutquestions' });

const WorkoutQuestions = mongoose.model('WorkoutQuestions', workoutQuestions);

module.exports = WorkoutQuestions;
