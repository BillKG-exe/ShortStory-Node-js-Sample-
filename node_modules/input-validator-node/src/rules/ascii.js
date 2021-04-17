const v = require('validator');

module.exports = function ascii(field, value) {
  if (v.isAscii(String(value))) {
    return true;
  }

  return false;
};
