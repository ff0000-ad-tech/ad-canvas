/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 89);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var core = module.exports = { version: '2.5.2' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.NetUtils = exports.TextUtils = exports.ObjectUtils = exports.MathUtils = exports.LocationUtils = exports.ImageUtils = exports.DcsUtils = exports.ColorUtils = exports.ArrayUtils = undefined;

var _DcsUtils = __webpack_require__(139);

var _DcsUtils2 = _interopRequireDefault(_DcsUtils);

var _ImageUtils = __webpack_require__(140);

var _ImageUtils2 = _interopRequireDefault(_ImageUtils);

var _LocationUtils = __webpack_require__(141);

var _LocationUtils2 = _interopRequireDefault(_LocationUtils);

var _TextUtils = __webpack_require__(142);

var _TextUtils2 = _interopRequireDefault(_TextUtils);

var _NetUtils = __webpack_require__(143);

var _NetUtils2 = _interopRequireDefault(_NetUtils);

var _ObjectUtils = __webpack_require__(144);

var ObjectUtils = _interopRequireWildcard(_ObjectUtils);

var _ColorUtils = __webpack_require__(145);

var ColorUtils = _interopRequireWildcard(_ColorUtils);

var _ArrayUtils = __webpack_require__(146);

var ArrayUtils = _interopRequireWildcard(_ArrayUtils);

var _MathUtils = __webpack_require__(147);

var MathUtils = _interopRequireWildcard(_MathUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// has named exports

// NOTE: DON'T import only "default" from ObjectUtils since the default
// function is a reserved keyword. Importing into scope will likely cause
// issues w/ code using the "default" keyword

// import MonetUtils from './lib/MonetUtils'
// import MotionUtils from './lib/MotionUtils'
console.log('keys', Object.keys(ObjectUtils));

exports.ArrayUtils = ArrayUtils;
exports.ColorUtils = ColorUtils;
exports.DcsUtils = _DcsUtils2.default;
exports.ImageUtils = _ImageUtils2.default;
exports.LocationUtils = _LocationUtils2.default;
exports.MathUtils = MathUtils;
exports.ObjectUtils = ObjectUtils;
exports.TextUtils = _TextUtils2.default;
exports.NetUtils = _NetUtils2.default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(5);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : (0, _typeof3.default)(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(111), __esModule: true };

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof3 = __webpack_require__(5);

var _typeof4 = _interopRequireDefault2(_typeof3);

function _interopRequireDefault2(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.__esModule = true;

var _iterator = __webpack_require__(92);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(117);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && (0, _typeof4.default)(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : (0, _typeof4.default)(obj);
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
// eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(5);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (it) {
  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(61);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(5);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(76);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(30);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(5);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(6);
var core = __webpack_require__(0);
var ctx = __webpack_require__(60);
var hide = __webpack_require__(16);
var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? function (C) {
      var F = function F(a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0:
              return new C();
            case 1:
              return new C(a);
            case 2:
              return new C(a, b);
          }return new C(a, b, c);
        }return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
      // make static versions for prototype methods
    }(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1; // forced
$export.G = 2; // global
$export.S = 4; // static
$export.P = 8; // proto
$export.B = 16; // bind
$export.W = 32; // wrap
$export.U = 64; // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperty = __webpack_require__(61);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var anObject = __webpack_require__(22);
var IE8_DOM_DEFINE = __webpack_require__(62);
var toPrimitive = __webpack_require__(43);
var dP = _defineProperty2.default;

exports.f = __webpack_require__(7) ? _defineProperty2.default : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {/* empty */}
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(106);
var defined = __webpack_require__(41);
module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(13);
var createDesc = __webpack_require__(29);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(12);
var core = __webpack_require__(0);
var fails = __webpack_require__(21);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var store = __webpack_require__(48)('wks');
var uid = __webpack_require__(32);
var _Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Styles = exports.Ratio = exports.ParticlesUtils = exports.ParticleModel = exports.Particle = exports.Graphic = exports.Emitter = exports.Markup = exports.FullScreen = exports.Effects = exports.Countdown = exports.Clamp = exports.Align = undefined;

var _Align = __webpack_require__(157);

var _Align2 = _interopRequireDefault(_Align);

var _Clamp = __webpack_require__(158);

var _Clamp2 = _interopRequireDefault(_Clamp);

var _Countdown = __webpack_require__(159);

var _Countdown2 = _interopRequireDefault(_Countdown);

var _Effects = __webpack_require__(160);

var _Effects2 = _interopRequireDefault(_Effects);

var _FullScreen = __webpack_require__(161);

var _FullScreen2 = _interopRequireDefault(_FullScreen);

var _Emitter = __webpack_require__(162);

var _Emitter2 = _interopRequireDefault(_Emitter);

var _Graphic = __webpack_require__(163);

var _Graphic2 = _interopRequireDefault(_Graphic);

var _Particle = __webpack_require__(164);

var _Particle2 = _interopRequireDefault(_Particle);

var _ParticleModel = __webpack_require__(165);

var _ParticleModel2 = _interopRequireDefault(_ParticleModel);

var _ParticlesUtils = __webpack_require__(166);

var _ParticlesUtils2 = _interopRequireDefault(_ParticlesUtils);

var _Ratio = __webpack_require__(167);

var _Ratio2 = _interopRequireDefault(_Ratio);

var _Styles = __webpack_require__(38);

var Styles = _interopRequireWildcard(_Styles);

var _Markup = __webpack_require__(37);

var Markup = _interopRequireWildcard(_Markup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// named exports

// import CanvasBlendMode from './lib/canvas/CanvasBlendMode'
// import CanvasBlur from './lib/canvas/CanvasBlur'
// import CanvasCircle from './lib/canvas/CanvasCircle'
// import CanvasColoring from './lib/canvas/CanvasColoring'
// import CanvasDrawer from './lib/canvas/CanvasDrawer'
// import CanvasElement from './lib/canvas/CanvasElement'
// import CanvasImage from './lib/canvas/CanvasImage'
// import CanvasLineTo from './lib/canvas/CanvasLineTo'
// import CanvasPath from './lib/canvas/CanvasPath'
// import CanvasRect from './lib/canvas/CanvasRect'
// import CanvasShape from './lib/canvas/CanvasShape'
// import CanvasSprite from './lib/canvas/CanvasSprite'
// import CanvasText from './lib/canvas/CanvasText'
// import CanvasTexture from './lib/canvas/CanvasTexture'
// import CanvasTiling from './lib/canvas/CanvasTiling'
// import CanvasTweener from './lib/canvas/CanvasTweener'
// import CanvasUtils from './lib/canvas/CanvasUtils'
exports.Align = _Align2.default;
exports.Clamp = _Clamp2.default;
exports.Countdown = _Countdown2.default;
exports.Effects = _Effects2.default;
exports.FullScreen = _FullScreen2.default;
exports.Markup = Markup;
exports.Emitter = _Emitter2.default;
exports.Graphic = _Graphic2.default;
exports.Particle = _Particle2.default;
exports.ParticleModel = _ParticleModel2.default;
exports.ParticlesUtils = _ParticlesUtils2.default;
exports.Ratio = _Ratio2.default;
exports.Styles = Styles;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(8);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.mix = undefined;

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mix = exports.mix = function mix(superclass) {
	return new MixinBuilder(superclass);
};

var MixinBuilder = function () {
	function MixinBuilder(superclass) {
		(0, _classCallCheck3.default)(this, MixinBuilder);

		this.superclass = superclass;
	}

	(0, _createClass3.default)(MixinBuilder, [{
		key: "with",
		value: function _with() {
			for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
				mixins[_key] = arguments[_key];
			}

			return mixins.reduce(function (c, mixin) {
				return mixin(c);
			}, this.superclass);
		}
	}]);
	return MixinBuilder;
}();

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LoaderBase = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoaderBase = exports.LoaderBase = function LoaderBase(superclass) {
	return function (_superclass) {
		(0, _inherits3.default)(_class, _superclass);

		function _class() {
			var _ref;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			(0, _classCallCheck3.default)(this, _class);

			var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args)));

			var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

			var L = _this;

			L.onComplete = arg.onComplete || function () {};
			L.onFail = arg.onFail || function () {};
			L.onProgress = arg.onProgress || function () {};
			L.name = arg.name || '';
			L.scope = arg.scope || L;
			L.dataRaw;
			L.cacheBuster = arg.cacheBuster || false;

			L._failCalled = false;
			return _this;
		}

		(0, _createClass3.default)(_class, [{
			key: '_handleFail',
			value: function _handleFail() {
				var L = this;
				// trace ( 'LoaderBase._handleFail()' )
				if (!L._failCalled) {
					L._failCalled = true;
					L.onFail.call(L.scope, L);

					trace('Loader "' + L.name + '" Fail:', L.url);
				}
			}
		}]);
		return _class;
	}(superclass);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperties = __webpack_require__(17);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _Timezone = __webpack_require__(39);

var _Timezone2 = _interopRequireDefault(_Timezone);

var _DateFormatter = __webpack_require__(26);

var _DateFormatter2 = _interopRequireDefault(_DateFormatter);

var _adUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TzDate(args) {
	args = args || {};

	var _outputTimezone;
	var _dateString = args.datetime;
	if (Array.isArray(_dateString)) {
		_dateString = args.datetime[0];
		_outputTimezone = args.datetime[1];
	}

	if (typeof _dateString === 'string') {

		// make there is a "T" to follow proper ISO format.  No "T" will create Invalid Dates in Safari
		_dateString = _dateString.replace(/(\T|\s)/g, 'T');

		// if +/-##:## timzone is set this will define find the corresponding timezone and assign it, 
		// thus ignoring the second param if is an Array: [ datetimeString, timezone ]
		var currentTzString = _dateString.match(/(\+|\-)([0-9]{2})\:([0-9]{2})/g);

		if (currentTzString) {
			//var hours = +currentTzString[0].split(':')[0];

			currentTzString = currentTzString[0];
			//	trace ( 'hours are:', hours )
			// if ( hours < 0 ){
			// 	var dls = Timezone.getDLS ( new Date ( _dateString ));
			// 	hours -= dls;

			// 	_outputTimezone = Timezone.get ( hours );
			// 	// trace ( ' so the output timezone is:', _outputTimezone )
			// } else if ( hours == 0 ){
			// 	_outputTimezone = Timezone.UTC;
			// } else {
			// 	_outputTimezone = Timezone.get ( hours );
			// }

			//if ( hours == 0 ){
			if (currentTzString == '+00:00') {
				_outputTimezone = _Timezone2.default.UTC;
			} else {

				//// if ( hours < 0 ) {
				var dls = _Timezone2.default.getDLS(new Date(_dateString));
				//	hours -= dls;
				//// } 
				//_outputTimezone = Timezone.get ( hours );


				var value = isoTzToNum(currentTzString, dls);
				//	trace ( '\t\tisoTzToNum:', value, currentTzString)
				_outputTimezone = _Timezone2.default.get(value);
			}
		} else {

			if (_outputTimezone) {
				_outputTimezone = _Timezone2.default.get(_outputTimezone);
				var offset = _Timezone2.default.getDLS(new Date(_dateString));
				_dateString += formatTimezoneISO(_outputTimezone, offset);
			}
		}
	}

	if (args.outputTimezone) {
		_outputTimezone = _Timezone2.default.get(args.outputTimezone);
	} else if (adParams.defaultTimezone) {
		_outputTimezone = _Timezone2.default.get(adParams.defaultTimezone);
	}
	//trace ( '_outputTimezone:', _outputTimezone )
	// trace ( '_dateString:', _dateString )

	var T = new Date(_dateString);

	// ---------------------------------------------------------------------------------------------------------------
	// GETTER | SETTER
	(0, _defineProperties2.default)(T, {

		/**
  	@memberOf TzDate
  	@var {object|string|number} outputTimezone
  	@desc
  		Getter|Setter : Change the timezone that all methods will default return the date/time in. Does NOT change the date, just how it is output.
  	@example
  		// get
  		trace ( myDate.outputTimezone );
  			// set
  		myDate.outputTimezone = Timezone.EST;
  */
		outputTimezone: {
			get: function get() {
				return _outputTimezone || _Timezone2.default.UTC;
			},
			set: function set(value) {
				_outputTimezone = _Timezone2.default.get(value);
			}
		}
	});

	// ---------------------------------------------------------------------------------------------------------------
	// PUBLIC METHODS

	/**
 	@memberOf TzDate
 	@method clone
 	@desc
 		A shorthand for making a new TzDate with the same datetime and outputTimezone
 	@returns {TzDate}
 	@property {object|string|number} newTimezone
 		Change the outputTimezone of the new reeturned TzDate
 	@example
 		var myCopy = myDate.clone();
 		myCopy.print();
 */
	T.clone = function (newTimezone) {
		newTimezone = newTimezone || T.outputTimezone;
		return new TzDate({
			datetime: T,
			outputTimezone: newTimezone
		});
	};

	/**
 	@memberOf TzDate
 	@method getHoursIn
 	@desc
 		Similar to Date.getHours(), but this will return the hours in a specified timezone, 
 		defaulting to the outputTimezone of the instance
 	@returns {number}
 	@property {object|string|number} inTimezone
 		The timezone at which you would like the hours, if null, will use the outputTimezone
 	@property {boolean} inMilitary
 		Whether the hours should be in military 24 hour or standard 12 hour. true = base 24, false = base 12. Default is false.
 	@example
 		var hours = myDate.getHoursIn ( Timezone.EST, false );
 */
	T.getHoursIn = function (inTimezone, inMilitary) {
		var date = T.getIn(inTimezone);
		var time = date.getHours();

		if (inMilitary != true && time > 12) {
			time = time % 12;
		}
		return time;
	};

	T.format = function (format, args) {
		return _DateFormatter2.default.format(T, format, args);
	};

	/**
 	@memberOf TzDate
 	@method getIn
 	@desc
 		If you need the actual TzDate object with the adjust time applied. 
 		<br><span style="color:#ff0000">WARN: This will return a TzDate with a different base time.
 		This method is mostly used by other internal methods and DateSchedule. This should be used with caution.</span>
 	@returns {TzDate}
 	@property {object|string|number} inTimezone
 		The timezone at which you would like the TzDate CHANGED to
 	@example
 		var changedDate = myDate.getIn ( Timezone.EST );
 */
	T.getIn = function (inTimezone) {
		var utcString = T.toISOString().split('.')[0];

		var offset = _Timezone2.default.getDLS(T);
		// var localTimezone = formatTimezoneISO ( Timezone.LOCAL, offset );
		var localTimezone = formatTimezoneISO(_Timezone2.default._trueLOCAL, offset);

		var tz = _Timezone2.default.get(inTimezone || T.outputTimezone);

		var utcDateAdjusted = new Date(utcString + localTimezone);
		// var utcDateAdjusted = new TzDate ({
		//  	datetime: utcString + localTimezone,
		// 	outputTimezone: tz
		// });	
		var dls = _Timezone2.default.getDLS(utcDateAdjusted);
		if (tz.label == _Timezone2.default.UTC.label) {
			dls = 0;
		}
		// trace ( '\t       utcString:', utcString )
		// trace ( '\t   localTimezone:', localTimezone )
		// trace ( '\t              tz:', tz, Timezone.UTC )
		// trace ( '\t             dls:', dls )
		// trace ( '\t          offset:', tz.value + dls )
		// trace ( '\t utcDateAdjusted:', utcDateAdjusted, 'in', tz.label )

		return _DateFormatter2.default.adjust(utcDateAdjusted, { hour: tz.value + dls });
	};

	/**
 	@memberOf TzDate
 	@method print
 	@desc
 		Is a shorthand for .toFullDateTime()
 	@returns {string}
 	@property {object|string|number} inTimezone
 		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
 	@example
 		myDate.print ( Timezone.EST );
 */
	T.print = function (inTimezone) {
		var fullDateTime = T.toFullDateTime(inTimezone);
		trace(fullDateTime);
		return fullDateTime;
	};

	/**
 	@memberOf TzDate	
 	@method toFullDateTime
 	@property {Timezone|object|string|number} inTimezone
 		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
 	@returns {string}
 	@desc
 		Returns a string in the format of "Weekday Mon DD YYYY HH:MM:SS Timezone"
 */
	T.toFullDateTime = function (inTimezone) {
		inTimezone = inTimezone || T.outputTimezone;

		var utcDateAdjusted = T.getIn(inTimezone);
		var utcDateAdjString = utcDateAdjusted.toString().split('GMT')[0] + inTimezone.label;
		//trace ( '\t  inTimezone:', inTimezone )	
		//trace ( '\t  utcDateAdjusted:', utcDateAdjusted.toString() )
		//trace ( '\t  utcDateAdjString:', utcDateAdjString )
		return utcDateAdjString;
	};

	/**
 	@memberOf TzDate	
 	@method toSimpleDate
 	@property {Timezone|object|string|number} inTimezone
 		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
 	@returns {string}
 	@desc
 		Returns a string in the format "MM/DD" 
 */
	T.toSimpleDate = function (inTimezone) {
		var tzDate = T.getIn(inTimezone);
		return tzDate.getMonth() + 1 + "/" + tzDate.getDate();
	};

	/**
 	@memberOf TzDate	
 	@method toDate
 	@property {Timezone|object|string|number} inTimezone
 		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
 	@returns {string}
 	@desc
 		Returns a string in the format "MM/DD/YYYY" 
 */
	T.toDate = function (inTimezone) {
		var tzDate = T.getIn(inTimezone);
		return T.toSimpleDate(inTimezone) + "/" + tzDate.getFullYear();
	};

	/**
 	@memberOf TzDate	
 	@method toDateTime
 	@property {Timezone|object|string|number} inTimezone
 		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
 	@returns {string}
 	@desc
 		Returns a string in the format "MM/DD/YYYY HH:MMa/p" 
 */
	T.toDateTime = function (inTimezone) {
		return T.toDate(inTimezone) + " " + T.toTime(inTimezone);
	};

	/**
 	@memberOf TzDate	
 	@method toSimpleDateTime
 	@property {Timezone|object|string|number} inTimezone
 		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
 	@returns {string}
 	@desc
 		Returns a string in the format "MM/DD HH:MM" 
 */
	T.toSimpleDateTime = function () {
		return T.toSimpleDate() + " " + T.toTime();
	};

	/**
 	@memberOf TzDate	
 	@method toTime
 	@property {Timezone|object|string|number} inTimezone
 		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
 	@returns {string}
 	@desc
 		Returns a string in the format "HH:MM AM/PM" 
 */
	T.toTime = function (inTimezone) {
		return T.toSimpleTime(inTimezone) + ' ' + T.toMeridiem(inTimezone);
	};

	/**
 	@memberOf TzDate	
 	@method toSimpleTime
 	@property {Timezone|object|string|number} inTimezone
 		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
 	@property {boolean} inMilitary
 		Whether the hours should be in military 24 hour or standard 12 hour. true = base 24, false = base 12. Default is false.
 	@returns {string}
 	@desc
 		Returns a string in the format "HH:MM" 
 		@example
 		myDate.toSimpleTime();
 		myDate.toSimpleTime ( Timezone.PST );
 		myDate.toSimpleTime ( Timezone.PST, true );
 */
	T.toSimpleTime = function (inTimezone, inMilitary) {
		var tzDate = T.getIn(inTimezone);

		var hours = T.getHoursIn(inTimezone, inMilitary);
		if (hours == 0) {
			hours = 12;
		}
		if (inMilitary) {
			hours = _adUtils.TextUtils.pad(hours, 2);
		}

		return hours + ":" + _adUtils.TextUtils.pad(tzDate.getMinutes(), 2);
	};

	/**
 	@memberOf TzDate	
 	@method toMeridiem
 	@property {Timezone|object|string|number} inTimezone
 		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
 		@property {boolean} includeTimezone
 		Whether to include the timezone, defaults to false
 	@returns {string}
 	@desc
 		Returns the meridiem "am", "pm" or "am/et", "am/et"
 		@example
 		myDate.toMeridiem();
 		// returns "am" or "pm"
 			myDate.toMeridiem ( Timezone.PST );
 		// returns "am" or "pm", of the datetime in Pacific Timezone
 			myDate.toMeridiem ( Timezone.PST, true );
 		// returns "am/pt" or "pm/pt", of the datetime in Pacific Timezone
 		
 		myDate.toMeridiem ( null, true ); 
 		// returns "am/et" or "pm/et", of the datetime in the outputTimezone
 */
	T.toMeridiem = function (inTimezone, includeTimezone) {
		var tz = inTimezone || T.outputTimezone;
		var tzDate = T.getIn(tz);
		return (tzDate.getHours() >= 12 ? 'pm' : 'am') + (includeTimezone == true ? '/' + tz.abbr : '');
	};

	/**
 	@memberOf TzDate	
 	@method toShortestTime
 	@property {Timezone|object|string|number} inTimezone
 		The timezone at which you would like the TzDate printed out as, defaults to outputTimezone.
 	@property {boolean} inMilitary
 		Whether the hours should be in military 24 hour or standard 12 hour. true = base 24, false = base 12. Default is false.
 	@returns {string}
 	@desc
 		Returns a string in the format "HH:MM", but if there are no minutes will return "HH"
 */
	T.toShortestTime = function (inTimezone, inMilitary) {
		// will remove minutes if they are 0
		var timeStr = T.toSimpleTime(inTimezone, inMilitary);
		var adjustedTime = timeStr.replace(/:00$/g, '');
		return adjustedTime;
	};

	T.toDateTimeISO = function (inTimezone) {
		var date = T.toDate(inTimezone);
		var dateSplit = date.split('/');
		var year = dateSplit[2];
		var month = _adUtils.TextUtils.pad(dateSplit[0], 2);
		var day = _adUtils.TextUtils.pad(dateSplit[1], 2);
		var time = T.toSimpleTime(inTimezone, true);
		return year + '-' + month + '-' + day + 'T' + time + ':00';
	};

	// ---------------------------------------------------------------------------------------------------------------
	// PROTECTED PROPERTIES
	T._isTzDate = true;

	// ---------------------------------------------------------------------------------------------------------------
	// PRIVATE METHODS
	function formatTimezoneISO(timezone, offset) {
		var num = timezone.value + offset;
		var hours = num > 0 ? Math.floor(num) : Math.ceil(num);
		var minutes = num % 1 * 60;
		minutes = num > 0 ? Math.floor(minutes) : Math.ceil(minutes);

		var operator = num < 0 ? '-' : '+';
		return operator + _adUtils.TextUtils.pad(Math.abs(hours), 2) + ':' + _adUtils.TextUtils.pad(Math.abs(minutes), 2);
	}

	function isoTzToNum(str, offset) {
		var split = str.split(':');
		var hours = +split[0];
		var mins = +split[1] / 60;
		//if ( hours == 1 ) offset = 0; // +01:00
		return hours + mins - offset;
	}

	return T;
} /**
  	@class TzDate
  	@desc
  		This class is a wrapper for the Javascript "Date" object.
  
  		<br><br>
  
  		The standard Date object only returns the local time. TzDate returns that local time but adds the ability to 
  		get that same date, time, and meridium in ANY timezone, without extra conversions.  Simply ask for anything
  		in any timezone and it will return you the adjusted date/time while maintaining the original date.
  		
  		<br><br>
  		
  		One thing to understand is the difference between: the timezone the TzDate is being DECLARED in VS the timezone the TzDate is DISPLAYING in.
  		When creating a TzDate, you will be providing the date, time, and timezone of the DECLARED time. A way to think of 
  		it would be: If you are in Los Angeles, you are in the US/Pacific timezone. So if you look at your calendar and clock
  		on the wall, you would enter that date, time and provide the timezone for US/Pacific which is Timezone.PST.  
  				
  		<codeblock>
  			var myDate = new TzDate ({
  				datetime : [ '2017-05-18T12:00:00', Timezone.PST ]
  			})
  			trace ( myDate ); // "Thu May 18 2017 12:00:00 GMT-0700 (PDT)"
  			myDate.print(); // "Thu May 18 2017 12:00:00 US/Pacific"
  		</codeblock>
  		
  		<br>
  		
  		Tracing out a date can get confusing with that end part "GMT-0700 (PDT)". That is how the browser reports the local timezone.
  		However, we need to be able to see the date clearly in any timezone.  The print() method allows for a clearer output specifically
  		telling you what timezone you have asked for. Lets look at that same date in other timezones:
  				
  		<codeblock>
  			myDate.print( Timezone.MST ); // "Thu May 18 2017 13:00:00 US/Mountain"
  			myDate.print( Timezone.EST ); // "Thu May 18 2017 15:00:00 US/Eastern"
  		</codeblock>
  
  		<br>
  
  		An important concept to understand is UTC = Universal Time Coordinated. All time is based off of "zero" point, which is also called 
  		Greenwich Mean Time.  Let's look at our same time in UTC:
  
  		<codeblock>
  			myDate.print( Timezone.UTC ); // "Thu May 18 2017 19:00:00 UTC"
  		</codeblock>
  
  		<br>
  
  		You can start to see how the timezones affect time by seeing that noon on the west coast is the same 7 PM (aka 19 hours) at the origin.
  		So the time we first declared at the beginning could also be created as any of these other times that we have seen.  Remember that when
  		a time is created, no matter what timezone, there is a different way of saying it, but the actual time is just a snap shot of a momnet 
  		in time.  Let's look at how we could create the same date different ways:
  
  		<codeblock>
  			var myDate_eastern = new TzDate ({
  				datetime : [ '2017-05-18T15:00:00', Timezone.EST ]
  			})
  			myDate_eastern.print(); // "Thu May 18 2017 15:00:00 US/Eastern"
  			myDate_eastern.print( Timezone.PST ); // "Thu May 18 2017 12:00:00 US/Pacific"
  		</codeblock>
  
  		<br>
  
  		This time, we created the date as if we were on the east coast in the US/Eastern timezone, so the clock on the wall would say 3:00 PM.  
  		Notice that all the outputs are all the same, that is because these dates are the same moment, just expressed differently.
  
  		<br><br>
  
  		Sometimes, you will create the date IN a specific timezone, but you always want to see it in another.  Lets take our first date we created.
  		We could pass the timezone into the print() method everytime, but that can get repetitive and sometimes you don't have access to that timezone
  		later on.  So you can create an outputTimezone for the date, so all methods will return in that timezone:
  
  		<codeblock>
  			var myDate = new TzDate ({
  				datetime : [ '2017-05-18T12:00:00', Timezone.PST ],
  				outputTimezone : Timezone.EST
  			})
  			myDate.print(); // "Thu May 18 2017 15:00:00 US/Eastern"
  		</codeblock>
  
  		<br>
  
  		This can be also changed after the date was created, and again it will always output to that timezone.  BUT, if you pass in a timezone to a method,
  		that will take priority:
  
  		<codeblock>
  			myDate.outputTimezone = Timezone.PST;
  			myDate.print(); // "Thu May 18 2017 12:00:00 US/Pacific"
  
  			myDate.print( Timezone.EST ); // "Thu May 18 2017 15:00:00 US/Eastern"
  		</codeblock>
  
  		<br><br>
  		
  		On to slightly more advanced concepts: ISO dates. Notice that the date strings we have been passing in so far have been in this format:
  		
  		<br>
  		
  		<codeblock>
  			'2017-05-18T12:00:00' // Year - Month - Day T Hour : Minute : Second 
  		</codeblock>
  		
  		<br>
  		
  		This is a partial ISO date string.  The last part that is missing is the timezone.  So our first date we created, in proper ISO would actually 
  		look like this:
  
  		<br>
  		
  		<codeblock>
  			'2017-05-18T12:00:00-07:00' // Year - Month - Day T Hour : Minute : Second - PST Timezone
  		</codeblock>
  		
  		<br>
  		The -07:00 on the end is the timezone of the time.  Think of it like this: The date and time are what you see on that clock and calendar on your wall
  		where you are currently standing.  That last part, the timezone, is saying how far FROM the origin (UTC) you are. Lets look at it as a simple math problem.
  
  		<codeblock>
  			 (origin zero point) - timezone = (date and time where you are)
  								
  								UTC - 07:00 = 2017-05-18T12:00:00
  		
  										UTC = 2017-05-18T12:00:00 + 07:00
  
  										UTC = 2017-05-18T19:00:00+00:00
  		</codeblock>
  
  		<br>
  
  		This proper ISO full datetime can be used when creating a TzDate, rather than the array if you are confident of the timezone:
  
  		<codeblock>
  			var myDate = new TzDate ({
  				datetime : '2017-05-18T12:00:00-07:00'
  			})
  			myDate.print(); // "Thu May 18 2017 12:00:00 US/Pacific"
  		</codeblock>
  
  		<br><br>
  
  		<b>Velvet JSON dates</b>
  
  		<br><br>
  
  		Dates that are in the Velvet JSON will be in proper ISO format AND there will be a timezone provided, like so:
  
  		<codeblock>
  		var jsonDateSnippet = {
  			datetime : "2017-05-18T19:00:00+00:00",
  			timezone : "US/Eastern"
  		}
  		</codeblock>
  
  		<br>
  
  		This is providing the date/time in UTC and then saying that the dates should be output in US/Eastern timezone.  So we would create our TzDate:
  
  		<codeblock>
  			var myDate = new TzDate ({
  				datetime : jsonDateSnippet.datetime,
  				outputTimezone : jsonDateSnippet.timezone
  			})
  			myDate.print(); // "Thu May 18 2017 15:00:00 US/Eastern"
  		</codeblock>
  		
  */
exports.default = TzDate;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adUtils = __webpack_require__(1);

var _TzDate = __webpack_require__(25);

var _TzDate2 = _interopRequireDefault(_TzDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class DateFormatter

	@classdesc
		This class provides a collection of year, month, date labels along with a utility for mananipulating
		a TzDate/Date object.		
*/
var DateFormatter = new function () {

	var D = this;

	D.MS_PER_SECOND = 1000;
	D.MS_PER_MINUTE = 6e4; // 1000 * 60;
	D.MS_PER_HOUR = 36e5; // D.MS_PER_MINUTE * 60;
	D.MS_PER_DAY = 864e5; // D.MS_PER_HOUR * 24;
	D.MS_PER_WEEK = 6048e5; // D.MS_PER_DAY * 7;

	/**
 	@memberOf DateFormatter	
 	@method adjust
 	@property {TzDate|Date} date
 		The date that will be the starting point for adjustment
 	@property {Object} times
 		An Object of time keys to adjust the date with. Positive numbers will increase the time, while negative numbers
 		will decrement it. The accepted keys are: week, day, hour, minute, second
 	@returns {TzDate|Date}
 	@desc
 		Returns the same type of Object provided: TzDate returns TzDate, Date returns Date
 		<codeblock>
 		// adjust the time of a TzDate
 		var myTzDate = new TzDate({
 			datetime : [ '2017-12-31 12:00:00', Timezone.UTC ]
 		})
 		var adjustedTzDate = DateFormatter.adjust( myTzDate, { day:-1.5, hour:4.2, minute:90 });
 		// Sat Dec 30 2017 05:42:00 UTC
 
 		// adjust the time of a regualar Date object
 		var myDate = new Date(2017,0,1)
 		var adjustedDate = DateFormatter.adjust( myDate, { day:-1.5, hour:4.2, minute:90 });
 		// Fri Dec 30 2016 17:42:00 GMT-0800 (PST)
 	</codeblock>
 */
	D.adjust = function (date, times) {
		var dateAdj;
		if (date._isTzDate) {
			dateAdj = date.clone();
		} else {
			dateAdj = new Date(date);
		}

		for (var key in times) {
			var cons = 'MS_PER_' + key.toUpperCase();
			var val = D[cons];
			var add = times[key] * val;
			// trace ( 'key:', key, times[key] )
			// trace ( '\tcons:', cons )
			// trace ( '\tval:', val )
			// trace ( '\tadd:', add )
			dateAdj.setTime(dateAdj.getTime() + add);
		}
		// trace ( 'date:', date )
		// trace ( 'dateAdj:', dateAdj )
		return dateAdj;
	};

	D.getNumericSuffixFor = function (value, includeDate) {
		var value = value.toString();
		var lastNumber = value.slice(value.length - 1);
		var labels = D.getLabels();
		var output = labels.TH;

		switch (lastNumber) {
			case '1':
				if (value != '11') output = labels.ST;
				break;
			case '2':
				if (value != '12') output = labels.ND;
				break;
			case '3':
				if (value != '13') output = labels.RD;
				break;
		}

		return (includeDate ? value : '') + output;
	};

	D.format = function (tzDate, format, args) {
		// YYYY - 2017
		// YY - 17
		// MMMM - September
		// MMM - Sept
		// MM - 09, 10, 11
		// M - 9, 10, 11
		// DDDD - Monday
		// DDD = Mon
		// DD - 08, 09, 10 (date)
		// D - 8, 9, 10
		// Do - 1st, 2nd, 3rd, 4th
		// HH - 0...23 > 09, 10, 11
		// H - 0...23 > 9, 10, 11
		// hh - 1...12 > 09, 10, 11
		// h - 1...12 > 9, 10, 11
		// mm - 0...59 > 09, 10, 11
		// m - 0...59 > 9, 10, 11
		// ss - 0...59 > 09, 10, 11
		// s - 0...59 > 9, 10, 11
		// T - 7:00, 8:15
		// t - 7, 8:15
		// a - am pm
		// z - timezone abbreviation
		// ^ - toUpperCase()

		// args - language, weekday exceptions, month exceptions
		args = args || {};

		var tz = args.inTimezone || tzDate.outputTimezone;
		var language = args.language;

		var dateIn = tzDate.getIn(tz);
		trace('.format( \'' + format + '\' )');

		var labels = D.getLabels(language);
		var month = dateIn.getMonth();
		var hours = dateIn.getHours();
		var minutes = dateIn.getMinutes();

		// ${YYYY}
		var result = format.replace(/\$\{(.*?)\}/g, function (match, token) {

			var output = token;
			var trim = 0; // only used for year
			var padding;
			var needsLabel;
			var upper = false;
			var keep = true;

			// searches for ^ char for toUpperCase()
			token.replace(/(.+)(\^)/, function (match3, token3) {
				token = token3;
				upper = true;
				trace('\t\t\t', match3, token3);
			});

			// check for a set of 2, except Y. flags padding then converts to single character MM > M
			if (token.length == 2) {
				token.replace(/(?![Yo])([a-zA-Z]).*?\1/, function (match2, token2) {
					token = token2.substr(0, 1);
					trace('\t\t', match2, token2, token);
					padding = 2;
				});
			}

			switch (token) {
				case 'YY':
					trim = -2;
				case 'YYYY':
					output = ('' + dateIn.getFullYear()).slice(trim);
					break;

				case 'M':
					output = month + 1;
					break;
				case 'MMM':
					output = labels.MONTHS_ABRV[month];
					break;
				case 'MMMM':
					output = labels.MONTHS_FULL[month];
					break;

				case 'D':
					output = dateIn.getDate();
					break;
				case 'Do':
					output = D.getNumericSuffixFor(dateIn.getDate(), true);
					break;
				case 'DDD':
					output = labels.WEEKDAYS_ABRV[dateIn.getDay()];
					break;
				case 'DDDD':
					output = labels.WEEKDAYS_FULL[dateIn.getDay()];
					break;

				case 't':
					keep = minutes > 0;
				case 'T':
					output = hours;
					if (keep) {
						output += ':' + _adUtils.TextUtils.pad(minutes, 2);
					}
					break;

				case 'H':
					output = hours;
					break;

				case 'h':
					output = hours % 12;
					if (output == 0) {
						output = 12;
					}
					break;

				case 'm':
					output = minutes;
					break;

				case 's':
					output = dateIn.getSeconds();
					break;

				case 'a':
					output = hours >= 12 ? 'pm' : 'am';
					break;

				case 'z':
					output = tz.abbr;
					break;
			}

			if (padding) {
				output = _adUtils.TextUtils.pad(output, padding);
			}

			if (upper) {
				output = output.toUpperCase();
			}

			trace('\t', match, token, output);

			return output;
		});

		// trace ( '<' )
		return result;
	};

	// -------------------------------------------------------------------------------------------------------------------
	// LABELS
	/**
 	@memberOf DateFormatter	
 	@var language
 	@desc
 		This controls what language date-messaging will use. 
 */
	D.language = 'english';

	var _languageLabels = {
		'english': {
			MONTHS_FULL: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			MONTHS_ABRV: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
			MONTHS_EXCP: ['', '', '', '', '', '', '', '', 'sept', '', '', ''],

			WEEKDAYS_FULL: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			WEEKDAYS_ABRV: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
			WEEKDAYS_EXCP1: ['', '', 'tues', 'wednes', 'thur', '', ''],
			WEEKDAYS_EXCP2: ['', '', '', '', 'thurs', '', ''],

			ST: 'st',
			ND: 'nd',
			RD: 'rd',
			TH: 'th',
			OF: 'of',

			TOMORROW: 'Tomorrow',
			TODAY: 'Today',
			TONIGHT: 'Tonight',
			NOW: 'Live Now',
			PAST: 'Past'
		},
		'spanish': {
			MONTHS_FULL: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
			MONTHS_ABRV: ['enero', 'feb', 'marzo', 'abr', 'mayo', 'jun', 'jul', 'agosto', 'sept', 'oct', 'nov', 'dic'],
			MONTHS_EXCP: ['', '', '', '', '', '', '', '', 'sep', '', '', ''],

			WEEKDAYS_FULL: ['domingo', 'lunes', 'martes', 'mi&#201;rcoles', 'jueves', 'viernes', 's&#193;bado'],
			WEEKDAYS_ABRV: ['dom', 'lun', 'mar', 'mi&#201;r', 'jue', 'vier', 's&#193;b'],
			WEEKDAYS_EXCP1: ['', '', 'tues', 'wednes', 'thur', '', ''],
			WEEKDAYS_EXCP2: ['', '', '', '', 'thurs', '', ''],

			ST: 'ro',
			ND: 'ndo',
			RD: 'rd',
			TH: 'th',
			OF: 'de',

			TOMORROW: 'ma&#209;ana',
			TODAY: 'hoy',
			TONIGHT: 'esta noche',
			NOW: 'en vivo',
			PAST: 'past'
		}
	};

	D.monthsFull = 'MONTHS_FULL';
	D.monthsAbrv = 'MONTHS_ABRV';
	D.weekdaysFull = 'WEEKDAYS_FULL';
	D.weekdaysAbrv = 'WEEKDAYS_ABRV';

	/**
 	@memberOf DateFormatter	
 	@method 
 		
 	@memberOf DateFormatter	
 	@method getLabels
 	@property {String} language
 		The language that will be used.  Currently only "english" and "spanish".  Defaults to the value set on the class level Dateformatter.langauge
 	@returns {TzDate|Date}
 	@desc
 		Returns an objects that defines labels that date-messaging will use in the ad, used directly by DateSchedule and RecurringSchedule 
 */
	D.getLabels = function (language) {
		return _languageLabels[language || D.language];
	};

	// D.applyMonthException = function() {
	// 	applyExceptions ( 'MONTHS', '' );
	// }

	// D.applyWeekDayException = function ( index ) {
	// 	applyExceptions ( 'WEEKDAYS', index );
	// }

	// function applyExceptions ( type, index ){
	// 	for ( var key in _languageLabels ){
	// 		var lang = _languageLabels[key];
	// 		var base = lang [ type + '_ABRV' ];
	// 		var next = lang [ type + '_EXCP' + index ];
	// 		for ( var i = 0; i < base.length; i++ ){
	// 			if ( next[i] != '' ){
	// 				base[i] = next[i]
	// 			}
	// 		}
	// 	}
	// }
}();

exports.default = DateFormatter;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.get = get;
exports.getElement = getElement;
exports.removeChildren = removeChildren;
exports.addiFrame = addiFrame;
exports.addSvg = addSvg;
exports.applyToElements = applyToElements;
/**
	@module Markup
	@desc
		This object contains utilities relateed to dom elements.
*/

/**
	@memberof Markup
	@method get
	@param {string} selector
		A string selector. It defaults to find the string as an id, or if the string starts with '#'. 
		If starts with '.', it selects by class name. If wrapped with '<>', it selects by tag name.
	@param {element} parent
		Optional parent element to get the element(s) from. Defaults to document.
	@returns {element|HTMLCollection}
		One single element if the selector is an id. With class name or tag name, it returns an HTML collection ( similiar to an array ).
	@desc
		Used to select elements.

	@example
		// get element by its id called 'myId'
		Markup.get( 'myId' );
		
		// same as above
		Markup.get( '#myId' );
		
		// get element by CSS classname 'myClass'
		Markup.get( '.myClass' );
		
		// get elements by tag name 'head'
		Markup.get( '<head>' );
*/
function get(selector, parent) {
	if (typeof selector !== 'string') {
		return selector;
	}

	parent = parent || document;
	selector = selector.trim();

	switch (selector[0]) {
		case '#':
			// id
			return parent.getElementById(selector.slice(1));
			break;
		case '.':
			// class
			return parent.getElementsByClassName(selector.slice(1));
			break;
		case '<':
			// tag
			return parent.getElementsByTagName(selector.slice(1, selector.length - 1));
			break;
		default:
			// default to id for backworad support 
			return parent.getElementById(selector);
	}
}
// the deprecated syntax 12/28/16
function getElement(selector, parent) {
	return get(selector, parent);
}

/**
	@memberof Markup
	@method removeChildren
	@param {element} _target
		element to be targeted
	@desc
		Removes all the children elements of an element
*/
function removeChildren(_target) {
	var element = get(_target);
	trace('removeChildren (' + _target + ')');
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

/* 
	To be deprecated after moving addiFrame and addSvg to UIComponent 
*/
// export function applyContainerCss (_element, _containerData) {
// 	if (!_containerData.css) _containerData.css = {};
// 	if (!_containerData.css.position)
// 		_containerData.css.position = 'absolute';
// 	Styles.setCss(_element, _containerData.css);
// 	Styles.setCss(_element, _containerData.styles);
// }


/**	Method: addIframe()
		Deprecated. Add an iframe to the containerData.target, pointing at containerData.source.  */
function addiFrame(_containerData) {
	var element = document.createElement('iFrame');
	element.id = _containerData.id;
	element.width = _containerData.css.width;
	element.height = _containerData.css.height;

	delete _containerData.css.width;
	delete _containerData.css.height;

	// iframe properties
	element.setAttribute('src', _containerData.source);
	element.setAttribute('frameborder', '0');
	element.setAttribute('scrolling', 'no');
	element.setAttribute('allowfullscreen', '');

	applyContainerCss(element, _containerData);

	_containerData.target.appendChild(element);
	return element;
}

/**	Method: addSvg()
	Deprecated.

	_containerData			- object with the necessary keys for creating an element. */
function addSvg(_containerData) {
	var nameSpace = 'http://www.w3.org/2000/svg';
	var element = document.createElementNS(nameSpace, 'svg');
	element.setAttribute('height', _containerData.height);
	element.setAttribute('width', _containerData.width);

	var path = document.createElementNS(nameSpace, 'path');
	path.setAttribute('d', _containerData.d);
	path.setAttribute('fill', _containerData.fill);

	if (_containerData.stroke != undefined) {
		path.setAttribute('stroke', _containerData.stroke);
	}
	if (_containerData.strokeWidth != undefined) {
		path.setAttribute('stroke-width', _containerData.strokeWidth);
	}
	element.appendChild(path);

	applyContainerCss(element, _containerData);

	_containerData.target.appendChild(element);
	return element;
}

/**
	@memberof Markup
	@method applyToElements
	@param {object} arg
		See properties for more info:
		@property {object} arg.scope
			the scope of this
		@property {function} arg.method
			the function to use
		@property {element|array} arg.element
			the element(s) to apply the method to, can be a single element or an array
		@property {string|number|array|object} arg.methodArg
			the argument to pass to the method function
	@desc
		Apply a method to multiple elements. Currently assuming the method accepts element as the first argument,
		and a second argument as the setting. 

	@example
		var myElements = Markup.get( '.centered-blocks' );
		Markup.applyToElements({
			scope: Align,
			method: Align.set,
			elements: myElements,
			methodArg: { x: Align.CENTER }
		});
*/
function applyToElements(arg) {
	if (arg.elements.length === undefined) {
		// assume it is a single element
		arg.method.call(arg.scope, arg.elements, arg.methodArg);
	} else {
		// assume it is an array/HTML collection
		var i;
		for (i = 0; i < arg.elements.length; i++) {
			var el = arg.elements[i];
			arg.method.call(arg.scope, el, arg.methodArg);
		}
	}
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setCss = setCss;
exports.getCss = getCss;
exports.injectStylesheet = injectStylesheet;
exports.addClass = addClass;
exports.removeClass = removeClass;

var _Markup = __webpack_require__(27);

var Markup = _interopRequireWildcard(_Markup);

var _adControl = __webpack_require__(58);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	@class Styles
	@desc
		Utilities for CSS style related purposes. 
*/

/**
	@memberof Styles
	@method setCss
	@param {string|element} _target
		id or element to which the style(s) should be applied
	@param {string|object|array} _args
		any type of CssDeclaration, an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments
	@desc
		Sets specified styles on target object.
	@example
		// set multiple styles using a css-string
		Styles.setCss ( myDiv, 'top: 30px; left: 10px' );

		// set multiple styles using a css-object, same as the 'css' property on {@link UIComponent}s
		Styles.setCss ( myDiv, { top:30, left:10 });

		// set a single style, using individual( key, value )args
		Styles.setCss ( myDiv, 'top', 30 );
*/
function setCss(_element, _args) {
	_element = Markup.get(_element);
	var cssList = {};
	if (arguments.length > 2) {
		for (var i = 1; i < arguments.length; i += 2) {
			cssList = _adControl.CssManager.conformCssKeyValue(arguments[i], arguments[i + 1]);
		}
	} else if (typeof arguments[1] == 'string') {
		cssList = _adControl.CssManager.conformCssString(arguments[1], _element);
	} else {
		cssList = _adControl.CssManager.conformCssObject(arguments[1], _element);
	}
	_adControl.CssManager.apply(_element, cssList);
}

/**
	@memberof Styles
	@method getCss
	@param {string|element} _target
		id or element to which css style should be applied
	@param {string} _key
		css key
	@desc
		Gets a specific style for a particular key.
*/
function getCss(_element, _key) {
	_element = Markup.get(_element);

	var cssValue;

	if (_key == 'x' || _key == 'y') {
		var existingTransform = _element.style[_adControl.CssManager.getDeviceKey('transform')];
		var matrix = existingTransform.replace(/[\s\(\)matrix]/g, '').split(',');
		cssValue = matrix.length < 6 ? 0 : +matrix[_key == 'x' ? 4 : 5];
	} else {
		var style = window.getComputedStyle(_element, null);
		cssValue = style.getPropertyValue(_key).replace(/px/, '');
		if (!isNaN(cssValue)) cssValue = parseInt(cssValue, 10);
	}

	return cssValue;
}

/**
	@memberof Styles
	@method injectStylesheet
	@param {string} nodeId
		the id of the &lt;style> node written to the &lt;head>
	@param {string|object|array} styles
		any type of CssDeclaration: an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments
	@desc
		Creates a new CSS stylesheet node (class, tag, etc) DEFINITION out of the submitted styles. 

	@example
		// selector/CSS string pair
		Styles.injectStylesheet( 'myFirstStyle', 
			'.class-a', 'position:absolute; width:inherit;'
		)

		// selector/CSS string pair: add multiple class declarations to the same node
		Styles.injectStylesheet( 'mySecondStyle', 
			'.class-b', 'position:absolute;',
			'.class-b-top', 'width:inherit; height:inherit;'
		)

		// selector/CSS string pair:  have mulitple classes share the same logic
		Styles.injectStylesheet( 'myThirdStyle', 
			'.class-c, .class-d', 'position:absolute;'
		)

		// selector/CSS string pair: add style to a tag name globally
		Styles.injectStylesheet( 'myFourthStyle', 
			'h1', 'position:absolute;'
		)

		// self-contained CSS string
		var myCssString = '.myClass, h1 { color: blue; margin: 10px; }';
		Styles.injectStylesheet( 'myFifthStyle', myCssString );
*/
function injectStylesheet(nodeId, styles) {
	if (document.getElementById(nodeId)) {
		return;
	}

	var style = document.createElement('style');
	style.type = 'text/css';
	style.id = nodeId;

	// if only two parameters, assuming styles is CSS string
	// else process as selector/style pair 
	var str = arguments.length === 2 ? styles : '';

	if (arguments.length > 2) {

		for (var i = 0; i < arguments.length - 1; i += 2) {

			// strip out the white space after comma
			var names = arguments[i + 1].replace(/\,\s+/g, ',');

			str += names;
			str += ' { ' + (arguments[i + 2] || '') + ' }\n';
		}
	}
	style.innerHTML = str;
	document.getElementsByTagName('head')[0].appendChild(style);
}

/**
	@memberof Styles
	@method addClass
	@param {string|element} target
		id or element to which css style should be added
	@param {string} className
		css class association to be added to this target
	@desc
		Add a CSS class ASSOCIATION to the targeted element.
*/
function addClass(target, className) {
	var element = Markup.get(target);

	// IE does not support multiple classes being added as arguments, so must loop
	for (var i = 0; i < arguments.length - 1; i++) {
		element.classList.add(arguments[i + 1]);
	}
}

/**
	@memberof Styles
	@method removeClass
	@param {string|element} target
		id or element from which css style should be removed
	@param {string} className
		css class association to be removed from this target
	@desc
		Removes a CSS class ASSOCIATION from the targeted element.
*/
function removeClass(target, className) {
	var element = Markup.get(target);
	element.classList.remove(className);
}

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _keys = __webpack_require__(66);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(67);
var enumBugKeys = __webpack_require__(49);

module.exports = _keys2.default || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Velvet = exports.AdManager = exports.Device = undefined;

var _Device = __webpack_require__(137);

var _Device2 = _interopRequireDefault(_Device);

var _AdManager = __webpack_require__(138);

var _AdManager2 = _interopRequireDefault(_AdManager);

var _Velvet = __webpack_require__(176);

var _Velvet2 = _interopRequireDefault(_Velvet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Device = _Device2.default;
exports.AdManager = _AdManager2.default;
exports.Velvet = _Velvet2.default;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FontLoader = exports.DataLoader = exports.InlineLoader = exports.ImageLoader = exports.LoaderUtils = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _MixinBuilder = __webpack_require__(23);

var _LoaderBase = __webpack_require__(24);

var _LoaderUtils = __webpack_require__(35);

var Utils = _interopRequireWildcard(_LoaderUtils);

var _ImageLoader = __webpack_require__(151);

var _ImageLoader2 = _interopRequireDefault(_ImageLoader);

var _InlineLoader = __webpack_require__(152);

var _InlineLoader2 = _interopRequireDefault(_InlineLoader);

var _DataLoader = __webpack_require__(153);

var _DataLoader2 = _interopRequireDefault(_DataLoader);

var _FontLoader = __webpack_require__(154);

var _FontLoader2 = _interopRequireDefault(_FontLoader);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blank = function Blank() {
	(0, _classCallCheck3.default)(this, Blank);
}; /** 
   	@class Loader
   	@param {string|array|Loader} arg
   		load target
   	@param {object} arg
   		Object with any of the following optional parameters for customizing the load routine.
   	@property {string} query
   	@property {string} name
   	@property {boolean} prioritize
   	@property {boolean} cacheBuster
   	@property {string} method 
   		"POST" or "GET"
   	@property {object} scope
   	@property {function} onComplete
   	@property {function} onProgress
   	@property {function} onFail
   	@property {string} prepend
   		A file path to be added to all loader targets.
   	@property {function} platformGetUrl
   		A callback method to wrap the url, such as DoubleClick's <code>Enabler.getUrl</code>.
   	@property {string} fileType
   		Manually assign the file type, eg: <code>jpg</code>, <code>svg</code>.
   	@desc
   		This class is designed to handle all load processes: images, fonts and data, even other Loaders! Below are multiple use case scenarios.
   		<br><br>
   
   
   		<b>Single Load:</b>
   		<codeblock>
   			var singleLoader = new Loader('images/img0.jpg', { onComplete:handleLoadComplete, scope:this });
   			singleLoader.load();
   
   			function handleLoadComplete( target ) {
   				trace( target.content[0].dataRaw );
   			}
   		</codeblock>
   		<br><br>
   
   
   		<b>Array of loads from one Constructor:</b>
   		<codeblock>
   			// Array load - you can pass in multiple files on creation of a Loader
   			var arrayLoader = new Loader(['font1.ttf', 'font2.ttf'], { name:'fontLoader', onComplete:handleLoadComplete, prepend:adParams.commonPath + 'fonts/' });
   			arrayLoader.load();
   
   			function handleLoadComplete( target ) {
   				trace( target.content[0].dataRaw );
   			}		
   		</codeblock>
   		<br><br>
   		
   
   		<b>Complex Load:</b>
   		<codeblock>
   			var myLoader = new Loader('images/img0.jpg', { onComplete:handleLoadComplete, scope:this });	
   
   			// append to that loader
   			myLoader.add('images/img1.jpg');
   
   			// append multiple
   			myLoader.add(['images/img2.jpg', 'images/img3.jpg']);
   			myLoader.load();
   
   			function handleLoadComplete( target ) {
   				trace( target.content[0].dataRaw );
   			}		
   		</codeblock>
   		<br><br>
   
   
   		<b>Nested Loads:</b>
   		<codeblock>
   			// Nested loads - best practice is to make a loader for one file type
   			var masterLoader = new Loader({ name:'master', onComplete:handleAllComplete, onProgress:handleAllProgress, onFail:handleLoadFail, scope:this });
   
   			// declare a var to reference later, then add it to main loader
   			var _imgLoader = new Loader( [ 'images/img2.jpg', 'images/img3.jpg' ], { name:'load_images', prepend:'images/' });
   			masterLoader.add( _imgLoader );
   
   			// or just add a new loader instance
   			masterLoader.add( new Loader( [ 'font1.ttf', 'font2.ttf' ], { name:'load_fonts', prepend:adParams.commonPath + 'fonts/' }) );
   			masterLoader.add( new Loader( ['Ad_Data.js', 'NetUtils.js', 'Align.js', 'Analytics.js'], { name:'load_js', prepend:adParams.corePath + 'utils/' }) );
   			masterLoader.load();
   
   			function handleLoadComplete( target ) {
   				trace( target.content[0].dataRaw );
   			}
   			function handleLoadProgress( target ) {
   				trace( target.progress, target.rawProgress )
   			}
   			function handleLoadFail( target ) {
   				trace( target );
   			}
   			function handleAllComplete( target ) {
   				var a = target.getLoader( _imgLoader )
   				trace( "Loader found by var:", a )
   
   				var b = target.getContent( 'font1.ttf' );
   				trace( "Content found by name:", b );
   
   				var c = target.getLoader( 'load_fonts' );
   				trace( "Loader found by url:", c );
   			}		
   		</codeblock>
   
   */

/* TODO
	- change getAllContent() to take secret boolean so can call getAllContentRaw(true) for no extra loop
	- ? comment out progress calculations
*/

exports.LoaderUtils = Utils;
exports.ImageLoader = _ImageLoader2.default;
exports.InlineLoader = _InlineLoader2.default;
exports.DataLoader = _DataLoader2.default;
exports.FontLoader = _FontLoader2.default;

var Loader = function (_mix$with) {
	(0, _inherits3.default)(Loader, _mix$with);

	function Loader() {
		var _ref;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		(0, _classCallCheck3.default)(this, Loader);

		var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = Loader.__proto__ || (0, _getPrototypeOf2.default)(Loader)).call.apply(_ref, [this].concat(args)));

		var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

		var L = _this;

		L._queue = {};
		L._total = 0;
		L._active = false;
		L._startedCount = 0;

		L.prepend = arg.prepend || '';
		L.platformGetUrl = arg.platformGetUrl;
		L.fileType = arg.fileType || null;
		L.content = [];
		L.crossOrigin = arg.crossOrigin || undefined;

		L.add(arguments[0]);
		return _this;
	}

	/* ---------------------------------------------------------------------------------------------------------------- */
	// PUBLIC

	/**
 	@memberOf Loader
 	@method add
 	@param {string|array|Loader} arg
 		a file, array of files, or Loader instance
 	@desc
 		Add to the load queue: a single or array of files or even another Loader.
 	@example
 		// Single load
 		var imgLoader = new Loader({ name:'img_loader' });
 		
 		// add to that loader
 		imgLoader.add('images/img1.jpg');
 		
 		// add multiple
 		imgLoader.add(['images/img2.jpg', 'images/img3.jpg']);
 	
 		// Nested loads - best practice is to make a loader for one file type
 		var mainLoader = new Loader({ name:'main', onComplete:handleComplete });
 			mainLoader.add( imgLoader );
 		
 		// or just add a new loader instance
 		mainLoader.add( new Loader(['font1.ttf', 'font2.ttf'], { name:'load_fonts' }) );				
 */


	(0, _createClass3.default)(Loader, [{
		key: 'add',
		value: function add(arg) {
			var L = this;
			if (typeof arg === 'string') {
				// single load as first parameter
				L._addSingleLoad(arg);
			} else if (arg instanceof Array) {
				// first parameter is an Array of urls
				for (var i = 0; i < arg.length; i++) {
					L._addSingleLoad(arg[i]);
				}
			} else if (arg instanceof Loader) {
				if (arg.content && arg.content[0] && arg.content[0].fileType == 'fba') {
					L._addFbaSubLoads(arg.content[0]);
				} else {
					L._addSubLoad(arg);
				}
			}
		}

		/**
  	@memberOf Loader
  	@method load
  	@desc
  		Starts the load process.
  	@example
  		// Single load
  		var imgLoader = new Loader({ onComplete:handleComplete });
  		imgLoader.load();				
  */

	}, {
		key: 'load',
		value: function load() {
			var L = this;
			L._active = true;
			if (L._total <= 0) {
				trace('Loader "' + L.name + '" has NO assets to be loaded.');
			} else {
				var _has = false;
				var _output = '';
				for (var l in L._queue) {
					if (!(L._queue[l] instanceof Loader)) {
						if (!_has) {
							_has = true;
							_output += 'Loader "' + L.name + '" requesting:';
						}
						var fileName = L._queue[l].fileName;
						var extension = L._queue[l].fileType;
						var extensionIndex = fileName.indexOf('.' + extension);
						var fileAndExtension = extensionIndex > -1 ? fileName : fileName + '.' + extension;
						_output += '\n\t -> ' + (L._queue[l].prepend || '') + fileAndExtension;
					}
				}
				if (_has) trace(_output);
			}

			L._startSingleLoad(0);
		}

		/**	
  	@memberOf Loader
  	@method getAllContent
  	@returns {array}
  		An array of LoaderData Objects with relevant loading information (like an Event Object).  
  		Access the loaded content via the property 'dataRaw': an image, raw Json, raw XML, or font name
  	@desc
  		Get all loaded content from the Loader and all nested Loaders
  	@example
  		var myLoader = new Loader(['img1.jpg', 'img2.jpg', 'img3.jpg'], { onComplete:handleComplete });
  		myLoader.load();
  			function handleComplete( target ) {
  			var myContent = target.getAllContent();
  			trace( "Content found:", myContent );
  		}
  */

	}, {
		key: 'getAllContent',
		value: function getAllContent() {
			var _found = [];
			function searchSubLoader(content) {
				for (var i = 0; i < content.length; i++) {
					//trace ( "   -> sub:", content[i] )
					if (content[i] instanceof Loader) {
						searchSubLoader(content[i].content);
					} else {
						_found.push(content[i]);
					}
				}
			}

			searchSubLoader(this.content);

			if (_found.length < 1) trace("No Content found");

			return _found;
		}

		/**	
  	@memberOf Loader
  	@method getAllContentRaw
  	@returns {array}
  		An array of only the raw data: an image, raw Json, raw XML, or font name
  	@desc
  		Get all raw loaded content from the Loader and all nested Loaders, no LoaderData Objects
  	@example
  		var myLoader = new Loader(['img1.jpg', 'img2.jpg', 'img3.jpg'], { onComplete:handleComplete });
  		myLoader.load();
  			function handleComplete( target ) {
  			var myContent = target.getAllContentRaw();
  			trace( "Content found:", myContent );
  		}
  */

	}, {
		key: 'getAllContentRaw',
		value: function getAllContentRaw() {
			var _content = this.getAllContent();
			for (var i = 0; i < _content.length; i++) {
				_content[i] = _content[i].dataRaw;
			}
			return _content;
		}

		/**	
  	@memberOf Loader
  	@method getLoader
  	@param {string} id
  		the string optionally assigned to the 'name' property or the variable assigned to the Loader instance
  	@returns {Loader}
  	@desc
  		Get the Loader instance from the Loader or any nested Loader
  	@example
  		var mainLoader = new Loader({ name:'main', onComplete:handleLoadComplete });
  		mainLoader.add( new Loader( [ 'font1.ttf', 'font2.ttf' ], { name:'load_fonts', prepend:adParams.commonPath + 'fonts/' }) );
  		mainLoader.add( new Loader( ['Ad_Data.js', 'NetUtils.js'], { name:'load_js', prepend:adParams.corePath + 'utils/' }) );
  		mainLoader.load();
  			function handleLoadComplete( target ) {
  			var fontLoader = target.getLoader('load_fonts');
  		}
  */

	}, {
		key: 'getLoader',
		value: function getLoader(id) {
			var _found = null;
			function searchSubLoader(content) {
				for (var i = 0; i < content.length; i++) {
					//trace ( "   -> sub:", content[i] )
					if (content[i] instanceof Loader) {
						if (content[i] && (content[i].name === id || content[i] === id)) {
							_found = content[i];
						} else {
							searchSubLoader(content[i].content);
						}
					}
				}
			}

			searchSubLoader(this.content);

			if (!_found) trace("No Loader found of that name");

			return _found;
		}

		/* ------------------------------------------------------------------------------------------------------------- */
		// PRIVATE METHODS

	}, {
		key: '_addSingleLoad',
		value: function _addSingleLoad(url, fbaOverwrite) {
			// trace('_addSingleLoad()', url, fbaOverwrite)
			var L = this;

			// fbaOverwrite is an array [ file name, file extension ]
			var fileType = fbaOverwrite ? fbaOverwrite[1] : L.fileType || Utils.getFileType(url);
			var loaderType = void 0;
			// trace('\t fileType:', fileType)

			switch (fileType) {
				case 'jpg':
				case 'jpeg':
				case 'gif':
				case 'png':
				case 'svg':
					loaderType = _ImageLoader2.default;
					break;
				case 'ttf':
				case 'woff':
					loaderType = _FontLoader2.default;
					break;
				case 'json':
				case 'fba':
				case 'bin':
				case 'binary':
					loaderType = _DataLoader2.default;
					break;
				default:
					loaderType = _InlineLoader2.default;
			}

			// either the data as binary OR the file path and name
			var urlChoice = fbaOverwrite ? url : L.prepend + url;
			// trace('\t url:', url, '| loaderType:', loaderType)

			var singleLoader = new loaderType(urlChoice, {
				scope: L,
				platformGetUrl: L.platformGetUrl,
				onComplete: L._handleSingleLoadComplete,
				onFail: L._handleFail,
				fileType: fileType,
				cacheBuster: L.cacheBuster,
				crossOrigin: L.crossOrigin
			});
			// trace('\t singleLoader:', singleLoader)

			// from fba, the files are binary, so there is
			// no file name to reference so set it here
			if (fbaOverwrite) {
				singleLoader.fileName = fbaOverwrite[0];
			}

			singleLoader.queueIndex = L._total;

			L._queue[L._total] = singleLoader;
			L._total++;
			// trace(L._total, L._queue)
		}
	}, {
		key: '_addSubLoad',
		value: function _addSubLoad(loader) {
			var L = this;
			//trace(L.name, '_addSubLoad()')
			loader.onComplete = L._handleSingleLoadComplete.bind(L);
			loader.onProgress = L._handleProgress.bind(L);
			loader.onFail = L._handleFail;
			//loader.platformGetUrl = L.platformGetUrl;
			loader.queueIndex = L._total;
			L._queue[L._total] = loader;
			L._total++;
		}
	}, {
		key: '_addFbaSubLoads',
		value: function _addFbaSubLoads(loader) {
			// trace("_addFbaSubLoads()", loader)

			// Conversion between uint8s and uint32s.
			var uint8 = new Uint8Array(4);
			var uint32 = new Uint32Array(uint8.buffer);

			// start after = signature(8 bytes) + IHDR(25 bytes) + fbAc(16 bytes total, but only 11: size,type,content-1 ) 
			var idx = 44;

			var chunkTotal = new Uint8Array(loader.dataRaw, idx, 1)[0];
			//trace ( 'number of images as chunks:', chunkTotal )

			// skip over rest of fbAc chunk: count value byte + CRC 4 bytes
			idx += 5;

			for (var i = 0; i < chunkTotal; i++) {
				// size, type, content, crc
				// get the size of next chunk as on UintArray
				var sizeOfChunk = new Uint8Array(loader.dataRaw, idx, 4);

				// Read the length of the current chunk, which is stored as a Uint32.
				// this one has to be a loop, as values get assigned to uint8, that changes buffer of uint32
				// also, the values must be set reversed, henced the count down loop
				var up = 4;
				for (var k = 0; k < 4; k++) {
					//trace ( k, up, sizeOfChunk[k] )
					uint8[--up] = sizeOfChunk[k];
				}

				// all chunk data NOT including the type
				var length = uint32[0];

				idx += 7;

				// Get the chunk type in ASCII, only last character really matters
				var type = String.fromCharCode(new Uint8Array(loader.dataRaw, idx++, 1));

				//trace ( '\ttype:', type, '\tlength:', length )
				var fileNameLengthArray = new Uint8Array(loader.dataRaw, idx + 3, 1);
				var fileNameLength = fileNameLengthArray[0] || 0; // default to zero incase array fails? maybe unnecessary

				var nameBuffer = new Uint8Array(loader.dataRaw, idx + 4, fileNameLength);
				var fileName = String.fromCharCode.apply(String, nameBuffer);

				// first add to the file name length 4 bytes: file name length byte count
				fileNameLength += 4;

				// offset the array start and length by the file name length
				var chunkData = new Uint8Array(loader.dataRaw, idx + fileNameLength, length - fileNameLength);
				// NOTE: ArrayBuffer.slice() does not exist in IE10, so have to do it manually inline
				//var chunkData = new Uint8Array(chunk.buffer.slice(4))

				// skip over the content AND skip over the CRC value by incrementing by 4 bytes
				idx += length + 4;

				var fileNameSplit = fileName.split('.');
				//var blobFileType = '';// 'application/octet-stream';
				var blobFileType = type == 'f' ? 'application/x-font-ttf' : 'image/' + (fileNameSplit[1] == 'svg' ? 'svg+xml' : fileNameSplit[1]);
				var blob = new Blob([chunkData], { type: blobFileType });
				var url = URL.createObjectURL(blob);
				// url will be ~ blob:32c3c7af-ef04-414f-a073-685602fe8a28
				//trace ( fileNameSplit, blobFileType, url )
				this._addSingleLoad(url, fileNameSplit);
			}
		}
	}, {
		key: '_startSingleLoad',
		value: function _startSingleLoad(i) {
			var L = this;
			var _inst = L._queue[i];
			// trace(L.name, '_startSingleLoad()', 'index:', i, 'total:', L._total)
			if (L._total == 0) {
				// fire a complete because there are no requests
				L._handleComplete();
			} else {
				if (i < L._total) {
					// trace ( L.name, '_startSingleLoad() ->', _inst )
					if (!(_inst instanceof Loader)) {
						//trace ( _inst.name, 'is a subloader' )
						//} else {
						if (i < L._total - 1) {
							L._startLoadTimeOut(++i);
						}
					}
					_inst.load();
				}
			}
		}
	}, {
		key: '_startLoadTimeOut',
		value: function _startLoadTimeOut(i) {
			var L = this;
			setTimeout(function () {
				L._startSingleLoad(i);
			}, 10);
		}

		/* ------------------------------------------------------------------------------------------------------------- */
		// EVENT HANDLERS

	}, {
		key: '_handleSingleLoadComplete',
		value: function _handleSingleLoadComplete(target) {
			var L = this;
			// trace("_handleSingleLoadComplete(), target:", target)
			L.content[target.queueIndex] = target;
			delete L._queue[target.queueIndex];

			L._handleProgress();

			// is a nested Loader
			if (target.url == undefined) {
				//trace ( '"' + L.name + '" nested Loader "' + target.name + '" Complete' );
				if (target.queueIndex < L._total - 1) {
					L._startLoadTimeOut(target.queueIndex + 1);
				}
			}
		}
	}, {
		key: '_handleProgress',
		value: function _handleProgress() {
			var L = this;
			var _length = L.content.length;
			var _count = 0;
			for (var i = 0; i < _length; i++) {
				if (L.content[i]) _count++;
			}
			// trace(L.name, '_handleProgress()', '_count:', _count, 'total:', L._total)

			var _consecutive = _count;
			var _subProgress = 0;

			if (_count < L._total && L._queue[_count]) {
				_subProgress = L._queue[_count].progress / L._total || 0;
			}

			L.progress = _consecutive / L._total + _subProgress;
			L.rawProgress = _count / L._total + _subProgress;

			L.onProgress.call(L.scope, L);
			//trace ( 'progress')
			if (_count >= L._total) {
				//trace ( 'Loader calling _handleComplete()')
				L._handleComplete();
			}
		}
	}, {
		key: '_handleComplete',
		value: function _handleComplete() {
			var L = this;
			// trace('Loader "' + L.name + '" is Complete')
			L.onComplete.call(L.scope, L);
		}
	}]);
	return Loader;
}((0, _MixinBuilder.mix)(Blank).with(_LoaderBase.LoaderBase));

exports.default = Loader;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.createXMLHttpRequest = createXMLHttpRequest;
exports.getFileName = getFileName;
exports.getFontName = getFontName;
exports.getFileType = getFileType;
exports.getFullUrl = getFullUrl;
exports.getUrlPrepend = getUrlPrepend;
exports.getParamsFromData = getParamsFromData;
function createXMLHttpRequest() {
	try {
		return new XMLHttpRequest();
	} catch (e) {}
	try {
		return new ActiveXObject("Msxml2.XMLHTTP");
	} catch (e) {}
	alert("XMLHttpRequest not supported");
	return null;
}

function getFileName(url) {
	var extension = url.lastIndexOf('.');
	var directory = url.lastIndexOf('/') + 1;
	if (directory > extension) extension = undefined;
	return url.substring(directory, extension);
}

function getFontName(url) {
	return url.substring(url.lastIndexOf('/') + 1, url.indexOf('.'));
}

function getFileType(url) {
	url = url || '';
	var _index = url.indexOf('?');
	if (_index > -1) {
		url = url.substr(0, _index);
	}
	var _split = url.match(/[^\\]*\.(\w+)$/);
	var _base64 = url.match(/image\/(jpeg|jpg|png)/);
	var _type = _split ? _split[1] : _base64 ? _base64[1] : 'unknown';

	return _type;
}

function getFullUrl(prepend, file, platformGetUrl) {
	var _prepend = getUrlPrepend(prepend);
	var _url = global.matchProtocolTo(_prepend + _file);
	if (platformGetUrl) {
		_url = platformGetUrl(_url);
	}
	return url;
}

function getUrlPrepend(path) {
	return path ? path.replace(/\/?$/, '/') : '';
}

function getParamsFromData(query) {
	if (typeof query === 'string') {
		/*
   * TODO - check the string is formatted correctly?
   */
		return query;
	} else {
		var queryString = '';
		for (var prop in query) {
			trace("      prop =", prop);
			queryString += prop + '=' + query[prop] + '&';
		}

		return queryString.substr(0, queryString.length - 1);
	}
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LoaderSource = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _LoaderUtils = __webpack_require__(35);

var Utils = _interopRequireWildcard(_LoaderUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoaderSource = exports.LoaderSource = function LoaderSource(superclass) {
	return function (_superclass) {
		(0, _inherits3.default)(_class, _superclass);

		function _class() {
			var _ref;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			(0, _classCallCheck3.default)(this, _class);

			var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args)));

			var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

			var L = _this;

			L.url = global.matchProtocolTo(arguments[0] || '');

			if (arg.platformGetUrl) {
				L.platformGetUrl = arg.platformGetUrl;
				L.url = arg.platformGetUrl(L.url);
			}

			L.fileName = arg.id === undefined ? Utils.getFileName(L.url) : arg.id;
			L.fileType = arg.fileType || Utils.getFileType(L.url);
			return _this;
		}

		return _class;
	}(superclass);
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.get = get;
exports.getElement = getElement;
exports.removeChildren = removeChildren;
exports.addiFrame = addiFrame;
exports.addSvg = addSvg;
exports.applyToElements = applyToElements;
/**
	@module Markup
	@desc
		This object contains utilities relateed to dom elements.
*/

/**
	@memberof Markup
	@method get
	@param {string} selector
		A string selector. It defaults to find the string as an id, or if the string starts with '#'. 
		If starts with '.', it selects by class name. If wrapped with '<>', it selects by tag name.
	@param {element} parent
		Optional parent element to get the element(s) from. Defaults to document.
	@returns {element|HTMLCollection}
		One single element if the selector is an id. With class name or tag name, it returns an HTML collection ( similiar to an array ).
	@desc
		Used to select elements.

	@example
		// get element by its id called 'myId'
		Markup.get( 'myId' );
		
		// same as above
		Markup.get( '#myId' );
		
		// get element by CSS classname 'myClass'
		Markup.get( '.myClass' );
		
		// get elements by tag name 'head'
		Markup.get( '<head>' );
*/
function get(selector, parent) {
	if (typeof selector !== 'string') {
		return selector;
	}

	parent = parent || document;
	selector = selector.trim();

	switch (selector[0]) {
		case '#':
			// id
			return parent.getElementById(selector.slice(1));
			break;
		case '.':
			// class
			return parent.getElementsByClassName(selector.slice(1));
			break;
		case '<':
			// tag
			return parent.getElementsByTagName(selector.slice(1, selector.length - 1));
			break;
		default:
			// default to id for backworad support 
			return parent.getElementById(selector);
	}
}
// the deprecated syntax 12/28/16
function getElement(selector, parent) {
	return get(selector, parent);
}

/**
	@memberof Markup
	@method removeChildren
	@param {element} _target
		element to be targeted
	@desc
		Removes all the children elements of an element
*/
function removeChildren(_target) {
	var element = get(_target);
	trace('removeChildren (' + _target + ')');
	while (element.firstChild) {
		element.removeChild(element.firstChild);
	}
}

/* 
	To be deprecated after moving addiFrame and addSvg to UIComponent 
*/
// export function applyContainerCss (_element, _containerData) {
// 	if (!_containerData.css) _containerData.css = {};
// 	if (!_containerData.css.position)
// 		_containerData.css.position = 'absolute';
// 	Styles.setCss(_element, _containerData.css);
// 	Styles.setCss(_element, _containerData.styles);
// }


/**	Method: addIframe()
		Deprecated. Add an iframe to the containerData.target, pointing at containerData.source.  */
function addiFrame(_containerData) {
	var element = document.createElement('iFrame');
	element.id = _containerData.id;
	element.width = _containerData.css.width;
	element.height = _containerData.css.height;

	delete _containerData.css.width;
	delete _containerData.css.height;

	// iframe properties
	element.setAttribute('src', _containerData.source);
	element.setAttribute('frameborder', '0');
	element.setAttribute('scrolling', 'no');
	element.setAttribute('allowfullscreen', '');

	applyContainerCss(element, _containerData);

	_containerData.target.appendChild(element);
	return element;
}

/**	Method: addSvg()
	Deprecated.

	_containerData			- object with the necessary keys for creating an element. */
function addSvg(_containerData) {
	var nameSpace = 'http://www.w3.org/2000/svg';
	var element = document.createElementNS(nameSpace, 'svg');
	element.setAttribute('height', _containerData.height);
	element.setAttribute('width', _containerData.width);

	var path = document.createElementNS(nameSpace, 'path');
	path.setAttribute('d', _containerData.d);
	path.setAttribute('fill', _containerData.fill);

	if (_containerData.stroke != undefined) {
		path.setAttribute('stroke', _containerData.stroke);
	}
	if (_containerData.strokeWidth != undefined) {
		path.setAttribute('stroke-width', _containerData.strokeWidth);
	}
	element.appendChild(path);

	applyContainerCss(element, _containerData);

	_containerData.target.appendChild(element);
	return element;
}

/**
	@memberof Markup
	@method applyToElements
	@param {object} arg
		See properties for more info:
		@property {object} arg.scope
			the scope of this
		@property {function} arg.method
			the function to use
		@property {element|array} arg.element
			the element(s) to apply the method to, can be a single element or an array
		@property {string|number|array|object} arg.methodArg
			the argument to pass to the method function
	@desc
		Apply a method to multiple elements. Currently assuming the method accepts element as the first argument,
		and a second argument as the setting. 

	@example
		var myElements = Markup.get( '.centered-blocks' );
		Markup.applyToElements({
			scope: Align,
			method: Align.set,
			elements: myElements,
			methodArg: { x: Align.CENTER }
		});
*/
function applyToElements(arg) {
	if (arg.elements.length === undefined) {
		// assume it is a single element
		arg.method.call(arg.scope, arg.elements, arg.methodArg);
	} else {
		// assume it is an array/HTML collection
		var i;
		for (i = 0; i < arg.elements.length; i++) {
			var el = arg.elements[i];
			arg.method.call(arg.scope, el, arg.methodArg);
		}
	}
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.setCss = setCss;
exports.getCss = getCss;
exports.injectStylesheet = injectStylesheet;
exports.addClass = addClass;
exports.removeClass = removeClass;

var _Markup = __webpack_require__(37);

var Markup = _interopRequireWildcard(_Markup);

var _adControl = __webpack_require__(58);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	@class Styles
	@desc
		Utilities for CSS style related purposes. 
*/

/**
	@memberof Styles
	@method setCss
	@param {string|element} _target
		id or element to which the style(s) should be applied
	@param {string|object|array} _args
		any type of CssDeclaration, an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments
	@desc
		Sets specified styles on target object.
	@example
		// set multiple styles using a css-string
		Styles.setCss ( myDiv, 'top: 30px; left: 10px' );

		// set multiple styles using a css-object, same as the 'css' property on {@link UIComponent}s
		Styles.setCss ( myDiv, { top:30, left:10 });

		// set a single style, using individual( key, value )args
		Styles.setCss ( myDiv, 'top', 30 );
*/
function setCss(_element, _args) {
	_element = Markup.get(_element);
	var cssList = {};
	if (arguments.length > 2) {
		for (var i = 1; i < arguments.length; i += 2) {
			cssList = _adControl.CssManager.conformCssKeyValue(arguments[i], arguments[i + 1]);
		}
	} else if (typeof arguments[1] == 'string') {
		cssList = _adControl.CssManager.conformCssString(arguments[1], _element);
	} else {
		cssList = _adControl.CssManager.conformCssObject(arguments[1], _element);
	}
	_adControl.CssManager.apply(_element, cssList);
}

/**
	@memberof Styles
	@method getCss
	@param {string|element} _target
		id or element to which css style should be applied
	@param {string} _key
		css key
	@desc
		Gets a specific style for a particular key.
*/
function getCss(_element, _key) {
	_element = Markup.get(_element);

	var cssValue;

	if (_key == 'x' || _key == 'y') {
		var existingTransform = _element.style[_adControl.CssManager.getDeviceKey('transform')];
		var matrix = existingTransform.replace(/[\s\(\)matrix]/g, '').split(',');
		cssValue = matrix.length < 6 ? 0 : +matrix[_key == 'x' ? 4 : 5];
	} else {
		var style = window.getComputedStyle(_element, null);
		cssValue = style.getPropertyValue(_key).replace(/px/, '');
		if (!isNaN(cssValue)) cssValue = parseInt(cssValue, 10);
	}

	return cssValue;
}

/**
	@memberof Styles
	@method injectStylesheet
	@param {string} nodeId
		the id of the &lt;style> node written to the &lt;head>
	@param {string|object|array} styles
		any type of CssDeclaration: an object of key-value pairs, a semicolon separated string of styles, or a separate( key, value )arguments
	@desc
		Creates a new CSS stylesheet node (class, tag, etc) DEFINITION out of the submitted styles. 

	@example
		// selector/CSS string pair
		Styles.injectStylesheet( 'myFirstStyle', 
			'.class-a', 'position:absolute; width:inherit;'
		)

		// selector/CSS string pair: add multiple class declarations to the same node
		Styles.injectStylesheet( 'mySecondStyle', 
			'.class-b', 'position:absolute;',
			'.class-b-top', 'width:inherit; height:inherit;'
		)

		// selector/CSS string pair:  have mulitple classes share the same logic
		Styles.injectStylesheet( 'myThirdStyle', 
			'.class-c, .class-d', 'position:absolute;'
		)

		// selector/CSS string pair: add style to a tag name globally
		Styles.injectStylesheet( 'myFourthStyle', 
			'h1', 'position:absolute;'
		)

		// self-contained CSS string
		var myCssString = '.myClass, h1 { color: blue; margin: 10px; }';
		Styles.injectStylesheet( 'myFifthStyle', myCssString );
*/
function injectStylesheet(nodeId, styles) {
	if (document.getElementById(nodeId)) {
		return;
	}

	var style = document.createElement('style');
	style.type = 'text/css';
	style.id = nodeId;

	// if only two parameters, assuming styles is CSS string
	// else process as selector/style pair 
	var str = arguments.length === 2 ? styles : '';

	if (arguments.length > 2) {

		for (var i = 0; i < arguments.length - 1; i += 2) {

			// strip out the white space after comma
			var names = arguments[i + 1].replace(/\,\s+/g, ',');

			str += names;
			str += ' { ' + (arguments[i + 2] || '') + ' }\n';
		}
	}
	style.innerHTML = str;
	document.getElementsByTagName('head')[0].appendChild(style);
}

/**
	@memberof Styles
	@method addClass
	@param {string|element} target
		id or element to which css style should be added
	@param {string} className
		css class association to be added to this target
	@desc
		Add a CSS class ASSOCIATION to the targeted element.
*/
function addClass(target, className) {
	var element = Markup.get(target);

	// IE does not support multiple classes being added as arguments, so must loop
	for (var i = 0; i < arguments.length - 1; i++) {
		element.classList.add(arguments[i + 1]);
	}
}

/**
	@memberof Styles
	@method removeClass
	@param {string|element} target
		id or element from which css style should be removed
	@param {string} className
		css class association to be removed from this target
	@desc
		Removes a CSS class ASSOCIATION from the targeted element.
*/
function removeClass(target, className) {
	var element = Markup.get(target);
	element.classList.remove(className);
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperties = __webpack_require__(17);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class Timezone
	@desc
		This class provides constants and methods for accessing Timezone offsets, used by the TzDate class.
*/
var Timezone = new function () {

	var T = this;

	var _pool = ['LOCAL', 'UTC', 'EST', 'CST', 'MST', 'PST', 'AKST', 'AZ', 'HST', 'MEX', 'AEST', 'AEST2'];
	var _local;

	T._trueLOCAL;
	T._tzDiff = [0, 0, 0];

	(0, _defineProperties2.default)(T, {

		/**
  	@memberOf Timezone	
  	@var {object} LOCAL
  	@desc
  		Timezone constant for the client's machine; object keys: 
  	@example
  		// use as static constant
  		Timezone.LOCAL
  			// returns
  		{ label: 'Local', abbr: 'local', value: ? }
  */
		LOCAL: {
			get: function get() {
				if (_local == undefined) {
					//	trace ( 'LOCAL.get init' )
					var now = new Date();
					var offset = T.getDLS(now);
					var val = -(now.getTimezoneOffset() / 60) - offset;

					_local = { label: 'Local', abbr: 'local', value: val
						//trace ( '\t_local:', _local )

					};var actualTz = T.get(_local.value);
					//trace ( '\t\tactualTz:', actualTz )
					if (isNaN(actualTz)) {
						_local.label = actualTz.label;
						_local.abbr = actualTz.abbr;
					} else {
						//	trace ( '\t\t\t timezone not found')
						// timezone not found, so get it from 
						var dateString = now.toTimeString();
						var tzStr = dateString.split('(')[1];
						tzStr = tzStr.substr(0, tzStr.length - 1);
						// IE & Edge print timezones as words, not abbreviated, so strip it down to just abbreviation
						tzStr = tzStr.replace(/[a-z\.\s]/g, '');
						_local.label = _local.abbr = tzStr;
						trace('\t\t\t', _local);
					}
					T._trueLOCAL = _local;
				}

				return _local;
			},
			set: function set(val) {
				// trace ( 'LOCAL.set')
				// trace ( '\tval', val )

				var now = new Date();
				var tzOff = now.getTimezoneOffset();
				var hr = Math.floor(tzOff / 60);
				var min = tzOff % 60;

				//trace ( val.value, Math.floor(val.value), val.value % 1 )

				var valHr = Math.floor(val.value);
				var valMin = val.value % 1 * 60;

				var adjHr = -(valHr + hr);
				var adjMin = -(valMin + min);
				var offset = Timezone.getDLS(now);
				if (val.value == 0) {
					offset = 0; //UTC
				} else if (val.value > 0) {
					// acounts for time in the future from UTC
					adjHr = 24 + adjHr;
				}
				// trace ( 'hr:', hr, 'min:', min, '| adjHr:', adjHr, 'adjMin:', adjMin, '|val:', val )
				T._tzDiff[0] = adjHr - offset;
				T._tzDiff[1] = adjMin;
				//	trace ( '\t_tzDiff:', T._tzDiff )

				_local = val;
				trace('\tTimezone.LOCAL is now:', val);
			}
		},

		/**
  	@memberOf Timezone	
  	@var {object} UTC
  	@desc
  		Timezone constant for Universal Time Coordinated aka Greenwich Mean Time; object keys: 
  	@example
  		// use as static constant
  		Timezone.UTC
  			// returns
  		{ label: 'UTC', abbr: 'utc', value: 0 }
  */
		UTC: {
			get: function get() {
				return { label: 'UTC', abbr: 'utc', value: 0 };
			}
		},

		/**
  	@memberOf Timezone	
  	@var {object} EST
  	@desc
  		Timezone constant for Eastern Time; object keys: 
  	@example
  		// use as static constant
  		Timezone.EST
  			// returns
  		{ label: 'US/Eastern', abbr: 'et', value: -5 }
  */
		EST: {
			get: function get() {
				return { label: 'US/Eastern', abbr: 'et', value: -5 };
			}
		},

		/**
  	@memberOf Timezone	
  	@var {object} CST
  	@desc
  		Timezone constant for Central Time, Mexico Time; object keys: 
  	@example
  		// use as static constant
  		Timezone.CST
  			// returns
  		{ label: 'US/Central', abbr: 'ct', value: -6 }
  */
		CST: {
			get: function get() {
				return { label: 'US/Central', abbr: 'ct', value: -6 };
			}
		},

		/**
  	@memberOf Timezone	
  	@var {object} MST
  	@desc
  		Timezone constant for Mountain Time; object keys: 
  	@example
  		// use as static constant
  		Timezone.MST
  			// returns
  		{ label: 'US/Mountain', abbr: 'mt', value: -7 }
  */
		MST: {
			get: function get() {
				return { label: 'US/Mountain', abbr: 'mt', value: -7 };
			}
		},

		/**
  	@memberOf Timezone	
  	@var {object} PST
  	@desc
  		Timezone constant for Pacific Time; object keys: 
  	@example
  		// use as static constant
  		Timezone.PST
  			// returns
  		{ label: 'US/Pacific', abbr: 'pt', value: -8 } 
  */
		PST: {
			get: function get() {
				return { label: 'US/Pacific', abbr: 'pt', value: -8 };
			}
		},

		/**
  	@memberOf Timezone	
  	@var {object} AKST
  	@desc
  		Timezone constant for Alaska Time; object keys: 
  	@example
  		// use as static constant
  		Timezone.AKST
  			// returns
  		{ label: 'US/Alaska', abbr: 'akst', value: -9 }
  */
		AKST: {
			get: function get() {
				return { label: 'US/Alaska', abbr: 'akst', value: -9 };
			}
		},

		/**
  	@memberOf Timezone	
  	@var {object} AZ
  	@desc
  		Timezone constant for Arizona Time; object keys: 
  	@example
  		// use as static constant
  		Timezone.AZ
  			// returns
  		{ label: 'US/Arizona', abbr: 'az', value: -7 }
  */
		AZ: {
			get: function get() {
				return { label: 'US/Arizona', abbr: 'az', value: -7 };
			}
		},

		/**
  	@memberOf Timezone	
  	@var {object} HST
  	@desc
  		Timezone constant for Hawaii Time; object keys: 
  	@example
  		// use as static constant
  		Timezone.HST
  			// returns
  		{ label: 'US/Hawaii', abbr: 'hst', value: -10 }
  */
		HST: {
			get: function get() {
				return { label: 'US/Hawaii', abbr: 'hst', value: -10 };
			}
		},

		// TEMP additions until new solution can be found
		MEX: {
			get: function get() {
				return { label: 'America/Mexico_City', abbr: 'mx', value: -6 // is actually 'ct', but ESPN...
				};
			}
		},
		AEST: {
			get: function get() {
				return { label: 'Australia/Brisbane', abbr: 'aest', value: 10 };
			}
		},
		AEST2: {
			get: function get() {
				return { label: 'Australia/Sydney', abbr: 'aest', value: 10 };
			}
		}
	});

	/**
 	@memberOf Timezone	
 	@method get
 	@property {object|string|number} timezone
 		The timezone constant, label or value of the Timezone object desired.
 	@returns {string}
 	@desc
 		Returns an object with the timezone's label and value 
 */
	T.get = function (timezone) {
		//trace ( 'Timezone.get() >', timezone, '|||', typeof timezone === 'number', isFinite(timezone), Math.floor(timezone) === timezone )
		if (timezone == undefined) return T.LOCAL;

		if (typeof timezone === 'string') {
			// is passing a label, such as 'US/Pacific'
			for (var i = 0; i < _pool.length; i++) {
				if (T[_pool[i]].label == timezone) {
					return T[_pool[i]];
				}
			}
			// TODO : should have a fail safe
			return null;
		} else if (typeof timezone === 'number' && isFinite(timezone)) {
			// && Math.floor(timezone) === timezone ) {
			// trace ( '\t get by number')
			for (var i = 0; i < _pool.length; i++) {
				if (T[_pool[i]].value === timezone) {
					if (T[_pool[i]].label != 'Local') {
						return T[_pool[i]];
					}
				}
			}
			//return timezone;
			return {
				label: 'Local',
				abbr: 'Local',
				value: timezone
			};
		} else {
			return timezone;
		}
	};

	/**
 	@memberOf Timezone	
 	@method getDLS
 	@property {Date|TzDate} date
 		The date to check
 	@returns {string}
 	@desc
 		Checks the Daylight Savings offset for a date, then returns either 1 or 0 
 */
	T.getDLS = function (date) {
		var winter = new Date('2011', '01', '01');
		var summer = new Date('2011', '07', '01');

		var winterOffset = winter.getTimezoneOffset();
		var summerOffset = summer.getTimezoneOffset();
		var dateOffset = date.getTimezoneOffset();

		return dateOffset == summerOffset && dateOffset != winterOffset ? 1 : 0;
	};
}();

exports.default = Timezone;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(8);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _create = __webpack_require__(30);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(22);
var dPs = __webpack_require__(65);
var enumBugKeys = __webpack_require__(49);
var IE_PROTO = __webpack_require__(47)('IE_PROTO');
var Empty = function Empty() {/* empty */};
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(63)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(110).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;
  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }return _createDict();
};

module.exports = _create2.default || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = _createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.13 ToObject(argument)
var defined = __webpack_require__(41);
module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var shared = __webpack_require__(48)('keys');
var uid = __webpack_require__(32);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var def = __webpack_require__(13).f;
var has = __webpack_require__(14);
var TAG = __webpack_require__(19)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = __webpack_require__(19);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(6);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(42);
var wksExt = __webpack_require__(51);
var defineProperty = __webpack_require__(13).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyDescriptor = __webpack_require__(131);

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pIE = __webpack_require__(53);
var createDesc = __webpack_require__(29);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(43);
var has = __webpack_require__(14);
var IE8_DOM_DEFINE = __webpack_require__(62);
var gOPD = _getOwnPropertyDescriptor2.default;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {/* empty */}
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adUtils = __webpack_require__(1);

var DateUtils = new function () {

	var self = this;

	/**
 	@memberOf Async
 	@method initDateUtils
 	@desc
 		This function is meant to be called at the very beginning of the ad's lifespan. Automatically, it sets initial time which 
 		is used to keep an internal clock that can is used to reference the lifespan of the ad, show countdowns, changes in live states, etc.
 		Additional settings on _dateSettings include:<br>
 			<ul>
 			<li>tzDesignation 		- optionally overrides the system date with a hard-coded one</li>
 			<li>language 			- optionally sets the default language to be used for date-messaging</li>
 			<li>newDayStartsAt		- optionally overrides when a "new day" is to begin other than midnight, in minutes</li>
 			<li>eventDuration		- optionally overrides event duration, in minutes</li>
 			<li>tonightStartsAt	- optionally overrides when "tonight" starts, in minutes</li>
 		</ul>
 */
	self.initDateUtils = function (_dateSettings) {
		self.tzDesignation = _dateSettings.tzDesignation || self.TZ_LOCAL;
		self.initDate = self.getNow(self.tzDesignation);

		self.language = _dateSettings.language || 'english';

		// force date to an external setting - FORMAT NEEDS TO BE A UNIX TIMESTAMP, like: &externalDate=YYYY-MM-DD HH:MM:SS GMT-####
		var externalDate = _adUtils.NetUtils.getQueryParameterBy('externalDate');
		if (externalDate) {
			self.dateMode = self.DATE_EXTERNAL;
			self.setCurrentDate.apply(self, self.parseUnixTimestamp(externalDate));
		}
		// force date to an internal setting
		else if (_dateSettings.dateOverride && (adParams.environmentId == 'staging' || adParams.environmentId == 'debug')) {
				self.dateMode = self.DATE_INTERNAL;
				self.setCurrentDate.apply(self, _dateSettings.dateOverride.call());
			}
			// use system date
			else {
					self.dateMode = self.DATE_SYSTEM;
				}
		self.newDayStartsAt = _dateSettings.newDayStartsAt || 0;
		self.eventDuration = _dateSettings.eventDuration || 120;
		self.tonightStartsAt = _dateSettings.tonightStartsAt || 1050;
	};

	/**
 	@memberOf DateUtils	
 	@var language
 	@desc
 		This controls what language date-messaging will use. 
 */
	self.language;

	/**
 	@memberOf DateUtils	
 	@var tzDesignation
 	@desc
 		This sets a default timezone assumption for the ad...well, actually just for the json parse, at this time. I would like to 
 		go through this class and change all defaults from TZ_LOCAL to this.tzDesignation.  
 */
	self.tzDesignation;

	/**
 	@memberOf DateUtils	
 	@var newDayStartsAt
 		The number of minutes past midnight that {@link DateUtils} will consider to be a new day. Default is 0 minutes( midnight ). 
 */
	self.newDayStartsAt;

	/**
 	@memberOf DateUtils	
 	@var eventDuration
 	@desc
 		The number of minutes an event is presumed to be "Live Now". Default is 120 minutes( 2 hours ). 
 */
	self.eventDuration;

	/**
 	@memberOf DateUtils	
 	@var tonightStartsAt
 	@desc
 		The number of minutes past midnight that {@link DateUtils} will message "tonight" instead of "today". 
 		Default is 1050 minutes( 17.5 hours = 5:30pm ). 
 */
	self.tonightStartsAt;

	/* -- CURRENT DATE LOGIC -------------------------------------------------------------------------------------------------------------------------------------
  *
  *
  *
  */
	self.DATE_INTERNAL = 'INTERNAL-DATE';
	self.DATE_EXTERNAL = 'EXTERNAL-DATE';
	self.DATE_SYSTEM = 'SYSTEM-DATE';

	self.dateMode = self.DATE_SYSTEM;
	self.initDate; // private
	self.internalDate; // private


	/**
 	@memberOf DateUtils	
 	@method getCurrentDate
 	@desc
 		Returns the current date. Current date is determined by the logic in initDateUtils(). The object returned from
 		this function has two properties:
 	@returns {object}
 	@property {string} date
 		a date-time-string in the format of YYYY-MM-DD HH:MM:SS
 	@property {object} tzDesignation
 		one of the {@link DateUtils} TZ objects, with properties "label" and "gmtOffset"
 */
	self.getCurrentDate = function () {
		var currentDate = {
			date: self.parseToDate(self.toTimestamp(new Date()), self.TZ_LOCAL),
			tzDesignation: self.TZ_LOCAL
		};
		if (self.internalDate) {
			currentDate = {
				date: new Date(self.internalDate.date),
				tzDesignation: self.internalDate.tzDesignation
			};
			currentDate.date.setMilliseconds(currentDate.date.getMilliseconds() + (new Date().getTime() - self.initDate.getTime()));
		}
		return currentDate;
	};

	/**
 	@memberOf DateUtils	
 	@method setCurrentDate 
 	@param {Date|string|number} _dateOrTimestamp
 		a date or a date-time-string in the format of YYYY-MM-DD HH:MM:SS
 	@param {object} _tzDesignation
 		optional, one of the {@link DateUtils} TZ objects, with properties "label" and "gmtOffset". Defaults to {@link DateUtils}.TZ_LOCAL
 	@desc
 		Used to override system date with some other date.
 */
	self.setCurrentDate = function (_dateOrTimestamp, _tzDesignation) {
		var tzDesignation = _tzDesignation || self.TZ_LOCAL;
		self.internalDate = {
			date: _dateOrTimestamp instanceof Date ? _dateOrTimestamp : self.parseToDate(_dateOrTimestamp),
			tzDesignation: tzDesignation
		};
		trace('-- DATE SETTINGS -------------------------------------------------------------------------------------------');
		trace('');
		trace('');
		trace('    DATE-MODE: ' + self.dateMode);
		trace('     Time for this unit is now assumed to be: ');
		trace('      ' + self.getCurrentDate().date.toString().replace(/GMT(\+|\-)[0-9]{4}.*$/, self.getDstAccurateGmtString(self.getCurrentDate().date, self.getCurrentDate().tzDesignation)));
		trace('');
		trace('');
		trace('-------------------------------------------------------------------------------------------------------------');
	};

	self.parseUnixTimestamp = function (_unixTimestamp) {
		var dateParts = _unixTimestamp.split('GMT');
		var date = self.parseToDate(dateParts[0]);
		var tzDesignation;
		// build the timezone portion of the date
		var gmtOffset = dateParts[1];
		if (gmtOffset.toUpperCase() == '-LOCAL') tzDesignation = self.TZ_LOCAL;else {
			var gmtPlusMinus = gmtOffset.substr(0, 1) == '-' ? -1 : 1;
			var hoursOffset = gmtPlusMinus * parseInt(gmtOffset.substr(1, 2), 10) - self.getDstOffsetFor(date); // correct offset for dst
			var standardGmtOffset = _adUtils.TextUtils.pad(hoursOffset, 2) + gmtOffset.substr(3, 2);
			tzDesignation = self.getTzDesignationByFor('gmtOffset', 'GMT' + standardGmtOffset);
		}
		return [date, tzDesignation];
	};
	self.getDstAccurateGmtString = function (_date, _tzDesignation) {
		if (_tzDesignation == self.TZ_LOCAL) return self.TZ_LOCAL.gmtOffset;
		var gmtOffset = _tzDesignation.gmtOffset.split('GMT')[1];
		var gmtPlusMinus = gmtOffset.substr(0, 1) == '-' ? -1 : 1;
		var hoursOffset = gmtPlusMinus * parseInt(gmtOffset.substr(1, 2), 10) + self.getDstOffsetFor(_date); // correct offset for dst
		return 'GMT' + _adUtils.TextUtils.pad(hoursOffset, 2) + gmtOffset.substr(3, 2);
	};

	/* -- TIMEZONE LOGIC -------------------------------------------------------------------------------------------------------------------------------------
  *
  *
  *
  */
	/**
 	@memberOf DateUtils	
 	@var {object} TZ_LOCAL
 	@desc
 		Timezone constant for the client's machine. 
 */
	self.TZ_LOCAL = { label: 'local', gmtOffset: 'GMT-LOCAL' };

	/**
 	@memberOf DateUtils	
 	@var {object} TZ_UTC
 	@desc
 		Timezone constant for Greenwich Mean Time. 
 */
	self.TZ_UTC = { label: 'utc', gmtOffset: 'GMT-0000' };

	/**
 	@memberOf DateUtils	
 	@var {object} TZ_ART
 	@desc
 		Timezone constant for Argentina Time. 
 */
	self.TZ_ART = { label: 'art', gmtOffset: 'GMT-0300' };

	/**
 	@memberOf DateUtils	
 	@var {object} TZ_EST
 	@desc
 		Timezone constant for Eastern Time. 
 */
	self.TZ_EST = { label: 'est', gmtOffset: 'GMT-0500' };

	/**
 	@memberOf DateUtils	
 	@var {object} TZ_EST
 	@desc
 		Timezone constant for Columbia Time - no Daylight Savings. 
 */
	self.TZ_COT = { label: 'cot', gmtOffset: 'GMT-0500' };

	/**
 	@memberOf DateUtils	
 	@var {object} TZ_CST
 	@desc
 		Timezone constant for Central Time, Mexico Time. 
 */
	self.TZ_CST = { label: 'cst', gmtOffset: 'GMT-0600' };

	/**
 	@memberOf DateUtils	
 	@var {object} TZ_MST
 	@desc
 		Timezone constant for Mountain Time. 
 */
	self.TZ_MST = { label: 'mst', gmtOffset: 'GMT-0700' };

	/**
 	@memberOf DateUtils	
 	@var {object} TZ_PST
 	@desc
 		Timezone constant for Pacific Time. 
 */
	self.TZ_PST = { label: 'pst', gmtOffset: 'GMT-0800' };

	/**
 	@memberOf DateUtils	
 	@var {object} TZ_AEST
 	@desc
 		Timezone constant for Australian Eastern Time. 
 */
	self.TZ_AEST = { label: 'aest', gmtOffset: 'GMT+1000' };

	self.getTzConstants = function () {
		return [self.TZ_LOCAL, self.TZ_UTC, self.TZ_ART, self.TZ_EST, self.TZ_CST, self.TZ_MST, self.TZ_PST, self.TZ_AEST];
	};

	self.getTzDesignationByFor = function (key, argument) {
		for (var i in self.getTzConstants()) {
			if (self.getTzConstants()[i][key] == argument) return self.getTzConstants()[i];
		}
		return null;
	};

	/**
 	@memberOf DateUtils	
 	@method getOffsetForIn
 	@param {object} tzDesignation
 		one of the TZ constants specifying the timezone in question
 	@param {string} hoursOrMinutes
 		how you would like your offset expressed, in either 'hours' (default) or 'minutes'.
 	@returns {number}
 		Returns the offset to the specified timezone designation in either hours or minutes.
 */
	self.getOffsetForIn = function (tzDesignation, hoursOrMinutes) {
		if (!hoursOrMinutes) hoursOrMinutes = 'hours';
		if (tzDesignation == self.TZ_LOCAL) {
			var local = new Date();
			return hoursOrMinutes == 'hours' ? local.timezoneOffset / 60 : local.timezoneOffset;
		} else {
			var minutesOffset = -(parseInt(tzDesignation.gmtOffset.substr(3, 3), 10) * 60) + parseInt(tzDesignation.gmtOffset.substr(6, 2), 10);
			return hoursOrMinutes == 'hours' ? minutesOffset / 60 : minutesOffset;
		}
	};

	/**
 	@memberOf DateUtils	
 	@method getLocalTzDesignation
 	@returns {object}
 		Returns a tzConstant object representing the timezone that the unit is currently running in. 
 */
	self.getLocalTzDesignation = function () {
		var local = new Date();
		var timezoneOffset = local.timezoneOffset / 60;
		if (self.dateMode != self.DATE_SYSTEM) {
			var currentDate = self.getCurrentDate();
			local = currentDate.date;
			timezoneOffset = self.getOffsetForIn(currentDate.tzDesignation, 'hours');
		}
		var dstOffset = getDstOffsetFor(local);
		var numberOffset = timezoneOffset + dstOffset;

		var hoursOffset = Math.floor(numberOffset);
		var userMinutesOffset = hoursOffset * 60 + (numberOffset - hoursOffset) * 60;
		for (var i in self.getTzConstants()) {
			if (self.getTzConstants()[i] != self.TZ_LOCAL) {
				var tzOffset = self.getOffsetForIn(self.getTzConstants()[i], 'minutes');
				if (userMinutesOffset == self.getTzConstants()[i]) return self.getTzConstants()[i];
			}
		}
		return null;
	};

	/* -- DATE MANIPULATION -------------------------------------------------------------------------------------------------------------------------------------
  *
  *
  *
  */

	/**
 	@memberOf DateUtils	
 	@var {number} MS_PER_MINUTE
 		The number of milliseconds in a minute 
 */
	self.MS_PER_MINUTE = 1000 * 60;

	/**
 	@memberOf DateUtils	
 	@var {number} MS_PER_HOUR
 		The number of milliseconds in a hour 
 */
	self.MS_PER_HOUR = self.MS_PER_MINUTE * 60;

	/**
 	@memberOf DateUtils	
 	@var {number} MS_PER_DAY
 		The number of milliseconds in a day 
 */
	self.MS_PER_DAY = self.MS_PER_HOUR * 24;

	/**
 	@memberOf DateUtils	
 	@var {number} MS_PER_WEEK
 		The number of milliseconds in a week 
 */
	self.MS_PER_WEEK = self.MS_PER_DAY * 7;

	/**
 	@memberOf DateUtils	
 	@method parseToDate
 	@param {Date|string} _date
 		expected to be a date-string in the format of YYYY-MM-DD HH:MM:SS
 	@param {object} _tzDesignation			
 		this is deprecated...timezone is ASSUMED - you must remember what the timezone of this date 
 		is supposed to be so that you can compare apples-to-apples when you make a request to 
 		{@link DateUtils}.getNow( [!!!matching timezone!!!])
 	@desc
 		Parse a string into a Flash Date object.<br><br>
 	
 		Please note, all dates in Flash or JavaScript are assumed to be in the local timezone. For example, if you have 
 		a time in TZ_CST, it will still toString() with a UTC-offset that matches the local timezone, for me, TZ_PST.
 		That means for time comparison, the "time" property of your non-local date will be wrong.  If you need to 
 		figure out if a date's relationship to NOW, you will need to use the methond DateUtils.getNow() and submit
 		the equivilent timezone to which you wish to compare.
 */
	self.parseToDate = function (_date, _tzDesignation) {
		var parsedDate = new Date(parseInt(_date.substr(0, 4), 10), parseInt(_date.substr(5, 2), 10) - 1, parseInt(_date.substr(8, 2), 10), parseInt(_date.substr(11, 2), 10), parseInt(_date.substr(14, 2), 10), parseInt(_date.substr(17, 2), 10));
		return parsedDate;
	};

	/**
 	@memberOf DateUtils	
 	@method getNow
 	@param {object} _tzDesignation
 		a TZ_CONSTANT representing the context of this date. If comparing to another Date, the tzDesignation of the 
 		two dates should match.
 		@desc
 		Returns the current date/time as a new Date object.<br><br>
 			If you need a "now" Date Object for a timezone other than the user's local time, then you should pass one of the TZ_CONSTANTS
 		as an argument to the function. This will offset the Date's time from the user's timezone to the requested one.<br><br> 
 			Programmers who are accustomed to working with date/time will find this approach very upsetting, wanting naturally to use 
 		UTC and timestamps to compare time. The problem is that everyone working on these units, from the clients to creatives, assumes 
 		a timezone when describing dates/times. Even AdManager v1.0 passes canonical time as Eastern Time( EST/EDT )strings.<br><br>
 			So what we end up with are a lot of hard-coded date/time _strings_, being served in many different timezones, and a Javascript interpretter 
 		that will assume the local timezone when parsing these hard-coded strings. Furthermore, we have clients that want to express these
 		times in specific timezones, regardless of the user's timezone.<br><br>
 			That is why we use DateUtils and the TZ_CONSTANTS.<br><br>
 		@example
 		// parsing a time-string in Eastern Time to a Date
 		var easternDate = DateUtils.parseToDate( '2016-01-10 15:00:00' ); // 3pm Eastern, even though the Date will specify the GMT-offset of the user's timezone
 			// creating a "now" Date, also in the context of Eastern Time
 		var easternNowDate = DateUtils.getNow( DateUtils.TZ_EST ); // actual HH:MM will be offset from the user's timezone to the requested timezone
 			// comparing the dates
 		if( easternDate.getTime() > easternNowDate.getTime() ) {
 			trace( 'easternDate has not yet happened' );
 		}
 		else {
 			trace( 'easternDate is passed' );
 		}
 */
	self.getNow = function (_tzDesignation) {
		_tzDesignation = _tzDesignation ? _tzDesignation : self.TZ_LOCAL;
		var currentDate = self.getCurrentDate();
		var today = new Date(currentDate.date);

		var timeDifference = self.minutesFromUtcTo(currentDate.tzDesignation, today) - self.minutesFromUtcTo(_tzDesignation, today);

		today.setMinutes(today.getMinutes() + timeDifference);
		return today;
	};

	/**
 	@memberOf DateUtils	
 	@method minutesFromUtcTo
 	@param {object} tzDesignation
 		any one of the supported timezone( TZ )constants
 	@returns {number} 
 		minutes difference
 	@desc
 		Gets the number of minutes difference between tzDesignation and UTC. Basically just a dictionary, with
 		timezones to be added as needed.
 */
	self.minutesFromUtcTo = function (tzDesignation, context) {
		if (!context) context = new Date();
		var dstOffset = self.getDstOffsetFor(context);
		var minutesToUtc;
		switch (tzDesignation.label) {
			case self.TZ_UTC.label:
				minutesToUtc = 0;
				break;
			case self.TZ_ART.label:
			case self.TZ_EST.label:
			case self.TZ_CST.label:
			case self.TZ_MST.label:
			case self.TZ_PST.label:
				minutesToUtc = (self.getOffsetForIn(tzDesignation) - dstOffset) * 60;
				break;
			case self.TZ_COT.label:
				minutesToUtc = self.getOffsetForIn(tzDesignation) * 60;
				break;
			case self.TZ_AEST.label:
				minutesToUtc = (self.getOffsetForIn(tzDesignation) - (1 - dstOffset)) * 60;
				break;
			case self.TZ_LOCAL.label:
				minutesToUtc = context.getTimezoneOffset();
				break;
		}
		return minutesToUtc;
	};

	/**
 	@memberOf DateUtils	
 	@method getDstOffsetFor
 	@param {Date} date
 		the date to check for dst
 	@returns {number} 
 		0 or 1
 	@desc
 		Gets the hour offset caused by Daylight Savings.
 */
	self.getDstOffsetFor = function (date) {
		var winter = new Date('2011', '01', '01');
		var summer = new Date('2011', '07', '01');

		var winterOffset = winter.getTimezoneOffset();
		var summerOffset = summer.getTimezoneOffset();
		var dateOffset = date.getTimezoneOffset();

		if (dateOffset == summerOffset && dateOffset != winterOffset) return 1;else return 0;
	};

	/* -- DATE FORMATTING -------------------------------------------------------------------------------------------------------------------------------------
  *
  *
  *
  */
	/**
 	@memberOf DateUtils	
 	@method toDateTime
 	@param {Date} date
 		the date to convert to a string
 	@returns {string}
 	@desc
 		Returns a string in the format "MM/DD/YYYY HH:MMa/p" 
 */
	self.toDateTime = function (date) {
		return self.toDate(date) + " " + self.toTime(date);
	};

	/**
 	@memberOf DateUtils	
 	@method toDate
 	@param {Date} date
 		the date to convert to a string
 	@returns {string}
 	@desc
 		Returns a string in the format "MM/DD/YYYY" 
 */
	self.toDate = function (date) {
		return self.toSimpleDate(date) + "/" + date.getFullYear();
	};

	/**
 	@memberOf DateUtils	
 	@method toSimpleDate
 	@param {Date} date
 		the date to convert to a string
 	@returns {string}
 	@desc
 		Returns a string in the format "MM/DD" 
 */
	self.toSimpleDate = function (date) {
		return date.getMonth() + 1 + "/" + date.getDate();
	};

	/**
 	@memberOf DateUtils	
 	@method toTime
 	@param {Date} date
 		the date to convert to a string
 	@returns {string}
 	@desc
 		Returns a string in the format "HH:MM AM/PM" 
 */
	self.toTime = function (date) {
		var time = self.toSimpleTime(date) + ' ' + self.toMeridiem(date);
		return time;
	};

	/**
 	@memberOf DateUtils	
 	@method toSimpleTime
 	@param {Date} date
 		the date to convert to a string
 	@returns {string}
 	@desc
 		Returns a string in the format "HH:MM" 
 */
	self.toSimpleTime = function (date) {
		var time = (date.getHours() > 12 ? date.getHours() - 12 : date.getHours() == 0 ? 12 : date.getHours()) + ":" + _adUtils.TextUtils.pad(date.getMinutes(), 2);
		return time;
	};

	/**
 	@memberOf DateUtils	
 	@method toMeridiem
 	@param {Date} date
 		the date to be converted.
 	@returns {string}
 	@desc
 		Returns the meridiem "AM/PM"
 */
	self.toMeridiem = function (date) {
		return date.getHours() >= 12 ? self.getLabels().PM : self.getLabels().AM;
	};

	/**
 	@memberOf DateUtils	
 	@method toTimestamp
 	@param {Date} date
 		the date to be converted.
 	@returns {string}
 	@desc
 		Returns a date object in the format of YYYY-MM-DD HH:MM:SS 
 */
	self.toTimestamp = function (date) {
		var month = _adUtils.TextUtils.pad(date.getMonth() + 1, 2);
		var day = _adUtils.TextUtils.pad(date.getDate(), 2);
		var year = _adUtils.TextUtils.pad(date.getFullYear(), 4);
		var hours = _adUtils.TextUtils.pad(date.getHours(), 2);
		var mins = _adUtils.TextUtils.pad(date.getMinutes(), 2);
		var secs = _adUtils.TextUtils.pad(date.getSeconds(), 2);

		return year + '-' + month + '-' + day + ' ' + hours + ':' + mins + ':' + secs;
	};

	/**
 	@memberOf DateUtils	
 	@method toDay
 	@param {Date} date
 		the date to be converted.
 	@param {boolean} abbreviate
 		return shortened versions of the days, like "Tues" or "Sat".
 	@returns {string}
 	@desc
 		Converts a date object to a string representing the day, like "Tuesday" or "Saturday". 
 */
	self.toDay = function (date, abbreviate) {
		var _days = abbreviate ? self.getLabels().WEEKDAYS_ABRV : self.getLabels().WEEKDAYS_FULL;
		return _days[date.getDay()];
	};

	/**
 	@memberOf DateUtils	
 	@method toMonthAndDay
 	@param {Date} date
 		the date to be converted.
 	@param {boolean} abbreviate
 		return shortened versions of the months, like "Jan" or "Aug".
 	@returns {string}
 	@desc
 		Converts a date object to a string representing the month, like "January" or "August". 
 */
	self.toMonthAndDay = function (date, abbreviate, returnMonthsAsNumbers, padMonth) {
		var _months = abbreviate ? self.getLabels().MONTHS_ABRV : self.getLabels().MONTHS_FULL;

		if (returnMonthsAsNumbers) return self.getMonthAsNumber(date, padMonth) + '/' + date.getDate();
		return _months[date.getMonth()] + ' ' + date.getDate();
	};

	/** 
 	@memberOf DateUtils	
 	@method toDayAndMonth
 	@param {Date} date
 		the date to be converted.
 	@param {boolean} abbreviate
 		return shortened versions of the months, like "Jan" or "Aug".
 	@returns {string}
 	@desc
 		Converts a date object to a string representing the month, like "January" or "August". 
 */
	self.toDayAndMonth = function (date, abbreviate, returnMonthsAsNumbers, padMonth, useNumericSuffixes) {
		var _months = abbreviate ? self.getLabels().MONTHS_ABRV : self.getLabels().MONTHS_FULL;
		if (returnMonthsAsNumbers) return date.getDate() + '-' + self.getMonthAsNumber(date, padMonth);else {
			var numericSuffix = useNumericSuffixes ? self.getNumericSuffixFor(date.getDate()) : '';
			return date.getDate() + numericSuffix + ' ' + self.getLabels().OF + ' ' + _months[date.getMonth()];
		}
	};

	/** 
 	@memberOf DateUtils	
 	@method getMonthAsNumber
 	@param {Date} date
 		the date to be converted.
 	@param {boolean} pad
 		to add padding, like "01" or "02".
 	@returns {string}
 	@desc
 		Converts a date object to a string representing the month, like "1" or "2"
 */
	self.getMonthAsNumber = function (date, pad) {
		var monthNumber = date.getMonth() + 1;
		return pad ? _adUtils.TextUtils.pad(monthNumber, 2) : monthNumber;
	};

	/** 
 	@memberOf DateUtils	
 	@method getNumericSuffixFor
 	@param {number} value
 		the number to be converted to an english numeral.
 	@returns {string}
 	@desc
 		Adds the correct numeric suffix to a number.
 */
	self.getNumericSuffixFor = function (value) {
		var value = value.toString();
		var lastNumber = value.slice(value.length - 1);
		var lastTwoNumbers = value.length >= 2 ? value.slice(value.length - 2) : value;
		switch (lastNumber) {
			case '1':
				return lastTwoNumbers != '11' ? value + self.getLabels().ST : value + self.getLabels().TH;
			case '2':
				return lastTwoNumbers != '12' ? value + self.getLabels().ND : value + self.getLabels().TH;
			case '3':
				return lastTwoNumbers != '13' ? value + self.getLabels().RD : value + self.getLabels().TH;
			default:
				return value + self.getLabels().TH;
		}
	};

	/** 
 	@memberOf DateUtils	
 	@method getTimeDifference
 	@param {Date} _startTime
 		initial date
 	@param {Date} _endTime
 		second date
 	@returns {object}
 	@desc
 		Returns an object with the difference between two Dates, with keys for days, hours, minutes, seconds. 
 		If _startTime exceeds _endTime, then the function will return null. 
 	*/
	self.getTimeDifference = function (_startTime, _endTime) {
		var diff = _endTime.getTime() / 1000 - _startTime.getTime() / 1000;
		if (diff < 0) return null;
		return {
			days: diff / (24 * 60 * 60),
			hours: diff / (60 * 60) % 24,
			minutes: diff / 60 % 60,
			seconds: diff % 60
		};
	};

	/** 
 	@memberOf DateUtils	
 	@method selectMessagingForDate
 	@param {Date} date
 		the date of an upcoming event
 	@param {Object} tzDesignation
 		the timezone in which relative messaging should be derived. The default is the local timezone. 
 		If your times are relative to a specific timezone, you must specify that timezone constant.  
 		For example, for Easter Standard Time: DateUtils.TZ_EST
 	@param {boolean} abbreviateMonths
 		abbreviate will cause month-names to be abbreviated, default is false
 	@param {boolean} abbreviateDays
 		abbreviate will cause day-names to be abbreviated, default is false
 	@param {boolean} monthsAsNumbers
 		to return the month as their numerical entities
 	@param {boolean} padMonth
 		whether to pad the month in their numerical format
 	@returns {string}
 	@desc
 		Returns a string that represents messaging for the date relative to the context date. For example
 		"Live Now", "Tomorrow", "Tonight", "Today", "Wednesday", "September 1"
 */
	self.selectMessagingForDate = function (date, tzDesignation, abbreviateMonths, abbreviateDays, monthsAsNumbers, padMonth) {
		tzDesignation = tzDesignation ? tzDesignation : self.TZ_LOCAL;
		abbreviateMonths = abbreviateMonths ? abbreviateMonths : false;
		abbreviateDays = abbreviateDays ? abbreviateDays : false;
		var _contextRequested = self.getNow(tzDesignation);
		var _contextLocal = self.getNow(self.TZ_LOCAL);
		var _eventPast = new Date(date);
		_eventPast.time += self.eventDuration * self.MS_PER_MINUTE;
		switch (true) {
			case self.isPast(_eventPast, _contextRequested):
				return self.getLabels().PAST;
			case self.isLiveNow(date, _contextRequested):
				return self.getLabels().NOW;
			case self.isTomorrow(date, _contextLocal):
				return self.getLabels().TOMORROW;
			case self.isTonight(date, _contextLocal):
				return self.getLabels().TONIGHT;
			case self.isToday(date, _contextLocal):
				return self.getLabels().TODAY;
			case self.isThisWeek(date, _contextLocal):
				return self.toDay(date, abbreviateDays);
			default:
				if (self.language == 'spanish') return self.toDayAndMonth(date, abbreviateMonths, monthsAsNumbers, padMonth);else return self.toMonthAndDay(date, abbreviateMonths, monthsAsNumbers, padMonth);
		}
	};

	/* -- LANGUAGE LOGIC -------------------------------------------------------------------------------------------------------------------------------------
  *
  *
  *
  */
	/**
 	@memberOf DateUtils	
 	@var {Object} languageLabels
 		These objects define labels that date-messaging will use in the ad. 
 */
	self.languageLabels = [{
		language: 'english',
		labels: {
			MONTHS_FULL: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			MONTHS_ABRV: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
			MONTHS_EXCP: ['', '', '', '', '', '', '', '', 'sept', '', '', ''],

			WEEKDAYS_FULL: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			WEEKDAYS_ABRV: ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'],
			WEEKDAYS_EXCP1: ['', '', 'tues', 'wednes', 'thur', '', ''],
			WEEKDAYS_EXCP2: ['', '', '', '', 'thurs', '', ''],

			AM: 'am',
			PM: 'pm',

			ST: 'st',
			ND: 'nd',
			RD: 'rd',
			TH: 'th',
			OF: 'of',

			TOMORROW: 'Tomorrow',
			TODAY: 'Today',
			TONIGHT: 'Tonight',
			NOW: 'Live Now',
			PAST: 'Past'
		}
	}, {
		language: 'spanish',
		labels: {
			MONTHS_FULL: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
			MONTHS_ABRV: ['enero', 'feb', 'marzo', 'abr', 'mayo', 'jun', 'jul', 'agosto', 'sept', 'oct', 'nov', 'dic'],
			MONTHS_EXCP: ['', '', '', '', '', '', '', '', 'set', '', '', ''],

			WEEKDAYS_FULL: ['domingo', 'lunes', 'martes', 'mi&#201;rcoles', 'jueves', 'viernes', 's&#193;bado'],
			WEEKDAYS_ABRV: ['dom', 'lun', 'mar', 'mi&#201;r', 'jue', 'vier', 's&#193;b'],
			WEEKDAYS_EXCP1: ['', '', 'tues', 'wednes', 'thur', '', ''],
			WEEKDAYS_EXCP2: ['', '', '', '', 'thurs', '', ''],

			AM: 'am',
			PM: 'pm',

			ST: 'ro',
			ND: 'ndo',
			RD: 'rd',
			TH: 'th',
			OF: 'de',

			TOMORROW: 'ma&#209;ana',
			TODAY: 'hoy',
			TONIGHT: 'esta noche',
			NOW: 'en vivo',
			PAST: 'past'
		}
	}];
	self.getLabels = function () {
		for (var i = 0; i < self.languageLabels.length; i++) {
			if (self.languageLabels[i].language === self.language) {
				return self.languageLabels[i].labels;
			}
		}
		return null;
	};

	/* -- DATE LOGIC -------------------------------------------------------------------------------------------------------------------------------------
  *
  *
  *
  */
	/** 
 	@memberOf DateUtils	
 	@method isWeekDay
 	@param {string} day
 		a string representing a day of the week, like "Tuesday"
 	@param {boolean} abbrev
 		a flag to do the check against the abbreviated forms of weekdays.
 	@returns {boolean}
 	@desc
 		Returns true or false if the day-string passed is a weekday, versus a weekend
 */
	function isWeekDay(day, abbrev) {
		var isWD = false;
		var dayArray = abbrev ? self.getLabels().WEEKDAYS_ABRV : self.getLabels().WEEKDAYS_FULL;
		for (var i = 0; i < dayArray.length; i++) {
			if (day.toLowerCase() === dayArray[i]) {
				isWD = true;
				break;
			}
		}
		return isWD;
	}

	/** 
 	@memberOf DateUtils	
 	@method isPast
 	@param {Date} date
 		date to be compared
 	@param {Date} context
 		date to compare against, generally {@link DateUtils}
 	@returns {boolean}
 	@desc
 		Returns true for a date that has passed the context.
 */
	self.isPast = function (date, context) {
		trace('checking isPast');
		return context.getTime() > date.getTime() + self.eventDuration * self.MS_PER_MINUTE;
	};

	/** 
 	@memberOf DateUtils	
 	@method isLiveNow
 	@param {Date} date
 		date to be compared
 	@param {Date} context
 		date to compare against, generally {@link DateUtils.getNow}
 	@returns {boolean}
 	@desc
 		Returns true for a date that is after the context but before date + {@link DateUtils.eventDuration}.
 */
	self.isLiveNow = function (date, context) {
		trace('checking isLiveNow');
		var _startPassed = context.getTime() >= date.getTime();
		var _elapsedTime = context.getTime() - date.getTime();
		var _isNotFinished = _elapsedTime <= self.eventDuration * self.MS_PER_MINUTE;
		return _startPassed && _isNotFinished;
	};

	/**
 	@memberOf DateUtils	
 	@method isTonight
 	@param {Date} date
 		date to be compared
 	@param {Date} context
 		date to compare against, generally <DateUtils.getNow>
 	@returns {boolean}
 	@desc
 		Returns true for a date that is tonight, ie: after {@link DateUtils.tonightStartsAt} and before {@link DateUtils.newDayStartsAt}.
 */
	self.isTonight = function (date, context) {
		var tonightAtHours = Math.floor(self.tonightStartsAt / 60);
		var tonightAtMinutes = self.tonightStartsAt - tonightAtHours * 60;
		return date.getTime() - context.getTime() < self.MS_PER_DAY && date.getDate() == context.getDate() && (date.getHours() > tonightAtHours || date.getHours() == tonightAtHours && date.getMinutes() > tonightAtMinutes) && context.getHours() >= self.newDayStartsAt / 60;
	};

	/**
 	@memberOf DateUtils	
 	@method isToday
 	@param {Date} date
 		date to be compared
 	@param {Date} context
 		date to compare against, generally {@link DateUtils.getNow}
 	@returns {boolean}
 	@desc
 		Returns true for a date that is today, ie: after {@link DateUtils.newDayStartsAt} and before 5pm.
 */
	self.isToday = function (date, context) {
		return date.getTime() - context.getTime() < self.MS_PER_DAY && date.getDate() == context.getDate() && context.getHours() >= self.newDayStartsAt / 60;
	};

	/** 
 	@memberOf DateUtils	
 	@method isTomorrow
 	@param {Date} date
 		date to be compared
 	@param {Date} context
 		date to compare against, generally {@link DateUtils.getNow}
 	@returns {boolean}
 	@desc
 		Returns true for a $_date that is tomorrow, ie: after {@link DateUtils.newDayStartsAt}.
 */
	self.isTomorrow = function (date, context) {
		var _dateStart = new Date(date.getFullYear(), date.getMonth(), date.getDate());
		var _dayBeforeStart = new Date(_dateStart);
		_dayBeforeStart.setHours(_dateStart.getHours() - 24);
		return context.getTime() >= _dayBeforeStart.getTime() + self.newDayStartsAt * 60 * 1000 && context.getTime() < _dateStart.getTime() + self.newDayStartsAt * 60 * 1000;
	};

	/** 
 	@memberOf DateUtils	
 	@method isThisWeek
 	@param {Date} date
 		date to be compared
 	@param {Date} context
 		date to compare against, generally {@link DateUtils.getNow}
 	@returns {boolean}
 	@desc
 		Returns true for a date that is within a week.
 */
	self.isThisWeek = function (date, context) {
		return date.getTime() - context.getTime() <= self.MS_PER_WEEK && (date.getDate() - context.getDate() == 6 && context.getHours() >= self.newDayStartsAt / 60 || date.getDate() - context.getDate() < 6);
	};

	/** 
 	@memberOf DateUtils	
 	@method isThisMonth
 	@param {Date} date
 		date to be compared
 	@param {Date} context
 		date to compare against, generally {@link DateUtils.getNow}
 	@returns {boolean}
 	@desc
 		Returns true for a date that is in the same month as context 
 */
	self.isThisMonth = function (date, context) {
		return date.getMonth() == context.getMonth();
	};

	/** 
 	@memberOf DateUtils	
 	@method isThisYear
 	@param {Date} date
 		date to be compared
 	@param {Date} context
 		date to compare against, generally {@link DateUtils.getNow}
 	@returns {boolean}
 	@desc
 		Returns true for a date that is in the same year as context 
 */
	self.isThisYear = function (date, context) {
		return date.getFullYear() == context.getFullYear();
	};
}(); /**
     	@class DateUtils
     
     	@classdesc
     		<span style="color:#ff0000"><b>WARN:</b><br>
     		This class has been deprecated.  See the dates/ package: {@link DateFormatter}, {@link DateManager}, {@link DateSchedule}, {@link Timezone}, {@link TzDate} 
     		</span>
     
     		<br><br>
     
     		This class provides utilities for mananipulating the Javascript "Date" object.<br><br>
     
     		Because ads often need to display date/time in timezones other than that of the user, much of this involves
     		a paradign of ignoring the Date-object's tzOffset and instead maintaining a "tzDesignation". This ends up allowing 
     		for apples-to-apples comparisons/manipulations.<br><br>
     
     		There are messaging utilities. This makes it easy to generate the correct date-messaging as 
     		an event draws closer. See "selectMessagingForDate()".<br><br>
     
     		There are also formatting utilities...making it easier to derive the various syntaxes in which dates need 
     		to be expressed.<br><br>
     
     		<b>Debugging:</b><br>
     		
     		There are several ways to test dates, INSTEAD of changing your computer clock:<br>
     		<ul>
     			<li>In your Index: <br>
     				Change the return value of `adParams.dateSettings.dateOverride`.</li><br>
     
     			<li>Local Server or iframe Query-string:<br>
     				&externalDate=YYYY-MM-DD HH:MM:SS GMT-####</li><br>
     
     		 	<li>Publish to client-projects<br>
     		 		There is a date/time picker interface.</li><br>
     		 </ul>
     */
exports.default = DateUtils;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adUtils = __webpack_require__(1);

var _Timezone = __webpack_require__(39);

var _Timezone2 = _interopRequireDefault(_Timezone);

var _TzDate = __webpack_require__(25);

var _TzDate2 = _interopRequireDefault(_TzDate);

var _DateFormatter = __webpack_require__(26);

var _DateFormatter2 = _interopRequireDefault(_DateFormatter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class DateManager

	@classdesc
		This class initailizes the ads understanding of "now" for use with all other Date oriented classes.		
*/
var DateManager = new function () {

	var D = this;

	var _currentDate;

	// ---------------------------------------------------------------------------------------------------------------
	// PUBLIC METHODS
	/**
 	@memberOf DateManager
 	@method init
 	@desc
 		This function is meant to be called at the very beginning of the ad's lifespan. Automatically, it sets initial time which 
 		is used to keep an internal clock that can is used to reference the lifespan of the ad, show countdowns, changes in live states, etc.
 		Additional settings on args include:<br>
 			<ul>
 			<li>dateOverride - optionally overrides the system date with a hard-coded one</li>
 			<li>language - optionally sets the default language to be used for date-messaging</li>
 		</ul>
 */
	D.init = function (args) {
		trace('DateManager.init()');

		// should this use global.getQueryParams() instead?
		var externalDate = _adUtils.NetUtils.getQueryParameterBy('date');
		var dateMode = 'SYSTEM-DATE';

		// Call LOCAL here to establish its value
		_Timezone2.default.LOCAL;

		if (externalDate) {
			_currentDate = externalDate;
			dateMode = 'EXTERNAL-DATE';
		} else if (args.dateOverride && (adParams.environmentId == 'staging' || adParams.environmentId == 'debug')) {
			_currentDate = args.dateOverride();
			dateMode = 'INTERNAL-DATE';
		}

		if (_currentDate) {
			// grab now, extract output timezone
			var now = new _TzDate2.default({
				datetime: _currentDate
			});
			trace('\t_currentDate set |', now.outputTimezone, '|', now, '|', now.toFullDateTime(), '|', now.outputTimezone);

			var tz = now.outputTimezone;
			//look for a timezone label, only changes the LABEL not the actual timezone value
			var externalTzLabel = _adUtils.NetUtils.getQueryParameterBy('tz');
			if (externalTzLabel) {
				tz.label = tz.abbr = externalTzLabel;
			}

			_Timezone2.default.LOCAL = tz;
		}

		// check for default timezone, used in Velvet preview since segment not loaded
		var externalDefaultTimezone = _adUtils.NetUtils.getQueryParameterBy('ltz');
		if (externalDefaultTimezone) {
			adParams.defaultTimezone = externalDefaultTimezone;
		}

		trace('-- CURRENT DATE ' + Array(104).join('-'));
		trace('');
		trace('    DATE-MODE: ' + dateMode);
		trace('');
		trace('     Time for this unit is now assumed to be: ');
		trace('      ', D.getNow().toFullDateTime());
		trace('');
		if (externalDefaultTimezone) {
			trace('     External default timezone is: ');
			trace('      ', externalDefaultTimezone);
			trace('');
		}
		trace(Array(120).join('-'));

		if (args.language) {
			_DateFormatter2.default.language = args.language;
		}
	};

	/**
 	@memberOf DateManager	
 	@method getNow
 	@returns {TzDate}
 	@desc
 		Returns a TzDate representing the exact time it is called.
 			You can override system time in the following ways:
 		<br>
 		<codeblock>
 			// in the index
 			var adParams = {
 				dateSettings: {
 					dateOverride : function() { return [ '2016-09-16 14:07:00', Timezone.PST ]; }
 				}
 			}
 				// with a query string:
 			// add this to your index file's url:
 			?date=2017-05-17T17:45:00+00:00
 				// NOTE: the browser address bar will automatically "url encode" some of the characters
 			// so full url would look like:
 			http:/ /10.0.86.13:4200/build/300x250/index.html?date=2017-05-17T17%3A45%3A00%2B00%3A00
 		</codeblock>
 			<b>NOTE::</b> <i>Ads built before v2.8.0 (June 2017) use {@link DateUtils} whose query-string format is different.</i>
 		<br>
 */
	D.getNow = function () {
		var date = _currentDate;
		if (date == undefined) {
			date = new Date().toISOString().split('.')[0] + '+00:00';
		}

		return new _TzDate2.default({
			datetime: date,
			outputTimezone: _Timezone2.default.LOCAL
		});
	};

	/** 
 	@memberOf DateManager	
 	@method isPast
 	@param {Date} date
 		date to be compared
 	@param {Date} context
 		date to compare against, generally {@link DateUtils}
 	@returns {boolean}
 	@desc
 		Returns true for a date that has passed the context.
 */
	D.isPast = function (date, context) {
		if (context == undefined) {
			context = D.getNow();
		}

		// trace ( 'isPast()\n\t', date, '|', date.toFullDateTime(), '\n\t', context, '|', context.toFullDateTime() )

		// make it > and = to account for schedules a time such as 8:00pm vs 8:00pm should comes as true, not needing to set it as 8:00:01pm
		return context.getTime() >= date.getTime();
	};

	D.getTimeDifference = function (startTime, endTime) {
		var diff = endTime.getTime() / 1000 - startTime.getTime() / 1000;
		if (diff < 0) {
			diff = 0;
		}
		var obj = {
			day: diff / (24 * 60 * 60),
			hour: diff / (60 * 60) % 24,
			minute: diff / 60 % 60,
			second: diff % 60,
			output: ''
		};
		var label = ['day', 'hour', 'minute', 'second'];
		for (var i = 0; i < 4; i++) {
			obj.output += _adUtils.TextUtils.pad(Math.floor(obj[label[i]]), 2);
			if (i < 3) obj.output += ':';
		}
		/*
  obj.output = TextUtils.pad( Math.floor(obj.day), 2 ) + ':' 
  			+ TextUtils.pad( Math.floor(obj.hour), 2 ) + ':'
  			+ TextUtils.pad( Math.floor(obj.minute), 2 ) + ':' 
  			+ TextUtils.pad( Math.floor(obj.second), 2 );
  */
		return obj;
	};
}();

exports.default = DateManager;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adLoad = __webpack_require__(34);

var _adLoad2 = _interopRequireDefault(_adLoad);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ImageManager = new function () {
	var I = this;

	var _pendingImages = [];
	var _pendingCanvasImages = [];
	var _pendingLoaders = [];
	var _nextLoadCallback = [];
	var _imageManagerLoader;
	var _dict = {};
	var _isLoading = false;
	var _loaderCount = 0;
	var _onComplete = function _onComplete() {};
	var _onFail;

	/* ------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
 	@memberOf ImageManager
 	@method addToLoad
 	@param {string} file
 		A filename or path
 	@param {object} arg
 		Optional. Determines if the image should be loaded with a crossOrigin:'anonymous' for images used in a canvas. An object with one boolean key: forCanvas 
 	@desc
 		Add an image file-path to be loaded.
 		@example
 		// Add an image from the "images/" folder
 		ImageManager.addToLoad( adParams.imagesPath + 'sample.png' );
 			// Add an image full path, and get the result key back
 		var sampleImageId = ImageManager.addToLoad( 'http://some/full/file/path/sample.png' );
 			// Add an image for use with CanvasDrawer, and get the result key back
 		// NOTE: The object must be there or images will error when used in Canvas
 		var sampleImageId = ImageManager.addToLoad( 'http://some/full/file/path/sample.png', { forCanvas:true });
 		@returns
 		An "imageId" which can be used to get an image by its id, see: {@link ImageManager.get}
 */
	I.addToLoad = function (file, arg) {
		var id = _adLoad.LoaderUtils.getFileName(file);

		if (!I.available(id, true)) {
			var forCanvas = arg && arg.forCanvas == true;
			//trace ( 'ImageManager.addToLoad(', id, ') forCanvas:', forCanvas )
			forCanvas ? _pendingCanvasImages.push(file) : _pendingImages.push(file);
		}

		return id;
	};

	/**
 	@memberOf ImageManager
 	@method addLoader
 	@param {Loader} loader
 		A {@link Loader}.
 	@desc
 		Add a Loader to loaded along with any other queued image requests.
 		@example
 		ImageManager.addLoader( new Loader( 
 			assets.images, { 
 				name: 'imageLocalLoader', 
 				prepend: adParams.imagesPath 
 		}));
 */
	I.addLoader = function (loader) {
		_pendingLoaders.push(loader);
	};

	/**
 	@memberOf ImageManager
 	@method get
 	@param {string} imageId
 		A String id of an Image
 	@desc
 		Returns the <<b></b>img> that was created when the requested image was loaded in.
 		@example
 		ImageManager.get( 'sample' );
 */
	I.get = function (imageId) {
		if (_dict[imageId]) return _dict[imageId];else throw new Error("ImageManager : No image named '" + imageId + "' has been loaded");
	};

	/**
 	@memberOf ImageManager
 	@method available
 	@param {string} imageId
 		A String id of an Image
 	@desc
 		Returns a boolean stating if an image by the given imageID has been loaded
 		@example
 		ImageManager.available( 'sample' );
 */
	I.available = function (imageId, internal) {
		var exists = _dict[imageId] != undefined;

		// if the image we are trying to load already exists
		if (exists) {
			// if this is an internal use - as in, called from I.addToLoad() or addToDictionary()
			if (internal) trace('ImageManager.available() -->', true, ': Duplicate Image Id "' + imageId + '". One or more images loading in have the same name. Each Image needs a unique file name.');
		} else {
			// if the image doesn't already exist, we only want to know that if it is not from an internal ImageManager method
			// for example: checking to see if an image exists from build.js
			if (!internal) trace("ImageManager.available() -->", false, ": No image named '" + imageId + "' has been loaded");
		}

		return exists;
	};

	/**
 	@memberOf ImageManager
 	@method load
 	@param {function} callback
 		Callback to execute when all images are loaded.
 	@param {function} onFail
 		Optional onFail callback - if not specified a failed load will cause the ad to failover.
 		@desc
 		Executes load queue, which, on success, will yield all of the requested images available with {@link ImageManager.get}
 */
	I.load = function (callback, onFail) {
		_onFail = onFail || global.failAd;

		if (_isLoading) {
			//set up a wait for the first one to finish
			_nextLoadCallback.push(callback);
		} else {
			_imageManagerLoader = new _adLoad2.default({ name: 'imageManagerLoader', onComplete: handleLoadComplete, onFail: handleFail });

			_onComplete = [].concat(callback);
			_nextLoadCallback = [];

			// extract out the images getting loaded, leaving _pendingImages able to take more while loading
			var currentPendingImages = _pendingImages.slice();
			_pendingImages = [];
			_imageManagerLoader.add(new _adLoad2.default(currentPendingImages, { name: 'dynamicImages-' + _loaderCount++, fileType: 'jpg' }));

			var currentPendingCanvasImages = _pendingCanvasImages.slice();
			_pendingCanvasImages = [];
			_imageManagerLoader.add(new _adLoad2.default(currentPendingCanvasImages, { name: 'dynamicCanvasImages-' + _loaderCount++, fileType: 'jpg', crossOrigin: 'anonymous' }));

			var currentPendingLoaders = _pendingLoaders.slice();
			_pendingLoaders = [];
			for (var i = 0; i < currentPendingLoaders.length; i++) {
				_imageManagerLoader.add(currentPendingLoaders[i]);
			}

			_isLoading = true;
			_imageManagerLoader.load();
		}
	};

	I.addFbaImages = function (target) {
		if (target) addToDictionary(target.getAllContentRaw());
	};

	/* ------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function addToDictionary(content) {
		for (var i = 0; i < content.length; i++) {
			if (content[i] instanceof Image || content[i] instanceof SVGElement) {
				var img = content[i];
				if (!I.available(content[i].id, true)) _dict[img.id] = img;
			}
		}

		trace('ImageManager:', _dict);

		for (var i = 0; i < _onComplete.length; i++) {
			_onComplete[i].call();
		}if (_nextLoadCallback.length > 0) {
			I.load(_nextLoadCallback);
		}
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS
	function handleLoadComplete(target) {
		_isLoading = false;

		addToDictionary(target.getAllContentRaw());
	}

	function handleFail() {
		_isLoading = false;
		_onFail.call();
	}
}(); /**
     	@class ImageManager
     	@desc
     		This module is used to add/load/manage all Images.
     		
     */
exports.default = ImageManager;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LiveScoring = exports.ExpandableDcs = exports.Expandable = exports.ViewManager = exports.SheetManager = exports.ImageManager = exports.CssManager = exports.Async = exports.PrepareCommon = exports.PrepareCore = undefined;

var _PrepareCore = __webpack_require__(91);

var _PrepareCore2 = _interopRequireDefault(_PrepareCore);

var _PrepareCommon = __webpack_require__(183);

var _PrepareCommon2 = _interopRequireDefault(_PrepareCommon);

var _Async = __webpack_require__(86);

var _Async2 = _interopRequireDefault(_Async);

var _CssManager = __webpack_require__(83);

var _CssManager2 = _interopRequireDefault(_CssManager);

var _ImageManager = __webpack_require__(57);

var _ImageManager2 = _interopRequireDefault(_ImageManager);

var _SheetManager = __webpack_require__(184);

var _SheetManager2 = _interopRequireDefault(_SheetManager);

var _ViewManager = __webpack_require__(185);

var _ViewManager2 = _interopRequireDefault(_ViewManager);

var _Expandable = __webpack_require__(87);

var _Expandable2 = _interopRequireDefault(_Expandable);

var _ExpandableDcs = __webpack_require__(186);

var _ExpandableDcs2 = _interopRequireDefault(_ExpandableDcs);

var _LiveScoring = __webpack_require__(187);

var _LiveScoring2 = _interopRequireDefault(_LiveScoring);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: Is there a better way to do this ????
exports.PrepareCore = _PrepareCore2.default;
exports.PrepareCommon = _PrepareCommon2.default;
exports.Async = _Async2.default;
exports.CssManager = _CssManager2.default;
exports.ImageManager = _ImageManager2.default;
exports.SheetManager = _SheetManager2.default;
exports.ViewManager = _ViewManager2.default;
exports.Expandable = _Expandable2.default;
exports.ExpandableDcs = _ExpandableDcs2.default;
exports.LiveScoring = _LiveScoring2.default;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(42);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(64);
var hide = __webpack_require__(16);
var has = __webpack_require__(14);
var Iterators = __webpack_require__(44);
var $iterCreate = __webpack_require__(99);
var setToStringTag = __webpack_require__(50);
var getPrototypeOf = __webpack_require__(69);
var ITERATOR = __webpack_require__(19)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };
      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }return function entries() {
      return new Constructor(this, kind);
    };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() {
      return $native.call(this);
    };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// optional / simple context binding
var aFunction = __webpack_require__(96);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };
    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };
    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }
  return function () /* ...args */{
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(97), __esModule: true };

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = !__webpack_require__(7) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(63)('div'), 'a', { get: function get() {
      return 7;
    } }).a != 7;
});

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isObject = __webpack_require__(8);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(16);

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _defineProperties = __webpack_require__(17);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dP = __webpack_require__(13);
var anObject = __webpack_require__(22);
var getKeys = __webpack_require__(31);

module.exports = __webpack_require__(7) ? _defineProperties2.default : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }return O;
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var has = __webpack_require__(14);
var toIObject = __webpack_require__(15);
var arrayIndexOf = __webpack_require__(107)(false);
var IE_PROTO = __webpack_require__(47)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys
  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }return result;
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(14);
var toObject = __webpack_require__(46);
var IE_PROTO = __webpack_require__(47)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = _getPrototypeOf2.default || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim

var _typeof2 = __webpack_require__(5);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var global = __webpack_require__(6);
var has = __webpack_require__(14);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(12);
var redefine = __webpack_require__(64);
var META = __webpack_require__(71).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(48);
var setToStringTag = __webpack_require__(50);
var uid = __webpack_require__(32);
var wks = __webpack_require__(19);
var wksExt = __webpack_require__(51);
var wksDefine = __webpack_require__(52);
var enumKeys = __webpack_require__(125);
var isArray = __webpack_require__(128);
var anObject = __webpack_require__(22);
var isObject = __webpack_require__(8);
var toIObject = __webpack_require__(15);
var toPrimitive = __webpack_require__(43);
var createDesc = __webpack_require__(29);
var _create = __webpack_require__(45);
var gOPNExt = __webpack_require__(73);
var $GOPD = __webpack_require__(54);
var $DP = __webpack_require__(13);
var $keys = __webpack_require__(31);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', { value: 7 }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && (0, _typeof3.default)($Symbol.iterator) == 'symbol' ? function (it) {
  return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    }return setSymbolDesc(it, key, D);
  }return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(75).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(53).f = $propertyIsEnumerable;
  __webpack_require__(72).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(42)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols =
// 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) {
      args.push(arguments[i++]);
    }$replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(16)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = __webpack_require__(5);

var _typeof3 = _interopRequireDefault(_typeof2);

var _preventExtensions = __webpack_require__(119);

var _preventExtensions2 = _interopRequireDefault(_preventExtensions);

var _isExtensible = __webpack_require__(122);

var _isExtensible2 = _interopRequireDefault(_isExtensible);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var META = __webpack_require__(32)('meta');
var isObject = __webpack_require__(8);
var has = __webpack_require__(14);
var setDesc = __webpack_require__(13).f;
var id = 0;
var isExtensible = _isExtensible2.default || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible((0, _preventExtensions2.default)({}));
});
var setMeta = function setMeta(it) {
  setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {} // weak collections IDs
    } });
};
var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : (0, _typeof3.default)(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
    // return object ID
  }return it[META].i;
};
var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
    // return hash weak collections IDs
  }return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertySymbols = __webpack_require__(126);

var _getOwnPropertySymbols2 = _interopRequireDefault(_getOwnPropertySymbols);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.f = _getOwnPropertySymbols2.default;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyNames = __webpack_require__(74);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

var _typeof2 = __webpack_require__(5);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(15);
var gOPN = __webpack_require__(75).f;
var toString = {}.toString;

var windowNames = (typeof window === 'undefined' ? 'undefined' : (0, _typeof3.default)(window)) == 'object' && window && _getOwnPropertyNames2.default ? (0, _getOwnPropertyNames2.default)(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(129), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _getOwnPropertyNames = __webpack_require__(74);

var _getOwnPropertyNames2 = _interopRequireDefault(_getOwnPropertyNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(67);
var hiddenKeys = __webpack_require__(49).concat('length', 'prototype');

exports.f = _getOwnPropertyNames2.default || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(148), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LoaderTicker = undefined;

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _LoaderUtils = __webpack_require__(35);

var Utils = _interopRequireWildcard(_LoaderUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LoaderTicker = exports.LoaderTicker = function LoaderTicker(superclass) {
	return function (_superclass) {
		(0, _inherits3.default)(_class, _superclass);

		function _class() {
			var _ref;

			(0, _classCallCheck3.default)(this, _class);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return (0, _possibleConstructorReturn3.default)(this, (_ref = _class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call.apply(_ref, [this].concat(args)));
		}

		(0, _createClass3.default)(_class, [{
			key: '_setTicker',
			value: function _setTicker(args) {
				var L = this;
				var node = document.createElement('div');
				node.innerHTML = args.content;
				node.style.cssText = args.css || '';

				document.body.appendChild(node);

				var width = args.width != undefined ? args.width : node.offsetWidth;

				node.style.fontFamily = args.font || '';

				var _timeOut = setTimeout(function () {
					clearInterval(_interval);
					L._handleFail();
				}, 5000);

				var _interval = setInterval(function () {
					if (node.offsetWidth != width) {
						clearTimeout(_timeOut);
						clearInterval(_interval);

						L._handleTickerComplete(node);
					}
				}, 10);
			}
		}, {
			key: '_removeTickerNode',
			value: function _removeTickerNode(node) {
				node.parentNode.removeChild(node);
			}
		}]);
		return _class;
	}(superclass);
};

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FrameRateBase = exports.FrameRate = exports.UIEvent = exports.GestureBase = exports.GestureEvent = exports.Gesture = undefined;

var _Gesture = __webpack_require__(171);

var _Gesture2 = _interopRequireDefault(_Gesture);

var _GestureEvent = __webpack_require__(80);

var _GestureEvent2 = _interopRequireDefault(_GestureEvent);

var _GestureBase = __webpack_require__(79);

var _GestureBase2 = _interopRequireDefault(_GestureBase);

var _UIEvent = __webpack_require__(172);

var _UIEvent2 = _interopRequireDefault(_UIEvent);

var _FrameRate = __webpack_require__(173);

var _FrameRate2 = _interopRequireDefault(_FrameRate);

var _FrameRateBase = __webpack_require__(81);

var _FrameRateBase2 = _interopRequireDefault(_FrameRateBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Gesture = _Gesture2.default;
exports.GestureEvent = _GestureEvent2.default;
exports.GestureBase = _GestureBase2.default;
exports.UIEvent = _UIEvent2.default;
exports.FrameRate = _FrameRate2.default;
exports.FrameRateBase = _FrameRateBase2.default;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adExternal = __webpack_require__(33);

var _adView = __webpack_require__(20);

var _GestureEvent = __webpack_require__(80);

var _GestureEvent2 = _interopRequireDefault(_GestureEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GestureBase(elem) {
	var G = this;
	G.elem = elem;
	G.hasActiveChildren = true;
	G.debug = false;
	G.eventList = [];

	G._isDragEnabled = false;
	// isDragging also used for swipe event check
	G._isDragging = false;
	G._give = 2;

	// offset coordinate for element
	G._oX = 0;
	G._oY = 0;

	// previous coordinates for drag/swipe
	G._p1X = 0;
	G._p1Y = 0;
	G._p2X = 0;
	G._p2Y = 0;

	// start coordinate
	G._sX = 0;
	G._sY = 0;

	// velocity
	G._vX = 0;
	G._vY = 0;

	G._cursor = 'mouse';
	G._start = 'down';
	G._end = 'up';

	G.init();
} /**
  	@class GestureBase
  
  	@desc
  		-- INTERNAL MODULE --
  		This module is used exclusively by Gesture.  When a dom element has an event listener registered, it creates an instance of this module 
  		to hold all the event handlers for the dom element.  Every dom element gets a new GestureBase instance. {@link Gesture}
  	
  */


GestureBase.prototype = {

	init: function init() {
		var G = this;
		if (G.debug) trace('GestureBase.init()');

		G._handleTouchStart = G._handleTouchStart.bind(G);
		G._handleDown = G._handleDown.bind(G);
		G._handleDrag = G._handleDrag.bind(G);
		G._handleUp = G._handleUp.bind(G);

		G._elemAdd = G.elem.addEventListener.bind(G.elem);
		G._elemRemove = G.elem.removeEventListener.bind(G.elem);

		G._reset();
	},

	// replace addEventListener so can flag the event type
	register: function register(name, handler) {
		var G = this;
		if (G.debug) trace('GestureBase.register(', name, ')');

		G.eventList.push(name);
		G._checkDragEnabled();

		// then actually add the listener
		G._elemAdd(name, handler);
	},

	unregister: function unregister(name, handler) {
		var G = this;
		if (G.debug) trace('GestureBase.unregister(', name, ')');

		var index = G.eventList.indexOf(name);
		if (index >= 0) {
			G.eventList.splice(index, 1);
		}
		G._checkDragEnabled();

		G._elemRemove(name, handler);
	},

	/* ------------------------------------------------------------------------------------------------------------- */
	// UTILITY
	_reset: function _reset() {
		var G = this;
		G._cursor = 'mouse';
		G._start = 'down';
		G._end = 'up';
		G.elem.addEventListener('touchstart', G._handleTouchStart);

		// listen for both touch and mouse, except on iOS devices
		if (_adExternal.Device.os != 'ios') G.elem.addEventListener('mousedown', G._handleDown);
	},

	_checkDragEnabled: function _checkDragEnabled() {
		var G = this;
		var hasDragEventIndex = G.eventList.join('').indexOf('onDrag');

		// check if it is a drag, therefore enabling dragability
		G._isDragEnabled = hasDragEventIndex > -1;
	},

	// Android stores things like pageX in an array. This scopes the internally used event properly
	_getEventScope: function _getEventScope(event) {
		//if( this.debug ) trace( 'GestureBase._getEventScope(), event:', event );
		// check for existence of changedTouches instead
		//return ( Device.os == 'android' && event instanceof TouchEvent ) ? event.changedTouches[0] : event ;
		return event.changedTouches ? event.changedTouches[0] : event;
	},

	/* ------------------------------------------------------------------------------------------------------------- */
	// WINDOW EVENT ENABLE
	_add: function _add(type, handler) {
		window.addEventListener(this._cursor + type, handler);
	},

	_remove: function _remove(type, handler) {
		window.removeEventListener(this._cursor + type, handler);
	},

	/* ------------------------------------------------------------------------------------------------------------- */
	// HANLDERS
	_handleDown: function _handleDown(event) {
		var G = this;
		if (G.debug) trace('GestureBase._handleDown()');

		_GestureEvent2.default.startPoint();

		G.elem.removeEventListener('touchstart', G._handleTouchStart);
		if (_adExternal.Device.os != 'ios') G.elem.removeEventListener('mousedown', G._handleDown);

		G._isDragging = false;

		G._add(G._end, G._handleUp);
		G._add('move', G._handleDrag);

		var touch = G._getEventScope(event);
		var mouseX = touch.pageX;
		var mouseY = touch.pageY;

		var elemRect = G.elem.getBoundingClientRect();
		var localOffsetX = mouseX - elemRect.left;
		var localOffsetY = mouseY - elemRect.top;

		var localX = G.elem.x || _adView.Styles.getCss(G.elem, 'x');
		var localY = G.elem.y || _adView.Styles.getCss(G.elem, 'y');
		var globalOffsetX = elemRect.left - localX;
		var globalOffsetY = elemRect.top - localY;

		G._oX = globalOffsetX + localOffsetX;
		G._oY = globalOffsetY + localOffsetY;

		var elemPositionX = mouseX - G._oX;
		var elemPositionY = mouseY - G._oY;

		// reset the dragging vars
		G._sX = G._p1X = G._p2X = mouseX;
		G._sY = G._p1Y = G._p2Y = mouseY;

		/*trace ( 
  	'\n\t_handleDown()',
  	'| mouse:', mouseX, mouseY, 
  	'| localOffset:', localOffsetX, localOffsetY,
  	'| local:', localX, localY,
  	'| globalOffset:', globalOffsetX, globalOffsetY,
  	'| totalOffset:', G._oX, G._oY,
  	'| elemPosition:', elemPositionX, elemPositionY,
  	'\n\n'
  )*/

		localCreateEvent('onPress');

		function localCreateEvent(name) {
			if (_GestureEvent2.default.stopped(name)) return;
			var newEvent = new _GestureEvent2.default.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY);
			if (G.debug) trace(' -> dispatch', name);
			G.elem.dispatchEvent(newEvent);
		}
	},

	_handleUp: function _handleUp(event, bypass) {
		var G = this;
		if (G.debug) trace('GestureBase._handleUp()');

		G._remove(G._end, G._handleUp);
		G._remove('move', G._handleDrag);

		var touch = G._getEventScope(event);
		var mouseX = touch.pageX;
		var mouseY = touch.pageY;

		var elemRect = G.elem.getBoundingClientRect();
		var localOffsetX = mouseX - elemRect.left;
		var localOffsetY = mouseY - elemRect.top;

		var elemPositionX = mouseX - G._oX;
		var elemPositionY = mouseY - G._oY;

		var eventName;

		if (bypass !== true) {
			localCreateEvent('onRelease');
		}

		var offsetTop = elemRect.top + window.pageYOffset;
		var offsetBottom = offsetTop + elemRect.height;
		var offsetLeft = elemRect.left + window.pageXOffset;
		var offsetRight = offsetLeft + elemRect.width;

		if (G._isDragging) {
			if (G._isDragEnabled) {
				G._dragEndOrSwipe('onDragStop');
			}
			trace('  -> No CLICK Fired, was dragging');
		} else {
			if (mouseX > offsetLeft && mouseX < offsetRight && mouseY > offsetTop && mouseY < offsetBottom) {
				localCreateEvent('onSelect');
			}
		}

		function localCreateEvent(name) {
			if (_GestureEvent2.default.stopped(name)) return;
			var newEvent = new _GestureEvent2.default.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY, 0, 0, G._vX, G._vY);
			if (G.debug) trace(' -> dispatch', name);
			G.elem.dispatchEvent(newEvent);
		}

		if (G._isDragging) {
			G._dragEndOrSwipe('onSwipe');
		}

		G._reset();

		// this prevents the second mouse down on Android
		event.preventDefault();

		_GestureEvent2.default.endPoint();
	},

	/* ------------------------------------------------------------------------------------------------------------- */
	// TOUCH BYPASSING
	// This will stop from both touch and mouse events firing, thus doubling every Gesture Event fired.
	_handleTouchStart: function _handleTouchStart(event) {
		var G = this;
		if (G.debug) trace('GestureBase._handleTouchStart()');

		// Change the native events to listen for the rest of the system
		G._cursor = 'touch';
		G._start = 'start';
		G._end = 'end';

		G._handleDown(event);
	},

	/* ------------------------------------------------------------------------------------------------------------- */
	// DRAG
	_handleDrag: function _handleDrag(event) {
		var G = this;
		if (G.debug) trace('GestureBase._handleDrag()');

		var touch = G._getEventScope(event);
		var mouseX = touch.pageX;
		var mouseY = touch.pageY;

		var diffx1 = mouseX - G._p1X;
		var diffx2 = mouseX - G._p2X;
		G._vX = (diffx2 - diffx1) / 2 + diffx1;

		var diffy1 = mouseY - G._p1Y;
		var diffy2 = mouseY - G._p2Y;
		G._vY = (diffy2 - diffy1) / 2 + diffy1;

		var elemPositionX = mouseX - G._oX;
		var elemPositionY = mouseY - G._oY;

		var elemRect = G.elem.getBoundingClientRect();
		var localOffsetX = mouseX - elemRect.left;
		var localOffsetY = mouseY - elemRect.top;

		/*trace ( 
  	'\t_handleDrag()',
  	'| mouse:', mouseX, mouseY, 
  	'| totalOffset:', G._oX, G._oY,
  	'| elemPosition:', elemPositionX, elemPositionY,
  	'| velocity:', G._vX, G._vY,
  	'| distance:', G._p1X - G._sX, G._p1Y - G._sY
  )*/

		var eventName;

		if (G._isDragging) {
			if (G._isDragEnabled) {
				localCreateEvent('onDrag');
			}
		} else {
			// check the inital movement to register as dragging or just a click
			if (Math.abs(G._sX - mouseX) > G._give || Math.abs(G._sY - mouseY) > G._give) {
				G._isDragging = true;

				if (G._isDragEnabled) {
					// dispatch when offset distance is exceeded
					localCreateEvent('onDragStart');
				}
			}
		}

		function localCreateEvent(name) {
			if (_GestureEvent2.default.stopped(name)) return;
			var newEvent = new _GestureEvent2.default.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY, G._p1X - G._sX, G._p1Y - G._sY, G._vX, G._vY);
			if (G.debug) trace(' -> dispatch', name);
			G.elem.dispatchEvent(newEvent);
		}

		G._p2X = G._p1X;
		G._p1X = mouseX;

		G._p2Y = G._p1Y;
		G._p1Y = mouseY;
	},

	/* ------------------------------------------------------------------------------------------------------------- */
	// DRAG END | SWIPE
	_dragEndOrSwipe: function _dragEndOrSwipe(type) {
		var G = this;
		if (G.debug) trace('GestureBase._dragEndOrSwipe()', type);

		if (_GestureEvent2.default.stopped(name)) return;

		var elemRect = G.elem.getBoundingClientRect();
		var evt = new _GestureEvent2.default.Event(type, G._p1X, G._p1Y, G._p1X - elemRect.left, G._p1Y - elemRect.top, G._p1X - G._oX, G._p1Y - G._oY,
		// since _xp is assigned after moving, must use _p2X 
		G._p2X - G._sX, G._p2Y - G._sY, G._vX, G._vY);
		if (G.debug) trace(' -> dispatch', type);
		G.elem.dispatchEvent(evt);
	}

};

exports.default = GestureBase;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class GestureEvent
	@desc
		This module has custom events to be used with the Gesture module. {@link Gesture}
*/
var GestureEvent = new function () {

	var _kills = {};
	var _eventLooping = false;

	function createEvent(name, mouseGlobalX, mouseGlobalY, mouseLocalX, mouseLocalY, elementX, elementY, distanceX, distanceY, velocityX, velocityY) {
		var E = new CustomEvent(name);
		E.mouse = {
			global: {
				x: mouseGlobalX,
				y: mouseGlobalY
			},
			local: {
				x: mouseLocalX,
				y: mouseLocalY
			}
		};
		E.element = {
			x: elementX || 0,
			y: elementY || 0
		};
		E.distance = {
			x: distanceX || 0,
			y: distanceY || 0
		};
		E.velocity = {
			x: velocityX || 0,
			y: velocityY || 0
		};
		E.direction = {
			x: velocityX > 0 ? 'right' : velocityX < 0 ? 'left' : null,
			y: velocityY > 0 ? 'down' : velocityY < 0 ? 'up' : null
		};

		return E;
	}

	function stopBubble(event) {
		if (event) {
			// For IE, it bubbles custom events
			event.stopImmediatePropagation();
			// for all other browsers that do not do that
			_kills[event.type] = true;
			//trace ( '\n\tGestureEvent.stop() of type:', event.type )
		}
	}

	function isStopped(type) {
		return _kills[type] != undefined;
	}

	// A flag for the start of the event loop through all bases
	function startPoint() {
		if (!_eventLooping) {
			// the end of event loop has been reached, so reset things
			_eventLooping = true;
			_kills = {};
		}
	}
	// A flag to reset any bubble killing
	function endPoint() {
		_eventLooping = false;
	}

	return {

		/**	
  	@memberOf GestureEvent	
  	@const {string} OVER
  	@desc
  		Represents a 'mouseover', fired on desktop cursor roll over
  	@example
  		GestureEvent.OVER
  */
		OVER: 'mouseover',

		/**	
  	@memberOf GestureEvent	
  	@const {string} OUT
  	@desc
  		Represents a 'mouseout', fired on desktop cursor roll out
  	@example
  		GestureEvent.OUT
  */
		OUT: 'mouseout',

		/**	
  	@memberOf GestureEvent	
  	@const {string} MOVE
  	@desc
  		Represents a 'mousemove', fired on desktop cursor move
  	@example
  		GestureEvent.MOVE
  */
		MOVE: 'mousemove',

		/**	
  	@memberOf GestureEvent	
  	@const {string} PRESS
  	@desc
  		Represents an 'onPress', fired on mousedown / touch start
  	@example
  		GestureEvent.PRESS
  */
		PRESS: 'onPress',

		/**	
  	@memberOf GestureEvent	
  	@const {string} RELEASE
  	@desc
  		Represents an 'onRelease', fired on mouseup / touch end
  	@example
  		GestureEvent.RELEASE
  */
		RELEASE: 'onRelease',

		/**	
  	@memberOf GestureEvent	
  	@const {string} CLICK
  	@desc
  		Represents a 'click', fired on click / touch end
  	@example
  		GestureEvent.CLICK
  */
		CLICK: 'onSelect',

		/**	
  	@memberOf GestureEvent	
  	@const {string} DRAG
  	@desc
  		Represents an 'onDrag', fired after an element is selected and before released. <br>
  		Element data objects included: selection position, element position, velocity of move	
  	@example
  		GestureEvent.DRAG
  */
		DRAG: 'onDrag',

		/**	
  	@memberOf GestureEvent	
  	@const {string} DRAG_START
  	@desc
  		Represents an 'onDragStart', fired after an element is selected, when first moved and before released. <br>
  		Element data objects included: selection position, element position
  	@example
  		Gesture.addEventListener ( myDiv, GestureEvent.DRAG_START, handleDragStart );
  		//
  		function handleDragStart ( event ){
  			// coordinate position of mouse/touch
  			trace ( event.position );
  				// coordinate position of target element
  			trace ( event.element );
  		}
  */
		DRAG_START: 'onDragStart',

		/**	
  	@memberOf GestureEvent	
  	@const {string} DRAG_STOP
  	@desc
  		Represents an 'onDragStop', fired after an element is selected, moved, then released. <br>
  		Element data objects included: selection position, velocity of last move
  	@example
  		Gesture.addEventListener ( myDiv, GestureEvent.DRAG_STOP, handleDragStop );
  		//
  		function handleDragStop ( event ){
  			// coordinate position of mouse/touch
  			trace ( event.position );
  				// velocity, ie change in distance, of target element
  			trace ( event.velocity );
  		}
  */
		DRAG_STOP: 'onDragStop',

		/**	
  	@memberOf GestureEvent	
  	@const {string} SWIPE
  	@desc
  		Represents an 'onSwipe', fired just after a DRAG_STOP, but different event properties available. <br>
  		Element data objects included: direction, distance, velocity
  	@example
  		Gesture.addEventListener ( myDiv, GestureEvent.SWIPE, handleSwipe );
  		//
  		function handleSwipe ( event ){
  			// direction of swipe, as strings 
  			trace ( event.direction );
  				// distance covered from down to release
  			trace ( event.distance );
  				// velocity, aka speed of swipe
  			trace ( event.velocity );
  		}
  */
		SWIPE: 'onSwipe',

		/**
  	@memberOf GestureEvent
  	@method stop
  	@param {event} event
  		The event parameter from the event handler
  	@desc
  		Stops all future events of the type during the event loop, is a native equivilent to event.stopImmediatePropogation().
  		It does NOT remove any listeners, simply stops the event from bubbling up through the chain.
  		
  	@example
  		Gesture.add ( parentDiv, GestureEvent.CLICK, handleParentClick );
  		function handleParentClick( event ) {
  			// This will not be heard
  			trace ( 'parent click heard' )
  		}
  		
  		Gesture.add ( childDiv, GestureEvent.CLICK, handleChildClick );
  		function handleChildClick( event ) {
  			GestureEvent.stop ( event )
  			trace ( 'child click heard' )
  		}					
  */
		stop: stopBubble,

		/**
  	@memberOf GestureEvent
  	@class GestureEvent.Event
  	@param {string} name
  		The event type name
  	@param {number} mouseGlobalX
  		The mouse x on the page
  	@param {number} mouseGlobalY
  		The mouse y on the page
  	@param {number} mouseLocalX
  		The mouse x relative to the element position
  	@param {number} mouseLocalY
  		The mouse y relative to the element position
  	@param {number} elementX
  		The element x position
  	@param {number} elementY
  		The element y position
  	@param {number} distanceX
  		The distance moved on the x, only used for drags and swipes
  	@param {number} distanceY
  		The distance moved on the y, only used for drags and swipes
  	@param {number} velocityX
  		The distance moved on the x since previous event fired, essentially the speed
  	@param {number} velocityY
  		The distance moved on the y since previous event fired, essentially the speed
  	@desc
  		Creates a new CustomEvent with properties assigned to it, accessible fomr the passed through event to the handler
  		
  	@example
  		Gesture.add ( myDiv, GestureEvent.CLICK, handleClick );
  		function handleClick( event ) {
  			trace ( event )
  			trace ( 'global mouse:', event.mouse.global.x, event.mouse.global.y )
  			trace ( 'local mouse:', event.mouse.local.x, event.mouse.local.y )
  			trace ( 'element:', event.element.x, event.element.y )
  		}	
  		Gesture.add ( dragDiv, GestureEvent.DRAG, handleDrag );
  		function handleDrag( event ) {
  			trace ( event )
  			trace ( 'element:', event.element.x, event.element.y )
  			trace ( 'distance:', event.distance.x, event.distance.y )
  			trace ( 'velocity:', event.velocity.x, event.velocity.y )
  		}					
  */
		Event: createEvent,

		stopped: isStopped,
		startPoint: startPoint,
		endPoint: endPoint
	};
}();

exports.default = GestureEvent;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------
	Description:
		-- INTERNAL MODULE --
		This module is used exclusively by FrameRate.  When a method is registered, it instantiaties an instance of this module to hold all methods at a 
		specified frames per second.  Every fps gets a new FrameRateBase instance.
	
	---------------------------------------------------------------------------------------------------------------------------------------------------------- */
function FrameRateBase(fps) {
	var F = this;
	F.pool = [];
	F.fps = fps;

	F._frameTime = Math.floor(1000 / F.fps);
	F._prevTime = 0;
	F._startTime = 0;
	F._nextTime = 0;
	F._maxLag = 400;
	F._shiftLag = 30;
	F._paused = false;
	F._prevCallTime = Date.now();

	F.diffTime = 0;
}

FrameRateBase.prototype = {
	resume: function resume() {
		var F = this;
		if (F._isPaused) {
			F._startTime = Date.now();
			F._prevCallTime = F._startTime;
			F._prevTime = F._startTime;
			F._nextTime = 0;
			F._isPaused = false;
		}
	},

	tick: function tick() {
		var F = this;
		if (!F._paused) {
			var call = false;
			var now = Date.now();
			var diffTime = now - F._prevTime;

			if (diffTime > F._maxLag) {
				trace("...lag");
				F._startTime += diffTime - F._shiftLag;
			}
			F._prevTime = now; //+= F.diffTime;

			var elapsedTime = F._prevTime - F._startTime;
			var future = elapsedTime - F._nextTime;

			if (future > 0) {
				F._nextTime += future >= F._frameTime ? future : F._frameTime;
				call = true;

				// calculates the difference only from last call, not last tick
				F.diffTime = now - F._prevCallTime;
				F._prevCallTime = now;
			}

			// handle the callbacks
			if (call) F.dispatch();
		}
	},

	dispatch: function dispatch() {
		var F = this;
		for (var i = 0; i < F.pool.length; i++) {
			var obj = F.pool[i];
			obj.handler.call(obj.from, this);
		}
	}
};

exports.default = FrameRateBase;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperties = __webpack_require__(17);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _DateManager = __webpack_require__(56);

var _DateManager2 = _interopRequireDefault(_DateManager);

var _DateFormatter = __webpack_require__(26);

var _DateFormatter2 = _interopRequireDefault(_DateFormatter);

var _TzDate = __webpack_require__(25);

var _TzDate2 = _interopRequireDefault(_TzDate);

var _Timezone = __webpack_require__(39);

var _Timezone2 = _interopRequireDefault(_Timezone);

var _adUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateSchedule = function DateSchedule(arg) {
	arg = arg || {};

	var D = this;

	var _dates = [];
	var _labelOverrides = {};
	var _targetDate;
	var _skipToday = false;

	// used by a recurring schedule to pass the callback to the standard schedule it creates 
	var _callback = arg.callback || function () {};

	var _tonightStartsAt = arg.tonightStartsAt || '17:30';
	var _hasOneDayOf = arg.hasOneDayOf != false;
	var _eventDuration = arg.eventDuration || 120;

	// ---------------------------------------------------------------------------------------------------------------
	// GETTERS
	(0, _defineProperties2.default)(D, {

		/**
  	@memberOf DateSchedule
  	@var {TzDate} target
  		Getter : The target date of a standard schedule
  	@example
  		mySchedule.target.print();
  */
		target: {
			get: function get() {
				return _targetDate;
			}
		},

		/**
  	@memberOf DateSchedule
  	@var {object} current
  		Getter : An object of the current date, label and optional callback
  	@example
  		mySchedule.current.date;
  		mySchedule.current.label;
  		mySchedule.current.callback();
  */
		current: {
			get: function get() {
				return _dates[D.currentIndex];
			}
		},

		/**
  	@memberOf DateSchedule
  	@var {TzDate} currentDate
  		Getter : Is direct access to the current date, same as mySchedule.current.date
  	@example
  		mySchedule.currentDate;
  */
		currentDate: {
			get: function get() {
				return D.current.date;
			}
		},

		/**
  	@memberOf DateSchedule
  	@var {String} currentLabel
  		Getter : Is direct access to the current label, same as mySchedule.current.label
  	@example
  		mySchedule.currentLabel;
  */
		currentLabel: {
			get: function get() {
				return D.current.label;
			}
		},

		/**
  	@memberOf DateSchedule
  	@var {Number} currentIndex
  		Getter : The index, zero based, of the current date
  	@example
  		mySchedule.currentIndex;
  */
		currentIndex: {
			get: function get() {
				var currentIndex = -1;
				for (var i = 0; i < _dates.length; i++) {
					if (!_DateManager2.default.isPast(_dates[i].date)) {
						break;
					}
					currentIndex = i;
				}
				return currentIndex;
			}
		},
		next: {
			get: function get() {
				return _dates[D.nextIndex];
			}
		},
		nextDate: {
			get: function get() {
				return D.next.date;
			}
		},
		nextLabel: {
			get: function get() {
				return D.next.label;
			}
		},
		nextIndex: {
			get: function get() {
				return _adUtils.MathUtils.restrict(D.currentIndex + 1, 0, _dates.length - 1);
			}
		},

		/**
  	@memberOf DateSchedule
  	@var {Boolean} isLive
  		Getter : When using a standard schedule, whether or not the target date has been passed, but not passed the eventDuration
  	@example
  		mySchedule.isLive;
  */
		isLive: {
			get: function get() {
				var latest = D.current;
				return latest.standardKey == 'NOW';
			}
		},

		/**
  	@memberOf DateSchedule
  	@var {Boolean} isComplete
  		Getter : When using a standard schedule, whether or not the target date and eventDuration has been passed
  	@example
  		mySchedule.isComplete;
  */
		isComplete: {
			get: function get() {
				var latest = D.current;
				return latest.standardKey == 'PAST';
			}
		}
	});

	// ---------------------------------------------------------------------------------------------------------------
	// PUBLIC METHODS
	/**
 	@memberof DateSchedule
 	@method addDate
 	@param {TzDate|Date|Object} tzDate
 		Expected to be either a Date object, a TzDate or an Object for creating a date from the target using DateFormatter.adjust() 
 	@param {String|function} label
 		Optionally specify a label as a  String or creeate a function to format the date using the TxDate methods
 	@param {function} callback
 		Optionally a function that can be called when this date is the current. Does NOT auto fire, must me called.
 	@desc
 		Add a date to the schedule, which can be either a TzDate or an object to create a date from the target
 	
 	@example
 		// start with a target date
 			var schedule = new DateSchedule({
 				target : new TzDate ({
 					datetime : [ '2017-08-01 08:00:00', Timezone.EST ],
 					outputTimezone : Timezone.LOCAL 
 				})
 			});
 				// add TzDate
 			schedule.addDate ( 
 				new TzDate ({
 					datetime : '2017-04-01T14:00:00+00:00',
 					outputTimezone : Timezone.EST
 				})
 			);
 				// creates a date 1 day before and 4 hours ahead of the target date
 			schedule.addDate ({ day:-1, hour:4 }); 
 				// uses a callback to get a custom date message
 			schedule.addDate ( 
 				new TzDate ({
 					datetime : '2017-06-01T22:00:00+00:00',
 					outputTimezone : Timezone.LOCAL
 				}),
 				function ( date ){
 					return date.toSimpleTime() + ' ' + date.toMeridiem() + '!!';
 				}
 			);
 				// add a message and a callback
 			schedule.addDate ( 
 				new TzDate ({
 					datetime : '2017-05-01T17:00:00+00:00',
 					outputTimezone : Timezone.PST
 				}),
 				'Custom Message',
 				function(){
 					trace ( 'i am the callback')
 				}
 			);
 				schedule.print();
 			// DateSchedule.print(), length: 7
 			//  - 0 Sat Jan 01 2000 00:00:00 UTC label: 1/1 12:00 am
 			//  - 1 Sat Apr 01 2017 10:00:00 US/Eastern label: undefined
 			//  - 2 Mon May 01 2017 10:00:00 US/Pacific label: Custom Message
 			//  - 3 Thu Jun 01 2017 15:00:00 Local label: 3:00 pm!!
 			//  - 4 Mon Jul 31 2017 09:00:00 Local label: undefined
 			//  - 5 Tue Aug 01 2017 05:00:00 Local label: Live Now
 			//  - 6 Tue Aug 01 2017 07:00:00 Local label: Past				
 		
 */
	D.addDate = function (tzDate, label, callback) {
		var standardKey = arguments[3];

		var dateUTC = tzDate;
		var skipDate = false;
		var makeClone = true;

		if (!tzDate._isTzDate) {
			// is an Object of adjusting values
			// take targetDate and add or subtract from there to create the date			
			var clonedDate = _targetDate;

			switch (standardKey) {
				case 'PAST':
					makeClone = false;
					break;
				case 'TONIGHT':
					// construct a date with the tonightStartsAt value
					var reconstructedDate = _targetDate.toDateTimeISO().split('T')[0] + 'T';

					var timeSplit = _tonightStartsAt.split(':');
					for (var i = 0; i < 3; i++) {
						reconstructedDate += TextUtils.pad(timeSplit[i] || 0, 2) + ':';
					}
					reconstructedDate = reconstructedDate.slice(0, -1);

					clonedDate = new _TzDate2.default({
						datetime: [reconstructedDate, _targetDate.outputTimezone]
					});

					// check if the time is before the tonight starts at, if so, skip this label		
					skipDate = clonedDate.getTime() > _targetDate.getTime();

					// skip today if you do NOT skip tonight
					_skipToday = !skipDate;

					// override date with a zeroed out one if you skip today and want only one day of message
					makeClone = _hasOneDayOf && _skipToday;
					break;

				case 'TODAY':
					// check if tonight exists & if hasOneDayOf
					skipDate = _hasOneDayOf && _skipToday;
					break;
			}

			if (makeClone) {
				// copies the target date to display in the local time
				clonedDate = _targetDate.clone(_Timezone2.default.LOCAL);
				// zeros out the dates based on timezone difference
				clonedDate.setHours.apply(clonedDate, _Timezone2.default._tzDiff);
			}

			dateUTC = _DateFormatter2.default.adjust(clonedDate, tzDate);
			//trace ( '\t >', dateUTC, clonedDate, tzDate )
		}

		if (standardKey) {
			var override = _labelOverrides[standardKey];
			if (override != undefined) {
				label = override;
			} else {
				if (typeof label === 'string') {
					label = _DateFormatter2.default.getLabels()[standardKey];
				}
			}
		}

		if (typeof label === 'function') {
			var dateToPass = standardKey && _targetDate ? _targetDate : dateUTC;
			label = label.call(D, dateToPass);
			//label = label.call ( D, dateUTC );
		}

		if (!skipDate) {
			_dates.push({
				date: dateUTC,
				label: label,
				standardKey: standardKey,
				callback: callback || function () {}
			});
			sortDates();
		}

		return dateUTC;
	};

	/**
 	@memberOf DateSchedule
 	@method print
 	@desc
 		Traces out all dates in order 
 	@example
 		// standard schedule
 			var schedule = new DateSchedule({
 			    target : new TzDate ({
 			        datetime : [ '2017-08-01 20:00:00', Timezone.EST ],
 			        outputTimezone : Timezone.LOCAL 
 			    }), 
 			    isStandard : true
 			});
 				schedule.print()
 			// DateSchedule.print(), length: 7
 			//  - 0 Sat Jan 01 2000 00:00:00 UTC label: 8/1 5:00 pm
 			//  - 1 Tue Jul 25 2017 17:00:00 Local label: Tuesday
 			//  - 2 Mon Jul 31 2017 00:00:00 Local label: Tomorrow
 			//  - 3 Tue Aug 01 2017 00:00:00 Local label: Today
 			//  - 4 Tue Aug 01 2017 10:30:00 Local label: Tonight
 			//  - 5 Tue Aug 01 2017 17:00:00 Local label: Live Now
 			//  - 6 Tue Aug 01 2017 19:00:00 Local label: Past
 		
 */
	D.print = function () {
		trace('DateSchedule.print(), length:', _dates.length);
		for (var i = 0; i < _dates.length; i++) {
			trace(' -', i, _dates[i].date.toFullDateTime(), 'label:', _dates[i].label);
		}
	};

	/**
 	@memberOf DateSchedule
 	@method getDates
 	@desc
 		Returns an Array copy of the dates, leaving the original untouched.
 	@returns {Array}		
 	@example
 		schedule.getDates();
 */
	D.getDates = function () {
		var dates = [];
		for (var i = 0; i < _dates.length; i++) {
			dates.push(_dates[i].date);
		}
		return dates;
	};

	/**
 	@memberOf DateSchedule
 	@method getCountdown
 	@desc
 		Returns an Object of the time remaining until the target date, with the day, hour, minute, second as numbers and output as a string '##:##:##:##'
 	@returns {Object}
 	@example		
 		// add a target date to countdown to
 			var schedule = new DateSchedule({
 				target : new TzDate ({
 					datetime : [ '2017-06-06 11:37:00', Timezone.PST ],
 				})
 			});
 				// use FrameRate to set a ticker of once a second.
 			FrameRate.register ( this, handleCountdown, 1 );
 			function handleCountdown(){
 				trace ( schedule.getCountdown() )
 				// once the event is live, stop listening for the tick
 				if ( schedule.isLive ) {
 					FrameRate.unregister ( this, handleCountdown, 1 );
 				}
 			}
 */
	D.getCountdown = function () {
		var obj = _DateManager2.default.getTimeDifference(_DateManager2.default.getNow(), D.target);
		for (var key in obj) {
			if (key != 'output') {
				obj[key] = Math.floor(obj[key]);
			}
		}
		return obj;
	};

	// ---------------------------------------------------------------------------------------------------------------
	// PRIVATE METHODS
	function sortDates() {
		function sortOnDateTime(a, b) {
			if (a.date.getTime() < b.date.getTime()) return -1;
			if (a.date.getTime() > b.date.getTime()) return 1;
			return 0;
		}
		_dates.sort(sortOnDateTime);
	}

	// ---------------------------------------------------------------------------------------------------------------
	// INIT
	var sl = arg.standardOverrides;
	if (sl) {
		for (var key in sl) {
			_labelOverrides[key] = sl[key];
		}
	}

	if (arg.target) {
		_targetDate = D.addDate(arg.target, '', _callback, 'NOW');

		D.addDate({ minute: _eventDuration }, '', _callback, 'PAST');
	}

	// upcoming, starting point
	D.addDate(new _TzDate2.default({
		datetime: '2000-01-01T00:00:00+00:00',
		outputTimezone: _Timezone2.default.UTC
	}), function (date) {
		return date.toSimpleDateTime();
	}, _callback, 'DATE');

	if (_targetDate && arg.isStandard == true) {
		D.addDate({}, '', _callback, 'TONIGHT');

		D.addDate({}, '', _callback, 'TODAY');

		D.addDate({ hour: -24 }, '', _callback, 'TOMORROW');

		D.addDate({ hour: -24 * 6 }, function (date) {
			//var dayNum = date.getDay();
			var dayNum = date.getIn(_targetDate.outputTimezone).getDay();
			return _DateFormatter2.default.getLabels().WEEKDAYS_FULL[dayNum];
		}, _callback, 'WEEK');
	}
}; /**
   	@class DateSchedule
   	@desc
   		This class creates a schedule of dates that will be compared agains the currentdate/time. There are 2 ways to use 
   		this class: standard and custom.
   		
   		<br><br>
   
   		<b>AdData.js:</b><br>
   		It is recommended that you centralize your schedule in AdData. This way, changes to the schedule can easily 
   		be achieved with one common update.<br>
   
   		<br><br>
   		
   		<b>Standard</b><br>
   		This will create a schedule of dates leading up to the target date, which was formerly achieved by using		
   		the selectMessageForDate() method.  This standard way will produce a schedule pre-populated with:
   		
   		<ul>
   			<li>DATE - returns the target date, using the toSimpleDateTime() for anything further than a week out from the target</li>
   			<li>WEEK - returns the day of the week the target date is, ie Wednesday</li>
   			<li>TOMORROW - returns the word "Tomorrow", beginning at midnight the day before the target date</li>
   			<li>TODAY - returns the string "Today", beginning at midnight on the target date</li>
   			<li>TONIGHT - returns the string "Tonight", beginning at the time set with tonightStartsAt</li>
   			<li>NOW - returns the string "Live Now"</li>
   			<li>PAST - returns the string "Past", called after NOW plus the eventDuration value</li>
   		</ul>
   
   	@param {object} arg
   		Settings are passed in via this object, see Properties for more info:
   
   	@property {TzDate} target
   		The date that the schedule will count down to
   	@property {boolean} isStandard
   		If true, will create a standard schedule with default messaging
   	@property {number} eventDuration
   		In a standard schedule, the amount of minutes after the target time the PAST messaging shows. Defaults to 120 which is 2 hours
   	@property {string} tonightStartsAt
   		In a standard schedule, when the today message changes to tonight. If the target time is before this value, tonight will never show. Defaults to '17:50' which is 5:30PM
   	@property {boolean} hasOneDayOf
   		In a standard schedule, will determine if only 'tonight' OR 'today' will show, or if it is possible to have both. For example, in ESPN units, the need is that 
   		only one of the options will show at midnight day of the event. So if the event is before the tonightStartsAt value, it will only show 'today', while if it is after
   		it will only show 'tonight'.  If this is set to false, it will allow for both following the logic of tonightStartsAt.  Defaults to true.
   	@property {object} standardOverrides
   		An object to overwrite any of the standard labels. Using the standard keys, apply a new label string or callback function passing in the target date
   	
   	
   		<codeblock>
   			// Standard Schedule
   			this.schedule = new DateSchedule({
   				target : new TzDate ({
   					datetime : [ '2015-08-01 20:00:00', Timezone.EST ],
   					outputTimezone : Timezone.LOCAL 
   				}),
   				isStandard : true
   			});
   			this.schedule.print();
   
   			this.dateMessage = this.schedule.currentLabel;
   			this.dateHour = this.schedule.target.toDateTime();
   		</codeblock>
   
   		Each standard label can be overridded by either assigning a different string or by passing in a callback function 
   		that will return a differently formatted message. Note each callback gets fired at runtime, creating each label.
   				
   		<codeblock>
   			this.schedule = new DateSchedule({
   				target : new TzDate ({
   					datetime : [ '2015-08-01 20:00:00', Timezone.EST ],
   					outputTimezone : Timezone.LOCAL 
   				}),
   				eventDuration : 120,
   				isStandard : true,
   				standardOverrides : {
   					DATE : function( date ){
   						return date.toSimpleDate();
   					},
   					TOMORROW : 'Tommorow Night!',
   					NOW : 'Watch Live Now'
   				}
   			});
   			this.schedule.print();
   
   			this.dateMessage = this.schedule.currentLabel;
   			this.dateHour = this.schedule.target.toDateTime();
   		</codeblock>
   
   		<br><br>
   
   		<b>Custom</b><br>
   		This is used to set a specific list of dates to check now against, returning the latest.
   
   		<codeblock>
   			this.schedule = new DateSchedule();
   			this.schedule.addDate( 
   				new TzDate ({
   					datetime : [ '2015-08-01 12:00:00', Timezone.EST ],
   					outputTimezone : Timezone.LOCAL 
   				}),
   				"Hey I'm the first date"
   			);
   			this.schedule.addDate( 
   				new TzDate ({
   					datetime : [ '2015-08-05 14:00:00', Timezone.UTC ],
   					outputTimezone : Timezone.PST 
   				}),
   				"I'm the last date"
   			);
   			this.schedule.print();
   		</codeblock>
   
   		The schedule can also be used to call different markup builds.  Use the third param of addDates() to pass in 
   		a callback, then simply call it from Control.preMarkup() or where ever makes sense.
   
   		<codeblock>
   			this.schedule = new DateSchedule();
   			this.schedule.addDate( 
   				new TzDate ({
   					datetime : [ '2015-08-01 12:00:00', Timezone.EST ],
   					outputTimezone : Timezone.LOCAL 
   				}),
   				"Hey I'm the first date",
   				View.buildFromDate0
   			);
   			this.schedule.addDate( 
   				new TzDate ({
   					datetime : [ '2015-08-05 14:00:00', Timezone.UTC ],
   					outputTimezone : Timezone.PST 
   				}),
   				"I'm the last date",
   				View.buildFromDate1
   			);
   			this.schedule.print();
   		</codeblock>
   
   		<b>build.js:</b><br>
   		In <u>build.View</u>, you can write functions that build out the DOM for each of your states. 
   		<codeblock>
   			this.buildFromDate0 = function() {
   				trace( 'View.buildFromDate0()' );
   				// Markup...
   			}
   			this.buildFromDate1 = function() {
   				trace( 'View.buildFromDate1()' );
   				// Markup...
   			}
   		</codeblock>
   
   		In <u>build.Control</u> or <u>build.buildMarkup</u>, you simply call the callback of the current date on the schedule.  This will
   		find the current added date object and fire that callback
   		<codeblock>
   			var message = adData.schedule.current.callback();
   			trace ( message );
   
   			var myTextField = new UITextField({
   				target : T,
   				id : 'my-textfield',
   				css : {
   					width : 300,
   					height : 90
   				},
   				fontSize : 30,
   				fontFamily : 'template_font',
   				format : TextFormat.INLINE,
   				alignText : Align.CENTER,
   				text : message.label
   			});
   		</codeblock>
   */
exports.default = DateSchedule;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adExternal = __webpack_require__(33);

var _adGeom = __webpack_require__(179);

/**
	@class CssManager
	@desc
		This is a css-interface class, which is intended to proxy all css applications. The goal is to accept css in any format( see below ), 
		standardize the keys, conform the values, and rapidly apply the style to the target, specific to the {@link Device} running the ad.<br><br> 

		Generally, you should not need to use this class directly. {@link Styles.setCss} will handle it for you.<br><br>

		However, if your css is not being correctly managed, the first step in debugging is to use {@link CssManager.setDebugFilter}. Pass the id, 
		as a string, of the misbehaving element to see the exact format of the css being applied to it. You can then locate the problem style, try 
		applying it in the browser inspector. Using this approach you should be able to determine what the correction/exception needs to be.<br><br>

		Additional debugging output can be switched on using {@link CssManager.setDebugLevel}. Pass a level( 0 is off, 1 is less, 2 is more ). There will be 
		a lot of output, but it is organized and consistent. You should be able to see exactly what is happening to your declarations. <br><br>

		<b>Types:</b><br>
		<table>
			<tr><td>CssObject</td>	<td>the literal "css" object that is passed to {@link Markup} as containerData.css on the creation of the element</td></tr>
			<tr><td>CssStyleString</td>	<td>a literal string of any number of css styles, passed to {@link Markup} as containerData.styles on the creation of the element</td></tr>
			<tr><td>CssDeclaration</td>	<td>either an object like "{ position: 'absolute' }" or a string like "background-color: #ff0000;"</td></tr>

			<tr><td>CssKey</td>	<td>ex: in "position: absolute;" the css-key would be "position"</td></tr>
			<tr><td>CssValue</td>	<td>ex: in "position: absolute;" the css-value would be "absolute"</td></tr>
			<tr><td>CssList</td>	<td>a standardized list of objects with Device-specific keys and corresponding values</td></tr>
		</table>
		<br>

		<b>Formats:</b><br>
		<table>
			<tr><td>Hyphen</td>	<td>ex: 'border-left', '-webkit-clip-path', '-moz-filter'</td></tr>
			<tr><td>Camel</td>	<td>ex: 'borderLeft', 'webkitClipPath', 'moxFilter'</td></tr>
			<tr><td>Alt</td>	<td>this is to handle arbitrary exceptions, like the "bgImage" key on container-data css objects</td></tr>
		</table>
		<br>

		<b>Key Prefixes:</b><br>
		<table>
			<tr><td>Browser</td>	<td>ex: "-webkit-clip-path" or "webkitClipPath"</td></tr>
			<tr><td>Standard</td>	<td>ex: "clip-path" or "clipPath"</td></tr>
		</table>
*/
var CssManager = new function () {

	var C = this;

	/**
 	@memberOf CssManager
 	@method init
 	@desc
 		Called one time per life-cycle. Creates the browser key-dictionary. 
 */
	C.init = function () {
		trace('CssManager.init()');
		C.generateBrowserKeyDictionary();
	};

	/* -- DEBUGGING -------------------------------------------------
  *
  *
  */
	C.debug_level1 = false;
	C.debug_level2 = false;
	C.filter;
	C.debug_element;
	C.debug_css_list;

	/**
 	@memberOf CssManager
 	@method setDebugLevel
 	@param {number} _level
 		controls debug verbosity for all css processing, default is 0, max is 2
 	@desc
 		Use this to control the degree of logging that happens in this class. Debugging is off by default, or pass 0 or null to disable. 
 */
	C.setDebugLevel = function (_level) {
		switch (parseInt(_level)) {
			case 1:
				C.debug_level1 = true;
				C.debug_level2 = false;
				break;
			case 2:
				C.debug_level1 = true;
				C.debug_level2 = true;
				break;
			default:
				C.debug_level1 = false;
				C.debug_level2 = false;
				break;
		}
	};

	/**
 	@memberOf CssManager
 	@method setDebugFilter
 	@param {string} _filter
 		the filter string: An element.id, a css-key, or a css-value. For example, if you want to only see css being applied 
 		to particular element, pass its id to this function. Conversely, if you only want to see css with a particular 
 		key or value, pass that string.
 	@desc
 		Use this control to filter which <CssMananger>.apply() calls get output to the console. 
 */
	C.setDebugFilter = function (_filter) {
		trace('CssManager.setDebugFilter(),', _filter);
		C.filter = _filter;
		C.debug_level1 = true;
	};
	C.ifDebug = function (_debugLevel) {
		if (!C.filter) return C[_debugLevel];else if (C.passDebugFilter() && C[_debugLevel]) return true;
	};
	C.passDebugFilter = function () {
		if (C.debug_element) if (C.debug_element.id.indexOf(C.filter) > -1) return true;
		if (C.debug_css_list) for (var i in C.debug_css_list) {
			if (i.indexOf(C.filter) > -1) return true;else if (String(C.debug_css_list[i]).indexOf(C.filter) > -1) return true;
		}
		return false;
	};

	/* -- KEY DICTIONARY -------------------------------------------------
  *
  *		This is called once and prepares a dictionary with standard, 
  *		browser-agnostic keys which map to device-specific keys.
  */
	C.deviceKeyDict;

	C.generateBrowserKeyDictionary = function () {
		trace('CssManager.generateBrowserKeyDictionary()');
		C.deviceKeyDict = {};

		var styles = document.createElement('div').style;

		for (var key in styles) {
			// get prefix
			var prefix = C.getPrefix(key);

			// key without prefix
			var standardKey = C.standardizeKey(key);

			//trace( 'Device.element.style:', key );
			//trace( ' - standard key:', standardKey );

			// handle exceptions per browser
			switch (_adExternal.Device.browser) {
				case 'safari':
					// use "webkit" prefix, if that's what was returned 
					if (prefix == 'webkit') {
						C.deviceKeyDict[standardKey] = C.prependPrefix('webkit', standardKey);
					}
					// standard
					else {
							// exclude keys that have a "webkit"-equivalent
							if (!(C.prependPrefix('webkit', standardKey) in styles)) {
								C.deviceKeyDict[standardKey] = standardKey;
							}
						}
					break;

				case 'firefox':
					var mozKey = C.prependPrefix('Moz', standardKey);
					var webkitKey = C.prependPrefix('Webkit', standardKey);

					// use the no-prefix version, if it exists
					if (standardKey in styles) {
						C.deviceKeyDict[standardKey] = standardKey;
					} else if (prefix == 'moz') {
						// use "Moz" if a "webkit"-equivalent exists
						if (C.camelateKey('webkit-' + standardKey) in styles) {
							C.deviceKeyDict[standardKey] = mozKey;
						}
					}
					// note: in FF, there seem to be equivalents for all "webkit" vs. "Webkit" properites, so we use "Webkit" to match "Moz" convention....yah, nevermind.
					else if (prefix == 'webkit') {
							// use "webkit" if no "Moz"-equivalent exists
							if (!(mozKey in styles)) {
								C.deviceKeyDict[standardKey] = webkitKey;
							}
						}
					break;

				case 'chrome':
				case 'ie':
				default:
					// use the no-prefix version, if it exists
					if (standardKey in styles) {
						C.deviceKeyDict[standardKey] = standardKey;
					}
					// otherwise it's a "prefix"-only type of property
					else if (prefix) {
							C.deviceKeyDict[standardKey] = C.prependPrefix(prefix, standardKey);
						}
					break;

			}
		}
		trace(' KEY DICTIONARY:', C.deviceKeyDict);
	};

	/* -- APPLYING CSS -----------------------------------------------
  *
  *
  */
	C.apply = function (_element, _cssList) {
		C.debug_element = _element;
		C.debug_css_list = _cssList;
		if (C.ifDebug('debug_level1')) trace('  CssManager.apply()', _element.id);

		// creates a collection of only the transforms		
		var _transformList = {};

		for (var key in _cssList) {
			// has a non-destructive transform update, as generated by keyFormatExceptions()
			if (key.match(/^transform\(/)) _transformList[key] = _cssList[key];
			// standard css-key
			else {
					if (C.ifDebug('debug_level1')) trace('   ' + key + ': ' + _cssList[key] + ';');
					_element.style[C.getDeviceKey(key)] = _cssList[key];
				}
		}

		// will apply all transforms at once for correct calculation
		C.applyTransforms(_element, _transformList);

		if (C.ifDebug('debug_level1')) trace('\n\n');
		C.debug_element = null;
		C.debug_css_list = null;
	};

	/* -- CONFORMING CSS SYNTAX -----------------------------------------------
  *
  *		These are protected methods, meant to be called by Styles...although
  *		they could certainly be utilized by other core modules.
  */
	C.conformCssObject = function (_cssObject, _debugElement) {
		C.debug_element = _debugElement;
		if (C.ifDebug('debug_level1')) trace('CssManager.conformCssObject()', _cssObject);
		var cssList = {};
		if (_cssObject) {
			for (var key in _cssObject) {
				if (C.ifDebug('debug_level2')) trace('  PARSE( key: ' + key + ', value: ' + _cssObject[key] + ' )');
				var declarations = C.conformKeyValue(key, _cssObject[key]);
				for (var i in declarations) {
					if (C.ifDebug('debug_level2')) trace('    CONFORMED DECLARATION:', declarations[i]);
					cssList[declarations[i][0]] = declarations[i][1];
				}
			}
		}
		C.debug_element = null;
		return cssList;
	};
	C.conformCssString = function (_cssString, _debugElement) {
		C.debug_element = _debugElement;
		if (C.ifDebug('debug_level1')) trace(' CssManager.conformCssString()');
		var cssList = {};
		if (_cssString) {
			var declarations = _cssString.split(/\s*;\s*/);
			for (var key in declarations) {
				if (declarations[key]) {
					var declarationParts = declarations[key].split(/:(.+)?/);
					if (C.ifDebug('debug_level2')) trace('  PARSE( key: ' + declarationParts[0] + ', value: ' + declarationParts[1] + ' )');
					var conformedDeclarations = C.conformKeyValue(declarationParts[0], declarationParts[1]);
					for (var i in conformedDeclarations) {
						if (C.ifDebug('debug_level2')) trace('    CONFORMED DECLARATION:', conformedDeclarations[i]);
						cssList[conformedDeclarations[i][0]] = conformedDeclarations[i][1];
					}
				}
			}
		}
		C.debug_element = null;
		return cssList;
	};
	C.conformCssKeyValue = function (_key, _value) {
		if (C.ifDebug('debug_level1')) trace(' CssManager.conformCssKeyValue()');
		var cssObject = {};
		cssObject[_key] = _value;
		return C.conformCssObject(cssObject);
	};

	/* -- CSS TRANSFORMATIONS -----------------------------------------------
  *
  *
  *
  */
	C.applyTransforms = function (_element, _value) {
		if (C.ifDebug('debug_level1')) trace('    - CssManager.applyTransforms(), ', _value);
		var matrix2D = new _adGeom.Matrix2D();

		// existing transform
		var existingTransform = _element.style[C.getDeviceKey('transform')];
		var matrixMatch = existingTransform.match(/matrix[^\)]+\)/);
		if (matrixMatch) {
			matrix2D.setFromCss(matrixMatch[0]);
			if (C.ifDebug('debug_level2')) trace('       existing matrix:', matrix2D.data);
		}

		if ('transforms' in _element) var transforms = _element.transforms;else {
			var transforms = {
				'tx': 0,
				'ty': 0,
				'rz': 0,
				'sx': 1,
				'sy': 1
			};
		}

		var changed = {};
		for (var key in _value) {
			var transformMethod = key.match(/\(\s([^\s]+)/)[1];
			changed[transformMethod] = _value[key];
		}

		// Order matters: rotate, scale, translate 

		// first translate the x and y back to zero
		if (changed.tx != undefined) {
			matrix2D.data[2] = 0;
		}
		if (changed.ty != undefined) {
			matrix2D.data[5] = 0;
		}
		if (changed.rz != undefined) {
			var reverse = -transforms.rz;
			matrix2D.rotate(reverse * (Math.PI / 180));
			matrix2D.rotate(changed.rz * (Math.PI / 180));
			transforms.rz = changed.rz;
		}
		if (changed.sx != undefined) {
			var reverse = 1 / transforms.sx;
			matrix2D.scale(reverse, 1);
			matrix2D.scale(changed.sx, 1);
			transforms.sx = changed.sx;
		}
		if (changed.sy != undefined) {
			var reverse = 1 / transforms.sy;
			matrix2D.scale(1, reverse);
			matrix2D.scale(1, changed.sy);
			transforms.sy = changed.sy;
		}

		if (changed.tx != undefined) {
			matrix2D.translate(changed.tx, 0);
			transforms.tx = changed.tx;
		}
		if (changed.ty != undefined) {
			matrix2D.translate(0, changed.ty);
			transforms.ty = changed.ty;
		}

		// store transforms
		_element.transforms = transforms;
		if (C.ifDebug('debug_level2')) trace('       updated matrix:', matrix2D.data);

		// apply css matrix
		_element.style[C.getDeviceKey('transform')] = matrix2D.getCss();
	};

	/* -- KEY MAPPING -----------------------------------------------
  *
  *
  */
	C.conformKeyValue = function (_key, _value) {
		_key = String(_key).trim();
		_value = String(_value).trim();
		var keyAsStandard = C.standardizeKey(_key);
		return C.conformValue(keyAsStandard, _value);
	};
	C.hasPrefix = function (_key) {
		return _key.search(matchPrefixRegex()) > -1;
	};
	C.getPrefix = function (_key) {
		var match = _key.match(matchPrefixRegex());
		return match ? match[1].replace(/-/g, '').toLowerCase() : null;
	};
	C.stripPrefix = function (_key) {
		var keyless = _key.replace(matchPrefixRegex(), '');
		return keyless.charAt(0).toLowerCase() + keyless.slice(1);
	};
	C.getDeviceKey = function (_key) {
		return _key in C.deviceKeyDict ? C.deviceKeyDict[_key] : _key;
	};
	C.prependPrefix = function (prefix, key) {
		return prefix + key.replace(/^(.)/, function (str) {
			return str.charAt(0).toUpperCase();
		});
	};

	// converts any syntax of css-key to a consistent camelCase format
	C.standardizeKey = function (_key) {
		_key = C.stripPrefix(_key);

		// check if key is an exception
		if (_key in C.keyFormatExceptions()) _key = C.keyFormatExceptions()[_key];

		// or procedurally convert to camel
		else _key = C.camelateKey(_key);

		if (C.ifDebug('debug_level2')) trace('    - result: "' + _key + '"');
		return _key;
	};
	C.camelateKey = function (_key) {
		_key = _key.replace(/-(.)/g, function (str) {
			return str.charAt(1).toUpperCase();
		});
		return _key;
	};
	/* This dictionary handles INTERNAL differences between how css-keys are written in the build on the css-objects and how they must be written 
 	as valid CSS. Primarily, these exceptions are the arguments of the transform function, translate(), rotate(), and scale(), which need to be further 
 	handled during value conformation. The exceptions could also include any semantic differences that might ease production confusion.
 		** Do not confuse this with browser-key differences!! ex: transform vs. -ms-transform. Browser-keys are handled by <CssManager>.generateBrowserKeyDictionary() */
	C.keyFormatExceptions = function () {
		return {
			'x': 'transform( tx )',
			'translateX': 'transform( tx )',
			'y': 'transform( ty )',
			'translateY': 'transform( ty )',

			'rotate': 'transform( rz )',
			'rotation': 'transform( rz )',

			'scaleX': 'transform( sx )',
			'scaleY': 'transform( sy )',
			'scale': 'transform( sx ),transform( sy )'
		};
	};

	/* -- VALUE PARSING -----------------------------------------------
  *
  *
  */
	/* takes a single css param, arg or func, and conforms it to _adlib standard */
	C.conformValue = function (_key, _value) {
		var conformedValues = [];
		var conformedValue;

		// look for numeric values 
		var hasMultipleValues = _value.match(/\s/);
		var numericValue = _value.match(matchNumberRegex());
		if (!hasMultipleValues && numericValue) {
			if (C.ifDebug('debug_level2')) trace('   conform value as number');
			conformedValue = Number(numericValue[0]);
			/* get existing unit */
			var unitMatch = _value.match(/[^0-9\.]+$/);
			if (unitMatch) conformedValue += unitMatch[0];
			/* assume default unit */
			else switch (_key) {
					case 'top':case 'right':case 'bottom':case 'left':
					case 'width':case 'height':
					case 'fontSize':
					case 'lineHeight':
					case 'padding':
					case 'margin':
					case 'marginRight':case 'marginLeft':case 'marginTop':case 'marginBottom':
					case 'borderRadius':
					case 'borderWidth':
					case 'letterSpacing':
						conformedValue += 'px';
						break;
				}
		}

		// background images - allows for either a stand-alone URL, or proper css like 'url( "http://example.com/image.jpg" );' 
		else if (_key == 'backgroundImage') {
				if (C.ifDebug('debug_level2')) trace('   conform value as background image');
				_value = _value.replace(/^url\(\s*['"]*/, '').replace(/['"]*\s*\)$/, '');
				conformedValue = 'url( "' + _value + '" )';
			}

			// transform-functions - should be split apart so a single matrix function can be written
			//	faster to just specify the transform exactly via css-object keys: x, y, rotate, scaleX, scaleY
			else if (_key == 'transform') {
					// && Device.browser == 'ie' ) {
					if (C.ifDebug('debug_level2')) trace('   convert "transform" functions to individual transforms');
					var functionRegex = /([a-z0-9]+)\(([^\)]+)\)/ig;
					while (params = functionRegex.exec(_value)) {
						var args = params[2].replace(/\s/g, '').split(',').map(function (value, index, array) {
							return Number(value.match(matchNumberRegex())[0]);
						});
						switch (params[1]) {
							case 'translate':
								conformedValues.push(['transform( tx )', args[0]]);
								conformedValues.push(['transform( ty )', args[1]]);
								break;
							case 'translateX':
								conformedValues.push(['transform( tx )', args[0]]);
								break;
							case 'translateY':
								conformedValues.push(['transform( ty )', args[0]]);
								break;

							case 'rotate':
								conformedValues.push(['transform( rz )', args[0]]);
								break;

							case 'scale':
								conformedValues.push(['transform( sx )', args[0]]);
								conformedValues.push(['transform( sy )', args[1]]);
								break;
							case 'scaleX':
								conformedValues.push(['transform( sx )', args[0]]);
								break;
							case 'scaleY':
								conformedValues.push(['transform( sy )', args[0]]);
								break;
						}
					}
				}

				// pass through
				else {
						if (C.ifDebug('debug_level2')) trace('   conform value as string');
						conformedValue = _value;
					}

		// create style pair
		if (conformedValue != undefined) {
			if (C.ifDebug('debug_level2')) trace('    - result: "' + conformedValue + '"');

			// split the key will alyways have 1 value, except for scale which has to split to scaleX and scaleY
			var splitKeys = _key.split(/\,/);

			for (var i = 0; i < splitKeys.length; i++) {
				conformedValues.push([splitKeys[i], conformedValue]);
			}
		}

		return conformedValues;
	};

	function matchNumberRegex() {
		return (/^[+-]?[0-9]*\.?[0-9]+/
		);
	}
	function matchPrefixRegex() {
		return (/^-*(moz-*|webkit-*|ms-*|o-)/i
		);
	}
}();

CssManager.init();

exports.default = CssManager;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class Matrix2D
*/

// Version : Mar 17, 2015 2:15 PM
/*
 * TODO - write Documentation
 *		- convert to  a, c, b, d, tx, ty ?
 *		- inverse?
 */
var Matrix2D = function Matrix2D() {
	var M = this;
	// initial set identity base matrix array to data
	M.identity = new Float32Array([1, 0, 0, 0, 1, 0]);
	M.data = new Float32Array(M.identity);
};

Matrix2D.prototype = {
	clear: function clear() {
		var M = this;
		//trace ( M.data instanceof Float32Array )
		//M.data.set ( M.identity );
		M.data = new Float32Array(M.identity);
	},

	rotate: function rotate(radians) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);

		var c = Math.cos(radians).toFixed(15);
		var s = Math.sin(radians).toFixed(15);

		_m[0] = c;
		_m[1] = s;
		_m[3] = -s;
		_m[4] = c;
		//  cos(rad),  sin(rad), 0,
		//  -sin(rad), cos(rad), 0,
		//  0,         0,        1 

		M.multiply(_m, false);
		return M;
	},

	scale: function scale(x, y) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);

		_m[0] = x;
		_m[4] = y;
		//  x, 0, 0,
		//  0, y, 0,
		//  0, 0, 1 

		M.multiply(_m, false);
		return M;
	},

	skew: function skew(ax, ay) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);

		_m[1] = Math.tan(ax);
		_m[3] = Math.tan(ay);
		//  1,       tan(ax), 0,
		//  tan(ay), 1,       0,
		//  0,       0,       1

		M.multiply(_m);
		return M;
	},

	translate: function translate(x, y) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);

		_m[2] = x || 0;
		_m[5] = y || 0;
		//  1, 0, x,
		//  0, 1, y,
		//  0, 0, 1 

		M.multiply(_m, true);
		return M;
	},

	multiply: function multiply(m, invert) {
		var M = this;
		// copy the current matrix data into '_c'
		var _copy = new Float32Array(M.data);

		// translate multiply needs to be inverted, where others do not
		var a = invert ? m : _copy;
		var b = invert ? _copy : m;

		for (var i = 0; i < 6; i++) {
			var k = Math.floor(i / 3) * 3;
			var q = i % 3;
			//trace ( i, '-', a[_a], b[_b], a[_a+1], b[_b+3], a[_a+2], b[_b+6] )
			M.data[i] = a[k] * b[q] + a[k + 1] * b[q + 3];
		}
		M.data[2] += a[2];
		M.data[5] += a[5];

		// a[0] * b[0] + a[1] * b[3] + a[2] * 0
		// a[0] * b[1] + a[1] * b[4] + a[2] * 0
		// a[0] * b[2] + a[1] * b[5] + a[2] * 1
		// a[3] * b[0] + a[4] * b[3] + a[2] * 0
		// a[3] * b[1] + a[4] * b[4] + a[2] * 0
		// a[3] * b[2] + a[4] * b[5] + a[5] * 1
		// 0
		// 0
		// 1
	},

	setFromCss: function setFromCss(matrixString) {
		var cssMatrix = matrixString.match(/\(([^\)]+)\)/)[1].replace(/\s/g, '').split(',').map(Number);
		this.data = [cssMatrix[0], cssMatrix[1], cssMatrix[4], cssMatrix[2], cssMatrix[3], cssMatrix[5]];
	},

	getCss: function getCss() {
		// a, c, tx
		// b, d, ty
		// 0, 0, 1
		// matrix(a, c, b, d, tx, ty)
		var M = this;
		return 'matrix(' + M.data[0] + ',' + M.data[1] + ',' + M.data[3] + ',' + M.data[4] + ',' + M.data[2] + ',' + M.data[5] + ')';
	}

	//http://www.wikihow.com/Inverse-a-3X3-Matrix
	/*function getMatrixInverse (m){	
 	var t = [
 		m[0], m[3], m[6], 
 		m[1], m[4], m[7],
 		m[2], m[5], m[8]
 	];
 
 	// 0,  1,  2,
 	// 3,  4,  5,
 	// 6,  7,  8
 
 	// a,  b,  0 
 	// c,  d,  0
 	// tx, ty, 1
 	trace ( m );
 	trace ( t );
 	
 	[
 		m[4],	-m[1],	m[1] * m[5] - m[4] * m[2],
 		-m[3],	m[0],	(m[0] * m[5] - m[3] * m[2]) * -1,
 		0,		0,		m[0] * m[4] - m[3] * m[1]
 	]
 
 	var d11 = m[4]
 	var d12 = - m[1]
 	var d13 = m[1] * m[5] - m[4] * m[2]
 	var d21 = - m[3]
 	var d22 = m[0]
 	var d23 = (m[0] * m[5] - m[3] * m[2]) * -1
 	var d31 = 0 
 	var d32 = 0
 	var d33 = m[0] * m[4] - m[3] * m[1]
 
 	var d11 = t[4]
 	var d12 = - t[3]
 	var d13 = t[3] * t[7] - t[4] * t[6]
 	var d21 = - t[1]
 	var d22 = t[0]
 	var d23 = (t[0] * t[7] - t[1] * t[6]) * -1
 	var d31 = 0 
 	var d32 = 0
 	var d33 = t[0] * t[4] - t[1] * t[3]
 
 	var d11 = t[4] * t[8] - t[5] * t[7]
 	var d12 = (t[3] * t[8] - t[5] * t[6]) * -1
 	var d13 = t[3] * t[7] - t[4] * t[6]
 	var d21 = (t[1] * t[8] - t[2] * t[7]) * -1
 	var d22 = t[0] * t[8] - t[2] * t[6]
 	var d23 = (t[0] * t[7] - t[1] * t[6]) * -1
 	var d31 = t[1] * t[5] - t[2] * t[4]
 	var d32 = (t[0] * t[5] - t[2] * t[3]) * -1
 	var d33 = t[0] * t[4] - t[1] * t[3]
 
 
 
 	return [ d11, d12, d13, d21, d22, d23, d31, d32, d33 ];
 }*/

};exports.default = Matrix2D;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adUtils = __webpack_require__(1);

var Vector2D = function Vector2D(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}; /** 
   	@class Vector2D
   	@param {number} x
   	@param {number} y
   	@desc
   		A simple 2D Vector classs 
   	@example
   		var myVector1 = new Vector2D( 0, 320 );
   		var myVector2 = new Vector2D( -3, 5.5 );
   */


Vector2D.prototype = {
	/** 
 	@memberOf Vector2D
 	@method add
 	@param {Vector2D} v
 	@returns {Vector2D}
 	@desc
 		Adds another vector to itself
 	@example
         	myVector1.add( myVector2 );
 */
	add: function add(v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	},

	/** 
 	@memberOf Vector2D
 	@method sub
 	@param {Vector2D} v
 	@returns {Vector2D}
 	@desc
 		Subtracts another vector from itself
 		@example
         	myVector1.sub( myVector2 );
    */
	sub: function sub(v) {
		this.x -= v.x;
		this.y -= v.y;
		return this;
	},

	/** 
 	@memberOf Vector2D
 	@method dist
 	@param {Vector2D} v
 	@returns {number} The distance between two vectors as locations
 	@example
         	var distance = myVector.dist( myVector2 );
    */
	dist: function dist(v) {
		var x = this.x - v.x;
		var y = this.y - v.y;
		return Math.sqrt(x * x + y * y);
	},

	/** 
 	@memberOf Vector2D
 	@method mult
 	@param {number} s 
 	@desc
 		Multiplies X and Y of the vector by s
 	@example
         	myVector.mult( 10.3 );
    */
	mult: function mult(s) {
		this.x *= s;
		this.y *= s;
		return this;
	},

	/** 
 	@memberOf Vector2D
 	@method div
 	@param {number} s
 	@returns {Vector2D}
 	@desc
 		Divides X and Y of the vector by s
 	@example
         	myVector.div( 2 );
    */
	div: function div(s) {
		this.x /= s;
		this.y /= s;
		return this;
	},

	/** 
 	@memberOf Vector2D
 	@method limit
 	@param {number} s
 	@returns {Vector2D}
 	@desc
 		Limits the length of the vector if it's longer than s
 	@example
         	myVector.limit( 18.2 );
    */
	limit: function limit(s) {
		var m = this.length();
		if (m > s) {
			this.mult(s / m);
		}
		return this;
	},

	/** 
 	@memberOf Vector2D
 	@method length
 	@returns {number} The length of the vector.
 	@example
         	var length = myVector.length();
    */
	length: function length() {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},

	/** 
 	@memberOf Vector2D
 	@method normalize
 	@returns {Vector2D}
 	@desc
 		Normalizes the vector( ie scale the vector to length of 1 )
 	@example
         	myVector.normalize();
    */
	normalize: function normalize() {
		var ratio = 1 / this.length();
		return this.mult(ratio);
	},

	/** 
 	@memberOf Vector2D
 	@method clone
 	@returns {Vector2D}
 	@desc
 		Creates a new Vector2D with and same x and y
 	@example
         	var newVecotor = myVector.clone();
    */
	clone: function clone() {
		return new Vector2D(this.x, this.y);
	}

};

/** 
	@memberOf Vector2D
	@method degreeToVector
	@returns {Vector2D}
	@desc
		Converts a degree 0 - 360 to a normalized vector
	@example
	    	var myVecotor = Vector2D.degreeToVector( 45 );
*/
Vector2D.degreeToVector = function (d) {
	var theta = _adUtils.MathUtils.toRadians(d);
	return new Vector2D(Math.cos(theta), Math.sin(theta));
};

/** 
	@memberOf Vector2D
	@method random
	@param {number} degreeIncrement
		Optional, the degree increment of the random vector, defaults to 0.01
	@returns {Vector2D}
	@desc
		Returns a random normalized vector 
	@example
		var myVecotor1 = Vector2D.random();
		var myVecotor2 = Vector2D.random( 1 );
*/
Vector2D.random = function (degreeIncrement) {
	var inc = degreeIncrement || 0.01;
	return Vector2D.degreeToVector(_adUtils.MathUtils.random(0, 360, inc));
};

exports.default = Vector2D;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/** 
	@class Async
	@desc
		This is a utility to allow easy sequencing of multiple async functions. Increment tokens 
		by calling <code>wait()</code>, decrement by calling <code>done()</code>. Every time <code>done()</code> is called,
		it checks if there are any remaining tokens...if not, the callback is fired.
*/
var Async = function Async() {

	var A = this;
	A.tokens = [];
	A.callback;

	/**
 	@memberOf Async
 	@method wait
 	@desc
 		Adds a token to the Async queue. 
 */
	A.wait = function () {
		A.tokens.push(1);
	};

	/**
 	@memberOf Async
 	@method done
 	@desc
 		Removes a token from the Async queue. 
 */
	A.done = function () {
		A.tokens.pop();
		if (A.tokens.length == 0) A.callback.call();
	};

	/**
 	@memberOf Async
 	@method onComplete
 	@param {function} callback
 	@desc
 		Specifies a callback function, starts a setInterval if one is not currently running, and checks
 		to run the callback. 
 */
	A.onComplete = function (callback) {
		A.callback = callback;
	};
};

// @gc
exports.default = Async;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adEvents = __webpack_require__(78);

var Expandable = new function () {
	var E = this;

	var _afterInitExpanded = true;
	var _arg;

	/* ---------------------------------------------------------------------------------------------------- */
	// PUBLIC PROPERTIES

	/**
 	@memberOf Expandable
 	@var {boolean} userHasInteracted
 		Indicates if the ad has been interacted by the user
 	@example
 		trace ( Expandable.userHasInteracted )
 */
	E.userHasInteracted = false;

	/* ---------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS
	/**
 	@memberOf Expandable
 	@method init
 	@desc
 		This method initializes the class, linking all callbacks and the target being set. This should 
 		be called Control.postMarkup
 	@example
 		Expandable.init ({
 			target : View.expanded,
 			expandStart : Control.handleExpandStart,
 			expandComplete : Control.handleExpandComplete,
 			collapseStart : Control.handleCollapseStart,
 			collapseComplete : Control.handleCollapseFinish
 		});
 			// optionally you can add time alues for expanding/collapsing
 		Expandable.init ({
 			target : View.expanded,
 			expandStart : Control.handleExpandStart,
 			expandComplete : Control.handleExpandComplete,
 			collapseStart : Control.handleCollapseStart,
 			collapseComplete : Control.handleCollapseFinish,
 				expandTime : .3,
 			collapseTime : .3
 		});
 */
	E.init = function (arg) {
		_arg = arg || {};
		_arg.expandTime = _arg.expandTime || .5;
		_arg.collapseTime = _arg.collapseTime || .5;

		if (_arg.extend) {
			trace('Expandable extended with', _arg.extend.toString());
		}
		// this is called so that an extended class will initialize as well
		E._init();

		if (adParams.expandable.expanded) {
			_afterInitExpanded = false;
			E.expand();
		} else {
			collapseStart(true);
		}
	};

	/**
 	@memberOf Expandable
 	@method collapse
 	@desc
 		Collapses the View.expand container.
 	@example
 		Expandable.collapse();
 */
	E.collapse = function (gestureEvent) {
		_adEvents.GestureEvent.stop(gestureEvent);
		E._collapse(gestureEvent);
	};

	/**
 	@memberOf Expandable
 	@method expand
 	@desc
 		Expands the View.expand container.
 	@example
 		Expandable.expand();
 */
	E.expand = function (gestureEvent) {
		_adEvents.GestureEvent.stop(gestureEvent);
		E._expand(gestureEvent);
	};

	/* ---------------------------------------------------------------------------------------------------- */
	// PROTECTED METHODS
	E._init = function () {};

	E._collapse = function (gestureEvent) {
		E._handleCollapseStart();
	};

	E._expand = function (gestureEvent) {
		E._handleExpandStart();
	};

	E._collapseComplete = function () {
		E._handleCollapseComplete();
	};

	E._expandComplete = function () {
		E._handleExpandComplete();
	};

	/* ---------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function expandStart() {
		TweenLite.to(_arg.target, _arg.expandTime, {
			x: adParams.expandable.expandedX,
			y: adParams.expandable.expandedY,
			width: adParams.adWidth,
			height: adParams.adHeight,
			onComplete: E._expandComplete
		});
	}

	function collapseStart(isInit) {
		var time = isInit ? 0 : _arg.collapseTime;
		var param = adParams.expandable;
		TweenLite.to(_arg.target, time, {
			x: param.collapsedX,
			y: param.collapsedY,
			width: param.collapsedWidth,
			height: param.collapsedHeight,
			onComplete: isInit ? undefined : E._collapseComplete
		});
	}

	function fireCallback(name) {
		(_arg[name] || function () {}).call();
	}

	/* ---------------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS
	E._handleExpandStart = function (event) {
		fireCallback('expandStart');
		expandStart();
	};

	E._handleExpandComplete = function (event) {
		fireCallback('expandComplete');
		E.userHasInteracted = _afterInitExpanded;
		_afterInitExpanded = true;
	};

	E._handleCollapseStart = function (event) {
		collapseStart();
		fireCallback('collapseStart');
		E.userHasInteracted = true;
	};

	E._handleCollapseComplete = function (event) {
		fireCallback('collapseComplete');
		E.userHasInteracted = true;
	};
}(); /**
     	@class Expandable
     	@description
     		This class controls the expanding and collapsing of expandable units. The animation relys on the properties
     		set in the index. Therefore, the animation has be removed from the build file and handled internally. 
     		This class can be extended with {@link ExpandableDcs} when units are used in DoubleClick.
      */
exports.default = Expandable;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(188), __esModule: true };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Styles = exports.Ratio = exports.ParticlesUtils = exports.ParticleModel = exports.Particle = exports.Graphic = exports.Emitter = exports.Markup = exports.FullScreen = exports.Effects = exports.Countdown = exports.Clamp = exports.Align = undefined;

var _Align = __webpack_require__(90);

var _Align2 = _interopRequireDefault(_Align);

var _Clamp = __webpack_require__(190);

var _Clamp2 = _interopRequireDefault(_Clamp);

var _Countdown = __webpack_require__(191);

var _Countdown2 = _interopRequireDefault(_Countdown);

var _Effects = __webpack_require__(192);

var _Effects2 = _interopRequireDefault(_Effects);

var _FullScreen = __webpack_require__(193);

var _FullScreen2 = _interopRequireDefault(_FullScreen);

var _Emitter = __webpack_require__(194);

var _Emitter2 = _interopRequireDefault(_Emitter);

var _Graphic = __webpack_require__(195);

var _Graphic2 = _interopRequireDefault(_Graphic);

var _Particle = __webpack_require__(196);

var _Particle2 = _interopRequireDefault(_Particle);

var _ParticleModel = __webpack_require__(197);

var _ParticleModel2 = _interopRequireDefault(_ParticleModel);

var _ParticlesUtils = __webpack_require__(198);

var _ParticlesUtils2 = _interopRequireDefault(_ParticlesUtils);

var _Ratio = __webpack_require__(199);

var _Ratio2 = _interopRequireDefault(_Ratio);

var _Styles = __webpack_require__(28);

var Styles = _interopRequireWildcard(_Styles);

var _Markup = __webpack_require__(27);

var Markup = _interopRequireWildcard(_Markup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// named exports

// import CanvasBlendMode from './lib/canvas/CanvasBlendMode'
// import CanvasBlur from './lib/canvas/CanvasBlur'
// import CanvasCircle from './lib/canvas/CanvasCircle'
// import CanvasColoring from './lib/canvas/CanvasColoring'
// import CanvasDrawer from './lib/canvas/CanvasDrawer'
// import CanvasElement from './lib/canvas/CanvasElement'
// import CanvasImage from './lib/canvas/CanvasImage'
// import CanvasLineTo from './lib/canvas/CanvasLineTo'
// import CanvasPath from './lib/canvas/CanvasPath'
// import CanvasRect from './lib/canvas/CanvasRect'
// import CanvasShape from './lib/canvas/CanvasShape'
// import CanvasSprite from './lib/canvas/CanvasSprite'
// import CanvasText from './lib/canvas/CanvasText'
// import CanvasTexture from './lib/canvas/CanvasTexture'
// import CanvasTiling from './lib/canvas/CanvasTiling'
// import CanvasTweener from './lib/canvas/CanvasTweener'
// import CanvasUtils from './lib/canvas/CanvasUtils'
exports.Align = _Align2.default;
exports.Clamp = _Clamp2.default;
exports.Countdown = _Countdown2.default;
exports.Effects = _Effects2.default;
exports.FullScreen = _FullScreen2.default;
exports.Markup = Markup;
exports.Emitter = _Emitter2.default;
exports.Graphic = _Graphic2.default;
exports.Particle = _Particle2.default;
exports.ParticleModel = _ParticleModel2.default;
exports.ParticlesUtils = _ParticlesUtils2.default;
exports.Ratio = _Ratio2.default;
exports.Styles = Styles;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Markup = __webpack_require__(27);

var Markup = _interopRequireWildcard(_Markup);

var _Styles = __webpack_require__(28);

var Styles = _interopRequireWildcard(_Styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	@class Align
	@desc
		Utility for aligning objects, which works for DOM elements and {@link CanvasDrawer} elements.  The x and y alignments are split up
		into separate assignemnts in one call. There are extra parameters that can be passed into the object to handle more complex logic.
		<br><br>

		<b>Notes:</b>
			<br>
			Align, by default, snaps to a full pixel. To change this, see <b>Sample 3</b> ( snap: false )
			<br><br>

		<b>Sample 1</b>
		<codeblock>
			// simple classic usage
			Align.set( myDiv, Align.LEFT ); // only align left
			Align.set( myDiv, Align.BOTTOM ); // only align bottom
			Align.set( myDiv, Align.CENTER ); // align both x and y to the center
		</codeblock>
		<br><br>
		
		<b>Sample 2</b>
		<codeblock>
			// simply align the x and y seperately
			Align.set( myDiv, {
				x: Align.RIGHT,
				y: Align.BOTTOM
			});
		</codeblock>
		<br><br>

		<b>Sample 3</b>
		<br>
		<b>'against'</b> is an object to which we align our given object, like making myDiv perfectly centered against myOtherDiv
		<br>
		<b>'against'</b> could also be a number, as in align myDiv centered against adParams.adWidth / 2
		<br>
		<br>
		<b>'outer'</b> is an optional complex parameter which determines how we align to the 'against' object; default to false
		<br>
		If <b>'against'</b> is a number, then <b>'outer'</b> will have no affect.
		<br>
		<br>
		<img src="../docs_images/align/align_c.jpg" />
		<br><br>
		<codeblock>
			// complex alignment, align in relation to another div with an offset shift of 10 pixels, without snapping to a whole pixel
			Align.set( myDiv, {
				x: {
					type: Align.RIGHT,
					against: myOtherDiv
					offset: 10,
					outer: true
				},
				y: {
					type: Align.BOTTOM,
					offset: 14
				},
				snap: false
			});
		</codeblock>
		<br><br>

		<b>Sample 4</b>
		<codeblock>
			// complex alignment, align in relation to a fixed number with an offset shift of 10 pixels
			Align.set( myDiv, {
				x: {
					type: Align.RIGHT,
					against: 200
					offset: 10,
				},
				y: {
					type: Align.BOTTOM,
					against: 30
					offset: 14
				},
			});
		</codeblock>
		<br><br>
*/
var Align = function () {

	/* 
 	TODO - percentage vs px?
 */

	var _rect = [{
		x: 'offsetWidth',
		y: 'offsetHeight',
		parent: 'parentNode'
	}, {
		x: 'width',
		y: 'height',
		parent: 'stage'
	}];

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS
	function get(source, arg) {
		var elem = source.canvas || Markup.get(source);
		var obj = {};
		var snap = arg.snap !== false;
		var sourceRect = isDomElement(source) ? 0 : 1;

		if (typeof arg == 'string') arg = calculate(arg);

		for (var xy in arg) {
			if (xy == 'x' || xy == 'y') {

				var params = arg[xy];

				// the x or y is null or undefined, so skip this pass of the loop
				if (!params) continue;

				if (typeof params == 'string') params = {
					type: params
				};

				var against;
				var againstDimension;
				var againstX = 0;
				var againstNumber = false;
				var offset = params.offset || 0;

				var _givenAgainst;
				if (params.against !== undefined) {
					_givenAgainst = true;
					against = params.against;
					var againstRect = 0;

					if (isDomElement(against)) {
						if (against.canvas) againstRect = 1;else againstX = Styles.getCss(against, xy);
					} else if (typeof against === 'number') {
						againstNumber = true;
						againstX = against;
					} else {
						againstX = against[xy];
						againstRect = 1;
					}

					againstDimension = _rect[againstRect][xy];

					if (params.type === Align.CENTER) arg[xy].outer = false;
				} else {
					against = elem[_rect[sourceRect].parent];
					againstDimension = _rect[sourceRect][xy];
				}

				var widthOrHeight = elem[_rect[sourceRect][xy]];

				switch (source._type) {
					case 'arc':
					case 'path':
						switch (params.type) {
							case Align.CENTER:
								widthOrHeight = 0;
								break;
							default:
								offset += widthOrHeight / 2;
								break;
						}
						break;
					case 'text':
						if (xy === 'x') {
							switch (source.alignText) {
								case 'center':
									widthOrHeight = 0;
								case 'right':
									widthOrHeight *= -1;
							}
						}
						break;
				}

				// checks if qualityScale is available which means it is a CanvasDrawer or CanvasDrawer's canvas, 
				// without checking if it is the module directly
				widthOrHeight /= source.qualityScale || 1;

				var pos = calculate(params.type, widthOrHeight, againstNumber ? 0 : against[againstDimension] / (against.qualityScale || 1), !againstNumber && !!arg[xy].outer);

				if (pos != null) {
					pos += againstX + offset;
					obj[xy] = snap ? Math.round(pos) : pos;
				}
			}
		}

		return obj;
	}

	function set(source, arg) {
		var obj = get(source, arg);

		if (isDomElement(source)) {
			var elem = source.canvas || Markup.get(source);
			Styles.setCss(elem, obj);
		} else {
			for (var prop in obj) {
				source[prop] = obj[prop];
			}
		}

		return obj;
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS	
	function calculate(mode, source, target, outer) {
		//trace ( 'calculate()', mode, source, target, outer )
		// when only passing a string, this will create {x/y} from string
		var isConvert = arguments.length == 1;

		// Kenny Version 1.0
		/*switch ( mode ){
  	case 'alignBottom' :
  		if ( outer ) 
  			source = 0
  		if ( !isConvert )
  			return target - source;
  	
  	case 'alignTop' :
  		return isConvert ? { y:mode } : outer ? -source : 0 ;
  					
  		case 'alignRight' :
  		if ( outer ) 
  			target = 0
  		if ( !isConvert )
  			return target - source;
  				
  	case 'alignLeft' :
  		return isConvert ? { x:mode } : outer ? target : 0 ;
  		case 'alignCenter' :
  		if ( outer ) 
  			target = 0
  		return isConvert ? { x:mode, y:mode } : ( target - source ) / 2;
  	
  	default :
  		return null;
  }*/

		// Andrew Version 1.0
		/*switch ( mode ) {
  	case 'alignBottom':
  		if ( outer )
  			source = target + source
  		if ( !isConvert )
  			return target - source;
  		case 'alignTop':
  		return isConvert ? {
  			y: mode
  		} : outer ? target : 0;
  			case 'alignRight':
  		if ( outer )
  			target = 0
  		if ( !isConvert )
  			return target - source;
  		case 'alignLeft':
  		return isConvert ? {
  			x: mode
  		} : outer ? target : 0;
  		case 'alignCenter':
  		if ( outer )
  			target = 0
  		return isConvert ? {
  			x: mode,
  			y: mode
  		} : ( target - source ) / 2;
  		default:
  		return null;
  }*/

		// Andrew Version 2.0
		switch (mode) {
			case 'alignBottom':
				if (outer) source = 0;
				if (!isConvert) return target - source;

			case 'alignTop':
				return isConvert ? {
					y: mode
				} : outer ? -source : 0;

			case 'alignRight':
				if (outer) target += source;
				if (!isConvert) return target - source;

			case 'alignLeft':
				return isConvert ? {
					x: mode
				} : outer ? -source : 0;

			case 'alignCenter':
				if (outer) target = 0;
				return isConvert ? {
					x: mode,
					y: mode
				} : (target - source) / 2;

			default:
				return null;
		}
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function isDomElement(elem) {
		return elem instanceof HTMLElement || elem.canvas != undefined;
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	return {
		/**
  	@memberof Align
  	@const {string} BOTTOM
  		Synonymous with "alignBottom" 
  */
		BOTTOM: 'alignBottom',

		/**
  	@memberof Align
  	@const {string} CENTER
  		Synonymous with "alignCenter" 
  */
		CENTER: 'alignCenter',

		/**
  	@memberof Align
  	@const {string} LEFT
  		Synonymous with "alignLeft" 
  */
		LEFT: 'alignLeft',

		/**
  	@memberof Align
  	@const {string} RIGHT
  		Synonymous with "alignRight" 
  */
		RIGHT: 'alignRight',

		/**
  	@memberof Align
  	@const {string} TOP
  		Synonymous with "alignTop" 
  */
		TOP: 'alignTop',

		/**
  	@memberof Align
  	@const {string} BOTTOM_LEFT
  		Synonymous with "alignBottomLeft", used for {@link UITextField.alignText} 
  */
		BOTTOM_LEFT: 'alignBottomLeft',

		/**
  	@memberof Align
  	@const {string} BOTTOM_RIGHT
  		Synonymous with "alignBottomRight" used for {@link UITextField.alignText} 
  */
		BOTTOM_RIGHT: 'alignBottomRight',

		/**
  	@memberof Align
  	@const {string} TOP_LEFT
  		Synonymous with "alignTopLeft" used for {@link UITextField.alignText} 
  */
		TOP_LEFT: 'alignTopLeft',

		/**
  	@memberof Align
  	@const {string} TOP_RIGHT
  		Synonymous with "alignTopRight" used for {@link UITextField.alignText} 
  */
		TOP_RIGHT: 'alignTopRight',

		/**
  	@memberof Align
  	@method get
  	@desc
  		Calculates but does not apply the amount the source element will move horizontally and/or vertically, relative to its parent 
  		according to provided mode. The constants allow for picking which coordinate to apply.  
  */
		get: get,

		/**
  	@memberof Align
  	@method set
  	@desc
  		Moves the source element horizontally and/or vertically, relative to its parent according to provided mode. The constants 
  		allow for picking which coordinate to apply.  
  */
		set: set,

		// used internally by Flipbook
		calculate: calculate
	};
}();
exports.default = Align;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adExternal = __webpack_require__(33);

var _CssManager = __webpack_require__(83);

var _CssManager2 = _interopRequireDefault(_CssManager);

var _ImageManager = __webpack_require__(57);

var _ImageManager2 = _interopRequireDefault(_ImageManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrepareCore = new function () {

	var self = this;
	var assetLoader = undefined;
	var jsonPending = false;

	var async;

	// init
	self.init = function (completeCallback, fbaLoader) {
		trace('PrepareCore.init()');
		// migration check
		if (typeof global.async == 'undefined') {
			throw new Error('Index migration required. To avoid migration, rollback core/js/control/PrepareCore.js');
		}

		// async for threading any number of loads
		async = new Async();
		async.onComplete(completeCallback);
		async.wait();

		// fba payload
		if (fbaLoader) prepareFbaPayload(fbaLoader);

		// views
		prepareViews();

		// images
		queueRequestedImages();

		// fonts
		loadFonts();

		// device
		_adExternal.Device.init();
		_adExternal.Device.trace();

		// css
		_CssManager2.default.init();

		async.done();
	};

	// prepare fba-payload
	function prepareFbaPayload(fbaLoader) {
		trace('PrepareCore.prepareFbaPayload()');
		_ImageManager2.default.addFbaImages(fbaLoader);
	}

	// views
	function prepareViews() {
		trace('PrepareCore.prepareViews()');
		if (typeof views !== 'undefined') {
			var viewRequests = views.call();
			if (viewRequests.length) {
				async.wait();

				global.Views = {};
				global.ViewStyles = {};

				new ViewLoader(viewRequests, {
					name: 'viewLoader',
					onComplete: function onComplete() {
						async.done();
					}
				}).load();
			}
		}
	}

	// queue index-requested images with ImageManager
	function queueRequestedImages() {
		// assets.images
		_ImageManager2.default.addLoader(new Loader(assets.images, {
			name: 'indexImages',
			prepend: adParams.imagesPath
		}));
		// assets.edgeImages
		_ImageManager2.default.addLoader(new Loader(assets.edgeImages, {
			name: 'edgeImages',
			prepend: adParams.edgePath
		}));
	}

	// preload fonts
	function loadFonts() {
		trace('PrepareCore.loadFonts()');

		async.wait();
		var fontLoader = new Loader({
			name: 'fontLoader',
			onComplete: loadFontsComplete,
			onFail: global.failAd,
			scope: self
		});
		fontLoader.add(new Loader(assets.fonts, { name: 'fontSubLoader', prepend: adParams.fontsPath, fileType: 'ttf' }));
		fontLoader.add(new Loader(assets.edgeFonts, { name: 'fontEdgeSubLoader', prepend: adParams.fontsPath, fileType: 'ttf' }));
		fontLoader.load();
	}
	function loadFontsComplete() {
		async.done();
	}
}(); /**
     	@class PrepareCore
     	@desc
     		Boilerplate logic that is attempted for all ad templates happens here. The build of an ad should not need to affect this scope. 
     */
exports.default = PrepareCore;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(93), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(94);
__webpack_require__(113);
module.exports = __webpack_require__(51).f('iterator');

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(95)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(59)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(40);
var defined = __webpack_require__(41);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(98);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(12);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(13).f });

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(45);
var descriptor = __webpack_require__(29);
var setToStringTag = __webpack_require__(50);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(16)(IteratorPrototype, __webpack_require__(19)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(101);
var $Object = __webpack_require__(0).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(12);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(45) });

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(103);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(12);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperties: __webpack_require__(65) });

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(105);
module.exports = __webpack_require__(0).Object.keys;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(46);
var $keys = __webpack_require__(31);

__webpack_require__(18)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(68);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(15);
var toLength = __webpack_require__(108);
var toAbsoluteIndex = __webpack_require__(109);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.1.15 ToLength
var toInteger = __webpack_require__(40);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var toInteger = __webpack_require__(40);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(112);
module.exports = __webpack_require__(0).Object.getPrototypeOf;

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(46);
var $getPrototypeOf = __webpack_require__(69);

__webpack_require__(18)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(114);
var global = __webpack_require__(6);
var hide = __webpack_require__(16);
var Iterators = __webpack_require__(44);
var TO_STRING_TAG = __webpack_require__(19)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' + 'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' + 'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' + 'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' + 'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(115);
var step = __webpack_require__(116);
var Iterators = __webpack_require__(44);
var toIObject = __webpack_require__(15);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(59)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0; // next index
  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function () {/* empty */};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (done, value) {
  return { value: value, done: !!done };
};

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(118), __esModule: true };

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(70);
__webpack_require__(134);
__webpack_require__(135);
__webpack_require__(136);
module.exports = __webpack_require__(0).Symbol;

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(120), __esModule: true };

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(121);
module.exports = __webpack_require__(0).Object.preventExtensions;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(8);
var meta = __webpack_require__(71).onFreeze;

__webpack_require__(18)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(123), __esModule: true };

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(124);
module.exports = __webpack_require__(0).Object.isExtensible;

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(8);

__webpack_require__(18)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(31);
var gOPS = __webpack_require__(72);
var pIE = __webpack_require__(53);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }return result;
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(127), __esModule: true };

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(70);
module.exports = __webpack_require__(0).Object.getOwnPropertySymbols;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 7.2.2 IsArray(argument)
var cof = __webpack_require__(68);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(130);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyNames(it) {
  return $Object.getOwnPropertyNames(it);
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(18)('getOwnPropertyNames', function () {
  return __webpack_require__(73).f;
});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = { "default": __webpack_require__(132), __esModule: true };

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(133);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(15);
var $getOwnPropertyDescriptor = __webpack_require__(54).f;

__webpack_require__(18)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(52)('asyncIterator');

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(52)('observable');

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperties = __webpack_require__(17);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class Device
	@desc
		Global constant that provide information about the Device on which the code is currently executing
*/
var Device = new function () {

	var D = this;

	/**	
 	@memberOf Device	
 	@var {string} agentString
 	@desc
 		Current user agent of browser. */

	/**	
 	@memberOf Device	
 	@var {string} brand
 	@desc
 		Brand of device, possible values are: 
 		<code>microsoft</code>, 
 		<code>apple</code>, 
 		<code>android</code>, 
 		<code>rim</code>, 
 		<code>unknown</code>. 
 */

	/**	
 	@memberOf Device	
 	@var {string} product
 	@desc
 		Brand subtype, possible values are: 
 		<code>windows phone</code>, 
 		<code>windows</code>, 
 		<code>iphone</code>, 
 		<code>ipad</code>, 
 		<code>ipod</code>, 
 		<code>mac</code>, 
 		<code>android</code>, 
 		<code>blackberry</code>. 
 	*/

	/**	
 	@memberOf Device	
 	@var {string} type
 	@desc
 		Device type, possible values are: 
 		<code>mobile</code>, 
 		<code>tablet</code>, 
 		<code>desktop</code>. 
 		<br><br>
 		Windows > 8 currently returns tablet, currently no way to differentiate from desktop. */

	/**	
 	@memberOf Device	
 	@var {string} os
 	@desc
 		Operating system of device. */

	/**	
 	@memberOf Device	
 	@var {string} osVersion
 	@desc
 		Version of operating system of device. */

	/** 	
 	@memberOf Device	
 	@var {string} browser
 	@desc
 		Brand of browser. */

	/**	
 	@memberOf Device	
 	@var {string} browserVersion
 	@desc
 		Version of browser. 
 */

	/**	
 	@memberOf Device	
 	@var {string} pixelRatio
 	@desc
 		Pixel ratio of device viewport. 
 */
	D.pixelRatio = window.devicePixelRatio || 'unknown';

	/** ------------------------------------------------------------------------------------------------------------- */
	// GETTERS
	(0, _defineProperties2.default)(D, {

		/**	
  	@memberOf Device	
  	@var {string} orientation
  	@desc
  		Orientaion of device viewport: landscape or portrait. 
  */
		orientation: {
			get: function get() {
				return window.innerWidth > window.innerHeight ? 'landscape' : 'portrait';
			}
		},

		/**	
  	@memberOf Device	
  	@var {object} dimensions
  	@property {number} width
  		window inner-width
  	@property {number} height
  		window inner-height
  	@desc
  		The current dimensions of the device's viewport, returns an object with a width and height 
  		value that are direct returns of windowWidth and windowHeight.
  */
		dimensions: {
			get: function get() {
				return {
					width: window.innerWidth,
					height: window.innerHeight
				};
			}
		}
	});

	/** ------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**	
 	@memberOf Device	
 	@method init
 	@desc
 		Initializes the module, which is called from within the pipeline.
 */
	D.init = function () {
		trace('Device.init()');

		D.agentString = navigator.userAgent;
		for (var m in D) {
			if (m != 'init' && m != 'trace' && typeof D[m] == 'function') {
				D[m].call();
			}
		}
		if (D.type !== 'desktop' && D.os === 'windows' && D.osVersion <= 8 && D.browser === 'ie' && D.browserVersion < 12) {
			trace("You appear to be on Windows 7 or 8 using Internet Explorer 11 or under. You also appear to be on a touchscreen device. We will assume you're actually on a desktop, since it's extremely unlikely you're on a tablet or mobile device using this specific operating system and browser.");
			D.type = 'desktop';
		}
	};

	/**	
 	@memberOf Device	
 	@method trace
 	@desc
 		Outputs all of the known information regarding the device.
 */
	D.trace = function () {
		var line = Array(70).join('-');
		var str = '\n' + line;
		str += '\n AGENT:\n\n\t' + D.agentString + '\n';
		str += '\n  Brand:\t\t\t' + D.brand;
		str += '\n  Product:\t\t\t' + D.product;
		str += '\n  Type:\t\t\t\t' + D.type;
		str += '\n  Os:\t\t\t\t' + D.os + ' - ' + D.osVersion;
		str += '\n  Browser:\t\t\t' + D.browser + ' - ' + D.browserVersion;
		str += '\n  Dimensions: \t\t' + D.dimensions.width + 'x' + D.dimensions.height;
		str += '\n  Orientation:\t\t' + D.orientation;
		str += '\n  Pixel Ratio:\t\t' + D.pixelRatio;
		str += '\n' + line;
		trace(str);
	};

	/** ------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	D._getType = function () {
		var hasMobile = /(android|mobile)/gi.exec(D.agentString);
		var hasTablet = /(tablet|touch)/gi.exec(D.agentString);
		var hasIPad = /(ipad)/gi.exec(D.agentString);
		D.type = 'desktop';
		if (hasMobile) D.type = 'mobile';
		if (hasTablet) D.type = 'tablet';
		if (hasIPad) D.type = 'tablet';
	};

	D._getBrandAndOS = function () {
		var apple = D.agentString.match(/ip(hone|od|ad)|mac/gi);
		if (apple) {
			D.brand = 'apple';
			D.product = apple[0].toLowerCase();
			var appleOS = /(OS\s)(\X\s|)([\d\.\_]+)/gi.exec(D.agentString);
			D.os = appleOS[2] == '' ? 'ios' : 'osx';
			D.osVersion = appleOS[3].replace(/\_/g, '.');
			return;
		}

		var android = /(android)\/?\s*([0-9\.]+)/gi.exec(D.agentString);
		if (android) {
			D.brand = D.product = D.os = android[1].toLowerCase();
			D.osVersion = android[2];
			return;
		}

		var microsoft = /(windows\snt\s|windows\sphone)\/?\s*([0-9\.]+)/gi.exec(D.agentString);
		if (microsoft) {
			D.brand = 'microsoft';
			D.os = 'windows';

			switch (microsoft[2]) {
				case '5.2':
					D.osVersion = 'xp';
					break;
				case '6.0':
					D.osVersion = 'vista';
					break;
				case '6.1':
					D.osVersion = '7';
					break;
				case '6.2':
					D.osVersion = '8';
					break;
				case '6.3':
					D.osVersion = '8.1';
					break;
				case '10.0':
					D.osVersion = '10';
					break;
				default:
					D.osVersion = microsoft[2];
			}

			D.product = microsoft[1].toLowerCase();
			if (D.product.match(/\snt/i)) {
				D.product = 'pc';
			}
			return;
		}

		// blackberry
		var blackberry = D.agentString.match(/(blackberry|bb10|playbook)/i);
		if (blackberry) {
			D.brand = D.product = D.os = 'blackberry';
			D.osVersion = /(version)\/?\s*([0-9\.]+)/gi.exec(D.agentString)[2];
		}
	};

	D._getBrowser = function () {
		var browserMatches = /(edge(?=\/))\/?\s*([0-9\.]+)/i.exec(D.agentString); // check for edge first

		// if it's not edge, check for other common browsers
		if (!browserMatches) {
			browserMatches = D.agentString.match(/(fban|fbav|opera|chrome|crios|safari|firefox|msie|trident(?=\/))\/?\s*([0-9\.]+)/i);
		}

		// if we checked for common browsers and got NOTHING in return, let's just use the device's default browser
		if (!browserMatches || browserMatches.length < 3) {
			trace("we received no browser data, so we are setting it to the default of the device");
			switch (D.os) {
				case 'ios':
					D.browser = 'safari';
					break;
				case 'windows':
					D.browser = 'trident';
					break;
				default:
					D.browser = 'chrome';
					break;
			}
			D.browserVersion = 'os-default';
			return;
		}

		trace('we received browser data');
		D.browser = browserMatches[1].toLowerCase();
		D.browserVersion = browserMatches[2];

		switch (D.browser) {
			case 'trident':
				// Check for desktop IE 10
				var versionMatch = /\brv:+(\d+)/g.exec(D.agentString);
				if (versionMatch) D.browserVersion = versionMatch[1];
			case 'msie':
				D.browser = 'ie';
				break;
			case 'crios':
				D.browser = 'chrome';
				break;
			case 'safari':
				var versionMatch = D.agentString.match(/\sversion\/([0-9\.]+)\s/i);
				if (versionMatch) D.browserVersion = versionMatch[1];
				break;
			case 'chrome':
				// check for Opera
				var versionMatch = D.agentString.match(/\b(OPR)\/([0-9\.]+)/i);
				if (versionMatch) {
					D.browser = 'opera';
					D.browserVersion = versionMatch[2];
				}
				break;
		}
	};
}();

Device.init();
Device.trace();

exports.default = Device;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adUtils = __webpack_require__(1);

var _adLoad = __webpack_require__(34);

var _adLoad2 = _interopRequireDefault(_adLoad);

var _adLegacy = __webpack_require__(155);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AdManager = new function () {

	var self = this;

	self.currentJsonData;

	self.adManagerSettings;

	self.jsonUrl;
	self.jsonMode;
	self.currentAdDataIndex = 0;
	self.completeCallback;

	/** 
 	@memberOf AdManager
 	@method init
 	@param {object} 		_adManagerSettings 		- see "Properties" for more information
 	@property {string} 		jsonMapUrl 			- the url on which to request a map.json
 	@property {object} 		includeJsonDataByKey	- used to override the standard select-json-by-latest-non-expired method, and return
 	@desc
 		This passes the settings object from parent scope and initialized the class.
 												the ad-data block whose specified key:value matches this param. 
 */
	self.init = function (_adManagerSettings) {
		self.adManagerSettings = _adManagerSettings;
	};

	/** 
 	@memberOf AdManager
 	@method isPreviewLocation
 	@description
 		This method returns true for all the locations that should load PREVIEW.JSON instead of published.json.
 		Safeguards are in place so that even an ad in a staging/build-state will load published json, if running in 
 		any http(s) locations other than the ones listed. 
 */
	self.isPreviewLocation = function () {
		var href = window.location.href;
		if (href == undefined || href == null) return false;
		// local locations
		if (href.match(/^file/) || adParams.environmentId == 'staging' || adParams.environmentId == 'default' || href.match(/ff0000\.com/) || href.match(/adprodtest/) || href.match(/client\-projects\.com/) || href.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+:[0-9]+/)) return true;

		// other locations
		return false;
	};

	// prepare json
	self.prepareJson = function (_completeCallback) {
		trace('AdManager.prepareJson()');
		self.completeCallback = _completeCallback;

		var externalJson = _adUtils.NetUtils.getQueryParameterBy('jsonData');
		var externalJsonUrl = _adUtils.NetUtils.getQueryParameterBy('jsonURL');

		if (externalJson) {
			trace(' - json data provided by query string');
			externalJson = decodeURIComponent(externalJson);
			self.currentJsonData = self.parseJson(externalJson);
			self.handleJsonParseComplete();
		} else if (externalJsonUrl) {
			trace(' - json url provided by query string');
			self.jsonUrl = externalJsonUrl;
			self.loadJson();
		} else {
			self.loadMapJson();
		}
	};

	// get next ad data
	self.getNextAdData = function () {
		self.currentAdDataIndex++;
		trace('   getNextAdData() - new index: ' + self.currentAdDataIndex);

		global.adData = null;
		global.adParams.currentJsonData = null;
		global.adParams.currentJsonData = self.parseJson(global.adParams.rawJsonData, self.currentAdDataIndex);

		if (global.adParams.currentJsonData) {
			self.completeCallback.call();
		} else {
			trace('                    No AdData left!!');
			global.failAd();
		}
	};

	// load map json
	self.loadMapJson = function () {
		trace('PrepareCore.loadMapJson()');
		var mapJsonLoader = new _adLoad2.default(self.adManagerSettings.jsonMapUrl, {
			name: 'mapJsonLoader',
			onComplete: self.loadJsonMapComplete,
			onFail: global.failAd,
			scope: self,
			fileType: 'json'
		});

		mapJsonLoader.load();
	};
	self.loadJsonMapComplete = function (target) {
		trace('AdManager.loadJsonMapComplete()');
		var mapJson = JSON.parse(target.content[0].dataRaw);
		trace(' - map json: ', mapJson);

		if (self.isPreviewLocation()) {
			trace('   LOADING PREVIEW JSON');
			self.jsonUrl = mapJson.preview.json_url;
		} else if (global.adParams.networkId == 'ESPN_ON_CHANNEL') {
			trace('   LOADING LIVE ON CHANNEL JSON');
			self.jsonUrl = mapJson.published.on_channel.json_url;
		} else {
			trace('   LOADING LIVE OFF CHANNEL JSON');
			self.jsonUrl = mapJson.published.off_channel.json_url;
		}
		self.loadJson();
	};

	// load json data
	self.loadJson = function () {
		trace('AdManager.loadJson()');
		var jsonLoader = new _adLoad2.default(self.jsonUrl, {
			name: 'jsonLoader',
			onComplete: self.handleJsonLoaded,
			onFail: global.failAd,
			cacheBuster: true,
			scope: self,
			fileType: 'json'
		});
		jsonLoader.load();
	};
	self.handleJsonLoaded = function (target) {
		trace('AdManager.handleJsonLoaded()');
		global.adParams.rawJsonData = target.content[0].dataRaw;
		global.adParams.currentJsonData = self.parseJson(target.content[0].dataRaw);
		self.handleJsonParseComplete();
	};

	self.handleJsonParseComplete = function () {
		trace('AdManager.handleJsonParseComplete()');
		if (global.adParams.currentJsonData === false) {
			trace('  JSON LOADED BUT ALL AD DATA IS EXPIRED');
			global.failAd();
		} else if (global.adParams.currentJsonData === 'pending') {
			trace('  JSON LOADED BUT NO AD DATA REMAINING AFTER ATTEMPTING TO FILTER BY KEY - GETTING NEXT AD DATA');
			self.getNextAdData();
		} else {
			self.completeCallback.call();
		}
	};

	self.parseJson = function (_rawJsonData, returnIndex) {
		trace('AdManager.parseJson()');

		returnIndex = returnIndex ? returnIndex : 0;

		var jsonData;
		var adDataArray = [];
		var dateSortedAdArray = [];

		var parsedJsonData = JSON.parse(_rawJsonData);
		if (parsedJsonData.length === undefined) jsonData = [parsedJsonData];else jsonData = parsedJsonData;

		self.determineJsonMode(jsonData);

		if (self.jsonMode === 'timeslot') jsonData = [self.getAdDataFromTimeslot(jsonData)];else if (self.adManagerSettings.includeJsonDataByKey.key.length !== 0) {
			jsonData = self.includeAdDataByKey(jsonData, 'ads');
		}

		if (jsonData[0] === 'pending') return jsonData[0];else if (!jsonData[0]) return false;else if (!jsonData) return false;

		var hasExpiration = true;
		for (var prop in jsonData) {
			if (jsonData[prop].expiration_time) {
				var expiration_time = _adLegacy.DateUtils.parseToDate(jsonData[prop].expiration_time);
				if (expiration_time.getTime() > self.getNow().getTime()) {
					if (!self.hasExcludedKeyValue(jsonData[prop])) adDataArray.push(jsonData[prop]);
				}
			} else {
				hasExpiration = false;
				adDataArray.push(jsonData[prop]);
			}
		}
		if (hasExpiration) dateSortedAdArray = adDataArray.sort(sortByExpirationDate);else dateSortedAdArray = adDataArray;

		function sortByExpirationDate(a, b) {
			var aa = _adLegacy.DateUtils.parseToDate(a.expiration_time).getTime();
			var bb = _adLegacy.DateUtils.parseToDate(b.expiration_time).getTime();
			return aa < bb ? -1 : aa > bb ? 1 : 0;
		}

		if (returnIndex >= dateSortedAdArray.length) return false;else return dateSortedAdArray[returnIndex];
	};

	self.determineJsonMode = function (_jsonData) {
		trace('AdManager.determineJsonMode()');

		if (!_jsonData[0]) {
			trace('          - JSON is undefined from Ad Manager');
			global.failAd();
			return;
		}

		if (!_jsonData[0].data_type) {
			trace('          - JSON_MODE cannot be determined because no "data_type" node was found');
			jsonMode = 'ads';
			return;
		}

		switch (_jsonData[0].data_type) {
			case 'static':
				trace('          - JSON_MODE is set to STATIC');
				self.jsonMode = 'static';
				break;

			case 'paramount':
				trace('          - JSON_MODE is set to PARAMOUNT');
				self.jsonMode = 'paramount';
				break;

			case 'timeslot':
				trace('          - JSON_MODE is set to TIMESLOTS');
				self.jsonMode = 'timeslot';
				break;

			default:
				trace('          - JSON_MODE is set to ADS');
				self.jsonMode = 'ads';
				break;
		}
	};

	self.getAdDataFromTimeslot = function (rawTimeslotData) {
		trace('AdManager.getAdDataFromTimeslot()');
		var adDataArray = [];
		for (var prop in rawTimeslotData) {
			var currentTimeslot = rawTimeslotData[prop];
			var expiration_time = _adLegacy.DateUtils.parseToDate(currentTimeslot.expiration_time);
			if (expiration_time.getTime() > self.getNow().getTime()) {
				adDataArray.push(currentTimeslot);
			}
		}
		if (adDataArray.length < 1) return false;

		if (self.adManagerSettings.includeJsonDataByKey.key.length !== 0) {
			adDataArray = self.includeAdDataByKey(adDataArray, 'timeslots');
			if (adDataArray === 'pending' || !adDataArray) return adDataArray;else return self.getAdByWeight(adDataArray);
		} else {
			var prunedAds = [];
			for (var i in adDataArray[0].ads) {
				if (!self.hasExcludedKeyValue(adDataArray[0].ads[i])) prunedAds.push(adDataArray[0].ads[i]);
			}
			return self.getAdByWeight(prunedAds);
		}
	};

	self.getAdByWeight = function (adsArray) {
		trace('AdManager.getAdByWeight()');
		// check individual ads in timeslot for expiration, and if expired, distribute the expired ad's weight evenly to others
		var expiredWeight = 0;
		for (var k = adsArray.length - 1; k > -1; k--) {
			if ('expiration_time' in adsArray[k]) {
				var expiration_time = _adLegacy.DateUtils.parseToDate(adsArray[k].expiration_time);
				if (expiration_time.getTime() < self.getNow().getTime()) {
					trace(' - ad "' + adsArray[k].name + '" expired: ' + adsArray[k].expiration_time + ', distributing ' + adsArray[k].weight + '% of weight to other ads');
					expiredWeight += adsArray[k].weight;
					adsArray.splice(k, 1);
				}
			}
		}
		var adjustedWeight = expiredWeight / adsArray.length;
		var weightedIndexes = [];
		for (var i = 0; i < adsArray.length; i++) {
			for (var j = 0; j < Math.round(adsArray[i].weight + adjustedWeight); j++) {
				weightedIndexes.push(i);
			}
		}
		return adsArray[weightedIndexes[Math.floor(Math.random() * weightedIndexes.length)]];
	};

	self.includeAdDataByKey = function (adArray, type) {
		trace('AdManager.includeAdDataByKey()');
		trace(' - Searching feed for a key: "' + self.adManagerSettings.includeJsonDataByKey.key + '" ' + 'with values matching:' + self.adManagerSettings.includeJsonDataByKey.values.map(function (value) {
			return '"' + value + '"';
		}).join(', '));

		var keys = self.adManagerSettings.includeJsonDataByKey.key.split('.');

		var adsWithKey = [];
		var ads;
		if (adArray[self.currentAdDataIndex] !== undefined) {
			if (type === 'timeslots') ads = adArray[self.currentAdDataIndex].ads;else if (type === 'ads') ads = adArray;
		} else return false;

		for (var i in ads) {
			// generate path to requested key
			var jsonScope = ads[i];
			for (var k in keys) {
				if (keys[k] in jsonScope) jsonScope = jsonScope[keys[k]];else {
					trace('   !!! invalid key path: "' + self.adManagerSettings.includeJsonDataByKey.key + '" !!!');
					return false;
				}
			}
			for (var j in self.adManagerSettings.includeJsonDataByKey.values) {
				if (jsonScope === self.adManagerSettings.includeJsonDataByKey.values[j]) {
					adsWithKey.push(ads[i]);
				}
			}
		}
		if (adsWithKey.length > 0) {
			trace('   USING MATCHED AD-DATA~');
			return adsWithKey;
		} else {
			trace('   !!! ads with matched keys were NOT found !!!');
			if (type === 'timeslots') return 'pending';else if (type === 'ads') return false;
		}
	};

	self.hasExcludedKeyValue = function (adData) {
		if (self.adManagerSettings.excludeJsonDataByKey) {
			if (self.adManagerSettings.excludeJsonDataByKey.key in adData) {
				for (var j = 0; j < self.adManagerSettings.excludeJsonDataByKey.values.length; j++) {
					if (adData[self.adManagerSettings.excludeJsonDataByKey.key] == self.adManagerSettings.excludeJsonDataByKey.values[j]) {
						trace('AdManager.hasExcludedKeyValue(), "' + self.adManagerSettings.excludeJsonDataByKey.key + '": "' + self.adManagerSettings.excludeJsonDataByKey.values[j] + '"');
						return true;
					}
				}
			}
		}
		return false;
	};

	self.getNow = function () {
		return _adLegacy.DateUtils.getNow(self.adManagerSettings.setTzDesignation.call());
	};
}(); /**
     	@class	AdManager
     	@static
     	@desc
     		This object is meant to handle all of our json loading and parsing.
     */
exports.default = AdManager;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class DcsUtils
	@desc
		Doubleclick Studio utilities.
*/
var DcsUtils = new function () {

	var D = this;

	D.counterWithVars = function (str, impression) {
		if (impression) Enabler.reportCustomVariableCount1(str);else Enabler.reportCustomVariableCount2(str);
	};

	/**
 	@memberOf DcsUtils
 	@method addVideoMetrics
 	@param {VideoPlayer} player 
 		The video player instance to track
 	@param {string} message
 		The message passed as the metric, defaults to 'Video Report 1'
 	@desc
 		Adds DoubleClick Tracking metrics to a video player.
 	@example
 		DcsUtils.addVideoMetrics( adData.elements.videoPlayer, 'Intro Video' );
 */
	D.addVideoMetrics = function (player, message) {
		Enabler.loadModule(studio.module.ModuleId.VIDEO, function () {
			studio.video.Reporter.attach(message || 'Video Report 1', player instanceof VideoPlayer ? player.screen : player);
		});
	};

	/**
 	@memberOf DcsUtils
 	@method addYouTubeVideoMetrics
 	@param {VideoPlayer} player 		- The YouTubePlayer instance to track
 	@desc
 		Adds DoubleClick Tracking metrics to a YouTube video player.  The Enabler counter calls are added to the index when
 		a YouTubePlayer is added through Ad App.
 		<br><br>
 			If manually adding a YouTubePlayer/tracking, the required global vars are:<br>
 		<codeblock>
 			var trackVideoPlay = function() {
 				Enabler.counter( 'YTP Video Play', true )
 			}
 			var trackVideoReplay = function() {
 				Enabler.counter( 'YTP Video Replay', true )
 			}
 			var trackVideoPause = function() {
 				Enabler.counter( 'YTP Video Pause', true )
 			}
 			var trackVideoComplete = function() {
 				Enabler.counter( 'YTP Video Complete', true )
 			}
 		</codeblock>
 		<br><br>
 		@example
 		DcsUtils.addYouTubeVideoMetrics( adData.elements.mainYouTubePlayer );
 */
	D.addYouTubeVideoMetrics = function (player) {
		var p = player.screen;

		p.addEventListener(MediaEvent.PLAY, function () {
			player.isReplay ? trackVideoReplay.call() : trackVideoPlay.call();
		});

		p.addEventListener(MediaEvent.PAUSE, function () {
			if (!player.complete) {
				trackVideoPause.call();
			}
		});

		p.addEventListener(MediaEvent.COMPLETE, function () {
			trackVideoComplete.call();
		});
	};
}();
exports.default = DcsUtils;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class ImageUtils
	@desc
		This object contains methods necessary for manipulating images.
*/
var ImageUtils = new function () {

	var self = this;

	/**
 	@memberOf ImageUtils
 	@method fitImageAtCoordinate
 	@param {element} source
 		The div with a background image
 	@param {number} originX
 		The x position to center on
 	@param {number} originY
 		The y position to center on
 	@desc
 		Positions a background image to fit the div size while centering around a point.  If the point is beyond the size bounds, it will align to that side.
 */
	self.fitImageAtCoordinate = function (source, originX, originY) {
		var child = new Image();
		if (originX === undefined && originY === undefined) {
			source.style.backgroundPosition = '50% 50%';
		} else {
			// make sure the image is loaded first
			child.onload = function () {
				var coord = { width: originX || 0, height: originY || 0 };
				var parent = { width: source.offsetWidth, height: source.offsetHeight };
				var parentAspectRatio = parent.width / parent.height;
				var childAspectRatio = child.width / child.height;

				if (parentAspectRatio > childAspectRatio) {
					// child max fits in horizontal, move y
					fit('width', 'height');
				} else if (parentAspectRatio < childAspectRatio) {
					//  child max fits in vertical, move x
					fit('height', 'width');
				}

				function fit(a, b) {
					// child width is parent height times ratio of child width over child height
					// child height is parent width times ratio of child height over child width
					var childSize = parent[a] * (child[b] / child[a]);

					// parent to child scale ratio
					var scalePercent = parent[a] / child[a];

					// parent size, halfed then subtract the scaled coordinate point
					var childMove = parent[b] / 2 - coord[b] * scalePercent;

					// make sure the image doesn't exceed the bounds
					var maxMove = parent[b] - childSize;
					if (childMove > 0) childMove = 0;else if (childMove < maxMove) childMove = maxMove;

					source.style.backgroundPosition = a === 'height' ? childMove + 'px 0px' : '0px ' + childMove + 'px';
				}
			};
		}
		child.src = source.style.backgroundImage.replace(/url\((['"])?(.*?)\1\)/gi, '$2').split(',')[0];
		source.style.backgroundSize = 'cover';
		source.style.backgroundRepeat = 'no-repeat';
	};
}();

exports.default = ImageUtils;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class LocationUtils
	@desc
		This object contains utilities for interfacing with the device's GPS.
*/
var LocationUtils = new function () {
	this.gpsSuccessCallback;
	this.gpsFailCallback;

	/**
 	@memberOf LocationUtils
 	@method getGPSData
 	@param {function} callbackSuccess
 		upon successful acquisition of device location, this funciton is called with global coordinates.
 	@param {function} callbackFail
 		called if the query fails
 	@desc
 		Queries the device for current location. Asyncronous and dependent on user permission, 
 		so callback functions must be used.
 */
	this.getGPSData = function (callbackSuccess, callbackFail) {
		if (navigator.geolocation) {
			LocationUtils.gpsSuccessCallback = callbackSuccess;
			LocationUtils.gpsFailCallback = callbackFail;
			navigator.geolocation.getCurrentPosition(LocationUtils.onLocationRetrieved, LocationUtils.onLocationFailed);
		} else trace('geolocation not available');
	};

	this.onLocationRetrieved = function (position) {
		LocationUtils.gpsSuccessCallback(position.coords);
	};

	this.onLocationFailed = function (error) {
		trace('Error retrieving location data');

		switch (error.code) {
			case 0:
				trace('0 - unknown error');
				break;

			case 1:
				trace('1 - permission denied');
				break;

			case 2:
				trace('2 - position unavailable (error response from locaton');
				break;

			case 3:
				trace('3 - timed out');
				break;
		}

		if (LocationUtils.gpsFailCallback) LocationUtils.gpsFailCallback(error);
	};
}();

exports.default = LocationUtils;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
/* ----------------------------------------------------------------------------------------------------------------------------------------------------------
	Class: 	TextUtils

	Description:
		This object contains methods necessary for manipulating text.
	---------------------------------------------------------------------------------------------------------------------------------------------------------- */
var TextUtils = new function () {
	var self = this;

	/* Method: autosizeTF() 
 		Fits a textfield's text to its bounds. Returns the result font size.
 		
 	target 				-	can be the whole textfield object, ( the object containing all three divs ), or specifically the textfield portion
 							of the textfield object
 		fontAdjustmentFactor 	-  	optional adjustment, decimal value that brings the top and bottom of the textfield in line with the top and bottom 
 							of the text. To further clarify: Fonts in html behave weird. When creating a textfield with debugging turned on,
 							you can see that the innermost container, the "textfield", (colored green when debugging is on), is often slightly 
 							bigger than the text on the top and bottom, or one or the other, creating a margin of sorts.  This makes vertically 
 							centering dynamically sized text, (ie after an autosize), seem off centered.  To fix this, you adjust the line height 
 							until the green box aligns with the text on the top and bottom.  Usually its a couple pixels smaller than the font 
 							size.  Then you can divide the line height by the font size to get your font adjustment factor. For example, if your 
 							font size is 27 and your line height is 24, your fontAdjustment factor will be .88, (24/27 = .88).  Entering this 
 							value as the second param of TextUtils.autosizeTF will preserve that font size/line height relationship as the font 
 							is shrunk.
 		Usage:
 	(start code)
 		TextUtils.autosizeTF( myTextfieldContainer );
 			 -or -
 		 
 		TextUtils.autosizeTF( myTextfieldContainer.textfield );
 	(end code)  */

	self.autosizeTF = function (target, fontAdjustmentFactor) {
		var elem = undefined;
		if (target.id) elem = Markup.get(target);else elem = target.textfield;

		var elemParent = Markup.getParent(elem);
		fontAdjustmentFactor = fontAdjustmentFactor || 1;

		var currentFontSize = undefined;
		var lineHeightAdustment = undefined;

		var maxWidth = Styles.getWidth(elemParent);
		if (Styles.getWidth(elem) > maxWidth) {
			while (Styles.getWidth(elem) > maxWidth) {
				currentFontSize = currentFontSize === undefined ? Styles.getCss(elem, 'font-size') : currentFontSize - 1;

				Styles.setCss(elem, 'font-size', currentFontSize);

				lineHeightAdustment = currentFontSize * fontAdjustmentFactor;
				Styles.setCss(elem, 'line-height', lineHeightAdustment);
			}
		}

		var maxHeight = Styles.getHeight(elemParent);
		if (Styles.getHeight(elem) > maxHeight) {
			while (Styles.getHeight(elem) > maxHeight) {
				currentFontSize = currentFontSize === undefined ? Styles.getCss(elem, 'font-size') : currentFontSize - 1;

				Styles.setCss(elem, 'font-size', currentFontSize);

				lineHeightAdustment = currentFontSize * fontAdjustmentFactor;
				Styles.setCss(elem, 'line-height', lineHeightAdustment);
			}
		}

		if (Styles.getWidth(elem) > maxWidth || Styles.getHeight(elem) > maxHeight) TextUtils.autosizeTF(elem);else return currentFontSize ? currentFontSize : Styles.getCss(elem, 'font-size');
	};

	self.fitContainerToText = function (target, fitWidth, fitHeight) {
		var elem = Markup.get(target);

		if (fitWidth) {
			var textWidth = Styles.getWidth(target.textfield);
			Styles.setCss(target.parent, 'width', textWidth);
			Styles.setCss(target.parent, 'left', parseInt(target.textfield.containerData.margin) / 2);

			var newContainerWidth = parseInt(textWidth + parseInt(target.textfield.containerData.margin));
			Styles.setCss(target.container, 'width', newContainerWidth);
		} else if (fitHeight) {
			var textHeight = Styles.getHeight(target.textfield);
			Styles.setCss(target.parent, 'height', textHeight);
			Styles.setCss(target.container, 'height', textHeight);
		}
	};

	/* Method: matchTeamNameSize()
 		This method is used for auto-sizing two team names to the maximum size where they are able to be the same size. 
 		team1Element 		- first textfield, this is the ".textfield" component of the object that gets returned from <Markup>.addTextField() 
 	team2Element 		- second textfield, this is the ".textfield" component of the object that gets returned from <Markup>.addTextField() */
	self.matchTeamNameSize = function (team1Element, team2Element) {
		var team1FontSize = TextUtils.autosizeTF(team1Element);
		var team2FontSize = TextUtils.autosizeTF(team2Element);
		var smallestFontSize = team1FontSize > team2FontSize ? team2FontSize : team1FontSize;

		Styles.setCss(team1Element, { fontSize: smallestFontSize });
		Align.moveX(Align.CENTER, team1Element);
		Styles.setCss(team2Element, { fontSize: smallestFontSize });
		Align.moveX(Align.CENTER, team2Element);
	};

	/* Method: addText() 
 		Writes text to a div.
 		
 	target 					-	div element in which to write text
 	txt 					 	-  	text to be written */
	self.addText = function (target, txt) {
		var elem = typeof target === 'string' ? Markup.get(target) : target;
		elem.innerHTML = txt;
	};

	/* Method: hasText()
 		Returns true or false depending on whether a div has anything inside of it.
 		
 	target 					-	div element */
	self.hasText = function (target) {
		var elem = typeof target === 'string' ? Markup.get(target) : target;
		return elem.innerHTML.length > 0;
	};

	/* Method: numlines()
 		Returns the number of lines that can fit in the element, given its size and line-height.
 		
 	target 					-	div element */
	self.numlines = function (target) {
		var elem = typeof target === 'string' ? Markup.get(target) : target;
		return Styles.getCss(target, 'height') / Styles.getCss(target, 'line-height');
	};

	/* Method: addSpaces()
 		Returns the specified number of '&nbsp;' strings.
 		
 	numberOfSpaces 			-	number of space entities to return */
	self.addSpaces = function (numberOfSpaces) {
		var spacingString = '';
		for (var i = 0; i < numberOfSpaces; i++) {
			spacingString += '&nbsp;';
		}
		return spacingString;
	};

	/* Method: getSpecialCharacter()
 		Returns entity equivilent for specified character.
 		
 	requestedCharacter 		-	character must match the 'label' key 
 	isCapital 				-	flag to return the entity as capital */
	self.getSpecialCharacter = function (requestedCharacter, isCapital) {
		requestedCharacter = global.proxyStringToLowerCase.apply(requestedCharacter);
		for (var i = 0; i < self.specialChars.length; i++) {
			var currentLabel = global.proxyStringToLowerCase.apply(self.specialChars[i].label);

			if (currentLabel === requestedCharacter) return isCapital ? self.specialChars[i].upperCase : self.specialChars[i].lowerCase;
		}
		return false;
	};
	self.specialCharacters = [{ label: 'iexcl', upperCase: '&#161;', lowerCase: '&#161;' }, { label: 'trademark', upperCase: '&#153;', lowerCase: '&#153;' }, { label: 'copyright', upperCase: '&#169;', lowerCase: '&#169;' }, { label: 'registered', upperCase: '&#174;', lowerCase: '&#174;' }, { label: 'nTilde', upperCase: '&#209;', lowerCase: '&#241;' }, { label: 'aAccent', upperCase: '&#193;', lowerCase: '&#225;' }, { label: 'eAccent', upperCase: '&#201;', lowerCase: '&#233;' }, { label: 'iAccent', upperCase: '&#205;', lowerCase: '&#237;' }, { label: 'oAccent', upperCase: '&#211;', lowerCase: '&#243;' }, { label: 'uAccent', upperCase: '&#218;', lowerCase: '&#250;' }];

	/* Method: trimStartAndEnd()
 		Removes white space from the start and end of a string.
 		
 	target 					-	string to affect */
	self.trimStartAndEnd = function (target) {
		return target ? target.replace(/^\s\s*/, '').replace(/\s\s*$/, '') : '';
	};

	/* Method: removeSpaces()
 		Removes all white space from the string.
 		
 	str 					-	string from which to remove spaces */
	self.removeSpaces = function (str) {
		return str.split(' ').join('');
	};

	/*	Method: pad()
 		Pads a number with zeros up to the specified number of places.
 		_target				- number to be padded
 	_count				- expected result length of the numerical string */
	self.pad = function (_target, _count) {
		var _sign = '';
		if (_target < 0) _sign = '-';
		_target = _target.toString().replace(/\-/, '', _target);
		while (_target.length < _count) {
			_target = '0' + _target;
		}return _sign + _target;
	};
}();

exports.default = TextUtils;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});
/** 
	@class NetUtils
	@desc
		Utility functions that are common in making network requests.
*/
var NetUtils = new function () {

	/**
 	@memberOf NetUtils
 	@method getQueryParameterBy
 	@param {string} name
 		the query string variable name
 	@desc
 		Analyses the URI query string and search for a key-value pair matching the requested var. 
 */
	this.getQueryParameterBy = function (name) {
		return global.queryParams[name];
	};
}();

exports.default = NetUtils;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.clone = clone;
/**
	@class ObjectUtils
	@desc
		Utilities for affecting objects.
*/

/**
	@memberOf ObjectUtils
	@name objectifier
	@property {function} objectifier.get
		{@link ObjectUtils.get}
	@property {function} objectifier.set
		{@link ObjectUtils.set}
	@desc
		This object is parent to a number of utility funcitons
*/
var objectifier = {};

/**
	@memberOf ObjectUtils
	@method get
	@param {string} str
		a data string representing the key of desire property splited by dot. 
		Array index is represented by number. For example, 'myObj.property1.0' means 
		I'm pointing to the [0] element in my propperty1 array inside of myObj. 
	@param {object} ctxObj
		the context object to find the property under, defaults to window
	@desc
		Gets a property with a nested property key string.
		<br><br>
		<b>NOTE!!!</b>
		This method is on the {@link ObjectUtils.objectifier} object!

	@example
		//
		var myObj = {
			prop1: [ 'a', 'b', 'c' ],
			prop2: {
				string: 'I am prop2',
				func: function() {
					alert( '!!' );
				}
			}
		};

		var val = ObjectUtils.objectifier.get( 'prop1.0', myObj );
		// your val should be 'a'

		val = ObjectUtils.objectifier.get( 'prop2.string', myObj );
		// your val should be 'I am prop2'
*/
objectifier.get = function (str, ctxObj) {
	ctxObj = ctxObj || window;
	var splits = objectifier._getSplits(str).splits;
	return objectifier._getProperty(splits, ctxObj);
};

/**
	@memberOf ObjectUtils
	@method set
	@param {string} str
		a data string representing the key of desire property splited by dot.
		Array index is represented by number. For example, 'myObj.property1.0' means
		I'm pointing to the [0] element in my propperty1 array inside of myObj.
	@param {any} val
		the value to set for th property
	@param {object} ctxObj
		the context object to find the property under, defaults to window
	@desc
		Sets a property value with a nested property key string.
		<br><br>
		<b>NOTE!!!</b>
		This method is on the {@link ObjectUtils.objectifier} object!
		
	@example
		//
		var myObj = {
			prop1: [ 'a', 'b', 'c' ],
			prop2: {
				string: 'I am prop2'
			}
		};

		ObjectUtils.objectifier.set( 'prop1.0', 123, myObj );
		// myObj.prop1[ 0 ] is now 123

		ObjectUtils.objectifier.set( 'prop2.string', 'hello', myObj );
		// myObj.prop2.string is now 'hello'
*/
objectifier.set = function (str, val, ctxObj) {
	ctxObj = ctxObj || window;
	var splitData = objectifier._getSplits(str, true);
	var result = objectifier._getProperty(splitData.splits, ctxObj);
	result[splitData.lastKey] = val;
};

// objectifier._getSplits and objectifier._getProperty  are used internally for objectifier.get and objectifier.set
objectifier._getSplits = function (str, popLast) {
	var splits = str.split('.');
	var lastKey = popLast ? splits.pop() : null;

	return {
		splits: splits,
		lastKey: lastKey
	};
};

objectifier._getProperty = function (splits, obj) {
	var result = obj || {};
	var i;
	var s;
	for (i = 0; result && (s = splits[i]); i++) {
		result = s in result ? result[s] : undefined;
	}
	return result;
};

/**
	@memberOf ObjectUtils
	@method clone
	@param {object} obj
		object to clone
	@returns {object}
		cloned object
	@desc
		Get a clone of an object without reference.
	@example
		//
		var oldObj = {
			a: 1,
			b: 2
		};

		var newObj = ObjectUtils.clone( oldObj );
		
		newObj.a = 'xyz';

		// oldObj.a is still 1
*/
function clone(obj) {
	if (Object.prototype.toString.call(obj) !== '[object Object]') {
		return obj;
	}

	var result = obj.constructor();
	for (var key in obj) {
		result[key] = clone(obj[key]);
	}

	return result;
}

/**
	@memberOf ObjectUtils
	@method objectDefault
	@param {object} obj
		an object contains custom properties to overide default properties
	@param {object} defaultObj
		an object contains properties to default to
	@param {boolean} recursive
		flag for if the property check should be executed recursively
		otherwise it will just be one level
	@desc
		Get an object using an object as a default, when a property doesn't in the object,
		it takes it from the default object if it exists. It also checks nested objects. 
		It is useful for setting up an object to store default values. 
	@example
		// our default object as a base set up
		var defaultObj = {
		    name: 'Person',
		    weight: 0,
		    age: 0,
		    gender: 'male',
		    locationDetail: {
		        state: 'CA',
		        city: 'Los Angeles'
		    }
		};
		
		// the custom object
		var customObj = {
		    name: 'Bob',
		    weight: 140,
		    age: 30,
		    locationDetail: {
		        city: 'Santa Monica',
		        street: 'Ocean Park'
		    }
		};

		var result = ObjectUtils.objectDefault( customObj, defaultObj, true );
		
		// your result object should look like
		{
			name: 'Bob',
		    weight: 140,
		    age: 30,
		    gender: 'male',
		    locationDetail: {
		        state: 'CA',
		        city: 'Santa Monica',
		        street: 'Ocean Park'
		    }
		}

		//if not recursive
		var result = ObjectUtils.objectDefault( customObj, defaultObj, false );

		// your result object should look like ( notice that it takes the whole locationDetail object )
		{
			name: 'Bob',
		    weight: 140,
		    age: 30,
		    gender: 'male',
		    locationDetail: {
		        city: 'Santa Monica',
		        street: 'Ocean Park'
		    }
		}

		needed to change function name to "objDefault" because declared
		at module-level so "default" would conflict with keyword
*/
function objDefault(obj, defaultObj, recursive) {
	obj = obj || {};

	var result = clone(obj);

	for (var key in defaultObj) {
		var item = defaultObj[key];

		if (result[key] === undefined) {

			result[key] = defaultObj[key];
		} else if (recursive) {

			if (Object.prototype.toString.call(item) === '[object Object]') {
				result[key] = objDefault(result[key], item, recursive);
			}
		}
	}

	return result;
}

exports.default = objDefault;
exports.objectifier = objectifier;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.toRgba = toRgba;
exports.toRgbaString = toRgbaString;
exports.saturation = saturation;
exports.contrast = contrast;
exports.tint = tint;
exports.transform = transform;
exports.invert = invert;
/**
	@class ColorUtils
	@desc
		This class contains methods for manipulating color.
*/

/**	
	@memberOf ColorUtils
	@method toRgba
	@param {string|object} color
		the color to convert, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@param {number} alpha
		the optional alpha value for the return string: overrides the alpha value of an RGBA color. 
		If undefined, will default to the alpha value of the color.
	@desc
		Returns an object containing r, g, b, a properties 
*/
function toRgba(color, alpha) {
	switch (typeof color === 'undefined' ? 'undefined' : _typeof(color)) {
		case 'object':
			color = color || {
				r: 0,
				g: 0,
				b: 0,
				a: 1
			};
			break;
		default:
			// convert from rgb() or rgba() string
			if (color.indexOf('rgb') >= 0) {
				color = color.substring(color.indexOf('(') + 1, color.lastIndexOf(')')).split(/,\s*/);
				color = {
					r: color[0],
					g: color[1],
					b: color[2],
					a: Number(color[3])
				};
			} else if (color.indexOf('#') >= 0) {
				// convert from HEX
				var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i.exec(color);
				color = result ? {
					r: parseInt(result[1], 16),
					g: parseInt(result[2], 16),
					b: parseInt(result[3], 16),
					a: result[4] ? Number(result[4], 16) : 1
				} : null;
			} else {
				// given a color name like 'red' or 'green'
				console.log('');
				trace("ERROR: ColorUtils.toRgba does not accept color names such as '" + color + "'. Use HEX or an RGB/A string or object per documentation");
				trace("Returning the color '" + color + "' without any alpha");
				console.log('');
				return color;
			}
			break;
	}
	if (!color.a) color.a = 1;
	if (alpha >= 0) color.a = alpha;

	return color;
}

/**	
	@memberOf ColorUtils
	@method toRgbaString
	@param {string|object} color
		the color to convert, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@param {number} alpha
		the optional alpha value for the return string: overrides the alpha value of an RGBA color. If undefined, will default to the alpha value of the color.
	@desc
		Returns the rgba() string representing a given color and optional alpha
*/
function toRgbaString(color, alpha) {
	var color = toRgba(color, alpha);
	return 'rgba(' + color.r + ',' + color.g + ',' + color.b + ',' + color.a + ')';
}

/**	
	@memberOf ColorUtils
	@method saturation
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to saturate, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {number} amount
		the total saturation of the from. 0 = grayscale, 1 = full, original color
	@property {string} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Change the color saturation of a given color; returns either an 'rgba()' string or an rgba{} object
	@example
		// convert to full grayscale
		ColorUtils.saturation({
			from: '#99aa33',
			amount: 0,
			format: 'object'
		});
		// returns {r: 86, g: 86, b: 86, a: 1}
*/
function saturation(obj) {
	delete obj.to;
	obj = _convert(obj);

	var returnColors = {};
	for (var val in obj.from) {
		if (val === 'a') {
			returnColors[val] = parseInt(obj.from[val]);
		} else {
			if (val === 'r') {
				var _high = 0;
				var _low = 255;
				for (var sub in obj.from) {
					if (parseInt(obj.from[sub]) > _high) _high = parseInt(obj.from[sub]);
					if (parseInt(obj.from[sub]) < _low) _low = parseInt(obj.from[sub]);
				}
			}
			returnColors[val] = Math.round(parseInt(obj.from[val]) * obj.amount + (1 - obj.amount) * ((_high + _low) / 2));
		}
	}return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}

/**	
	@memberOf ColorUtils
	@method contrast
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to begin with, represented as a HEX string:"#ff0000", an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.,
	@property {string|object} color
		synonymous with the from parameter
	@property {number} amount
		the contrast of the target. 0 = no contrast, 1 = original contrast, >1 = more and more, to infinity and beyond!
	@property {string|object} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Change the contrast of the target; returns either an 'rgba()' string or an rgba{} object
	@example
		// get your whites whiter and brights brighter
		ColorUtils.contrast({
			from: '#aa0011'
			amount: 1.3,
			format: 'object'
		});
		// returns {r: 221, g: 0, b: 22, a: 1}
*/
function contrast(obj) {
	delete obj.to;
	obj = _convert(obj);

	var returnColors = {};
	for (var val in obj.from) {
		returnColors[val] = val === 'a' ? parseInt(obj.from[val]) : Math.round(parseInt(obj.from[val]) * obj.amount);
	}return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}

/**	
	@memberOf ColorUtils
	@method tint
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to begin with, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {string|object} to
		the target color to tint to, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {number} amount
		the percentage of color to apply to the target. Defaults to 1, which is 100% color tinting
	@property {string|object} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string, 
		or an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Tint a color uniformly to a given color; returns either an 'rgba()' string or an rgba{} object
	@example
		// tint to green
		ColorUtils.tint({
			from: '#ffff00',
			to: '#00ff00',
			amount: 1,
			format: 'object'
		});
		// returns {r: 0, g: 255, b: 0, a: 1 };
		(end)

		(start code)
		// tint 50% to green
		ColorUtils.tint({
			from: '#ffff00',
			to: '#00ff00',
			amount: 0.5
		});
		// returns 'rgba(128, 128, 0, 1)'
*/
function tint(obj) {
	obj = _convert(obj);

	var returnColors = {};
	for (var val in obj.from) {
		returnColors[val] = val === 'a' ? parseInt(obj.from[val]) : Math.round(parseInt(obj.from[val]) + (parseInt(obj.to[val]) - parseInt(obj.from[val])) * obj.amount);
	}return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}

/**	
	@memberOf ColorUtils
	@method transform
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info
	@property {string|object} from
		the source color to begin with, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {string|object} to
		the target color to transform to, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {number} amount
		the percentage of color to apply to the target. Defaults to 1, which is 100% color transform
	@property {string} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@returns {string|object} 
		either an 'rgba()' string or an rgba{} object
	@desc
		Color Transforms a color to another color by pulling colors out of original source; 
	@example
		// remove all colors but greens
		ColorUtils.transform({
			from: '#ffff00',
			to: '#00ff00',
			amount: 1,
			format: 'object'
		});
		// returns {r: 0, g: 255, b: 0, a: 1 };


		// remove all colors but greens
		ColorUtils.transform({
			from: '#ffff00',
			to: '#00ff00',
			amount: 1
		});
		// returns 'rgba(0, 255, 0, 1)'
*/
function transform(obj) {
	obj = _convert(obj);

	var returnColors = {};
	for (var val in obj.from) {
		returnColors[val] = val === 'a' ? parseInt(obj.from[val]) : Math.round(parseInt(obj.from[val]) - (255 - parseInt(obj.to[val])) * obj.amount);
	}return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}

/**	
	@memberOf ColorUtils
	@method invert
	@param {object} obj
		an object with parameters for overall inversion, see Properties for more info
	@property {string|object} from
		the color to invert, represented as a HEX string:"#ff0000", 
		an RGB/A string: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)" ), 
		or an RGB/A object: {r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}.
	@property {string|object} color
		synonymous with the from parameter
	@property {string} format
		either 'object' or 'string' - which determines whether to return an 'rgba()' string or 
		an {r:, g:, b:, a:} object. If undefined, defaults to 'string'.
	@desc
		Invert the color; returns either an 'rgba()' string or an rgba{} object
	@example
		// invert and return result as object
		ColorUtils.invert({
			color: '#ff0000',
			format: 'object'
		});
		// returns {r: 0, g: 255, b: 255, a: 1 };

		// invert and return result as string
		ColorUtils.invert({
			color: '#ff0000'
		});
		// returns 'rgba(0, 255, 255, 1)'
*/
function invert(obj) {
	delete obj.to;
	delete obj.amount;
	obj = _convert(obj);

	var returnColors = {};
	for (var val in obj.from) {
		returnColors[val] = val === 'a' ? parseInt(obj.from[val]) : 255 - parseInt(obj.from[val]);
	}return obj.format === 'object' ? returnColors : toRgbaString(returnColors);
}

// PRIVATE FUNCTIONS
// ------------------------------------------------------------------
//
function _convert(obj) {
	// if the provided color information is not already in the {r:, g:, b:, a:} object format, we must convert it to that
	obj.from = obj.from || obj.color;
	if (obj.from && _typeof(obj.from) !== 'object') obj.from = ColorUtils.toRgba(obj.from);
	if (obj.to && _typeof(obj.to) !== 'object') obj.to = ColorUtils.toRgba(obj.to);
	//
	obj.amount = obj.amount === undefined ? 1 : obj.amount;

	return obj;
}

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.combine = combine;
exports.copy = copy;
exports.insertAt = insertAt;
exports.removeAt = removeAt;
exports.remove = remove;
exports.shuffle = shuffle;
exports.contains = contains;
/**
	@class ArrayUtils
	@desc
		This object contains additional methods for manipulating arrays.
*/

/** 
	@memberOf ArrayUtils
	@method combine
	@param {array} arr1
		first array
	@param {array} arr2
		second array appended to the first
	@desc
		A 'more friendly' concat function.
*/
function combine(arr1, arr2) {
	return arr1.concat(arr2);
}

/** 
	@memberOf ArrayUtils
	@method copy
	@param {array} array
		the array to duplicate
	@desc
		Creates a unique duplicate of the given array.
*/
function copy(array) {
	return array.slice();
}

/** 
	@memberOf ArrayUtils
	@method insertAt
	@param {array} array
		the array to modify
	@param {number} index
		the index to insert elements
	@param {arguments} arguments
		the elements to insert
	@desc
		Adds elements at a provided index. Returns a new array.
*/
function insertAt(array, index) {
	var a = array.slice(0, index);
	var b = array.slice(index, array.length);
	var args = Array.prototype.slice.call(arguments);
	var values = args.slice(2, args.length);
	return a.concat(values).concat(b);
}

/**
	@memberOf ArrayUtils
	@method removeAt
	@param {array} array
		the array to modify
	@param {number} index
		the index of the element to remove
	@desc
		Removes an element at a provided index. Returns a new array.
*/
function removeAt(array, index) {
	var a = copy(array);
	a.splice(index, 1);
	return a;
}

/**
	@memberOf ArrayUtils
	@method remove
	@param {array} array
		the array to modify
	@param {number|string} item
		the item to remove from the array
	@desc
		Removes all instances of an element from the given array. Returns a new array.
*/
function remove(array, item) {
	var _returnArray = array.slice();
	while (_returnArray.indexOf(item) >= 0) {
		_returnArray = removeAt(_returnArray, _returnArray.indexOf(item));
	}return _returnArray;
}

/**
	@memberOf ArrayUtils
	@method shuffle
	@param {array} array
		the array to modify
	@desc
		Shuffles the array into a random order.
*/
function shuffle(array) {
	return array.sort(function () {
		return Math.random() < .5 ? 1 : -1;
	});
}

/**
	@memberOf ArrayUtils
	@method contains
	@param {array} array
		the array to check
	@param {number|string} item
		the item to check for in the array
	@desc
		Determines if a given array contains a given element. Returns a boolean.
*/
function contains(array, item) {
	return array.indexOf(item) >= 0;
}

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});
exports.toRadians = toRadians;
exports.toDegrees = toDegrees;
exports.random = random;
exports.randomBoolean = randomBoolean;
exports.randomWeightedKey = randomWeightedKey;
exports.rel = rel;
exports.inRange = inRange;
exports.isNumber = isNumber;
exports.toNumber = toNumber;
exports.restrict = restrict;
exports.getAnglePoint = getAnglePoint;
exports.getAngle = getAngle;
exports.getDistance = getDistance;
/**
    @module MathUtils
    @desc
        Common math utilities.
*/

/**
		@memberOf MathUtils
		@method toRadians
		@param {number} degree
				An angle value as a degree
		@desc
				Converts an angle value from Degrees to Radians.
*/
function toRadians(degree) {
		return Math.PI / 180.0 * degree;
}

/**
		@memberOf MathUtils
		@method toDegrees
		@param {number} radian
				An angle value as a radian
		@desc
				Converts an angle value from Radians to Degrees.
*/
function toDegrees(radian) {
		return 180.0 / Math.PI * radian;
}

/**
		@memberOf MathUtils
		@method random
		@param {number} a
				the first value to find between
		@param {number} b
				the second value to find between 
		@param {number} increment
				optionaly set the increment of the random number. Defaults to 1
		@desc
				Get a random number between a range of two values, with an option to return to a decimal place. ( Note that
				 due to the inprecision of decimal number calculation in Javascript, you may not get a perfect result when 
				 your increment value is decimal, but the value will be close. A classic Javascript inpreciosn calculation example: 
				 0.1 + 0.2 = 0.30000000000000004 ) 
		@example
				MathUtils.random ( 1, 3, 1 );   // returns 1 or 2 or 3
				MathUtils.random ( 1, 3, 0.5 )  // returns 1, 1.5, 2, 2.5 or 3
*/
function random(a, b, increment) {
		b = b || 0;
		increment = increment != undefined && increment > 0 ? increment : 1;

		var min = Math.min(a, b);
		var max = Math.max(a, b);

		min = Math.ceil(min / increment) * increment;
		max = Math.floor(max / increment) * increment;

		var _num = min + Math.floor(Math.random() * ((max - min + increment) / increment)) / (1 / increment);
		return _num;
}

/**
		@memberOf MathUtils
		@method randomBoolean
		@param {number} weight
				change the outcome probabilty. Greater than .5 more likely true. Defaults to .5
		@desc
				Randomly returns a true or false;
*/
function randomBoolean(weight) {
		weight = weight || .5;
		return Math.random() < weight;
}

function randomWeightedKey(obj) {
		var keys = [];
		var vals = [0];
		for (var param in obj) {
				keys.push(param);
				vals.push(obj[param] + (vals[vals.length - 1] || 0));
		}
		//trace ( keys )
		//trace ( vals )        

		var rand = Math.random().toFixed(2) * 100;
		for (var k = 0; k < vals.length - 1; k++) {
				var isIn = M.inRange(rand, vals[k], vals[k + 1]);
				//trace ( '\t', k, rand, vals[k], vals[k+1], isIn )
				if (isIn) {
						//  trace ( '\t\t', keys[k])
						return keys[k];
				}
		}
}

/**
		@memberOf MathUtils
		@method rel
		@param {number} a0
				the first value to find between
		@param {number} a1
				the second value to find between
		@param {number} b0
				the first value to use as relative to a0
		@param {number} b1
				the second value to use as relative to a1
		@param {number} bX
				the value between b0 and b1
		@desc
				Calculates a value between two numbers relative to a value between 2 other numbers.
				Returns The proportion between a0 and a1 relative to the bX proportion between b0 and b1
		@example
				MathUtils.rel ( 0, 1, 10, 20, 15 ); // 0.5
				MathUtils.rel ( 100, 300, 3, 5, 3.5 ); // 150
*/
function rel(a0, a1, b0, b1, bX) {
		return (bX - b0) / (b1 - b0) * (a1 - a0) + a0;
}

/**
		@memberOf MathUtils
		@method inRange
		@param {number} val
				the number to check
		@param {number} a
				the first value of the range
		@param {number} b
				the second value of the range
		@returns {boolean}
		@desc
				Checks if a value is in the range of two numbers.
		@example
				MathUtils.inRange ( 5, 1, 10 ); // true
				MathUtils.inRange ( -5, 1, 10 ); // false
*/
function inRange(val, a, b) {
		var min = Math.min(a, b);
		var max = Math.max(a, b);
		return val <= max && val >= min;
}

/**
		@memberOf MathUtils
		@method isNumber
		@param {number} num
				the variable to check
		@desc
				Returns true if the passed var is a number.
*/
function isNumber(num) {
		return !isNaN(num);
}

/**
		@memberOf MathUtils
		@method toNumber
		@param {string} str
				the variable to convert
		@desc
				Takes a numerical string and converts it to number type.
*/
function toNumber(str) {
		return +str;
}

/* --------------------------------------------------------------------------------- */
// DEV 
/**
		@memberOf MathUtils
		@method restrict
		@desc
				Restricts a value to with a range.
*/
function restrict(num, min, max) {
		return Math.max(min, Math.min(max, num));
}

/**
		@memberOf MathUtils
		@method getAnglePoint
		@returns {array}
				containing an [xValue, yValue] given x1, y1, distance from that starting coordinate, 
				and angle (in *radians*) which the new point should be from the starting coordinate
		@desc
				Assumes original coordinate rotation is 0 radians
*/
function getAnglePoint(x, y, distance, angle) {
		var x = x + Math.cos(angle) * distance;
		var y = y + Math.sin(angle) * distance;

		return [x, y];
}

/**
		@memberOf MathUtils
		@method getAngle
		@retuns {number}
				The angle (in *radians*) between two points given x1, y1, x2, y2
*/
function getAngle(x1, y1, x2, y2) {
		x2 = x2 || 0;
		y2 = y2 || 0;
		return Math.atan2(y2 - y1, x2 - x1);
}

/**
		@memberOf MathUtils
		@method getDistance
		@returns {number}
				The distance between two points given x1, y1, x2, y2
*/
function getDistance(x1, y1, x2, y2) {
		x2 = x2 || 0;
		y2 = y2 || 0;
		return Math.sqrt((y2 - y1) * (y2 - y1) + (x2 - x1) * (x2 - x1));
}

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(149);
module.exports = __webpack_require__(0).Object.setPrototypeOf;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(12);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(150).set });

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _setPrototypeOf = __webpack_require__(76);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(8);
var anObject = __webpack_require__(22);
var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: _setPrototypeOf2.default || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(60)(Function.call, __webpack_require__(54).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }
    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _MixinBuilder = __webpack_require__(23);

var _LoaderBase = __webpack_require__(24);

var _LoaderSource = __webpack_require__(36);

var _LoaderTicker = __webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blank = function Blank() {
	(0, _classCallCheck3.default)(this, Blank);
};

var ImageLoader = function (_mix$with) {
	(0, _inherits3.default)(ImageLoader, _mix$with);

	function ImageLoader() {
		var _ref;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		(0, _classCallCheck3.default)(this, ImageLoader);

		var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = ImageLoader.__proto__ || (0, _getPrototypeOf2.default)(ImageLoader)).call.apply(_ref, [this].concat(args)));

		var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

		// used when only needing to render, such as writing into the DOM as markup <svg>
		_this.renderOnly = !!arg.renderOnly;
		_this.crossOrigin = arg.crossOrigin;
		return _this;
	}

	(0, _createClass3.default)(ImageLoader, [{
		key: 'load',
		value: function load() {
			var I = this;
			if (I.renderOnly) {
				I._setTicker({
					content: I.url,
					width: 0
				});
			} else {
				var img = new Image();
				img.id = I.fileName;
				img.crossOrigin = I.crossOrigin;
				img.onload = I._handleComplete.bind(I);
				img.onerror = I._handleFail;
				img.src = I.url;
			}
		}
	}, {
		key: '_handleComplete',
		value: function _handleComplete(event) {
			var I = this;
			// trace('ImageLoader "' + I.name + '" is Complete')
			I.dataRaw = event.target;
			I.onComplete.call(I.scope, I);
		}
	}]);
	return ImageLoader;
}((0, _MixinBuilder.mix)(Blank).with(_LoaderBase.LoaderBase, _LoaderSource.LoaderSource, _LoaderTicker.LoaderTicker));

exports.default = ImageLoader;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _MixinBuilder = __webpack_require__(23);

var _LoaderBase = __webpack_require__(24);

var _LoaderSource = __webpack_require__(36);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blank = function Blank() {
	(0, _classCallCheck3.default)(this, Blank);
};

var InlineLoader = function (_mix$with) {
	(0, _inherits3.default)(InlineLoader, _mix$with);

	function InlineLoader() {
		var _ref;

		(0, _classCallCheck3.default)(this, InlineLoader);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return (0, _possibleConstructorReturn3.default)(this, (_ref = InlineLoader.__proto__ || (0, _getPrototypeOf2.default)(InlineLoader)).call.apply(_ref, [this].concat(args)));
	}

	(0, _createClass3.default)(InlineLoader, [{
		key: 'load',
		value: function load() {
			var I = this;
			var elem = void 0;
			if (I.fileType == 'css') {
				elem = I._createCssLink();
			} else if (I.fileType == 'html') {
				elem = I._createHtmlLink();
			} else {
				elem = I._createScript();
			}
			elem.charset = 'utf-8';
			elem.onload = I._handleComplete.bind(I);
			elem.onerror = I._handleFail;
			I.fileType == 'css' || I.fileType == 'html' ? elem.href = this.url : elem.src = I.url;

			document.getElementsByTagName('head')[0].appendChild(elem);
		}
	}, {
		key: '_createCssLink',
		value: function _createCssLink() {
			var elem = document.createElement('link');
			elem.rel = 'stylesheet';
			elem.type = 'text/css';
			return elem;
		}
	}, {
		key: '_createHtmlLink',
		value: function _createHtmlLink() {
			var elem = document.createElement('link');
			elem.rel = 'import';
			// elem.async = ''
			return elem;
		}
	}, {
		key: '_createScript',
		value: function _createScript() {
			var elem = document.createElement('script');
			elem.type = 'text/javascript';
			return elem;
		}
	}, {
		key: '_handleComplete',
		value: function _handleComplete(event) {
			var I = this;
			// trace('InlineLoader "' + I.name + '" is Complete')
			I.dataRaw = event.target;
			I.onComplete.call(I.scope, I);
		}
	}]);
	return InlineLoader;
}((0, _MixinBuilder.mix)(Blank).with(_LoaderBase.LoaderBase, _LoaderSource.LoaderSource));

exports.default = InlineLoader;

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _MixinBuilder = __webpack_require__(23);

var _LoaderBase = __webpack_require__(24);

var _LoaderSource = __webpack_require__(36);

var _LoaderUtils = __webpack_require__(35);

var Utils = _interopRequireWildcard(_LoaderUtils);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blank = function Blank() {
	(0, _classCallCheck3.default)(this, Blank);
};

var DataLoader = function (_mix$with) {
	(0, _inherits3.default)(DataLoader, _mix$with);

	function DataLoader() {
		var _ref;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		(0, _classCallCheck3.default)(this, DataLoader);

		var _this = (0, _possibleConstructorReturn3.default)(this, (_ref = DataLoader.__proto__ || (0, _getPrototypeOf2.default)(DataLoader)).call.apply(_ref, [this].concat(args)));

		var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

		var D = _this;
		D.method = (arg.method || 'get').toLowerCase();
		D.query = arg.query || null;
		D.responseType = arg.responseType || null;
		return _this;
	}

	(0, _createClass3.default)(DataLoader, [{
		key: 'load',
		value: function load() {
			var D = this;
			// trace('DataLoader "' + D.name + '" requesting:\n\t->', D.url)

			var queryString = null;
			var isPost = D.method === 'post';

			D.req = Utils.createXMLHttpRequest();

			if (D.responseType != undefined) D.req.responseType = D.responseType;

			var url = D.url;

			if (D.query) {
				queryString = Utils.getParamsFromData(D.query);
				encodeURIComponent(queryString);
				if (!isPost) {
					url += '?' + queryString;
					queryString = null;
				}
			}

			if (D.cacheBuster) {
				url += D.query && !isPost ? '&' : '?';
				url += 'cb=' + new Date().getTime();
			}

			D.req.onreadystatechange = D._handleStateChange.bind(D);
			D.req.open(D.method, url, true);

			// Set Mime Type
			// NOTE: responseType has to be set AFTER the XmlHttpRequest.open() is called because IE is terrible
			switch (D.fileType) {
				case 'xml':
					if (D.req.overrideMimeType) D.req.overrideMimeType('text/xml');
					break;
				case 'json':
					if (D.req.overrideMimeType) D.req.overrideMimeType('application/json');
					break;
				case 'fba':
				case 'bin':
				case 'binary':
					D.responseType = D.req.responseType = 'arraybuffer';
					//D.req.overrideMimeType( 'text/plain charset=x-user-defined' )
					break;
			}

			if (D.method === 'post') {
				D.req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
			}

			D.req.send(queryString);
		}
	}, {
		key: '_handleStateChange',
		value: function _handleStateChange(target) {
			var D = this;
			switch (D.req.readyState) {
				case 3:
					if (this.req.status == 200) {
						D.dataRaw = D.responseType ? D.req.response : D.req.responseText;
						D._handleProgress(D);
					}
					break;
				case 4:
					if (D.req.status == 200) {
						D.dataRaw = D.responseType ? D.req.response : D.req.responseText;
						D._handleComplete(D);
					} else {
						D._handleFail({
							target: target
						});
					}
					break;
			}
		}
	}, {
		key: '_handleProgress',
		value: function _handleProgress() {
			var D = this;
			D.onProgress.call(D.scope, D);
		}
	}, {
		key: '_handleComplete',
		value: function _handleComplete() {
			var D = this;
			// trace('DataLoader "' + D.name + '" is Complete')
			D.onComplete.call(D.scope, D);
		}
	}]);
	return DataLoader;
}((0, _MixinBuilder.mix)(Blank).with(_LoaderBase.LoaderBase, _LoaderSource.LoaderSource));

exports.default = DataLoader;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = __webpack_require__(3);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _createClass2 = __webpack_require__(9);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(10);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(11);

var _inherits3 = _interopRequireDefault(_inherits2);

var _classCallCheck2 = __webpack_require__(4);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _MixinBuilder = __webpack_require__(23);

var _LoaderBase = __webpack_require__(24);

var _LoaderSource = __webpack_require__(36);

var _LoaderTicker = __webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blank = function Blank() {
	(0, _classCallCheck3.default)(this, Blank);
};

var FontLoader = function (_mix$with) {
	(0, _inherits3.default)(FontLoader, _mix$with);

	function FontLoader() {
		var _ref;

		(0, _classCallCheck3.default)(this, FontLoader);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return (0, _possibleConstructorReturn3.default)(this, (_ref = FontLoader.__proto__ || (0, _getPrototypeOf2.default)(FontLoader)).call.apply(_ref, [this].concat(args)));
	}

	(0, _createClass3.default)(FontLoader, [{
		key: 'load',
		value: function load() {
			var F = this;

			// trace('FontLoader "' + F.name + '" requesting:\n\t->', F.url)

			F.fileName = F.fileName.split('.')[0];

			var assembledFontRule = "@font-face { font-family: " + F.fileName + "; src: url(" + F.url + ") format('truetype'); }";

			var getSheet = document.getElementById('RED_fontStyleSheet');
			if (getSheet) {
				getSheet.innerHTML += assembledFontRule;
			} else {
				var styleScript = document.createElement('style');
				styleScript.type = 'text/css';
				styleScript.media = 'screen';
				styleScript.id = 'RED_fontStyleSheet';
				styleScript.appendChild(document.createTextNode(assembledFontRule));
				document.getElementsByTagName('head')[0].appendChild(styleScript);
			}

			F._setTicker({
				content: " !\"\\#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_`abcdefghijklmnopqrstuvwxyz{|}~",
				css: 'position:absolute; top:-1000px; font-size:100px; font-family:san-serif; font-variant:normal; font-style:normal; font-weight:normal; letter-spacing:0; white-space:nowrap;',
				font: F.fileName
			});
		}
	}, {
		key: '_handleTickerComplete',
		value: function _handleTickerComplete(node) {
			var F = this;
			// added timeout to leave a rendered textfield on stage for initial textfields
			// to return proper offsetWidth values
			setTimeout(function () {
				// leave the test textfield temporarily to allow dom 
				// to have a reference to rendered characters. hack?
				F._removeTickerNode(node);
			}, 300);

			F._handleComplete();
		}
	}, {
		key: '_handleComplete',
		value: function _handleComplete(event) {
			var F = this;
			// trace('FontLoader "' + F.name + '" is Complete')
			F.dataRaw = F.fileName;
			F.onComplete.call(F.scope, F);
		}
	}]);
	return FontLoader;
}((0, _MixinBuilder.mix)(Blank).with(_LoaderBase.LoaderBase, _LoaderSource.LoaderSource, _LoaderTicker.LoaderTicker));

exports.default = FontLoader;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Styles_legacy = exports.RecurringDates = exports.Expandable_legacy = exports.DcsExpandable = exports.DateStates = exports.Align_old = exports.DateUtils = undefined;

var _DateUtils = __webpack_require__(55);

var _DateUtils2 = _interopRequireDefault(_DateUtils);

var _Align_old = __webpack_require__(156);

var _Align_old2 = _interopRequireDefault(_Align_old);

var _DateStates = __webpack_require__(168);

var _DateStates2 = _interopRequireDefault(_DateStates);

var _DcsExpandable = __webpack_require__(169);

var _DcsExpandable2 = _interopRequireDefault(_DcsExpandable);

var _Expandable_legacy = __webpack_require__(170);

var _Expandable_legacy2 = _interopRequireDefault(_Expandable_legacy);

var _RecurringDates = __webpack_require__(174);

var _RecurringDates2 = _interopRequireDefault(_RecurringDates);

var _Styles_legacy = __webpack_require__(175);

var _Styles_legacy2 = _interopRequireDefault(_Styles_legacy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Markup_legacy from './lib/Markup_legacy'
exports.DateUtils = _DateUtils2.default;
exports.Align_old = _Align_old2.default;
exports.DateStates = _DateStates2.default;
exports.DcsExpandable = _DcsExpandable2.default;
exports.Expandable_legacy = _Expandable_legacy2.default;
exports.RecurringDates = _RecurringDates2.default;
exports.Styles_legacy = _Styles_legacy2.default;

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adView = __webpack_require__(20);

var Align_old = function () {

	/*	Method: move()
 	Moves the source DOM element horizontally and vertically, relative to its parent according to provided mode. The constants allow for picking which coordinate to apply.  
 		Parameters:
 		mode 	- The align type to apply
 		source 	- dom element
 		offset	- an optional amount to move the element after initial alignment, default to 0 
 		offset2	- a second optional offset, applies when aligning on both directions, default to 0 
 	
 	(start code)
 		Align.move ( Align.CENTER, myDiv );
 			Align.move ( Align.RIGHT, myDiv, -4 );
 			Align.move ( Align.BOTTOM, myDiv, -10 );
 			Align.move ( Align.BOTTOM_RIGHT, myDiv, -4, -10 );
 			Align.move ( Align.CENTER, myTF.textfield, 0, 15 );
 	(end code)
 */
	function move(mode, source, offset, offset2) {
		//trace( 'Align.move()', mode, source, offset, offset2 );
		_adView.Styles.setCss(_adView.Markup.getElement(source), calculate(mode, source, offset, offset2));
	}

	/*	Method: moveX()
 	Moves the source DOM element horizontally relative to its parent according to provided mode. The constants allow for picking which coordinate to apply.  
 		Parameters:
 		mode 	- The align type to apply
 		source 	- dom element
 		offset	- an optional amount to move the element after initial alignment, default to 0 
 	
 	(start code)
 		Align.move ( Align.CENTER, myDiv );
 			Align.move ( Align.RIGHT, myDiv, -4 );
 	(end code)
 */
	function moveX(mode, source, offset) {
		if (mode == _adView.Align.TOP || mode == _adView.Align.BOTTOM) {
			return;
		}
		var obj = calculate(mode, source, offset);
		delete obj.y;
		_adView.Styles.setCss(_adView.Markup.getElement(source), obj);
	}

	/*	Method: moveY()
 	Moves the source DOM element vertically relative to its parent according to provided mode. The constants allow for picking which coordinate to apply.  
 		Parameters:
 		mode 	- The align type to apply
 		source 	- dom element
 		offset	- an optional amount to move the element after initial alignment, default to 0 
 	
 	(start code)
 		Align.move ( Align.CENTER, myDiv );
 			Align.move ( Align.BOTTOM, myDiv, -4 );
 	(end code)
 */
	function moveY(mode, source, offset) {
		if (mode == _adView.Align.LEFT || mode == _adView.Align.RIGHT) {
			return;
		}
		var off1 = 0;
		var off2 = offset;
		if (mode == _adView.Align.TOP || mode == _adView.Align.BOTTOM) {
			off1 = offset;
		}

		var obj = calculate(mode, source, off1, off2);
		delete obj.x;
		_adView.Styles.setCss(_adView.Markup.getElement(source), obj);
	}

	/*	Method: calculate()
 	Calculates the amount to move, but does not apply it to the source DOM element relative to its parent according to provided mode. This applies to horizontal and vertical movement. The constants allow for picking which coordinate to apply.  
 		Parameters:
 		mode 	- The align type to apply
 		source 	- dom element
 		offset	- an optional amount to move the element after initial alignment, default to 0 
 		offset2	- a second optional offset, applies when aligning on both directions, default to 0 
 		Note:
 		
 	(start code)
 		Align.calculate ( Align.CENTER, myDiv );
 			Align.calculate ( Align.TOP_RIGHT, myDiv, -4, -10 );
 	(end code)
 */
	function calculate(mode, source, offset, offset2) {
		var elem = _adView.Markup.getElement(source);
		offset = offset || 0;
		offset2 = offset2 || 0;
		var off = [offset, offset2];
		if (mode == _adView.Align.TOP || mode == _adView.Align.BOTTOM) {
			off = [0, offset];
		} else if (mode == _adView.Align.LEFT || mode == _adView.Align.RIGHT) {
			off[1] = 0;
		}

		return {
			x: horizontal(mode, elem.offsetWidth, elem.parentNode.offsetWidth) + off[0],
			y: vertical(mode, elem.offsetHeight, elem.parentNode.offsetHeight) + off[1]
		};
	}

	/*	Method: horizontal()
 	Calculates the x value needed to align the source width within the target width. NOT used for DOM elements, is a pure math.
 		Parameters:
 		mode 	- The align type to apply
 		source 	- a Number representing the source width: the child
 		target 	- a Number representing the target width: the parent
 	
 	(start code)
 		var x = Align.horizontal ( Align.CENTER, obj.width, container.width );
 	(end code)
 */
	function horizontal(mode, source, target) {

		mode = mode || _adView.Align.CENTER;
		var x = 0;
		switch (mode) {
			case _adView.Align.BOTTOM_RIGHT:
			case _adView.Align.RIGHT:
			case _adView.Align.TOP_RIGHT:
				x = target - source;
				break;
			case _adView.Align.CENTER:
			case _adView.Align.TOP:
			case _adView.Align.BOTTOM:
				x = (target - source) / 2;
				break;
			default:
				x = 0;
		}

		trace(source, target, x);
		return x;
	}

	/*	Method: vertical()
 	Calculates the y value needed to align the source height within the target height. NOT used for DOM elements, is a pure math.
 		Parameters:
 		mode 	- The align type to apply
 		source 	- a Number representing the source width: the child
 		target 	- a Number representing the target width: the parent
 	
 	(start code)
 		var y = Align.vertical ( Align.CENTER, obj.width, container.width );
 	(end code)
 */
	function vertical(mode, source, target) {
		mode = mode || _adView.Align.CENTER;
		var y = 0;
		switch (mode) {
			case _adView.Align.BOTTOM:
			case _adView.Align.BOTTOM_LEFT:
			case _adView.Align.BOTTOM_RIGHT:
				y = target - source;
				break;
			case _adView.Align.CENTER:
			case _adView.Align.LEFT:
			case _adView.Align.RIGHT:
				y = (target - source) / 2;
				break;
			default:
				y = 0;
		}
		return y;
	}

	return {
		/*	Constant: BOTTOM
  	'alignBottom' */
		BOTTOM: 'alignBottom',

		/*	Constant: BOTTOM_LEFT
  	'alignBottomLeft' */
		BOTTOM_LEFT: 'alignBottomLeft',

		/*	Constant: BOTTOM_RIGHT
  	'alignBottomRight' */
		BOTTOM_RIGHT: 'alignBottomRight',

		/*	Constant: CENTER
  	'alignCenter' */
		CENTER: 'alignCenter',

		/*	Constant: LEFT
  	'alignLeft' */
		LEFT: 'alignLeft',

		/*	Constant: RIGHT
  	'alignRight' */
		RIGHT: 'alignRight',

		/*	Constant: TOP
  	'alignTop' */
		TOP: 'alignTop',

		/*	Constant: TOP_LEFT
  	'alignTopLeft' */
		TOP_LEFT: 'alignTopLeft',

		/*	Constant: TOP_RIGHT
  	'alignTopRight' */
		TOP_RIGHT: 'alignTopRight',

		move: move,
		moveX: moveX,
		moveY: moveY,
		calculate: calculate,

		horizontal: horizontal,
		vertical: vertical,

		// DEPRECIATED : backward Compatiblity
		/* Method: centerHorizontal()
  		DEPRECIATED : Centers an element horizontally within its parent.
  	
  	Parameters:	
  		target 		-	dom element
  		offset		-	an optional amount to move the element after initial alignment, default to 0 
  		setValue	- 	an optional Boolean, set to false will only return the target value without assigning it to the target element
  		Returns:
  		The targeted position left value
  		DEPRECIATED: 
  		 Use Align.move( Align.CENTER )
  */
		centerHorizontal: function centerHorizontal(target, offset, setValue) {
			return setValue ? calculate(_adView.Align.CENTER, target, offset).left : moveX(_adView.Align.CENTER, target, offset);
		},
		/* Method: centerVertical()
  		DEPRECIATED : Centers an element vertically within its parent.
  	
  	Parameters:		
  		target 		-	dom element
  		offset		-	an optional amount to move the element after initial alignment, default to 0  
  		setValue	- 	an optional Boolean, set to false will only return the target value without assigning it to the target element
  		Returns:
  		The targeted position left value
  		DEPRECIATED: 
  		 Use Align.move( Align.CENTER )
  */
		centerVertical: function centerVertical(target, offset, setValue) {
			var elem = _adView.Markup.getElement(target);
			offset = offset || 0;
			var val = vertical(_adView.Align.CENTER, elem.offsetHeight, elem.parentNode.offsetHeight) + offset;
			return setValue ? val : _adView.Styles.setCss(elem, { top: val });
		},
		/* Method: left()
  		DEPRECIATED : Puts an element to the left in its parent.
  	
  	Parameters:		
  		target 		-	dom element
  		offset		-	an optional amount to move the element after initial alignment, default to 0 
  		setValue	- 	an optional Boolean, set to false will only return the target value without assigning it to the target element
  		Returns:
  		The targeted position left value
  		DEPRECIATED: 
  		 Use Align.move( Align.LEFT )
  */
		left: function left(target, offset, setValue) {
			return setValue ? calculate(_adView.Align.LEFT, target, offset).left : moveX(_adView.Align.LEFT, target, offset);
		},
		/* Method: right()
  		DEPRECIATED : Puts an element to the right in its parent.
  	
  	Parameters:	
  		target 		-	dom element
  		offset		-	an optional amount to move the element after initial alignment, default to 0 
  		setValue	- 	an optional Boolean, set to false will only return the target value without assigning it to the target element
  		Returns:
  		The targeted position right value
  		DEPRECIATED: 
  		 Use Align.move( Align.RIGHT )
  */
		right: function right(target, offset, setValue) {
			return setValue ? calculate(_adView.Align.RIGHT, target, offset).left : moveX(_adView.Align.RIGHT, target, offset);
		},
		/* Method: top()
  		DEPRECIATED : Puts an element to the top in its parent.
  	
  	Parameters:		
  		target 		-	dom element
  		offset		-	an optional amount to move the element after initial alignment, default to 0  
  		setValue	- 	an optional Boolean, set to false will only return the target value without assigning it to the target element
  		Returns:
  		The targeted position top value
  		DEPRECIATED: 
  		 Use Align.move( Align.TOP )
  */
		top: function top(target, offset, setValue) {
			return setValue ? calculate(_adView.Align.TOP, target, offset).top : moveY(_adView.Align.TOP, target, offset);
		},

		/* Method: bottom()
  		DEPRECIATED : Puts an element to the bottom of its parent.
  	
  	Parameters:		
  		target 		-	dom element
  		offset		-	an optional amount to move the element after initial alignment, default to 0 
  		setValue	- 	an optional Boolean, set to false will only return the target value without assigning it to the target element
  		Returns:
  		The targeted position bottom value
  		DEPRECIATED: 
  		 Use Align.move( Align.BOTTOM )
  */
		bottom: function bottom(target, offset, setValue) {
			return setValue ? calculate(_adView.Align.BOTTOM, target, offset).top : moveY(_adView.Align.BOTTOM, target, offset);
		}
	};
}(); /* ----------------------------------------------------------------------------------------------------------------------------------------------------------
     	Class: 	Align_old
     
     	WARN:
     		This class has been depreciated. It is only used for migrating old ads when there is a time sensitive
     		deadline.  Otherwise, old units that are migrated should have their Align methods updated to use the
     		<Align> class.
     
     	Description:
     		Utilities for aligning objects.
     	---------------------------------------------------------------------------------------------------------------------------------------------------------- */
exports.default = Align_old;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Markup = __webpack_require__(37);

var Markup = _interopRequireWildcard(_Markup);

var _Styles = __webpack_require__(38);

var Styles = _interopRequireWildcard(_Styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	@class Align
	@desc
		Utility for aligning objects, which works for DOM elements and {@link CanvasDrawer} elements.  The x and y alignments are split up
		into separate assignemnts in one call. There are extra parameters that can be passed into the object to handle more complex logic.
		<br><br>

		<b>Notes:</b>
			<br>
			Align, by default, snaps to a full pixel. To change this, see <b>Sample 3</b> ( snap: false )
			<br><br>

		<b>Sample 1</b>
		<codeblock>
			// simple classic usage
			Align.set( myDiv, Align.LEFT ); // only align left
			Align.set( myDiv, Align.BOTTOM ); // only align bottom
			Align.set( myDiv, Align.CENTER ); // align both x and y to the center
		</codeblock>
		<br><br>
		
		<b>Sample 2</b>
		<codeblock>
			// simply align the x and y seperately
			Align.set( myDiv, {
				x: Align.RIGHT,
				y: Align.BOTTOM
			});
		</codeblock>
		<br><br>

		<b>Sample 3</b>
		<br>
		<b>'against'</b> is an object to which we align our given object, like making myDiv perfectly centered against myOtherDiv
		<br>
		<b>'against'</b> could also be a number, as in align myDiv centered against adParams.adWidth / 2
		<br>
		<br>
		<b>'outer'</b> is an optional complex parameter which determines how we align to the 'against' object; default to false
		<br>
		If <b>'against'</b> is a number, then <b>'outer'</b> will have no affect.
		<br>
		<br>
		<img src="../docs_images/align/align_c.jpg" />
		<br><br>
		<codeblock>
			// complex alignment, align in relation to another div with an offset shift of 10 pixels, without snapping to a whole pixel
			Align.set( myDiv, {
				x: {
					type: Align.RIGHT,
					against: myOtherDiv
					offset: 10,
					outer: true
				},
				y: {
					type: Align.BOTTOM,
					offset: 14
				},
				snap: false
			});
		</codeblock>
		<br><br>

		<b>Sample 4</b>
		<codeblock>
			// complex alignment, align in relation to a fixed number with an offset shift of 10 pixels
			Align.set( myDiv, {
				x: {
					type: Align.RIGHT,
					against: 200
					offset: 10,
				},
				y: {
					type: Align.BOTTOM,
					against: 30
					offset: 14
				},
			});
		</codeblock>
		<br><br>
*/
var Align = function () {

	/* 
 	TODO - percentage vs px?
 */

	var _rect = [{
		x: 'offsetWidth',
		y: 'offsetHeight',
		parent: 'parentNode'
	}, {
		x: 'width',
		y: 'height',
		parent: 'stage'
	}];

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS
	function get(source, arg) {
		var elem = source.canvas || Markup.get(source);
		var obj = {};
		var snap = arg.snap !== false;
		var sourceRect = isDomElement(source) ? 0 : 1;

		if (typeof arg == 'string') arg = calculate(arg);

		for (var xy in arg) {
			if (xy == 'x' || xy == 'y') {

				var params = arg[xy];

				// the x or y is null or undefined, so skip this pass of the loop
				if (!params) continue;

				if (typeof params == 'string') params = {
					type: params
				};

				var against;
				var againstDimension;
				var againstX = 0;
				var againstNumber = false;
				var offset = params.offset || 0;

				var _givenAgainst;
				if (params.against !== undefined) {
					_givenAgainst = true;
					against = params.against;
					var againstRect = 0;

					if (isDomElement(against)) {
						if (against.canvas) againstRect = 1;else againstX = Styles.getCss(against, xy);
					} else if (typeof against === 'number') {
						againstNumber = true;
						againstX = against;
					} else {
						againstX = against[xy];
						againstRect = 1;
					}

					againstDimension = _rect[againstRect][xy];

					if (params.type === Align.CENTER) arg[xy].outer = false;
				} else {
					against = elem[_rect[sourceRect].parent];
					againstDimension = _rect[sourceRect][xy];
				}

				var widthOrHeight = elem[_rect[sourceRect][xy]];

				switch (source._type) {
					case 'arc':
					case 'path':
						switch (params.type) {
							case Align.CENTER:
								widthOrHeight = 0;
								break;
							default:
								offset += widthOrHeight / 2;
								break;
						}
						break;
					case 'text':
						if (xy === 'x') {
							switch (source.alignText) {
								case 'center':
									widthOrHeight = 0;
								case 'right':
									widthOrHeight *= -1;
							}
						}
						break;
				}

				// checks if qualityScale is available which means it is a CanvasDrawer or CanvasDrawer's canvas, 
				// without checking if it is the module directly
				widthOrHeight /= source.qualityScale || 1;

				var pos = calculate(params.type, widthOrHeight, againstNumber ? 0 : against[againstDimension] / (against.qualityScale || 1), !againstNumber && !!arg[xy].outer);

				if (pos != null) {
					pos += againstX + offset;
					obj[xy] = snap ? Math.round(pos) : pos;
				}
			}
		}

		return obj;
	}

	function set(source, arg) {
		var obj = get(source, arg);

		if (isDomElement(source)) {
			var elem = source.canvas || Markup.get(source);
			Styles.setCss(elem, obj);
		} else {
			for (var prop in obj) {
				source[prop] = obj[prop];
			}
		}

		return obj;
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS	
	function calculate(mode, source, target, outer) {
		//trace ( 'calculate()', mode, source, target, outer )
		// when only passing a string, this will create {x/y} from string
		var isConvert = arguments.length == 1;

		// Kenny Version 1.0
		/*switch ( mode ){
  	case 'alignBottom' :
  		if ( outer ) 
  			source = 0
  		if ( !isConvert )
  			return target - source;
  	
  	case 'alignTop' :
  		return isConvert ? { y:mode } : outer ? -source : 0 ;
  					
  		case 'alignRight' :
  		if ( outer ) 
  			target = 0
  		if ( !isConvert )
  			return target - source;
  				
  	case 'alignLeft' :
  		return isConvert ? { x:mode } : outer ? target : 0 ;
  		case 'alignCenter' :
  		if ( outer ) 
  			target = 0
  		return isConvert ? { x:mode, y:mode } : ( target - source ) / 2;
  	
  	default :
  		return null;
  }*/

		// Andrew Version 1.0
		/*switch ( mode ) {
  	case 'alignBottom':
  		if ( outer )
  			source = target + source
  		if ( !isConvert )
  			return target - source;
  		case 'alignTop':
  		return isConvert ? {
  			y: mode
  		} : outer ? target : 0;
  			case 'alignRight':
  		if ( outer )
  			target = 0
  		if ( !isConvert )
  			return target - source;
  		case 'alignLeft':
  		return isConvert ? {
  			x: mode
  		} : outer ? target : 0;
  		case 'alignCenter':
  		if ( outer )
  			target = 0
  		return isConvert ? {
  			x: mode,
  			y: mode
  		} : ( target - source ) / 2;
  		default:
  		return null;
  }*/

		// Andrew Version 2.0
		switch (mode) {
			case 'alignBottom':
				if (outer) source = 0;
				if (!isConvert) return target - source;

			case 'alignTop':
				return isConvert ? {
					y: mode
				} : outer ? -source : 0;

			case 'alignRight':
				if (outer) target += source;
				if (!isConvert) return target - source;

			case 'alignLeft':
				return isConvert ? {
					x: mode
				} : outer ? -source : 0;

			case 'alignCenter':
				if (outer) target = 0;
				return isConvert ? {
					x: mode,
					y: mode
				} : (target - source) / 2;

			default:
				return null;
		}
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function isDomElement(elem) {
		return elem instanceof HTMLElement || elem.canvas != undefined;
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	return {
		/**
  	@memberof Align
  	@const {string} BOTTOM
  		Synonymous with "alignBottom" 
  */
		BOTTOM: 'alignBottom',

		/**
  	@memberof Align
  	@const {string} CENTER
  		Synonymous with "alignCenter" 
  */
		CENTER: 'alignCenter',

		/**
  	@memberof Align
  	@const {string} LEFT
  		Synonymous with "alignLeft" 
  */
		LEFT: 'alignLeft',

		/**
  	@memberof Align
  	@const {string} RIGHT
  		Synonymous with "alignRight" 
  */
		RIGHT: 'alignRight',

		/**
  	@memberof Align
  	@const {string} TOP
  		Synonymous with "alignTop" 
  */
		TOP: 'alignTop',

		/**
  	@memberof Align
  	@const {string} BOTTOM_LEFT
  		Synonymous with "alignBottomLeft", used for {@link UITextField.alignText} 
  */
		BOTTOM_LEFT: 'alignBottomLeft',

		/**
  	@memberof Align
  	@const {string} BOTTOM_RIGHT
  		Synonymous with "alignBottomRight" used for {@link UITextField.alignText} 
  */
		BOTTOM_RIGHT: 'alignBottomRight',

		/**
  	@memberof Align
  	@const {string} TOP_LEFT
  		Synonymous with "alignTopLeft" used for {@link UITextField.alignText} 
  */
		TOP_LEFT: 'alignTopLeft',

		/**
  	@memberof Align
  	@const {string} TOP_RIGHT
  		Synonymous with "alignTopRight" used for {@link UITextField.alignText} 
  */
		TOP_RIGHT: 'alignTopRight',

		/**
  	@memberof Align
  	@method get
  	@desc
  		Calculates but does not apply the amount the source element will move horizontally and/or vertically, relative to its parent 
  		according to provided mode. The constants allow for picking which coordinate to apply.  
  */
		get: get,

		/**
  	@memberof Align
  	@method set
  	@desc
  		Moves the source element horizontally and/or vertically, relative to its parent according to provided mode. The constants 
  		allow for picking which coordinate to apply.  
  */
		set: set,

		// used internally by Flipbook
		calculate: calculate
	};
}();
exports.default = Align;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Styles = __webpack_require__(38);

var Styles = _interopRequireWildcard(_Styles);

var _Markup = __webpack_require__(37);

var Markup = _interopRequireWildcard(_Markup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	@class Clamp
	@desc
		Utility for resizing a DOM element to the size of all its content, sort of like shrink wrapping.
		<br><br>
		
		This will clamp the bounds and potentially move the x and y so that visually the content stays where it is. There is the option to clamp 
		both horizontally and vertically, or you can just do one. Additionally there is a optional object to add some buffer space on any of the sides.

	@example
		// clamp both directions
		Clamp.set( View.main.myDiv, Clamp.XY );
		
		// clamp both directions while adding some buffer padding on each side
		Clamp.set( View.main.myDiv, Clamp.XY, {
			top : 5,
			left : 10,
			bottom : 5,
			right : 10
		});

		// clamp only horizontally and add a buffer padding on the left
		Clamp.set( View.main.myDiv, Clamp.X, {
			left : 10
		});
*/
var Clamp = function () {

	var _rect = {
		x: ['offsetWidth', 'width', 'left', 'right'],
		y: ['offsetHeight', 'height', 'top', 'bottom']

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// PUBLIC METHODS
	};function set(source, type, buffer, move) {
		var elem = Markup.get(source);
		move = move !== false;

		var children = elem.childNodes;
		var childCoordinates = [];

		var direction = {};
		if (/(x)/gi.exec(type)) direction.x = {};
		if (/(y)/gi.exec(type)) direction.y = {};

		for (var i = 0; i < children.length; i++) {
			var child = children[i];

			childCoordinates[i] = {};

			for (var xy in direction) {

				var xyValue = Styles.getCss(child, xy);
				var whValue = child[_rect[xy][0]];

				var add = xyValue + whValue;

				var xyDirection = direction[xy];

				if (i == 0) {
					xyDirection.min = xyValue;
					xyDirection.max = add;
				}

				if (xyValue < xyDirection.min) xyDirection.min = xyValue;

				if (xyDirection.max < add) xyDirection.max = add;

				childCoordinates[i][xy] = xyValue;
			}
		}

		// process the optional buffer
		var _buffer = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		};

		if (buffer) {
			for (var prop in _buffer) {
				_buffer[prop] = isNaN(buffer) ? buffer[prop] || 0 : buffer;
			}
		}

		// resize and move the container
		var css = {};
		for (var xy in direction) {
			var d = direction[xy];

			if (move) css[xy] = d.min + Styles.getCss(elem, xy) - _buffer[_rect[xy][2]];

			css[_rect[xy][1]] = d.max - d.min + _buffer[_rect[xy][2]] + _buffer[_rect[xy][3]];
		}

		Styles.setCss(elem, css);

		// move all the children
		for (i = 0; i < children.length; i++) {
			var child = children[i];
			var css = {};

			for (var xy in direction) {
				css[xy] = childCoordinates[i][xy] - direction[xy].min + _buffer[_rect[xy][2]];
			}

			Styles.setCss(child, css);
		}
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	return {
		/**
  	@memberof Clamp
  	@const {string} X
  		Synonymous with "clampX" - clamp on the horizontal direction only 
  */
		X: 'clampX',

		/**
  	@memberof Clamp
  	@const {string} Y
  		Synonymous with "clampY" - clamp on the vertical direction only 
  */
		Y: 'clampY',

		/**
  	@memberof Clamp
  	@const {string} XY
  		Synonymous with "clampXY" - clamp on all sides 
  */
		XY: 'clampXY',

		/**
  	@memberof Clamp
  	@method set
  	@param {element} source
  		The DOM element to resize and move.
  	@param {string} type
  		A String/Constant representing what directions to clamp on.
  	@param {object} buffer
  		(optional) An Object that has the values to add buffer padding to each side. See properties for more info:
  			@property {number} buffer.left
  			Amount of left padding
  		@property {number} buffer.right
  			Amount of right padding
  		@property {number} buffer.top
  			Amount of top padding
  		@property {number} buffer.bottom
  			Amount of bottom padding
  	@desc
  		Resizes and moves the source element horizontally and/or vertically, relative to all its children. 
  */
		set: set
	};
}();

exports.default = Clamp;

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class Countdown
	@desc
		<span style="color:#ff0000"><b>WARN:</b><br>
		This class has been deprecated.  See the DateSchedule.getCountdown()
		</span>

		<br><br>

		A utility that maintains the remaining days, hours, minutes, and seconds to the target date.
	@example
		var countdown = new Countdown();
		countdown.init( '2015-08-28 12:00:00', DateUtils.TZ_LOCAL );
		var intervalId = setInterval( updateClock, 1000 );
		function updateClock() {
			if( countdown.isComplete())
				clearInterval( intervalId );
			trace( 'countdown clock: ' + 
				TextUtils.pad( countdown.getDays(), 2 ) + ':' + 
				TextUtils.pad( countdown.getHours(), 2 ) + ':' + 
				TextUtils.pad( countdown.getMinutes(), 2 ) + ':' + 
				TextUtils.pad( countdown.getSeconds(), 2 )
			);
		}	
*/
var Countdown = function Countdown() {

	/** 
 	@memberof Countdown
 	@method init
 	@param {Date} _targetDate
 		a date in the future
 	@param {object} _tzDesignation
 		{@link DateUtils} constant representing a timezone
 	@desc
 		Starts a timer that will dispatch an update event every second counting down to the specified date
 */
	this.init = function (_targetDate, _tzDesignation) {
		trace('Countdown.init(), to: ' + _targetDate + ', tzDesignation: ' + _tzDesignation);
		this.targetDate = typeof _targetDate == 'Date' ? _targetDate : DateUtils.parseToDate(_targetDate);
		this.tzDesignation = _tzDesignation || DateUtils.TZ_LOCAL;
		this.complete = false;
	};

	/** 
 	@memberof Countdown
 	@method isComplete
 	@returns {boolean}
 */
	this.isComplete = function () {
		return this.complete;
	};

	/** 
 	@memberof Countdown
 	@method getDays
 	@returns {number}
 		The number of days left until the target-date. 
 */
	this.getDays = function () {
		var remaining = this.update();
		return remaining ? Math.floor(remaining.days) : 0;
	};

	/** 
 	@memberof Countdown
 	@method getHours
 	@returns {number}
 		The number of hours left until the target-date. 
 */
	this.getHours = function () {
		var remaining = this.update();
		return remaining ? Math.floor(remaining.hours) : 0;
	};

	/** 
 	@memberof Countdown
 	@method getMinutes
 	@returns {number}
 		The number of minutes left until the target-date. 
 */
	this.getMinutes = function () {
		var remaining = this.update();
		return remaining ? Math.floor(remaining.minutes) : 0;
	};

	/** 
 	@memberof Countdown
 	@method getSeconds
 	@returns {number}
 		The number of seconds left until the target-date. 
 */
	this.getSeconds = function () {
		var remaining = this.update();
		return remaining ? Math.floor(remaining.seconds) : 0;
	};

	/* -- INTERNAL ------------------------------------------------
  *
  *
  */
	this.targetDate;
	this.tzDesignation;
	this.complete;

	this.update = function () {
		var now = DateUtils.getNow(this.tzDesignation);
		var timeDifference = DateUtils.getTimeDifference(now, this.targetDate);
		if (!timeDifference) {
			trace('Countdown - countdown is over!!');
			this.complete = true;
		} else return timeDifference;
	};
};

exports.default = Countdown;

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adUtils = __webpack_require__(1);

var _Styles = __webpack_require__(38);

var Styles = _interopRequireWildcard(_Styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	@class Effects
	@desc
		Utilities for adding effects to elements
*/
var Effects = function () {

	/* --------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
 	@memberof Effects
 	@method blur
 	@param {object} obj
 		object containing blur arguments, see Properties for more info:
 			@property {element} obj.target
 			dom element
 		@property {number} obj.amount
 			the level of blurriness
 	@desc
 		Blurs a dom element.
 	
 	
 	@example
 		//
 		Effects.blur({
 			target: _myDiv,
 			amount: 10
 		});
 */
	function blur(obj) {
		if (obj.amount >= 0) Styles.setCss(obj.target, { filter: 'blur(' + obj.amount + 'px)' });
	}

	/**
 	@memberof Effects
 	@method dropShadow
 	@param {object} obj
 		object containing drop shadow arguments, see Properties for more info:
 		@property {element} obj.target
 			dom element
 		@property {number} obj.angle
 			optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0.
 		@property {number} obj.distance
 			optional NUMBER for how far away the shadow will offset. Defaults to 0.
 		@property {number} obj.size
 			optional NUMBER for shadow radius. Defaults to 0.
 		@property {number} obj.spread
 			optional NUMBER for how much extra the shadow will increase before it begins its gradient fade. Defaults to 0.
 		@property {string|object} obj.color
 			optional color of shadow as a HEX STRING :"#ff0000", 
 			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
 			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
 		@property {number} obj.alpha
 			optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1.
 		@property {boolean} obj.inner
 			optional BOOLEAN to set the shadow as inset. Defaults to false.
 		@desc
 		Adds a drop shadow to a dom element. Follows the same use specs as Photoshop.
 		
 	@example
 		//
 		Effects.dropShadow({
 			target:_myDiv,
 			angle: 135,
 			distance: 50,
 			size: 20, 
 			spread: 10,
 			color: 'rgb(90, 0, 0)',
 			alpha: 0.1,
 			inner: true
 		});
 */
	function dropShadow(obj) {
		Styles.setCss(obj.target, { boxShadow: createShadow(obj.angle || 0, obj.distance || 0, obj.size || 0, obj.spread || 0, obj.color || '#000000', obj.alpha, obj.inner) });
	}

	/**
 	@memberof Effects
 	@method textDropShadow
 	@param {object} obj
 		object containing drop shadow arguments, see Properties for more info:
 		@property {element} obj.target
 			dom element
 		@property {number} obj.angle
 			optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0.
 		@property {number} obj.distance
 			optional NUMBER for how far away the shadow will offset. Defaults to 0.
 		@property {number} obj.size
 			optional NUMBER for shadow radius. Defaults to 0.
 		@property {string|object} obj.color
 			optional color of shadow as a HEX STRING :"#ff0000", 
 			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
 			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
 		@property {number} obj.alpha
 			optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1.
 		@desc
 		Adds a drop shadow to text within a dom element. Follows the same use specs as Photoshop.
 		
 	@example
 		//
 		Effects.textDropShadow({
 			target:_myText, 
 			angle: 45, 
 			distance: 15, 
 			size: 1, 
 			color: '#ff0000', 
 			alpha: 0.5
 		});
 */
	function textDropShadow(obj) {
		Styles.setCss(obj.target, { textShadow: createShadow(obj.angle || 0, obj.distance || 0, obj.size || 0, null, obj.color || '#000000', obj.alpha) });
	}

	/**
 	@memberof Effects
 	@method glow
 	@param {object} obj
 		object containing glow arguments, see Properties for more info:
 		@property {element} obj.target
 			dom element
 		@property {number} obj.size
 			optional NUMBER for glow radius. Defaults to 0.
 		@property {number} obj.spread
 			optional NUMBER for how much extra the glow will increase before it begins its gradient fade. Defaults to 0.
 		@property {string|object} obj.color
 			optional color of glow as a HEX STRING :"#ff0000", 
 			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
 			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
 		@property {number} obj.alpha
 			optional NUMBER of glow opacity, if set will overwrite color.a. Defaults to 1.
 		@property {boolean} obj.inner
 			optional BOOLEAN to set the glow as inset. Defaults to false.
 		@desc
 		Adds a glow to a dom element. Follows the same use specs as Photoshop.
 		
 	@example
 		//
 		Effects.glow({
 			target: _myDiv,
 			size: 20, 
 			spread: 0,
 			color: 'rgb(90, 0, 0)',
 			alpha: 0.5,
 			inner: true
 		});
 */
	function glow(obj) {
		obj.angle = 0;
		obj.distance = 0;
		dropShadow(obj);
	}

	/**
 	@memberof Effects
 	@method linearGradient
 	@param {object} obj
 		object containing gradient arguments, see Properties for more info:
 		@property {element} obj.target
 			dom element
 		@property {array} obj.colors
 			ARRAY of colors as either a HEX STRING :"#ff0000" or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)".
 		@property {number} obj.angle
 			NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0.
 	@desc
 		Changes the background of a given dom element to be a linear gradient.
 		<br><br>
 			<b>Example</b><br>
 		Adding a horizontal gradient from red, to blue, fading to a transparent yellow.
 		<codeblock>
 			Effects.linearGradient({
 				target: _myDiv, 
 				colors: ['red', 'blue', 'rgba(255, 255, 0, 0.5)'], 
 				angle: 90
 			});
 		</codeblock>
 */
	function linearGradient(obj) {
		Styles.setCss(obj.target, { background: 'linear-gradient(' + (obj.angle || 0) + 'deg, ' + obj.colors.toString() + ')' });
	}

	/**
 	@memberof Effects
 	@method radialGradient
 	@param {object} obj
 		object containing gradient arguments, see Properties for more info:
 		@property {element} obj.target
 			dom element
 		@property {array} obj.colors
 			ARRAY of colors as either a HEX STRING :"#ff0000" 
 			or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)". 
 			<br><br>
 				To add stops, append a % value to the color string: ["#ff0000 50%, "#00ff00 90%"].
 		@property {number} obj.angle
 			NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0.
 	@desc
 		Changes the background of a given dom element to be a radial gradient.
 		<br><br>
 			<b>Example</b><br>
 		Adding a gradient from red to blue, with a very large choke on the blue.
 		<codeblock>
 			Effects.radialGradient({
 				target: _myDiv, 
 				colors: ['#ff0000', '#0000ff 10%']
 			});
 		</codeblock>
 */
	function radialGradient(obj) {
		Styles.setCss(obj.target, { background: 'radial-gradient(' + obj.colors.toString() + ')' });
	}

	/* --------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function createShadow(angle, distance, size, spread, color, alpha, inner) {
		var val = '';
		var deg = angle * -1 + 180;
		var rad = _adUtils.MathUtils.toRadians(deg);
		val += (Math.cos(rad) * distance).toFixed(8) + 'px ';
		val += (Math.sin(rad) * distance).toFixed(8) + 'px ';
		val += size + 'px';

		if (spread) val += ' ' + spread + 'px';

		val += ' ' + _adUtils.ColorUtils.toRgbaString(color, alpha);

		inner = !!inner;
		if (inner) val += ' inset';

		return val;
	}

	/* --------------------------------------------------------------------------------- */
	// PUBLIC ACCESS
	return {
		blur: blur,
		dropShadow: dropShadow,
		textDropShadow: textDropShadow,
		linearGradient: linearGradient,
		radialGradient: radialGradient,
		glow: glow
	};
}();

exports.default = Effects;

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var FullScreen = new function () {
	var F = this;

	F.isFullScreen = function () {
		return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
	};

	F.enter = function (elem) {
		if (F.isFullScreen()) return;

		if (elem.requestFullscreen) {
			trace(' -> requestFullscreen');
			elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
			trace(' -> msRequestFullscreen');
			elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			trace(' -> mozRequestFullScreen');
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			trace(' -> webkitRequestFullscreen');
			elem.webkitRequestFullscreen();
		}
	};

	F.exit = function () {
		if (!F.isFullScreen()) return;

		if (document.exitFullscreen) {
			trace(' -> exitFullscreen');
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			trace(' -> msExitFullscreen');
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			trace(' -> mozCancelFullScreen');
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			trace(' -> webkitExitFullscreen');
			document.webkitExitFullscreen();
		}
	};
}();

exports.default = FullScreen;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/** 
	@class Emitter
	@desc
		( v1.1 )
		<br><br>

		Emitter is a particle system that emits and controls particles and renders on a canvas element.
		It comes with some basic physic features such as gravity, force, bounce and world boundary. 
		<br><br>

		The default setting is in <code>js/EmitterData.js</code> that comes with standard-particles template. 
		To tweak the default data, launch particle simulator in AdApp and work with the interface. When you have 
		reached your desired effect, copy the genrated code back to <code>js/EmitterData.js</code>.
		<br><br>

		For more info about the simulator, visit
		{@link https://confluence.ff0000.com/display/AT/PARTICLES }
	
	@example
		//create a canvas element
		adData.elements.particleCanvas = new UICanvas({
			id: 'particle-canvas',
			target: adData.elements.redAdContainer,
			css: {
				width: adParams.adWidth,
				height: adParams.adHeight
			}
		});
		
		//create an instance of Emitter
		adData.particleSystem = new Emitter();

		//initiate the emitter with the target canvas element
		adData.particleSystem.init( adData.elements.particleCanvas );
		
		//start emitting
		adData.particleSystem.emit();
		
		//stop emitting
		adData.particleSystem.stopEmitting();

*/
var Emitter = function Emitter() {
	var self = this;

	self.G = new Vector2D(0, 0.1);
	self.customBehaiver = { emitter: [], particle: [] };

	/**
 	@memberof Emitter
 	@method init
 	@param {CanvasElement} canvasElement
 		a canvas element
 	@param {object} setting
 		optional, contains fps and emitterData as properties to overide the frame rate and EmitterData, see Properties for more info:
 	@property {EmitterData}  emitterData
 	@property {number} fps
 		default fps(60)
 		@desc
 		Initiates the Emitter.
 		@example
 		var myEmitter = new Emitter();
 			//init emitter with default setting
 		myEmitter.init( canvasElement );
 
 		//init emitter with custom setting
 		var customSetting = {
 			fps: 30,
 			emitterData: myCustomEmitterData
 		};
 		myEmitter.init( canvasElement, customSetting );
    */
	self.init = function (canvasElement, setting) {

		setting = setting || {};
		var data = setting.emitterData || EmitterData;
		self.fps = setting.fps || 60;

		//canvas
		self.canvas = canvasElement;
		self.ctx = canvasElement.getContext('2d');
		self.ctxWidth = canvasElement.width;
		self.ctxHeight = canvasElement.height;

		self.active = false;
		self.frameCount = 0;
		self.startEmitFrame = 0;
		self.frameEmittedCount = 0;

		self.liveParticles = [];
		self.particles = [];
		self.models = [];

		self.properties = {};
		self.setProperties(data);

		self._drawBackground();

		FrameRate.register(self, self._run, self.fps);
	};

	/**
 	@memberof Emitter
 	@method set
 	@param {string} key
 		the name of the property (supports nested object key)
 	@param {number|string|object|array} val
 		the value of the property
 	@param {boolean} triggerChange
 		optional, it is for internal use
 	@desc
 		Sets a sinlge property of emitter properties. To set multiple properties at once, please use setProperties.
 
 	@example
 		myEmitter.set( 'emitRate', 0.1 );
 			myEmitter.set( 'origin.value.x', 0 );
    */
	self.set = function (key, val, triggerChange) {
		triggerChange = triggerChange === undefined ? true : triggerChange;
		ObjectUtils.objectifier.set(key, val, self.properties);

		if (triggerChange) {
			self._afterPropertyChanged([key.split('.')[0]]);
		}
	};

	/**
 	@memberof Emitter
 	@method get
 	@param {string} key
 		the name of the property (supports nested object key)
 	@returns {number|string|object|array}
 		The value of the property
 	@desc
 		Gets a sinlge property of emitter properties.
 		@example
 		var rate = myEmitter.get( 'emitRate' );
 		var lifeSpanValue = myEmitter.get( 'lifeSpan.value' );
    */
	self.get = function (key) {
		return ObjectUtils.objectifier.get(key, self.properties);
		// return ParticlesUtils.objectifier( key.split( '.' ), false, self.properties );
	};

	/**
 	@memberof Emitter
 	@method setProperties
 	@param {object} obj
 		an object containing properties and values
 	@desc
 		Sets a group of properties of emitter properties (supports nested object key)
 		@example
 		myEmitter.setProperties({
 			'emitRate': 0.1,
 			'background.type': 'none',
 			'origin.value.x': 100
 		});
    */
	self.setProperties = function (obj) {
		var keyArr = [];

		for (var key in obj) {
			self.set(key, obj[key], false);
			keyArr.push(key.split('.')[0]);
		}

		self._afterPropertyChanged(keyArr);
	};

	/**
 	@memberof Emitter
 	@method addCustomBehavier
 	@param {string} type
 		'particle' or 'emitter'
 	@param {function} func
 		function to add
 	@desc
 		Adds on custom behavier in the run loop. If the type is 'particle' function, it will be called in each particle iteration in the run loop
 		with the iterated particle as the first parameter and an array of all particles as the second. If the type is 'emitter', it will be called
 		in each run loop with the emitter as a parameter. 
 		@example
         	function customParticleBehavier1 ( particle, particleGroup ) {
 			var particleLocation = particle.properties.location;
 			var i;
 			//if there is another particle in the range of 60, set the color to red
 			//otherwise set it to yellow
 		    for( i=0; i<particleGroup.length; i++ ) {
 		        var particle2 = particleGroup[ i ];
 		        var dist = particleLocation.dist( particle2.properties.location );
 		        if( dist < 60 ) {
 		            particle.properties.style.color = [ 255, 0, 0 ];
 		        } else {
 		            particle.properties.style.color = [ 255, 255, 0 ];
 		        }
 		    }
        		}
         		function customParticleBehavier2 ( particle, particleGroup ) {
 			particle.properties.style.scale = particle.properties.location.y * 0.1;
        		} 
 	        	function customEmitterBehavier ( emitter ) {
     			//animate the gravityAmount using frameCount
 			emitter.set( 'gravityAmount', Math.sin( emitter.frameCount * 0.1 ));
 		};
 			myEmitter.addCustomBehavier( 'particle', customParticleBehavier1 );
 		myEmitter.addCustomBehavier( 'particle', customParticleBehavier2 );
 		myEmitter.addCustomBehavier( 'emitter', customEmitterBehavier );
    */
	self.addCustomBehavier = function (type, func) {
		this.customBehaiver[type].push(func);
	};

	/**
 	@memberof Emitter
 	@method removeCustomBehavier
 	@param {string} type
 		'particle' or 'emitter'
 	@param {function} func
 		function to remove
 	@desc
 		Removes the custom behavier added.
 		@example
 		myEmitter.removeCustomBehavier( 'particle', customParticleBehavier1 );
 		myEmitter.removeCustomBehavier( 'emitter', customEmitterBehavier );
    */
	this.removeCustomBehavier = function (type, func) {
		var arr = this.customBehaiver[type];
		var i;
		for (i = 0; i < arr.length; i++) {
			if (arr[i] === func) {
				this.customBehaiver[type].splice(i, 1);
			}
		}
	};

	/**
 	@memberof Emitter
 	@method emit
 	@desc
 		Starts emitting particles.
 		@example
 		myEmitter.emit();
    */
	self.emit = function () {
		self.active = true;
		self.startEmitFrame = self.frameCount;

		if (self.properties.emitRate === 0) {
			//emit once
			self.createParticles(self.properties.emitAmount);
		}
	};

	/**
 	@memberof Emitter
 	@method stopEmitting
 	@desc
 		Stops emitting particles.
 		@example
 		myEmitter.stopEmitting();
    */
	self.stopEmitting = function () {
		self.active = false;
	};

	/**
 	@memberof Emitter
 	@method empty
 	@desc
 		Emptys all particles.
 		@example
 		myEmitter.empty();
    */
	self.empty = function () {

		self.particles.forEach(function (a) {
			a = null;
		});
		self.particles = [];
	};

	/**
 	@memberof Emitter
 	@method pause
 	@desc
 		Pause the run loop ( freeze it! ).
 	@example
 		myEmitter.pause();
    */
	self.pause = function () {
		FrameRate.unregister(self, self._run);
	};

	/**
 	@memberof Emitter
 	@method resume
 	@desc
 		Resume the run loop after pause.
 	@example
 		myEmitter.resume();
    */
	self.resume = function () {
		FrameRate.register(self, self._run, self.fps);
	};

	/**
 	@memberof Emitter
 	@name tween
 	@property {function} tween.to
 		{@link Emitter.to}
 	@desc
 		Creates a object to hold tween functions:
 	*/
	self.tween = {};

	/**
 	@memberof Emitter
 	@method to
 	@param {number} duration
 		duration of the tween in seconds
 	@param {object} props
 		properties to use
 	@desc
 		It creates a TweenLite animation for tweening emitter properties.
 		( The purpose of this is to tween multiple nested keys in property object, since TweenLite doesn't support nested keys. )
 		<br><br>
 		<b>NOTE!!!</b>
 		This method is on the {@link Emitter.tween} object!
 		@example
         	myEmitter.tween.to( 0.3, {
 			'emitRate': 1,
 			'velocity.value.angle': 45,
 			'origin.value.x': 100,
 			'origin.value.y': 350,
 			delay: 1,
 			onComplete: function () {
 				trace( 'Done!' );
 			}
     	   	});
    */
	self.tween.to = function (duration, props) {
		props = props || {};

		// var self = self;
		var onUpdate = props.onUpdate || null;
		var delay = props.delay || 0;

		delete props.delay;

		return TweenLite.delayedCall(delay, function () {

			//strip out emitter properties
			var emitterProps = {};
			for (var k in props) {
				if (self.get(k) !== undefined) {
					emitterProps[k] = self.get(k);
				}
			}

			props.onUpdate = function () {
				if (onUpdate) {
					onUpdate();
				}
				self.setProperties(emitterProps);
			};
			TweenLite.to(emitterProps, duration, props);
		});
	};

	/**
 	@memberof Emitter
 	@method createParticles
 	@param {number} amount
 		the amount of particles to create
 	@desc
 		Creates particles from the particle models of the emitter. 
    */
	self.createParticles = function (amount) {
		self.frameEmittedCount++;

		if (self.models.length <= 0) {
			return;
		}
		var p = self.properties;
		var map = self.probabilityMap;
		var i;

		for (i = 0; i < amount; i++) {
			var ms = self.models;
			var index;

			if (self.particles.length >= p.maxParticleAmount) {
				return;
			}

			if (p.pickRandomModel) {
				//select model base on probability
				var num = MathUtils.random(0, self.totalProbability, 0.01);
				var j;
				for (j = 0; j < map.length - 1; j++) {
					if (MathUtils.inRange(num, map[j], map[j + 1])) {
						index = j;
						break;
					}
				}
			} else {
				index = (self.frameEmittedCount - 1) % ms.length;
			}

			self.particles.push(new Particle(self.ctx, ms[index], self.fps));
		}
	};

	/**
 	@memberof Emitter
 	@method addModel
 	@param {object} modelObj
 		the object of the particle model to be added
 	@desc
 		Add a particle model
 	@example
         	var modelObj = {
 				type: "Circle",
 	            width: 12,
 	            properties: {},
 	            id: 'model5'
         	};
         	myEmitter.addModel( modelObj );
 */
	self.addModel = function (modelObj) {
		self.properties.particleModels.push(modelObj);
		self._afterPropertyChanged(['particleModels']);
	};

	/**
 	@memberof Emitter
 	@method removeModel
 	@param {string} id
 		the id of the particle model to be removed
 	@desc
 		Remove a particle model by its id
 	@example
         	myEmitter.removeModel( 'model5' );
 */
	self.removeModel = function (id) {
		var i;
		var index = null;
		var pm = self.properties.particleModels;
		for (i = 0; i < pm.length; i++) {
			if (id === pm[i].id) {
				index = i;
				break;
			}
		}

		if (index !== null) {
			pm.splice(index, 1);
			self._afterPropertyChanged(['particleModels']);
		}
	};

	self._drawBackground = function () {

		var p = self.properties;
		var bg = p.background;
		if (p.clearCanvas) {
			if (self.frameCount > 0) {
				self.ctx.globalAlpha = bg.alpha;
			}
			switch (bg.type) {
				case 'color':
					self.ctx.beginPath();
					self.ctx.rect(0, 0, self.ctxWidth, self.ctxHeight);
					self.ctx.fillStyle = bg.color;
					self.ctx.fill();
					self.ctx.closePath();
					break;
				case 'image':
					self.ctx.drawImage(ImageManager.get(bg.image), 0, 0, self.ctxWidth, self.ctxHeight);
					break;
				default:
					self.ctx.clearRect(0, 0, self.ctxWidth, self.ctxHeight);
			}
			self.ctx.globalAlpha = 1;
		}
	};

	self._afterPropertyChanged = function (keys) {
		keys = keys || [];

		//convert globalForce to vector
		if (keys.indexOf('globalForce') > -1) {
			var force = self.properties.globalForce;
			self._globalForce = Vector2D.degreeToVector(force.angle).mult(force.amount);
		}

		//create models if it's changed
		if (keys.indexOf('particleModels') > -1) {

			self.models = [];
			self.totalProbability = 0;
			var map = [];
			var pm = self.properties.particleModels;
			for (i = 0; i < pm.length; i++) {
				var pmi = pm[i];
				var g;
				var m;

				switch (pmi.type) {
					case 'Image':
						g = new Graphic[pmi.type](ImageManager.get(pmi.image), pmi.width, pmi.style);
						break;
					case 'Sprite':
						g = new Graphic[pmi.type](ImageManager.get(pmi.image), pmi.width, pmi.style, pmi.spriteSetting);
						break;
					case 'Circle':
						g = new Graphic[pmi.type](pmi.width, pmi.style);
						break;
					case 'Rect':
						g = new Graphic[pmi.type](pmi.width, pmi.height, pmi.style);
						break;
				}

				m = new ParticleModel(g, pmi.properties);
				m.setDefaultProperties(self.properties);
				self.models.push(m);

				map.push(self.totalProbability);

				var p = pmi.probability === undefined ? 1 : pmi.probability;
				self.totalProbability += p;
			}
			map.push(self.totalProbability);
			self.probabilityMap = map;
		} else {
			var prop = self.properties;
			self.models.forEach(function (a) {
				a.setDefaultProperties(prop);
			});
		}
	}.bind(self);

	self._run = function () {
		var p = self.properties;

		self._drawBackground();

		var i;
		for (i = 0; i < self.particles.length; i++) {
			var a = this.particles[i];
			if (!a.isDead(self.ctxWidth, self.ctxHeight, p.killIfOutOfCanvas)) {
				self.liveParticles.push(a);
				a.update();
				a.applyForce(self._globalForce);
				if (p.gravityAmount !== 0) {
					var gravity = self.G.clone();
					gravity.mult(p.gravityAmount);
					a.applyForce(gravity);
				}

				if (p.world.active) {
					a.checkWorld(p.world.value);
				}

				if (self.customBehaiver.particle !== 0) {
					var m;
					for (m = 0; m < self.customBehaiver.particle.length; m++) {
						var func = self.customBehaiver.particle[m].call(func, a, self.particles);
					}
				}

				a.render();
			} else {
				a = null;
			}
		};
		//discard dead particles
		self.particles = self.liveParticles;
		self.liveParticles = [];

		if (self.customBehaiver.emitter !== 0) {
			var m;
			for (m = 0; m < self.customBehaiver.emitter.length; m++) {
				var func = self.customBehaiver.emitter[m].call(func, self);
			}
		}

		//emit if active
		if (self.active) {
			//emit if on frame
			var f = self.frameCount - self.startEmitFrame;
			if (f % ~~(1 / p.emitRate) === 0) {
				self.createParticles(p.emitAmount);
			}
		}

		self.frameCount++;
	};
};

exports.default = Emitter;

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _create = __webpack_require__(30);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class Graphic
	@desc
		A simple, light weight class for rendering shapes and images on canvas element with assigned style to work with the particle system.
		Graphic.Shape is the parent class that remains netural to keep the flexiblity to create more classes based on needs in different projects.
		<br><br>

		To keep it practical while maintaining it as light as possible, there are four classes currently available:<br>
		<ul>
			<li>Graphic.Image</li>
			<li>Graphic.Sprite</li>
			<li>Graphic.Circle</li>
			<li>Graphic.Rect</li>
		</ul> 
*/
var Graphic = Graphic || {};

Graphic = {
	DEFAULTSIZE: 10,
	DEFAULTSTYLE: {
		x: 0,
		y: 0,
		alpha: 1,
		scale: 1,
		rotation: 0,
		transformOrigin: { x: 0.5, y: 0.5 },
		color: [255, 0, 0],
		strokeWidth: 0,
		strokeColor: 'rgba(0, 0, 0, 1)'
	},
	Shape: function Shape() {}
};

/**
	@class Graphic.Shape
	@desc
		The parent class of other Graphic classes. It handles color, alpha, translation, rotation and scaling. 

*/
Graphic.Shape.prototype = {

	hasPath: true,

	getRGBA: function getRGBA(rgb, alpha) {
		var r = ~~MathUtils.restrict(rgb[0], 0, 255);
		var g = ~~MathUtils.restrict(rgb[1], 0, 255);
		var b = ~~MathUtils.restrict(rgb[2], 0, 255);
		var a = MathUtils.restrict(alpha, 0, 1);

		return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	},

	render: function render(ctx, style, frameCount) {
		var self = this;

		style = style || {};
		style = ObjectUtils.default(style, self.style);
		style.scale = MathUtils.restrict(style.scale, 0, Infinity);
		style.alpha = MathUtils.restrict(style.alpha, 0, 1);
		var w = self.width * style.scale;
		var h = self.height * style.scale;

		style.color = self.getRGBA(style.color, style.alpha);

		ctx.save();

		if (style.alpha < 1 && !self.hasPath) {
			ctx.globalAlpha = style.alpha;
		}

		ctx.translate(w * -style.transformOrigin.x, h * -style.transformOrigin.y);

		if (style.rotation !== 0) {
			var tw = style.x + w * style.transformOrigin.x;
			var th = style.y + h * style.transformOrigin.y;
			ctx.translate(tw, th);
			ctx.rotate(MathUtils.toRadians(style.rotation));
			ctx.translate(-tw, -th);
		}

		if (self.hasPath) {
			ctx.beginPath();
		}

		self.draw(ctx, style, w, h, frameCount);

		if (self.hasPath) {
			ctx.closePath();
			ctx.fillStyle = style.color;
			ctx.fill();

			if (style.strokeWidth > 0) {
				ctx.lineWidth = style.strokeWidth;
				ctx.strokeStyle = style.strokeColor;
				ctx.stroke();
			}
		}

		ctx.restore();
	}
};

/**
	@class Graphic.Image
	@desc
		A class for rendering images on canvas. The size parameter applys to width. The height
		is calculated base the the image width and height ratio and call draw method of the child class.
*/
Graphic.Image = function (image, size, style) {
	var self = this;

	self.hasPath = false;
	self.image = image;
	self.width = size || image.width;
	self.height = self.width * (image.height / image.width);
	self.style = ObjectUtils.default(style || {}, Graphic.DEFAULTSTYLE);

	self.draw = function (ctx, style, w, h) {
		ctx.drawImage(self.image, style.x, style.y, w, h);
	};
};

Graphic.Image.prototype = (0, _create2.default)(Graphic.Shape.prototype);

/**
	@class Graphic.Circle
	@param {number} size
		diameter of the circle
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@desc
		A class for rendering circles on canvas

*/
Graphic.Circle = function (size, style) {
	var self = this;

	self.width = size * 0.5 || Graphic.DEFAULTSIZE * 0.5;
	self.height = self.width;
	self.style = ObjectUtils.default(style || {}, Graphic.DEFAULTSTYLE);

	self.draw = function (ctx, style, w) {
		ctx.arc(style.x + w * 0.5, style.y + w * 0.5, w, 0, Math.PI * 2);
	};
};

Graphic.Circle.prototype = (0, _create2.default)(Graphic.Shape.prototype);

/**
	@class Graphic.Rect
	@param {number} width
		width of the rectangle
	@param {number} height
		height of the rectangle
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@desc
		A class for rendering rectangles on canvas.

*/
Graphic.Rect = function (width, height, style) {
	var self = this;

	self.width = width || Graphic.DEFAULTSIZE;
	self.height = height || Graphic.DEFAULTSIZE;
	self.style = ObjectUtils.default(style || {}, Graphic.DEFAULTSTYLE);

	self.draw = function (ctx, style, w, h) {
		ctx.rect(style.x, style.y, w, h);
	};
};

Graphic.Rect.prototype = (0, _create2.default)(Graphic.Shape.prototype);

/**
	@class Graphic.Sprite
	@param {Image} image
		image of the sprite sheet
	@param {number} size
		display width of per frame
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@param {object} spriteSetting
		Object with the following properties:

		@property {number} frameWidth
			width of per frame 

		@property {number} frameHeight
			height of per frame

		@property {number} frameNumber
			number of total frames

		@property {number} speed
			the speed of the animation

		@property {boolean} loop

	@desc
		A class for rendering spritesheet animation on canvas.

*/
Graphic.Sprite = function (image, size, style, spriteSetting) {
	var self = this;

	self.hasPath = false;
	self.setting = spriteSetting;

	self.image = image;
	self.oriWidth = image.width;
	self.oriHeight = image.height;
	self.width = size || self.oriWidth;
	self.height = self.width * (self.setting.frameWidth / self.setting.frameHeight);
	self.style = ObjectUtils.default(style || {}, Graphic.DEFAULTSTYLE);
	self.frameLen = ~~(1 / self.setting.speed);
	self.colNumber = self.oriWidth / self.setting.frameWidth;

	self.draw = function (ctx, style, w, h, frameCount) {
		var frameIndex = ~~(frameCount / self.frameLen);
		if (self.setting.loop) {
			frameIndex = frameIndex % self.setting.frameNumber;
		} else {
			var fn = self.setting.frameNumber - 1;
			frameIndex = frameIndex > fn ? fn : frameIndex;
		}

		var fw = self.setting.frameWidth;
		var fh = self.setting.frameHeight;
		var ratio = w / fw;

		var sx = frameIndex * self.setting.frameWidth % self.oriWidth;
		var sy = ~~(frameIndex / self.colNumber) * self.setting.frameHeight;

		//trace ( frameIndex, fw, fh, ratio, sx, sy )

		ctx.drawImage(self.image, sx, sy, fw, fh, style.x, style.y, fw * ratio, fh * ratio);
	};
};

Graphic.Sprite.prototype = (0, _create2.default)(Graphic.Shape.prototype);

exports.default = Graphic;

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class Particle
	@desc
		This Particle class is used along with {@link ParticleModel} and {@link Emitter} class. 
*/
var Particle = function Particle(ctx, model, fps) {
	var self = this;
	//set up properties
	self.fps = fps;
	self.graphic = model.graphic;
	self.properties = model.generateIndividualProperties();
	self.frameCount = 0;
	self.ctx = ctx;

	self._lifeSpanFrameCount = ParticlesUtils.secToFrameCount(self.properties.lifeSpan, self.fps);
	self._force = new Vector2D(0, 0);
	self._hasAnimation = function () {
		var ani = self.properties.animations;
		var i;
		for (var key in ani) {
			if (ani[key].steps.length > 0) {
				return true;
			}
		}
		return false;
	}.bind(self)();

	self._hasTurbulence = function () {
		var t = self.properties.turbulence;
		return t.rate !== 0 && t.x !== 0 && t.y !== 0;
	}.bind(self)();
};

Particle.prototype = {

	/**
 	@memberof Particle
 	@method update
 	@desc
 		Updates the properties of the particle
    */
	update: function update() {
		var p = this.properties;
		var vel = p.velocity.clone();

		p.velocity.mult(1 + p.acceleration);
		p.velocity.add(this._force);
		p.velocity.limit(p.maxSpeed);
		p.location.add(p.velocity);

		this._force.mult(0);

		if (this._hasTurbulence) {

			if (!this.noiseStart) {
				this.noiseStart = new Vector2D.random();
				this.noiseStart.mult(250);
			}

			var t = p.turbulence;
			this.noiseStart.add(new Vector2D(t.rate, t.rate));

			var n = SimpleNoise2D.get(this.noiseStart.x, this.noiseStart.y);
			p.location.x += n.x * t.xAmplitude;
			p.location.y += n.y * t.yAmplitude;
		}

		p.style.x = p.location.x;
		p.style.y = p.location.y;

		this.frameCount++;
	},

	/** 
 	@memberof Particle
 	@method getAnimationStyle
 	@desc
 		Update the animated style of a particle
    */
	getAnimationStyle: function getAnimationStyle() {

		//TODO: optimize
		var p = this.properties;
		var style = {};
		var sec = ParticlesUtils.frameCountToSec(this.frameCount, this.fps);
		var offsetStyle = ParticlesUtils.easyTween(p.animations, p.lifeSpan, sec);

		// apply to each key
		for (key in p.style) {
			if (offsetStyle[key] !== undefined) {
				var val = p.style[key] * offsetStyle[key];
				style[key] = val;
			} else {
				style[key] = p.style[key];
			}
		}
		return style;
	},

	/**
 	@memberof Particle
 	@method render
 	@desc
 		Renders the particle onto the canvas context.
 */
	render: function render() {

		var style = this._hasAnimation ? this.getAnimationStyle() : this.properties.style;
		this.graphic.render(this.ctx, style, this.frameCount);
	},

	/**
 	@memberof Particle
 	@method applyForce
 	@desc
 		Applies force to the particle.
 */
	applyForce: function applyForce(f) {
		this._force.add(f);
	},

	/**
 	@memberof Particle
 	@method isDead
 	@returns {boolean}
 	@desc
 		Returns a boolean of is the particle is dead depending on two situations:
 		<br>
 		<ol>
 			<li>if it has reaches its lifespan, or</li>
 			<li>if it is out of the canvas and if {@link EmitterData.killIfOutOfCanvas} is set to true</li>
 		</ol>
    */
	isDead: function isDead(w, h, k) {
		var p = this.properties;
		var remainingLife = this._lifeSpanFrameCount - this.frameCount;

		if (remainingLife <= 0) {
			return true;
		}

		if (k) {
			var l = p.location;
			var g = this.graphic;
			var size = Math.max(g.width, g.height) * p.style.scale;
			if (l.x - size > w || l.y - size > h || l.x + size < 0 || l.y + size < 0) {
				return true;
			}
		}

		return false;
	},

	/**
 	@memberof Particle
 	@method checkWorld
 	@param {array} w
 		an array that contains left X, right X, top Y, bottom Y as values for the boundary
 	@desc
 		Remains the particle in the defined world boundaries by its body size and bounces it when it hits the boundaries.
 */
	checkWorld: function checkWorld(w) {

		var l = this.properties.location;
		var r = this.properties.bodySize;
		var x1 = w[0] + r;
		var x2 = w[1] - r;
		var y1 = w[2] + r;
		var y2 = w[3] - r;

		if (l.x <= x1) {
			this._checkBorder('x', x1);
		} else if (l.x >= x2) {
			this._checkBorder('x', x2);
		}

		if (l.y <= y1) {
			this._checkBorder('y', y1);
		} else if (l.y >= y2) {
			this._checkBorder('y', y2);
		}
	},

	/**
 	@memberof Particle
 	@method _checkBorder
 	@param {string} axis
 		String 'x' or 'y'
 	@param {number} val - the location of the border on the X or Y axis
 		@desc
 		Check it the particle location reaches the border, if ture, it bounces to it.
 */
	_checkBorder: function _checkBorder(axis, val) {
		//axis: x or y
		var p = this.properties;
		var v = p.velocity;
		var b = p.bounceAmount;

		if (axis === 'x') {
			v.x *= -b;
			v.y *= b;
			p.location.x = val;
		} else {
			v.x *= b;
			v.y *= -b;
			p.location.y = val;
		}
	}
};

exports.default = Particle;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class ParticleModel
	@desc
		This ParticleModel class is used along with {@link Particle} and {@link Emitter} class.
*/
var particleId = 0;
var ParticleModel = function ParticleModel(graphic, properties) {
	var self = this;

	self.graphic = graphic;
	self.originalProperties = properties || {};
	self.defaultProperties = {};
	self.properties = self.originalProperties;

	// hold its own properties
	// but generate for partical to actually use
	self.setDefaultProperties = function (obj) {
		self.defaultProperties = obj;
		self.properties = ObjectUtils.default(self.originalProperties, obj, true);
	};

	self.generateIndividualProperties = function () {
		var psu = ParticlesUtils;

		var rn = function rn(obj) {
			return psu.randomNumInRange(obj.value, obj.range);
		};

		var p = self.properties;
		var vel = Vector2D.degreeToVector(rn(p.velocityAngle));
		var scale = rn(p.scale);
		var speed = rn(p.speed);
		var loc = psu.randomVectorInRange(p.origin.value, p.origin.range, p.origin.shape);

		var result = {
			id: particleId,
			lifeSpan: rn(p.lifeSpan),
			location: loc,
			velocity: vel.mult(speed),
			turbulence: p.turbulence,
			maxSpeed: p.maxSpeed,
			acceleration: p.acceleration,
			bounceAmount: p.bounceAmount,
			bodySize: self._getBodySize(scale),
			style: {
				x: location.x,
				y: location.y,
				alpha: rn(p.alpha),
				scale: scale,
				rotation: rn(p.rotation),
				transformOrigin: p.transformOrigin,
				color: ParticlesUtils.randomArrayInRange(p.color.value, p.color.range)
			},

			animations: p.animations
		};

		particleId++;
		return result;
	};

	self._getBodySize = function (scale) {
		if (self.properties.bodySize !== undefined) {
			return self.properties.bodySize * scale;
		}
		if (self.graphic instanceof Graphic.Circle) {
			return self.graphic.width * scale;
		} else {
			return Math.max(self.graphic.width, self.graphic.height) * scale * 0.5;
		}
	};
};

exports.default = ParticleModel;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var ParticlesUtils = ParticlesUtils || {};
//object

ParticlesUtils = {

	/* Style */
	easyTween: function easyTween(animations, maxDuration, frameCount) {
		var style = {};

		for (var key in animations) {
			var obj = animations[key];
			var steps = obj.steps;
			var duration = obj.duration === 'max' ? maxDuration : obj.duration || maxDuration;
			var perc = obj.loop ? frameCount % duration / duration : frameCount / duration;
			perc = MathUtils.restrict(perc, 0, 1);
			var i;

			for (i = 0; i < steps.length - 1; i++) {
				//check current and next
				var s1 = steps[i];
				var s2 = steps[i + 1];

				if (MathUtils.inRange(perc, s1.s, s2.s)) {
					val = [];
					val = MathUtils.rel(s1.v, s2.v, s1.s, s2.s, perc);
					style[key] = val;
					break;
				}
			}
		}
		return style;
	},

	randomNumInRange: function randomNumInRange(v, r, increment) {
		if (!!!r) {
			return v;
		}
		increment = increment || 0.01;
		return v + MathUtils.random(-r / 2, r / 2, increment);
	},

	randomArrayInRange: function randomArrayInRange(v, r, increment) {
		increment = increment || 0.01;
		var result = [];
		var i;
		for (i = 0; i < v.length; i++) {
			result.push(this.randomNumInRange(v[i], r[i], increment));
		}

		return result;
	},

	randomVectorInRange: function randomVectorInRange(v, r, shape) {

		var center = new Vector2D(v.x, v.y);
		var rx = r.x / 2;
		var ry = r.y / 2;
		var rnd;

		switch (shape) {
			case 'rect':
				var x = MathUtils.random(-rx, rx, 0.01);
				var y = MathUtils.random(-ry, ry, 0.01);
				rnd = new Vector2D(x, y);
				break;

			case 'oval':
			default:
				var rnd = Vector2D.random();
				rnd.x *= rx * Math.random();
				rnd.y *= ry * Math.random();
		}

		center.add(rnd);

		return center;
	},

	secToFrameCount: function secToFrameCount(v, fps) {
		return ~~(v * fps);
	},

	frameCountToSec: function frameCountToSec(v, fps) {
		return v / fps;
	}
};

exports.default = ParticlesUtils;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class Ratio
	@desc
		Utilities for different ratio layouts; used by {@link UIImage} and deprecated Flipbook.
*/
var Ratio = function () {
	function resize(mode, source, target, returnObj) {
		mode = mode || this.EXACT;
		returnObj || (returnObj = { width: 0, height: 0 });
		if (mode == this.EXACT) {
			returnObj.width = source.width;
			returnObj.height = source.height;
		} else if (mode == this.STRETCH) {
			returnObj.width = target.width;
			returnObj.height = target.height;
		} else {
			var s = source.width / source.height;
			var t = target.width / target.height;
			var a = mode == this.FILL ? s : t;
			var b = mode == this.FILL ? t : s;
			if (a < b) {
				returnObj.height = source.height / (source.width / target.width);
				returnObj.width = target.width;
			} else {
				returnObj.width = source.width / (source.height / target.height);
				returnObj.height = target.height;
			}
		}
		return returnObj;
	}

	return {
		resize: resize,

		/**
  	@memberof Ratio
  	@const {string} EXACT
  		'auto' ~ Images display at the exact height and width of the source 
  */
		EXACT: 'auto',

		/**
  	@memberof Ratio
  	@const {string} FILL
  		'cover' ~ Scales the image to fill the target without distortion while maintaining aspect ratio, may cause a crop. 
  */
		FILL: 'cover',

		/**
  	@memberof Ratio
  	@const {string} FIT
  		'contain' ~ Scales to fit the full image without distortion while maintaining aspect ratio, may cause negative borders. 
  */
		FIT: 'contain',

		/**
  	@memberof Ratio
  	@const {string} STRETCH
  		'100% 100%' ~ Images stretches to fill the target, may cause aspect ratio distortion. 
  */
		STRETCH: '100% 100%'
	};
}();
exports.default = Ratio;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _DateUtils = __webpack_require__(55);

var _DateUtils2 = _interopRequireDefault(_DateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateStates = function DateStates() {

	this.dates = [];

	/**
 	@memberof DateStates
 	@method addDate
 	@param {Date|string} _date
 		Expected to be either a Date object, or a date-time string in the format of YYYY-MM-DD HH:MM:SS, where HH:MM:SS are optional.
 	@param {object} _tzDesignation
 		Any one of the supported {@link DateUtils} timezone ("TZ_") constants, assumes the client's timezone, but if your
 		list of dates is in EST, for example, then you would need to switch this argument to DateUtils.TZ_EST.
 	@param {object} _label
 		Optionally specify a label, which can make the logic read a little easier in the build.
 	@param {object} _args
 		Optionally specify any other random arguments or callback functions that may be required for your build
 		@desc
 		Add a date/timezone and label the the 
 */
	this.addDate = function (_date, _tzDesignation, _label, _args) {
		_tzDesignation = _tzDesignation || _DateUtils2.default.TZ_LOCAL;
		if (!(_date instanceof Date)) _date = _DateUtils2.default.parseToDate(_date, _tzDesignation);
		this.dates.push({
			date: _date,
			tzDesignation: _tzDesignation,
			label: _label,
			args: _args
		});
		this.sortDates();
		this.confirmLabels();
	};

	/**
 	@memberof DateStates
 	@method traceSchedule
 	@desc
 		Write the schedule and associated indexes/labels to the console. 
 */
	this.traceSchedule = function () {
		trace('DateStates.traceSchedule()');
		for (var i in this.dates) {
			trace(' - ' + this.dates[i].date + '( ' + this.dates[i].tzDesignation.label + ' ), index: "' + i.toString() + '", label: "' + this.dates[i].label + '"');
		}
	};

	/**
 	@memberof DateStates
 	@method getCurrentLabel
 	@desc
 		Returns the label associated with the current date-state. If no label was specified for the current date, 
 		this function will return labels, like:<br>
 		<ul>
 			<li><code>date-0</code> - before first date has passed</li>
 			<li><code>date-1</code> - first date has passed</li>
 			<li><code>date-2</code> - second date has passed</li> 
 */
	this.getCurrentLabel = function () {
		return this.dates[this.getCurrentIndex()].label;
	};

	/**
 	@memberof DateStates
 	@method getCurrentIndex
 	@desc
 		Get the current date-state index. The 0-index date is ALWAYS passed, so if the first date in your list has
 		NOT passed, this function will return 0.  
 */
	this.getCurrentIndex = function () {
		var currentIndex = -1;
		for (var _i = 0; _i < this.dates.length; _i++) {
			var _now = _DateUtils2.default.getNow(this.dates[_i].tzDesignation);
			if (_now.getTime() >= this.dates[_i].date.getTime()) {
				currentIndex = _i;
			}
		}
		return currentIndex;
	};

	/**
 	@memberof DateStates
 	@method getDates
 	@desc
 		Return a list of the actual date objects 
 */
	this.getDates = function () {
		var dates = [];
		for (var i in this.dates) {
			dates.push(this.dates[i].date);
		}
		return dates;
	};

	this.sortDates = function () {
		function sortOnDateTime(a, b) {
			if (a.date.getTime() < b.date.getTime()) return -1;
			if (a.date.getTime() > b.date.getTime()) return 1;
			return 0;
		}
		this.dates.sort(sortOnDateTime);
	};
	this.confirmLabels = function () {
		for (var i in this.dates) {
			if (!this.dates[i].label) this.dates[i].label = 'date-' + i.toString();
		}
	};

	this.addDate('2000-01-01 00:00:00');
}; /**
   	@class DateStates
   	@desc
   		<span style="color:#ff0000"><b>WARN:</b><br>
   		This class has been deprecated.  See DateSchedule
   		</span>
   
   		<br><br>
   
   		Used to create a schedule of dates. Then this class can be queried for:
   		<ul>
   			<li>a label representing the current valid date</li>
   			<li>an index which can be used to manually retrieve the current valid object</li>
   		</ul>
   		
   		Also interfaces with {@link StaticGenerator} in order to create a schedule of "static states" for the ad.
   		<br><br>
   
   		<b>AdData.js:</b><br>
   		It is recommended that you centralize your schedule in AdData. This way, changes to the schedule can easily 
   		be achieved with one common update.<br>
   		<codeblock>
   			this.dateStates = new DateStates();
   			this.dateStates.addDate( '2015-08-01 12:00:00', DateUtils.TZ_LOCAL );
   			this.dateStates.addDate( '2015-08-30 12:00:00', DateUtils.TZ_LOCAL );
   			this.dateStates.traceSchedule();
   		</codeblock>
   		<br><br>
   
   		<b>build.js:</b><br>
   		In <u>build.View</u>, you can write functions that build out the DOM for each of your states. 
   		<codeblock>
   			this.buildDateState0 = function() {
   				trace( 'View.buildDateState0()' );
   				// Markup...
   			}
   			this.buildDateState1 = function() {
   				trace( 'View.buildDateState1()' );
   				// Markup...
   			}
   			this.buildDateState2 = function() {
   				trace( 'View.buildDateState2()' );
   				// Markup...
   			}
   		</codeblock>
   		<br><br>
   
   		In <u>build.Control</u>, you can write the logic to switch which build function gets called. Please *NOTE*, the first date is ALWAYS
   		passed. In other words, index 0, or "date-0" is the default state, before any of your dates have passed.
   		<codeblock>
   			switch( adData.dateStates.getCurrentLabel()) {
   				case 'date-0': // default state
   					View.buildDateState0();
   					break;
   
   				case 'date-1': // first date has passed
   					View.buildDateState1();
   					break;
   
   				case 'date-2': // second date has passed
   					View.buildDateState2();
   					break;
   			}
   		</codeblock>
   		<br><br>
   */
exports.default = DateStates;

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
// TODO - update expand() / collapse() to new requestExpand() / requestCollapse()
//		- change onExitCollapse to event based, similar to Gesture for clarity
//		- https://www.google.com/doubleclick/studio/docs/sdk/html5/en/class_studio_Enabler.html
/**
	@class DcsExpandable
	@desc
		A static class for DoubleClick Expandable Units: Creates Markup and handles core expand/collapse logic.

	@example
		// Parameters found in the adParams object in the index		
		expandable: {
			expandedX			: 0,	// expanded x position
			expandedY			: 0,	// expanded y position
			collapsedX		: 0,	// collapsed y position
			collapsedY		: 0,	// collapsed x position
			collapsedWidth		: 300,	// collapsed height
			collapsedHeight	: 50,	// collapsed width
			expanded			: true,	// sets whether or not the unti starts in the expanded state
			collapseOnExit		: true	// sets whether or not the unit collapses when exiting the unit
		},
*/
var DcsExpandable = new function () {
	var D = this;
	var _afterInitExpanded = true;

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
 	@memberOf DcsExpandable
 	@method collapse
 	@param {GestureEvent} gestureEvent 
 		if `DcsExpandable.collapse` is passed as the callback to {@link Gesture}, then it will be assumed that this was a 
 		user-request for collapse, in which case it will be reported as such.
 	@desc
 		Manually starts the unit to collapse. 
 	@example
 		DcsExpandable.collapse();
 */
	D.collapse = function (gestureEvent) {
		Enabler.requestCollapse();
		if (gestureEvent) Enabler.reportManualClose();
	};

	/**
 	@memberOf DcsExpandable
 	@method expand
 	@desc
 		Manually starts the unit to expand
 	@example
 		DcsExpandable.expand();
 */
	D.expand = function () {
		Enabler.requestExpand();
	};

	/**
 	@memberOf DcsExpandable
 	@method linkMainContainers
 	@param {element} collapsed
 		The collapsed container, should be called: adData.elements.stage.collapsedContainer
 	@param {element} expanded
 		The expanded container, should be called: adData.elements.stage.expandedContainer
 	@desc
 		Creates a re-direct link from the Edge output version of the collapse and expand containers to the buil versions.
 		Edge outputs elements onto a stage object, hand coded elements do not. This ethod bridges that gap.
 	@example
 		//
 		DcsExpandable.linkMainContainers( 
 			adData.elements.stage.collapsedContainer, 
 			adData.elements.stage.expandedContainer 
 		);
 */
	D.linkMainContainers = function (collapsed, expanded) {
		adData.elements.expandedContainer = expanded;
		adData.elements.collapsedContainer = collapsed;
	};

	/**
 	@memberOf DcsExpandable
 	@method init
 	@desc
 		Initailizes the class, adding all listeners and setting the initail state of the unit: either expand or collapse.
 	@example
 		DcsExpandable.init();
 */
	D.init = function () {
		trace('DcsExpandable.init()');
		// Define this var on adData instance
		adData.userHasInteracted = false;

		Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, Control.handleExpandStart);
		Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, handleExpandFinish);
		Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, Control.handleCollapseStart);
		Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, handleCollapseFinish);

		//Enabler.setExpandingPixelOffsets( adParams.expandable.expandedX, adParams.expandable.expandedY, adParams.adWidth, adParams.adHeight );

		if (adParams.expandable.expanded) {
			_afterInitExpanded = false;
			Enabler.setStartExpanded(true);
			Enabler.requestExpand();
		}
	};

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS
	function handleExpandFinish(event) {
		Control.handleExpandFinish.call();
		adData.userHasInteracted = _afterInitExpanded;
		_afterInitExpanded = true;
	}

	function handleCollapseFinish(event) {
		Control.handleCollapseFinish.call();
		adData.userHasInteracted = true;
	}
}();
exports.default = DcsExpandable;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adEvents = __webpack_require__(78);

var Expandable = new function () {
	var E = this;

	var _afterInitExpanded = true;
	var _expandStart;
	var _expandComplete;
	var _collapseStart;
	var _collapseComplete;

	/* ---------------------------------------------------------------------------------------------------- */
	// PUBLIC PROPERTIES
	E.userHasInteracted = false;

	/* ---------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS
	E.init = function (arg) {

		arg = arg || {};
		_expandStart = arg.expandStart || function () {};
		_expandComplete = arg.expandComplete || function () {};
		_collapseStart = arg.collapseStart || function () {};
		_collapseComplete = arg.collapseComplete || function () {};

		/*-- Red.Component.expandable_init_content.start --*/
		/*-- Red.Component.expandable_init_content.end --*/

		if (adParams.expandable.expanded) {
			_afterInitExpanded = false;

			/*-- Red.Component.expandable_init_expanded.start --*/
			/*-- Red.Component.expandable_init_expanded.end --*/

			E.expand();
		}
	};

	E.collapse = function (gestureEvent) {
		if (gestureEvent) {
			_adEvents.GestureEvent.stop(gestureEvent);
		}
		/*-- Red.Component.expandable_collapse_content.start --*/
		handleCollapseStart();
		/*-- Red.Component.expandable_collapse_content.end --*/
	};

	E.expand = function (gestureEvent) {
		if (gestureEvent) {
			_adEvents.GestureEvent.stop(gestureEvent);
		}
		/*-- Red.Component.expandable_expand_content.start --*/
		handleExpandStart();
		/*-- Red.Component.expandable_expand_content.end --*/
	};

	E.collapseComplete = function () {
		/*-- Red.Component.expandable_collapsecomplete_content.start --*/
		handleCollapseComplete();
		/*-- Red.Component.expandable_collapsecomplete_content.end --*/
	};

	E.expandComplete = function () {
		/*-- Red.Component.expandable_expandcomplete_content.start --*/
		handleExpandComplete();
		/*-- Red.Component.expandable_expandcomplete_content.end --*/
	};

	/* ---------------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS
	function handleExpandStart(event) {
		_expandStart.call();
	}

	function handleExpandComplete(event) {
		_expandComplete.call();
		E.userHasInteracted = _afterInitExpanded;
		_afterInitExpanded = true;
	}

	function handleCollapseStart(event) {
		_collapseStart.call();
		E.userHasInteracted = true;
	}

	function handleCollapseComplete(event) {
		_collapseComplete.call();
		E.userHasInteracted = true;
	}
}();

exports.default = Expandable;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _GestureBase = __webpack_require__(79);

var _GestureBase2 = _interopRequireDefault(_GestureBase);

var _adView = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO - ? remove gestureBase if no events added
// 		- ? total distance

/**
	@class Gesture
	@desc
		This module is used for seamless use of Mouse / Touch Events, such as click vs tap, mousedown vs touch down, etc.  
		This class figures which to use and reports custom events.<br><br>
	
		See {@link GestureEvent} for available events.
*/
var Gesture = new function () {
	var G = this;

	var _targets = [];
	var _disableList = [];
	var _eventPass = document.createEventObject != undefined;
	var _eventLooping = false;

	G._kills = {};

	/* ------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
 	@memberOf Gesture
 	@method add | addEventListener
 	@param {element} target
 		The DOM element
 	@param {string} name
 		The event's name as a String or GestureEvent constant
 	@param {function} handler
 		The function to be called on event trigger
 	@desc
 		Registers an event so that the listener receives notification of an event.
 		
 	@example
 		Gesture.addEventListener( myDiv, GestureEvent.CLICK, handleClick );
 		function handleClick( event ) {
 			trace( 'Click heard' );
 		}					
 */
	G.add = G.addEventListener = function (target, name, handler) {
		var _gestureBase = getGestureBase(target);
		_gestureBase.register(name, handler);
		_adView.Styles.setCss(target, 'cursor', 'pointer');

		// OVERWRITES mouseChildren(false) of parent
		_adView.Styles.setCss(target, 'pointer-events', 'auto');
	};

	/**
 	@memberOf Gesture
 	@method remove | removeEventListener
 	@param {element} target
 		The DOM element
 	@param {string} name
 		The event's name as a String or GestureEvent constant
 	@param {function} handler
 		The function registered for call on event trigger
 	@desc
 		Unregisters an event of notifications.
 		@example
 		Gesture.removeEventListener ( myDiv, GestureEvent.CLICK, handleClick );					
 */
	G.remove = G.removeEventListener = function (target, name, handler) {
		var _gestureBase = getGestureBase(target);
		if (_gestureBase) {
			_gestureBase.unregister(name, handler);
			if (_gestureBase.eventList.length <= 0) {
				_adView.Styles.setCss(target, 'cursor', 'auto');
			}
		}
	};

	/**
 	@memberOf Gesture
 	@method disable
 	@param {element} target
 		The DOM element
 	@desc
 		Disables a DOM element from responding the mouse/touch/gesture events. For bubbling events, such as click, this will disable its children as well.
 	
 	@example	
 		Gesture.disable( myDiv );
 */
	G.disable = function (target) {
		var gestureBase = getGestureBase(target);
		_disableList.push(gestureBase);

		if (_eventPass) {
			gestureBase.register(GestureEvent.CLICK, handlePassThroughClick);
			_adView.Styles.setCss(target, 'cursor', 'auto');
		} else {
			_adView.Styles.setCss(target, 'pointer-events', 'none');
		}
	};

	/**
 	@memberOf Gesture
 	@method disableChildren
 	@param {element} target
 		The DOM element
 	@desc
 		Disables all child DOM elements from responding the mouse/touch/gesture events. For bubbling events, such as click, this is unnecessary
 		@example
 		Gesture.disableChildren ( myDiv );
 */
	G.disableChildren = function (target) {
		setActiveChildren(target, false);
	};

	/**
 	@memberOf Gesture
 	@method enable
 	@param {element} target
 		The DOM element
 	@desc
 		Enables all a DOM element to responding the mouse/touch/gesture events. For bubbling events, such as click, this will enable its children as well.
 		@example
 		Gesture.disable ( myDiv );
 */
	G.enable = function (target) {
		var gestureBase = getGestureBase(target);

		for (var i = 0; i < _disableList.length; i++) {
			if (gestureBase == _disableList[i]) {
				if (_eventPass) {
					gestureBase.unregister(GestureEvent.CLICK, handlePassThroughClick);
				} else {
					_adView.Styles.setCss(target, 'pointer-events', 'auto');
					_adView.Styles.setCss(target, 'cursor', 'pointer');
				}
				break;
			}
		}
	};

	/**
 	@memberOf Gesture
 	@method enableChildren
 	@param {element} target
 		The DOM element
 	@desc
 		Enables all child DOM elements to responding the mouse/touch/gesture events. For bubbling events, such as click, this is unnecessary
 		@example
 		Gesture.enableChildren ( myDiv );
 */
	G.enableChildren = function (target) {
		setActiveChildren(target, true);
	};

	/* ------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function getGestureBase(target) {
		var _gestureBase = null;
		for (var i = 0; i < _targets.length; i++) {
			if (_targets[i].elem === target) {
				_gestureBase = _targets[i];
				break;
			}
		}
		if (!_gestureBase) {
			_gestureBase = createGestureBase(target);
		}
		return _gestureBase;
	}

	function createGestureBase(target) {
		var _gestureBase = new _GestureBase2.default(target);
		_targets.push(_gestureBase);
		return _gestureBase;
	}

	function setActiveChildren(target, active) {
		var gestureBase = getGestureBase(target);
		if (gestureBase.hasActiveChildren != active) {
			gestureBase.hasActiveChildren = active;
			var children = gestureBase.elem.getElementsByTagName('*');
			for (var i = 0; i < children.length; i++) {
				//trace ( typeof children[i], ' ; ', children[i].id )
				// gets only the children, not grand-children
				if (children[i].parentNode == target) {
					active ? G.enable(children[i]) : G.disable(children[i]);
				}
			}
		}
	}

	function getNextLayerElement(target, x, y, list) {
		target.style.visibility = 'hidden';
		list.push(target);

		var elem = document.elementFromPoint(x, y);
		//trace ( 'elementFromPoint() : ', elem.id );

		for (var i = 0; i < _disableList.length; i++) {
			//trace ( ' => disable list: ', i, ' : ', _disableList[i].elem.id )
			if (_disableList[i].elem == elem) {
				//trace ( '  -^ match so go again')
				return getNextLayerElement(elem, x, y, list);
			}
		}

		return elem;
	}

	function getForwardedTarget(event) {
		var hiddenList = [];

		var el = getNextLayerElement(event.target, event.clientX, event.clientY, hiddenList);
		//trace ( ' returned element: (', event.clientX, ', ', event.clientY, ') ', el.id )

		//trace ( 'hidden list:')
		for (var i = 0; i < hiddenList.length; i++) {
			//trace ( '  -> ', i, ' ', hiddenList[i].id )
			hiddenList[i].style.visibility = 'visible';
		}
		hiddenList = [];

		event.stopImmediatePropagation();
		//trace ( ' - STOP - ')

		return el;
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS

	// IE 9 & 10 needs to have events captured and passed to the next layer dom element
	function handlePassThroughClick(event) {
		//trace ( 'pass through:', event )
		var el = getForwardedTarget(event);

		// IE 9+
		var evt = document.createEvent("HTMLEvents");
		evt.initEvent(event.type, true, false);
		//trace ( '     # ', el.id, ' is dispatching ' )
		el.dispatchEvent(evt);
	}
}();

exports.default = Gesture;

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class UIEvent
	@desc
		This module has custom events to be used with the <UIComponents>
*/
var UIEvent = function () {

	var _componentEnabled = new CustomEvent('uiComponentEnabled');
	var _sliderUpdate = new CustomEvent('uiSliderUpdate');

	return {

		/**	
  	@memberOf UIEvent	
  	@const {string} ENABLED
  	@desc
  		Represents an 'uiComponentEnabled', fired when the enabled state of a <UIComponent> changes; useful when extending a component.
  	@example
  		UIEvent.ENABLED
  */
		ENABLED: 'uiComponentEnabled',

		/**	
  	@memberOf UIEvent	
  	@const {string} RESIZE
  	@desc
  		Description needed_________.
  	@example
  		UIEvent.RESIZE
  */
		RESIZE: 'uiResize',

		/**	
  	@memberOf UIEvent	
  	@const {string} SLIDER_UPDATE
  	@desc
  		Represents an 'uiSliderUpdate', fired when a <UISlider> changes its value.
  	@example
  		UIEvent.SLIDER_UPDATE
  */
		SLIDER_UPDATE: 'uiSliderUpdate',

		componentEnabled: _componentEnabled,
		sliderUpdate: _sliderUpdate
	};
}();

exports.default = UIEvent;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _keys = __webpack_require__(66);

var _keys2 = _interopRequireDefault(_keys);

var _FrameRateBase = __webpack_require__(81);

var _FrameRateBase2 = _interopRequireDefault(_FrameRateBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FrameRate = new function () {
	var F = this;

	var _isPaused = true;
	var _isActive = true;
	var _sets = {};
	var _RAF;

	/** ----------------------------------------------------------------------------------------------- */
	// POLYFILL : check for and/or replace window.requestAnimationFrame

	// there is a bug in iOS6 for RAF, so just detect being on it and fall back
	var _isiOS6 = /iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent);

	var _prefix = ['webkit', 'moz'];
	for (var i = 0; !window.requestAnimationFrame && i < _prefix.length; i++) {
		window.requestAnimationFrame = window[_prefix[i] + 'RequestAnimationFrame'];
		window.cancelAnimationFrame = window[_prefix[i] + 'CancelAnimationFrame'] || window[_prefix[i] + 'CancelRequestAnimationFrame'];
	}

	if (!window.requestAnimationFrame || !window.cancelAnimationFrame || _isiOS6) {
		trace('PolyFill -> FrameRate');
		window.requestAnimationFrame = function (callback) {
			return setTimeout(callback, 17);
		};
		window.cancelAnimationFrame = clearTimeout;
	}

	/** ----------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
 	@memberOf FrameRate
 	@method register
 	@param {string} from
 		Where the handler method exists; the class/module where it is declared
 	@param {function} handler
 		A method to be called on every tick of the engine
 	@param {number} fps
 		Optional, set the number of times to be called per second
 	@desc
 		Registers a method to be called, by adding it to collection.
 		@example
 		// Uses the default fps, being called 30 times per second
 		FrameRate.register ( this, myFunctionA );
 			// Set the fps to only be called 12 times per second 
 		FrameRate.register ( this, myFunctionB, 12 );
 */
	F.register = function (from, handler, fps) {
		fps = fps || 30;
		if (!_sets[fps]) {
			_sets[fps] = new _FrameRateBase2.default(fps);
		}

		var pool = _sets[fps].pool;
		for (var i = 0; i < pool.length; i++) {
			if (pool[i].from === from && pool[i].handler === handler) {
				return;
			}
		}
		pool.push({
			handler: handler,
			from: from
		});

		if (_isActive) F.resume();
	};

	/**
 	@memberOf FrameRate
 	@method unregister
 	@param {string} from
 		Where the handler method exists; the class/module where it is declared
 	@param {function} handler
 		A method previously called on every tick of the engine
 	@param {number} fps
 		Optional, specifies where the handler was called from
 	@desc
 		Unregisters a method from being called, by removing it from collection.
 		@example
 		// searches all interal pools to unregister the callback
 		FrameRate.unregister ( this, myFunctionA );
 			// if the fps when registered is known, will only look in that pool to unregister
 		FrameRate.unregister ( this, myFunctionB, 12 );
 */
	F.unregister = function (from, handler, fps) {
		//var handlerString = handler.toString();

		for (var key in _sets) {
			// if fps is provided, only look in that FrameRateBase for handlers
			if (fps && key != fps) {
				continue;
			}
			// otherwise, remove all references to that handler

			var pool = _sets[key].pool;
			for (var i = 0; i < pool.length; i++) {
				//if ( h[i].toString() === handlerString ){
				if (pool[i].from === from && pool[i].handler === handler) {
					pool.splice(i, 1);
					break;
				}
			}

			// removes the FrameRateBase object with no handlers
			if (pool.length == 0) {
				delete _sets[key];
			}
		}

		if ((0, _keys2.default)(_sets).length === 0) {
			F.pause();
			_isActive = true;
		}
	};

	/**
 	@memberOf FrameRate
 	@method pause
 	@param {} arguments
 		Target Frames Per Seconds times to pause, can be infinite
 	@desc
 		Pauses the engine's ticker, deactivating ALL methods listening to FrameRate. 
 		FrameRate will stay paused when more listeners are added, only activating again when calling resume()
 		However, by passing in a target Frames Per Second, it will only pause those methods.
 		@example
 		// Pauses the whole engine
 		FrameRate.pause();
 		
 		// Pauses only methods registered at 12 Frames Per Second
 		FrameRate.pause(12);
 			// Pauses all methods registerd at provided Frames Per Seconds
 		FrameRate.pause(18,24,30);
 */
	F.pause = function () {
		if (arguments.length > 0) {
			for (var i = 0; i < arguments.length; i++) {
				var fpsTarget = arguments[i];
				if (_sets[fpsTarget]) {
					_sets[fpsTarget]._paused = true;
					_isPaused = true;
				}
			}
			for (var d in _sets) {
				if (!_sets[d]._paused) {
					_isPaused = false;
					break;
				}
			}
		} else {
			for (var d in _sets) {
				_sets[d]._paused = true;
			}_isPaused = true;
		}

		if (_isPaused) {
			_isActive = false;
			window.cancelAnimationFrame(_RAF);
		}
	};

	/**
 	@memberOf FrameRate
 	@method resume
 	@param {} arguments
 		Target Frames Per Secons times to resume, can be infinite
 	@desc
 		Resumes the engine's ticker, activating ALL methods listening to FrameRate. 
 		However, by passing in a target Frames Per Second, it will only resume those methods.
 	
 	@example
 		// Resumes the whole engine
 		FrameRate.resume();
 		
 		// Resumes only methods registered at 12 Frames Per Second
 		FrameRate.resume(12);
 			// Resumes all methods registerd at provided Frames Per Seconds
 		FrameRate.resume(18,24,30);
 */
	F.resume = function () {
		var _currentlyRunning = !_isPaused;
		if (arguments.length > 0) {
			for (var i = 0; i < arguments.length; i++) {
				var fpsTarget = arguments[i];
				if (_sets[fpsTarget]) {
					_sets[fpsTarget]._paused = false;
					_isPaused = false;
				}
			}
		} else {
			for (var d in _sets) {
				_sets[d]._paused = false;
			}_isPaused = false;
		}

		if (!_currentlyRunning) {
			_isActive = true;
			_RAF = window.requestAnimationFrame(tick);
		}
	};

	/**
 	@memberOf FrameRate
 	@method secondsAsFrames
 	@param {number} sec
 		A time in seconds
 	@desc
 		Converts a time in seconds to a Frames Per Second decimal value. For use when an interval longer than once per soecond is needed, 
 		similar to setInterval, however, this uses the single internal ticker to combat perfoormance hits.
 	
 	@example
 		// You want a callback to happen every 3.2 seconds
 		var time = 3.2;
 			function myFunction(){
 			trace ( "I get called every 3.2 seconds" );
 		}
 			// Get the time as an Frames Per Second
 		var fps = FrameRate.secondsAsFrames(time);
 		
 		// Use it to register
 		FrameRate.register(myFunction, fps);
 */
	F.secondsAsFrames = function (sec) {
		return 1 / sec;
	};

	/** ----------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function tick() {
		//trace ( 'tick' )
		if (!_isPaused) {
			for (var h in _sets) {
				_sets[h].tick();
			}

			// call tick again          
			window.requestAnimationFrame(tick);
		}
	}
}(); /**
     	@class FrameRate
     	@desc
     		This module is used for constant consistent updates, akin to ENTER_FRAME in AS3, utilizing requestAnimationFrame at its core. Register a function
     		and it will be called on every tick. Optionally, you can register a function with a frame rate value for specific frequency calls.  This is useful
     		when working with multiple animation sequences at once.	
     	
     	@example
     		// have any methods			
     		function myFunctionA () {
     			trace( 'myFunctionA' );
     		}
     
     		function myFunctionB() {
     			trace ( 'myFunctionB' );
     		}
     
     		function myFunctionC() {
     			trace ( 'myFunctionC' );
     		}
     
     		// Register any method, anywhere
     		FrameRate.register ( this, myFunctionA );
     		FrameRate.register ( this, myFunctionB );
     
     		// Register with custom time, say only 7 calls per second
     		FrameRate.register ( this, myFunctionC, 7 );
     
     		// Pause the whole engine so no methods are called
     		FrameRate.pause();
     
     		// Then start is back up
     		FrameRate.resume();
     
     		// or remove a method later
     		FrameRate.unregister ( this, myFunctionA );
     
     		// or pause all methods at a specific frame rate
     		FrameRate.pause ( 7 ) // this pauses only myFunctionC, but myFunctionB will continue to be called
     */
exports.default = FrameRate;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _DateUtils = __webpack_require__(55);

var _DateUtils2 = _interopRequireDefault(_DateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RecurringDates = function RecurringDates() {

	var self = this;

	/**
 	@memberof RecurringDates
 	@method init
 	@param {array} _dateModel
 		See the top of this page for a detailed example of what this list of objects looks like.
 	@param {object} _tzDesignation
 		Optional. Default is {@link DateUtils.TZ_LOCAL}.
 	@desc
 		Prepares the class with a schedule of dates and an optional timezone-designation, against which to compare times.
 */
	self.init = function (_dateModel, _tzDesignation) {
		trace('RecurringDates.init()');
		self.dateModel = _dateModel;
		self.tzDesignation = _tzDesignation || _DateUtils2.default.TZ_LOCAL;
		self.parseModel();
	};

	/**
 	@memberof RecurringDates
 	@method getNextStartDate
 	@param {string} _name
 		corresponds to the name property in submitted date-model, which is documented at the top of this page.
 	@returns {Date}
 		Returns as a Date object representing the tunein time for the next event. If you have multiple groups of events, 
 		for example, "weekday" and "weekend", you can specify which date is returned by the name property of date-object.
 	*/
	self.getNextStartDate = function (_name) {
		return self.getDateModelFor(_name).nextStartDate;
	};

	/**
 	@memberof RecurringDates
 	@method getNextEndDate
 	@param {string} _name
 		corresponds to the name property in submitted date-model, which is documented at the top of this page.
 	@returns {Date}
 		Returns as a Date object representing the expiration time for the next event. If you have multiple groups of events, 
 		for example, "weekday" and "weekend", you can specify which date is returned by the name property of date-object.
 */
	self.getNextEndDate = function (_name) {
		return self.getDateModelFor(_name).nextEndDate;
	};

	/* -- INTERNAL ------------------------------------------------------------
  *
  *
  */

	// loop all the events and create actual date objects representing the next show
	self.parseModel = function () {
		for (var i in self.dateModel) {
			trace(' checking: ' + self.dateModel[i].name);
			var eventTimeDates = self.getShowtimeDatesOfNext(self.dateModel[i]);
			self.dateModel[i].nextStartDate = eventTimeDates.startDate;
			self.dateModel[i].nextEndDate = eventTimeDates.endDate;
			trace('  - next show: ' + self.dateModel[i].nextStartDate, '\n');
		}
	};

	self.getShowtimeDatesOfNext = function (_event) {
		var fewestDaysToNextShow = 100;
		var lastShow;
		var nextShow;
		var dayIndexForNow = self.getDayIndexForNow();
		for (var i in _event.tuneins) {
			trace('  - checking tunein: ' + _event.tuneins[i].days + ', startTime: ' + _event.tuneins[i].startTime + ' - endTime: ' + _event.tuneins[i].endTime);
			for (var j in _event.tuneins[i].days) {
				var eventDayIndex = self.getDayIndexFor(_event.tuneins[i].days[j]);
				var daysToNextShow = 0;
				//trace( 'checking event day-index: ' + eventDayIndex + ', now day-index: ' + dayIndexForNow );
				if (eventDayIndex >= dayIndexForNow) daysToNextShow = eventDayIndex - dayIndexForNow;else if (eventDayIndex < dayIndexForNow) daysToNextShow = 7 - dayIndexForNow + eventDayIndex;

				if (daysToNextShow < fewestDaysToNextShow) {
					var eventTimeDates = self.buildShowtimeDatesFor(_event.tuneins[i], daysToNextShow);
					//trace( 'now: ' + DateUtils.getNow( this.tzDesignation ) + '\nstart: ' + eventTimeDates.startDate + '\nend: ' + eventTimeDates.endDate );
					if (_DateUtils2.default.getNow(self.tzDesignation).getTime() < eventTimeDates.endDate.getTime()) {
						fewestDaysToNextShow = daysToNextShow;
						nextShow = eventTimeDates;
					} else {
						// for events that are once-a-week, but passed for today, push this date forward a week
						lastShow = eventTimeDates;
						lastShow.startDate.setHours(7 * 24 + eventTimeDates.startDate.getHours());
						lastShow.startDate.setMinutes(eventTimeDates.startDate.getMinutes());
						lastShow.endDate.setHours(7 * 24 + eventTimeDates.endDate.getHours());
						lastShow.endDate.setMinutes(eventTimeDates.endDate.getMinutes());
					}
				}
			}
		}
		if (!nextShow) return lastShow;else return nextShow;
	};

	self.buildShowtimeDatesFor = function (_tunein, _daysToNextShow) {
		//trace( 'RecurringDates.buildShowtimeDatesFor(), tunein: ' + _tunein + ', daysToNextShow: ' + _daysToNextShow );
		var result = {};

		var eventTimeStart = _tunein.startTime.split(':');
		var eventStartHours = eventTimeStart[0];
		var eventStartMinutes = eventTimeStart[1];
		var eventTimeEnd = _tunein.endTime.split(':');
		var eventEndHours = eventTimeEnd[0];
		var eventEndMinutes = eventTimeEnd[1];

		var eventStart = self.adjustDateToStartOfDay();
		eventStart.setHours(_daysToNextShow * 24);
		eventStart.setHours(eventStartHours);
		eventStart.setMinutes(eventStartMinutes);
		eventStart.setSeconds(0);
		result.startDate = _DateUtils2.default.parseToDate(_DateUtils2.default.toTimestamp(eventStart));

		var eventEnd = self.adjustDateToStartOfDay();
		eventEnd.setHours(_daysToNextShow * 24);
		eventEnd.setHours(eventEndHours);
		eventEnd.setMinutes(eventEndMinutes);
		eventEnd.setSeconds(0);
		result.endDate = eventEnd;

		return result;
	};

	self.adjustDateToStartOfDay = function (_date) {
		var now = _DateUtils2.default.getNow(self.tzDesignation);
		var todayMinutes = now.getHours() * 60 + now.getMinutes();
		if (todayMinutes < _DateUtils2.default.newDayStartsAt) now.setHours(now.getHours() - 24);else now.setHours(0);
		now.setMinutes(0);
		return now;
	};

	self.getDayIndexForNow = function () {
		var now = _DateUtils2.default.getNow(self.tzDesignation);
		var todayMinutes = now.getHours() * 60 + now.getMinutes();
		if (todayMinutes < _DateUtils2.default.newDayStartsAt) return now.getDay() > 0 ? now.getDay() - 1 : 6;else return now.getDay();
	};

	// from a day-string, like "monday", return the flash.date day index
	self.getDayIndexFor = function (_day) {
		for (var i in _DateUtils2.default.getLabels().WEEKDAYS_FULL) {
			if (_DateUtils2.default.getLabels().WEEKDAYS_FULL[i].toLowerCase() == _day.toLowerCase()) {
				return parseInt(i);
			}
		}
		return 0;
	};

	// return the requested date object by name
	self.getDateModelFor = function (_name) {
		for (var i in self.dateModel) {
			if (self.dateModel[i].name == _name) return self.dateModel[i];
		}
		return self.dateModel[0];
	};
}; /**
   	@class RecurringDates
   	@desc
   		<span style="color:#ff0000"><b>WARN:</b><br>
   		This class has been deprecated.  See RecurringSchedule 
   		</span>
   
   		<br><br>
   
   		This class is for determining the next showtime for events that repeat on a weekly basis. For example, you have a tune-in that
   		is every Friday at 6pm, and you want your date messaging to update dynamically.
   		<br><br>
   
   		<b>Date Model:</b><br>
   		For an event that is every Friday at 6pm for one hour, the model would look like:<br>
   		<codeblock>
   			// define event model
   			var dateModel = [
   				{	name: 'Once a week',
   					tuneins: [
   						{	days: ['Friday'],
   							startTime: '18:00',
   							endTime: '19:00'
   						}
   					]
   				}
   			];
   		</codeblock>
   		<br><br>
   
   		For more complex schedules( like sports tournaments ), a more complex model might look like this
   		<codeblock>
   			// define event model
   			var dateModel = [
   				{	name: 'Weekend events',
   					tuneins: [
   						{	days: ['Friday','Saturday','Sunday'],
   							startTime: '21:00',
   							endTime: '22:00'
   						}
   					]
   				},
   				{	name: 'Weekday events',
   					tuneins: [
   						{	days: ['Monday','Tuesday','Wednesday','Thursday'],
   							startTime: '18:00',
   							endTime: '19:00'
   						}
   					]
   				}
   			];
   		</codeblock>
   		<br><br>
   		
   		After defining your event model, you must instantiate this class and submit it to {@link RecurringDates.init}. This
   		will figure out for you when the next non-expired event starts, and when it will be over. So, to build on the previous example:
   		<br>
   		<codeblock>
   			// generate next start-end dates
   			var recurringEventsManager = new RecurringDates();
   			recurringEventsManager.init( dateModel );
   		</codeblock>
   		<br><br>
   	
   		Now you can access the "next start date" and "next end date" methods. Use those returned Date objects, along with the standard {@link DateUtils} methods, to 
   		properly format your date-messaging.
   		<codeblock>
   			// trace the date objects
   			var nextStartDate = recurringEventsManager.getNextStartDate();
   			var nextEndDate = recurringEventsManager.getNextEndDate();
   			trace( nextStartDate, nextEndDate );
   
   			// trace the messaging for the dates
   			var nextStartDateMessage = DateUtils.selectMessagingForDate( nextStartDate );
   			var nextEndDateMessage = DateUtils.selectMessagingForDate( nextEndDate );
   			trace( nextStartDateMessage, nextEndDateMessage );
   		</codeblock>
   */
exports.default = RecurringDates;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adView = __webpack_require__(20);

var Styles_legacy = function () {
	var Styles = {};

	/*	Method: Styles_legacy.init()
 		Add this method ahead of any calls to Styles...probably in PrepareCommon.init()
  */

	/*	Method: Styles.show()
 		Utility for setting a dom element's visibility css to 'visible'.
 		_element				- target dom element */
	Styles.show = function (_element) {
		Styles.setCss(_element, 'visibility', 'visible');
	};

	/*	Method: Styles.hide()
 		Utility for setting a dom element's visibility css to 'hidden'.
 		_element				- target dom element */
	Styles.hide = function (_element) {
		Styles.setCss(_element, 'visibility', 'hidden');
	};

	/*	Method: Styles.setBackgroundImage()
 		Sets the background-image property with an url for the specified element.
 		_target 			- id or element to which css style should be applied
 	_imageUrl 			- image url */
	Styles.setBackgroundImage = function (_target, _imageUrl) {
		var element = _adView.Markup.getElement(_target);
		if (_imageUrl instanceof HTMLImageElement) {
			_imageUrl = _imageUrl.src;
		}
		element.style.backgroundImage = 'url(' + _imageUrl + ')';
	};

	/*	Method: Styles.setBackgroundColor()
 		Sets the background-image property with an url for the specified element.
 		_target 			- id or element to which css style should be applied
 	color 			- hex or rgb color value  */
	Styles.setBackgroundColor = function (_target, _color) {
		var element = _adView.Markup.getElement(_target);
		element.style['background-color'] = _color;
	};

	/*	Method: Styles.getWidth()
 		Returns the css width value for this element.
 		_target			- id or element to which css style should be acquired */
	Styles.getWidth = function (_target) {
		var element = _adView.Markup.getElement(_target);
		return element.offsetWidth;
	};

	/*	Method: Styles.getHeight()
 		Returns the css height value for this element.
 		_target			- id or element to which css style should be acquired */
	Styles.getHeight = function (_target) {
		var element = _adView.Markup.getElement(_target);
		return element.offsetHeight;
	};

	/*	Method: Styles.getTop()
 		Returns the css top value for this element.
 		_target			- id or element to which css style should be acquired */
	Styles.getTop = function (_target) {
		return Styles.getCss(_target, 'top');
	};

	/*	Method: Styles.getLeft()
 		Returns the css left value for this element.
 		_target			- id or element to which css style should be acquired */
	Styles.getLeft = function (_target) {
		return Styles.getCss(_target, 'left');
	};

	/*	Method: Styles.getX()
 		Returns the css transform matrix x value for this element.
 		_target			- id or element to which css style should be acquired */
	Styles.getX = function (_target) {
		return Styles.getCss(_target, 'x');
	};

	/*	Method: Styles.getY()
 		Returns the css transform matrix y value for this element.
 		_target			- id or element to which css style should be acquired */
	Styles.getY = function (_target) {
		return Styles.getCss(_target, 'y');
	};

	return {
		init: function init() {}
	};
}(); /* ----------------------------------------------------------------------------------------------------------------------------------------------------------
     	Class: 	Styles_legacy
     	WARNING: 
     		This class is only used for migrating old ads. 
     
     	Description:
     		This object contains depreciated methods for the Styles module.
     	---------------------------------------------------------------------------------------------------------------------------------------------------------- */
exports.default = Styles_legacy;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adLoad = __webpack_require__(34);

var _adDates = __webpack_require__(177);

var _adUtils = __webpack_require__(1);

var Velvet = new function () {

	var V = this;

	var _baseUrlLive = 'https://json.ff0000-cdn.net/';
	var _baseUrlPreview = 'https://preview.ff0000-cdn.net/preview/';
	var _baseUrlNow;
	var _baseSlugs;
	var _completeCallback;
	var _settings;
	var _debug = false;

	V.adDataRaw = {};

	/* ------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/** 
 	@memberOf Velvet
 	@method init
 	@param {object} settings
 		see "Properties" for more information
 	@param {object} completeCallback
 		Called once the Velvet addata has been loaded
 	@property {string} client
 		the first "slug" in the url string
 	@property {string} locale
 		the second "slug" in the url string
 	@property {string} segment
 		the third "slug" in the url string - this defines the segment, aka the map to which addata will be loaded	
 	@property {string} addata
 		Optionally, when viewing an addata url, the last "slug" defines which data set id being used. This can be manually set in the ad, mostly jsut for testing purposes
 	@desc
 		This passes the settings object from parent scope and initialized the class.  In the index is an Object of "slugs" which are 10 digit Strings which 
 		are keys for locations of the client, locale, segment of the that data on Velvet cdn.
 		@example
 		// in the index.html, inside adParams:
 		velvet : {
 			client 	: "ZcHT9C9y6Z",
 			locale	: "whV1g8DKPe",
 			segment	: "C4iaBG6CoP",
 			//adData 	: "jaScLD8ayE"
 		}
 */
	V.init = function (settings, completeCallback) {
		trace('Velvet.init()');
		_completeCallback = completeCallback;

		if (V.isPreviewLocation()) {
			trace('\tPreview requested');
			_baseUrlNow = _baseUrlPreview;
		} else {
			trace('\tLive requested');
			_baseUrlNow = _baseUrlLive;
		}

		_settings = settings;
		_baseSlugs = _settings.client + '/' + _settings.locale + '/';
		trace('\tbase url:', _baseUrlNow);
		trace('\tbase slugs:', _baseSlugs);

		var query = getQueryParams();
		trace('\tquery:', query);
		if (query.addata) {
			trace('\t\tAd Data set via query');
			_settings.adData = query.addata;
		}

		_settings.adData ? loadAdData() : loadSegment();
	};

	/** 
 	@memberOf Velvet
 	@method get
 	@param {object|string|boolean} arguments
 		The arguments have many possible uses:
 		<br>
 		1. A String can be a name of a node or a path to a node seperated by a "."
 		<br>  
 		2. Object followed by a String is used to specify a starting point for the get method to search for the node provided as the 
 		second argument on the String.  
 		<br>
 		3. A boolean of true as the last argument (second for option 1, third for option 2), will have the method search recurrsively through
 		the data object for the key. Otherwise, it will only look at the level provided.
 		<br>
 		See the example.
 	@description
 		This method is used to get any node from the JSON by name. All nodes in Velvet have a 'type' and 'value'; the return is always the 'value'
 	@example
 		// sample Velvet JSON data
 		{
 			title : {
 				type : "SingleLineText",
 				value  : "WHAT DO YOU SEE?"
 			},
 			matchup : {
 				type : "CollectionSeries",
 				value  : [
 					game : {
 						type : "CollectionSingleItem",
 						value : {
 							away_team : {
 								type : "CollectionSingleItem",
 								value : {
 									name : {
 										type : "SingleLineText",
 										value : "USC"
 									},
 									color :  {
 										type : "Color",
 										value : "#003da5"
 									},
 									logo : {
 										type : "Image",
 										value : {
 											content_type : "image/png",
 											name : "USC_sg1SohS.png",
 											url : "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/TCAHAe8v8B/USC_sg1SohS.png"
 										}
 									}
 								}
 							},
 							home_team : {
 								type : "CollectionSingleItem",
 								value : {
 									name : {
 										type : "SingleLineText",
 										value : "Standford"
 									},
 									color :  {
 										type : "Color",
 										value : "#A80532"
 									},
 									logo : {
 										type : "Image",
 										value : {
 											content_type : "image/png",
 											name : "stanford.png",
 											url : "https://us-east.manta.joyent.com/adtech/public/ad_manager/clients/3YLOU2j85h/collections/tLtLMaynyq/stanford.png"
 										}
 									}
 								}
 							}
 						}
 					}
 				]
 			},
 			live_url : {
 				type : "URL",
 				value : "http://es.pn/2cilNDt?ex_cid=2016_CFB_Banner_3_50005170003"
 			}
 		}
 			// Provide a node name
 		var title = Velvet.get ( 'title' );  // "WHAT DO YOU SEE?"
 			// Get a collection, such as a team for later use:
 		var awayTeam = Velvet.get ( 'away_team', true ); 
 		// returns the whole object of the away_team. Since 'away_team' is nested, the true
 		// will make the get go recursively through all children to find the node.
 		// NOTE: there is only 1 instance of "away_team" so only 1 will return. 
 		// However, if there were more matchups, it would return all away teams as an array.  
 		// So to target specifically this matchup, call the away team by targeted path.
 		// To do so, write out the path using a "." for each child.
 		var awayTeam = Velvet.get ( 'matchup.0.game.away_team' );
 		// Note that there is no need to use the ".value" key as the system assumes
 		// that for you when using Velvet.get().  This returns the object as is, so 
 		// if you use it later, you will need to specify the ".value" to read properly
 			// OR
 			// Use the variable as a starting point for the searching
 		var awayTeamName = Velvet.get ( awayTeam, 'name' );  // "USC"
 */
	V.get = function () {

		// check if the first arg is a key = 'node' / 'path.node' OR is it a sub object to look within		
		var _useRawObject = typeof arguments[0] === 'string';

		var key = arguments[_useRawObject ? 0 : 1];
		var source = _useRawObject ? V.adDataRaw : arguments[0];

		// will it search through all layers? default false
		var recursive = !!arguments[_useRawObject ? 1 : 2];

		if (_debug) trace(Array(100).join('-') + '\nget(', key, ')\nwithin:', source, '\nrecursive:', recursive);
		var result = [];

		// strip the original key of all '.values'
		var strippedKey = key.replace(/\.value(\.|)/g, '.').replace(/\.$/, '');
		if (_debug) trace("\tstrippedKey:", strippedKey);

		// split the path up, eg: 'grand.parent.child' > [ grand, parent, child ]
		var splits = strippedKey.split('.');
		var anchor;
		// remove the last value with is the target node
		var targetKey = splits.pop();

		// add back in all the '.value' where applicable
		var pathInExpanded = '';
		for (var i = 0; i < splits.length; i++) {
			if (i > 0) pathInExpanded += '.';
			pathInExpanded += splits[i];
			if (isNaN(splits[i])) {
				pathInExpanded += '.value';
			}
		}
		if (_debug) trace('\tkey:', key, '\n\tsplits:', splits, '\n\tpathInExpanded:', pathInExpanded);

		// is the a specific path to follow or just a key?
		var _pathed = splits.length > 0;
		if (_pathed) {
			splits = pathInExpanded.split('.');
			// extract out the anchor to know where the path starts at, not necessarily at the top
			anchor = splits.shift();
			splits.push(targetKey);
			if (_debug) trace('\tanchor:', anchor, '\n\tsplits again:', splits);
		}

		function walk(elem) {
			switch (Object.prototype.toString.call(elem)) {
				case '[object Object]':
					walkObject(elem);
					break;
				case '[object Array]':
					walkArray(elem);
					break;
			}
		}

		function walkObject(obj) {
			if (_debug) trace('walkObject() >', obj);

			// at this level, just check key? if not found AND recurrsive, then use loop

			for (var param in obj) {
				readProperty(obj, param);
			}
		}

		function walkArray(arr) {
			if (!_pathed && !isNaN(targetKey)) {
				// if looking for an index value of a passed in array
				result.push(arr[targetKey]);
			} else {
				for (var i = 0; i < arr.length; i++) {
					walkObject(arr[i]);
				}
			}
		}

		function properKey(obj) {
			return obj.hasOwnProperty("value") ? obj.value : obj;
		}

		function readProperty(obj, param) {
			if (_debug) trace('\t\t\t readProperty()', obj, param, '|', anchor, '|', targetKey);
			if (param == targetKey && !_pathed) {
				// if a match is found
				// AND
				// only if no path is set, store it, otherwise it will 
				// store false equivelants when recurively going through objects

				result.push(properKey(obj[param]));
			} else if (param == anchor) {
				// if the anchor, eg 'grand', is found, skip to reading the whole path eg 'grand.parent.child'
				var narrowDown = readPropertyPath(splits, obj[param]);
				if (_debug) trace('param:', param, '\n\tnarrowDown:', narrowDown, '\n\tobj[param]:', obj[param], param);
				if (narrowDown) {
					result.push(properKey(narrowDown));
				}
				return;
			}
			// only if looping thought recursivley, handle objects or arrays
			if (recursive) {
				walk(obj[param]);
			}
		}

		// repurposed from ObjectUtils, reads a path 'grand.parent.child' and returns that node on 'child'
		function readPropertyPath(splits, obj) {
			var result = obj || {};
			var i;
			var s;
			for (i = 0; result && (s = splits[i]); i++) {
				result = s in result ? result[s] : undefined;
			}
			return result;
		}

		// start walking through the top object or array supplied
		walk(source);

		if (result.length == 1) {
			result = result[0];
		} else if (result.length == 0) {
			result = undefined;
		}

		if (_debug) trace(result);

		return result;
	};

	/** 
 	@memberOf Velvet
 	@method isPreviewLocation
 	@description
 		This method returns true for all the locations that should load PREVIEW.JSON instead of published.json.
 		Safeguards are in place so that even an ad in a staging/build-state will load published json, if running in 
 		any http(s) locations other than the ones listed. 
 */
	V.isPreviewLocation = function () {
		var href = window.location.href;
		if (href == undefined || href == null) return false;
		if (queryParams.velvet === 'production') {
			return false;
		}
		// local locations
		if (href.match(/^file/) || href.match(/manta\.joyent\.com/) || href.match(/ff0000\.com/) || href.match(/adprodtest/) || href.match(/client\-projects\.com/) || href.match(/[0-9]+\.[0-9]+\.[0-9]+\.[0-9]+:[0-9]+/)) return true;

		// other locations
		return false;
	};

	/* ------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function loadSegment() {
		new _adLoad.DataLoader(_baseUrlNow + _baseSlugs + _settings.segment, {
			name: 'segmentLoader',
			fileType: 'json',
			onComplete: handleSegmentLoadComplete,
			onFail: global.failAd
		}).load();
	}

	function loadAdData() {
		new _adLoad.DataLoader(_baseUrlNow + _baseSlugs + _settings.adData, {
			name: 'velvetAdDataLoader',
			fileType: 'json',
			onComplete: handleAdDataLoadComplete,
			onFail: global.failAd
		}).load();
	}

	/* ------------------------------------------------------------------------------------------------------------- */
	// EVENT HANDLERS	
	function handleSegmentLoadComplete(event) {
		var segmentJson = JSON.parse(event.dataRaw);
		trace('Velvet segment Json:\n', segmentJson);

		// check if there is a timezone to apply as default to all display times:
		adParams.defaultTimezone = segmentJson.tz;
		if (adParams.defaultTimezone) {
			trace('\tdefaultTimezone:', adParams.defaultTimezone);
		}

		var timeblocks = segmentJson.timeblocks;

		var now = _adDates.DateManager.getNow();
		trace('\tnow:', new Date(now));

		// sort through timeblocks to find the current
		for (var i = 0; i < timeblocks.length; i++) {
			var startDate = timeblocks[i].time;
			trace('\t\t>', new Date(startDate));
			if (now < startDate) {
				break;
			}
		}
		var latestIndex = i - 1;
		//trace ( '\tnow:', new Date(now), '| timeblock:', new Date(startDate), '| latestIndex:', latestIndex )
		if (latestIndex < 0) {
			global.failAd();
			return;
		} else {
			trace('\tselected timeblock:', timeblocks[latestIndex]);
		}
		var rotation = timeblocks[latestIndex].ad_rotation;

		_settings.adData = _adUtils.MathUtils.randomWeightedKey(rotation);
		trace('\tselected ad slug:', _settings.adData);

		loadAdData();
	}

	function handleAdDataLoadComplete(event) {
		trace('Velvet.handleAdDataLoadComplete()');
		V.adDataRaw = JSON.parse(event.dataRaw);
		//trace ( global.adParams.currentJsonData )
		trace('adDataRaw:\n', V.adDataRaw);

		_completeCallback.call(V);
	}
}(); /**
     	@class	Velvet
     	@static
     	@desc
     		This object is meant to handle all of our json loading and parsing from the Velvet platform.
     
     		<br><br>
     
     		When testing, changing the date can be a crucial testing step. see DateManager for more information.
     */
exports.default = Velvet;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.DateSchedule = exports.RecurringSchedule = exports.TzDate = exports.Timezone = exports.DateFormatter = exports.DateManager = undefined;

var _DateManager = __webpack_require__(56);

var _DateManager2 = _interopRequireDefault(_DateManager);

var _DateFormatter = __webpack_require__(26);

var _DateFormatter2 = _interopRequireDefault(_DateFormatter);

var _Timezone = __webpack_require__(39);

var _Timezone2 = _interopRequireDefault(_Timezone);

var _TzDate = __webpack_require__(25);

var _TzDate2 = _interopRequireDefault(_TzDate);

var _RecurringSchedule = __webpack_require__(178);

var _RecurringSchedule2 = _interopRequireDefault(_RecurringSchedule);

var _DateSchedule = __webpack_require__(82);

var _DateSchedule2 = _interopRequireDefault(_DateSchedule);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DateManager = _DateManager2.default;
exports.DateFormatter = _DateFormatter2.default;
exports.Timezone = _Timezone2.default;
exports.TzDate = _TzDate2.default;
exports.RecurringSchedule = _RecurringSchedule2.default;
exports.DateSchedule = _DateSchedule2.default;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _defineProperties = __webpack_require__(17);

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _DateSchedule = __webpack_require__(82);

var _DateSchedule2 = _interopRequireDefault(_DateSchedule);

var _DateManager = __webpack_require__(56);

var _DateManager2 = _interopRequireDefault(_DateManager);

var _DateFormatter = __webpack_require__(26);

var _DateFormatter2 = _interopRequireDefault(_DateFormatter);

var _TzDate = __webpack_require__(25);

var _TzDate2 = _interopRequireDefault(_TzDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class RecurringSchedule
	@desc
		This class is for determining the next showtime for events that repeat on a weekly basis. For example, you have a tune-in that
		is every Friday at 6pm, and you want your date messaging to update dynamically.
		
		<codeblock>
			var schedule = new RecurringSchedule({	
				tuneins: [
					{	
						days: ['Friday'],
						startTime: '18:00',
						eventDuration : 60
					}
				]
			});			
		</codeblock>
		<br>

		For more complex schedules( like sports tournaments ), a more complex model might look like this
		<codeblock>
			var schedule = new RecurringSchedule({	
				tuneins: [
					{	
						days: ['Friday','Saturday','Sunday'],
						startTime: '21:00',
						eventDuration : 60,
						timezone: Timezone.EST
					},
					{	
						days: ['Monday','Tuesday','Wednesday','Thursday'],
						startTime: '18:00',
						eventDuration : 75,
						timezone: Timezone.EST
					}
				]
			});
		</codeblock>
		<br>
		
		Just like DateSchedule, this uses the standard schedule to create the date messaging, which is accessed with
		the same methods.
		<codeblock>
			schedule.print();
			schedule.currentSchedule.print();
			schedule.currentSchedule.target.print();
			trace ( schedule.current );
			schedule.currentDate.print();
			trace ( schedule.currentLabel );
		</codeblock>
*/
var RecurringSchedule = function RecurringSchedule(dateModel) {

	var R = this;

	var _schedule;

	// ---------------------------------------------------------------------------------------------------------------
	// PUBLIC METHODS
	(0, _defineProperties2.default)(R, {

		/**
  	@memberOf RecurringSchedule
  	@var {object} currentSchedule
  		Getter : A DateSchedule is created for the current date, allowing for the standard messaging to be created
  	@example
  		mySchedule.currentSchedule.print();
  */
		currentSchedule: {
			get: function get() {
				var curStart = _schedule.current.date;
				var current = new _DateSchedule2.default({
					target: curStart,
					isStandard: true,
					eventDuration: curStart.eventDuration,
					callback: curStart.callback
				});

				if (current.isComplete) {
					var nextStart = _schedule.next.date;

					current = new _DateSchedule2.default({
						target: nextStart,
						isStandard: true,
						eventDuration: nextStart.eventDuration,
						callback: nextStart.callback
					});
				}

				return current;
			}
		},

		/**
  	@memberOf RecurringSchedule
  	@var {object} current
  		Getter : An object of the current date, label and optional callback
  	@example
  		mySchedule.current.date;
  		mySchedule.current.label;
  		mySchedule.current.callback();
  */
		current: {
			get: function get() {
				return R.currentSchedule.current;
			}
		},

		/**
  	@memberOf RecurringSchedule
  	@var {TzDate} currentDate
  		Getter : Is direct access to the current date, same as mySchedule.current.date
  	@example
  		mySchedule.currentDate;
  */
		currentDate: {
			get: function get() {
				return R.current.date;
			}
		},

		/**
  	@memberOf RecurringSchedule
  	@var {String} currentLabel
  		Getter : Is direct access to the current label, same as mySchedule.current.label
  	@example
  		mySchedule.currentLabel;
  */
		currentLabel: {
			get: function get() {
				return R.current.label;
			}
		}
	});

	// ---------------------------------------------------------------------------------------------------------------
	// PUBLIC METHODS

	/**
 	@memberOf RecurringSchedule
 	@method print
 	@desc
 		Traces out all dates in order 
 	
 	<codeblock>
 		// called on Thursday 2017-06-01 14:08:00-07:00
 		mySchedule.print();
 			// DateSchedule.print(), length: 8
 		//  - 0 Sat Jan 01 2000 00:00:00 UTC label: 1/1 12:00 am
 		//  - 1 Thu Jun 01 2017 18:00:00 US/Eastern label: undefined
 		//  - 2 Fri Jun 02 2017 21:00:00 US/Eastern label: undefined
 		//  - 3 Sat Jun 03 2017 21:00:00 US/Eastern label: undefined
 		//  - 4 Sun Jun 04 2017 21:00:00 US/Eastern label: undefined
 		//  - 5 Mon Jun 05 2017 18:00:00 US/Eastern label: undefined
 		//  - 6 Tue Jun 06 2017 18:00:00 US/Eastern label: undefined
 		//  - 7 Wed Jun 07 2017 18:00:00 US/Eastern label: undefined
 	</codeblock>
 */
	R.print = function () {
		_schedule.print();
	};

	// ---------------------------------------------------------------------------------------------------------------
	// PRIVATE METHODS

	// loop all the events and create actual date objects representing the next show
	function parseModel() {
		var now = _DateManager2.default.getNow();

		var labels = _DateFormatter2.default.getLabels('english').WEEKDAYS_FULL;

		_schedule = new _DateSchedule2.default();

		// tuneins array of objects
		var tuneins = dateModel.tuneins;
		for (var k = 0; k < tuneins.length; k++) {
			var tuneinObj = tuneins[k];
			var days = tuneinObj.days;

			var dayOfWeek = now.getDay();

			// days array of strings
			for (var q = 0; q < days.length; q++) {

				var dayLabel = days[q];
				var labelIndex = labels.indexOf(dayLabel);
				var dayShift = labelIndex - dayOfWeek;

				var date = new _TzDate2.default({
					datetime: [now.toDateTimeISO().split('T')[0] + 'T' + tuneinObj.startTime + ':00', tuneinObj.timezone]
				});

				date = _DateFormatter2.default.adjust(date, { day: dayShift });

				if (_DateManager2.default.isPast(date, now)) {
					// now check if it is past the duration
					var temp = _DateFormatter2.default.adjust(date, { minute: tuneinObj.eventDuration });
					if (_DateManager2.default.isPast(temp, now)) {
						// if so, add a week to it
						date = _DateFormatter2.default.adjust(date, { day: 7 });
					}
				}

				date.eventDuration = tuneinObj.eventDuration;
				date.callback = tuneinObj.callback;

				trace('\t', date.print());
				_schedule.addDate(date); //, '', tuneinObj.callback );
			}
		}
	}

	// ---------------------------------------------------------------------------------------------------------------
	// INIT
	parseModel();
};

exports.default = RecurringSchedule;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Matrix3D = exports.ParentTransform = exports.SimpleNoise2D = exports.Vector2D = exports.Matrix2D = undefined;

var _Matrix2D = __webpack_require__(84);

var _Matrix2D2 = _interopRequireDefault(_Matrix2D);

var _Matrix3D = __webpack_require__(180);

var _Matrix3D2 = _interopRequireDefault(_Matrix3D);

var _ParentTransform = __webpack_require__(181);

var _ParentTransform2 = _interopRequireDefault(_ParentTransform);

var _SimpleNoise2D = __webpack_require__(182);

var _SimpleNoise2D2 = _interopRequireDefault(_SimpleNoise2D);

var _Vector2D = __webpack_require__(85);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Matrix2D = _Matrix2D2.default;
exports.Vector2D = _Vector2D2.default;
exports.SimpleNoise2D = _SimpleNoise2D2.default;
exports.ParentTransform = _ParentTransform2.default;
exports.Matrix3D = _Matrix3D2.default;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class Matrix3D
*/
var Matrix3D = function Matrix3D() {
	var M = this;
	// initial set identity base matrix array to data
	M.identity = new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]);
	M.data = new Float32Array(M.identity);
};

Matrix3D.prototype = {

	clear: function clear() {
		var M = this;
		M.data.set(M.identity);
	},

	rotateX: function rotateX(radians) {
		var M = this;
		var c = Math.cos(radians).toFixed(15);
		var s = Math.sin(radians).toFixed(15);

		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[5] = c;
		_m[6] = s;
		_m[9] = -s;
		_m[10] = c;
		//  1, 0,        0,         0,
		//  0, cos(rad), sin(rad), 0,
		//  0, -sin(rad), cos(rad),  0,
		//  0, 0,        0,         1 

		M.multiply(_m);
		return M;
	},

	rotateY: function rotateY(radians) {
		var M = this;
		var c = Math.cos(radians).toFixed(15);
		var s = Math.sin(radians).toFixed(15);

		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[0] = c;
		_m[2] = -s;
		_m[8] = s;
		_m[10] = c;
		//  cos(rad),  0, -sin(rad), 0,
		//  0,         1, 0,        0,
		//  sin(rad), 0, cos(rad), 0,
		//  0,         0, 0,        1  

		M.multiply(_m);
		return M;
	},

	rotateZ: function rotateZ(radians) {
		var M = this;
		var c = Math.cos(radians).toFixed(15);
		var s = Math.sin(radians).toFixed(15);

		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[0] = c;
		_m[1] = s;
		_m[4] = -s;
		_m[5] = c;
		//  cos(rad),  sin(rad), 0, 0,
		//  -sin(rad), cos(rad), 0, 0,
		//  0,         0,        1, 0,
		//  0,         0,        0, 1  

		M.multiply(_m);
		return M;
	},

	scale: function scale(x, y) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[0] = x;
		_m[5] = y;
		//  x, 0, 0, 0,
		//  0, y, 0, 0,
		//  0, 0, 1, 0,
		//  0, 0, 0, 1  

		M.multiply(_m);
		return M;
	},

	skew: function skew(ax, ay) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[1] = Math.tan(ay) || 0;
		_m[4] = Math.tan(ax) || 0;
		//  1,       tan(ay), 0, 0,
		//  tan(ax), 1,       0, 0,
		//  0,       0,       1, 0,
		//  0,       0,       0, 1 
		trace(_m[1], _m[4]);
		M.multiply(_m);
		return M;
	},

	translate: function translate(x, y, z) {
		var M = this;
		// copy the identity to be modified
		var _m = new Float32Array(M.identity);
		_m[12] = x || 0;
		_m[13] = y || 0;
		_m[14] = z || 0;
		//  1, 0, 0, 0,
		//  0, 1, 0, 0,
		//  0, 0, 1, 0,
		//  x, y, z, 1 

		M.multiply(_m);
		return this;
	},

	multiply: function multiply(m) {
		var M = this;
		// copy the current matrix data into '_c'
		var _c = new Float32Array(M.data);

		M.data[0] = _c[0] * m[0] + _c[1] * m[4] + _c[2] * m[8];
		M.data[1] = _c[0] * m[1] + _c[1] * m[5] + _c[2] * m[9];
		M.data[2] = _c[0] * m[2] + _c[1] * m[6] + _c[2] * m[10];
		M.data[3] = 0;
		M.data[4] = _c[4] * m[0] + _c[5] * m[4] + _c[6] * m[8];
		M.data[5] = _c[4] * m[1] + _c[5] * m[5] + _c[6] * m[9];
		M.data[6] = _c[4] * m[2] + _c[5] * m[6] + _c[6] * m[10];
		M.data[7] = 0;
		M.data[8] = _c[8] * m[0] + _c[9] * m[4] + _c[10] * m[8];
		M.data[9] = _c[8] * m[1] + _c[9] * m[5] + _c[10] * m[9];
		M.data[10] = _c[8] * m[2] + _c[9] * m[6] + _c[10] * m[10];
		M.data[11] = 0;
		M.data[12] = _c[12] * m[0] + _c[13] * m[4] + _c[14] * m[8] + m[12];
		M.data[13] = _c[12] * m[1] + _c[13] * m[5] + _c[14] * m[9] + m[13];
		M.data[14] = _c[12] * m[2] + _c[13] * m[6] + _c[14] * m[10] + m[14];
		M.data[15] = 1;
	},

	getCss: function getCss() {
		var M = this;
		return 'matrix3d(' + M.data[0] + ',' + M.data[1] + ',' + M.data[2] + ', 0,' + M.data[4] + ',' + M.data[5] + ',' + M.data[6] + ', 0,' + M.data[8] + ',' + M.data[9] + ',' + M.data[10] + ', 0,' + M.data[12] + ',' + M.data[13] + ',' + M.data[14] + ', 1)';
	}
};

Matrix3D.cssToData = function (matrixString) {
	return matrixString.match(/\(([^\)]+)\)/)[1].replace(/\s/g, '').split(',').map(Number);
};

exports.default = Matrix3D;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Matrix2D = __webpack_require__(84);

var _Matrix2D2 = _interopRequireDefault(_Matrix2D);

var _adUtils = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class ParentTransform
*/

// pseudo?
// TODO - change order of translations, possible seperate methods that have indexes which can be a re-orderable aray
//		- convert to prototype pattern for multiple instances?
var ParentTransform = function ParentTransform(arg) {

	var self = this;

	arg = arg || {};
	/* --------------------------------------------------------------------------- */
	// PUBLIC / PASSED-IN VARIABLES
	self.rotation = arg.rotation || 0, // in degrees, gets converted to radians before passing to Matrix2D
	self.x = arg.x || 0, self.y = arg.y || 0, self.scaleX = arg.scaleX || 1, self.scaleY = arg.scaleY || 1, self.originX = arg.originX || 0, self.originY = arg.originY || 0;
	self.points = arg.points || [];

	/* --------------------------------------------------------------------------- */
	// PUBLIC 
	self.calculatedPoints = [];

	/* --------------------------------------------------------------------------- */
	// PRIVATE VARIABLES	
	var _matrix = new _Matrix2D2.default();
	trace(_matrix);

	/* --------------------------------------------------------------------------- */
	// PUBLIC METHODS
	self.addPoint = function (toAdd) {
		self.points.push(toAdd);
	};

	self.addPoints = function (toAdd) {
		self.points = self.points.concate(toAdd);
	};

	self.update = function (callback) {
		_matrix.clear();
		_matrix.translate(self.x, self.y);
		_matrix.scale(self.scaleX, self.scaleY);
		_matrix.rotate(_adUtils.MathUtils.toRadians(self.rotation));

		self.calculatedPoints = [];
		for (var i = 0; i < this.points.length; i++) {
			var newPt = transformPoint(self.points[i]);
			self.calculatedPoints.push(newPt);
		}
		if (callback) callback(self.calculatedPoints);
		return self.calculatedPoints;
	};

	/* --------------------------------------------------------------------------- */
	// PRIVATE METHODS	
	function transformPoint(point) {
		/*trace ( "x:", x, "y:", y )
  trace ( "------------------------")
  trace ( mtx[0], mtx[1], mtx[2] );
  trace ( mtx[3], mtx[4], mtx[5] );
  trace ( 0, 0, 1 );
  trace ( "------------------------")
  */

		var _offSetX = point[0] - self.originX;
		var _offSetY = point[1] - self.originY;

		var _newX = _offSetX * _matrix.data[0] + _offSetY * _matrix.data[3] + _matrix.data[2];
		var _newY = _offSetX * _matrix.data[1] + _offSetY * _matrix.data[4] + _matrix.data[5];
		_newX += self.originX;
		_newY += self.originY;

		return [_newX, _newY];
	}
};

exports.default = ParentTransform;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Vector2D = __webpack_require__(85);

var _Vector2D2 = _interopRequireDefault(_Vector2D);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleNoise2D = new function () {
    var S = this;

    var MAX_VERTICES = 256;
    var MAX_VERTICES_MASK = MAX_VERTICES - 1;

    var rx = [];
    var ry = [];

    for (var i = 0; i < MAX_VERTICES; ++i) {
        if (i === MAX_VERTICES - 1) {
            rx.push(rx[0]);
            ry.push(ry[0]);
        }
        rx.push(Math.random() - 0.5);
        ry.push(Math.random() - 0.5);
    }

    //a : min value, b: max value, t: step
    S._lerp = function (a, b, t) {
        return a * (1 - t) + b * t;
    };

    S._getVal = function (axis, index) {
        var vals = axis === 'x' ? rx : ry;

        index = index % MAX_VERTICES;
        var t = index - ~~index;
        var step = t * t * (3 - 2 * t);

        var min = ~~index & MAX_VERTICES_MASK;
        var max = min + 1 & MAX_VERTICES_MASK;

        return S._lerp(vals[min], vals[max], step);
    };

    /** 
        @memberOf SimpleNoise2D
        @method get
        @param {number} x
            number of location x of the desired noise value
        @param {number} y
            number of location y of the desired noise value
        @returns
            2D Noise value in {@link Vector2D}
         @example
            var noiseVec = SimpleNoise2D.get( 0, 5 );
    */
    S.get = function (x, y) {
        return new _Vector2D2.default(S._getVal('x', x), S._getVal('y', y));
    };
}(); /**
         @class SimpleNoise2D
         @desc
             SimpleNoise2D is a workaround for creating 2D noise with lightweight code. 
             It returns a {@link Vector2D} with x and y values between -0.5 - 0.5.
             For a more sophisticated purpose, please use Perline Noise https://github.com/josephg/noisejs
     */
exports.default = SimpleNoise2D;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Async = __webpack_require__(86);

var _Async2 = _interopRequireDefault(_Async);

var _ImageManager = __webpack_require__(57);

var _ImageManager2 = _interopRequireDefault(_ImageManager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class PrepareCommon
	@desc
		This is the central launch point for all ad-sizes in this creative. Resources that are shared among
		all the sizes should be prepared here.
		<br><br>

		There are two phases to {@link PrepareCommon}:

		<b>Phase 1:</b><br>
		This is where boilerplate-components specific to these sizes, like {@link AdManager}, {@link DateUtils}, 
		{@link Analytics}, Monet, Flashtalking, GDC, etc, etc can be prepared, asyncronously before {@link AdData} 
		is instantiated.
		<br><br>

		USER-DEFINED code can be added here if it is synchronous. Async operations need 
		to be threaded with {@link Async}, to insure that everything completes before the callback
		is fired.
		<br><br>

		<b>Phase 2:</b><br>
		See {@PrepareCommon.initComplete} for more information.
		<br><br>

		<b>Note:</b><br>
		Your PrepareCommon may have many methods that are not documented here. These are optional 
		modules that were added procedurally during the Build Source creation. You would need to use Ad App's 
		Diff Tool in order to see what code would be added here for a given Build-source Option.
*/
var PrepareCommon = new function () {
	var id = 'PrepareCommon';
	var self = this;

	var async;
	self.completeCallback;

	/**
 	@memberof PrepareCommon
 	@method init
 	@param {function} completeCallback
 		The callback to be fired after both phases of async preparation are complete.
 	@desc
 		Generally, this function is reserved for the addition of boilerplate modules. If you need 
 		to add USER-DEFINED code here, make sure to thread it with {@Async} if it is not synchronous.
 		<br><br>
 			More likely, you will want to use or do something with the modules that get prepared here. The 
 		point where it is safe to do that is {@link PrepareCommon.initComplete}.
 */
	self.init = function (completeCallback) {
		trace(id + '.init()');

		self.completeCallback = completeCallback;

		// async for threading any number of async processes
		async = new _Async2.default();
		async.onComplete(self.initComplete);
		async.wait();

		/*-- Red.Component.preparecommon_init.start --*/
		/*-- Red.Component.preparecommon_init.end --*/

		async.done();
	};

	/*-- Red.Component.preparecommon_misc_functions.start --*/
	/*-- Red.Component.preparecommon_misc_functions.end --*/

	/**
 	@memberof PrepareCommon
 	@method initComplete
 	@desc
 		The opening init() async-routines are complete. This begins the second phase of preparation.
 			Now, we prepare {@link AdData}, any USER-DEFINED code, and load all the images.
 		Once all of these processes are complete, {@link PrepareCommon.completeCallback} will fire.
 			Any processes that are async should be threaded with {@Async}.
 */
	self.initComplete = function () {
		trace(id + '.initComplete()');
		async = new _Async2.default();
		async.onComplete(self.completeCallback);
		async.wait();

		self.prepareAdData();
		self.loadImageQueue();

		async.done();
	};

	/**
 	@memberof PrepareCommon
 	@method prepareAdData
 	@desc
 		Custom, hand-coded code, needed for all ad-sizes should go here. 
 */
	self.prepareAdData = function () {
		trace(id + '.prepareAdData()');
		/*-- Red.Component.prepare_ad_data.start --*/
		/*-- Red.Component.prepare_ad_data.end --*/

		global.adData = new AdData();

		/* ---- USER-DEFINED PrepareCommon -------------------------------------------------------
   *
   *		This is BEFORE the image-queue is loaded...
   */
		// -->
	};

	/**
 	@memberof PrepareCommon
 	@method loadImageQueue
 	@desc
 		This executes the {@link ImageManager} load queue. The load queue at this point includes all images 
 		from global.assets, and any dynamic images added here previously or in {@link AdData}. */
	self.loadImageQueue = function () {
		trace(id + '.loadImageQueue()');
		async.wait();
		_ImageManager2.default.load(self.loadImageQueueComplete, self.loadImageQueueFail);
	};
	self.loadImageQueueFail = function () {
		/*-- Red.Component.load_image_queue_fail.start --*/
		global.failAd();

		/*-- Red.Component.load_image_queue_fail.end --*/
	};

	/**
 	@memberof PrepareCommon
 	@method loadImageQueueComplete
 	@desc
 		When this method is called, your ad's data and assets are ready. Use this 
 		function to prepare any elements or logic that will be shared across all
 		of your ad sizes. 
 */
	self.loadImageQueueComplete = function () {
		trace(id + '.loadImageQueueComplete()');
		/*-- Red.Component.load_image_queue_complete.start --*/
		/*-- Red.Component.load_image_queue_complete.end --*/

		/* ---- USER-DEFINED PrepareCommon -------------------------------------------------------
   *
   *		This is AFTER the image-queue is loaded...
   */
		// -->


		// launches the build, assuming there are no other async events
		async.done();
	};
}();

exports.default = PrepareCommon;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adView = __webpack_require__(20);

var SheetManager = new function SheetManager() {

	/**
 	@memberOf SheetManager
 	@method createGlobalNode
 	@param {string} nodeId
 		the id of the &lt;style> node written to the &lt;head>
 	@param {string} styles
 		selector/CSS string pair as separate parameters, following 'selector', 'css string' pattern,
 		or a self-contained CSS style string including selectors, like '.myClass{ color: blue; }'
 	@desc
 		Create a new CSS node (class, tag, etc) DEFINITION with submitted styles with selector/CSS string
 		pair or a self-contained CSS string including selectors. 
 		@example
 		// selector/CSS string pair
 		SheetManager.createGlobalNode ( 'myFirstStyle', 
 			'.class-a', 'position:absolute; width:inherit;'
 		)
 			// or add multiple class declarations to the same node
 		SheetManager.createGlobalNode ( 'mySecondStyle', 
 			'.class-b', 'position:absolute;',
 			'.class-b-top', 'width:inherit; height:inherit;'
 		)
 			// or have mulitple classes share the same logic
 		SheetManager.createGlobalNode ( 'myThirdStyle', 
 			'.class-c, .class-d', 'position:absolute;'
 		)
 			// add style to a tag globally
 		SheetManager.createGlobalNode ( 'myFourthStyle', 
 			'h1', 'position:absolute;'
 		)
 		
 		// self-contained CSS string
 		var myCssString = '.myClass, h1 { color: blue; margin: 10px; }';
 		SheetManager.createGlobalNode( 'myFifthStyle', myCssString );
 */
	this.createGlobalNode = function (nodeId, styles) {
		if (document.getElementById(nodeId)) {
			return;
		}

		var style = document.createElement('style');
		style.type = 'text/css';
		style.id = nodeId;

		// if only two parameters, assuming styles is CSS string
		// else process as selector/style pair 
		var str = arguments.length === 2 ? styles : '';

		if (arguments.length > 2) {

			for (var i = 0; i < arguments.length - 1; i += 2) {

				// strip out all the white space
				var names = arguments[i + 1].replace(/\s*/g, '');

				str += names;
				str += ' { ' + (arguments[i + 2] || '') + ' }\n';
			}
		}

		style.innerHTML = str;
		document.getElementsByTagName('head')[0].appendChild(style);
	};

	/**
 	@memberOf SheetManager
 	@method addClass
 	@param {string|element} target
 		id or element to which css style should be added
 	@param {string} className
 		css class association to be added to this target
 	@desc
 		Add a CSS class ASSOCIATION to the targeted element.
 */
	this.addClass = function (target, className) {
		var element = _adView.Markup.getElement(target);

		// IE does not support multiple classes being added as arguments, so must loop
		for (var i = 0; i < arguments.length - 1; i++) {
			element.classList.add(arguments[i + 1]);
		}
	};

	/**
 	@memberOf SheetManager
 	@method removeClass
 	@param {string|element} target
 		id or element from which css style should be removed
 	@param {string} className
 		css class association to be removed from this target
 	@desc
 		Removes a CSS class ASSOCIATION from the targeted element.
 */
	this.removeClass = function (target, className) {
		var element = _adView.Markup.getElement(target);
		element.classList.remove(className);
	};
}(); /**
     	@class SheetManager
     	@desc
     		Class manages the creation of &lt;style> tags and the addition/removal of classes.
     */
exports.default = SheetManager;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adView = __webpack_require__(20);

var _adUtils = __webpack_require__(1);

var ViewManager = new function () {
	var self = this;
	var _placeHolderIdSuffix = 0;

	self.DATA_FLAG = 'data';
	self.dataDict = {};

	self.getView = function (name) {
		return Views[name];
	};

	self.getViewStyle = function (name) {
		return ViewStyles[name];
	};

	/*
 	{
 		target: [target element],
 		viewName: [name of view to render],
 		viewContent: [content of a view to process],
 		data: [data context], //optional
 		simpleRender: false,
 		idSuffix: [string to add after id] //optional
 		callback: function
 	}
 */
	self.render = function (arg) {
		if (!arg.target || !arg.viewName && !arg.viewContent) {
			throw new Error('ViewManager: Please specify target and view name or view content.');
		}
		// clear data dictionary 
		self.dataDict = {};

		if (arg.data) {
			self.dataDict[self.DATA_FLAG] = arg.data;
			delete arg.data;
		}

		self._doRender(arg);
		return self;
	};

	self._doRender = function (arg) {
		arg.placeHolderId = 'view_place_holder' + _placeHolderIdSuffix;
		_placeHolderIdSuffix++;

		var thread = new ViewManager.renderThread(arg);
		thread.start();
	};

	self.renderArray = function (arg) {
		var arr = arg.arrayData;
		var i;
		for (i = 0; i < arr.length; i++) {
			self.dataDict[arg.dataName] = arr[i];
			var itemArg = {
				target: arg.target,
				viewContent: arg.viewContent,
				idSuffix: i
			};
			self._doRender(itemArg);
		}
	};
}();

ViewManager.renderThread = function (arg) {
	var parent = ViewManager;
	var self = this;

	var targetEl = arg.target;
	var viewName = arg.viewName;
	var idSuffix = arg.idSuffix !== undefined ? arg.idSuffix : '';
	var callback = arg.callback || function () {};

	var toBeRemovedEl = [];
	var toBeReplacedEl = [];
	var componentElts = {};

	var placeHolder;

	self.start = function () {
		var tmpl = arg.viewContent || parent.getView(viewName);

		// if si
		if (arg.simpleRender) {

			targetEl.insertAdjacentHTML('beforeend', tmpl);
		} else {
			placeHolder = createPlaceHolder({
				id: arg.placeHolderId,
				target: targetEl
			});
			placeHolder.innerHTML = tmpl;

			// check if there is at leaset one element
			var lastEl = placeHolder.lastElementChild;
			if (lastEl) {
				//set a flag to check to know when the process is done
				lastEl.setAttribute('isLast', true);
				processView(placeHolder.children);
			} else {
				// no element to process, execute callback
				callback();
			}
		}

		// inject stylesheet for the associated view 
		if (viewName) {
			_adView.Styles.injectStylesheet('ViewStyles_' + viewName, window.ViewStyles[viewName]);
		}
	};

	function processView(children) {
		var i;
		var len = children.length;
		for (i = 0; i < len; i++) {
			processViewChild(children[i]);
		}
	}

	function processViewChild(child) {
		var isLast = child.getAttribute('isLast');
		var callOnComplete = false;

		parseViewChild(child);

		if (isLast) {
			child.removeAttribute('isLast');
			processViewOnComplete();
		}
	}

	function parseViewChild(child) {
		var id = child.id || '';
		var accessId = child.getAttribute('accessId');
		var elToProcess = child;
		var elToAccess = child;

		// add suffix to id and access id 
		if (idSuffix !== '') {
			if (id) {
				id = id + idSuffix;
				child.id = id;
			}

			if (accessId) {
				accessId = accessId + idSuffix;
			}
		}

		// RED custom tag name flags
		switch (child.tagName) {
			case 'RED-VIEW':
				var classnames = child.classList;

				var componentType = child.getAttribute('type');
				var componentArg = getAssociatedData(child);
				componentArg.id = id;
				componentArg.target = placeHolder;

				var component = new window[componentType](componentArg);

				// check if the component is a HTMLElement, if not, check if it has container or canvas property 
				var domEl = component instanceof HTMLElement ? component : component.container ? component.container : component.canvas;

				domEl.insertAdjacentHTML('beforeend', child.innerHTML);
				child.parentNode.replaceChild(domEl, child);

				elToProcess = domEl;
				elToAccess = component;

				//add the classnames back
				for (var i = 0; i < classnames.length; i++) {
					elToProcess.classList.add(classnames[i]);
				}
				break;

			case 'RED-FOR-LOOP':
				var arrayDataName = child.getAttribute('iteration-data-name');
				var arrayData = getAssociatedData(child);

				var arrPlaceHolder = createPlaceHolder({
					id: 'view_array_place_holder' + child.id,
					target: child.parentNode
				});
				child.parentNode.insertBefore(arrPlaceHolder, child);
				toBeReplacedEl.push(arrPlaceHolder);

				var data = {
					target: arrPlaceHolder,
					viewContent: child.innerHTML,
					arrayData: arrayData,
					dataName: arrayDataName
				};
				child.parentNode.removeChild(child);

				elToProcess = null;
				parent.renderArray(data);
				break;

			case 'RED-IF-TRUE':
			case 'RED-IF-FALSE':
				var data = getAssociatedData(child);

				if (child.tagName === 'RED-IF-FALSE') {
					data = !data;
				}

				if (data) {
					toBeReplacedEl.push(child);
				} else {
					toBeRemovedEl.push(child);
					elToProcess = null;
				}
				break;
		}

		if (elToProcess) {
			if (elToProcess.children.length > 0) {
				processView(elToProcess.children);
			}
		}

		if (elToAccess && id) {
			var elKey = camelCase(id);
			adData.elements[elKey] = elToAccess;
		}

		if (elToAccess && accessId) {
			componentElts[accessId] = elToAccess;
		}
	}

	function processViewOnComplete() {
		//remove all elements
		var i;
		var len = toBeRemovedEl.length;
		for (i = 0; i < len; i++) {
			var el = toBeRemovedEl[i];
			el.parentNode.removeChild(el);
		}

		len = toBeReplacedEl.length;
		for (i = 0; i < len; i++) {
			var el = toBeReplacedEl[i];

			while (el.firstChild) {
				el.parentNode.insertBefore(el.firstChild, el);
			}
			el.parentNode.removeChild(el);
		}

		if (targetEl) {
			while (placeHolder.firstChild) {
				targetEl.appendChild(placeHolder.firstChild);
			}
		}

		placeHolder = null;

		callback(componentElts);
	}

	function getAssociatedData(el) {

		var key = el.getAttribute('data');
		if (key === null) {
			key = '';
		}
		// try dataDict first
		var result = _adUtils.ObjectUtils.objectifier.get(key, parent.dataDict);
		// if not in dataDict, use window 
		if (result === undefined) {
			result = _adUtils.ObjectUtils.objectifier.get(key, window);
		}
		return result;
	}

	function createPlaceHolder(arg) {
		var placeHolder = document.createElement('div');
		placeHolder.id = arg.id;

		return placeHolder;
	}

	function camelCase(str) {
		return str.replace(/-(.)/g, function (match, chr) {
			return chr.toUpperCase();
		});
	}
};

exports.default = ViewManager;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Expandable = __webpack_require__(87);

var _Expandable2 = _interopRequireDefault(_Expandable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ExpandableDcs = new function () {

	this.toString = function () {
		return 'ExpandableDcs';
	};

	var E = _Expandable2.default;

	E._init = function () {
		Enabler.addEventListener(studio.events.StudioEvent.EXPAND_START, E._handleExpandStart);
		Enabler.addEventListener(studio.events.StudioEvent.EXPAND_FINISH, E._handleExpandComplete);
		Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_START, E._handleCollapseStart);
		Enabler.addEventListener(studio.events.StudioEvent.COLLAPSE_FINISH, E._handleCollapseComplete);

		if (adParams.expandable.expanded) {
			Enabler.setStartExpanded(true);
		}
	};

	E._collapse = function (gestureEvent) {
		Enabler.requestCollapse();
		if (gestureEvent) Enabler.reportManualClose();
	};

	E._expand = function (gestureEvent) {
		Enabler.requestExpand();
	};

	E._collapseComplete = function () {
		Enabler.finishCollapse();
	};

	E._expandComplete = function () {
		Enabler.finishExpand();
	};
}(); /**
     	@class ExpandableDcs
     	@description
     		This is and extension of {@link Expandable} when units are used in DoubleClick. The only difference in the 
     		init() method is to pass in this class to the Expandable.init()
     		<codeblock>
     			Expandable.init ({
     				target : View.expanded,
     				expandStart : Control.handleExpandStart,
     				expandComplete : Control.handleExpandComplete,
     				collapseStart : Control.handleCollapseStart,
     				collapseComplete : Control.handleCollapseFinish,
     
     				extend : ExpandableDcs
     			});
     		</codeblock>
      */
exports.default = ExpandableDcs;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _stringify = __webpack_require__(88);

var _stringify2 = _interopRequireDefault(_stringify);

var _adUtils = __webpack_require__(1);

var _adExternal = __webpack_require__(33);

var _adLoad = __webpack_require__(34);

var _adLoad2 = _interopRequireDefault(_adLoad);

var _LiveScoringData = __webpack_require__(189);

var _LiveScoringData2 = _interopRequireDefault(_LiveScoringData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class LiveScoring
	@desc
		This class manages the polling of the ESPN SCORES API via an Edgecast proxy. In order to build an ad that responds to live scoring, 
		you need to start with the "ad-manager-espn-live-scoring" template. You will notice there is a "liveScoring" settings object
		in the index. Then, in the build is where you will find the event-handlers that will be necessary to thread into your build routines.
		<br><br>

		<b>Setup:</b><br>
			The piece that must be coded is the connection of game-ids from {@link AdManager} to {@link LiveScoring}. The json from AdManager 
			(accessible on {@link AdData.adDataRaw} contains a list of events, the first of which is the next live event. There should be a
			"game_id" property somewhere in that json. For the ESPN API is a 9-digit number. You need to create a property in {@link AdData} 
			for this id, and pass that to {@link LiveScoring}, like:
			<br>

			<codeblock>
				adData.liveScoring = new LiveScoring();
				adData.liveScoring.prepare( adData.currentGameId );
			</codeblock>
			<br><br>

			The following is a summary of what happens in the build.
			<ol>
			 <li>Instantiate {@link LiveScoring}</li>
			 <li>Pass current-game-id to {@link LiveScoring}
			 <li>Setup listeners to handle 
			  <ul>
				<li>State Change, ie, a match goes from upcoming-to-live or live-to-past...which necessitates a rebuild of the view</li>
				<li>Match Update, ie, the score, clock, or period of the currently live game changes/li>
				<li>All Matches Complete, ie, in a doubleheader, both matches are finished and the next {@link AdData} from {@link AdManager} needs to be loaded.</li>
			  </ul>
			 <li>Indicate pathes to local, debug json, which can be used to spoof live-data</li>
			 <li>Start polling.</li>
			</ol>

		<b>Debug:</b><br>
			When running the ad locally, the ad will load the debug live-scoring-json, as specified in the build: <br>
			
			<codeblock>
				adParams.commonPath + 'debug/'
			</codeblock>
			<br><br>

			Because live-events often are double-headers (two games per event) that need to actively cycle through each game there are 
			four debug jsons. These represent two events( "live_data1" and "live_data2" ), with two games( "game1" and "game2" ) per event. 
			If you are only advertising a single game, then you'd be able to test using only the first set "live_data1".<br><br>

			The way to change the "state" of the ad is to find the "state" property in these debug jsons and switch them to one of
			the following three modes:<br>
			<ol>
				<li><code>pre</code></li>
				<li><code>in</code></li>
				<li><code>post</code></li>
			</ol>

			From there any other properties display depends on how your ad is coded.<br><br>

		<b>Notes:</b><br>
			The challenge of live-scoring is building your ad in a way that it can be rebuilt and updated dynamically. For example,
			it needs to be able to build itself in either Doubleheader, Singleheader, or Live modes.<br><br>

			One example of how this can be achieved is detailed below. This code assumes that you have built different endframe "modules"
			which all have a common interface method called "buildMarkup()".<br><br>

	@example
		this.rebuildEndframe = function() {
			adData.elements.endframeModule = function() {
				// LIVE MODE
				if( adData.liveScoring.areLiveMatches() ) {
					trace( ' - LIVE MODE' );
					return new LiveScoring_300x250();
				}

				// UPCOMING MODE
				else {
					trace( ' - UPCOMING MODE' );
					// json is double-header
					if( adData.game_type == 'Doubleheader' ) {
						// both matches are upcoming
						if( !adData.getIsMatchup1Past() ) {
							trace( '    ( doubleheader )' );
							return new DoubleHeader_300x250();
						}
						// first match is finished
						else {
							trace( '    ( singleheader )' );
							return new SingleHeader_300x250();
						}
					}

					// json is single-header
					else {
						trace( '    ( singleheader )' );
						return new SingleHeader_300x250();
					}
				}
			}
			adData.elements.endframeModule.buildMarkup();
		}
*/
function LiveScoring() {
	trace('LiveScoring()');

	var self = this;

	/* -----------------------------------------------------------------------------------------
  *
  *	CONTROL
  *
  */
	var apiProxyUrl = adParams.liveScoring.apiProxyUrl;
	var pollFrequency = adParams.liveScoring.pollFrequency;
	var expirationOffsetMinutes = adParams.liveScoring.expirationOffset;

	/**
 	@memberOf LiveScoring
 	@method prepare
 	@param {string|array} currentGameId
 		Required. Either a string or an array. This comes from AdManager.json, the next upcoming event. In the past
 		that property could be found at `adData.adDataRaw.matchup[ 0 ].game.game_id`, however you may need to 
 		acquire from another property.
 	@desc
 		This class creates a list of matchups, based on game-ids which came from AdManager's current {@link AdData}. 
 		If it's a single-header, there one game-id. If it is a double-header, then there will be two game-ids. 
 */
	self.prepare = function (currentGameIds) {
		trace('LiveScoring.prepare()');
		if (!currentGameIds) {
			trace(' ~ GAME-IDs from AdManager json are required!!!');
			return;
		} else trace(' - currentGameIds:', currentGameIds);

		if (typeof currentGameIds == 'string') currentGameIds = [currentGameIds];
		for (var i in currentGameIds) {
			addMatchupFor(currentGameIds[i]);
		}
	};

	/**
 	@memberOf LiveScoring
 	@method addEventCallBack
 	@param {string} _type
 		corresponds to the <LiveScoringEvent> constant
 	@param {function} _callback
 		is the function that should be called on the firing of the event.
 	@desc
 		This adds a callback for any of the events dispatched by this class.
 */
	self.addEventCallBack = function (_type, _callback) {
		events.push({
			type: _type,
			callback: _callback
		});
	};

	/**
 	@memberOf LiveScoring
 	@method startPolling
 	@desc
 		Begins making requests to the API for scoring data. 
 */
	self.startPolling = function () {
		trace('LiveScoring.startPolling()');
		intervalId = setInterval(poll, self.isDebugMode() ? 10000 : 1000 * pollFrequency);
		poll();
	};

	/**
 	@memberOf LiveScoring
 	@method cleanup
 	@desc
 		Stops polling and resets the list of game-ids.
 */
	self.cleanup = function () {
		trace('LiveScoring.cleanup()');
		stopPolling();
		matchups = [];
	};

	/**
 	@memberOf LiveScoring
 	@method setDebugPathsFor
 	@param {string|number} _indexOrGameId 
 		Optional, if this is an integer less than the number of matches, then it is handled
 		as a matchup index. Otherwise, this corresponds to the {@link AdData.game_id}.
 	@param {string} _debugPaths
 		a relative or http path( or paths )pointing at json resources which match the expected format
 	@desc
 		This is a utility for specifying specific, non-live data that can be easily tweaked for the sake of testing.
 */
	self.setDebugPathsFor = function (_indexOrGameId, _debugPaths) {
		trace('LiveScoring.setDebugPathsFor()');
		var matchup = getMatchupBy(_indexOrGameId);
		if (matchup) {
			trace(' - gameId: ' + matchup.gameId + ', debugPaths: ' + _debugPaths);
			if (_debugPaths instanceof Array) matchup.debugPaths = matchup.debugPaths.concat(_debugPaths);else matchup.debugPaths.push(_debugPaths);
		}
	};

	/**
 	@memberOf LiveScoring
 	@method isDebugMode
 	@desc
 		Centralizes the logic for debug mode.<br><br>
 			AdManager preview locations will automatically try to load debug json. There are also two query-string parameters 
 		for controlling debug mode:<br><br>
 		<ul>
 		 <li>"?liveScoringDebug=true" to force debug-mode</li>
 		 <li>"?liveScoringDebug=false" to force live-mode</li>
 		</ul>
 */
	self.isDebugMode = function () {
		var liveScoringDebug = _adUtils.NetUtils.getQueryParameterBy('liveScoringDebug');
		return (_adExternal.AdManager.isPreviewLocation() || liveScoringDebug == 'true') && liveScoringDebug != 'false';
	};

	/* -----------------------------------------------------------------------------------------
  *
  *	MATCHUP STATUS
  *
  */
	/**
 	@memberOf LiveScoring
 	@method data
 	@param {string|number} _indexOrGameId
 		Optional. If this is an integer less than the number of matches, then it is handled
 		as a matchup index. Otherwise, this corresponds to the {@link AdData.game_id}. If no argument is
 		passed, then the first non-null, {@link LiveScoringData} is returned.
 	@returns {LiveScoringData}
 		Returns the {@link LiveScoringData} class for the requested game-id. 
 */
	self.data = function (_indexOrGameId) {
		if (_indexOrGameId) return getMatchupBy(_indexOrGameId).liveScoringData;else {
			for (var i = 0; i < matchups.length; i++) {
				if (matchups[i].liveScoringData) if (!matchups[i].liveScoringData.getIsPast()) return matchups[i].liveScoringData;
			}
		}
		return null;
	};

	/**
 	@memberOf LiveScoring
 	@method areLiveMatches
 	@returns {boolean}
 		Returns true if any matchups in the current {@link AdData} are live. 
 */
	self.areLiveMatches = function () {
		for (var i = 0; i < matchups.length; i++) {
			if (matchups[i].liveScoringData) {
				if (matchups[i].liveScoringData.getIsLive()) return true;
			}
		}
		return false;
	};

	/**
 	@memberOf LiveScoring
 	@method isMatchupLive
 	@param {string|number} _indexOrGameId
 		If this is an integer less than the number of matches, then it is handled
 		as a matchup index. Otherwise, this corresponds to the {@link AdData.game_id}.
 	@returns {boolean}
 	@desc
 		Returns true if the requested matchup is live.
 */
	self.isMatchupLive = function (_indexOrGameId) {
		var matchup = getMatchupBy(_indexOrGameId);
		if (matchup) return matchup.liveScoringData.getIsLive();else return false;
	};

	/**
 	@memberOf LiveScoring
 	@method allMatchesArePast
 	@returns {boolean}
 	@desc
 		Returns true if all matchups in the current {@link AdData} are past. 
 */
	self.allMatchesArePast = function () {
		for (var i = 0; i < matchups.length; i++) {
			if (matchups[i].liveScoringData) {
				if (!matchups[i].liveScoringData.getIsPast()) return false;
			}
		}
		return true;
	};

	/**
 	@memberOf LiveScoring
 	@method isMatchupPast
 	@param {string|number} _indexOrGameId
 		If this is an integer less than the number of matches, then it is handled
 		as a matchup index. Otherwise, this corresponds to the <AdData>.game_id.
 	@returns {boolean}
 		Returns true if the requested matchup is live.
 */
	self.isMatchupPast = function (_indexOrGameId) {
		var matchup = getMatchupBy(_indexOrGameId);
		if (matchup) return matchup.liveScoringData.getIsPast();else return false;
	};

	/* -----------------------------------------------------------------------------------------
  *
  *	INTERNAL
  *
  */
	var matchups = [];
	var intervalId;
	var events = [];
	var pollCount;
	var debugPathIndex = 0;

	function addMatchupFor(_gameId) {
		trace('LiveScoring.addMatchupFor() ' + _gameId);
		var _matchup = {
			gameId: _gameId,
			loader: null,
			liveScoringData: null,
			stateChanged: false,
			debugPaths: []
		};
		matchups.push(_matchup);
	}
	function getMatchupBy(_indexOrGameId) {
		if (_indexOrGameId === parseInt(_indexOrGameId) && parseInt(_indexOrGameId) < matchups.length) return matchups[_indexOrGameId];else {
			for (var i = 0; i < matchups.length; i++) {
				if (matchups[i].gameId == _indexOrGameId) return matchups[i];
			}
		}
		return null;
	}
	function matchesChangedState() {
		for (var i = 0; i < matchups.length; i++) {
			if (matchups[i].stateChanged) return true;
		}
		return false;
	}

	function poll() {
		trace('LiveScoring.poll()');
		pollCount = matchups.length;
		for (var i = 0; i < matchups.length; i++) {
			var jsonPath = apiProxyUrl + matchups[i].gameId;
			if (self.isDebugMode()) {
				if (matchups[i].debugPaths.length > debugPathIndex) jsonPath = matchups[i].debugPaths[debugPathIndex];
			}
			matchups[i].loader = new _adLoad2.default(jsonPath, {
				name: 'liveScoringLoader_' + matchups[i].gameId,
				fileType: 'json',
				onComplete: handlePollComplete,
				onFail: handlePollFail,
				scope: self,
				cacheBuster: true
			});
			matchups[i].loader.load();
		}
	}
	function stopPolling() {
		trace('LiveScoring.stopPolling()');
		clearInterval(intervalId);
	}

	function handlePollFail() {
		trace('LiveScoring.handlePollFail()');
		dispatchEventCallBack(LiveScoringEvent.POLL_FAIL);
	}
	function handlePollComplete(loader) {
		var matchup = getMatchupBy(loader.name.split('_')[1]);
		var rawData = loader.content[0].dataRaw;
		// debug json data gets written to the head as an object-literal because it's the only way to load local json
		// Therefore, to avoid error, the json must be valid JS, so it is set to a var, which must be removed to parse as valid JSON
		if (typeof rawData != 'string') rawData = (0, _stringify2.default)(rawData);
		rawData = JSON.parse(rawData.replace(/^[^\{]+/, ''));
		var liveScoringData = new _LiveScoringData2.default(rawData);

		// determine if status has changed
		matchup.stateChanged = false;
		if (!matchup.liveScoringData) {
			matchup.stateChanged = true;
		} else if (matchup.liveScoringData.getStatus().state !== liveScoringData.getStatus().state) {
			trace('    matchup.liveScoringData has changed from "' + matchup.liveScoringData.getStatus().state + '" to "' + liveScoringData.getStatus().state + '"');
			matchup.stateChanged = true;
		}
		matchup.liveScoringData = liveScoringData;

		pollCount--;
		if (pollCount == 0) handleAllLoadScoresComplete();
	}
	function handleAllLoadScoresComplete() {
		trace('LiveScoring.handleAllLoadScoresComplete()');
		if (self.allMatchesArePast()) {
			if (self.isDebugMode()) incrementDebugIndex();
			handleAllMatchesComplete();
		} else if (matchesChangedState()) {
			dispatchEventCallBack(LiveScoringEvent.MATCH_STATUS_CHANGE);
		} else if (self.areLiveMatches()) dispatchEventCallBack(LiveScoringEvent.MATCH_UPDATE);
	}
	function handleAllMatchesComplete() {
		trace('LiveScoring.handleAllMatchesComplete()');
		if (!self.isDebugMode()) {
			self.cleanup();
			_adExternal.AdManager.completeCallback = Control.prepareLiveScoring;
			_adExternal.AdManager.getNextAdData();
		}
	}

	// this simulates the advance of <AdManager>'s <AdData> to the next non-expired event.
	function incrementDebugIndex() {
		trace('LiveScoring.incrementDebugIndex()');
		var hasDebugPathes = true;
		for (var i = 0; i < matchups.length; i++) {
			if (debugPathIndex >= matchups[i].debugPaths.length - 1) {
				hasDebugPathes = false;
				break;
			}
		}
		if (hasDebugPathes) {
			trace(' - ADVANCING TO NEXT SET OF DEBUG JSON - this simulates a loading a new AdData with new gameIds');
			debugPathIndex++;
			poll();
		} else {
			trace(' - NO MORE DEBUG JSON - ending LiveScoring');
			stopPolling();
			dispatchEventCallBack(LiveScoringEvent.MATCH_STATUS_CHANGE);
		}
	}

	function dispatchEventCallBack(_type) {
		for (var i = 0; i < events.length; i++) {
			if (events[i].type == _type) {
				events[i].callback();
			}
		}
	}
}

/**
	@class LiveScoringEvent
	@desc
		The constants used by {@link LiveScoring}
*/
var LiveScoringEvent = new function () {
	return {
		MATCH_UPDATE: 'event_matchUpdate',
		MATCH_STATUS_CHANGE: 'event_matchStatusChange',
		POLL_FAIL: 'event_pollFail'
	};
}();

exports.default = LiveScoring;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stringify = __webpack_require__(88);

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: _stringify2.default });
module.exports = function stringify(it) {
  // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class LiveScoringData
	@param {object} liveScoringDataRaw	
		raw, live-data json object
	@desc
		This class is instantiated dynamically by {@link LiveScoring}.
*/
var LiveScoringData = function LiveScoringData(liveScoringDataRaw) {

	this.liveScoringDataRaw = liveScoringDataRaw;

	/* -- JSON GETTERS ----------------------------------------------------------
  *
  *
  */
	this.getCompetition = function () {
		return this.liveScoringDataRaw.sports[0].leagues[0].events[0].competitions[0];
	};
	this.getStatus = function () {
		return this.getCompetition().status;
	};
	this.getPeriod = function () {
		return this.getCompetition().period;
	};
	this.getClock = function () {
		return this.getCompetition().clock;
	};
	this.getAwayTeam = function () {
		var awayIndex = this.getCompetition().competitors[0].homeAway == 'away' ? 0 : 1;
		return this.getCompetition().competitors[awayIndex];
	};
	this.getHomeTeam = function () {
		var homeIndex = this.getCompetition().competitors[0].homeAway == 'home' ? 0 : 1;
		return this.getCompetition().competitors[homeIndex];
	};

	/* -- CORE LOGIC ----------------------------------------------------------
  *
  *
  */
	this.getIsUpcoming = function () {
		return this.getStatus().state.indexOf('pre') > -1;
	};
	this.getIsLive = function () {
		return this.getStatus().state.indexOf('in') > -1;
	};
	this.getIsOvertime = function () {
		return this.getStatus().description.indexOf('OVERTIME') > -1;
	};
	this.getIsPast = function () {
		return this.getStatus().state.indexOf('post') > -1;
	};

	/* -- MATCHUP DATA ----------------------------------------------------------
  *
  *
  */
	this.tuneInMessaging = function () {
		if (this.isCloseGame()) return "<span id='close_game'>CLOSE GAME:</span> WATCH LIVE NOW";else return "WATCH LIVE NOW";
	};

	this.getScoreAway = function () {
		return this.getAwayTeam().score;
	};
	this.getScoreHome = function () {
		return this.getHomeTeam().score;
	};
	this.isCloseGame = function () {
		if (this.getPeriod() >= 4) {
			if (Math.abs(this.getScoreHome() - this.getScoreAway()) <= 10) return true;
		} else return false;
	};

	this.getGamePeriodAndTime = function () {
		var period = this.getPeriodLabel();
		var clock = this.getClock();
		if (clock == '0:00') return 'END OF ' + period;else return period + ' ' + clock;
	};
	this.getPeriodLabel = function () {
		var periodLabels = ['1ST', '2ND', '3RD', '4TH', 'OT', 'OT2', 'OT3'];
		return periodLabels[this.getPeriod() - 1];
	};
};

exports.default = LiveScoringData;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Styles = __webpack_require__(28);

var Styles = _interopRequireWildcard(_Styles);

var _Markup = __webpack_require__(27);

var Markup = _interopRequireWildcard(_Markup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	@class Clamp
	@desc
		Utility for resizing a DOM element to the size of all its content, sort of like shrink wrapping.
		<br><br>
		
		This will clamp the bounds and potentially move the x and y so that visually the content stays where it is. There is the option to clamp 
		both horizontally and vertically, or you can just do one. Additionally there is a optional object to add some buffer space on any of the sides.

	@example
		// clamp both directions
		Clamp.set( View.main.myDiv, Clamp.XY );
		
		// clamp both directions while adding some buffer padding on each side
		Clamp.set( View.main.myDiv, Clamp.XY, {
			top : 5,
			left : 10,
			bottom : 5,
			right : 10
		});

		// clamp only horizontally and add a buffer padding on the left
		Clamp.set( View.main.myDiv, Clamp.X, {
			left : 10
		});
*/
var Clamp = function () {

	var _rect = {
		x: ['offsetWidth', 'width', 'left', 'right'],
		y: ['offsetHeight', 'height', 'top', 'bottom']

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// PUBLIC METHODS
	};function set(source, type, buffer, move) {
		var elem = Markup.get(source);
		move = move !== false;

		var children = elem.childNodes;
		var childCoordinates = [];

		var direction = {};
		if (/(x)/gi.exec(type)) direction.x = {};
		if (/(y)/gi.exec(type)) direction.y = {};

		for (var i = 0; i < children.length; i++) {
			var child = children[i];

			childCoordinates[i] = {};

			for (var xy in direction) {

				var xyValue = Styles.getCss(child, xy);
				var whValue = child[_rect[xy][0]];

				var add = xyValue + whValue;

				var xyDirection = direction[xy];

				if (i == 0) {
					xyDirection.min = xyValue;
					xyDirection.max = add;
				}

				if (xyValue < xyDirection.min) xyDirection.min = xyValue;

				if (xyDirection.max < add) xyDirection.max = add;

				childCoordinates[i][xy] = xyValue;
			}
		}

		// process the optional buffer
		var _buffer = {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0
		};

		if (buffer) {
			for (var prop in _buffer) {
				_buffer[prop] = isNaN(buffer) ? buffer[prop] || 0 : buffer;
			}
		}

		// resize and move the container
		var css = {};
		for (var xy in direction) {
			var d = direction[xy];

			if (move) css[xy] = d.min + Styles.getCss(elem, xy) - _buffer[_rect[xy][2]];

			css[_rect[xy][1]] = d.max - d.min + _buffer[_rect[xy][2]] + _buffer[_rect[xy][3]];
		}

		Styles.setCss(elem, css);

		// move all the children
		for (i = 0; i < children.length; i++) {
			var child = children[i];
			var css = {};

			for (var xy in direction) {
				css[xy] = childCoordinates[i][xy] - direction[xy].min + _buffer[_rect[xy][2]];
			}

			Styles.setCss(child, css);
		}
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	return {
		/**
  	@memberof Clamp
  	@const {string} X
  		Synonymous with "clampX" - clamp on the horizontal direction only 
  */
		X: 'clampX',

		/**
  	@memberof Clamp
  	@const {string} Y
  		Synonymous with "clampY" - clamp on the vertical direction only 
  */
		Y: 'clampY',

		/**
  	@memberof Clamp
  	@const {string} XY
  		Synonymous with "clampXY" - clamp on all sides 
  */
		XY: 'clampXY',

		/**
  	@memberof Clamp
  	@method set
  	@param {element} source
  		The DOM element to resize and move.
  	@param {string} type
  		A String/Constant representing what directions to clamp on.
  	@param {object} buffer
  		(optional) An Object that has the values to add buffer padding to each side. See properties for more info:
  			@property {number} buffer.left
  			Amount of left padding
  		@property {number} buffer.right
  			Amount of right padding
  		@property {number} buffer.top
  			Amount of top padding
  		@property {number} buffer.bottom
  			Amount of bottom padding
  	@desc
  		Resizes and moves the source element horizontally and/or vertically, relative to all its children. 
  */
		set: set
	};
}();

exports.default = Clamp;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class Countdown
	@desc
		<span style="color:#ff0000"><b>WARN:</b><br>
		This class has been deprecated.  See the DateSchedule.getCountdown()
		</span>

		<br><br>

		A utility that maintains the remaining days, hours, minutes, and seconds to the target date.
	@example
		var countdown = new Countdown();
		countdown.init( '2015-08-28 12:00:00', DateUtils.TZ_LOCAL );
		var intervalId = setInterval( updateClock, 1000 );
		function updateClock() {
			if( countdown.isComplete())
				clearInterval( intervalId );
			trace( 'countdown clock: ' + 
				TextUtils.pad( countdown.getDays(), 2 ) + ':' + 
				TextUtils.pad( countdown.getHours(), 2 ) + ':' + 
				TextUtils.pad( countdown.getMinutes(), 2 ) + ':' + 
				TextUtils.pad( countdown.getSeconds(), 2 )
			);
		}	
*/
var Countdown = function Countdown() {

	/** 
 	@memberof Countdown
 	@method init
 	@param {Date} _targetDate
 		a date in the future
 	@param {object} _tzDesignation
 		{@link DateUtils} constant representing a timezone
 	@desc
 		Starts a timer that will dispatch an update event every second counting down to the specified date
 */
	this.init = function (_targetDate, _tzDesignation) {
		trace('Countdown.init(), to: ' + _targetDate + ', tzDesignation: ' + _tzDesignation);
		this.targetDate = typeof _targetDate == 'Date' ? _targetDate : DateUtils.parseToDate(_targetDate);
		this.tzDesignation = _tzDesignation || DateUtils.TZ_LOCAL;
		this.complete = false;
	};

	/** 
 	@memberof Countdown
 	@method isComplete
 	@returns {boolean}
 */
	this.isComplete = function () {
		return this.complete;
	};

	/** 
 	@memberof Countdown
 	@method getDays
 	@returns {number}
 		The number of days left until the target-date. 
 */
	this.getDays = function () {
		var remaining = this.update();
		return remaining ? Math.floor(remaining.days) : 0;
	};

	/** 
 	@memberof Countdown
 	@method getHours
 	@returns {number}
 		The number of hours left until the target-date. 
 */
	this.getHours = function () {
		var remaining = this.update();
		return remaining ? Math.floor(remaining.hours) : 0;
	};

	/** 
 	@memberof Countdown
 	@method getMinutes
 	@returns {number}
 		The number of minutes left until the target-date. 
 */
	this.getMinutes = function () {
		var remaining = this.update();
		return remaining ? Math.floor(remaining.minutes) : 0;
	};

	/** 
 	@memberof Countdown
 	@method getSeconds
 	@returns {number}
 		The number of seconds left until the target-date. 
 */
	this.getSeconds = function () {
		var remaining = this.update();
		return remaining ? Math.floor(remaining.seconds) : 0;
	};

	/* -- INTERNAL ------------------------------------------------
  *
  *
  */
	this.targetDate;
	this.tzDesignation;
	this.complete;

	this.update = function () {
		var now = DateUtils.getNow(this.tzDesignation);
		var timeDifference = DateUtils.getTimeDifference(now, this.targetDate);
		if (!timeDifference) {
			trace('Countdown - countdown is over!!');
			this.complete = true;
		} else return timeDifference;
	};
};

exports.default = Countdown;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _adUtils = __webpack_require__(1);

var _Styles = __webpack_require__(28);

var Styles = _interopRequireWildcard(_Styles);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
	@class Effects
	@desc
		Utilities for adding effects to elements
*/
var Effects = function () {

	/* --------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
 	@memberof Effects
 	@method blur
 	@param {object} obj
 		object containing blur arguments, see Properties for more info:
 			@property {element} obj.target
 			dom element
 		@property {number} obj.amount
 			the level of blurriness
 	@desc
 		Blurs a dom element.
 	
 	
 	@example
 		//
 		Effects.blur({
 			target: _myDiv,
 			amount: 10
 		});
 */
	function blur(obj) {
		if (obj.amount >= 0) Styles.setCss(obj.target, { filter: 'blur(' + obj.amount + 'px)' });
	}

	/**
 	@memberof Effects
 	@method dropShadow
 	@param {object} obj
 		object containing drop shadow arguments, see Properties for more info:
 		@property {element} obj.target
 			dom element
 		@property {number} obj.angle
 			optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0.
 		@property {number} obj.distance
 			optional NUMBER for how far away the shadow will offset. Defaults to 0.
 		@property {number} obj.size
 			optional NUMBER for shadow radius. Defaults to 0.
 		@property {number} obj.spread
 			optional NUMBER for how much extra the shadow will increase before it begins its gradient fade. Defaults to 0.
 		@property {string|object} obj.color
 			optional color of shadow as a HEX STRING :"#ff0000", 
 			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
 			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
 		@property {number} obj.alpha
 			optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1.
 		@property {boolean} obj.inner
 			optional BOOLEAN to set the shadow as inset. Defaults to false.
 		@desc
 		Adds a drop shadow to a dom element. Follows the same use specs as Photoshop.
 		
 	@example
 		//
 		Effects.dropShadow({
 			target:_myDiv,
 			angle: 135,
 			distance: 50,
 			size: 20, 
 			spread: 10,
 			color: 'rgb(90, 0, 0)',
 			alpha: 0.1,
 			inner: true
 		});
 */
	function dropShadow(obj) {
		Styles.setCss(obj.target, { boxShadow: createShadow(obj.angle || 0, obj.distance || 0, obj.size || 0, obj.spread || 0, obj.color || '#000000', obj.alpha, obj.inner) });
	}

	/**
 	@memberof Effects
 	@method textDropShadow
 	@param {object} obj
 		object containing drop shadow arguments, see Properties for more info:
 		@property {element} obj.target
 			dom element
 		@property {number} obj.angle
 			optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0.
 		@property {number} obj.distance
 			optional NUMBER for how far away the shadow will offset. Defaults to 0.
 		@property {number} obj.size
 			optional NUMBER for shadow radius. Defaults to 0.
 		@property {string|object} obj.color
 			optional color of shadow as a HEX STRING :"#ff0000", 
 			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
 			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
 		@property {number} obj.alpha
 			optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1.
 		@desc
 		Adds a drop shadow to text within a dom element. Follows the same use specs as Photoshop.
 		
 	@example
 		//
 		Effects.textDropShadow({
 			target:_myText, 
 			angle: 45, 
 			distance: 15, 
 			size: 1, 
 			color: '#ff0000', 
 			alpha: 0.5
 		});
 */
	function textDropShadow(obj) {
		Styles.setCss(obj.target, { textShadow: createShadow(obj.angle || 0, obj.distance || 0, obj.size || 0, null, obj.color || '#000000', obj.alpha) });
	}

	/**
 	@memberof Effects
 	@method glow
 	@param {object} obj
 		object containing glow arguments, see Properties for more info:
 		@property {element} obj.target
 			dom element
 		@property {number} obj.size
 			optional NUMBER for glow radius. Defaults to 0.
 		@property {number} obj.spread
 			optional NUMBER for how much extra the glow will increase before it begins its gradient fade. Defaults to 0.
 		@property {string|object} obj.color
 			optional color of glow as a HEX STRING :"#ff0000", 
 			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
 			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
 		@property {number} obj.alpha
 			optional NUMBER of glow opacity, if set will overwrite color.a. Defaults to 1.
 		@property {boolean} obj.inner
 			optional BOOLEAN to set the glow as inset. Defaults to false.
 		@desc
 		Adds a glow to a dom element. Follows the same use specs as Photoshop.
 		
 	@example
 		//
 		Effects.glow({
 			target: _myDiv,
 			size: 20, 
 			spread: 0,
 			color: 'rgb(90, 0, 0)',
 			alpha: 0.5,
 			inner: true
 		});
 */
	function glow(obj) {
		obj.angle = 0;
		obj.distance = 0;
		dropShadow(obj);
	}

	/**
 	@memberof Effects
 	@method linearGradient
 	@param {object} obj
 		object containing gradient arguments, see Properties for more info:
 		@property {element} obj.target
 			dom element
 		@property {array} obj.colors
 			ARRAY of colors as either a HEX STRING :"#ff0000" or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)".
 		@property {number} obj.angle
 			NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0.
 	@desc
 		Changes the background of a given dom element to be a linear gradient.
 		<br><br>
 			<b>Example</b><br>
 		Adding a horizontal gradient from red, to blue, fading to a transparent yellow.
 		<codeblock>
 			Effects.linearGradient({
 				target: _myDiv, 
 				colors: ['red', 'blue', 'rgba(255, 255, 0, 0.5)'], 
 				angle: 90
 			});
 		</codeblock>
 */
	function linearGradient(obj) {
		Styles.setCss(obj.target, { background: 'linear-gradient(' + (obj.angle || 0) + 'deg, ' + obj.colors.toString() + ')' });
	}

	/**
 	@memberof Effects
 	@method radialGradient
 	@param {object} obj
 		object containing gradient arguments, see Properties for more info:
 		@property {element} obj.target
 			dom element
 		@property {array} obj.colors
 			ARRAY of colors as either a HEX STRING :"#ff0000" 
 			or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)". 
 			<br><br>
 				To add stops, append a % value to the color string: ["#ff0000 50%, "#00ff00 90%"].
 		@property {number} obj.angle
 			NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0.
 	@desc
 		Changes the background of a given dom element to be a radial gradient.
 		<br><br>
 			<b>Example</b><br>
 		Adding a gradient from red to blue, with a very large choke on the blue.
 		<codeblock>
 			Effects.radialGradient({
 				target: _myDiv, 
 				colors: ['#ff0000', '#0000ff 10%']
 			});
 		</codeblock>
 */
	function radialGradient(obj) {
		Styles.setCss(obj.target, { background: 'radial-gradient(' + obj.colors.toString() + ')' });
	}

	/* --------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function createShadow(angle, distance, size, spread, color, alpha, inner) {
		var val = '';
		var deg = angle * -1 + 180;
		var rad = _adUtils.MathUtils.toRadians(deg);
		val += (Math.cos(rad) * distance).toFixed(8) + 'px ';
		val += (Math.sin(rad) * distance).toFixed(8) + 'px ';
		val += size + 'px';

		if (spread) val += ' ' + spread + 'px';

		val += ' ' + _adUtils.ColorUtils.toRgbaString(color, alpha);

		inner = !!inner;
		if (inner) val += ' inset';

		return val;
	}

	/* --------------------------------------------------------------------------------- */
	// PUBLIC ACCESS
	return {
		blur: blur,
		dropShadow: dropShadow,
		textDropShadow: textDropShadow,
		linearGradient: linearGradient,
		radialGradient: radialGradient,
		glow: glow
	};
}();

exports.default = Effects;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var FullScreen = new function () {
	var F = this;

	F.isFullScreen = function () {
		return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
	};

	F.enter = function (elem) {
		if (F.isFullScreen()) return;

		if (elem.requestFullscreen) {
			trace(' -> requestFullscreen');
			elem.requestFullscreen();
		} else if (elem.msRequestFullscreen) {
			trace(' -> msRequestFullscreen');
			elem.msRequestFullscreen();
		} else if (elem.mozRequestFullScreen) {
			trace(' -> mozRequestFullScreen');
			elem.mozRequestFullScreen();
		} else if (elem.webkitRequestFullscreen) {
			trace(' -> webkitRequestFullscreen');
			elem.webkitRequestFullscreen();
		}
	};

	F.exit = function () {
		if (!F.isFullScreen()) return;

		if (document.exitFullscreen) {
			trace(' -> exitFullscreen');
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			trace(' -> msExitFullscreen');
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			trace(' -> mozCancelFullScreen');
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			trace(' -> webkitExitFullscreen');
			document.webkitExitFullscreen();
		}
	};
}();

exports.default = FullScreen;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/** 
	@class Emitter
	@desc
		( v1.1 )
		<br><br>

		Emitter is a particle system that emits and controls particles and renders on a canvas element.
		It comes with some basic physic features such as gravity, force, bounce and world boundary. 
		<br><br>

		The default setting is in <code>js/EmitterData.js</code> that comes with standard-particles template. 
		To tweak the default data, launch particle simulator in AdApp and work with the interface. When you have 
		reached your desired effect, copy the genrated code back to <code>js/EmitterData.js</code>.
		<br><br>

		For more info about the simulator, visit
		{@link https://confluence.ff0000.com/display/AT/PARTICLES }
	
	@example
		//create a canvas element
		adData.elements.particleCanvas = new UICanvas({
			id: 'particle-canvas',
			target: adData.elements.redAdContainer,
			css: {
				width: adParams.adWidth,
				height: adParams.adHeight
			}
		});
		
		//create an instance of Emitter
		adData.particleSystem = new Emitter();

		//initiate the emitter with the target canvas element
		adData.particleSystem.init( adData.elements.particleCanvas );
		
		//start emitting
		adData.particleSystem.emit();
		
		//stop emitting
		adData.particleSystem.stopEmitting();

*/
var Emitter = function Emitter() {
	var self = this;

	self.G = new Vector2D(0, 0.1);
	self.customBehaiver = { emitter: [], particle: [] };

	/**
 	@memberof Emitter
 	@method init
 	@param {CanvasElement} canvasElement
 		a canvas element
 	@param {object} setting
 		optional, contains fps and emitterData as properties to overide the frame rate and EmitterData, see Properties for more info:
 	@property {EmitterData}  emitterData
 	@property {number} fps
 		default fps(60)
 		@desc
 		Initiates the Emitter.
 		@example
 		var myEmitter = new Emitter();
 			//init emitter with default setting
 		myEmitter.init( canvasElement );
 
 		//init emitter with custom setting
 		var customSetting = {
 			fps: 30,
 			emitterData: myCustomEmitterData
 		};
 		myEmitter.init( canvasElement, customSetting );
    */
	self.init = function (canvasElement, setting) {

		setting = setting || {};
		var data = setting.emitterData || EmitterData;
		self.fps = setting.fps || 60;

		//canvas
		self.canvas = canvasElement;
		self.ctx = canvasElement.getContext('2d');
		self.ctxWidth = canvasElement.width;
		self.ctxHeight = canvasElement.height;

		self.active = false;
		self.frameCount = 0;
		self.startEmitFrame = 0;
		self.frameEmittedCount = 0;

		self.liveParticles = [];
		self.particles = [];
		self.models = [];

		self.properties = {};
		self.setProperties(data);

		self._drawBackground();

		FrameRate.register(self, self._run, self.fps);
	};

	/**
 	@memberof Emitter
 	@method set
 	@param {string} key
 		the name of the property (supports nested object key)
 	@param {number|string|object|array} val
 		the value of the property
 	@param {boolean} triggerChange
 		optional, it is for internal use
 	@desc
 		Sets a sinlge property of emitter properties. To set multiple properties at once, please use setProperties.
 
 	@example
 		myEmitter.set( 'emitRate', 0.1 );
 			myEmitter.set( 'origin.value.x', 0 );
    */
	self.set = function (key, val, triggerChange) {
		triggerChange = triggerChange === undefined ? true : triggerChange;
		ObjectUtils.objectifier.set(key, val, self.properties);

		if (triggerChange) {
			self._afterPropertyChanged([key.split('.')[0]]);
		}
	};

	/**
 	@memberof Emitter
 	@method get
 	@param {string} key
 		the name of the property (supports nested object key)
 	@returns {number|string|object|array}
 		The value of the property
 	@desc
 		Gets a sinlge property of emitter properties.
 		@example
 		var rate = myEmitter.get( 'emitRate' );
 		var lifeSpanValue = myEmitter.get( 'lifeSpan.value' );
    */
	self.get = function (key) {
		return ObjectUtils.objectifier.get(key, self.properties);
		// return ParticlesUtils.objectifier( key.split( '.' ), false, self.properties );
	};

	/**
 	@memberof Emitter
 	@method setProperties
 	@param {object} obj
 		an object containing properties and values
 	@desc
 		Sets a group of properties of emitter properties (supports nested object key)
 		@example
 		myEmitter.setProperties({
 			'emitRate': 0.1,
 			'background.type': 'none',
 			'origin.value.x': 100
 		});
    */
	self.setProperties = function (obj) {
		var keyArr = [];

		for (var key in obj) {
			self.set(key, obj[key], false);
			keyArr.push(key.split('.')[0]);
		}

		self._afterPropertyChanged(keyArr);
	};

	/**
 	@memberof Emitter
 	@method addCustomBehavier
 	@param {string} type
 		'particle' or 'emitter'
 	@param {function} func
 		function to add
 	@desc
 		Adds on custom behavier in the run loop. If the type is 'particle' function, it will be called in each particle iteration in the run loop
 		with the iterated particle as the first parameter and an array of all particles as the second. If the type is 'emitter', it will be called
 		in each run loop with the emitter as a parameter. 
 		@example
         	function customParticleBehavier1 ( particle, particleGroup ) {
 			var particleLocation = particle.properties.location;
 			var i;
 			//if there is another particle in the range of 60, set the color to red
 			//otherwise set it to yellow
 		    for( i=0; i<particleGroup.length; i++ ) {
 		        var particle2 = particleGroup[ i ];
 		        var dist = particleLocation.dist( particle2.properties.location );
 		        if( dist < 60 ) {
 		            particle.properties.style.color = [ 255, 0, 0 ];
 		        } else {
 		            particle.properties.style.color = [ 255, 255, 0 ];
 		        }
 		    }
        		}
         		function customParticleBehavier2 ( particle, particleGroup ) {
 			particle.properties.style.scale = particle.properties.location.y * 0.1;
        		} 
 	        	function customEmitterBehavier ( emitter ) {
     			//animate the gravityAmount using frameCount
 			emitter.set( 'gravityAmount', Math.sin( emitter.frameCount * 0.1 ));
 		};
 			myEmitter.addCustomBehavier( 'particle', customParticleBehavier1 );
 		myEmitter.addCustomBehavier( 'particle', customParticleBehavier2 );
 		myEmitter.addCustomBehavier( 'emitter', customEmitterBehavier );
    */
	self.addCustomBehavier = function (type, func) {
		this.customBehaiver[type].push(func);
	};

	/**
 	@memberof Emitter
 	@method removeCustomBehavier
 	@param {string} type
 		'particle' or 'emitter'
 	@param {function} func
 		function to remove
 	@desc
 		Removes the custom behavier added.
 		@example
 		myEmitter.removeCustomBehavier( 'particle', customParticleBehavier1 );
 		myEmitter.removeCustomBehavier( 'emitter', customEmitterBehavier );
    */
	this.removeCustomBehavier = function (type, func) {
		var arr = this.customBehaiver[type];
		var i;
		for (i = 0; i < arr.length; i++) {
			if (arr[i] === func) {
				this.customBehaiver[type].splice(i, 1);
			}
		}
	};

	/**
 	@memberof Emitter
 	@method emit
 	@desc
 		Starts emitting particles.
 		@example
 		myEmitter.emit();
    */
	self.emit = function () {
		self.active = true;
		self.startEmitFrame = self.frameCount;

		if (self.properties.emitRate === 0) {
			//emit once
			self.createParticles(self.properties.emitAmount);
		}
	};

	/**
 	@memberof Emitter
 	@method stopEmitting
 	@desc
 		Stops emitting particles.
 		@example
 		myEmitter.stopEmitting();
    */
	self.stopEmitting = function () {
		self.active = false;
	};

	/**
 	@memberof Emitter
 	@method empty
 	@desc
 		Emptys all particles.
 		@example
 		myEmitter.empty();
    */
	self.empty = function () {

		self.particles.forEach(function (a) {
			a = null;
		});
		self.particles = [];
	};

	/**
 	@memberof Emitter
 	@method pause
 	@desc
 		Pause the run loop ( freeze it! ).
 	@example
 		myEmitter.pause();
    */
	self.pause = function () {
		FrameRate.unregister(self, self._run);
	};

	/**
 	@memberof Emitter
 	@method resume
 	@desc
 		Resume the run loop after pause.
 	@example
 		myEmitter.resume();
    */
	self.resume = function () {
		FrameRate.register(self, self._run, self.fps);
	};

	/**
 	@memberof Emitter
 	@name tween
 	@property {function} tween.to
 		{@link Emitter.to}
 	@desc
 		Creates a object to hold tween functions:
 	*/
	self.tween = {};

	/**
 	@memberof Emitter
 	@method to
 	@param {number} duration
 		duration of the tween in seconds
 	@param {object} props
 		properties to use
 	@desc
 		It creates a TweenLite animation for tweening emitter properties.
 		( The purpose of this is to tween multiple nested keys in property object, since TweenLite doesn't support nested keys. )
 		<br><br>
 		<b>NOTE!!!</b>
 		This method is on the {@link Emitter.tween} object!
 		@example
         	myEmitter.tween.to( 0.3, {
 			'emitRate': 1,
 			'velocity.value.angle': 45,
 			'origin.value.x': 100,
 			'origin.value.y': 350,
 			delay: 1,
 			onComplete: function () {
 				trace( 'Done!' );
 			}
     	   	});
    */
	self.tween.to = function (duration, props) {
		props = props || {};

		// var self = self;
		var onUpdate = props.onUpdate || null;
		var delay = props.delay || 0;

		delete props.delay;

		return TweenLite.delayedCall(delay, function () {

			//strip out emitter properties
			var emitterProps = {};
			for (var k in props) {
				if (self.get(k) !== undefined) {
					emitterProps[k] = self.get(k);
				}
			}

			props.onUpdate = function () {
				if (onUpdate) {
					onUpdate();
				}
				self.setProperties(emitterProps);
			};
			TweenLite.to(emitterProps, duration, props);
		});
	};

	/**
 	@memberof Emitter
 	@method createParticles
 	@param {number} amount
 		the amount of particles to create
 	@desc
 		Creates particles from the particle models of the emitter. 
    */
	self.createParticles = function (amount) {
		self.frameEmittedCount++;

		if (self.models.length <= 0) {
			return;
		}
		var p = self.properties;
		var map = self.probabilityMap;
		var i;

		for (i = 0; i < amount; i++) {
			var ms = self.models;
			var index;

			if (self.particles.length >= p.maxParticleAmount) {
				return;
			}

			if (p.pickRandomModel) {
				//select model base on probability
				var num = MathUtils.random(0, self.totalProbability, 0.01);
				var j;
				for (j = 0; j < map.length - 1; j++) {
					if (MathUtils.inRange(num, map[j], map[j + 1])) {
						index = j;
						break;
					}
				}
			} else {
				index = (self.frameEmittedCount - 1) % ms.length;
			}

			self.particles.push(new Particle(self.ctx, ms[index], self.fps));
		}
	};

	/**
 	@memberof Emitter
 	@method addModel
 	@param {object} modelObj
 		the object of the particle model to be added
 	@desc
 		Add a particle model
 	@example
         	var modelObj = {
 				type: "Circle",
 	            width: 12,
 	            properties: {},
 	            id: 'model5'
         	};
         	myEmitter.addModel( modelObj );
 */
	self.addModel = function (modelObj) {
		self.properties.particleModels.push(modelObj);
		self._afterPropertyChanged(['particleModels']);
	};

	/**
 	@memberof Emitter
 	@method removeModel
 	@param {string} id
 		the id of the particle model to be removed
 	@desc
 		Remove a particle model by its id
 	@example
         	myEmitter.removeModel( 'model5' );
 */
	self.removeModel = function (id) {
		var i;
		var index = null;
		var pm = self.properties.particleModels;
		for (i = 0; i < pm.length; i++) {
			if (id === pm[i].id) {
				index = i;
				break;
			}
		}

		if (index !== null) {
			pm.splice(index, 1);
			self._afterPropertyChanged(['particleModels']);
		}
	};

	self._drawBackground = function () {

		var p = self.properties;
		var bg = p.background;
		if (p.clearCanvas) {
			if (self.frameCount > 0) {
				self.ctx.globalAlpha = bg.alpha;
			}
			switch (bg.type) {
				case 'color':
					self.ctx.beginPath();
					self.ctx.rect(0, 0, self.ctxWidth, self.ctxHeight);
					self.ctx.fillStyle = bg.color;
					self.ctx.fill();
					self.ctx.closePath();
					break;
				case 'image':
					self.ctx.drawImage(ImageManager.get(bg.image), 0, 0, self.ctxWidth, self.ctxHeight);
					break;
				default:
					self.ctx.clearRect(0, 0, self.ctxWidth, self.ctxHeight);
			}
			self.ctx.globalAlpha = 1;
		}
	};

	self._afterPropertyChanged = function (keys) {
		keys = keys || [];

		//convert globalForce to vector
		if (keys.indexOf('globalForce') > -1) {
			var force = self.properties.globalForce;
			self._globalForce = Vector2D.degreeToVector(force.angle).mult(force.amount);
		}

		//create models if it's changed
		if (keys.indexOf('particleModels') > -1) {

			self.models = [];
			self.totalProbability = 0;
			var map = [];
			var pm = self.properties.particleModels;
			for (i = 0; i < pm.length; i++) {
				var pmi = pm[i];
				var g;
				var m;

				switch (pmi.type) {
					case 'Image':
						g = new Graphic[pmi.type](ImageManager.get(pmi.image), pmi.width, pmi.style);
						break;
					case 'Sprite':
						g = new Graphic[pmi.type](ImageManager.get(pmi.image), pmi.width, pmi.style, pmi.spriteSetting);
						break;
					case 'Circle':
						g = new Graphic[pmi.type](pmi.width, pmi.style);
						break;
					case 'Rect':
						g = new Graphic[pmi.type](pmi.width, pmi.height, pmi.style);
						break;
				}

				m = new ParticleModel(g, pmi.properties);
				m.setDefaultProperties(self.properties);
				self.models.push(m);

				map.push(self.totalProbability);

				var p = pmi.probability === undefined ? 1 : pmi.probability;
				self.totalProbability += p;
			}
			map.push(self.totalProbability);
			self.probabilityMap = map;
		} else {
			var prop = self.properties;
			self.models.forEach(function (a) {
				a.setDefaultProperties(prop);
			});
		}
	}.bind(self);

	self._run = function () {
		var p = self.properties;

		self._drawBackground();

		var i;
		for (i = 0; i < self.particles.length; i++) {
			var a = this.particles[i];
			if (!a.isDead(self.ctxWidth, self.ctxHeight, p.killIfOutOfCanvas)) {
				self.liveParticles.push(a);
				a.update();
				a.applyForce(self._globalForce);
				if (p.gravityAmount !== 0) {
					var gravity = self.G.clone();
					gravity.mult(p.gravityAmount);
					a.applyForce(gravity);
				}

				if (p.world.active) {
					a.checkWorld(p.world.value);
				}

				if (self.customBehaiver.particle !== 0) {
					var m;
					for (m = 0; m < self.customBehaiver.particle.length; m++) {
						var func = self.customBehaiver.particle[m].call(func, a, self.particles);
					}
				}

				a.render();
			} else {
				a = null;
			}
		};
		//discard dead particles
		self.particles = self.liveParticles;
		self.liveParticles = [];

		if (self.customBehaiver.emitter !== 0) {
			var m;
			for (m = 0; m < self.customBehaiver.emitter.length; m++) {
				var func = self.customBehaiver.emitter[m].call(func, self);
			}
		}

		//emit if active
		if (self.active) {
			//emit if on frame
			var f = self.frameCount - self.startEmitFrame;
			if (f % ~~(1 / p.emitRate) === 0) {
				self.createParticles(p.emitAmount);
			}
		}

		self.frameCount++;
	};
};

exports.default = Emitter;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _create = __webpack_require__(30);

var _create2 = _interopRequireDefault(_create);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
	@class Graphic
	@desc
		A simple, light weight class for rendering shapes and images on canvas element with assigned style to work with the particle system.
		Graphic.Shape is the parent class that remains netural to keep the flexiblity to create more classes based on needs in different projects.
		<br><br>

		To keep it practical while maintaining it as light as possible, there are four classes currently available:<br>
		<ul>
			<li>Graphic.Image</li>
			<li>Graphic.Sprite</li>
			<li>Graphic.Circle</li>
			<li>Graphic.Rect</li>
		</ul> 
*/
var Graphic = Graphic || {};

Graphic = {
	DEFAULTSIZE: 10,
	DEFAULTSTYLE: {
		x: 0,
		y: 0,
		alpha: 1,
		scale: 1,
		rotation: 0,
		transformOrigin: { x: 0.5, y: 0.5 },
		color: [255, 0, 0],
		strokeWidth: 0,
		strokeColor: 'rgba(0, 0, 0, 1)'
	},
	Shape: function Shape() {}
};

/**
	@class Graphic.Shape
	@desc
		The parent class of other Graphic classes. It handles color, alpha, translation, rotation and scaling. 

*/
Graphic.Shape.prototype = {

	hasPath: true,

	getRGBA: function getRGBA(rgb, alpha) {
		var r = ~~MathUtils.restrict(rgb[0], 0, 255);
		var g = ~~MathUtils.restrict(rgb[1], 0, 255);
		var b = ~~MathUtils.restrict(rgb[2], 0, 255);
		var a = MathUtils.restrict(alpha, 0, 1);

		return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	},

	render: function render(ctx, style, frameCount) {
		var self = this;

		style = style || {};
		style = ObjectUtils.default(style, self.style);
		style.scale = MathUtils.restrict(style.scale, 0, Infinity);
		style.alpha = MathUtils.restrict(style.alpha, 0, 1);
		var w = self.width * style.scale;
		var h = self.height * style.scale;

		style.color = self.getRGBA(style.color, style.alpha);

		ctx.save();

		if (style.alpha < 1 && !self.hasPath) {
			ctx.globalAlpha = style.alpha;
		}

		ctx.translate(w * -style.transformOrigin.x, h * -style.transformOrigin.y);

		if (style.rotation !== 0) {
			var tw = style.x + w * style.transformOrigin.x;
			var th = style.y + h * style.transformOrigin.y;
			ctx.translate(tw, th);
			ctx.rotate(MathUtils.toRadians(style.rotation));
			ctx.translate(-tw, -th);
		}

		if (self.hasPath) {
			ctx.beginPath();
		}

		self.draw(ctx, style, w, h, frameCount);

		if (self.hasPath) {
			ctx.closePath();
			ctx.fillStyle = style.color;
			ctx.fill();

			if (style.strokeWidth > 0) {
				ctx.lineWidth = style.strokeWidth;
				ctx.strokeStyle = style.strokeColor;
				ctx.stroke();
			}
		}

		ctx.restore();
	}
};

/**
	@class Graphic.Image
	@desc
		A class for rendering images on canvas. The size parameter applys to width. The height
		is calculated base the the image width and height ratio and call draw method of the child class.
*/
Graphic.Image = function (image, size, style) {
	var self = this;

	self.hasPath = false;
	self.image = image;
	self.width = size || image.width;
	self.height = self.width * (image.height / image.width);
	self.style = ObjectUtils.default(style || {}, Graphic.DEFAULTSTYLE);

	self.draw = function (ctx, style, w, h) {
		ctx.drawImage(self.image, style.x, style.y, w, h);
	};
};

Graphic.Image.prototype = (0, _create2.default)(Graphic.Shape.prototype);

/**
	@class Graphic.Circle
	@param {number} size
		diameter of the circle
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@desc
		A class for rendering circles on canvas

*/
Graphic.Circle = function (size, style) {
	var self = this;

	self.width = size * 0.5 || Graphic.DEFAULTSIZE * 0.5;
	self.height = self.width;
	self.style = ObjectUtils.default(style || {}, Graphic.DEFAULTSTYLE);

	self.draw = function (ctx, style, w) {
		ctx.arc(style.x + w * 0.5, style.y + w * 0.5, w, 0, Math.PI * 2);
	};
};

Graphic.Circle.prototype = (0, _create2.default)(Graphic.Shape.prototype);

/**
	@class Graphic.Rect
	@param {number} width
		width of the rectangle
	@param {number} height
		height of the rectangle
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@desc
		A class for rendering rectangles on canvas.

*/
Graphic.Rect = function (width, height, style) {
	var self = this;

	self.width = width || Graphic.DEFAULTSIZE;
	self.height = height || Graphic.DEFAULTSIZE;
	self.style = ObjectUtils.default(style || {}, Graphic.DEFAULTSTYLE);

	self.draw = function (ctx, style, w, h) {
		ctx.rect(style.x, style.y, w, h);
	};
};

Graphic.Rect.prototype = (0, _create2.default)(Graphic.Shape.prototype);

/**
	@class Graphic.Sprite
	@param {Image} image
		image of the sprite sheet
	@param {number} size
		display width of per frame
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@param {object} spriteSetting
		Object with the following properties:

		@property {number} frameWidth
			width of per frame 

		@property {number} frameHeight
			height of per frame

		@property {number} frameNumber
			number of total frames

		@property {number} speed
			the speed of the animation

		@property {boolean} loop

	@desc
		A class for rendering spritesheet animation on canvas.

*/
Graphic.Sprite = function (image, size, style, spriteSetting) {
	var self = this;

	self.hasPath = false;
	self.setting = spriteSetting;

	self.image = image;
	self.oriWidth = image.width;
	self.oriHeight = image.height;
	self.width = size || self.oriWidth;
	self.height = self.width * (self.setting.frameWidth / self.setting.frameHeight);
	self.style = ObjectUtils.default(style || {}, Graphic.DEFAULTSTYLE);
	self.frameLen = ~~(1 / self.setting.speed);
	self.colNumber = self.oriWidth / self.setting.frameWidth;

	self.draw = function (ctx, style, w, h, frameCount) {
		var frameIndex = ~~(frameCount / self.frameLen);
		if (self.setting.loop) {
			frameIndex = frameIndex % self.setting.frameNumber;
		} else {
			var fn = self.setting.frameNumber - 1;
			frameIndex = frameIndex > fn ? fn : frameIndex;
		}

		var fw = self.setting.frameWidth;
		var fh = self.setting.frameHeight;
		var ratio = w / fw;

		var sx = frameIndex * self.setting.frameWidth % self.oriWidth;
		var sy = ~~(frameIndex / self.colNumber) * self.setting.frameHeight;

		//trace ( frameIndex, fw, fh, ratio, sx, sy )

		ctx.drawImage(self.image, sx, sy, fw, fh, style.x, style.y, fw * ratio, fh * ratio);
	};
};

Graphic.Sprite.prototype = (0, _create2.default)(Graphic.Shape.prototype);

exports.default = Graphic;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class Particle
	@desc
		This Particle class is used along with {@link ParticleModel} and {@link Emitter} class. 
*/
var Particle = function Particle(ctx, model, fps) {
	var self = this;
	//set up properties
	self.fps = fps;
	self.graphic = model.graphic;
	self.properties = model.generateIndividualProperties();
	self.frameCount = 0;
	self.ctx = ctx;

	self._lifeSpanFrameCount = ParticlesUtils.secToFrameCount(self.properties.lifeSpan, self.fps);
	self._force = new Vector2D(0, 0);
	self._hasAnimation = function () {
		var ani = self.properties.animations;
		var i;
		for (var key in ani) {
			if (ani[key].steps.length > 0) {
				return true;
			}
		}
		return false;
	}.bind(self)();

	self._hasTurbulence = function () {
		var t = self.properties.turbulence;
		return t.rate !== 0 && t.x !== 0 && t.y !== 0;
	}.bind(self)();
};

Particle.prototype = {

	/**
 	@memberof Particle
 	@method update
 	@desc
 		Updates the properties of the particle
    */
	update: function update() {
		var p = this.properties;
		var vel = p.velocity.clone();

		p.velocity.mult(1 + p.acceleration);
		p.velocity.add(this._force);
		p.velocity.limit(p.maxSpeed);
		p.location.add(p.velocity);

		this._force.mult(0);

		if (this._hasTurbulence) {

			if (!this.noiseStart) {
				this.noiseStart = new Vector2D.random();
				this.noiseStart.mult(250);
			}

			var t = p.turbulence;
			this.noiseStart.add(new Vector2D(t.rate, t.rate));

			var n = SimpleNoise2D.get(this.noiseStart.x, this.noiseStart.y);
			p.location.x += n.x * t.xAmplitude;
			p.location.y += n.y * t.yAmplitude;
		}

		p.style.x = p.location.x;
		p.style.y = p.location.y;

		this.frameCount++;
	},

	/** 
 	@memberof Particle
 	@method getAnimationStyle
 	@desc
 		Update the animated style of a particle
    */
	getAnimationStyle: function getAnimationStyle() {

		//TODO: optimize
		var p = this.properties;
		var style = {};
		var sec = ParticlesUtils.frameCountToSec(this.frameCount, this.fps);
		var offsetStyle = ParticlesUtils.easyTween(p.animations, p.lifeSpan, sec);

		// apply to each key
		for (key in p.style) {
			if (offsetStyle[key] !== undefined) {
				var val = p.style[key] * offsetStyle[key];
				style[key] = val;
			} else {
				style[key] = p.style[key];
			}
		}
		return style;
	},

	/**
 	@memberof Particle
 	@method render
 	@desc
 		Renders the particle onto the canvas context.
 */
	render: function render() {

		var style = this._hasAnimation ? this.getAnimationStyle() : this.properties.style;
		this.graphic.render(this.ctx, style, this.frameCount);
	},

	/**
 	@memberof Particle
 	@method applyForce
 	@desc
 		Applies force to the particle.
 */
	applyForce: function applyForce(f) {
		this._force.add(f);
	},

	/**
 	@memberof Particle
 	@method isDead
 	@returns {boolean}
 	@desc
 		Returns a boolean of is the particle is dead depending on two situations:
 		<br>
 		<ol>
 			<li>if it has reaches its lifespan, or</li>
 			<li>if it is out of the canvas and if {@link EmitterData.killIfOutOfCanvas} is set to true</li>
 		</ol>
    */
	isDead: function isDead(w, h, k) {
		var p = this.properties;
		var remainingLife = this._lifeSpanFrameCount - this.frameCount;

		if (remainingLife <= 0) {
			return true;
		}

		if (k) {
			var l = p.location;
			var g = this.graphic;
			var size = Math.max(g.width, g.height) * p.style.scale;
			if (l.x - size > w || l.y - size > h || l.x + size < 0 || l.y + size < 0) {
				return true;
			}
		}

		return false;
	},

	/**
 	@memberof Particle
 	@method checkWorld
 	@param {array} w
 		an array that contains left X, right X, top Y, bottom Y as values for the boundary
 	@desc
 		Remains the particle in the defined world boundaries by its body size and bounces it when it hits the boundaries.
 */
	checkWorld: function checkWorld(w) {

		var l = this.properties.location;
		var r = this.properties.bodySize;
		var x1 = w[0] + r;
		var x2 = w[1] - r;
		var y1 = w[2] + r;
		var y2 = w[3] - r;

		if (l.x <= x1) {
			this._checkBorder('x', x1);
		} else if (l.x >= x2) {
			this._checkBorder('x', x2);
		}

		if (l.y <= y1) {
			this._checkBorder('y', y1);
		} else if (l.y >= y2) {
			this._checkBorder('y', y2);
		}
	},

	/**
 	@memberof Particle
 	@method _checkBorder
 	@param {string} axis
 		String 'x' or 'y'
 	@param {number} val - the location of the border on the X or Y axis
 		@desc
 		Check it the particle location reaches the border, if ture, it bounces to it.
 */
	_checkBorder: function _checkBorder(axis, val) {
		//axis: x or y
		var p = this.properties;
		var v = p.velocity;
		var b = p.bounceAmount;

		if (axis === 'x') {
			v.x *= -b;
			v.y *= b;
			p.location.x = val;
		} else {
			v.x *= b;
			v.y *= -b;
			p.location.y = val;
		}
	}
};

exports.default = Particle;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class ParticleModel
	@desc
		This ParticleModel class is used along with {@link Particle} and {@link Emitter} class.
*/
var particleId = 0;
var ParticleModel = function ParticleModel(graphic, properties) {
	var self = this;

	self.graphic = graphic;
	self.originalProperties = properties || {};
	self.defaultProperties = {};
	self.properties = self.originalProperties;

	// hold its own properties
	// but generate for partical to actually use
	self.setDefaultProperties = function (obj) {
		self.defaultProperties = obj;
		self.properties = ObjectUtils.default(self.originalProperties, obj, true);
	};

	self.generateIndividualProperties = function () {
		var psu = ParticlesUtils;

		var rn = function rn(obj) {
			return psu.randomNumInRange(obj.value, obj.range);
		};

		var p = self.properties;
		var vel = Vector2D.degreeToVector(rn(p.velocityAngle));
		var scale = rn(p.scale);
		var speed = rn(p.speed);
		var loc = psu.randomVectorInRange(p.origin.value, p.origin.range, p.origin.shape);

		var result = {
			id: particleId,
			lifeSpan: rn(p.lifeSpan),
			location: loc,
			velocity: vel.mult(speed),
			turbulence: p.turbulence,
			maxSpeed: p.maxSpeed,
			acceleration: p.acceleration,
			bounceAmount: p.bounceAmount,
			bodySize: self._getBodySize(scale),
			style: {
				x: location.x,
				y: location.y,
				alpha: rn(p.alpha),
				scale: scale,
				rotation: rn(p.rotation),
				transformOrigin: p.transformOrigin,
				color: ParticlesUtils.randomArrayInRange(p.color.value, p.color.range)
			},

			animations: p.animations
		};

		particleId++;
		return result;
	};

	self._getBodySize = function (scale) {
		if (self.properties.bodySize !== undefined) {
			return self.properties.bodySize * scale;
		}
		if (self.graphic instanceof Graphic.Circle) {
			return self.graphic.width * scale;
		} else {
			return Math.max(self.graphic.width, self.graphic.height) * scale * 0.5;
		}
	};
};

exports.default = ParticleModel;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
var ParticlesUtils = ParticlesUtils || {};
//object

ParticlesUtils = {

	/* Style */
	easyTween: function easyTween(animations, maxDuration, frameCount) {
		var style = {};

		for (var key in animations) {
			var obj = animations[key];
			var steps = obj.steps;
			var duration = obj.duration === 'max' ? maxDuration : obj.duration || maxDuration;
			var perc = obj.loop ? frameCount % duration / duration : frameCount / duration;
			perc = MathUtils.restrict(perc, 0, 1);
			var i;

			for (i = 0; i < steps.length - 1; i++) {
				//check current and next
				var s1 = steps[i];
				var s2 = steps[i + 1];

				if (MathUtils.inRange(perc, s1.s, s2.s)) {
					val = [];
					val = MathUtils.rel(s1.v, s2.v, s1.s, s2.s, perc);
					style[key] = val;
					break;
				}
			}
		}
		return style;
	},

	randomNumInRange: function randomNumInRange(v, r, increment) {
		if (!!!r) {
			return v;
		}
		increment = increment || 0.01;
		return v + MathUtils.random(-r / 2, r / 2, increment);
	},

	randomArrayInRange: function randomArrayInRange(v, r, increment) {
		increment = increment || 0.01;
		var result = [];
		var i;
		for (i = 0; i < v.length; i++) {
			result.push(this.randomNumInRange(v[i], r[i], increment));
		}

		return result;
	},

	randomVectorInRange: function randomVectorInRange(v, r, shape) {

		var center = new Vector2D(v.x, v.y);
		var rx = r.x / 2;
		var ry = r.y / 2;
		var rnd;

		switch (shape) {
			case 'rect':
				var x = MathUtils.random(-rx, rx, 0.01);
				var y = MathUtils.random(-ry, ry, 0.01);
				rnd = new Vector2D(x, y);
				break;

			case 'oval':
			default:
				var rnd = Vector2D.random();
				rnd.x *= rx * Math.random();
				rnd.y *= ry * Math.random();
		}

		center.add(rnd);

		return center;
	},

	secToFrameCount: function secToFrameCount(v, fps) {
		return ~~(v * fps);
	},

	frameCountToSec: function frameCountToSec(v, fps) {
		return v / fps;
	}
};

exports.default = ParticlesUtils;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
	@class Ratio
	@desc
		Utilities for different ratio layouts; used by {@link UIImage} and deprecated Flipbook.
*/
var Ratio = function () {
	function resize(mode, source, target, returnObj) {
		mode = mode || this.EXACT;
		returnObj || (returnObj = { width: 0, height: 0 });
		if (mode == this.EXACT) {
			returnObj.width = source.width;
			returnObj.height = source.height;
		} else if (mode == this.STRETCH) {
			returnObj.width = target.width;
			returnObj.height = target.height;
		} else {
			var s = source.width / source.height;
			var t = target.width / target.height;
			var a = mode == this.FILL ? s : t;
			var b = mode == this.FILL ? t : s;
			if (a < b) {
				returnObj.height = source.height / (source.width / target.width);
				returnObj.width = target.width;
			} else {
				returnObj.width = source.width / (source.height / target.height);
				returnObj.height = target.height;
			}
		}
		return returnObj;
	}

	return {
		resize: resize,

		/**
  	@memberof Ratio
  	@const {string} EXACT
  		'auto' ~ Images display at the exact height and width of the source 
  */
		EXACT: 'auto',

		/**
  	@memberof Ratio
  	@const {string} FILL
  		'cover' ~ Scales the image to fill the target without distortion while maintaining aspect ratio, may cause a crop. 
  */
		FILL: 'cover',

		/**
  	@memberof Ratio
  	@const {string} FIT
  		'contain' ~ Scales to fit the full image without distortion while maintaining aspect ratio, may cause negative borders. 
  */
		FIT: 'contain',

		/**
  	@memberof Ratio
  	@const {string} STRETCH
  		'100% 100%' ~ Images stretches to fill the target, may cause aspect ratio distortion. 
  */
		STRETCH: '100% 100%'
	};
}();
exports.default = Ratio;

/***/ })
/******/ ]);