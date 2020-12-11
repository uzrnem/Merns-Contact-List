const express = require("express");
const path = require("path");

const User = require("../models/User");
const JwtVerify = require("../helper/jwtVerify");
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
