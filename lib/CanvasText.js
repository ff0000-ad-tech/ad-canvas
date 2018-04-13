/**
	@npmpackage
	@class CanvasText
	@param {object} textObj
		an object containing the arguments for defining / orienting the text, see Properties for more info:

		@property {CanvasDrawer} target
			the CanvasDrawer element in which to draw the text

		@property {string} id
			an optional STRING defining the name by which the text will be referenced. Defaults to 'canvasdItemX' where X = the number of 
			elements in a {@link CanvasDrawer}

		@property {string} text
			the string of text for the canvas textfield. Supports line breaks  <span><</span>br>

		@property {object} css
			standard css object, see properties:

			@property {number} css.x
				NUMBER X coordinate for where to draw the image data

			@property {number} css.y
				NUMBER Y coordinate for where to draw the image data

			@property {number|string} css.fontSize
				NUMBER or STRING (12, '12', '12px', or '12pt') representing the font size
			
			@property {string} css.fontFamily
				STRING defining the font name
			
			@property {string|Align} css.alignText
				STRING or Align constant defining text's horizontal alingment: 'center', 'left', or 'right'. Can also use Align.CENTER, Align.LEFT, or Align.RIGHT.
			
			@property {number} css.scale
				NUMBER for uniform scale of the text, scaling from drawing center unless transformOrigin is changed. Will compound with but not change values of scaleX or scaleY
			
			@property {number} css.scaleX
				NUMBER for X scale of the text, scaling from drawing center unless transformOrigin is changed
			
			@property {number} css.scaleY
				NUMBER for Y scale of the text, scaling from drawing center unless transformOrigin is changed
			
			@property {number} css.rotation
				NUMBER IN DEGREES for the start rotation of the text

			@property {string} css.transformOrigin
				an optional STRING defining an element's origin for scale and rotation, written as two values in a string with either a '%' or 'px' marker. Defaults to '0% 0%'

			@property {number} css.alpha
				NUMBER for alpha of the drawing

			@property {object} css.dropShadow
				an optional OBJECT defining properties of the text's drop shadow, see following properties:

				@property {number} css.dropShadow.angle
					NUMBER IN DEGREES for the angle to position the shadow

				@property {number} css.dropShadow.distance
					NUMBER for how far away from the text the shadow is

				@property {number} css.dropShadow.blur
					NUMBER for how blurry the shadow is

				@property {string|object} css.dropShadow.color
					optional color of shadow as either a HEX STRING :"#ff0000", 
					RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
					or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to '#000000'

				@property {number} css.dropShadow.alpha
					NUMBER for the alpha of the shadow. Defaults to 1, overrides the alpha of an RGBA color
			
			@property {number} offsetX
				NUMBER representing the X offset of the text

			@property {number} offsetY
				NUMBER representing the Y offset of the text

			@property {number} maxWidth
				NUMBER which determines the maximum width of the text field, which is used to create MUTLI-LINE text

			@property {number} lineHeight
				NUMBER which determines the line height between lines of text with defined maxWidth values

		@property {string|CanvasBlendMode} blendMode
			an optional STRING for the globalCompositeOperation - controls overlays, screens, multiply, masking, etc. Defaults to 'source-over'

		@property {string|CanvasTexture} fill
			an optional STRING or gradiant variable defining the color fill of the text. Defaults to none / invisible.
	
		@property {object} stroke
			an optional OBJECT defining properties of the shape's stroke

			@property {string|CanvasTexture} stroke.fill
				an optional STRING or gradiant variable defining the color fill of the shape stroke. Defaults to  none / invisible

			@property {number} stroke.width
				an optional NUMBER value determining stroke width. Defaults to 0

			@property {string} stroke.position
				an optional STRING determining if the stroke will be 'outer' or 'center'. Defaults to 'outer', there is no 'inner'

			@property {string} stroke.cap
				an optional STRING value determining a line's cap style: 'butt', 'round', and 'square'. Defaults to 'butt'
				<br>
				<img src="../docs_images/canvasdrawer/lineCap.jpg" />
				<br>

			@property {string} stroke.join
				an optional STRING value determining how two lines/corners connect: 'round', 'bevel', and 'miter'. Defaults to 'round'
				<br>
				<img src="../docs_images/canvasdrawer/lineJoin.jpg" />
				<br>

		@property {number} dashSize
			an optional NUMBER value determining the length of each segment in a dashed line

		@property {number} dashGap
			an optional NUMBER value determining the gap between each segment in a dashed line. Defaults to 0, unless dashSize is defined, then defaults to dashSize

		@property {boolean} visible
			an optional BOOLEAN that, when set to false, will not render the element. Defaults to true

	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasText } from 'ad-canvas'
		</codeblock>
		<br><br>
		Add a text field to the drawer based on a given object, and return a reference to that text
		<br><br>

		<b>NOTE</b><br>
		<code>transformOrigin</code> is based on the text alignment. '0% 0%' for text aligned right will be at that text's TOP-RIGHT, '100% 0%' would be its TOP-LEFT. 
		Centered and left-aligned text's '0% 0%' is its TOP-LEFT.
		<br><br>

		<b>EXAMPLE</b><br>
		Adding a red text field with a yellow 4px outer stroke and an overlay blend mode.
		<codeblock>
			var _myText = new CanvasText({
				target: View.main.myCanvasDrawer,
				id: 'textItem',
				text: 'Watch the Trailer',
				css: {
					x: 0,
					y: 0,
					fontSize: 40,
					fontFamily: 'FuturaBold',
					alignText: Align.LEFT,
					offsetX: -5,
					offsetY: 5,
					maxWidth: 50,
					lineHeight: 100
				},
				fill: 'red',
				stroke: {
					fill: 'yellow',
					position: 'outer',
					width: 4
				},
				blendMode: CanvasBlendMode.OVERLAY
			});
		</codeblock>
		<br><br>
*/

/**
	@memberof CanvasText
	@const {string} id
		READ-ONLY: STRING representing the id of the element
*/

/**
	@memberof CanvasText
	@var {number} x		
		NUMBER representing the horizontal position of the element
*/

/**
	@memberof CanvasText
	@var {number} left
		NUMBER representing a reference to the x property,
*/

/**
	@memberof CanvasText
	@var {number} y 		
		NUMBER representing the vertical position of the element,
*/

/**
	@memberof CanvasText
	@var {number} top
		NUMBER representing a reference to the y property,
*/

/**
	@memberof CanvasText
	@const {number} width
		READ-ONLY: NUMBER representing the approximate width of the text,
*/

/**
	@memberof CanvasText
	@const {number} height
		READ-ONLY: NUMBER representing the approximate height of the text,
*/

/**
	@memberof CanvasText
	@var {number} rotation
*/

/**
	@memberof CanvasText
	@var {number} alpha
		NUMBER representing the opacity of the element,
*/

/**
	@memberof CanvasText
	@var {number} opacity
		NUMBER representing a reference to the alpha property,
*/

/**
	@memberof CanvasText
	@var {number} scale
		NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY,
*/

/**
	@memberof CanvasText
	@var {number} scaleX
		NUMBER representing the horizontal scale of the element,
*/

/**
	@memberof CanvasText
	@var {number} scaleY
		NUMBER representing the vertical scale of the element,
*/

/**
	@memberof CanvasText
	@var {number} blendMode
		NUMBER representing the blend or masking style applied to the element,
*/

/**
	@memberof CanvasText
	@var {boolean} visible
		BOOLEAN representing whether or not the element should be drawn,
*/

/**
	@memberof CanvasText
	@var {string} transformOrigin
		STRING representing the origin from which to perform scales and rotations. Written as two values in a string with either a '%' or 'px' marker (ie '50% 50%' or '5px 100px').
		<b>NOTE::</b><br>
		<ul>
			<li><code>50% 50%</code> is centered, based on percentage.</li>
			<li><code>50px 50px</code> is 50 px away from <code>0% 0%</code> vertically and horizontally.</li>
			<li><code>50 50</code> is the same as <code>50px 50px</code>.</li>
			<li>Values can be mixed: <code>50% 10px</code>, for instance.</li>
		</ul>
		<br>
		<b>EXAMPLES::</b><br>
		<codeblock>
			View.main.myCanvasDrawer.elements.smoke.transformOrigin = '50% 50%';
			View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10px 100px';
			View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10 100';
		</codeblock>
		<br>
*/

/**
	@memberof CanvasText
	@var {string} fontFamily
		STRING representing the font name,
*/

/**
	@memberof CanvasText
	@var {number} fontSize
		NUMBER or STRING (12, '12', '12px', or '12pt') representing the font size,
*/

/**
	@memberof CanvasText
	@var {number} lineHeight	
		NUMBER which determines the line height between lines of text with defined maxWidth values,
*/

/**
	@memberof CanvasText
	@var {number} maxWidth
		NUMBER which determines the maximum width of the text field, which is used to create MUTLI-LINE text,
*/

/**
	@memberof CanvasText
	@var {string} alignText
		STRING or Align constant defining text's horizontal alingment: 'center', 'left', or 'right'. Can also use Align.CENTER, Align.LEFT, or Align.RIGHT,
*/

/**
	@memberof CanvasText
	@var {string} fill
		STRING, gradient, or texture representing the color used to fill the text,
*/

/**
	@memberof CanvasText
	@var {string} strokeFill
		STRING, gradient, or texture representing the color used to fill the text's stroke,
*/

/**
	@memberof CanvasText
	@var {number} strokeWidth
		NUMBER representing the width of the text's outline,
*/

/**
	@memberof CanvasText
	@var {string} strokeJoin
		STRING representing how two lines/corners form: 'round', 'bevel', and 'miter',
*/

/**
	@memberof CanvasText
	@var {string} strokePosition
		STRING repsenting the position of the text's stroke, 'outer' or 'center'; there is no 'inner',
*/

/**
	@memberof CanvasText
	@var {number} strokeDashSize
		NUMBER representing the length of each segment in a dashed line,
*/

/**
	@memberof CanvasText
	@var {number} strokeDashGap
		NUMBER representing the gap between each segment in a dashed line,
*/

/**
	@memberof CanvasText
	@var {number} strokeDashOffset
		NUMBER representing the offset positioning of the dash segments,
*/

/**
	@memberof CanvasText
	@var {string} shadowColor
		STRING representing the color of the drop shadow in RGBA format,
*/

/**
	@memberof CanvasText
	@var {number} shadowBlur
		NUMBER representing the amount of blur on the drop shadow,
*/

/**
	@memberof CanvasText
	@var {number} shadowAngle
		NUMBER representing the angle, in degrees, of the drop shadow,
*/

/**
	@memberof CanvasText
	@var {number} shadowDistance
		NUMBER representing the distance of the drop shadow from the element,
*/
import CanvasElement from './CanvasElement'
import { Align } from 'ad-view'

class CanvasText extends CanvasElement {
	constructor(textObj) {
		var _params = (textObj.params = textObj.css || {})
		super(textObj, 'text')

		let CT = this
		CT.text = textObj.text
		CT.maxWidth = _params.maxWidth || null

		CT.fontFamily = _params.fontFamily || '_serif'
		CT.fontSize =
			_params.fontSize >= 0
				? Number(
						_params.fontSize
							.toString()
							.replace(/px/g, '')
							.replace(/pt/g, '')
				  )
				: 12

		CT._marginLeft = _params.offsetX || 0
		CT._marginTop = _params.offsetY || 0

		CT._x = 0
		CT._y = 0
		CT._width = 0
		CT._height = 0

		CT._alignText = 'left'

		//
		Object.defineProperties(CT, {
			x: {
				get: function() {
					return CT._x - CT._marginLeft
				},
				set: function(value) {
					CT._x = value + CT._marginLeft
				}
			},
			y: {
				get: function() {
					return CT._y - CT._marginTop
				},
				set: function(value) {
					CT._y = value + CT._marginTop
				}
			},
			width: {
				get: function() {
					return CT._width + CT._marginLeft
				}
			},
			height: {
				get: function() {
					return CT._height + CT._marginTop
				}
			},
			alignText: {
				get: function() {
					return CT._alignText
				},
				set: function(value) {
					value = value.replace('align', '').toLowerCase()
					CT._alignText = value
				}
			}
		})

		CT.x = _params.x || _params.left || 0
		CT.y = _params.y || _params.top || 0

		CT.alignText = _params.alignText || 'left'
		if (CT.alignText === 'centered') CT.alignText = 'center'

		CT.fill = textObj.fill

		CT.strokeFill = textObj.stroke.fill || null
		CT.strokeWidth = textObj.stroke.width || 0
		CT.strokeCap = textObj.stroke.cap || 'butt'
		CT.strokeJoin = textObj.stroke.join || 'round'
		CT.strokeDashSize = textObj.stroke.dashSize || 10000
		CT.strokeDashGap = textObj.stroke.dashGap || 0
		CT.strokeDashOffset = textObj.stroke.dashOffset || 0
		CT.strokePosition = textObj.stroke.position || 'outer'

		if (CT.strokeDashGap === 0 && CT.strokeDashSize != 10000) CT.strokeDashGap = CT.strokeDashSize

		CT._transOffsetX = 0
		CT._transOffsetY = 0

		//CT.letterSpacing = _params.letterSpacing || CT.fontSize / 2;
		CT.lineHeight = _params.lineHeight || CT.fontSize * 0.75
		CT.maxWidth = _params.maxWidth || 100000

		// THESE ARE PROPERTIES THAT WOULD NECESITATE RECALCULATING THE TEXT'S WIDTH, HEIGHT, POSITIONING, OR OTHER VALUES TO DRAW
		CT.deltaProps = {
			text: 'empty',
			fontFamily: 'empty',
			fontSize: 'empty',
			lineHeight: 'empty',
			maxWidth: 'empty',
			// marginLeft: 'empty',
			// marginTop: 'empty',
			strokeWidth: 'empty',
			alignText: 'empty',
			_transOffsetX: 'empty',
			_transOffsetY: 'empty'
			// x: 'empty',
			// y: 'empty',
			// scaleX: 'empty',
			// scaleY: 'empty',
			// rotation: 'empty'
		}

		CT.drawProps = {
			// THESE VALUES ARE ONES THAT WOULD GET RECALCULATED CONSTANTLY, SO WE'RE STORING THEM
			drawX: 'empty',
			drawY: 'empty',
			offsetX: 'empty',
			offsetY: 'empty',
			strokeOffset: 'empty',

			// the final string to be output
			text: 'empty'
		}

		CT.stage.ctx.font = CT.fontSize + 'px ' + CT.fontFamily

		// CT._wrapText(false, false);
		var _originDefault
		switch (CT.alignText) {
			case 'left':
				_originDefault = '0% 0%'
				break
			case 'right':
				_originDefault = '0% 0%'
				break
			case 'center':
				_originDefault = '50% 0%'
				break
		}

		CT.transformOrigin = _params.transformOrigin || textObj.transformOrigin || _originDefault
		CT.stage.ctx.font = null

		if (textObj.align) Align.set(CT, textObj.align)
	}

	draw(translation) {
		let CT = this
		CT._wrapText(translation)
	}

	/* ------------------------------------------------
	wrap the text to multiline based on its max width
	CALLED ONLY FROM CanvasText._init() and CanvasDrawer._drawShape()
	*/
	_wrapText(translation, draw) {
		let CT = this
		var _recalc = draw === false ? true : false
		var _prop

		var _basedOn

		// IF ONE OF THE deltaProps IS NOT EQUAL TO A VALUE OF THE TEXT FIELD, RECALCULATE ITS DIMENSIONS AND OFFSETS
		if (!_recalc) {
			for (var item in CT.deltaProps) {
				if (CT.deltaProps[item] != CT[item]) {
					_prop = item
					_recalc = true
					break
				}
			}
		}

		if (_recalc) {
			// MODIFY LINE BREAKS
			CT.text = CT.text.replace(/<br>/gi, ' <br>')

			// UPDATE THE STAGE CONTEXT FOR THE FONT DATA
			CT.stage.ctx.font = CT.fontSize + 'px ' + CT.fontFamily

			// THIS DOES A SERIES OF CHECKS TO FIND OFFSETS BASED ON strokeWidth, marginTop, and marginLeft
			CT.deltaProps.strokeOffset =
				(CT.strokePosition === 'outer' || CT.strokePosition === 'center' ? CT.strokeWidth / 4 : 0) * CT.stage.qualityScale

			CT.drawProps.offsetX = /*CT._marginLeft +*/ (CT.alignText === 'right' ? -1 : 1) * CT.deltaProps.strokeOffset
			CT.drawProps.offsetY = /*CT._marginTop +*/ CT.deltaProps.strokeOffset
			//CT.drawProps.drawX = CT.x;
			//CT.drawProps.drawY = CT.y;

			// THIS RESTRICTS THE TEXT TO ITS maxWidth AND ALSO FINDS THE width AND height OF THE TEXT

			var _words = CT.text.split(' ')
			var _returnLine = ''
			var _tempLine
			var _lineWidth
			var _finalTextWidth = 0
			var _finalText = []
			//
			var _forcedBreak
			var _naturalBreak
			var _tempWord

			// GET THE WIDTH OF THE TEXT FIELD
			for (var n = 0; n < _words.length; n++) {
				_tempWord = _words[n]
				_forcedBreak = _tempWord.toLowerCase().indexOf('<br>') >= 0
				_naturalBreak = false
				_tempLine = _returnLine + (n > 0 ? ' ' : '') + _tempWord
				// _tempLine = _returnLine + ' ' + _tempWord;
				_lineWidth = CT.stage.ctx.measureText(_tempLine).width
				_naturalBreak = _lineWidth > CT.maxWidth

				if ((_forcedBreak || _naturalBreak) && n > 0) {
					_lineWidth = CT.stage.ctx.measureText(_returnLine).width

					// while (_returnLine.substring(_returnLine.length - 1, _returnLine.length) === ' ') _returnLine = _returnLine.substring(0, _returnLine.length - 1);
					// while (_returnLine.substring(0, 1) === ' ') _returnLine = _returnLine.substring(1, _returnLine.length);

					_finalText.push({
						text: _returnLine,
						y: CT.drawProps.offsetY
					})
					_returnLine = _tempWord
					CT.drawProps.offsetY += CT.lineHeight
				} else {
					_returnLine = _tempLine // + (((n + 1) === _words.length || _words[n + 1] === '<br>') ? '' : ' ');
				}
				_lineWidth = CT.stage.ctx.measureText(_returnLine).width
				if (_finalTextWidth < _lineWidth) _finalTextWidth = _lineWidth
			}
			// THIS IS THE FINAL LINE OF TEXT
			_finalText.push({
				text: _returnLine,
				y: CT.drawProps.offsetY
			})

			// REMOVE ONLY THE LAST AND FIRST SPACE ON ANY LINE
			for (n = 0; n < _finalText.length; n++) {
				//gif (translation) CT.drawProps.text[n].y -= _drawOffsetY;
				_finalText[n].text = _finalText[n].text.replace(/<br>/g, '')
			}

			// FINAL ARRAY OF EACH LINE OF TEXT
			CT.drawProps.text = _finalText.slice()

			// NEWLY DEFINED width AND height VALUES
			CT._width = _finalTextWidth + CT.deltaProps.strokeOffset // + CT._marginLeft;
			CT._height = (CT.drawProps.text.length - 1) * CT.lineHeight + CT.fontSize // + CT._marginTop;// < 0 ? CT._marginTop : 0); // - (CT.deltaProps.strokeOffset * 4); //CT.drawProps.offsetY + (CT.deltaProps.strokeOffset * 2);

			// OFFSETS ADJUSTED BASED ON DIMENSIONS
			CT._offsetX = CT._width * CT._transOffsetX
			CT._offsetY = CT._height * CT._transOffsetY

			// SET THE deltaProps TO THE MOST UPDATED VALUES
			for (item in CT.deltaProps) CT.deltaProps[item] = CT[item]
		}

		if (draw !== false) {
			var _drawOffsetX = -CT.drawProps.offsetX // - CT._marginLeft;
			var _drawOffsetY = 0 //CT.drawProps.offsetY;
			var _drawX = CT._x - CT.strokeWidth / 2
			var _drawY = CT._y - CT.strokeWidth / 2

			if (translation) {
				//_drawOffsetX -= CT._offsetX;
				//_drawOffsetY -= CT._offsetY;

				_drawOffsetX = CT._offsetX - CT._marginLeft // + (CT.strokeWidth / 2);
				_drawOffsetY = CT._offsetY - CT._marginTop
				_drawX = 0
				_drawY = -(CT.strokeWidth / 2)
			}

			// ACTUALLY DRAW THE VARIOUS LINES OF TEXT
			var obj
			for (n = 0; n < CT.drawProps.text.length; n++) {
				//gif (translation) CT.drawProps.text[n].y -= _drawOffsetY;
				obj = CT.drawProps.text[n]
				CT._drawText(obj.text, _drawX - _drawOffsetX, _drawY + obj.y - _drawOffsetY)
			}
		}
	}

	/* ------------------------------------------------
		draw the text onto the stage
		CALLED ONLY FROM CanvasDrawer._wrapText()
		*/
	_drawText(copy, x, y) {
		let CT = this
		var _outer = CT.strokePosition === 'outer'
		var _strokeDepth = CT.strokeWidth > 0
		if (CT.strokeDashSize > 0 && CT.strokeDashGap > 0)
			CT.stage.ctx.setLineDash([CT.strokeDashSize * CT.stage.qualityScale, CT.strokeDashGap * CT.stage.qualityScale])
		CT.stage.ctx.lineDashOffset = CT.strokeDashOffset
		CT.stage.ctx.lineCap = CT.strokeCap
		CT.stage.ctx.lineJoin = CT.strokeJoin
		CT.stage.ctx.font = CT.fontSize * CT.stage.qualityScale + 'px ' + CT.fontFamily
		CT.stage.ctx.fillStyle = CT.fill
		CT.stage.ctx.strokeStyle = CT.strokeFill
		CT.stage.ctx.textAlign = CT.alignText
		CT.stage.ctx.textBaseline = 'top'
		CT.stage.ctx.lineWidth = CT.strokeWidth * CT.stage.qualityScale * (_outer ? 2 : 1)

		if (_outer && _strokeDepth) CT.stage.ctx.strokeText(copy, x * CT.stage.qualityScale, y * CT.stage.qualityScale)
		CT.stage.ctx.fillText(copy, x * CT.stage.qualityScale, y * CT.stage.qualityScale)
		if (!_outer && _strokeDepth) {
			// this commented out area was originally used to prevent errors of shadow displays when strokePosition === 'center'

			// CT.stage.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
			// CT.stage.ctx.shadowOffsetX = 0;
			// CT.stage.ctx.shadowOffsetY = 0;
			// CT.stage.ctx.shadowBlur = 0;
			CT.stage.ctx.strokeText(copy, x * CT.stage.qualityScale, y * CT.stage.qualityScale)
		}
	}
}
export default CanvasText
