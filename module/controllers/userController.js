import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {secretOrKey, TOKEN_EXPIRATION_TIME} from '../../config/env'
import validateRegisterInput from '../validation/register'
import validateLoginInput from '../validation/login'
import user from '../models/User'
import BaseController from '../controllers/baseController'

class UserController extends BaseController {
  constructor() {
    super()
  }

  getCurrent() {
    this.sendSuccessResponse(
      this.payload(true, 'success', 'read success', {
        id: this.request.user.id,
        name: this.request.user.name,
        email: this.request.user.email
      }, [])
    )
  }

  login(data) {
    const {errors, isValid} = validateLoginInput(data);

    // Check Validation
    if (!isValid) {
      return this.sendErrorResponse(this.payload(true, 'warning', 'Validation Errors', [], errors));
    }
    const email = data.email;
    const password = data.password;
    // Find user by email
    this.model.findOne({email}).then(user => {
      console.log('user===========> ', user);
      // Check for user
      if (!user) {
        errors.email = 'User not found';
        return this.sendNotFoundResponse(this.payload(true, 'danger', errors.email, [], errors));
      }
      // Check Password
      bcrypt.compare(password, user.password).then(isMatch => {
        if (isMatch) {
          // User Matched
          const payload = {id: user.id, name: user.name}; // Create JWT Payload
          // Sign Token
          jwt.sign(
            payload,
            secretOrKey,
            {expiresIn: TOKEN_EXPIRATION_TIME},
            (err, token) => {
              user.password = null;
              this.response.json({
                success: true,
                token: 'Bearer ' + token,
                user: user
              });
            }
          );
        } else {
          errors.password = 'Password incorrect';
          return this.sendErrorResponse(this.payload(true, 'warning', errors.password, [], errors));
        }
      });
    }).catch(err => {
      console.log('err----', err)
      err = 'Login failed.';
      return this.sendErrorResponse(this.payload(false, 'danger', err, [], 'Unknown Error'));
    })
  }

  register(data) {
    const {errors, isValid} = validateRegisterInput(data);
    // Check Validation
    if (!isValid) {
      return this.sendErrorResponse(this.payload(true, 'warning', 'Validation Errors', [], errors));
    }
    this.model.findOne({email: data.email}).then(
      user => {
        if (user) {
          errors.email = 'Email already exists';
          return this.sendErrorResponse(this.payload(true, 'warning', errors.email, [], errors));
        } else {
          const newUser = new this.model({
            name: data.name,
            email: data.email,
            password: data.password
          });
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  return this.sendSuccessResponse(this.payload(true, 'success', 'User created', user));
                })
                .catch(err => console.log(err));
            });
          });
        }
      }
    );
  }
}

const controller = new UserController();
controller.setModel(user);
module.exports = controller;
