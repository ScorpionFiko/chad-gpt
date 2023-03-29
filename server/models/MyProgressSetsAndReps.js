const { Schema } = require('mongoose');

// This is a subdocument schema, it won't become its own model but we'll use it as the schema for the User's `savedworkoutAnswerss` array in User.js
const myProgressSetsAndReps = new Schema(
  {
    setId: {
      type: Number,
      required: true
      // starts from 1 and auto increments
    },
    reps: {
      type: Number,
      required: true,
      matches: /\d/
    }
  },
  {
    _id: false
  }
);

module.exports = myProgressSetsAndReps;
