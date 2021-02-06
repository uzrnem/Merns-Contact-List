import cookie from 'react-cookies'
import BaseService from '../services/BaseService'

export default class AuthToken {
  static setAuth(token) {
    cookie.save("Authorization", token, {path: "/"})
    return token
  }

  static getAuth() {
    return cookie.load("Authorization")
  }

  static removeAuth() {
    cookie.remove('Authorization', { path: '/' })
    return true
  }

  static setupToken() {
    const token = AuthToken.getAuth()
    return BaseService.setAuthorizationToken(token)
  }

  static stickToken(token) {
    AuthToken.setAuth(token)
    return BaseService.setAuthorizationToken(token)
  }

  static unstickToken() {
    AuthToken.removeAuth()
    return BaseService.deleteAuthorizationToken(token)
  }
}
