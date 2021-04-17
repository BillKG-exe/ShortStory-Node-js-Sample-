const {pathIndex} = require('../lib/ObjectIndex');
const numeric = require('./numeric');

module.exports = function gte(field, value, anotherField) {
  const anotherFieldValue = pathIndex(this.inputs, anotherField);

  if (!(numeric(field, anotherFieldValue))) {
    return false;
  }

  if (Number(value) >= Number(anotherFieldValue)) {
    return true;
  }

  return false;
};
