/**
 * スクロール量で要素にクラス付与 パララックス
 * @param {object} {
 *   @type {string} 'selector' 必須
 *   @type {string} 'className' アクティブ時に付与されるクラス名 is-active
 *   @type {string} 'type' trigger | parallax | background | css-property-name
 *   @type {int} ratio 0~1 画面下部~上部
 *   @type {boolean} detect アクティブ時に監視から外す true
 *   @type {int} friction パララックスのスクロール移動量 .6
 *   @type {int} duration アニメーション時間 .5
 *   @type {string} ease イージングタイプ ease
 *   @type {int} unit パララックス移動量の単位 px
 *   @type {obj} callback = {
 *      on: {
 *        'is-active: [func]
 *      }
 *    }
 * }
 */

import _extends from './_extends';

// var ScrollTrigger = (function() {

var $default = {
  className: 'is-active',
  type: 'trigger',
  ratio: .6,
  detect: true,
  callback: null,
  friction: -.3,
  duration: .5,
  ease: 'cubic-bezier(0.075, 0.82, 0.165, 1)',
  unit: 'px',
};

/*====================
    TargetData Class
====================*/

var TargetData = function(e, opt, i, scrollValue) {
  _extends(this, this.createTargetOptions(e, opt, i, scrollValue));
};

TargetData.prototype.createTargetOptions = function(e, opt, i, scrollVal) {
  var rect = e.getBoundingClientRect();
  var data = {
    e: e,
    index: i,
    type: $default.type,
    ratio: $default.ratio,
    className: $default.className,
    detect: $default.detect,
    callback: $default.callback,
    rect: {
      top: rect.top + scrollVal,
      bottom: rect.bottom + scrollVal
    },
    status: {
      'is-active': false,
    }
  };
  if (opt.type && opt.type !== 'trigger') {
    data.ratio = 1;
    data.type = opt.type;
    data.friction = $default.friction;
    data.duration = $default.duration;
    data.ease = $default.ease;
    data.unit = $default.unit;
  }
  _extends(data, opt);
  return data;
};

TargetData.prototype.update = function(scrollValue) {
  var rect = this.e.getBoundingClientRect();
  this.rect.top = rect.top + scrollValue;
  this.rect.bottom = rect.bottom + scrollValue;
};

TargetData.prototype.activate = function(statusClassName, className) {
  var self = this;
  (className) ? this.e.classList.add(className): this.e.classList.add(statusClassName);
  this.status[statusClassName] = true;
  if (this.callback && this.callback.on[statusClassName]) {
    this.callback.on[statusClassName](self.e, self.index, statusClassName);
  }
  return this;
};

TargetData.prototype.deActivate = function(statusClassName, className) {
  var self = this;
  (className) ? this.e.classList.remove(className): this.e.classList.remove(statusClassName);
  this.status[statusClassName] = false;
  if (this.callback && this.callback.off[statusClassName]) {
    this.callback.off[statusClassName](self.e, self.index, statusClassName);
  }
};

TargetData.prototype.isTopOverTop = function(scrollValue) {
  if (this.rect.top < scrollValue) return true;
};

TargetData.prototype.isTopUnderTop = function(scrollValue) {
  if (this.rect.top > scrollValue) return true;
};

TargetData.prototype.isBottomOverTop = function(scrollValue) {
  if (this.rect.bottom < scrollValue) return true;
};

TargetData.prototype.isBottomUnderTop = function(scrollValue) {
  if (this.rect.bottom > scrollValue) return true;
};

TargetData.prototype.isTopOverBottom = function(scrollValue, view) {
  if (this.rect.top > view + scrollValue) return true;
};

TargetData.prototype.isOverActivateLine = function(scrollValue, view, doc) {
  var activaleLine = (scrollValue === 0) ? view : scrollValue + (view * this.ratio);
  if (activaleLine >= this.rect.top || doc < (scrollValue + view)) {
    return true;
  }
  return false;
};

/*====================
    ScrollTrigger Class
====================*/

export default function ScrollTrigger() {
  var targetOpts = Array.prototype.slice.call(arguments);
  if (!this.isContainTarget(targetOpts)) return false;
  this.targets = this.createTargetData(targetOpts);
  this.parallaxTargets = [];
  this.distance = {
    doc: document.body.scrollHeight,
    view: window.innerHeight,
  }
  this.init();
};

ScrollTrigger.prototype.isContainTarget = function(targetData) {
  if (!targetData.length) return false;
  for (var i = 0; i < targetData.length; i++) {
    var selector = targetData[i].selector;
    if (document.querySelector(selector)) {
      return true;
    }
  }
  return false;
};

ScrollTrigger.prototype.createTargetData = function(targetOpts) {
  var scrollVal = window.pageYOffset;
  return targetOpts.map(setTargetData).reduce(function(a, b) {
    return a.concat(b);
  });

  function setTargetData(opt) {
    var targets = document.querySelectorAll(opt.selector);
    return [].slice.call(targets).map(function(e, i) {
      return new TargetData(e, opt, i, scrollVal);
    });
  };
};

ScrollTrigger.prototype.init = function() {
  this.checkTargets();
  this.assignWindowEvents();
  if (this.parallaxTargets.length) {
    this.parallax();
  }
};

ScrollTrigger.prototype.assignWindowEvents = function() {
  var self = this;
  var timer = null;

  window.addEventListener('scroll', function observeTargets(ev) {
    if (self.targets.length) {
      self.checkTargets();
    } else {
      if (!self.parallaxTargets.length) window.removeEventListener('scroll', observeTargets);
    }
    if (self.parallaxTargets.length) self.parallax()
  }, false);

  window.addEventListener('resize', function update(ev) {
    clearTimeout(timer);
    timer = setTimeout(function() {
      self.updateDistance();
      self.checkTargets();
      self.parallax();
      if (!self.targets.length && !self.parallaxTargets.length) window.removeEventListener('resize', update);
    }, 200);
  }, false);

};

ScrollTrigger.prototype.updateDistance = function() {
  var self = this;
  var scrollValue = window.pageYOffset;
  this.distance.doc = document.body.scrollHeight;
  this.distance.view = window.innerHeight;
  this.targets.forEach(function(target) {
    if (target.monitor) {
      self.refreshMonitorStatus(target, scrollValue);
    }
    target.update(scrollValue);
    if (target.monitor) self.monitorPosition(target, scrollValue);
  });
};

ScrollTrigger.prototype.checkTargets = function() {
  var scrollValue = window.pageYOffset;
  for (var i = 0; i < this.targets.length; i++) {
    var target = this.targets[i];
    if (!target.status['is-active'] && target.isOverActivateLine(scrollValue, this.distance.view, this.distance.doc)) {
      target.activate(target.className);
      if (target.type !== $default.type) {
        this.addParallax(target);
      };
      if (target.detect) {
        this.targets.splice(i, 1);
        i--;
      }
      if (target.monitor) {
        this.monitorPosition(target, scrollValue);
      }
      continue;
    }
    if (!target.detect && target.status['is-active'] && target.isTopOverBottom(scrollValue, this.distance.view)) {
      target.deActivate(target.className);
    }
    if (target.monitor) {
      this.monitorPosition(target, scrollValue);
    }
  }
};

ScrollTrigger.prototype.refreshMonitorStatus = function(target, scrollValue) {
  target.deActivate('is-topOverTop');
  target.deActivate('is-bottomOverTop');
}

ScrollTrigger.prototype.monitorPosition = function(target, scrollValue) {
  if (target.status['is-topOverTop']) {
    if (target.status['is-bottomOverTop']) {
      if (target.isBottomUnderTop(scrollValue)) target.deActivate('is-bottomOverTop');
    } else {
      if (target.isBottomOverTop(scrollValue)) target.activate('is-bottomOverTop');
      if (target.isTopUnderTop(scrollValue)) target.deActivate('is-topOverTop');
    }
  } else {
    if (target.isTopOverTop(scrollValue)) target.activate('is-topOverTop');
  }
}

ScrollTrigger.prototype.addParallax = function(target) {
  if (target.type === 'parallax') {
    target.e.style.transition = 'transform ' + target.duration + 's ' + target.ease;
  } else if (target.type === 'background') {
    target.e.style.transition = 'background ' + target.duration + 's ' + target.ease;
  } else {
    target.e.style.transition = target.type + ' ' + target.duration + 's ' + target.ease;
  }
  target.startPos = this.getOffsetY(target);
  this.parallaxTargets.push(target);
};

ScrollTrigger.prototype.getOffsetY = function(target) {
  var scrollValue = window.pageYOffset;
  var activaleLine = scrollValue + (this.distance.view * target.ratio);
  var originalTop = target.rect.top + scrollValue;
  var startPos = (originalTop < (this.distance.view * target.ratio)) ? 0 : originalTop - activaleLine;
  return startPos;
};

ScrollTrigger.prototype.parallax = function() {
  var scrollValue = window.pageYOffset;
  var offset = 0;
  this.parallaxTargets.forEach(move);

  function move(target) {
    offset = scrollValue * target.friction;
    // console.log(offset);
    if (target.type === 'parallax') {
      target.e.style.transform = 'translateY(' + offset + target.unit + ')'
    } else if (target.type === 'background') {
      target.e.style.backgroundPosition = '0px' + ' ' + offset + target.unit;
    } else {
      target.e.style[target.type] = offset + target.unit;
    }
  }
};

//   return ScrollTrigger;
// })();
