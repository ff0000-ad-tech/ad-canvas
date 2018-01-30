/**
	@class CanvasElement
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-canvas">Github repo</a>
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
		var _params = obj.params

		this._type = obj.type || type
		this.stage = obj.target

		this.id = obj.id || 'canvasdItem' + this.stage.elementsLength
		this.stage.elements[this.id] = this
		this.stage.elementsLength++

		this.visible = obj.visible === false ? false : true

		this.rotation = _params.rotation || 0
		this.scale = _params.scale === 0 ? 0 : _params.scale || 1
		this.scaleX = _params.scaleX === 0 ? 0 : _params.scaleX || 1
		this.scaleY = _params.scaleY === 0 ? 0 : _params.scaleY || 1

		this.alpha = _params.alpha >= 0 ? _params.alpha : 1
		this.blendMode = obj.blendMode || 'source-over'
		this._transformOrigin = '0 0'

		obj.stroke = obj.stroke || {}

		var _dropShadow = obj.dropShadow
		var _hasShadow = _dropShadow ? true : false
		_dropShadow = _dropShadow || {}

		this._shadowAngle = _dropShadow.angle || 0
		this.shadowDistance = _dropShadow.distance || 0
		this._shadowColor = _dropShadow.color || (_hasShadow ? '#000000' : null)
		this.shadowAlpha = _dropShadow.alpha || this._shadowAlpha
		this.shadowBlur = _dropShadow.blur || 0
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

		// this._shadowAlpha = this._shadowColor.split(',')[3];
		// this._shadowAlpha = Number(this._shadowColor.substring(0, this._shadowAlpha.lastIndexOf(')')));
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
		var _xTran = value.split(' ')[0]
		var _yTran = value.split(' ')[1]

		this._transformOrigin = value

		// REMOVE ALL STRING ELEMENTS FROM THE transformOrigin VALUE AND CONVERT TO A PERCENTAGE OF THE element's WIDTH AND HEIGHT
		if (_xTran.indexOf('%') >= 0) {
			_xTran = +_xTran.replace(/%/g, '') / 100
		} else if (_xTran.indexOf('px') >= 0) {
			_xTran = +_xTran.replace(/px/g, '') / this.width
		} else {
			_xTran = +_xTran / this.width
		}

		if (_yTran.indexOf('%') >= 0) {
			_yTran = +_yTran.replace(/%/g, '') / 100
		} else if (_yTran.indexOf('px') >= 0) {
			_yTran = +_yTran.replace(/px/g, '') / this.height
		} else {
			_yTran = +_yTran / this.height
		}

		switch (this._type) {
			case 'arc':
			case 'path':
				_xTran -= 0.5
				_yTran -= 0.5
			default:
				this._offsetX = this.width * _xTran
				this._offsetY = this.height * _yTran
				break
			case 'text':
				// THE OFFSET VALUE FOR text OBJECTS IS BEING SET HERE BECAUSE THE ACTUAL width AND height OF THE TEXT IS YET UNKNOWN
				this._transOffsetX = _xTran
				this._transOffsetY = _yTran

				switch (this.textAlign) {
					case 'center':
						this._transOffsetX -= 0.5
						break
					case 'right':
						this._transOffsetX *= -1
						break
				}
				this._wrapText(false, false)
				break
		}
	}

	// PUBLIC
	toString() {
		return '[object CanvasElement]'
	}

	// PRIVATE
	_setShadowOffsets(ang, dist) {
		var radians = MathUtils.toRadians(this._shadowAngle * -1 + 180)
		this._shadowOffsetX = Number((Math.cos(radians) * this._shadowDistance).toFixed(8))
		this._shadowOffsetY = Number((Math.sin(radians) * this._shadowDistance).toFixed(8))
		//return this._shadowOffsetX;
	}
}

export default CanvasElement
