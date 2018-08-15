const logger = (store) => (next) => (action) => {
  //console.log("In Middleware: Logged going throw me", action)
  let data = next(action)
  //console.log ("In Middleware: Logged returning throw me", store)
  return data;
}

export default logger;