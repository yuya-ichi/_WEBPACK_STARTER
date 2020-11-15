/**
 * 型判定
 */

export function isString(a) {
  return typeof a == 'string' || a instanceof String;
}

export function isArray(a) {
  return Array.isArray(a);
}

export function isArrayLike(a) {
  if (isNill(a)) return false;
  if (!isArray(a) && !isString(a) && a.length) return true;
  return false;
}

export function isObject(a) {
  if (a !== null && typeof a === 'object' && a.constructor === Object) return true;
  return false;
}

export function isInput(a) {
  return a instanceof HTMLInputElement;
}

export function isDom(a) {
  return a.nodeType || a instanceof SVGElement;
}

export function isElement(a) {
  return !!a && a.nodeType === 1;
}

export function isFunction(a) {
  return typeof a === 'function';
}

export function isUndefined(a) {
  return typeof a === 'undefined';
}

export function isNill(a) {
  return isUndefined(a) || a === null;
}

export function isEmpty(a) {
  if (isNill(a)) return true;
  if (a.length) return a.length === 0;
  return Object.keys(a).length === 0;
}

export function isHex(a) {
  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
}

export function isRgb(a) {
  return /^rgb/.test(a);
}

export function isHsl(a) {
  return /^hsl/.test(a);
}

export function isColor(a) {
  return isHex(a) || isRgb(a) || isHsl(a);
}

export function isSvg(a) {
  return a instanceof SVGElement;
}

export function isJquery(a) {
  return a instanceof jQuery;
}

export function isContain(selector, area) {
  var _area = area || document;
  if (isString(_area)) _area = document.querySelector(area);
  if (_area.querySelector(selector)) return true;
  return false;
}

export function isIE() {
  return window.navigator.userAgent.toLowerCase().indexOf('trident') !== -1;
}

export function isSP() {
  if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('Android') != -1) {
    return true;
  }
  return false;
}
