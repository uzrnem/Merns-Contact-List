import React from "react"
import { NavLink } from "react-router-dom"
import Form from "react-jsonschema-form"
import cookie from 'react-cookies'

import AuthToken from '../../../common/lib/AuthToken'
import { login } from "../actions/siteActions"

export default class Login extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      schema : {
        "title": "Login",
        "type": "object",
        "required": [
          "email",
          "password"
        ],
        "properties": {
          "email": {
            "type": "string",
            "title": "Email Address"
          },
          "password": {
            "type": "string",
            "title": "Password",
            "minLength": 6
          }
        }
      },
      uiSchema : {
        "password" : {
          "ui:widget" : "password"
        }
      },
      formData : {}
    }
  }

  onSubmit({formData}) {
    login(formData,
      (response) => {
      console.log(response.data)
        const token = response.data.token
        AuthToken.stickToken(token)
        window.location = "home";
      },
      (err) => { console.error(err) }
    );
  }

  render() {
    const onError = (errors) => console.log("I have", errors.length, "errors to fix");
    return (
      <div>
        <Form schema={this.state.schema}
          onSubmit={this.onSubmit}
          onError={onError} />
      </div>
    );
  }
}
