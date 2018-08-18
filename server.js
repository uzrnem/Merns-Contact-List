import express from 'express'

const app = express();

require('./config/bodyParser')(app); // body Parser Config for Request Body
import './config/mongo' // MongoDB DB Config
require('./config/passport')(app); // Passport Config

require('./module/routes/index')(app, express); // Use Routes

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {}

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
