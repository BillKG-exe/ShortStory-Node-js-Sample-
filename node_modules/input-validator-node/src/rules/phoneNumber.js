const v = require('validator');

module.exports = function phoneNumber(field, value) {
  // @ts-ignore
  return v.isMobilePhone(String(value));
};
