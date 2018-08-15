const errorHandler = (store) => (next) => (action) => {
  try {
  	return next(action)
  } catch(e) {
  	console.error("In Middleware: ERROR!", action, e)
  }
}

export default errorHandler;