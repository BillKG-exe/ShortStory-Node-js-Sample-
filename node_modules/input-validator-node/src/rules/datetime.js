const moment = require('moment');

module.exports = function date(field, value) {
  if (!moment(value, 'YYYY-MM-DD HH:mm:ss', true).isValid()) {
    return false;
  }

  return true;
};
