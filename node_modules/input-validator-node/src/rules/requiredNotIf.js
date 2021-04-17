const requiredIf = require('./requiredIf');

module.exports = function requiredNotIf(...args) {
  return !(requiredIf.apply(this, args));
};
