const express = require("express");

const app = express();

require('./server/config/bodyParser')(app); // body Parser Config for Request Body
require('./server/config/mongo') // MongoDB DB Config
require('./server/config/passport')(app); // Passport Config

require('./server/routes/index')(app, express); // Use Routes

// Server static assets if in production
if (process.env.NODE_ENV === 'production') {}

// Handle 404 error. The last middleware.
app.use("*",function(req,res){
  res.sendFile(__dirname + "/pages/404.html");
});

app.use(function (err, req, res, next) {
  console.error(err)
  res.status(500).send('Something broke!')
})

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
