const { ExtractJwt , Strategy } = require("passport-jwt");
const passport = require("passport");
const mongoose = require("mongoose");
const User = require('../models/User');
const {SECRET_JWT_KEY} = require('../../env');
JwtStrategy = Strategy
const opts = {
  jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey : SECRET_JWT_KEY
};

module.exports = app => {
  // Passport middleware
  app.use(passport.initialize());

  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findById(jwt_payload.id)
        .then(user => {
          if (user) {
            return done(null, user);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
