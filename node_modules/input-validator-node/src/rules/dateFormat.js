const moment = require('moment');

module.exports = function dateFormat(field, value, format) {
  if (!moment(value, format, true).isValid()) {
    return false;
  }

  return true;
};
