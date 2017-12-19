/**
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
		Is the returned instance of CanvasDrawer.
		<br><br>	
		<b>NOTE::</b>
		<ul>
			<li>The update() method is key to displaying any element added creating a new CanvasElement. If you add something and don't see it, you might not have used update()</li>
			<li>You *SHOULD NOT* run the update() method after every individual element is added, but rather *once* after the creation of all your elements</li>
		</ul>

	@example
		adData.elements.myCanvasDrawer = new CanvasDrawer({
			id: 'myCanvasDrawer', 
			target: adData.elements.redAdContainer,
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
import { Styles } from 'ad-view'
import { UICanvas } from 'ad-ui'
import { MathUtils } from 'ad-utils'
import { FrameRate } from 'ad-events'

function CanvasDrawer(arg) {

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

	var CD = this;
	CD._init(arg);
	return CD;
}

CanvasDrawer.prototype = {
	_init: function(arg) {
		var CD = this;
		var _css = {
			width: (arg.css && arg.css.width) ? arg.css.width : (arg.target && arg.target !== 'body' ? Styles.getCss(arg.target, 'width') : adParams.adWidth),
			height: (arg.css && arg.css.height) ? arg.css.height : (arg.target && arg.target !== 'body' ? Styles.getCss(arg.target, 'height') : adParams.adHeight),
			background: arg.debug === true ? 'green' : '',
			pointerEvents: 'none'
		};

		if (arg.css)
			for (var item in arg.css) _css[item] = arg.css[item];
		//
		//
		//
		if (arg.subPixeling === true) arg.retina = true;

		CD.qualityScale = arg.retina ? 2 : 1;
		CD._imageScale = arg.subPixeling ? 1 : CD.qualityScale;

		_css.width *= CD.qualityScale;
		_css.height *= CD.qualityScale;
		CD.canvas = new UICanvas({
			id: 'cd_' + arg.id,
			target: arg.target,
			css: _css,
		});

		if (CD.qualityScale !== 1) {
			TweenLite.set(CD.canvas, {
				x: CD.canvas.x,
				y: CD.canvas.y,
				scale: 1 / CD.qualityScale,
				transformOrigin: '0% 0%'
			});
		}

		if (arg.align) Align.set(CD, arg.align);

		CD.ctx = CD.canvas.context2d;

		CD.canvas.qualityScale = CD.qualityScale;

		CD.elements = {};
		CD._allTweens = {};
		CD._allTweensSize = 0;
		CD.elementsLength = 0;
		CD._dummyTween;

		CD.clearCanvas = arg.clearCanvas != false;
	},

	/**
		@memberof CanvasDrawer
		@var {number} width
		@desc
			Number to set or retrieve the width of the canvas
	*/
	get width() {
		return this.canvas.width / this.qualityScale;
	},
	set width(value) {
		this.canvas.width = value * this.qualityScale;
	},

	/**
		@memberof CanvasDrawer
		@var {number} height
		@desc
			Number to set or retrieve the width of the canvas
	*/
	get height() {
		return this.canvas.height / this.qualityScale;
	},
	set height(value) {
		this.canvas.height = value * this.qualityScale;
	},

	/**
		@memberof CanvasDrawer
		@method removeElement
		@param {element|string} target
			the STRING ID used to reference an element or a reference to the ELEMENT itself
		@desc
			Removes a specific CanvasElement from CanvasDrawer.elements by either its ID or a direct reference to the CanvasElement.
		@example
			adData.elements.myCanvasDrawer.removeElement('smoke');
			adData.elements.myCanvasDrawer.removeElement( adData.elements.myCanvasDrawer.elements.smoke );
	*/
	removeElement: function(target) {
		var CD = this;
		CD.elementsLength--;
		if (target.id) delete CD.elements[target.id];
		else delete CD.elements[target];
	},

	/**
		@memberof CanvasDrawer
		@method removeAllItems
		@desc
			Removes everything from CanvasDrawer.elements.
		@example
			adData.elements.myCanvasDrawer.removeAllItems();
	*/
	removeAllItems: function() {
		var CD = this;
		for (var dI in CD.elements) {
			CD.elementsLength--;
			delete CD.elements[dI];
		}
		CD.elementsLength = 0;
	},

	/**
		@memberof CanvasDrawer
		@method clear
		@desc
			Wipes the canvas clean of any image data
	*/
	clear: function() {
		var CD = this;
		CD.ctx.clearRect(0, 0, CD.canvas.width, CD.canvas.height);
	},

	/**
		@memberof CanvasDrawer
		@method update
		@desc
			Clear and draw all draw items associated with this CanvasDrawer.
			<br><br>

			will not draw the item if <code>elements.visible !== true</code> or <code>elements.alpha === 0</code>
	*/
	update: function() {
		var CD = this;
		var _dItem;
		// is the _dItem rotated or scaled in any way
		var _trans;
		// does the _dItem have a CanvasBlendMode other than NONE or an alpha other than 1
		var _blend;
		// does the _dItem._type === 'arc'
		var _arc;

		CD.clear();
		for (var dI in CD.elements) {
			_dItem = CD.elements[dI];

			if (_dItem.visible && _dItem.alpha > 0) {
				_dItem.rotation = _dItem.rotation % 360;

				_trans = (_dItem.rotation != 0 || _dItem.scaleX != 1 || _dItem.scaleY != 1 || _dItem.scale != 1);
				_blend = _dItem.alpha < 1 || _dItem.blendMode != 'source-over';
				_arc = _dItem._type === 'arc';

				// if (_trans || _blend) 
				CD.ctx.save();

				if (_blend) {
					CD.ctx.globalAlpha = _dItem.alpha;
					CD.ctx.globalCompositeOperation = _dItem.blendMode;
				}

				if (_trans) {
					CD.ctx.translate.apply(CD.ctx, [(_dItem.x + _dItem._offsetX) * CD.qualityScale, (_dItem.y + _dItem._offsetY) * CD.qualityScale]);

					if (_dItem.rotation != 0) CD.ctx.rotate(MathUtils.toRadians(_dItem.rotation));
					if (_dItem.scaleX != 1 || _dItem.scaleY != 1 || _dItem.scale != 1) {
						if (_dItem.scaleX === 0) _dItem.scaleX = 0.000001;
						if (_dItem.scaleY === 0) _dItem.scaleY = 0.000001;
						if (_dItem.scale === 0) _dItem.scale = 0.000001;
						CD.ctx.scale(_dItem.scaleX * _dItem.scale, _dItem.scaleY * _dItem.scale);
					}
				}

				CD._drawShape(_dItem, _arc, _trans);
				// if (_trans || _blend) 
				CD.ctx.restore();
			}
		}

		_dItem = null;
	},


	/**
		@memberof CanvasDrawer
		@method start
		@desc
			Adds a {@link FrameRate} event listener to update the CanvasDrawer constantly
	*/
	start: function() {
		var CD = this;
		FrameRate.register(CD, CD.update);
	},


	/**
		@memberof CanvasDrawer
		@method stop
		@desc
			Removes the {@link FrameRate} event listener
	*/
	stop: function() {
		var CD = this;
		FrameRate.unregister(CD, CD.update);
	},

	/* ------------------------------------------------

	PRIVATE FUNCTIONS!

	NOTHING BELOW HERE SHOULD GET CALLED EXTERNAL TO THIS CLASS
	/* ------------------------------------------------
		draw the elements into the canvas based on given elements object, whether or not it is an arc, and any translations
		
		CALLED ONLY FROM CanvasDrawer.update();
		*/
	_drawShape: function(dItem, isArc, translation) {
		var CD = this;
		if (dItem.shadowColor && (dItem.shadowBlur > 0 || dItem.shadowDistance != 0)) {
			CD.ctx.shadowColor = dItem.shadowColor;
			CD.ctx.shadowOffsetX = dItem._shadowOffsetX * CD.qualityScale;
			CD.ctx.shadowOffsetY = dItem._shadowOffsetY * CD.qualityScale;
			CD.ctx.shadowBlur = dItem.shadowBlur * CD.qualityScale;
		}

		// CASE FOR DRAWING AN IMAGE
		dItem.draw(translation, isArc);
	},

	/* ------------------------------------------------
		Determines if a given draw source is a canvas element or an image

		CALLED ONLY FROM CanvasImage.addImage() and CanvasDrawer.makePattern();
		*/
	_getIsSourceCanvas: function(img) {
		return img.tagName === 'CANVAS' || (typeof img === 'object' && img.tagName === undefined);
	}
}
export default CanvasDrawer