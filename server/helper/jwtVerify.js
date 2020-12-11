const { Strategy }  = require("passport-jwt");
const User = require("../models/User");
const { SECRET_JWT_KEY } = require('../../env');
JwtStrategy = Strategy
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
