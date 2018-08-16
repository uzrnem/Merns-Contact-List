const express = require('express');
const router = express.Router();
var indexController = require('../controllers/indexController')
var fs = require('fs');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/', (req, res) => {
  indexController.loadPage(req, res, 'login.html');
}); //res.redirect('public/index.html');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get(['/home.html'], (req, res) => {
  indexController.loadPage(req, res, 'home.html');
});

module.exports = router;
