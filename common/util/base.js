const isString = str => {
  return typeof str === 'string';
}

const isObject = obj => {
  return typeof obj === 'object';
}

const isArray = arr => {
  return Array.isArray(arr);
}

const removeAllSpace = str => {
  return isString(str) && str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

const isEmpty = target => {
  return target === undefined || target === null || target === false ||
    (isString(target) && !removeAllSpace(target).length) ||
    (isObject(target) && !Object.keys(target).length) ||
    (isArray(target) && !target.length)
}

module.exports = {
  isString, isObject, isArray, removeAllSpace,
  isEmpty
}