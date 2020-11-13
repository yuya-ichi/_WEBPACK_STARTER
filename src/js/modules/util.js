/**
 * 配列へ変換
 *
 * @param {nodelist|arguments} likeArray
 */

export function toArray(likeArray) {
  return [].slice.call(likeArray);
}

/**
 * 配列をシャッフル
 *
 * @param {array} array
 */

export function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

/**
 * Gets the date.
 *
 * @param  {string}  type The type
 * @return {string}  The date.
 */

export function getDate(type) {
  const o = new Date();
  const y = o.getFullYear();
  const m = ('0' + (o.getMonth() + 1)).slice(-2);
  const d = ('0' + o.getDate()).slice(-2);
  const h = ('0' + o.getHours()).slice(-2);
  const min = ('0' + o.getMinutes()).slice(-2);
  switch (type) {
    default:
      return y + '_' + m + d + '_' + h + min;
  }
}

/**
 * Counts the number of down.
 *
 * @param  {number}  year   The year
 * @param  {number}  month  The month
 * @param  {number}  day    The day
 * @return {number}  Number of down.
 */

export function countDown(year, month, day) {
  var today = new Date();
  var targetDay = new Date(year, month - 1, day);
  var remainDay = Math.floor((targetDay - today) / (24 * 60 * 60 * 1000));
  return ++remainDay;
}

/**
 * Gets the rectangle.
 *
 * @param  {Element}  e
 * @return {Object}  The rectangle.
 */

export function getRect(e) {
  var _e = e.jquery ? e[0] : e;
  var rect = _e.getBoundingClientRect();
  return {
    top: rect.top,
    left: rect.left,
    height: rect.bottom - rect.top,
    width: rect.right - rect.left,
  };
}

/**
 * ディレイ
 *
 * @param  {number}   ms  The milliseconds
 * @return {Promise}  thenable
 */

export function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

/**
 * プロミスのタイムアウト
 *
 * @param  {Promise}  promise  The promise
 * @param  {string}  ms       The milliseconds
 * @return {<type>}
 */

export function timeout(promise, ms) {
  const timeout = sleep(ms).then(() => {
    throw new Error('Operation timed out after ' + ms + ' ms');
  });
  return Promise.race([promise, timeout]);
}
