const v = require('validator');

module.exports = function domain(field, value) {
  return v.isFQDN(String(value));
};
