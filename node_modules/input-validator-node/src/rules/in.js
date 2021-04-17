module.exports = function _in(field, value, args) {
  if (!Array.isArray(args)) {
    args = [args];
  }

  if (args.indexOf(value) < 0) {
    return false;
  }

  return true;
};
