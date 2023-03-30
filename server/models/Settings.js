const mongoose = require('mongoose');

const { Schema } = mongoose;

const settings = new Schema(
  {
      key: {
        type: String,
        required: false,
        unique: false
      },
      value: {
        type: String,
        required: false,
        unique: false
      }

  },
  { collection: 'settings' });

  const Settings = mongoose.model('Settings', settings);

  module.exports = Settings;
