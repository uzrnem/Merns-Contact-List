const mongoose = require('mongoose');

const env = require('./env');

mongoURI = 'mongodb://' + env.USER_NAME + ':' + env.PASSWORD + '@localhost:' + env.PORT + '/' + env.DATABASE

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
