
const _in = require('./in');

module.exports = function notIn(...args) {
  return !(_in(...args));
};
