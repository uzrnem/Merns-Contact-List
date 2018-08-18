module.exports = {
  isString : function (value) {
    return typeof value === 'string' || value instanceof String;
  },
  isNumber : function (value) {
    return typeof value === 'number' && isFinite(value);
  },
  isArray : function (value) {
    return value && typeof value === 'object' && value.constructor === Array;
  },
  isFunction : function (value) {
    return typeof value === 'function';
  },
  isObject : function (value) {
    return value && typeof value === 'object' && value.constructor === Object;
  },
  isNull : function (value) {
    return value === null;
  },
  isUndefined : function (value) {
    return typeof value === 'undefined';
  },
  isEmpty : function (value) {
    return (
      value === undefined || value === null || value == '' ||
      (typeof value === 'object' && Object.keys(value).length === 0) ||
      (typeof value === 'string' && value.trim().length === 0)
    );
  },
  isBoolean : function (value) {
    return typeof value === 'boolean';
  },
  isRegExp : function (value) {
    return value && typeof value === 'object' && value.constructor === RegExp;
  },
  isError : function (value) {
    return value instanceof Error && typeof value.message !== 'undefined';
  },
  isDate : function (value) {
    return value instanceof Date;
  },
  isSymbol : function (value) {
    return typeof value === 'symbol';
  },
  isEmail : function (value) {
    var atpos = value.indexOf("@");
    var dotpos = value.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
      return false;
    }
    return true;
  }
}
