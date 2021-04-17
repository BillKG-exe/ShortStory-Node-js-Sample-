const numeric = require('./numeric');

module.exports = function between(attribute, value, args) {
  if (!Array.isArray(args) && args.length !== 2) {
    throw 'The number of arguments for between in the field ' + attribute + ' are invalid.';
  }

  let [min, max] = args;

  if (!(numeric(attribute, min)) || !(numeric(attribute, max))) {
    throw 'Seeds must be integer for ' + attribute + ' under between rule.';
  }

  min = parseFloat(min);
  max = parseFloat(max);

  if (min >= max) {
    throw 'Seed min must be less then max in between rule for ' + attribute + '.';
  }


  if (Array.isArray(value)) {
    if (value.length < min || value.length > max) {
      return false;
    }
    return true;
  }

  if (numeric(attribute, value)) {
    value = Number(value);

    if (value < min || value > max) {
      return false;
    }

    return true;
  }

  return false;
};
