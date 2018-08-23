import mongoose from 'mongoose'

import { USER_NAME, PASSWORD, PORT, DATABASE, HOST} from './env'

// const mongoURI = `mongodb://${USER_NAME}:${PASSWORD}@localhost:${PORT}/${DATABASE}`
const mongoURI = `mongodb://${HOST}:${PORT}/${DATABASE}`;

// Connect to MongoDB
mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));
