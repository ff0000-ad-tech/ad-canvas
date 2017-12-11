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

var Markup$1 = Object.freeze({
	get: get,
	getElement: getElement,
	removeChildren: removeChildren,
	addiFrame: addiFrame,
	addSvg: addSvg,
	applyToElements: applyToElements
});

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
	Object.defineProperties(D, {

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

/**
	@class DcsUtils
	@desc
		Doubleclick Studio utilities.
*/

/**
	@class ImageUtils
	@desc
		This object contains methods necessary for manipulating images.
*/

/**
	@class LocationUtils
	@desc
		This object contains utilities for interfacing with the device's GPS.
*/

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------
	Class: 	TextUtils

	Description:
		This object contains methods necessary for manipulating text.
	---------------------------------------------------------------------------------------------------------------------------------------------------------- */

/** 
	@class NetUtils
	@desc
		Utility functions that are common in making network requests.
*/

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



var ObjectUtils$1 = Object.freeze({
	clone: clone,
	default: objDefault,
	objectifier: objectifier
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

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


/** 
	@memberOf ArrayUtils
	@method copy
	@param {array} array
		the array to duplicate
	@desc
		Creates a unique duplicate of the given array.
*/


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


/**
	@memberOf ArrayUtils
	@method shuffle
	@param {array} array
		the array to modify
	@desc
		Shuffles the array into a random order.
*/


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


/**
		@memberOf MathUtils
		@method isNumber
		@param {number} num
				the variable to check
		@desc
				Returns true if the passed var is a number.
*/


/**
		@memberOf MathUtils
		@method toNumber
		@param {string} str
				the variable to convert
		@desc
				Takes a numerical string and converts it to number type.
*/


/* --------------------------------------------------------------------------------- */
// DEV 
/**
		@memberOf MathUtils
		@method restrict
		@desc
				Restricts a value to with a range.
*/


/**
		@memberOf MathUtils
		@method getAnglePoint
		@returns {array}
				containing an [xValue, yValue] given x1, y1, distance from that starting coordinate, 
				and angle (in *radians*) which the new point should be from the starting coordinate
		@desc
				Assumes original coordinate rotation is 0 radians
*/


/**
		@memberOf MathUtils
		@method getAngle
		@retuns {number}
				The angle (in *radians*) between two points given x1, y1, x2, y2
*/


/**
		@memberOf MathUtils
		@method getDistance
		@returns {number}
				The distance between two points given x1, y1, x2, y2
*/

// import MonetUtils from './lib/MonetUtils'
// import MotionUtils from './lib/MotionUtils'
// has named exports

// NOTE: DON'T import only "default" from ObjectUtils since the default
// function is a reserved keyword. Importing into scope will likely cause
// issues w/ code using the "default" keyword
console.log('keys', Object.keys(ObjectUtils$1));

var mix = function mix(superclass) {
	return new MixinBuilder(superclass);
};

var MixinBuilder = function () {
	function MixinBuilder(superclass) {
		classCallCheck(this, MixinBuilder);

		this.superclass = superclass;
	}

	createClass(MixinBuilder, [{
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

var LoaderBase = function LoaderBase(superclass) {
	return function (_superclass) {
		inherits(_class, _superclass);

		function _class() {
			var _ref;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			classCallCheck(this, _class);

			var _this = possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));

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

		createClass(_class, [{
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

var LoaderSource = function LoaderSource(superclass) {
	return function (_superclass) {
		inherits(_class, _superclass);

		function _class() {
			var _ref;

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			classCallCheck(this, _class);

			var _this = possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));

			var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

			var L = _this;

			L.url = global.matchProtocolTo(arguments[0] || '');

			if (arg.platformGetUrl) {
				L.platformGetUrl = arg.platformGetUrl;
				L.url = arg.platformGetUrl(L.url);
			}

			L.fileName = arg.id === undefined ? getFileName(L.url) : arg.id;
			L.fileType = arg.fileType || getFileType(L.url);
			return _this;
		}

		return _class;
	}(superclass);
};

var LoaderTicker = function LoaderTicker(superclass) {
	return function (_superclass) {
		inherits(_class, _superclass);

		function _class() {
			var _ref;

			classCallCheck(this, _class);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args)));
		}

		createClass(_class, [{
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

var Blank$1 = function Blank() {
	classCallCheck(this, Blank);
};

var ImageLoader = function (_mix$with) {
	inherits(ImageLoader, _mix$with);

	function ImageLoader() {
		var _ref;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		classCallCheck(this, ImageLoader);

		var _this = possibleConstructorReturn(this, (_ref = ImageLoader.__proto__ || Object.getPrototypeOf(ImageLoader)).call.apply(_ref, [this].concat(args)));

		var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

		// used when only needing to render, such as writing into the DOM as markup <svg>
		_this.renderOnly = !!arg.renderOnly;
		_this.crossOrigin = arg.crossOrigin;
		return _this;
	}

	createClass(ImageLoader, [{
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
}(mix(Blank$1).with(LoaderBase, LoaderSource, LoaderTicker));

var Blank$2 = function Blank() {
	classCallCheck(this, Blank);
};

var InlineLoader = function (_mix$with) {
	inherits(InlineLoader, _mix$with);

	function InlineLoader() {
		var _ref;

		classCallCheck(this, InlineLoader);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return possibleConstructorReturn(this, (_ref = InlineLoader.__proto__ || Object.getPrototypeOf(InlineLoader)).call.apply(_ref, [this].concat(args)));
	}

	createClass(InlineLoader, [{
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
}(mix(Blank$2).with(LoaderBase, LoaderSource));

var Blank$3 = function Blank() {
	classCallCheck(this, Blank);
};

var DataLoader = function (_mix$with) {
	inherits(DataLoader, _mix$with);

	function DataLoader() {
		var _ref;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		classCallCheck(this, DataLoader);

		var _this = possibleConstructorReturn(this, (_ref = DataLoader.__proto__ || Object.getPrototypeOf(DataLoader)).call.apply(_ref, [this].concat(args)));

		var arg = arguments && arguments.length > 1 ? arguments[1] : arguments[0] || {};

		var D = _this;
		D.method = (arg.method || 'get').toLowerCase();
		D.query = arg.query || null;
		D.responseType = arg.responseType || null;
		return _this;
	}

	createClass(DataLoader, [{
		key: 'load',
		value: function load() {
			var D = this;
			// trace('DataLoader "' + D.name + '" requesting:\n\t->', D.url)

			var queryString = null;
			var isPost = D.method === 'post';

			D.req = createXMLHttpRequest();

			if (D.responseType != undefined) D.req.responseType = D.responseType;

			var url = D.url;

			if (D.query) {
				queryString = getParamsFromData(D.query);
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
}(mix(Blank$3).with(LoaderBase, LoaderSource));

var Blank$4 = function Blank() {
	classCallCheck(this, Blank);
};

var FontLoader = function (_mix$with) {
	inherits(FontLoader, _mix$with);

	function FontLoader() {
		var _ref;

		classCallCheck(this, FontLoader);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return possibleConstructorReturn(this, (_ref = FontLoader.__proto__ || Object.getPrototypeOf(FontLoader)).call.apply(_ref, [this].concat(args)));
	}

	createClass(FontLoader, [{
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
}(mix(Blank$4).with(LoaderBase, LoaderSource, LoaderTicker));

/** 
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

var Blank = function Blank() {
	classCallCheck(this, Blank);
};

var Loader$1 = function (_mix$with) {
	inherits(Loader, _mix$with);

	function Loader() {
		var _ref;

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		classCallCheck(this, Loader);

		var _this = possibleConstructorReturn(this, (_ref = Loader.__proto__ || Object.getPrototypeOf(Loader)).call.apply(_ref, [this].concat(args)));

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


	createClass(Loader, [{
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
			var fileType = fbaOverwrite ? fbaOverwrite[1] : L.fileType || getFileType(url);
			var loaderType = void 0;
			// trace('\t fileType:', fileType)

			switch (fileType) {
				case 'jpg':
				case 'jpeg':
				case 'gif':
				case 'png':
				case 'svg':
					loaderType = ImageLoader;
					break;
				case 'ttf':
				case 'woff':
					loaderType = FontLoader;
					break;
				case 'json':
				case 'fba':
				case 'bin':
				case 'binary':
					loaderType = DataLoader;
					break;
				default:
					loaderType = InlineLoader;
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
}(mix(Blank).with(LoaderBase));

/**
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
function get$2(selector, parent) {
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


/**
	@memberof Markup
	@method removeChildren
	@param {element} _target
		element to be targeted
	@desc
		Removes all the children elements of an element
*/


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


/**	Method: addSvg()
	Deprecated.

	_containerData			- object with the necessary keys for creating an element. */


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
function setCss$1(_element, _args) {
	_element = get$2(_element);
	var cssList = {};
	if (arguments.length > 2) {
		for (var i = 1; i < arguments.length; i += 2) {
			cssList = CssManager.conformCssKeyValue(arguments[i], arguments[i + 1]);
		}
	} else if (typeof arguments[1] == 'string') {
		cssList = CssManager.conformCssString(arguments[1], _element);
	} else {
		cssList = CssManager.conformCssObject(arguments[1], _element);
	}
	CssManager.apply(_element, cssList);
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
function getCss$1(_element, _key) {
	_element = get$2(_element);

	var cssValue;

	if (_key == 'x' || _key == 'y') {
		var existingTransform = _element.style[CssManager.getDeviceKey('transform')];
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
function injectStylesheet$1(nodeId, styles) {
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

/**
	@class Effects
	@desc
		Utilities for adding effects to elements
*/

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
var Graphic$1 = Graphic$1 || {};

Graphic$1 = {
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
Graphic$1.Shape.prototype = {

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
Graphic$1.Image = function (image, size, style) {
	var self = this;

	self.hasPath = false;
	self.image = image;
	self.width = size || image.width;
	self.height = self.width * (image.height / image.width);
	self.style = ObjectUtils.default(style || {}, Graphic$1.DEFAULTSTYLE);

	self.draw = function (ctx, style, w, h) {
		ctx.drawImage(self.image, style.x, style.y, w, h);
	};
};

Graphic$1.Image.prototype = Object.create(Graphic$1.Shape.prototype);

/**
	@class Graphic.Circle
	@param {number} size
		diameter of the circle
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@desc
		A class for rendering circles on canvas

*/
Graphic$1.Circle = function (size, style) {
	var self = this;

	self.width = size * 0.5 || Graphic$1.DEFAULTSIZE * 0.5;
	self.height = self.width;
	self.style = ObjectUtils.default(style || {}, Graphic$1.DEFAULTSTYLE);

	self.draw = function (ctx, style, w) {
		ctx.arc(style.x + w * 0.5, style.y + w * 0.5, w, 0, Math.PI * 2);
	};
};

Graphic$1.Circle.prototype = Object.create(Graphic$1.Shape.prototype);

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
Graphic$1.Rect = function (width, height, style) {
	var self = this;

	self.width = width || Graphic$1.DEFAULTSIZE;
	self.height = height || Graphic$1.DEFAULTSIZE;
	self.style = ObjectUtils.default(style || {}, Graphic$1.DEFAULTSTYLE);

	self.draw = function (ctx, style, w, h) {
		ctx.rect(style.x, style.y, w, h);
	};
};

Graphic$1.Rect.prototype = Object.create(Graphic$1.Shape.prototype);

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
Graphic$1.Sprite = function (image, size, style, spriteSetting) {
	var self = this;

	self.hasPath = false;
	self.setting = spriteSetting;

	self.image = image;
	self.oriWidth = image.width;
	self.oriHeight = image.height;
	self.width = size || self.oriWidth;
	self.height = self.width * (self.setting.frameWidth / self.setting.frameHeight);
	self.style = ObjectUtils.default(style || {}, Graphic$1.DEFAULTSTYLE);
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

Graphic$1.Sprite.prototype = Object.create(Graphic$1.Shape.prototype);

/**
	@class Particle
	@desc
		This Particle class is used along with {@link ParticleModel} and {@link Emitter} class. 
*/

/**
	@class ParticleModel
	@desc
		This ParticleModel class is used along with {@link Particle} and {@link Emitter} class.
*/

/**
	@class Ratio
	@desc
		Utilities for different ratio layouts; used by {@link UIImage} and deprecated Flipbook.
*/

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
// named exports

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------
	Class: 	Align_old

	WARN:
		This class has been depreciated. It is only used for migrating old ads when there is a time sensitive
		deadline.  Otherwise, old units that are migrated should have their Align methods updated to use the
		<Align> class.

	Description:
		Utilities for aligning objects.
	---------------------------------------------------------------------------------------------------------------------------------------------------------- */

/**
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

/**
	@class GestureEvent
	@desc
		This module has custom events to be used with the Gesture module. {@link Gesture}
*/
var GestureEvent$1 = new function () {

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

/**
	@class GestureBase

	@desc
		-- INTERNAL MODULE --
		This module is used exclusively by Gesture.  When a dom element has an event listener registered, it creates an instance of this module 
		to hold all the event handlers for the dom element.  Every dom element gets a new GestureBase instance. {@link Gesture}
	
*/
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
}

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
		if (Device.os != 'ios') G.elem.addEventListener('mousedown', G._handleDown);
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

		GestureEvent$1.startPoint();

		G.elem.removeEventListener('touchstart', G._handleTouchStart);
		if (Device.os != 'ios') G.elem.removeEventListener('mousedown', G._handleDown);

		G._isDragging = false;

		G._add(G._end, G._handleUp);
		G._add('move', G._handleDrag);

		var touch = G._getEventScope(event);
		var mouseX = touch.pageX;
		var mouseY = touch.pageY;

		var elemRect = G.elem.getBoundingClientRect();
		var localOffsetX = mouseX - elemRect.left;
		var localOffsetY = mouseY - elemRect.top;

		var localX = G.elem.x || getCss$1(G.elem, 'x');
		var localY = G.elem.y || getCss$1(G.elem, 'y');
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
			if (GestureEvent$1.stopped(name)) return;
			var newEvent = new GestureEvent$1.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY);
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
			if (GestureEvent$1.stopped(name)) return;
			var newEvent = new GestureEvent$1.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY, 0, 0, G._vX, G._vY);
			if (G.debug) trace(' -> dispatch', name);
			G.elem.dispatchEvent(newEvent);
		}

		if (G._isDragging) {
			G._dragEndOrSwipe('onSwipe');
		}

		G._reset();

		// this prevents the second mouse down on Android
		event.preventDefault();

		GestureEvent$1.endPoint();
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
			if (GestureEvent$1.stopped(name)) return;
			var newEvent = new GestureEvent$1.Event(name, mouseX, mouseY, localOffsetX, localOffsetY, elemPositionX, elemPositionY, G._p1X - G._sX, G._p1Y - G._sY, G._vX, G._vY);
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

		if (GestureEvent$1.stopped(name)) return;

		var elemRect = G.elem.getBoundingClientRect();
		var evt = new GestureEvent$1.Event(type, G._p1X, G._p1Y, G._p1X - elemRect.left, G._p1Y - elemRect.top, G._p1X - G._oX, G._p1Y - G._oY,
		// since _xp is assigned after moving, must use _p2X 
		G._p2X - G._sX, G._p2Y - G._sY, G._vX, G._vY);
		if (G.debug) trace(' -> dispatch', type);
		G.elem.dispatchEvent(evt);
	}

};

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
		setCss$1(target, 'cursor', 'pointer');

		// OVERWRITES mouseChildren(false) of parent
		setCss$1(target, 'pointer-events', 'auto');
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
				setCss$1(target, 'cursor', 'auto');
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
			setCss$1(target, 'cursor', 'auto');
		} else {
			setCss$1(target, 'pointer-events', 'none');
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
					setCss$1(target, 'pointer-events', 'auto');
					setCss$1(target, 'cursor', 'pointer');
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
		var _gestureBase = new GestureBase(target);
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

/**
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
var FrameRate$1 = new function () {
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
			_sets[fps] = new FrameRateBase(fps);
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

		if (Object.keys(_sets).length === 0) {
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
}();

/**
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

/* ----------------------------------------------------------------------------------------------------------------------------------------------------------
	Class: 	Styles_legacy
	WARNING: 
		This class is only used for migrating old ads. 

	Description:
		This object contains depreciated methods for the Styles module.
	---------------------------------------------------------------------------------------------------------------------------------------------------------- */

// import Markup_legacy from './lib/Markup_legacy'

/**
	@class	AdManager
	@static
	@desc
		This object is meant to handle all of our json loading and parsing.
*/

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

	Object.defineProperties(T, {

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

/**
	@class DateFormatter

	@classdesc
		This class provides a collection of year, month, date labels along with a utility for mananipulating
		a TzDate/Date object.		
*/

/**
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

/**
	@class DateManager

	@classdesc
		This class initailizes the ads understanding of "now" for use with all other Date oriented classes.		
*/

/**
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

/**
	@class	Velvet
	@static
	@desc
		This object is meant to handle all of our json loading and parsing from the Velvet platform.

		<br><br>

		When testing, changing the date can be a crucial testing step. see DateManager for more information.
*/

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

};

/**
	@class Matrix3D
*/

/**
	@class ParentTransform
*/

// pseudo?
// TODO - change order of translations, possible seperate methods that have indexes which can be a re-orderable aray
//		- convert to prototype pattern for multiple instances?

/** 
	@class Vector2D
	@param {number} x
	@param {number} y
	@desc
		A simple 2D Vector classs 
	@example
		var myVector1 = new Vector2D( 0, 320 );
		var myVector2 = new Vector2D( -3, 5.5 );
*/
var Vector2D$1 = function Vector2D(x, y) {
	this.x = x || 0;
	this.y = y || 0;
};

Vector2D$1.prototype = {
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
	clone: function clone$$1() {
		return new Vector2D$1(this.x, this.y);
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
Vector2D$1.degreeToVector = function (d) {
	var theta = toRadians(d);
	return new Vector2D$1(Math.cos(theta), Math.sin(theta));
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
Vector2D$1.random = function (degreeIncrement) {
	var inc = degreeIncrement || 0.01;
	return Vector2D$1.degreeToVector(random(0, 360, inc));
};

/**
    @class SimpleNoise2D
    @desc
        SimpleNoise2D is a workaround for creating 2D noise with lightweight code. 
        It returns a {@link Vector2D} with x and y values between -0.5 - 0.5.
        For a more sophisticated purpose, please use Perline Noise https://github.com/josephg/noisejs
*/
var SimpleNoise2D$1 = new function () {
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
        return new Vector2D$1(S._getVal('x', x), S._getVal('y', y));
    };
}();

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
			switch (Device.browser) {
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
		var matrix2D = new Matrix2D();

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

/**
	@class ImageManager
	@desc
		This module is used to add/load/manage all Images.
		
*/

/**
	@class PrepareCore
	@desc
		Boilerplate logic that is attempted for all ad templates happens here. The build of an ad should not need to affect this scope. 
*/

/** 
	@class Async
	@desc
		This is a utility to allow easy sequencing of multiple async functions. Increment tokens 
		by calling <code>wait()</code>, decrement by calling <code>done()</code>. Every time <code>done()</code> is called,
		it checks if there are any remaining tokens...if not, the callback is fired.
*/
// @gc

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

/**
	@class SheetManager
	@desc
		Class manages the creation of &lt;style> tags and the addition/removal of classes.
*/

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
			injectStylesheet$1('ViewStyles_' + viewName, window.ViewStyles[viewName]);
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
		var result = objectifier.get(key, parent.dataDict);
		// if not in dataDict, use window 
		if (result === undefined) {
			result = objectifier.get(key, window);
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

/**
	@class Expandable
	@description
		This class controls the expanding and collapsing of expandable units. The animation relys on the properties
		set in the index. Therefore, the animation has be removed from the build file and handled internally. 
		This class can be extended with {@link ExpandableDcs} when units are used in DoubleClick.
 */
var Expandable$2 = new function () {
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
		GestureEvent$1.stop(gestureEvent);
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
		GestureEvent$1.stop(gestureEvent);
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
}();

/**
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
var ExpandableDcs = new function () {

	this.toString = function () {
		return 'ExpandableDcs';
	};

	var E = Expandable$2;

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
}();

/**
	@class LiveScoringData
	@param {object} liveScoringDataRaw	
		raw, live-data json object
	@desc
		This class is instantiated dynamically by {@link LiveScoring}.
*/

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
	_element = get(_element);
	var cssList = {};
	if (arguments.length > 2) {
		for (var i = 1; i < arguments.length; i += 2) {
			cssList = CssManager.conformCssKeyValue(arguments[i], arguments[i + 1]);
		}
	} else if (typeof arguments[1] == 'string') {
		cssList = CssManager.conformCssString(arguments[1], _element);
	} else {
		cssList = CssManager.conformCssObject(arguments[1], _element);
	}
	CssManager.apply(_element, cssList);
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
	_element = get(_element);

	var cssValue;

	if (_key == 'x' || _key == 'y') {
		var existingTransform = _element.style[CssManager.getDeviceKey('transform')];
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
	var element = get(target);

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
	var element = get(target);
	element.classList.remove(className);
}

var Styles$1 = Object.freeze({
	setCss: setCss,
	getCss: getCss,
	injectStylesheet: injectStylesheet,
	addClass: addClass,
	removeClass: removeClass
});

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
var Align$1 = function () {

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
	function get$$1(source, arg) {
		var elem = source.canvas || get(source);
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

				if (params.against !== undefined) {
					against = params.against;
					var againstRect = 0;

					if (isDomElement(against)) {
						if (against.canvas) againstRect = 1;else againstX = getCss(against, xy);
					} else if (typeof against === 'number') {
						againstNumber = true;
						againstX = against;
					} else {
						againstX = against[xy];
						againstRect = 1;
					}

					againstDimension = _rect[againstRect][xy];

					if (params.type === Align$1.CENTER) arg[xy].outer = false;
				} else {
					against = elem[_rect[sourceRect].parent];
					againstDimension = _rect[sourceRect][xy];
				}

				var widthOrHeight = elem[_rect[sourceRect][xy]];

				switch (source._type) {
					case 'arc':
					case 'path':
						switch (params.type) {
							case Align$1.CENTER:
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
		var obj = get$$1(source, arg);

		if (isDomElement(source)) {
			var elem = source.canvas || get(source);
			setCss(elem, obj);
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
		get: get$$1,

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
var Clamp$2 = function () {

	var _rect = {
		x: ['offsetWidth', 'width', 'left', 'right'],
		y: ['offsetHeight', 'height', 'top', 'bottom']

		/* ------------------------------------------------------------------------------------------------------------------------------- */
		// PUBLIC METHODS
	};function set(source, type, buffer, move) {
		var elem = get(source);
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

				var xyValue = getCss(child, xy);
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

			if (move) css[xy] = d.min + getCss(elem, xy) - _buffer[_rect[xy][2]];

			css[_rect[xy][1]] = d.max - d.min + _buffer[_rect[xy][2]] + _buffer[_rect[xy][3]];
		}

		setCss(elem, css);

		// move all the children
		for (i = 0; i < children.length; i++) {
			var child = children[i];
			var css = {};

			for (var xy in direction) {
				css[xy] = childCoordinates[i][xy] - direction[xy].min + _buffer[_rect[xy][2]];
			}

			setCss(child, css);
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
var Countdown$2 = function Countdown() {

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

/**
	@class Effects
	@desc
		Utilities for adding effects to elements
*/
var Effects$2 = function () {

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
		if (obj.amount >= 0) setCss(obj.target, { filter: 'blur(' + obj.amount + 'px)' });
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
		setCss(obj.target, { boxShadow: createShadow(obj.angle || 0, obj.distance || 0, obj.size || 0, obj.spread || 0, obj.color || '#000000', obj.alpha, obj.inner) });
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
		setCss(obj.target, { textShadow: createShadow(obj.angle || 0, obj.distance || 0, obj.size || 0, null, obj.color || '#000000', obj.alpha) });
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
		setCss(obj.target, { background: 'linear-gradient(' + (obj.angle || 0) + 'deg, ' + obj.colors.toString() + ')' });
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
		setCss(obj.target, { background: 'radial-gradient(' + obj.colors.toString() + ')' });
	}

	/* --------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function createShadow(angle, distance, size, spread, color, alpha, inner) {
		var val = '';
		var deg = angle * -1 + 180;
		var rad = toRadians(deg);
		val += (Math.cos(rad) * distance).toFixed(8) + 'px ';
		val += (Math.sin(rad) * distance).toFixed(8) + 'px ';
		val += size + 'px';

		if (spread) val += ' ' + spread + 'px';

		val += ' ' + toRgbaString(color, alpha);

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

var FullScreen$2 = new function () {
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
var Emitter$2 = function Emitter() {
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
		}
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
var Graphic$3 = Graphic$3 || {};

Graphic$3 = {
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
Graphic$3.Shape.prototype = {

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
Graphic$3.Image = function (image, size, style) {
	var self = this;

	self.hasPath = false;
	self.image = image;
	self.width = size || image.width;
	self.height = self.width * (image.height / image.width);
	self.style = ObjectUtils.default(style || {}, Graphic$3.DEFAULTSTYLE);

	self.draw = function (ctx, style, w, h) {
		ctx.drawImage(self.image, style.x, style.y, w, h);
	};
};

Graphic$3.Image.prototype = Object.create(Graphic$3.Shape.prototype);

/**
	@class Graphic.Circle
	@param {number} size
		diameter of the circle
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@desc
		A class for rendering circles on canvas

*/
Graphic$3.Circle = function (size, style) {
	var self = this;

	self.width = size * 0.5 || Graphic$3.DEFAULTSIZE * 0.5;
	self.height = self.width;
	self.style = ObjectUtils.default(style || {}, Graphic$3.DEFAULTSTYLE);

	self.draw = function (ctx, style, w) {
		ctx.arc(style.x + w * 0.5, style.y + w * 0.5, w, 0, Math.PI * 2);
	};
};

Graphic$3.Circle.prototype = Object.create(Graphic$3.Shape.prototype);

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
Graphic$3.Rect = function (width, height, style) {
	var self = this;

	self.width = width || Graphic$3.DEFAULTSIZE;
	self.height = height || Graphic$3.DEFAULTSIZE;
	self.style = ObjectUtils.default(style || {}, Graphic$3.DEFAULTSTYLE);

	self.draw = function (ctx, style, w, h) {
		ctx.rect(style.x, style.y, w, h);
	};
};

Graphic$3.Rect.prototype = Object.create(Graphic$3.Shape.prototype);

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
Graphic$3.Sprite = function (image, size, style, spriteSetting) {
	var self = this;

	self.hasPath = false;
	self.setting = spriteSetting;

	self.image = image;
	self.oriWidth = image.width;
	self.oriHeight = image.height;
	self.width = size || self.oriWidth;
	self.height = self.width * (self.setting.frameWidth / self.setting.frameHeight);
	self.style = ObjectUtils.default(style || {}, Graphic$3.DEFAULTSTYLE);
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

Graphic$3.Sprite.prototype = Object.create(Graphic$3.Shape.prototype);

var Graphic$4 = Graphic$3;

/**
	@class Particle
	@desc
		This Particle class is used along with {@link ParticleModel} and {@link Emitter} class. 
*/
var Particle$3 = function Particle(ctx, model, fps) {
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

Particle$3.prototype = {

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

/**
	@class ParticleModel
	@desc
		This ParticleModel class is used along with {@link Particle} and {@link Emitter} class.
*/
var particleId$1 = 0;
var ParticleModel$3 = function ParticleModel(graphic, properties) {
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
			id: particleId$1,
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

		particleId$1++;
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

var ParticlesUtils$3 = ParticlesUtils$3 || {};
//object

ParticlesUtils$3 = {

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

var ParticlesUtils$4 = ParticlesUtils$3;

/**
	@class Ratio
	@desc
		Utilities for different ratio layouts; used by {@link UIImage} and deprecated Flipbook.
*/
var Ratio$2 = function () {
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
// named exports

export { Align$1 as Align, Clamp$2 as Clamp, Countdown$2 as Countdown, Effects$2 as Effects, FullScreen$2 as FullScreen, Markup$1 as Markup, Emitter$2 as Emitter, Graphic$4 as Graphic, Particle$3 as Particle, ParticleModel$3 as ParticleModel, ParticlesUtils$4 as ParticlesUtils, Ratio$2 as Ratio, Styles$1 as Styles };
