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
  isManager: {
    type: Boolean,
    default: false
  },
  age: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  subordinates: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'User'
  },
  yearsOfExperience: {
    type: Number
  },
  techStack: {
    type: String,
    enum: ['FRONTEND', 'BACKEND', 'BOTH']
  },
  frameworks: {
    type: [String]
  },
  comStyle: {
    type: String
  },
  teams: {
    type: String
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
