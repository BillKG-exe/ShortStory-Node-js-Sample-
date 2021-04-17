const v = require('validator');

module.exports = function creditCard(field, value) {
  if (v.isCreditCard(String(value))) {
    return true;
  }

  return false;
};
