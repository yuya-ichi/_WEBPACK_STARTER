/**
 * 未調整
 *
 * モーダル表示時にスクロールを消す
 * @param {boolean} isOpen
 */

export function modalScrollBlock(isOpen) {
  var html = document.documentElement;
  if (isOpen) {
    if (html.classList.contains('is-modalMode')) return;
    document.body.style.top = `-${document.documentElement.scrollTop}px`;
    html.classList.add('is-modalMode');
  } else {
    var top = document.body.style.top;
    console.log(top);
    html.classList.remove('is-modalMode');
    window.scrollTo(0, parseInt(top || '0') * -1);
  }
}
