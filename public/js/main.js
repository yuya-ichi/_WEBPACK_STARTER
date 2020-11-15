/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!****************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \****************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ (function(module) {

eval("function _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nmodule.exports = _classCallCheck;\n\n//# sourceURL=webpack://_WEBPACK_STARTER/../node_modules/@babel/runtime/helpers/classCallCheck.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/createClass.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/createClass.js ***!
  \*************************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ (function(module) {

eval("function _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nmodule.exports = _createClass;\n\n//# sourceURL=webpack://_WEBPACK_STARTER/../node_modules/@babel/runtime/helpers/createClass.js?");

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/typeof.js":
/*!********************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/typeof.js ***!
  \********************************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: module */
/***/ (function(module) {

eval("function _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    module.exports = _typeof = function _typeof(obj) {\n      return typeof obj;\n    };\n  } else {\n    module.exports = _typeof = function _typeof(obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nmodule.exports = _typeof;\n\n//# sourceURL=webpack://_WEBPACK_STARTER/../node_modules/@babel/runtime/helpers/typeof.js?");

/***/ }),

/***/ "./src/js/classes/Deferred.class.js":
/*!******************************************!*\
  !*** ./src/js/classes/Deferred.class.js ***!
  \******************************************/
/*! namespace exports */
/*! export Deferred [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Deferred\": function() { return /* binding */ Deferred; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"../node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"../node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n;\n\n\n/**\n * This class describes a deferred.\n *\n * @class Deferred (name)\n */\nvar Deferred = /*#__PURE__*/function () {\n  function Deferred() {\n    var _this = this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Deferred);\n\n    this.promise = new Promise(function (resolve, reject) {\n      _this._resolve = resolve;\n      _this._reject = reject;\n    });\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Deferred, [{\n    key: \"resolve\",\n    value: function resolve(value) {\n      this._resolve(value);\n    }\n  }, {\n    key: \"reject\",\n    value: function reject(reason) {\n      this._reject(reason);\n    }\n  }]);\n\n  return Deferred;\n}();\n\n//# sourceURL=webpack://_WEBPACK_STARTER/./src/js/classes/Deferred.class.js?");

/***/ }),

/***/ "./src/js/classes/Fireworks.es5.js":
/*!*****************************************!*\
  !*** ./src/js/classes/Fireworks.es5.js ***!
  \*****************************************/
/*! namespace exports */
/*! export BackupFireworks [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Fireworks [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BackupFireworks\": function() { return /* binding */ BackupFireworks; },\n/* harmony export */   \"Fireworks\": function() { return /* binding */ Fireworks; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"../node_modules/@babel/runtime/helpers/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"../node_modules/@babel/runtime/helpers/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/dom */ \"./src/js/modules/dom.js\");\n/* harmony import */ var _modules_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/request */ \"./src/js/modules/request.js\");\n;\n\n\n\nvar cdnURL = 'https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js';\n/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n\nBackupFireworks\n\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/\n\nvar BackupFireworks = /*#__PURE__*/function () {\n  function BackupFireworks(elm, isOffset) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, BackupFireworks);\n\n    this.target = elm;\n    this.canvas = createCanvas(); // this.fireworks = new Spark(this.target, this.canvas);\n\n    this.ray = this.fireworks.generateBomb('ray');\n    this.buble = this.fireworks.generateBomb('buble');\n    this.shockwave = this.fireworks.generateBomb();\n    this.isOffset = isOffset;\n    this.fireworks.update(this.isOffset);\n    setCanvas(this.target, this.canvas);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(BackupFireworks, [{\n    key: \"get\",\n    value: function get(name) {\n      return this[name];\n    }\n  }, {\n    key: \"ray\",\n    value: function ray(x, y, ex) {\n      this.ray(x, y, ex);\n    }\n  }, {\n    key: \"buble\",\n    value: function buble(x, y, ex) {\n      this.ray(x, y, ex);\n    }\n  }, {\n    key: \"shockWave\",\n    value: function shockWave(x, y, ex) {\n      this.ray(x, y, ex);\n    }\n  }, {\n    key: \"large\",\n    value: function large(x, y, ex) {\n      this.buble(x, y, {\n        circle: {\n          isRing: false\n        }\n      });\n      this.buble(x, y, {\n        circle: {\n          isRing: true,\n          radius: 1,\n          lineWidth: 4\n        },\n        perticles: {\n          count: 1\n        },\n        anime: {\n          duration: function duration() {\n            return 1500;\n          },\n          radius: function radius() {\n            return 10;\n          },\n          alpha: [{\n            value: 0,\n            delay: 400\n          }]\n        }\n      });\n      this.shockwave(x, y);\n      this.ray(x, y);\n    }\n  }]);\n\n  return BackupFireworks;\n}();\n/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n\nFireworks\n\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/\n\nvar Fireworks = /*#__PURE__*/function () {\n  function Fireworks(elm, canvas) {\n    var _this = this;\n\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Fireworks);\n\n    this.elm = elm;\n    this.canvas = canvas || createCanvas();\n    this.ctx = this.canvas.getContext('2d');\n    setCanvas(this.elm, this.canvas);\n    this.animations = [];\n    this.defaultAnime = {\n      x: function x(p, i) {\n        return p.x;\n      },\n      y: function y(p, i) {\n        return p.y;\n      },\n      delay: function delay(p, i) {\n        return 0;\n      },\n      duration: function duration(p, i) {\n        return 1000;\n      },\n      easing: 'easeOutExpo'\n    };\n    this.offset = false;\n    (0,_modules_request__WEBPACK_IMPORTED_MODULE_3__.requireFile)(cdnURL, 'anime').then(function () {\n      _this.loop();\n\n      _this.assignEvents();\n    });\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Fireworks, [{\n    key: \"init\",\n    value: function init() {}\n  }, {\n    key: \"get\",\n    value: function get(name) {\n      return this[name];\n    }\n  }, {\n    key: \"loop\",\n    value: function loop() {\n      var _this2 = this;\n\n      anime({\n        duration: Infinity,\n        update: function update() {\n          _this2.ctx.clearRect(0, 0, _this2.canvas.width, _this2.canvas.height);\n\n          _this2.animations.forEach(draw);\n        }\n      });\n\n      function draw(anime) {\n        anime.animatables.forEach(function (animatable) {\n          animatable.target.draw();\n        });\n      }\n    }\n  }, {\n    key: \"assignEvents\",\n    value: function assignEvents() {\n      var _this3 = this;\n\n      var timer = null;\n      window.addEventListener('resize', function () {\n        clearTimeout(timer);\n        timer = setTimeout(function () {\n          _this3.update(_this3.isOffset);\n        }, 1000);\n      }, false);\n    }\n  }, {\n    key: \"update\",\n    value: function update() {\n      var rect = this.elm.getBoundingClientRect();\n      this.canvas.width = rect.width;\n      this.canvas.height = this.offset ? rect.height + rect.top + window.pageYOffset : rect.height;\n      return this.canvas;\n    }\n  }, {\n    key: \"generateBomb\",\n    value: function generateBomb(type, initParams) {\n      var _this4 = this;\n\n      var perticleParams = {};\n      var circleParams = {};\n      var animeParams = {};\n\n      var fire = function fire() {\n        _this4.fire(_this4.createPerticles(circleParams, perticleParams), animeParams);\n      };\n\n      switch (type) {\n        case 'ray':\n          circleParams = {\n            radius: 10\n          };\n          perticleParams = {\n            lineNum: 6,\n            distance: 200,\n            count: 8,\n            color: 'hsl(70, 100%, 50%)',\n            morph: 'hsl(0, 100%, 100%)',\n            offset: 10\n          };\n          animeParams = copy(this.defaultAnime, {\n            x: function x(p, i, l) {\n              return p.x + perticleParams.degPos.x * i / l;\n            },\n            y: function y(p, i, l) {\n              return p.y + perticleParams.degPos.y * i / l;\n            },\n            radius: function radius() {\n              return 0;\n            },\n            duration: function duration(p, i, l) {\n              return perticleParams.count / 0.01 * i;\n            },\n            delay: function delay(p, i, l) {\n              return 0;\n            }\n          });\n\n          fire = function fire() {\n            for (var i = 0; i < perticleParams.lineNum; i++) {\n              var startDeg = perticleParams.lineNum === 1 ? -90 : 0;\n\n              var perticles = _this4.createPerticles(circleParams, perticleParams);\n\n              var angle = 360 / perticleParams.lineNum;\n              var deg = angle * i + angle / 2 + startDeg;\n\n              if (perticleParams.offset) {\n                (function () {\n                  var offset = degreeToPos(deg, perticleParams.offset);\n                  perticles.forEach(function (circle) {\n                    circle.x += offset.x;\n                    circle.y += offset.y;\n                  });\n                })();\n              }\n\n              perticleParams.degPos = degreeToPos(deg, perticleParams.distance);\n\n              _this4.fire(perticles, animeParams);\n            }\n          };\n\n          break;\n\n        case 'buble':\n          perticleParams = {\n            distance: 400,\n            count: 10,\n            radiusRange: [10, 60]\n          };\n          animeParams = copy(this.defaultAnime, {\n            x: function x(p) {\n              return p.x + anime.random(-perticleParams.distance, perticleParams.distance);\n            },\n            y: function y(p) {\n              return p.y + anime.random(-perticleParams.distance, perticleParams.distance);\n            },\n            duration: function duration(p, i) {\n              return 2000;\n            },\n            radius: function radius() {\n              return 0;\n            }\n          });\n          break;\n\n        default:\n          circleParams = {\n            color: '#fff',\n            radius: 100,\n            isRing: true\n          };\n          perticleParams = {\n            count: 1\n          };\n          animeParams = copy(this.defaultAnime, {\n            radius: function radius() {\n              return 500;\n            },\n            duration: function duration() {\n              return 2000;\n            },\n            alpha: function alpha() {\n              return 0;\n            }\n          });\n      }\n\n      if (initParams) {\n        if (initParams.circle) Object.assign(circleParams, initParams.circle);\n        if (initParams.perticles) Object.assign(perticleParams, initParams.perticles);\n        if (initParams.anime) Object.assign(animeParams, initParams.anime);\n      }\n\n      return function (x, y, params) {\n        circleParams.x = x;\n        circleParams.y = y;\n\n        if (params) {\n          if (params.circle) Object.assign(circleParams, params.circle);\n          if (params.perticles) Object.assign(perticleParams, params.perticles);\n          if (params.anime) Object.assign(animeParams, params.anime);\n        }\n\n        fire();\n      };\n    }\n  }, {\n    key: \"createPerticles\",\n    value: function createPerticles(circleParams, perticleParams) {\n      var n = perticleParams.count || 10;\n      var perticles = [];\n      var morphSequence;\n\n      if (perticleParams.morph) {\n        morphSequence = getMorphHSL(perticleParams.color, perticleParams.morph, n);\n      }\n\n      for (var i = 0; i < n; i++) {\n        if (perticleParams.morph) circleParams.color = morphSequence[i];\n        if (perticleParams.radiusRange) circleParams.radius = anime.random(perticleParams.radiusRange[0], perticleParams.radiusRange[1]);\n        perticles.push(new Circle(this.ctx, circleParams));\n      }\n\n      return perticles;\n\n      function getMorphHSL(beforeHSL, afterHSL, divideCount) {\n        var morphSequenceHSL = [];\n        var beforeHSLParams = getHSLtoParams(beforeHSL);\n        var afterHSLParams = getHSLtoParams(afterHSL);\n        var offsetHSL = {\n          h: (afterHSLParams[0] - beforeHSLParams[0]) / divideCount,\n          s: (afterHSLParams[1] - beforeHSLParams[1]) / divideCount,\n          l: (afterHSLParams[2] - beforeHSLParams[2]) / divideCount\n        };\n\n        for (var _i = 1; _i < divideCount + 1; _i++) {\n          var morphHSLParams = [];\n          morphHSLParams[0] = beforeHSLParams[0] + offsetHSL.h * _i;\n          morphHSLParams[1] = beforeHSLParams[1] + offsetHSL.s * _i;\n          morphHSLParams[2] = beforeHSLParams[2] + offsetHSL.l * _i;\n          morphSequenceHSL.push(getParamsToHSL(morphHSLParams));\n        }\n\n        return morphSequenceHSL;\n      }\n\n      function getHSLtoParams(hsl) {\n        var h = Number(hsl.match(/\\((\\d+)/)[1]);\n        var s = Number(hsl.match(/\\(\\d+,\\s?(\\d+)/)[1]);\n        var l = Number(hsl.match(/\\(\\d+,\\s?\\d.+,\\s?(\\d+)/)[1]);\n        return [h, s, l];\n      }\n\n      function getParamsToHSL(hslParams) {\n        return 'hsl(' + hslParams[0] + ', ' + hslParams[1] + '%, ' + hslParams[2] + '%)';\n      }\n    }\n  }, {\n    key: \"removeAnimation\",\n    value: function removeAnimation(anim) {\n      var index = this.animations.indexOf(anim);\n      if (index > -1) this.animations.splice(index, 1);\n    }\n  }, {\n    key: \"fire\",\n    value: function fire(perticles, animParams) {\n      var _this5 = this;\n\n      var animation = anime({\n        targets: perticles,\n        x: animParams.x,\n        y: animParams.y,\n        radius: animParams.radius,\n        delay: animParams.delay,\n        // loop: true,\n        duration: animParams.duration,\n        alpha: animParams.alpha,\n        easing: animParams.easing,\n        update: function update(p, i) {\n          if (animParams.update) animParams.update();\n        },\n        complete: function complete() {\n          _this5.removeAnimation(_this5);\n\n          if (animParams.complete) animParams.complete();\n        }\n      });\n      this.animations.push(animation);\n    }\n  }]);\n\n  return Fireworks;\n}();\n/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n\nCircle\n\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/\n\nvar colors = ['#ED1A2D', '#ff5a69', '#f88f4a', '#d41522', '#FAA634', '#fac034', '#D1D2D4', '#c0c6d2', '#6EACDD', '#9AC23B', '#d7d508'];\n\nvar Circle = /*#__PURE__*/function () {\n  function Circle(ctx, params) {\n    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Circle);\n\n    this.ctx = ctx;\n    this.x = 0;\n    this.y = 0;\n    this.color = colors[anime.random(0, colors.length - 1)];\n    this.radius = Math.round(anime.random(10, 20));\n    this.alpha = 1;\n    this.lineWidth = 2;\n    this.isRing = false;\n    Object.assign(this, params);\n  }\n\n  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Circle, [{\n    key: \"draw\",\n    value: function draw() {\n      this.ctx.globalAlpha = this.alpha;\n      this.ctx.beginPath();\n      this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);\n\n      if (this.isRing) {\n        this.ctx.lineWidth = this.lineWidth;\n        this.ctx.strokeStyle = this.color;\n        this.ctx.stroke();\n      } else {\n        this.ctx.fillStyle = this.color;\n        this.ctx.fill();\n      }\n\n      this.ctx.globalAlpha = 1;\n    }\n  }]);\n\n  return Circle;\n}();\n/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n\nPrivate functions\n\n-=-=-=-=-=-=-=-=-=-=-=-=-=-=*/\n\n\nfunction canvasID() {\n  var id = 0;\n  return function () {\n    return ++id;\n  };\n}\n\nfunction createCanvas() {\n  return (0,_modules_dom__WEBPACK_IMPORTED_MODULE_2__.createElement)('canvas', {\n    className: 'js-fireworks',\n    attr: {\n      id: 'js-fireworks-' + canvasID()\n    }\n  });\n}\n\nfunction setCanvas(elm, canvas) {\n  elm.appendChild(canvas);\n  setFitStyle(elm, canvas);\n  return canvas;\n\n  function setFitStyle(area, canvas) {\n    area.style.cssText = \"\\n    position: relative;\\n  \";\n    canvas.style.cssText = \"\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    height: 100%;\\n    width: 100%;\\n    background-color: rgba(0,0,0,.1);\\n    pointer-events: none;\\n  \";\n  }\n}\n\nfunction copy(obj, mergeObj) {\n  var copyObj = {};\n\n  for (var key in obj) {\n    if (Object.prototype.hasOwnProperty.call(obj, key)) copyObj[key] = obj[key];\n  }\n\n  if (mergeObj) Object.assign(copyObj, mergeObj);\n  return copyObj;\n}\n\nfunction degreeToPos(degree, radius, offset) {\n  var radian = degree * (Math.PI / 180);\n  return {\n    x: Math.cos(radian) * radius,\n    y: Math.sin(radian) * radius\n  };\n}\n\n//# sourceURL=webpack://_WEBPACK_STARTER/./src/js/classes/Fireworks.es5.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/main.scss */ \"./src/css/main.scss\");\n/* harmony import */ var _js_classes_Fireworks_es5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/classes/Fireworks.es5.js */ \"./src/js/classes/Fireworks.es5.js\");\n/* eslint-disable */\n;\n\n\nvar ready = function ready() {\n  var fireworks = new _js_classes_Fireworks_es5_js__WEBPACK_IMPORTED_MODULE_1__.Fireworks(document.querySelector('body'));\n  fireworks.get('elm').addEventListener('click', function (ev) {\n    fireworks.large(ev.layerX, ev.layerY);\n  }, false);\n};\n\ndocument.addEventListener('DOMContentLoaded', ready, false);\n\n//# sourceURL=webpack://_WEBPACK_STARTER/./src/js/main.js?");

/***/ }),

/***/ "./src/js/modules/dom.js":
/*!*******************************!*\
  !*** ./src/js/modules/dom.js ***!
  \*******************************/
/*! namespace exports */
/*! export addClasses [provided] [no usage info] [missing usage info prevents renaming] */
/*! export after [provided] [no usage info] [missing usage info prevents renaming] */
/*! export append [provided] [no usage info] [missing usage info prevents renaming] */
/*! export before [provided] [no usage info] [missing usage info prevents renaming] */
/*! export classesToArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export domToString [provided] [no usage info] [missing usage info prevents renaming] */
/*! export normalizeNodes [provided] [no usage info] [missing usage info prevents renaming] */
/*! export prepend [provided] [no usage info] [missing usage info prevents renaming] */
/*! export queryWalker [provided] [no usage info] [missing usage info prevents renaming] */
/*! export stringToDom [provided] [no usage info] [missing usage info prevents renaming] */
/*! export wrap [provided] [no usage info] [missing usage info prevents renaming] */
/*! export wrapAll [provided] [no usage info] [missing usage info prevents renaming] */
/*! export wrapInner [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addClasses\": function() { return /* binding */ addClasses; },\n/* harmony export */   \"classesToArray\": function() { return /* binding */ classesToArray; },\n/* harmony export */   \"createElement\": function() { return /* binding */ createElement; },\n/* harmony export */   \"queryWalker\": function() { return /* binding */ queryWalker; },\n/* harmony export */   \"normalizeNodes\": function() { return /* binding */ normalizeNodes; },\n/* harmony export */   \"after\": function() { return /* binding */ after; },\n/* harmony export */   \"before\": function() { return /* binding */ before; },\n/* harmony export */   \"append\": function() { return /* binding */ append; },\n/* harmony export */   \"prepend\": function() { return /* binding */ prepend; },\n/* harmony export */   \"wrap\": function() { return /* binding */ wrap; },\n/* harmony export */   \"wrapAll\": function() { return /* binding */ wrapAll; },\n/* harmony export */   \"wrapInner\": function() { return /* binding */ wrapInner; },\n/* harmony export */   \"stringToDom\": function() { return /* binding */ stringToDom; },\n/* harmony export */   \"domToString\": function() { return /* binding */ domToString; }\n/* harmony export */ });\n/* harmony import */ var _is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./is */ \"./src/js/modules/is.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/js/modules/util.js\");\n;\n\n/**\n * class を要素に追加\n *\n * @param {element} e\n * @param {string|array} value 'hoge' | 'hoge fuga' | ['hoge', 'fuga']\n */\n\nfunction addClasses(e, value) {\n  classesToArray(value).forEach(function (className) {\n    e.classList.add(className);\n  });\n  return e;\n}\n/**\n * css の class を 配列にして返す\n *\n * @param {string|array} value\n */\n\nfunction classesToArray(value) {\n  if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isArray)(value)) return value;\n\n  if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isString)(value)) {\n    if (/\\s/.test(value)) {\n      return value.split(' ');\n    }\n\n    return [value];\n  }\n\n  throw new Error('Invalid value');\n}\n/**\n * 要素生成\n *\n * @param {string} tagName\n * @param {obj} params - {\n *  @param {string|array} className\n *  @param {obj} attr - 付与する属性の key: val\n *  @param {string} text - 要素内の文字列\n *  @param {dom|array} children - 子要素\n * }\n * @return {node}\n */\n\nfunction createElement(tagName, params) {\n  var e = document.createElement(tagName);\n  if (!params) return e;\n\n  if (params.className) {\n    addClasses(e, params.className);\n  }\n\n  if (params.attr) {\n    for (var key in params.attr) {\n      e.setAttribute(key, params.attr[key]);\n    }\n  }\n\n  if (params.text) e.textContent = params.text;\n\n  if (params.children) {\n    if (Array.isArray(params.children)) {\n      params.children.forEach(function (childNode) {\n        e.appendChild(childNode);\n      });\n    } else {\n      e.appendChild(params.children);\n    }\n  }\n\n  return e;\n}\n/**\n * マッチしたセレクター群に関数を実行\n *\n * @param {string} selector\n * @param {function} callback\n * @param {node} root\n * @return {array} - マッチした要素\n */\n\nfunction queryWalker(selector, callback, root) {\n  var array = [];\n  var area = root || document;\n  (0,_util__WEBPACK_IMPORTED_MODULE_1__.toArray)(area.querySelectorAll(selector)).forEach(function (e, i, list) {\n    array.push(callback(e, i, list));\n  });\n  return array;\n}\n/**\n * Node, Node list を 1つの node にして返す\n *\n * @param {Node|NodeList|Array<Node>} content - the content to normalize\n * @return {Node}\n */\n\nfunction normalizeNodes(content) {\n  if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isDom)(content)) return content;\n  var f = document.createDocumentFragment();\n  var i, len;\n  len = content.length;\n\n  for (i = 0; i < len; i++) {\n    f.appendChild(content[i]);\n  }\n\n  return f;\n}\n/**\n * after\n *\n * @param {Element} e\n * @param {String|Node|NodeList|Array<Node>} content\n */\n\nfunction after(e, content) {\n  if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isString)(content)) {\n    return e.insertAdjacentHTML('afterEnd', content);\n  } else {\n    return e.parentNode.insertBefore(normalizeNodes(content), e.nextSibling);\n  }\n}\n/**\n * before\n *\n * @param {Element} e\n * @param {String|Node|NodeList|Array<Node>} content\n */\n\nfunction before(e, content) {\n  if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isString)(content)) {\n    return e.insertAdjacentHTML('beforeBegin', content);\n  } else {\n    return e.parentNode.insertBefore(normalizeNodes(content), e);\n  }\n}\n/**\n *\n * append\n * @param {Element} e\n * @param {String|Node|NodeList|Array<Node>} content\n */\n\nfunction append(e, content) {\n  if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isString)(content)) {\n    return e.insertAdjacentHTML('beforeEnd', content);\n  } else {\n    return e.appendChild(normalizeNodes(content));\n  }\n}\n/**\n * prepend\n *\n * @param {Element} e\n * @param {String|Node|NodeList|Array<Node>} content\n */\n\nfunction prepend(e, content) {\n  if ((0,_is__WEBPACK_IMPORTED_MODULE_0__.isString)(content)) {\n    return e.insertAdjacentHTML('afterBegin', content);\n  } else {\n    return e.insertBefore(normalizeNodes(content), e.firstChild);\n  }\n}\n/**\n * wrap\n *\n * @param {Node|NodeList|} e\n * @param {Element} wrapper\n */\n\nfunction wrap(e, wrapper) {\n  if (!e.length) e = [e];\n  e.forEach(function (e) {\n    wrapAll(e, wrapper);\n  });\n  return wrapper;\n}\n/**\n * wrapAll\n *\n * @param {Node|NodeList|} e\n * @param {Element} wrapper\n */\n\nfunction wrapAll(e, wrapper) {\n  if (!e.length) e = [e];\n  before(e[0], wrapper);\n  wrapper.appendChild(normalizeNodes(e));\n}\n/**\n * wrapInner\n *\n * @param {Node|NodeList|} e\n * @param {Element} wrapper\n */\n\nfunction wrapInner(e, wrapper) {\n  if (!e.length) e = [e];\n  e.forEach(function (e) {\n    wrapAll((0,_util__WEBPACK_IMPORTED_MODULE_1__.toArray)(e.children), wrapper.cloneNode());\n  });\n}\n/**\n * 文字列からDOM生成\n *\n * @param {string} str\n * @return {array}\n */\n\nfunction stringToDom(str) {\n  var div = document.createElement('div');\n  var f = document.createDocumentFragment();\n  div.insertAdjacentHTML('beforeend', str);\n  (0,_util__WEBPACK_IMPORTED_MODULE_1__.toArray)(div.children).forEach(function (e) {\n    f.appendChild(e);\n  });\n  return f;\n}\n/**\n * DOM を文字列に変換\n *\n * @param {dom} dom\n * @return {string}\n */\n\nfunction domToString(dom) {\n  var div = document.createElement('div');\n  div.appendChild(normalizeNodes(dom));\n  return div.innerHTML;\n}\n\n//# sourceURL=webpack://_WEBPACK_STARTER/./src/js/modules/dom.js?");

/***/ }),

/***/ "./src/js/modules/is.js":
/*!******************************!*\
  !*** ./src/js/modules/is.js ***!
  \******************************/
/*! namespace exports */
/*! export isArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isArrayLike [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isColor [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isContain [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isDom [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isElement [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isEmpty [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isFunction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isHex [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isHsl [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isIE [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isInput [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isJquery [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isNill [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isObject [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isRgb [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSP [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isString [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isSvg [provided] [no usage info] [missing usage info prevents renaming] */
/*! export isUndefined [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.n, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isString\": function() { return /* binding */ isString; },\n/* harmony export */   \"isArray\": function() { return /* binding */ isArray; },\n/* harmony export */   \"isArrayLike\": function() { return /* binding */ isArrayLike; },\n/* harmony export */   \"isObject\": function() { return /* binding */ isObject; },\n/* harmony export */   \"isInput\": function() { return /* binding */ isInput; },\n/* harmony export */   \"isDom\": function() { return /* binding */ isDom; },\n/* harmony export */   \"isElement\": function() { return /* binding */ isElement; },\n/* harmony export */   \"isFunction\": function() { return /* binding */ isFunction; },\n/* harmony export */   \"isUndefined\": function() { return /* binding */ isUndefined; },\n/* harmony export */   \"isNill\": function() { return /* binding */ isNill; },\n/* harmony export */   \"isEmpty\": function() { return /* binding */ isEmpty; },\n/* harmony export */   \"isHex\": function() { return /* binding */ isHex; },\n/* harmony export */   \"isRgb\": function() { return /* binding */ isRgb; },\n/* harmony export */   \"isHsl\": function() { return /* binding */ isHsl; },\n/* harmony export */   \"isColor\": function() { return /* binding */ isColor; },\n/* harmony export */   \"isSvg\": function() { return /* binding */ isSvg; },\n/* harmony export */   \"isJquery\": function() { return /* binding */ isJquery; },\n/* harmony export */   \"isContain\": function() { return /* binding */ isContain; },\n/* harmony export */   \"isIE\": function() { return /* binding */ isIE; },\n/* harmony export */   \"isSP\": function() { return /* binding */ isSP; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ \"../node_modules/@babel/runtime/helpers/typeof.js\");\n/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);\n;\n\n/**\n * 型判定\n */\nfunction isString(a) {\n  return typeof a == 'string' || a instanceof String;\n}\nfunction isArray(a) {\n  return Array.isArray(a);\n}\nfunction isArrayLike(a) {\n  if (isNill(a)) return false;\n  if (!isArray(a) && !isString(a) && a.length) return true;\n  return false;\n}\nfunction isObject(a) {\n  if (a !== null && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(a) === 'object' && a.constructor === Object) return true;\n  return false;\n}\nfunction isInput(a) {\n  return a instanceof HTMLInputElement;\n}\nfunction isDom(a) {\n  return a.nodeType || a instanceof SVGElement;\n}\nfunction isElement(a) {\n  return !!a && a.nodeType === 1;\n}\nfunction isFunction(a) {\n  return typeof a === 'function';\n}\nfunction isUndefined(a) {\n  return typeof a === 'undefined';\n}\nfunction isNill(a) {\n  return isUndefined(a) || a === null;\n}\nfunction isEmpty(a) {\n  if (isNill(a)) return true;\n  if (a.length) return a.length === 0;\n  return Object.keys(a).length === 0;\n}\nfunction isHex(a) {\n  return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);\n}\nfunction isRgb(a) {\n  return /^rgb/.test(a);\n}\nfunction isHsl(a) {\n  return /^hsl/.test(a);\n}\nfunction isColor(a) {\n  return isHex(a) || isRgb(a) || isHsl(a);\n}\nfunction isSvg(a) {\n  return a instanceof SVGElement;\n}\nfunction isJquery(a) {\n  return a instanceof jQuery;\n}\nfunction isContain(selector, area) {\n  var _area = area || document;\n\n  if (isString(_area)) _area = document.querySelector(area);\n  if (_area.querySelector(selector)) return true;\n  return false;\n}\nfunction isIE() {\n  return window.navigator.userAgent.toLowerCase().indexOf('trident') !== -1;\n}\nfunction isSP() {\n  if (navigator.userAgent.indexOf('iPhone') != -1 || navigator.userAgent.indexOf('Android') != -1) {\n    return true;\n  }\n\n  return false;\n}\n\n//# sourceURL=webpack://_WEBPACK_STARTER/./src/js/modules/is.js?");

/***/ }),

/***/ "./src/js/modules/request.js":
/*!***********************************!*\
  !*** ./src/js/modules/request.js ***!
  \***********************************/
/*! namespace exports */
/*! export fetchJSON [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchURL [provided] [no usage info] [missing usage info prevents renaming] */
/*! export fetchURLCallback [provided] [no usage info] [missing usage info prevents renaming] */
/*! export requireFile [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchURLCallback\": function() { return /* binding */ fetchURLCallback; },\n/* harmony export */   \"fetchURL\": function() { return /* binding */ fetchURL; },\n/* harmony export */   \"fetchJSON\": function() { return /* binding */ fetchJSON; },\n/* harmony export */   \"requireFile\": function() { return /* binding */ requireFile; }\n/* harmony export */ });\n/* harmony import */ var _classes_Deferred_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/Deferred.class */ \"./src/js/classes/Deferred.class.js\");\n/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ \"./src/js/modules/util.js\");\n;\n\n/**\n * Fetches an url and callback\n *\n * @param {string}    url   The path url\n * @param {Function}  callback  The callback\n */\n\nfunction fetchURLCallback(url, callback) {\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', url, true);\n\n  xhr.onload = function () {\n    if (200 <= xhr.status && xhr.status < 300) {\n      callback(xhr.responseText);\n    } else {\n      callback(new Error(xhr.statusText), xhr.response);\n    }\n  };\n\n  xhr.onerror = function () {\n    callback(new Error(xhr.statusText));\n  };\n\n  xhr.send();\n}\n/**\n * Fetches an url.\n *\n * @param  {<type>}   url  The url\n * @return {Promise}  The url.\n */\n\nfunction fetchURL(url) {\n  var deferred = new _classes_Deferred_class__WEBPACK_IMPORTED_MODULE_0__.Deferred();\n  var xhr = new XMLHttpRequest();\n  xhr.open('GET', url, true);\n\n  xhr.onload = function () {\n    if (200 <= xhr.status && xhr.status < 300) {\n      deferred.resolve(xhr.responseText);\n    } else {\n      deferred.reject(new Error(xhr.statusText));\n    }\n  };\n\n  xhr.onerror = function () {\n    deferred.reject(new Error(xhr.statusText));\n  };\n\n  xhr.send();\n  return deferred.promise;\n}\nfunction fetchJSON(url, callback) {\n  return fetch(url).then(function (response) {\n    return response.json();\n  }).then(function (json) {\n    return callback(json);\n  });\n}\n/**\n * ファイルを読み込むタグを追加する\n *\n * @param {string} path\n * @param {string} urlParam\n * @param {string} namespace\n * @return {Promise} thenable\n */\n\nfunction requireFile(path, namespace) {\n  var e = null;\n  var ext = path.split('.').slice(-1)[0];\n  var deferred = new _classes_Deferred_class__WEBPACK_IMPORTED_MODULE_0__.Deferred();\n\n  if (ext === 'js') {\n    if (namespace && window[namespace]) {\n      deferred.resolve();\n      return deferred.promise;\n    }\n\n    e = document.createElement('script');\n    e.src = path;\n    e.setAttribute('defer', true);\n    document.body.appendChild(e);\n    e.addEventListener('load', deferred.resolve.bind(deferred));\n  } else if (ext === 'css' || /\\/\\/fonts\\.googleapis\\.com\\/css\\?/.test(path)) {\n    var links = document.querySelectorAll('link');\n\n    if ((0,_util__WEBPACK_IMPORTED_MODULE_1__.toArray)(links).some(function (link) {\n      return link.href === path;\n    })) {\n      deferred.resolve();\n    } else {\n      var head = document.querySelector('head');\n      e = document.createElement('link');\n      e.rel = 'stylesheet';\n      e.href = path;\n      head.appendChild(e);\n      e.addEventListener('load', deferred.resolve.bind(deferred));\n    }\n  }\n\n  return deferred.promise;\n}\n\n//# sourceURL=webpack://_WEBPACK_STARTER/./src/js/modules/request.js?");

/***/ }),

/***/ "./src/js/modules/util.js":
/*!********************************!*\
  !*** ./src/js/modules/util.js ***!
  \********************************/
/*! namespace exports */
/*! export countDown [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getDate [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getRect [provided] [no usage info] [missing usage info prevents renaming] */
/*! export shuffle [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sleep [provided] [no usage info] [missing usage info prevents renaming] */
/*! export timeout [provided] [no usage info] [missing usage info prevents renaming] */
/*! export toArray [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"toArray\": function() { return /* binding */ toArray; },\n/* harmony export */   \"shuffle\": function() { return /* binding */ shuffle; },\n/* harmony export */   \"getDate\": function() { return /* binding */ getDate; },\n/* harmony export */   \"countDown\": function() { return /* binding */ countDown; },\n/* harmony export */   \"getRect\": function() { return /* binding */ getRect; },\n/* harmony export */   \"sleep\": function() { return /* binding */ sleep; },\n/* harmony export */   \"timeout\": function() { return /* binding */ timeout; }\n/* harmony export */ });\n/**\n * 配列へ変換\n *\n * @param {nodelist|arguments} likeArray\n */\nfunction toArray(likeArray) {\n  return [].slice.call(likeArray);\n}\n/**\n * 配列をシャッフル\n *\n * @param {array} array\n */\n\nfunction shuffle(array) {\n  for (var i = array.length - 1; i > 0; i--) {\n    var j = Math.floor(Math.random() * (i + 1));\n    var temp = array[i];\n    array[i] = array[j];\n    array[j] = temp;\n  }\n\n  return array;\n}\n/**\n * Gets the date.\n *\n * @param  {string}  type The type\n * @return {string}  The date.\n */\n\nfunction getDate(type) {\n  var o = new Date();\n  var y = o.getFullYear();\n  var m = ('0' + (o.getMonth() + 1)).slice(-2);\n  var d = ('0' + o.getDate()).slice(-2);\n  var h = ('0' + o.getHours()).slice(-2);\n  var min = ('0' + o.getMinutes()).slice(-2);\n\n  switch (type) {\n    default:\n      return y + '_' + m + d + '_' + h + min;\n  }\n}\n/**\n * Counts the number of down.\n *\n * @param  {number}  year   The year\n * @param  {number}  month  The month\n * @param  {number}  day    The day\n * @return {number}  Number of down.\n */\n\nfunction countDown(year, month, day) {\n  var today = new Date();\n  var targetDay = new Date(year, month - 1, day);\n  var remainDay = Math.floor((targetDay - today) / (24 * 60 * 60 * 1000));\n  return ++remainDay;\n}\n/**\n * Gets the rectangle.\n *\n * @param  {Element}  e\n * @return {Object}  The rectangle.\n */\n\nfunction getRect(e) {\n  var _e = e.jquery ? e[0] : e;\n\n  var rect = _e.getBoundingClientRect();\n\n  return {\n    top: rect.top,\n    left: rect.left,\n    height: rect.bottom - rect.top,\n    width: rect.right - rect.left\n  };\n}\n/**\n * ディレイ\n *\n * @param  {number}   ms  The milliseconds\n * @return {Promise}  thenable\n */\n\nfunction sleep(ms) {\n  return new Promise(function (resolve) {\n    setTimeout(resolve, ms);\n  });\n}\n/**\n * プロミスのタイムアウト\n *\n * @param  {Promise}  promise  The promise\n * @param  {string}  ms       The milliseconds\n * @return {<type>}\n */\n\nfunction timeout(promise, ms) {\n  var timeout = sleep(ms).then(function () {\n    throw new Error('Operation timed out after ' + ms + ' ms');\n  });\n  return Promise.race([promise, timeout]);\n}\n\n//# sourceURL=webpack://_WEBPACK_STARTER/./src/js/modules/util.js?");

/***/ }),

/***/ "./src/css/main.scss":
/*!***************************!*\
  !*** ./src/css/main.scss ***!
  \***************************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://_WEBPACK_STARTER/./src/css/main.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/js/main.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;