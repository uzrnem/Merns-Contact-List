import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'

module.exports = (app) => {
  // Body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser())
}
