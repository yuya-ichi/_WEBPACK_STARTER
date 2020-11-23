/**
 * min ~ max の範囲で整数をランダムで返す
 *
 * @param {int} min
 * @param { int } max
 * @return {int}
 */

export function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

/**
 * 範囲内の数値を返す
 *
 * @param {int} val
 * @param {int} min - 下限
 * @param {int} max - 上限
 * @return {int}
 */

export function rangeValue(val, min, max) {
  return Math.min(Math.max(val, min), max);
}

/**
 * { function_description }
 *
 * @param  {number}  degree  The degree
 * @param  {number}  radius  The radius
 * @return {Object}  { description_of_the_return_value }
 */

export function degreeToPos(degree, radius) {
  var radian = degree * (Math.PI / 180);
  return {
    x: Math.cos(radian) * radius,
    y: Math.sin(radian) * radius,
  };
}

export function getElementCenterPos(target, targetCanvas) {
  var el;
  if (typeof target === 'string') {
    el = document.querySelector(target);
  } else {
    el = target;
  }
  var clientRect = el.getBoundingClientRect();
  var x = window.pageXOffset + clientRect.left + clientRect.width / 2;
  var y = window.pageYOffset + clientRect.top + clientRect.height / 2;
  if (targetCanvas) {
    var canvasRect = targetCanvas.getBoundingClientRect();
    y -= canvasRect.top + window.pageYOffset;
  }
  return [x, y];
}
