
module.exports = function object(field, value) {
  return (!!value) && (value.constructor === Object);
};
