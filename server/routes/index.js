import home from './home'
import users from './users'
import contactList from './contactList'

module.exports = (app, express) => {
  app.use('/public', express.static('public'));

  app.use('/api/users', users);
  app.use('/api/contact-list', contactList);
  app.use('/', home);
};
