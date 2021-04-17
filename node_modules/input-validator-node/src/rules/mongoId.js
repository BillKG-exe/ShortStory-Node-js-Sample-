const v = require('validator');

module.exports = function mongoId(field, value) {
  return v.isMongoId(String(value));
};
