import { combineReducers } from "redux"

import userReducer from "./userReducer"
import crudReducer from "./crudReducer"

const reducers = combineReducers({
  user: userReducer,
  crud: crudReducer,
})

export default reducers