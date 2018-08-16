const home = require('./home');
const users = require('./users');
const contactList = require('./contactList');
//const path = require('path');

module.exports = (app, express) => {
  app.use('/public', express.static('public'));

  app.use('/api/users', users);
  app.use('/api/contact-list', contactList);
  app.use('/', home);
};
/*

  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
*/
