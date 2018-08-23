import express from 'express'
import passport from 'passport'

import userController from '../controllers/userController'

const router = express.Router()

// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'Users Works'}));

// @route   PUT api/users/register
// @desc    Register user
// @access  Public
router.post(
  '/register',
  (req, res) => {
    userController.init(req, res)
    userController.register(req.body)
  }
);

// @route   POST api/users/login
// @desc    Login User / Returning JWT Token
// @access  Public
router.post('/login', (req, res) => {
  userController.init(req, res)
  userController.login(req.body)
});

// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get(
  '/current',
  passport.authenticate('jwt', {session: false}),
  (req, res) => {
    userController.init(req, res)
    userController.getCurrent()
  }
);

module.exports = router;
