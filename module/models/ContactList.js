const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ContactListSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ContactList = mongoose.model('contact_list', ContactListSchema);
