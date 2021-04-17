const numeric = require('./numeric');

module.exports = function max(field, value, maxNum) {
  if (!(numeric(field, maxNum))) {
    throw 'Seed in max rule for ' + field + ' must be a number.';
  }

  if (Number(value) > Number(maxNum)) {
    return false;
  }

  return true;
};
