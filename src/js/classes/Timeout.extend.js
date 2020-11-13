function TimeoutError() {
  const superInstance = Error.apply(null, arguments);
  copyOwnFrom(this, superInstance);
}

function copyOwnFrom(target, source) {
  Object.getOwnPropertyNames(source).forEach((propName) => {
    Object.defineProperty(target, propName, Object.getOwnPropertyDescriptor(source, propName));
  });
  return target;
}

TimeoutError.prototype = Object.create(Error.prototype);
TimeoutError.prototype.constructor = TimeoutError;
