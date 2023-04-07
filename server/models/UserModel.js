const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'An user must have a name'],
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: [true, 'An user must have a name'],
    unique: true,
    trim: true
  },
  password: {
    type: String,
    unique: true
  },
  rank: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
