const v = require('validator');

module.exports = function url(field, value) {
  return v.isURL(value);
};
