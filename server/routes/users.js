import express from 'express'
import passport from 'passport'

import userController from '../controllers/userController'

const router = express.Router()

router
  .use((req, res, next) => { userController.init(req, res, next) })
  .get('/test', (req, res) => res.json({msg: 'Users Works'}))
  .post('/register', (req, res) => userController.register(req.body))
  .post('/login', (req, res) => userController.login(req.body))
  .get(
    '/current',
    passport.authenticate('jwt', {session: false}),
    (req, res) => userController.getCurrent()
  );

module.exports = router;
