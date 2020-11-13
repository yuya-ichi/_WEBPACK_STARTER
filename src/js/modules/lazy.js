import lozad from '../vendor/lozad';
import { isContain } from './is';
import { toArray } from './util';

/**
 * Lazy load
 *
 * @param {string} selector
 * @param {object} options - {
 * @param {string} rootMargin - syntax similar to that of CSS Margin *
 * @param {int} threshold - ratio of element convergence *
 * @param {boolean} enableAutoReload - it will reload the new image when validating attributes changes
 * }
 */

export function lazyLoad(selector, options) {
  if (!isContain(selector)) return null;
  let observer = lozad(selector, options);
  observer.observe();
  return observer;
}

/**
 * 表示時にlazy()の()内の文字をクラスに追加
 *
 * @param {object} params - {
 * @param {string} selector
 * @param {string} className
 * @param {element} root
 * @param {function} loaded
 * @param {string} rootMargin - syntax similar to that of CSS Margin
 * @param {int} threshold - ratio of element convergence
 * @param {boolean} enableAutoReload - it will reload the new image when validating attributes changes
 * }
 */

export function lazyClass(params) {
  if (!isContain(params.selector)) return null;
  let observer = null;
  let options = {
    selector: '[class*="lazy("]',
    className: 'is-active',
    rootMargin: '0px 0px',
    threshold: 0.5,
    enableAutoReload: true,
  };
  if (options) Object.assign(options, params);
  options.load = loadCallback(options);
  observer = lozad(options.selector, options);
  observer.observe();
  return observer;
}

function loadCallback(options) {
  if (options.selector === '[class*="lazy("]') {
    return function (e) {
      let className = null;
      try {
        className = /lazy\((.+)\)/.exec(e.getAttribute('class'))[1];
      } catch (e) {
        className = 'is-active';
      }
      e.classList.add(className);
    };
  } else {
    return function (e) {
      e.classList.add(options.className);
    };
  }
}

/**
 * ファイルを読み込むタグを追加する
 *
 * @param {string} path
 * @param {string} urlParam
 * @param {string} namespace
 */

export function requireFile(path, callback, namespace) {
  let e = null;
  const ext = path.split('.').slice(-1)[0];
  if (ext === 'js') {
    if (namespace && window[namespace]) {
      callback();
      return window[namespace];
    }
    e = document.createElement('script');
    e.src = path;
    e.setAttribute('defer', true);
    document.body.appendChild(e);
    if (callback) {
      e.addEventListener('load', callback);
    }
  } else if (ext === 'css' || /\/\/fonts\.googleapis\.com\/css\?/.test(path)) {
    let links = document.querySelectorAll('link');
    if (toArray(links).some((link) => link.href === path)) {
      callback();
      return e;
    }
    e = document.createElement('link');
    e.rel = 'stylesheet';
    e.href = path;
    document.head.appendChild(e);
    if (callback) {
      e.addEventListener('load', callback);
    }
  }
  return e;
}
