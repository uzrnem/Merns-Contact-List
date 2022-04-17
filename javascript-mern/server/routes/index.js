const home = require("./home");
const users = require("./users");
const contactList = require('./contactList');

module.exports = (app, express) => {
  app.use('/public', express.static('public'));

  app.use('/api/users', users);
  app.use('/api/contact-list', contactList);
  app.use('/', home);
};
