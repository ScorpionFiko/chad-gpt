const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedworkoutAnswerss` array in User.js
const workoutAnswersSchema = new Schema({

  answer: {
    type: String,
    required: true
  },
});

module.exports = workoutAnswersSchema;
