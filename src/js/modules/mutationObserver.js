/**
 * DOMの変化を監視
 *
 * @param {string} selector
 * @param {function} callback
 * @param {object} extendConfig
 */

import { _extends } from './_extends';
import { toArray } from './_toArray';
import { isArray, isElement } from './_is';

export function mutationObserver(selector, callback, extendConfig) {
  var config = {
    attributes: true,
    childList: true,
    characterData: true,
  };
  if (extendConfig) _extends(config, extendConfig);
  var observer = new MutationObserver(function (mutations) {
    var self = this;
    mutations.forEach(function (mutation, i) {
      callback(mutation, i, self);
    });
  });
  getTargets(selector).forEach(function (target) {
    observer.observe(target, config);
  });
  return observer;

  function getTargets(selector) {
    var targets = null;
    if (isElement(selector)) {
      targets = [selector];
    } else if (isArray(selector)) {
      targets = selector;
    } else {
      targets = toArray(document.querySelectorAll(selector));
    }
    return targets;
  }
}
