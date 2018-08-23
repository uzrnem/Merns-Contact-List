import express from 'express'
import fs from 'fs'

import indexController from '../controllers/indexController'

const router = express.Router();

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get(['/', '/login'], (req, res) => {
  indexController.loadPage(req, res, 'login.html');
}); //res.redirect('public/index.html');

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/home', (req, res) => {
  indexController.loadPage(req, res, 'home.html');
});

module.exports = router;
