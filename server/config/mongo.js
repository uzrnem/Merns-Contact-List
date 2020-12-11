const mongoose = require("mongoose");

const { HOST, PORT, DATABASE } = require('../../env');

// const mongoURI = `mongodb://${USER_NAME}:${PASSWORD}@localhost:${PORT}/${DATABASE}`
//const mongoURI = `mongodb://${HOST}:${PORT}/${DATABASE}`;
const mongoURI = `mongodb://localhost:2717/test`;


// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
