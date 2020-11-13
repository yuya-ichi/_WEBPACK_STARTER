import { Deferred } from '../classes/Deferred.class';

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
