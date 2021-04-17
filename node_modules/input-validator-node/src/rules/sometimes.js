const empty = require('../lib/empty');

module.exports = function sometimes(field, value) {
  // @ts-ignore
  if (!(field in this.inputs)) {
    return true;
  }

  if (empty(value)) {
    return false;
  }

  return true;
};
