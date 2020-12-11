const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

module.exports = (app) => {
  // Body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser())
}
