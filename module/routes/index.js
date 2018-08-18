import home from './home'
import users from './users'
import contactList from './contactList'

module.exports = (app, express) => {
  app.use('/public', express.static('public'));

  app.use('/api/users', users);
  app.use('/api/contact-list', contactList);
  app.use('/', home);
};
/*  // Set static folder
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
*/
