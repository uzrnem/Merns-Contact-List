import {
  STARTED_FETCHING_USER,
  STARTED_ADDING_USER,
  ADDED_RESULT,
  GOT_RESULT,
  GOT_ERROR
} from "../constants/common.js"

const userReducer = (
    state = {
      model : {},
      permissions : {}
    },
    action = {
      method : {
        isAdded : false,
        takeUp : null,
        reducer : "none",
      }
    }
  ) => {
    //console.log(action)
    if ( action.method && action.method.isAdded && (
      action.method.reducer == "userReducer" || action.method.isAdded == "all"
    )) {
      return action.method.takeUp({}, state, action);
    }
    return state;
}

export default userReducer