const v = require('validator');

module.exports = function alpha(field, value) {
  if (v.isAlpha(String(value))) {
    return true;
  }

  return false;
};
