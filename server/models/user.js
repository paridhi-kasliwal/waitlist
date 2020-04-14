const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  referralCount: {
    type: Number,
    required: true
  },
  position: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('User', UserSchema);
