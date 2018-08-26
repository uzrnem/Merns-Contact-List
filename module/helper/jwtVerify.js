import { Strategy as JwtStrategy } from 'passport-jwt'

import User from '../models/User'
import { SECRET_JWT_KEY } from '../../env'


module.exports = (request, tokenVerified, tokenExpired, tokenNotFound) => {
  let token = null
  if (request && request.cookies) {
    let newToken = request.cookies['Authorization'];
    if (newToken && newToken.split(' ')[0] === 'Bearer') { // Authorization: Bearer somthing
      // Handle token as Bearer token in the Authorization cookie
      token = newToken.split(' ')[1];
    }
  }
  if (token == null) {
    tokenNotFound();
  } else {
    const opts = {
      jwtFromRequest : token,
      secretOrKey : SECRET_JWT_KEY
    };
    JwtStrategy.JwtVerifier(token, SECRET_JWT_KEY, opts, function(jwt_err, payload) {
      if (jwt_err) {
        tokenExpired();
      } else {
        tokenVerified(payload);
      }
    });
  }
}
