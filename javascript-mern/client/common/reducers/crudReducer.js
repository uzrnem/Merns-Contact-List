import {
} from "../constants/common.js"

const crudReducer = (
    state = {
      list : [],
      notification : null,
      listCount : 0,
      model : {}
    },
    action = {
      method : {
        isAdded : false,
        takeUp : null,
        reducer : "none",
      }
    }
  ) => {
    if ( action.method && action.method.isAdded && (
      action.method.reducer == "crudReducer" || action.method.isAdded == "all"
    )) {
      return action.method.takeUp({}, state, action);
    }
    switch(action.type) {
      case 'ADD_NOTIFICATION_POPUP': {
        return Object.assign({}, state, {notification: action.payload});
        break;
      }
      case 'CLOSE_NOTIFICATION_POPUP': {
        return Object.assign({}, state, {notification: null});
        break;
      }
      case 'CLOSE_EDIT_MODEL': {
        return Object.assign({}, state, {model: null});
        break;
      }
      case 'CLEAR_LISTING_TAB': {
        return Object.assign({}, state, {listCount : 0, list: []});
        break;
      }
    }

    return state;
}

export default crudReducer