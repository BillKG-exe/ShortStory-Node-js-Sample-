const moment = require('moment');

module.exports = function date(field, value, format = 'YYYY-MM-DD') {
  if (!moment(value, format, true).isValid()) {
    return false;
  }

  return true;
};
