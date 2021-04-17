const Validator = require('../src/index');
const { InvalidParam } = require('../../src/exceptions');

class ValueObject {

  constructor(params) {
    this.validate(params);
  }

  rules() {
    return {};
  }

  validate(params) {
    const rules = this.rules();
    const validator = new Validator(params, rules);
    const isValid = validator.check();
    console.log('isValid: ', isValid);
    if (!isValid) {
      const errors = validator.errors;
      // eslint-disable-next-line no-restricted-syntax,guard-for-in
      for (const key in errors) {
          throw new InvalidParam(errors[key].message);
      }

    }
    this.setData(validator.validations);
    return isValid;
  }

  setData(data) {
    // eslint-disable-next-line no-restricted-syntax,guard-for-in
    for (const key in data) {
      this[data[key].field] = data[key].value;
    }
  }
}

module.exports = ValueObject;
