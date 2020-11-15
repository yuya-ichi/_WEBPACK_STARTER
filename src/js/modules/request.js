import { Deferred } from '../classes/Deferred.class';
import { toArray } from './util';

/**
 * Fetches an url and callback
 *
 * @param {string}    url   The path url
 * @param {Function}  callback  The callback
 */

export function fetchURLCallback(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    if (200 <= xhr.status && xhr.status < 300) {
      callback(xhr.responseText);
    } else {
      callback(new Error(xhr.statusText), xhr.response);
    }
  };
  xhr.onerror = () => {
    callback(new Error(xhr.statusText));
  };
  xhr.send();
}

/**
 * Fetches an url.
 *
 * @param  {<type>}   url  The url
 * @return {Promise}  The url.
 */

export function fetchURL(url) {
  const deferred = new Deferred();
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onload = () => {
    if (200 <= xhr.status && xhr.status < 300) {
      deferred.resolve(xhr.responseText);
    } else {
      deferred.reject(new Error(xhr.statusText));
    }
  };
  xhr.onerror = () => {
    deferred.reject(new Error(xhr.statusText));
  };
  xhr.send();
  return deferred.promise;
}

export function fetchJSON(url, callback) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return callback(json);
    });
}

/**
 * ファイルを読み込むタグを追加する
 *
 * @param {string} path
 * @param {string} urlParam
 * @param {string} namespace
 * @return {Promise} thenable
 */

export function requireFile(path, namespace) {
  let e = null;
  const ext = path.split('.').slice(-1)[0];
  const deferred = new Deferred();
  if (ext === 'js') {
    if (namespace && window[namespace]) {
      deferred.resolve();
      return deferred.promise;
    }
    e = document.createElement('script');
    e.src = path;
    e.setAttribute('defer', true);
    document.body.appendChild(e);
    e.addEventListener('load', deferred.resolve.bind(deferred));
  } else if (ext === 'css' || /\/\/fonts\.googleapis\.com\/css\?/.test(path)) {
    let links = document.querySelectorAll('link');
    if (toArray(links).some((link) => link.href === path)) {
      deferred.resolve();
    } else {
      const head = document.querySelector('head');
      e = document.createElement('link');
      e.rel = 'stylesheet';
      e.href = path;
      head.appendChild(e);
      e.addEventListener('load', deferred.resolve.bind(deferred));
    }
  }
  return deferred.promise;
}
