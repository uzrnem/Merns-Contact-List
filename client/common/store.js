import { applyMiddleware, createStore } from "redux"
//import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import reducer from "../reducers/index"
import loggerMlwr from "../middleware/logger"
import errorHandlerMlwr from "../middleware/errorHandler"

const middleware = applyMiddleware(promise(), thunk, loggerMlwr, errorHandlerMlwr) //, logger())

export default createStore(reducer, middleware)