import { validator } from 'smooth-validator'

module.exports = function validateLoginInput(data) {
  const rules = {
    email : 'required|email|min:5|max:100',
    password: 'required|min:5|max:100'
  }
  const {success, message, errors } = validator(data, rules)
  console.log(errors)
  return {success, message, error: errors }
};
