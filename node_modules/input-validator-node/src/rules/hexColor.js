const v = require('validator');

module.exports = function hexColor(field, value) {
  return v.isHexColor(String(value));
};
