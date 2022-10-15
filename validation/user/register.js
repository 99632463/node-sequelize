const validator = require('validator');
const { isEmpty } = require('../../common/util/base');

const verifyEmpty = (value) => {
  if (validator.isEmpty(value)) {
    return false;
  }
  return true;
}

const validatorMapping = (options = {}, fn) => {
  const { username, password } = options;

  const mapping = {
    username() {
      return verifyEmpty(username);
    },
    password() {
      return verifyEmpty(password);
    }
  }

  Object.keys(options).forEach(key => {
    fn && fn(mapping[key] && mapping[key]());
  })
}

const isValidate = (username, password) => {
  const errors = {};

  validatorMapping({
    username,
    password
  }, isValidate => {
    if (!isValidate) {
      errors.status = 400;
      errors.errMsg = 'username or password is not empty !';
    }
  });

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

module.exports = isValidate;