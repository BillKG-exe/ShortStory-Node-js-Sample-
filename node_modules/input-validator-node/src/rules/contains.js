const v = require('validator');

module.exports = function contains(field, value, inString) {
  if (!v.contains(String(value), inString.toString())) {
    return false;
  }

  return true;
};
