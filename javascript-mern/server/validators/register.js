const { validator }   = require("smooth-validator");

module.exports = function validateRegisterInput(data) {
  const rules = {
    name : 'required|min:2|max:30',
    email : 'required|email|min:5|max:100',
    password: 'required|min:6|max:30',
    password2: 'required|min:6|max:30'
  }
  let {success, message, errors } = validator(data, rules)
  if ( data.password && data.password2 && (data.password != data.password2 || data.password != data.password2)) {
    if (success) {
      success = false;
      message = 'password 1 and password 2 are not maching';
      errors.push({ key: 'password', message})
    } else {
      const msg = 'password 1 and password 2 are not maching';
      errors.push({ key: 'password', msg})
    }
  }
  return {success, message, error: errors }
};
