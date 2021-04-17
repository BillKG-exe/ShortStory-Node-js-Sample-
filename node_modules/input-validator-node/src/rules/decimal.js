const v = require('validator');

module.exports = function decimal(field, value) {
  return v.isDecimal(parseFloat(value) + '');
};
