/**
	@npmpackage
	@class CanvasDrawer
	@param {object} arg
		Settings are passed in via this object, see Properties for more info:

		@property {string} id
			a STRING id suffix the canvas DOM element will go by; is appeneded to 'cd_'
		@property {element} target
			the target DOM element in which to place the canvas element; if undefined, element will not be added to DOM
		@property {object} 	css
			an optional CSS object defining the style of the canvas. If undefined, will size canvas to the width and height of the target DOM element.
		@property {boolean} clearCanvas
			an optional BOOLEAN which determines if, on update, the CanvasDrawer clears the contents of its canvas before redrawing every CanvasElement; defaults to true.
		@property {boolean} retina
			an optional BOOLEAN which determine whether or not to create the canvas and its elements at retina (double) resolution; defaults to false.
		@property {boolean} subPixeling
			an optional BOOLEAN which will override retina to true but preserve certain width/height values to produce smoother sub-pixeling in animations; defaults to false.
		@property {boolean} debug
			an optional BOOLEAN value of true will make the canvas background green; defaults to false.

	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>	
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasDrawer } from 'ad-canvas'
		</codeblock>
		<br><br>
		Is the returned instance of CanvasDrawer.
		<br><br>	
		<b>NOTE::</b>
		<ul>
			<li>The update() method is key to displaying any element added creating a new CanvasElement. If you add something and don't see it, you might not have used update()</li>
			<li>You <b>SHOULD NOT</b> run the update() method after every individual element is added, but rather <b>once</b> after the creation of all your elements</li>
		</ul>

	@example
		View.main.myCanvasDrawer = new CanvasDrawer({
			id: 'myCanvasDrawer', 
			target: View.main,
			css: {
				x: 0,
				y: 0,
				width: 300,
				height:	250
			},
			retina: true,
			debug: false
		});
*/

/* TODO
	check to see if canvas ID already exists

	BUG: context doesn't save / clear based on stroke dash

*/

import { Styles, Align } from 'ad-view'
import { UICanvas } from 'ad-ui'
import { MathUtils, ObjectUtils } from 'ad-utils'

class CanvasDrawer {
	/**
		@memberof CanvasDrawer
		@var {UICanvas} canvas
		@desc
			the actual canvas DOM element in which the CanvasDrawer's instance draws
	*/

	/**
		@memberof CanvasDrawer
		@var ctx
		@desc
			The context2d of the canvas DOM element
	*/

	/**
		@memberof CanvasDrawer
		@var {boolean} clearCanvas
		@desc
			BOOLEAN for if the canvas drawer should clear itself on every update before re-drawing its CanvasElements
	*/

	/**
		@memberof CanvasDrawer
		@var {number} qualityScale
		@desc
			NUMBER representing the scale of the canvas DOM element: if retina or subPixeling were set to true, is equal to 2. Defaults to 1.
	*/

	/**
		@memberof CanvasDrawer
		@var {object} elements
		@desc
			Object containing all of the drawing elements created through new CanvasElements.
	*/

	/**
		@memberof CanvasDrawer
		@var {number} elementsLength
		@desc
			Number of total elements
	*/

	constructor(arg) {
		let CD = this
		CD._init(arg)
		return CD
	}

	_init(arg) {
		let CD = this
		var _css = {
			width:
				arg.css && arg.css.width
					? arg.css.width
					: arg.target && arg.target !== 'body'
						? Styles.getCss(arg.target, 'width')
						: adParams.adWidth,
			height:
				arg.css && arg.css.height
					? arg.css.height
					: arg.target && arg.target !== 'body'
						? Styles.getCss(arg.target, 'height')
						: adParams.adHeight,
			background: arg.debug === true ? 'green' : '',
			pointerEvents: 'none'
		}

		if (arg.css) for (var item in arg.css) _css[item] = arg.css[item]
		//
		//
		//
		if (arg.subPixeling === true) arg.retina = true

		CD.qualityScale = arg.retina ? 2 : 1
		CD._imageScale = arg.subPixeling ? 1 : CD.qualityScale

		_css.width *= CD.qualityScale
		_css.height *= CD.qualityScale
		CD.canvas = new UICanvas({
			id: 'cd_' + arg.id,
			target: arg.target,
			css: ObjectUtils.clone(_css)
		})

		if (CD.qualityScale !== 1)
			Styles.setCss(CD.canvas, { width: CD.canvas.width / CD.qualityScale, height: CD.canvas.height / CD.qualityScale })

		if (arg.align) Align.set(CD, arg.align)

		CD.ctx = CD.canvas.context2d

		CD.elements = {}
		CD._allTweens = {}
		CD._allTweensSize = 0
		CD.elementsLength = 0
		CD._dummyTween
		
		CD.clearCanvas = arg.clearCanvas != false
	}

	/**
		@memberof CanvasDrawer
		@var {number} width
		@desc
			Number to set or retrieve the width of the canvas
	*/
	get width() {
		return this.canvas.width / this.qualityScale
	}
	set width(value) {
		this.canvas.width = value * this.qualityScale
	}

	/**
		@memberof CanvasDrawer
		@var {number} height
		@desc
			Number to set or retrieve the width of the canvas
	*/
	get height() {
		return this.canvas.height / this.qualityScale
	}
	set height(value) {
		this.canvas.height = value * this.qualityScale
	}

	bringItemToFront(target) {
		this.removeElement(target)
		this.elements[target.id] = target
	}

	/**
		@memberof CanvasDrawer
		@method removeElement
		@param {element|string} target
			the STRING ID used to reference an element or a reference to the ELEMENT itself
		@desc
			Removes a specific CanvasElement from CanvasDrawer.elements by either its ID or a direct reference to the CanvasElement.
		@example
			View.main.myCanvasDrawer.removeElement('smoke');
			View.main.myCanvasDrawer.removeElement( View.main.myCanvasDrawer.elements.smoke );
	*/
	removeElement(target) {
		let CD = this
		CD.elementsLength--
		if (target.id) delete CD.elements[target.id]
		else delete CD.elements[target]
	}

	/**
		@memberof CanvasDrawer
		@method removeAllElements
		@desc
			Removes everything from CanvasDrawer.elements.
		@example
			View.main.myCanvasDrawer.removeAllElements();
	*/
	removeAllElements() {
		let CD = this
		for (var dI in CD.elements) {
			CD.elementsLength--
			delete CD.elements[dI]
		}
		CD.elementsLength = 0
	}

	/**
		@memberof CanvasDrawer
		@method clear
		@desc
			Wipes the canvas clean of any image data
	*/
	clear() {
		let CD = this
		CD.ctx.clearRect(0, 0, CD.canvas.width, CD.canvas.height)
	}

	/**
		@memberof CanvasDrawer
		@method update
		@desc
			Clear and draw all draw items in the elements dictionary associated with this CanvasDrawer.
			<br><br>Renders CanvasElements in order of creation.
			<br><br>

			will not draw the item if <code>elements.visible !== true</code> or <code>elements.alpha === 0</code>
		@property {array} array
			an OPTIONAL array of CanvasElements associated with this CanvasDrawer; rather than rendering <b>all</b> of the CanvasElements <b>in order of creation</b> this will <b>only</b> the CanvasElements within the given array, and <b>in that order</b> - order of creation does not apply in this instance.
	*/
	update(array) {
		let CD = this
		if (CD.clearCanvas) CD.clear()
		if (array) for (var dI = 0; dI < array.length; dI++) CD._updateEngine(array[dI])
		else for (var dI in CD.elements) CD._updateEngine(CD.elements[dI])
	}

	/* ------------------------------------------------

	PRIVATE FUNCTIONS!

	NOTHING BELOW HERE SHOULD GET CALLED EXTERNAL TO THIS CLASS
	/* ------------------------------------------------
		draw the elements into the canvas based on given elements object, whether or not it is an arc, and any translations
		
		CALLED ONLY FROM CanvasDrawer.update();
		*/

	_updateEngine(element) {
		let CD = this
		if (element.visible && element.alpha > 0) {
			// element.rotation = element.rotation % 360;

			var _trans = element.rotation != 0 || element.scaleX != 1 || element.scaleY != 1 || element.scale != 1
			var _blend = element.alpha < 1 || element.blendMode != 'source-over'
			var _arc = element._type === 'arc'

			// if (_trans || _blend)
			CD.ctx.save()

			if (_blend) {
				CD.ctx.globalAlpha = element.alpha
				CD.ctx.globalCompositeOperation = element.blendMode
			}

			if (_trans) {
				CD.ctx.translate.apply(CD.ctx, [(element.x + element._offsetX) * CD.qualityScale, (element.y + element._offsetY) * CD.qualityScale])

				if (element.rotation != 0) CD.ctx.rotate(MathUtils.toRadians(element.rotation))
				if (element.scaleX != 1 || element.scaleY != 1 || element.scale != 1) {
					if (element.scaleX === 0) element.scaleX = 0.000001
					if (element.scaleY === 0) element.scaleY = 0.000001
					if (element.scale === 0) element.scale = 0.000001
					CD.ctx.scale(element.scaleX * element.scale, element.scaleY * element.scale)
				}
			}

			CD._drawShape(element, _arc, _trans)
			// if (_trans || _blend)
			CD.ctx.restore()
		}
	}

	/* ------------------------------------------------
	draw the elements into the canvas based on given elements object, whether or not it is an arc, and any translations
		
	CALLED ONLY FROM CanvasDrawer.update();
	*/
	_drawShape(dItem, isArc, translation) {
		let CD = this
		if (dItem.shadowColor && (dItem.shadowBlur > 0 || dItem.shadowDistance != 0)) {
			CD.ctx.shadowColor = dItem.shadowColor
			CD.ctx.shadowOffsetX = dItem._shadowOffsetX * CD.qualityScale
			CD.ctx.shadowOffsetY = dItem._shadowOffsetY * CD.qualityScale
			CD.ctx.shadowBlur = dItem.shadowBlur * CD.qualityScale
		}

		// CASE FOR DRAWING AN IMAGE
		dItem.draw(translation, isArc)
	}

	/* ------------------------------------------------
		Determines if a given draw source is a canvas element or an image

		CALLED ONLY FROM CanvasImage.addImage() and CanvasDrawer.makePattern();
		*/
	_getIsSourceCanvas(img) {
		return img.tagName === 'CANVAS' || (typeof img === 'object' && img.tagName === undefined)
	}
}

export default CanvasDrawer
