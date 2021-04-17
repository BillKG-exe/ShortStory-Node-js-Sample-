const v = require('validator');

module.exports = function macAddress(field, value) {
  return v.isMACAddress(String(value));
};
