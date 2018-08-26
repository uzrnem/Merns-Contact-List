import mongoose, { Schema } from 'mongoose'

// Create Schema
const UserSchema = new Schema(
  {
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
  },
  {
    timestamps: true
  }
);
UserSchema.methods.validator = function(data) {
  const rules = {
    name : 'required|min:2|max:30',
    email : 'required|email|min:5|max:100',
    password: 'required|min:6|max:30'
  }
  return validator(data, rules)
};

let User = mongoose.model('users', UserSchema);
module.exports = User;
