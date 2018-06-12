/**
	@npmpackage
	@class CanvasColoring
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasColoring } from 'ad-canvas'
		</codeblock>
		<br><br>
		
		Apply letious color effects to a canvas given a Canvas element or CanvasDrawer instance.
		<br><br>
		All examples in this class demonstrate effects applied to this image:<br>
		<img src="../docs_images/canvasdrawer/default.jpg" /><br>
*/
import { ColorUtils } from 'ad-utils'
import * as CanvasUtils from './CanvasUtils'

// PUBLIC FUNCTIONS
/**
	@memberof CanvasColoring
	@method hue
	@param {object} obj
		an object with paramaters for overall hue shift, see Properties for more info:
	@property {CanvasDrawer|UICanvas|canvas} target
		a CanvasDrawer or CANVAS DOM to which the effect is applied
	@property {number} amount
		amount to shift the colors in a range of 0-360
	@desc
		<b>EXAMPLE::</b><br>
		<codeblock>
			// convert to full grayscale
			CanvasColoring.hue({
				target: _myCanvasDrawer,
				amount: 180,
			});
		</codeblock>
		<br>
		<img src="../docs_images/canvasdrawer/hue.jpg" />
*/
export function hue(obj) {
	obj.type = 'hue'
	obj.clear = true
	_engine(obj)
}

/**
	@memberof CanvasColoring
	@method saturation
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info:
	@property {CanvasDrawer|UICanvas|canvas} target
		a CanvasDrawer or CANVAS DOM to which the effect is applied
	@property {number} amount
		a NUMBER representing the total saturation of the target. 0 = grayscale, 1 = full, original color
	@property {boolean} clear
		a BOOLEAN which will redraw a CanvasDrawer (but not a canvas DOM element). Defaults to false, which will compound previous effects
	@desc
		<b>EXAMPLE::</b><br>
		<codeblock>
			// convert to full grayscale
			CanvasColoring.saturation({
				target: _myCanvasDrawer,
				amount: 0,
			});
		</codeblock>
		<br>
		<img src="../docs_images/canvasdrawer/sat.jpg" />
*/
export function saturation(obj) {
	obj.type = 'saturation'
	_engine(obj)
}

/**
	@memberof CanvasColoring
	@method contrast
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info:
	@property {CanvasDrawer|UICanvas|canvas} target
		a CanvasDrawer or CANVAS DOM to which the effect is applied
	@property {number} amount
		a NUMBER representing the contrast of the target. 0 = no contrast, 1 = original contrast, >1 = more and more, to infinity and beyond!
	@property {boolean} clear
		a BOOLEAN which will redraw a CanvasDrawer (but not a canvas DOM element). Defaults to false, which will compound previous effects
	@desc
		Change the contrast of the target.
		<br><br>
		<b>EXAMPLE::</b><br>
		<codeblock>
			// get your whites whiter and brights brighter
			CanvasColoring.contrast({
				target: _myCanvasDrawer,
				amount: 10,
			});
		</codeblock>
		<br>
		<img src="../docs_images/canvasdrawer/contrast.jpg" />
*/
export function contrast(obj) {
	obj.type = 'contrast'
	_engine(obj)
}

/**
	@memberof CanvasColoring
	@method tint
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info:
	@property {CanvasDrawer|UICanvas|canvas} target
		a CanvasDrawer or CANVAS DOM to which the effect is applied
	@property {number} amount
		a NUMBER representing the percentage of color to apply to the target. Defaults to 1, which is 100% color tinting
	@property {string|object} color
		a HEX, RGB/A STRING, or RGB/A OBJECT represeting the color to tint to. Color-name strings such as 'red' and 'blue' will throw errors
	@property {boolean} clear
		a BOOLEAN which will redraw a CanvasDrawer (but not a canvas DOM element). Defaults to false, which will compound previous effects
	@desc
		Tint the target uniformly to a given color.
		<br><br>
		<b>EXAMPLE::</b><br>
		<codeblock>
			// tint to GREEN
			CanvasColoring.tint({
				target: _myCanvasDrawer,
				color: 'rgb(0, 255, 0)',
				amount: 1
			});
		</codeblock>
		<br>
		<img src="../docs_images/canvasdrawer/tintGreen.jpg" />
		<br><br>
		<codeblock>
			// tint to MAGENTA
			CanvasColoring.tint({
				target: _myCanvasDrawer,
				color: {
					r: 255,
					g: 0,
					b: 255
				},
				amount: 1
			});
		</codeblock>
		<br>
		<img src="../docs_images/canvasdrawer/tintMagenta.jpg" />
		<br><br>
		<codeblock>
			// 50% tint to BLUE
			CanvasColoring.tint({
				target: _myCanvasDrawer,
				color: '#0000ff',
				amount: 0.5
			});
		</codeblock>
		<br>
		<img src="../docs_images/canvasdrawer/tintBlue.jpg" />
*/
export function tint(obj) {
	obj.type = 'tint'
	_engine(obj)
}

/**
	@memberof CanvasColoring
	@method transform
	@param {object} obj
		an object with paramaters for overall saturation, see Properties for more info:
	@property {CanvasDrawer|UICanvas|canvas} target
		a CanvasDrawer or CANVAS DOM to which the effect is applied
	@property {number} amount
		a NUMBER representing the percentage of color to apply to the target. Defaults to 1, which is 100% color transform
	@property {string|object} color
		a HEX, RGB/A STRING, or RGB/A OBJECT represeting the color to transform to. Color-name strings such as 'red' and 'blue' will throw errors
	@property {boolean} clear
		a BOOLEAN which will redraw a CanvasDrawer (but not a canvas DOM element). Defaults to false, which will compound previous effects.
	@desc
		Color Transforms the target to a given color by pulling colors out of image; preserves shading.
		<br><br>
		<b>EXAMPLE::</b><br>
		<codeblock>
			// pulls all colors EXCEPT for GREEN values out of the target
			CanvasColoring.transform({
				target: _myCanvasDrawer,
				color: 'rgb(0, 255, 0)',
				amount: 1
			});
		</codeblock>
		<br>
		<img src="../docs_images/canvasdrawer/transGreen.jpg" />
		<br><br>
		<codeblock>
			// pulls all colors EXCEPT for RED and BLUE values out of the target
			CanvasColoring.transform({
				target: _myCanvasDrawer,
				color: {
					r: 255,
					g: 0,
					b: 255
				},
				amount: 1
			});
		</codeblock>
		<br>
		<img src="../docs_images/canvasdrawer/transBlueRed.jpg" />
		<br><br>
		<codeblock>
			// pulls 50% of all colors EXCEPT for BLUE values out of the target
			CanvasColoring.transform({
				target: _myCanvasDrawer,
				color: '#0000ff',
				amount: 0.5
			});
		</codeblock>
		<br>
		<img src="../docs_images/canvasdrawer/transBlue.jpg" />
		<br><br>
*/
export function transform(obj) {
	obj.type = 'transform'
	_engine(obj)
}

/**
	@memberof CanvasColoring
	@method invert
	@param {object} obj
		an object with parameters for overall inversion, see Properties for more info:
	@property {CanvasDrawer|UICanvas|canvas} target
		a CanvasDrawer or CANVAS DOM to which the effect is applied
	@property {boolean} clear
		a BOOLEAN which will redraw a CanvasDrawer (but not a canvas DOM element). Defaults to false, which will compound previous effects.
	@desc
		Invert the colors of the target.
		<br><br>
		<b>EXAMPLE::</b><br>
		<codeblock>
			CanvasColoring.invert({
				target: _myCanvasDrawer
			});
		</codeblock>
		<br>
		<img src="../docs_images/canvasdrawer/invert.jpg" />
		<br><br>
*/
export function invert(obj) {
	obj.type = 'invert'
	_engine(obj)
}

// PRIVATE FUNCTIONS
// ------------------------------------------------------------------
//
function _engine(obj) {
	if (obj.color) {
		obj.color = ColorUtils.toRgba(obj.color)
		if (obj.color.r === undefined)
			throw new Error(
				"The color passed to CanvasColorUtils does not meet the HEX or RGB/A definition requirement: given '" + obj.color + "'"
			)
	}
	//
	let _target = obj.target
	obj.amount = obj.amount === undefined ? 1 : obj.amount
	if (obj.clear) {
		if (_target.update) _target.update()
		else throw new Error('Unable to clear a canvas DOM element, requires CanvasDrawer. Effects will stack, not reset.')
	}
	//
	_target = _target.canvas || _target
	let _imageData = CanvasUtils.getImageData(_target)
	let _pixels = _imageData.data
	let _endColor
	let _colID = ['r', 'g', 'b']
	//
	let i, c
	for (i = 0; i < _pixels.length; i += 4) {
		_endColor = ColorUtils[obj.type]({
			from: {
				r: _pixels[i],
				g: _pixels[i + 1],
				b: _pixels[i + 2]
			},
			to: obj.color || null,
			amount: obj.amount,
			format: 'object'
		})

		for (c = 0; c < 3; c++) _pixels[i + c] = _endColor[_colID[c]]
	}

	// overwrite original image
	CanvasUtils.setImageData(_target, _imageData)
}
