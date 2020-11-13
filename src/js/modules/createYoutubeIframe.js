/**
 * Youtube の動画タグを生成
 *
 * @param {object} params - {
 *  @param {boolean} autoPlay - 自動再生するかどうか false
 *  @param {string} src - 動画のアドレス
 *  @param {string} className - iframeに付与するクラス名
 *  @param {string} dataSrc - レイジーロード用
 * }
 * @return {node} iframe element
 */

export function createYoutubeIframe(params) {
  var iframe = document.createElement('iframe');
  var allowAttr = 'encrypted-media';
  if (params.autoPlay) {
    params.src = params.src + '?autoplay=1';
    allowAttr = 'autoplay;' + allowAttr;
  }
  if (params.className) iframe.classList.add(params.className);
  if (params.dataSrc) iframe.setAttribute('data-src', params.dataSrc);
  iframe.setAttribute('src', params.src);
  iframe.setAttribute('allowfullscreen', 1);
  iframe.setAttribute('allow', allowAttr);
  return iframe;
}
