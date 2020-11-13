/**
 * 文字列をクリップボードにコピー
 *
 * @param {string} str - コピーするテキスト
 * @param {Element} e - コピー後にクラスを付与する対象要素
 * @param {number} duration - クラスを付けている時間
 * @return {string} - コピーした文字
 */

export function copyClipboards(str, e, duration) {
  var cache = createCache(str);
  cache.select();
  document.execCommand('copy');
  cache.remove();
  if (e) {
    var copiedClass = 'is-copied';
    e.classList.add(copiedClass);
    setTimeout(function () {
      e.classList.remove(copiedClass);
    }, duration);
  }
  return str;
}

function createCache(str) {
  var textarea = document.createElement('textarea');
  textarea.textContent = str;
  textarea.cssText = 'position: absolute; right: 0; bottom: 0; visibility: hidden;';
  document.body.appendChild(textarea);
  return textarea;
}
