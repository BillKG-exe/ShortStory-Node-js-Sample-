const {reallyEmpty} = require('../lib/empty');

module.exports = function required(field, value) {
  if (reallyEmpty(value)) {
    return false;
  }

  return true;
};

