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
  frontend: {
    type: Boolean,
    default: false
  },
  backend: {
    type: Boolean,
    default: false
  },
  frontendAndBackend: {
    type: Boolean,
    default: false
  },
  framework: {
    type: [String]
  },
  familiarProgramingLanguages: {
    type: [String]
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
