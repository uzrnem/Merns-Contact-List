import express from 'express'
import path from 'path'

import User from '../models/User'
import JwtVerify from '../helper/jwtVerify'
const router = express.Router();

router
  .get(['/', '/login'], (req, res) => {
    JwtVerify( req,
      (payload) => res.redirect('/home?msg=You are logged in'),
      () => res.sendFile(path.resolve(__dirname + "/../../pages/login.html")),
      () => res.sendFile(path.resolve(__dirname + "/../../pages/login.html"))
    );
  })
  .get('/home', (req, res, next) => {
    JwtVerify( req,
      (payload) => res.sendFile(path.resolve(__dirname + "/../../pages/home.html")),
      () => res.redirect('/login?msg=Token Expired'),
      () => res.redirect('/login?msg=Login First')
    );
  });

module.exports = router;
