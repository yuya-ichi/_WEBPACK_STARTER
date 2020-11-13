/**
 * ウインドウ幅を監視
 * @param {object} params - {
 *  @type {string} selector
 *  @type {int} limitWidth
 *  @type {function} on
 *  @type {function} off
 *  @type {array} classes
 *  @type {boolean} timeoutCheck
 * }
 * @return { WidthTrigger }
 */

// var WidthTrigger = (function() {

export function WidthTrigger(params) {
  this.e = params.selector ? document.querySelector(params.selector) : document.body;
  this.limitWidth = params.limitWidth || 768;
  this.onCallbacks = params.on ? [params.on] : [];
  this.offCallbacks = params.off ? [params.off] : [];
  this.onClass = (params.classes && params.classes[0]) ? params.classes[0] : 'is-tablet';
  this.offClass = (params.classes && params.classes[1]) ? params.classes[1] : 'is-pc';
  this.timeoutCheck = (typeof params.timeoutCheck === 'undefined') ? true : params.timeoutCheck;
  this.init();
};

WidthTrigger.prototype.init = function() {
  this.checkWindowWidth(true);
  this.observeWindowSize();
};

WidthTrigger.prototype.observeWindowSize = function() {
  var self = this;
  var timer = null;
  window.addEventListener('resize', function() {
    if (self.timeoutCheck) {
      clearTimeout(timer);
      timer = setTimeout(function() {
        self.checkWindowWidth();
      }, 200);
    } else {
      self.checkWindowWidth();
    }
  });
};

WidthTrigger.prototype.checkWindowWidth = function(isFirstLoad) {
  var self = this;
  if (this.isLimit()) {
    if (!isFirstLoad && this.e.classList.contains(this.onClass)) return;
    this.e.classList.add(this.onClass);
    this.e.classList.remove(this.offClass);
    if (this.onCallbacks.length) {
      this.onCallbacks.forEach(function(callback) {
        callback(self.e);
      });
    };
  } else {
    if (!isFirstLoad && this.e.classList.contains(this.offClass)) return;
    this.e.classList.add(this.offClass);
    this.e.classList.remove(this.onClass);
    if (this.offCallbacks.length) {
      this.offCallbacks.forEach(function(callback) {
        callback(self.e);
      });
    };
  }
};

WidthTrigger.prototype.isLimit = function() {
  if (window.innerWidth <= this.limitWidth) return true;
  return false;
};

WidthTrigger.prototype.addFunctions = function(on, off) {
  if (on) this.onCallbacks.push(on);
  if (off) this.offCallbacks.push(off);
};

//   return WidthTrigger;
// })();
