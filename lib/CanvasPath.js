/**
	@npmpackage
	@class CanvasPath
	@param {object} pathObj
		an object containing the arguments for defining / orienting the circle, see Properties for more info:
	@property {CanvasDrawer} target
		the {@link CanvasDrawer} element in which to draw the shape
	@property {string} id
		an optional STRING defining the name by which the path will be referenced. Defaults to 'canvasdItemX' where X = the number of elements in a {@link CanvasDrawer}
	@property {object} params
		Object with the following properties:
		@property {number} params.x
			NUMBER X coordinate for the shape's center point
		@property {number} params.y
			NUMBER Y coordinate for shape's center point
		@property {number} params.scale
			NUMBER for uniform scale of the drawing, scaling from drawing center unless transformOrigin is changed. Will compound with but not change values of scaleX or scaleY
		
		@property {number} params.scaleX
			NUMBER for X scale of the drawing, scaling from drawing center unless transformOrigin is changed
		@property {number} params.scaleY
			NUMBER for Y scale of the drawing, scaling from drawing center unless transformOrigin is changed
		@property {number} params.rotation
			NUMBER IN DEGREES for the start rotation of the given drawing
		@property {string} params.transformOrigin
			an optional STRING defining an element's origin for scale and rotation, written as two values in a string with either a '%' or 'px' marker. Defaults to '50% 50%'.
		@property {number} params.alpha
			NUMBER for alpha of the drawing
		@property {array} points
			ARRAY OF OBJECTS to define the point placement and draw type of the path. Each Point object has following signature:
			@property {function} points.point.fun
				a reference to the {@link CanvasLineTo} function to use
			@property {array} points.point.points
				Array contains whatever points the line function requires
		@property {object} dropShadow
			an optional OBJECT defining properties of the shape's drop shadow
			@property {number} dropShadow.angle
				NUMBER IN DEGREES for the angle to position the shadow
			@property {number} dropShadow.distance
				NUMBER for how far away from the image the shadow is
			@property {number} dropShadow.blur
				NUMBER for how blurry the shadow is
			@property {string|object} dropShadow.color
				optional color of shadow as either a HEX STRING :"#ff0000", 
				RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
				or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to '#000000'
			@property {number} dropShadow.alpha
				NUMBER for the alpha of the shadow. Defaults to 1, overrides the alpha of an RGBA color
		@property {string|CanvasBlendMode} blendMode
			an optional STRING for the globalCompositeOperation - controls overlays, screens, multiply, masking, etc. Defaults to 'source-over'
		@property {string} fill
			an optional STRING or gradiant variable defining the color fill of the shape. Defaults to none / invisible
		@property {object} stroke
			an optional OBJECT defining properties of the shape's stroke. Object has the following properties:
			@property {string} stroke.fill
				an optional STRING or gradiant variable defining the color fill of the shape stroke. Defaults to  none / invisible
			@property {number} stroke.width
				an optional NUMBER value determining stroke width. Defaults to 0
			@property {string} stroke.position
				an optional STRING determining if the stroke will be 'outer' or 'center'. Defaults to 'outer', there is no 'inner'
			@property {string} stroke.cap
				an optional STRING value determining a line's cap style: 'butt', 'round', and 'square'. Defaults to 'butt'
				<br>
				<img src="../docs_images/canvasdrawer/lineCap.jpg" />
			@property {string} stroke.join
				an optional STRING value determining how two lines/corners connect: 'round', 'bevel', and 'miter'. Defaults to 'miter'
				<br>
				<img src="../docs_images/canvasdrawer/lineJoin.jpg" />
			@property {number} stroke.dashSize
				an optional NUMBER value determining the length of each segment in a dashed line
			@property {number} stroke.dashGap
				an optional NUMBER value determining the gap between each segment in a dashed line. Defaults to 0, unless dashSize is defined, then defaults to dashSize
			@property {number} stroke.dashOffset
				an optional NUMBER value which offsets the positioning of the dash segments. A positive number moves them counter-clockwise. Defaults to 0
		@property {boolean} closePath
			an optional BOOLEAN which, on instantiation, determines if the path should be closed or not. Defaults to true; set to <b>false</b> if you don't want the first and last points connecting.
		@property {number} drawScale
			an optional NUMBER which does a one-time recalculation of the given points to a new scale. Usefull for changing a shape's size without a transform scale or recalculating points beforehand
		@property {boolean} visible
			an optional BOOLEAN that, when set to false, will not render the element. Defaults to true.
		
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasPath } from 'ad-canvas'
		</codeblock>
		<br><br>
		
		Add a path shape to a {@link CanvasDrawer} based on a given object containing lines and coordinate data, and return a reference to that shape
		<br><br>
		<b>NOTE::</b><br> 
		<code>width</code> and <code>height</code> properties do NOT affect CanvasPaths - use scaleX and scaleY to manipulate the size of these objects.
		<br><br>
		<b>POINT FORMATS::</b><br>
		<table>
			<tr>
				<td>CanvasLineTo.MOVE (or 'moveTo')</td>	<td>requires ONE x-y value - <code>points: [x1, y1]</code></td>
			</tr>
			<tr>
				<td>CanvasLineTo.LINE (or 'lineTo')</td>	<td>requires ONE x-y value - <code>points: [x1, y1]</code></td>
			</tr>
			<tr>
				<td>CanvasLineTo.ARC (or 'arcTo')</td>	<td>requires TWO x-y values and ONE radius of the arc value - <code>points: [x1, y1, x2, y2, radius]</code></td>
			</tr>
			<tr>
				<td>CanvasLineTo.QUAD (or 'quadraticCurveTo')</td>	<td>requires TWO x-y values - <code>points: [x1, y1, x2, y2]</code></td>
			</tr>
			<tr>
				<td>CanvasLineTo.BEZIER (or 'bezierCurveTo')</td>	<td>requires THREE x-y values - <code>points: [x1, y1, x2, y2, x3, y3]</code></td>
			</tr>
		</table>
		<br>
		<b>EXAMPLES::</b><br>
		Adding a shape defined by lines with a screen blend, red fill, 10px black stroke<br>
		<codeblock>
			var _myShape = new CanvasPath({
				target: View.main.myCanvasDrawer,
				id: 'myLines',
				params: {
					x: 100,
					y: 100,
				},
				points: [
						{ fun: CanvasLineTo.MOVE, points: [.5, -3.5] }, 
						{ fun: CanvasLineTo.BEZIER, points: [-3.5, -2.8, -3, .2, -2.5, .2] }, 
						{ fun: CanvasLineTo.QUAD, points: [2, -3, .5, -3.5] }
				],
				blendMode: 'screen',
				fill: 'red',
				stroke: {
					fill: 'black',
					width: 10,
					cap: 'round'
				}
			});
		</codeblock>
*/

/**
	@memberof CanvasPath
	@const {string} id
		READ-ONLY: STRING representing the id of the element
*/

/**
	@memberof CanvasPath
	@var {number} x		
		NUMBER representing the horizontal position of the element,
*/

/**
	@memberof CanvasPath
	@var {number} y 		
		NUMBER representing the vertical position of the element,		
*/

/**
	@memberof CanvasPath
	@const {number} width
		READ-ONLY: NUMBER representing the approximate width of the text,		
*/

/**
	@memberof CanvasPath
	@const {number} height
		READ-ONLY: NUMBER representing the approximate height of the text,
*/

/**
	@memberof CanvasPath
	@var {number} rotation
		NUMBER representing the rotation, in degrees, of the element,
*/

/**
	@memberof CanvasPath
	@var {number} alpha
		NUMBER representing the opacity of the element,
*/

/**
	@memberof CanvasPath
	@var {number} scale
		NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY,
*/

/**
	@memberof CanvasPath
	@var {number} scaleX
		NUMBER representing the horizontal scale of the element,
*/

/**
	@memberof CanvasPath
	@var {number} scaleY
		NUMBER representing the vertical scale of the element,
*/

/**
	@memberof CanvasPath
	@var {number} blendMode
		NUMBER representing the blend or masking style applied to the element,
*/

/**
	@memberof CanvasPath
	@var {boolean} visible
		BOOLEAN representing whether or not the element should be drawn,
*/

/**
	@memberof CanvasPath
	@var {number} length
		NUMBER representing the approximate length of a path
*/

/**
	@memberof CanvasPath
	@var {string} transformOrigin
		STRING representing the origin from which to perform scales and rotations. Written as two values in a string with either a '%' or 'px' marker (ie '50% 50%' or '5px 100px').
		<br><br>
		<b>NOTE::</b>
		<ul>
			<li>'50% 50%' is centered, based on percentage.</li>
			<li>'50px 50px' is 50 px away from '0% 0%' vertically and horizontally.</li>
			<li>'50 50' is the same as '50px 50px'.</li>
			<li>Values can be mixed: '50% 10px', for instance.</li>
		</ul>
		<br><br>
	@example
		View.main.myCanvasDrawer.elements.smoke.transformOrigin = '50% 50%';
		View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10px 100px';
		View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10 100';
*/

/**
	@memberof CanvasPath
	@var {string} fill
		STRING, gradient, or texture representing the color used to fill the shape,
*/

/**
	@memberof CanvasPath
	@var {string} strokeFill
		STRING, gradient, or texture representing the color used to fill the shape's stroke,
*/

/**
	@memberof CanvasPath
	@var {number} strokeWidth
		NUMBER representing the width of the shape's outline,
*/

/**
	@memberof CanvasPath
	@var {string} strokeCap
		STRING representing how the two ends of a line form: 'butt', 'round', and 'square',
*/

/**
	@memberof CanvasPath
	@var {string} strokeJoin
		STRING representing how two lines/corners form: 'round', 'bevel', and 'miter',
*/

/**
	@memberof CanvasPath
	@var {string} strokePosition
		STRING repsenting the position of the shape's stroke, 'outer' or 'center'; there is no 'inner',
*/

/**
	@memberof CanvasPath
	@var {number} strokeDashSize
		NUMBER representing the length of each segment in a dashed line,
*/

/**
	@memberof CanvasPath
	@var {number} strokeDashGap
		NUMBER representing the gap between each segment in a dashed line,
*/

/**
	@memberof CanvasPath
	@var {number} strokeDashOffset
		NUMBER representing the offset positioning of the dash segments,
*/

/**
	@memberof CanvasPath
	@var {string} shadowColor
		STRING representing the color of the drop shadow in RGBA format,
*/

/**
	@memberof CanvasPath
	@var {number} shadowBlur
		NUMBER representing the amount of blur on the drop shadow,
*/

/**
	@memberof CanvasPath
	@var {number} shadowAngle
		NUMBER representing the angle, in degrees, of the drop shadow,
*/

/**
	@memberof CanvasPath
	@var {number} shadowDistance
		NUMBER representing the distance of the drop shadow from the element,
*/
import CanvasShape from './CanvasShape'
import { getDistance } from '@ff0000-ad-tech/ad-utils/lib/MathUtils.js'

class CanvasPath extends CanvasShape {
	constructor(pathObj) {
		pathObj.params = pathObj.params || {}
		pathObj.type = 'path'
		super(pathObj)
	}

	/* ------------------------------------------------
		Function used for creating a unique object / array to represent elements.drawArgs, which will be contain identical values of elements.args but be a unique object
			
		When values within elements.drawArgs are changed, elements.args values will not be affected
		CALLED ONLY FROM CanvasPath._setShapeParams();
		*/
	_setLineDrawArgs(index) {
		var CP = this
		if (index) {
			CP.drawArgs[index] = {
				fun: CP.args[index].fun,
				points: CP.args[index].points.slice()
			}
		} else {
			for (var i = 0; i < CP.args.length; i++) {
				CP.drawArgs[i] = {
					fun: CP.args[i].fun,
					points: CP.args[i].points.slice()
				}
			}
		}
	}
	_setShapeParams(args, pathObj) {
		var CP = this
		CP.width = 0
		CP.height = 0

		CP.args = args.points || args

		CP.drawArgs = CP.args.slice()

		CP._offsetX = 100000000
		CP._offsetY = 100000000

		var i
		var p
		for (i = 0; i < CP.args.length; i++) {
			for (p = 0; p < CP.args[i].points.length; p += 2) {
				CP.args[i].points[p] *= CP.drawScale
				CP.args[i].points[p + 1] *= CP.drawScale

				if (CP.args[i].points[p] < CP._offsetX) {
					CP._offsetX = CP.args[i].points[p]
				}
				if (CP.args[i].points[p] > CP.width) {
					CP.width = CP.args[i].points[p]
				}

				if (CP.args[i].points[p + 1] < CP._offsetY) {
					CP._offsetY = CP.args[i].points[p + 1]
				}
				if (CP.args[i].points[p + 1] > CP.height) {
					CP.height = CP.args[i].points[p + 1]
				}
			}
		}

		CP.width = CP.width - CP._offsetX
		CP.height = CP.height - CP._offsetY

		// this loop adjusts every point
		// origin will now be in center of shape rather than away from it
		for (i = 0; i < CP.args.length; i++) {
			for (p = 0; p < CP.args[i].points.length; p += 2) {
				CP.args[i].points[p] -= CP._offsetX + CP.width / 2
				CP.args[i].points[p + 1] -= CP._offsetY + CP.height / 2
			}
			CP._setLineDrawArgs(i)
		}

		CP.x = pathObj.params.x >= 0 || pathObj.params.x <= 0 ? pathObj.params.x : CP._offsetX + CP.width / 2
		CP.y = pathObj.params.y >= 0 || pathObj.params.y <= 0 ? pathObj.params.y : CP._offsetY + CP.height / 2
	}

	_prepDrawing(translation) {
		let CP = this
		let i, p, _args
		for (i = 0; i < CP.args.length; i++) {
			_args = CP.drawArgs[i]
			for (p = 0; p < CP.args[i].points.length; p += 2) {
				if (translation) {
					_args.points[p] = (CP.args[i].points[p] - CP._offsetX) * CP.stage.qualityScale
					_args.points[p + 1] = (CP.args[i].points[p + 1] - CP._offsetY) * CP.stage.qualityScale
				} else {
					_args.points[p] = (CP.args[i].points[p] + CP.x) * CP.stage.qualityScale
					_args.points[p + 1] = (CP.args[i].points[p + 1] + CP.y) * CP.stage.qualityScale
				}
			}
		}

		if (CP.length === undefined) {
			let _length = 0
			let _lengthPoints = []
			for (i = 0; i < CP.drawArgs.length; i++) {
				_args = CP.drawArgs[i]
				CP.stage.ctx[_args.fun].apply(CP.stage.ctx, _args.points)
				let _points = CP.args[i].points
				for (p = 0; p < _points.length; p += 2) {
					// _length += getDistance()
					_lengthPoints.push([_points[p], _points[p + 1]])
				}
			}

			for (i = 0; i < _lengthPoints.length; i++) {
				if (_lengthPoints[i + 1]) {
					let extra = getDistance(_lengthPoints[i][0], _lengthPoints[i][1], _lengthPoints[i + 1][0], _lengthPoints[i + 1][1])
					_length += extra
				}
			}
			CP.length = _length
		} else {
			for (i = 0; i < CP.drawArgs.length; i++) CP.stage.ctx[CP.drawArgs[i].fun].apply(CP.stage.ctx, CP.drawArgs[i].points)
		}

		// Debugging - shows center of line-based shape
		// CP.stage.ctx.beginPath();
		// CP.stage.ctx.fillStyle = 'cyan';
		// if (translation) CP.stage.ctx.arc(0, 0, 5, 0, 2 * Math.PI);
		// else CP.stage.ctx.arc(CP.x + CP._offsetX, CP.y + CP._offsetY, 5, 0, 2 * Math.PI);
		// CP.stage.ctx.fill();
	}
}

export default CanvasPath
