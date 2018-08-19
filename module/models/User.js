import mongoose, { Schema } from 'mongoose'

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
}, {timestamps: true});

const User = mongoose.model('users', UserSchema);
module.exports = mongoose.model('users', UserSchema);
