//require mongoose from node modules 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messages = Schema({
  message: {
    type: String
  },
  password: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
})

module.exports = mongoose.model('Message Board', messages);