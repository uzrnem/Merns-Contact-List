import React from "react"
import { NavLink } from "react-router-dom"

import { register } from "../actions/siteActions"

export default class User extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      name : '',
      email: '',
      password: '',
      password2: ''
    }
    this.handleNameInput = this.handleNameInput.bind(this);
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handlePasswordInput2 = this.handlePasswordInput2.bind(this);
    this.saveAndContinue = this.saveAndContinue.bind(this);
  }

  handleNameInput = (event) => {
    this.setState(
      {name: event.target.value}
    );
  }

  handleEmailInput = (event) => {
    this.setState(
      {email: event.target.value}
    );
  }

  handlePasswordInput = (event) => {
    this.setState(
      {password: event.target.value}
    );
  }

  handlePasswordInput2 = (event) => {
    this.setState(
      {password2: event.target.value}
    );
  }

  saveAndContinue = () => {
    console.log(this.state);
    register(this.state, (response) => {
      console.log(response)
    })
  }
  render() {
    return (
      <div>
        <form class="form-signin">
          <h1 class="h3 mb-3 font-weight-normal">Create Account</h1>
          <label for="inputName" class="sr-only">Name</label>
          <input type="name" id="inputName" class="form-control unbottom" placeholder="Name"
            required autofocus  value={this.state.name}
            onChange={this.handleNameInput} />
          <label for="inputEmail" class="sr-only">Email address</label>
          <input type="email" id="inputEmail" class="form-control untop unbottom" placeholder="Email address"
           required autofocus value={this.state.email}
           onChange={this.handleEmailInput} />
          <label for="inputPassword" class="sr-only">Password</label>
          <input type="password" id="inputPassword" class="form-control untop unbottom" placeholder="Password"
           required autofocus value={this.state.password}
           onChange={this.handlePasswordInput} />
           <input type="password" id="inputPassword2" class="form-control untop" placeholder="Password"
            required autofocus value={this.state.password2}
            onChange={this.handlePasswordInput2} />
        </form>
       <button class="btn btn-primary btn-sm mx-3" onClick={this.saveAndContinue}>Create Account</button>
       <NavLink activeClassName="active" className="nav-link mt-2" to="/login">
         Sign In
       </NavLink>
      </div>
    );
  }
}
