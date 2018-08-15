import React from "react"
import { connect} from "react-redux"

@connect((store) => {
  return {
    user: store.user
  };
})
class IsPermitted extends React.Component {

  render() {
    const { user } = this.props;
    let calledModule = this.props.module;
    let calledAction = this.props.action;
    let checkPermission = false;
    if (user.permissions) {
      if (user.permissions[calledModule]) {
        checkPermission = user.permissions[calledModule][calledAction];
      }
    }
  	if (checkPermission) {
  	  return this.props.children;
    } else {
  	  return null;
    }

  }
}

export default IsPermitted;