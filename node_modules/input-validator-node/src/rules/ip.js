const v = require('validator');

module.exports = function ip(field, value) {
  if (!v.isIP(String(value))) {
    return false;
  }

  return true;
};
