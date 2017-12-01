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
export function get (selector, parent) {
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
			break
		default:
			// default to id for backworad support 
			return parent.getElementById(selector);
	}
}
// the deprecated syntax 12/28/16
export function getElement (selector, parent) {
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
export function removeChildren (_target) {
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
export function addiFrame (_containerData) {
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
export function addSvg (_containerData) {
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
export function applyToElements (arg) {
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
export default Markup