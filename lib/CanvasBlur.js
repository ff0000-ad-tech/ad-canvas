/**
 * @npmpackage
 * @class CanvasBlur
 * @desc
 * 	Blurs all the imagery of a canvas given a Canvas element or CanvasDrawer instance.<br>
 * Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
 * <codeblock>
 * import { CanvasBlur } from 'ad-canvas'
 * </codeblock>
 */
import * as CanvasUtils from './CanvasUtils'

function BlurStack() {
	var BS = this
	BS.r = 0
	BS.g = 0
	BS.b = 0
	BS.a = 0
	BS.next = null
}

let mul_table = [
	512,
	512,
	456,
	512,
	328,
	456,
	335,
	512,
	405,
	328,
	271,
	456,
	388,
	335,
	292,
	512,
	454,
	405,
	364,
	328,
	298,
	271,
	496,
	456,
	420,
	388,
	360,
	335,
	312,
	292,
	273,
	512,
	482,
	454,
	428,
	405,
	383,
	364,
	345,
	328,
	312,
	298,
	284,
	271,
	259,
	496,
	475,
	456,
	437,
	420,
	404,
	388,
	374,
	360,
	347,
	335,
	323,
	312,
	302,
	292,
	282,
	273,
	265,
	512,
	497,
	482,
	468,
	454,
	441,
	428,
	417,
	405,
	394,
	383,
	373,
	364,
	354,
	345,
	337,
	328,
	320,
	312,
	305,
	298,
	291,
	284,
	278,
	271,
	265,
	259,
	507,
	496,
	485,
	475,
	465,
	456,
	446,
	437,
	428,
	420,
	412,
	404,
	396,
	388,
	381,
	374,
	367,
	360,
	354,
	347,
	341,
	335,
	329,
	323,
	318,
	312,
	307,
	302,
	297,
	292,
	287,
	282,
	278,
	273,
	269,
	265,
	261,
	512,
	505,
	497,
	489,
	482,
	475,
	468,
	461,
	454,
	447,
	441,
	435,
	428,
	422,
	417,
	411,
	405,
	399,
	394,
	389,
	383,
	378,
	373,
	368,
	364,
	359,
	354,
	350,
	345,
	341,
	337,
	332,
	328,
	324,
	320,
	316,
	312,
	309,
	305,
	301,
	298,
	294,
	291,
	287,
	284,
	281,
	278,
	274,
	271,
	268,
	265,
	262,
	259,
	257,
	507,
	501,
	496,
	491,
	485,
	480,
	475,
	470,
	465,
	460,
	456,
	451,
	446,
	442,
	437,
	433,
	428,
	424,
	420,
	416,
	412,
	408,
	404,
	400,
	396,
	392,
	388,
	385,
	381,
	377,
	374,
	370,
	367,
	363,
	360,
	357,
	354,
	350,
	347,
	344,
	341,
	338,
	335,
	332,
	329,
	326,
	323,
	320,
	318,
	315,
	312,
	310,
	307,
	304,
	302,
	299,
	297,
	294,
	292,
	289,
	287,
	285,
	282,
	280,
	278,
	275,
	273,
	271,
	269,
	267,
	265,
	263,
	261,
	259
]

/*
ORIGINALLY FORMATTED LIKE THIS, FOR LEGIBILITY

let mul_table = [
	512,
	512, 456,
	512, 328, 456, 335,
	512, 405, 328, 271, 456, 388, 335, 292 ,
	512, 454, 405, 364, 328, 298, 271, 496, 456, 420, 388, 360, 335, 312, 292, 273,
	512, 482, 454, 428, 405, 383, 364, 345, 328, 312, 298, 284, 271, 259, 496, 475, 456, 437, 420, 404, 388, 374, 360, 347, 335, 323, 312, 302, 292, 282, 273, 265,
	512, 497, 482, 468, 454, 441, 428, 417, 405, 394, 383, 373, 364, 354, 345, 337, 328, 320, 312, 305, 298, 291, 284, 278, 271, 265, 259, 507, 496, 485, 475, 465, 456, 446, 437, 428, 420, 412, 404, 396, 388, 381, 374, 367, 360, 354, 347, 341, 335, 329, 323, 318, 312, 307, 302, 297, 292, 287, 282, 278, 273, 269, 265, 261,
	512, 505, 497, 489, 482, 475, 468, 461, 454, 447, 441, 435, 428, 422, 417, 411, 405, 399, 394, 389, 383, 378, 373, 368, 364, 359, 354, 350, 345, 341, 337, 332, 328, 324, 320, 316, 312, 309, 305, 301, 298, 294, 291, 287, 284, 281, 278, 274, 271, 268, 265, 262, 259, 257, 507, 501, 496, 491, 485, 480, 475, 470, 465, 460, 456, 451, 446, 442, 437, 433, 428, 424, 420, 416, 412, 408, 404, 400, 396, 392, 388, 385, 381, 377, 374, 370, 367, 363, 360, 357, 354, 350, 347, 344, 341, 338, 335, 332, 329, 326, 323, 320, 318, 315, 312, 310, 307, 304, 302, 299, 297, 294, 292, 289, 287, 285, 282, 280, 278, 275, 273, 271, 269, 267, 265, 263, 261, 259
];
*/

let shg_table_counts = [1, 1, 2, 2, 4, 4, 7, 9, 14, 18, 27, 37, 54, 74]
let shg_table = [9]
for (var i = 0; i < shg_table_counts.length; i++) {
	var nextSet = []
	for (var k = 0; k < shg_table_counts[i]; k++) {
		nextSet.push(i + 11)
	}
	shg_table = shg_table.concat(nextSet)
}

/**
 * @memberof CanvasBlur
 * @method set
 * @param {object} obj
 * 	an object with parameters for overall blurring, see properties for more information
 * @property {CanvasDrawer|UICanvas|canvas} target
 * 	a CanvasDrawer or CANVAS DOM element used to determine what to blur
 * @property {number|object} amount
 * 	a NUMBER by which blur the content of the target or an OBJECT containing unique X and Y blur amounts
 * 	@property {number} amount.x
 * 		NUMBER by which to blur the content horizontally (will average with a given Y blur)
 * 	@property {number} amount.y
 * 		NUMBER by which to blur the content vertically (will average with a given X blur)
 * @property {boolean} alpha
 * 	a BOOLEAN to toggle whether or not to blur a target's alpha values. Defaults to false, which will blur the content but preserve the shape of the imagery
 * @property {boolean} clear
 * 	a BOOLEAN which will redraw a CanvasDrawer (but not any other canvas element). Defaults to false, which will compound previous effects
 * @desc
 * Blur the content of a canvas DOM element
 * <br><br>
 *
 * <b>EXAMPLES::</b><br>
 * Starting with this image::<br>
 * <img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/default.jpg" />
 * <br><br>
 *
 * Blur while preserving alpha::
 * <codeblock>
 * CanvasBlur.set({
 * 	target: _myCanvasDrawer.canvas,
 * 	amount: 3,
 * 	alpha: true
 * });
 * </codeblock>
 * <br>
 * <img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blur.jpg" />
 * <br><br>
 *
 * Blur while preserving outline::<br>
 * <codeblock>
 * // because clear: true, will redraw the canvas to remove the previous blur of amount: 3
 * // alpha: false will preserve the outline of the target while blurring its innards
 * CanvasBlur.set({
 * 	target: _myCanvasDrawer,
 * 	amount: 10,
 * 	clear: true,
 * 	alpha: false
 * });
 * </codeblock>
 * <br>
 * <img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blur_noAlpha.jpg" />
 * <br><br>
 *
 * Blur content horizontally only::<br>
 * <codeblock>
 * CanvasBlur.set({
 * 	target: _myCanvasDrawer,
 * 	amount: {
 * 		x: 20
 * 	}
 * })
 * </codeblock>
 * <br>
 * <img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blur_x.jpg" />
 */

export function set(obj) {
	// console.warn('CanvasBlur.set()', obj)

	let _blurTotal = obj.amount
	let _blurX = 0
	let _blurY = 0
	switch (typeof _blurTotal) {
		case 'number':
			_blurX = _blurY = _blurTotal
			break
		case 'object':
			if (obj.amount.x > 0) _blurX = obj.amount.x
			if (obj.amount.y > 0) _blurY = obj.amount.y
			_blurTotal = _blurX + _blurY
			break
	}
	// ALL OF THE VARIABLES USED IN CALCULATION
	let _target = obj.target
	if (obj.clear || _blurTotal === 0) {
		if (_target.update) _target.update()
		else
			throw new Error(
				'Unable to clear a canvas DOM element: requires CanvasDrawer. Effects will stack, not reset.'
			)
	}
	if (isNaN(_blurTotal) || _blurTotal < 1) return
	_blurX |= 0
	_blurY |= 0

	const hasAlpha = obj.alpha
	obj = null

	_target = _target.canvas || _target
	let imageData = CanvasUtils.getImageData(_target)

	let pixels = imageData.data

	let x,
		y,
		i,
		p,
		yp,
		yi,
		yw,
		r_sum,
		g_sum,
		b_sum,
		a_sum,
		r_out_sum,
		g_out_sum,
		b_out_sum,
		a_out_sum,
		r_in_sum,
		g_in_sum,
		b_in_sum,
		a_in_sum,
		pr,
		pg,
		pb,
		pa,
		rbs

	let stackStart = new BlurStack()
	let stack = stackStart
	let stackIn = null
	let stackOut = null

	// THINGS CALCULATED BASED ON PASSED PARAMETERS
	const _bWidth = _target.width
	const _bHeight = _target.height

	let div = _blurX + _blurX + 1
	let widthMinus1 = _bWidth - 1
	let heightMinus1 = _bHeight - 1
	let radiusPlus1 = _blurX + 1
	let sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2

	for (i = 1; i < div; i++) {
		stack = stack.next = new BlurStack()
		if (i == radiusPlus1) var stackEnd = stack
	}
	stack.next = stackStart
	yw = yi = 0

	let mul_sum = mul_table[_blurX]
	let shg_sum = shg_table[_blurX]

	// OK, LET'S BLUR THIS GOOSE!
	if (_blurX) {
		// BLUR HORIZONTALLY
		for (y = 0; y < _bHeight; y++) {
			r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0

			r_out_sum = radiusPlus1 * (pr = pixels[yi])
			g_out_sum = radiusPlus1 * (pg = pixels[yi + 1])
			b_out_sum = radiusPlus1 * (pb = pixels[yi + 2])

			r_sum += sumFactor * pr
			g_sum += sumFactor * pg
			b_sum += sumFactor * pb

			if (hasAlpha) {
				a_out_sum = radiusPlus1 * (pa = pixels[yi + 3])
				a_sum += sumFactor * pa
			}

			stack = stackStart

			for (i = 0; i < radiusPlus1; i++) {
				stack.r = pr
				stack.g = pg
				stack.b = pb
				if (hasAlpha) stack.a = pa
				stack = stack.next
			}

			for (i = 1; i < radiusPlus1; i++) {
				if (hasAlpha) {
					a_sum += (stack.a = pa = pixels[p + 3]) * rbs
					a_in_sum += pa
				}

				p = yi + ((widthMinus1 < i ? widthMinus1 : i) << 2)
				r_sum += (stack.r = pr = pixels[p]) * (rbs = radiusPlus1 - i)
				g_sum += (stack.g = pg = pixels[p + 1]) * rbs
				b_sum += (stack.b = pb = pixels[p + 2]) * rbs

				r_in_sum += pr
				g_in_sum += pg
				b_in_sum += pb

				stack = stack.next
			}

			stackIn = stackStart
			stackOut = stackEnd
			for (x = 0; x < _bWidth; x++) {
				if (hasAlpha) {
					pixels[yi + 3] = pa = (a_sum * mul_sum) >> shg_sum
					if (pa != 0) {
						pa = 255 / pa
						pixels[yi] = ((r_sum * mul_sum) >> shg_sum) * pa
						pixels[yi + 1] = ((g_sum * mul_sum) >> shg_sum) * pa
						pixels[yi + 2] = ((b_sum * mul_sum) >> shg_sum) * pa
					} else {
						pixels[yi] = pixels[yi + 1] = pixels[yi + 2] = 0
					}
				} else {
					pixels[yi] = (r_sum * mul_sum) >> shg_sum
					pixels[yi + 1] = (g_sum * mul_sum) >> shg_sum
					pixels[yi + 2] = (b_sum * mul_sum) >> shg_sum
				}

				r_sum -= r_out_sum
				g_sum -= g_out_sum
				b_sum -= b_out_sum

				r_out_sum -= stackIn.r
				g_out_sum -= stackIn.g
				b_out_sum -= stackIn.b

				if (hasAlpha) {
					a_sum -= a_out_sum
					a_out_sum -= stackIn.a
				}

				p = (yw + ((p = x + _blurX + 1) < widthMinus1 ? p : widthMinus1)) << 2

				r_in_sum += stackIn.r = pixels[p]
				g_in_sum += stackIn.g = pixels[p + 1]
				b_in_sum += stackIn.b = pixels[p + 2]

				r_sum += r_in_sum
				g_sum += g_in_sum
				b_sum += b_in_sum

				r_out_sum += pr = stackOut.r
				g_out_sum += pg = stackOut.g
				b_out_sum += pb = stackOut.b

				r_in_sum -= pr
				g_in_sum -= pg
				b_in_sum -= pb

				if (hasAlpha) {
					a_in_sum += stackIn.a = pixels[p + 3]
					a_sum += a_in_sum
					a_out_sum += pa = stackOut.a
					a_in_sum -= pa
				}

				stackIn = stackIn.next
				stackOut = stackOut.next

				yi += 4
			}

			yw += _bWidth
		}
	}

	// RESET NECESSARY VARIABLES FOR VERTICAL BLUR
	div = _blurY + _blurY + 1
	radiusPlus1 = _blurY + 1
	sumFactor = radiusPlus1 * (radiusPlus1 + 1) / 2

	for (i = 1; i < div; i++) {
		stack = stack.next = new BlurStack()
		if (i == radiusPlus1) var stackEnd = stack
	}
	stack.next = stackStart
	yw = yi = 0

	mul_sum = mul_table[_blurY]
	shg_sum = shg_table[_blurY]

	if (_blurY) {
		// BLUR VERTICALLY
		for (x = 0; x < _bWidth; x++) {
			g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0

			yi = x << 2
			r_out_sum = radiusPlus1 * (pr = pixels[yi])
			g_out_sum = radiusPlus1 * (pg = pixels[yi + 1])
			b_out_sum = radiusPlus1 * (pb = pixels[yi + 2])

			r_sum += sumFactor * pr
			g_sum += sumFactor * pg
			b_sum += sumFactor * pb
			if (hasAlpha) {
				a_out_sum = radiusPlus1 * (pa = pixels[yi + 3])
				a_sum += sumFactor * pa
			}

			stack = stackStart

			for (i = 0; i < radiusPlus1; i++) {
				stack.r = pr
				stack.g = pg
				stack.b = pb
				if (hasAlpha) stack.a = pa
				stack = stack.next
			}

			yp = _bWidth

			for (i = 1; i <= _blurY; i++) {
				yi = (yp + x) << 2

				r_sum += (stack.r = pr = pixels[yi]) * (rbs = radiusPlus1 - i)
				g_sum += (stack.g = pg = pixels[yi + 1]) * rbs
				b_sum += (stack.b = pb = pixels[yi + 2]) * rbs

				r_in_sum += pr
				g_in_sum += pg
				b_in_sum += pb

				if (hasAlpha) {
					a_sum += (stack.a = pa = pixels[yi + 3]) * rbs
					a_in_sum += pa
				}

				stack = stack.next

				if (i < heightMinus1) {
					yp += _bWidth
				}
			}

			yi = x
			stackIn = stackStart
			stackOut = stackEnd
			for (y = 0; y < _bHeight; y++) {
				p = yi << 2
				if (hasAlpha) {
					pixels[p + 3] = pa = (a_sum * mul_sum) >> shg_sum
					if (pa > 0) pixels[p] = ((r_sum * mul_sum) >> shg_sum) * (pa = 255 / pa)
					else pixels[p] = pixels[p + 1] = pixels[p + 2] = 0
				} else {
					pa = 1
					pixels[p] = (r_sum * mul_sum) >> shg_sum
				}

				pixels[p + 1] = ((g_sum * mul_sum) >> shg_sum) * pa
				pixels[p + 2] = ((b_sum * mul_sum) >> shg_sum) * pa

				r_sum -= r_out_sum
				g_sum -= g_out_sum
				b_sum -= b_out_sum

				r_out_sum -= stackIn.r
				g_out_sum -= stackIn.g
				b_out_sum -= stackIn.b

				p = (x + ((p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1) * _bWidth) << 2

				r_sum += r_in_sum += stackIn.r = pixels[p]
				g_sum += g_in_sum += stackIn.g = pixels[p + 1]
				b_sum += b_in_sum += stackIn.b = pixels[p + 2]

				r_out_sum += pr = stackOut.r
				g_out_sum += pg = stackOut.g
				b_out_sum += pb = stackOut.b

				r_in_sum -= pr
				g_in_sum -= pg
				b_in_sum -= pb

				if (hasAlpha) {
					a_sum -= a_out_sum
					a_out_sum -= stackIn.a
					a_sum += a_in_sum += stackIn.a = pixels[p + 3]
					a_out_sum += pa = stackOut.a
					a_in_sum -= pa
				}

				stackIn = stackIn.next
				stackOut = stackOut.next

				yi += _bWidth
			}
		}
	}
	CanvasUtils.setImageData(_target, imageData)
}

/*
NOTE: This is a trimmed-down version of StackBlur, as found here http://quasimondo.com/StackBlurForCanvas/StackBlurDemo.html
Original release notes below
/*
StackBlur - a fast almost Gaussian Blur For Canvas
Version: 	0.5
Author:		Mario Klingemann
Contact: 	mario@quasimondo.com
Website:	http://www.quasimondo.com/StackBlurForCanvas
Twitter:	@quasimondo
In case you find this class useful - especially in commercial projects -
I am not totally unhappy for a small donation to my PayPal account
mario@quasimondo.de
Or support me on flattr: 
https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript
Copyright (c) 2010 Mario Klingemann
Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:
The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
*/
// export default CanvasBlur
