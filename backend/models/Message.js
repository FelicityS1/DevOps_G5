const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    trim: true,
    maxlength: 5000
  },
  sender: {
    type: String,
    required: true,
    enum: ['user', 'ai']
  },
  sessionId: {
    type: String,
    required: true,
    index: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

messageSchema.index({ sessionId: 1, timestamp: 1 });

module.exports = mongoose.model('Message', messageSchema);