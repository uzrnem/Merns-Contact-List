import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Loadable from "react-loadable"
import Module from "../module/route"

export default class Container extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Module.Login}/>

        <Route path="/login" exact component={Module.Login}/>
        <Route path="/register" exact component={Module.Register}/>=
      </Switch>
    );
  }
}
