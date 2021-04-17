module.exports = function numeric(field, value) {
  return !isNaN(value) && isFinite(value);
};
