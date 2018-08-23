import cookieParser from 'cookie-parser'

app.use(cookieParser())
var cookieExtractor = function(req) {
    var token = null;
    if (req && req.cookies)
    {
        token = req.cookies['Authorization'];
    }
      console.log('token: ', token)
    return token;
};
const opts = {
  jwtFromRequest : ExtractJwt.fromExtractors([cookieExtractor]),
  secretOrKey
};

router.get(['/', 'login'], function(req, res, next) {

  passport.authenticate('jwt', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) {
      indexController.loadPage(req, res, 'login.html');
      return;
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/home?msg=Already Logged In');
    });
  })(req, res, next);
});

router.get(['/home'], function(req, res, next) {
  passport.authenticate('jwt', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.redirect('/?msg=Login First'); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      indexController.loadPage(req, res, 'home.html');
      return;
    });
  })(req, res, next);
});
