const mongoose = require('mongoose');
const MessageSchema = require('./MessageModel');

const TeamSchema = new mongoose.Schema({
  ProjectName: {
    type: String,
    required: [true, 'A team must have a project Name'],
    trim: [true]
  },
  Description: {
    type: String
  },
  Members: {
    type: Array,
    required: [true, 'A tram must have members']
  },
  Messages: {
    type: [Object]
  }
});
const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
