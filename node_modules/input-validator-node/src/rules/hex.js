const v = require('validator');

module.exports = function hex(field, value) {
  return v.isHexadecimal(String(value));
};
