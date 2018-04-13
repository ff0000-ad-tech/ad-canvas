/**
	@npmpackage
	@class CanvasElement
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasElement } from 'ad-canvas'
		</codeblock>
		<br><br>
		
		Is the returned instance of a CanvasElement, which makes up all {@link CanvasShape}s and {@link CanvasImage}s. Never called directly by a user.
		<br><br>
		<b>Properties available to every {@link CanvasElement}, except where noted::</b><br>
		<table>
			<tr>
				<td>id</td>	<td>STRING representing the name of the element</td>
			</tr>
			<tr>
				<td>x</td>	<td>NUMBER representing the horizontal position of the element</td>
			</tr>
			<tr>
				<td>y</td>	<td>NUMBER representing the vertical position of the element</td>
			</tr>
			<tr>
				<td>rotation</td>	<td>NUMBER representing the rotation, in degrees, of the element</td>
			</tr>
			<tr>
				<td>alpha </td>	<td>NUMBER representing the opacity of the element</td>
			</tr>
			<tr>
				<td>scale</td>	<td>NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY</td>
			</tr>
			<tr>
				<td>scaleX</td>	<td>NUMBER representing the horizontal scale of the element</td>
			</tr>
			<tr>
				<td>scaleY</td>	<td>NUMBER representing the vertical scale of the element</td>
			</tr>
			<tr>
				<td>blendMode</td>	<td>NUMBER representing the blend or masking style applied to the element</td>
			</tr>
			<tr>
				<td>visible</td>	<td>BOOLEAN representing whether or not the element should be drawn</td>
			</tr>
			<tr>
				<td>shadowColor</td>	<td>STRING representing the color of the drop shadow in RGBA format</td>
			</tr><tr>
				<td>shadowBlur</td>	<td>NUMBER representing the amount of blur on the drop shadow</td>
			</tr>
			<tr>
				<td>shadowAngle</td>	<td>NUMBER representing the angle, in degrees, of the drop shadow</td>
			</tr>
			<tr>
				<td>shadowDistance</td>	<td>NUMBER representing the distance of the drop shadow from the element</td>
			</tr>
			<tr>
				<td>transformOrigin</td>	<td>STRING representing the origin from which to perform scales and rotations. Written as two values in a string with either a '%' or 'px' marker (ie '50% 50%' or '5px 100px')</td>
			</tr>
		</table>
		<br><br>
		<b>The following *ONLY* apply to {@link CanvasImage} instances::</b><br>
		<table>
			<tr>
				<td>sourceX</td>	<td>NUMBER representing the horizontal value from which to start drawing data from the source image</td>
			</tr>
			<tr>
				<td>sourceY</td>	<td>NUMBER representing the vertical value from which to start drawing data from the source image</td>
			</tr>
			<tr>
				<td>sourceW</td>	<td>NUMBER representing the width value from which to draw data from the source image</td>
			</tr>
			<tr>
				<td>sourceH</td>	<td>NUMBER representing the height value from which to draw data from the source image</td>
			</tr>
		</table>
		<br><br>
		<b>The following *ONLY* apply to {@link CanvasText} instances::</b><br>
		<table>
			<tr>
				<td>fontFamily</td>	<td>STRING representing the font name</td>
			</tr>
			<tr>
				<td>fontSize</td>	<td>NUMBER or STRING (12, '12', '12px', or '12pt') representing the font size</td>
			</tr>
			<tr>
				<td>lineHeight</td>	<td>NUMBER which determines the line height between lines of text with defined maxWidth values</td>
			</tr>
			<tr>
				<td>marginLeft</td>	<td>NUMBER representing the X offset of the text</td>
			</tr>
			<tr>
				<td>marginTop</td>	<td>NUMBER representing the Y offset of the text</td>
			</tr>
			<tr>
				<td>maxWidth</td>	<td>NUMBER which determines the maximum width of the text field, which is used to create MUTLI-LINE text</td>
			</tr>
			<tr>
				<td>alignText</td>	<td>STRING or Align constant defining text's horizontal alingment: 'center', 'left', or 'right'. Can also use Align.CENTER, Align.LEFT, or Align.RIGHT.</td>
			</tr>
		</table>
		<br><br>
		<b>The following *ONLY* apply to {@link CanvasImage}s, {@link CanvasCircle}s, and {@link CanvasRect}s instances::</b><br>
		<table>
			<tr>
				<td>width</td>	<td>NUMBER representing the total width or diameter of the element</td>
			</tr>
			<tr>
				<td>height</td>	<td>NUMBER representing the total height or diameter of the element</td>
			</tr>
		</table>
		<br><br>
		<b>The following *ONLY* apply to {@link CanvasCircle}s, {@link CanvasRect}s, and {@link CanvasText} instances (heretofore referred to as 'shapes')::</b><br>
		<table>
			<tr>
				<td>fill</td>	<td>STRING, gradient, or texture representing the color used to fill the shape</td>
			</tr>
			<tr>
				<td>strokeFill</td>	<td>STRING, gradient, or texture representing the color used to fill the shape's stroke</td>
			</tr>
			<tr>
				<td>strokeWidth</td>	<td>NUMBER representing the width of the shape's outline</td>
			</tr>
			<tr>
				<td>strokeJoin</td>	<td>STRING representing how two lines/corners form: 'round', 'bevel', and 'miter'</td>
			</tr>
			<tr>
				<td>strokePosition</td>	<td>STRING repsenting the position of the shape's stroke, 'outer' or 'center'; there is no 'inner'</td>
			</tr>
			<tr>
				<td>strokeDashSize</td>	<td>NUMBER representing the length of each segment in a dashed line</td>
			</tr>
			<tr>
				<td>strokeDashGap</td>	<td>NUMBER representing the gap between each segment in a dashed line</td>
			</tr>
			<tr>
				<td>strokeDashOffset</td>	<td>NUMBER representing the offset positioning of the dash segments</td>
			</tr>
		</table>
		<br><br>
*/
import { ColorUtils, MathUtils } from 'ad-utils'

class CanvasElement {
	constructor(obj, type) {
		let CE = this
		var _params = obj.params

		CE._type = obj.type || type
		CE.stage = obj.target

		CE.id = obj.id || 'canvasdItem' + CE.stage.elementsLength
		CE.stage.elements[CE.id] = this
		CE.stage.elementsLength++

		CE.visible = obj.visible === false ? false : true

		CE.rotation = _params.rotation || 0
		CE.scale = _params.scale === 0 ? 0 : _params.scale || 1
		CE.scaleX = _params.scaleX === 0 ? 0 : _params.scaleX || 1
		CE.scaleY = _params.scaleY === 0 ? 0 : _params.scaleY || 1

		CE.alpha = _params.alpha >= 0 ? _params.alpha : 1
		CE.blendMode = obj.blendMode || 'source-over'
		CE._transformOrigin = '0 0'

		obj.stroke = obj.stroke || {}

		var _dropShadow = obj.dropShadow
		var _hasShadow = _dropShadow ? true : false
		_dropShadow = _dropShadow || {}

		CE._shadowAngle = _dropShadow.angle || 0
		CE.shadowDistance = _dropShadow.distance || 0
		CE._shadowColor = _dropShadow.color || (_hasShadow ? '#000000' : null)
		CE.shadowAlpha = _dropShadow.alpha || CE._shadowAlpha
		CE.shadowBlur = _dropShadow.blur || 0
	}

	// GETTERS AND SETTERS
	//
	get shadowAngle() {
		return this._shadowAngle
	}

	set shadowAngle(value) {
		this._shadowAngle = value
		this._setShadowOffsets()
	}

	//
	get shadowDistance() {
		return this._shadowDistance
	}

	set shadowDistance(value) {
		this._shadowDistance = value
		this._setShadowOffsets()
	}

	//
	get shadowColor() {
		return this._shadowColor
	}

	set shadowColor(value) {
		this._shadowColor = value === null ? null : ColorUtils.toRgbaString(value, this._shadowAlpha)

		// The reason the alpha doesn't update when you change the shadow color is that if you pass in a HEX color,
		// the alpha would reset to 1 if you didn't want it to
		// but this code is still here, just in case that changes

		// CE._shadowAlpha = CE._shadowColor.split(',')[3];
		// CE._shadowAlpha = Number(CE._shadowColor.substring(0, CE._shadowAlpha.lastIndexOf(')')));
	}

	//
	get shadowAlpha() {
		return this._shadowAlpha
	}

	set shadowAlpha(value) {
		this._shadowAlpha = value
		this.shadowColor = this._shadowColor
	}

	//
	get transformOrigin() {
		return this._transformOrigin
	}

	set transformOrigin(value) {
		let CE = this
		var _xTran = value.split(' ')[0]
		var _yTran = value.split(' ')[1]

		CE._transformOrigin = value

		// REMOVE ALL STRING ELEMENTS FROM THE transformOrigin VALUE AND CONVERT TO A PERCENTAGE OF THE element's WIDTH AND HEIGHT
		if (_xTran.indexOf('%') >= 0) {
			_xTran = +_xTran.replace(/%/g, '') / 100
		} else if (_xTran.indexOf('px') >= 0) {
			_xTran = +_xTran.replace(/px/g, '') / CE.width
		} else {
			_xTran = +_xTran / CE.width
		}

		if (_yTran.indexOf('%') >= 0) {
			_yTran = +_yTran.replace(/%/g, '') / 100
		} else if (_yTran.indexOf('px') >= 0) {
			_yTran = +_yTran.replace(/px/g, '') / CE.height
		} else {
			_yTran = +_yTran / CE.height
		}

		switch (CE._type) {
			case 'arc':
			case 'path':
				_xTran -= 0.5
				_yTran -= 0.5
			default:
				CE._offsetX = CE.width * _xTran
				CE._offsetY = CE.height * _yTran
				break
			case 'text':
				// THE OFFSET VALUE FOR text OBJECTS IS BEING SET HERE BECAUSE THE ACTUAL width AND height OF THE TEXT IS YET UNKNOWN
				CE._transOffsetX = _xTran
				CE._transOffsetY = _yTran

				switch (CE.textAlign) {
					case 'center':
						CE._transOffsetX -= 0.5
						break
					case 'right':
						CE._transOffsetX *= -1
						break
				}
				CE._wrapText(false, false)
				break
		}
	}

	// PUBLIC
	toString() {
		return '[object CanvasElement]'
	}

	// PRIVATE
	_setShadowOffsets(ang, dist) {
		let CE = this
		var radians = MathUtils.toRadians(CE._shadowAngle * -1 + 180)
		CE._shadowOffsetX = Number((Math.cos(radians) * CE._shadowDistance).toFixed(8))
		CE._shadowOffsetY = Number((Math.sin(radians) * CE._shadowDistance).toFixed(8))
		//return CE._shadowOffsetX;
	}
}
export default CanvasElement
