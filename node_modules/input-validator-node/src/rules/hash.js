const v = require('validator');

module.exports = function hash(field, value, hash) {
  return v.isHash(String(value), hash);
};
