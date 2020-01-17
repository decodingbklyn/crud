const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Messages = Schema({
  message: {
    type: String,
    required: true 
  },
  password: {
    type: String,
    required: true 
  },
  created_at: {
    type: Date,
    default: Date.now()
  },
})

module.exports = mongoose.model('Message Board', Messages);