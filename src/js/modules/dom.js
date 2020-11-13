import { isString, isArray, isDom } from './is';
import { toArray } from './util';

/**
 * class を要素に追加
 *
 * @param {element} e
 * @param {string|array} value 'hoge' | 'hoge fuga' | ['hoge', 'fuga']
 */

export function addClasses(e, value) {
  classesToArray(value).forEach((className) => {
    e.classList.add(className);
  });
  return e;
}

/**
 * css の class を 配列にして返す
 *
 * @param {string|array} value
 */

export function classesToArray(value) {
  if (isArray(value)) return value;
  if (isString(value)) {
    if (/\s/.test(value)) {
      return value.split(' ');
    }
    return [value];
  }
  throw new Error('Invalid value');
}

/**
 * 要素生成
 *
 * @param {string} tagName
 * @param {obj} params - {
 *  @param {string|array} className
 *  @param {obj} attr - 付与する属性の key: val
 *  @param {string} text - 要素内の文字列
 *  @param {dom|array} children - 子要素
 * }
 * @return {node}
 */

export function createElement(tagName, params) {
  var e = document.createElement(tagName);
  if (!params) return e;
  if (params.className) {
    addClasses(e, params.className);
  }
  if (params.attr) {
    for (var key in params.attr) {
      e.setAttribute(key, params.attr[key]);
    }
  }
  if (params.text) e.textContent = params.text;
  if (params.children) {
    if (Array.isArray(params.children)) {
      params.children.forEach((childNode) => {
        e.appendChild(childNode);
      });
    } else {
      e.appendChild(params.children);
    }
  }
  return e;
}

/**
 * マッチしたセレクター群に関数を実行
 *
 * @param {string} selector
 * @param {function} callback
 * @param {node} root
 * @return {array} - マッチした要素
 */

export function queryWalker(selector, callback, root) {
  var array = [];
  var area = root || document;
  toArray(area.querySelectorAll(selector)).forEach(function (e, i, list) {
    array.push(callback(e, i, list));
  });
  return array;
}

/**
 * Node, Node list を 1つの node にして返す
 *
 * @param {Node|NodeList|Array<Node>} content - the content to normalize
 * @return {Node}
 */

export function normalizeNodes(content) {
  if (isDom(content)) return content;
  var f = document.createDocumentFragment();
  var i, len;
  len = content.length;
  for (i = 0; i < len; i++) {
    f.appendChild(content[i]);
  }
  return f;
}

/**
 * after
 *
 * @param {Element} e
 * @param {String|Node|NodeList|Array<Node>} content
 */

export function after(e, content) {
  if (isString(content)) {
    return e.insertAdjacentHTML('afterEnd', content);
  } else {
    return e.parentNode.insertBefore(normalizeNodes(content), e.nextSibling);
  }
}

/**
 * before
 *
 * @param {Element} e
 * @param {String|Node|NodeList|Array<Node>} content
 */

export function before(e, content) {
  if (isString(content)) {
    return e.insertAdjacentHTML('beforeBegin', content);
  } else {
    return e.parentNode.insertBefore(normalizeNodes(content), e);
  }
}

/**
 *
 * append
 * @param {Element} e
 * @param {String|Node|NodeList|Array<Node>} content
 */

export function append(e, content) {
  if (isString(content)) {
    return e.insertAdjacentHTML('beforeEnd', content);
  } else {
    return e.appendChild(normalizeNodes(content));
  }
}

/**
 * prepend
 *
 * @param {Element} e
 * @param {String|Node|NodeList|Array<Node>} content
 */

export function prepend(e, content) {
  if (isString(content)) {
    return e.insertAdjacentHTML('afterBegin', content);
  } else {
    return e.insertBefore(normalizeNodes(content), e.firstChild);
  }
}

/**
 * wrap
 *
 * @param {Node|NodeList|} e
 * @param {Element} wrapper
 */

export function wrap(e, wrapper) {
  if (!e.length) e = [e];
  e.forEach(function (e) {
    wrapAll(e, wrapper);
  });
  return wrapper;
}

/**
 * wrapAll
 *
 * @param {Node|NodeList|} e
 * @param {Element} wrapper
 */

export function wrapAll(e, wrapper) {
  if (!e.length) e = [e];
  before(e[0], wrapper);
  wrapper.appendChild(normalizeNodes(e));
}

/**
 * wrapInner
 *
 * @param {Node|NodeList|} e
 * @param {Element} wrapper
 */

export function wrapInner(e, wrapper) {
  if (!e.length) e = [e];
  e.forEach(function (e) {
    wrapAll(toArray(e.children), wrapper.cloneNode());
  });
}

/**
 * 文字列からDOM生成
 *
 * @param {string} str
 * @return {array}
 */

export function stringToDom(str) {
  var div = document.createElement('div');
  var f = document.createDocumentFragment();
  div.insertAdjacentHTML('beforeend', str);
  toArray(div.children).forEach(function (e) {
    f.appendChild(e);
  });
  return f;
}

/**
 * DOM を文字列に変換
 *
 * @param {dom} dom
 * @return {string}
 */

export function domToString(dom) {
  var div = document.createElement('div');
  div.appendChild(normalizeNodes(dom));
  return div.innerHTML;
}
