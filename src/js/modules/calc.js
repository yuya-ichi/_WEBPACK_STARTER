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
