import bodyParser from 'body-parser'

module.exports = (app) => {
  // Body parser middleware
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
}
