import { ExtractJwt , Strategy as JwtStrategy } from 'passport-jwt'
import passport from 'passport'
import mongoose from 'mongoose'

import User from '../models/User'
import {SECRET_JWT_KEY} from '../../env'

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
