import React from "react"
import { NavLink } from "react-router-dom"

//import { getList, deleteItem, getItem, addItem, editItem, getProfileCodes } from "./userActions"

export default class User extends React.Component {

  constructor(props) {
    super(props)
  }
/*
  getProfileOptions() {
    getProfileCodes(
      (response) => {
        this.profileCodes = response.data.data
        this.setState({modelKeys: this.getModelKeys()})
      }
    );
  }
*/
  render() {
    return (
      <div>
        <form class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control unbottom" placeholder="Email address" required autofocus />
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control untop" placeholder="Password" required />
          <div class="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <a class="btn btn-lg btn-primary btn-block" href="home.html">Sign in</a>
          <NavLink activeClassName="active" className="nav-link mt-2" to="/register">
            Create Account
          </NavLink>
        </form>
      </div>
    );
  }
}
