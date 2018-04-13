/**
	@npmpackage
	@class CanvasRect
	@param {object} rectObj
		an object containing the arguments for defining / orienting the rectangle, see Properties for more info:
	@property {CanvasDrawer} target
		the {@link CanvasDrawer} element in which to draw the rectangle
	@property {string} id
		an optional STRING defining the name by which the rectangle will be referenced. Defaults to 'canvasdItemX' where X = the number of elements in a {@link CanvasDrawer}.
	@property {object} params
		an object with the following properties:
		@property {number} params.x
			NUMBER X coordinate for where to draw the image data
		@property {number} params.y
			NUMBER Y coordinate for where to draw the image data
		@property {number} params.width
			NUMBER for the width of the rectangle. Default to height value
		@property {number} params.height
			NUMBER for the height of the rectangle. Defaults to width value
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
		@property {object} dropShadow
			an optional OBJECT defining properties of the rectangle's drop shadow
			@property {number} dropShadow.angle
				NUMBER IN DEGREES for the angle to position the shadow
			@property {number} dropShadow.distance
				NUMBER for how far away from the rectangle the shadow is
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
	@property {string|CanvasTexture} fill
		an optional STRING or gradiant variable defining the color fill of the rectangle. Defaults to none / invisible
	@property {object} stroke
		an optional OBJECT defining properties of the rectangle's stroke
		@property {string|CanvasTexture} stroke.fill
			an optional STRING or gradiant variable defining the color fill of the rectangle stroke. Defaults to  none / invisible
		@property {string} stroke.width
			an optional NUMBER value determining stroke width. Defaults to 0
		@property {string} stroke.position
			an optional STRING determining if the stroke will be 'outer' or 'center'. Defaults to 'outer', there is no 'inner'
		@property {string} stroke.cap
			an optional STRING value determining a line's cap style: 'butt', 'round', and 'square'. Defaults to 'butt'
			<br>
			<img src="../docs_images/canvasdrawer/lineCap.jpg" />
			<br>
		@property {string} stroke.join
			an optional STRING value determining how two lines/corners connect: 'round', 'bevel', and 'miter'. Defaults to 'miter'
			<br>
			<img src="../docs_images/canvasdrawer/lineJoin.jpg" />
			<br>
		@property {number} stroke.dashSize
			an optional NUMBER value determining the length of each segment in a dashed line
		@property {number} stroke.dashGap
			an optional NUMBER value determining the gap between each segment in a dashed line. Defaults to 0, unless dashSize is defined, then defaults to dashSize
		@property {number} stroke.dashOffset
			an optional NUMBER value which offsets the positioning of the dash segments. A positive number moves them counter-clockwise. Defaults to 0
	@property {boolean} visible
		an optional BOOLEAN that, when set to false, will not render the element. Defaults to true
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasRect } from 'ad-canvas'
		</codeblock>
		<br><br>
		
		Add a rectangle shape to a {@link CanvasDrawer} based on a given object, and return a reference to that shape.
		<br><br>
		<b>EXAMPLE::</b><br>
		Adding a rectangle with an overlay blend, blue fill, 5px yellow stroke<br>
		<codeblock>
			var _myShape = new CanvasRect({
				target: View.main.myCanvasDrawer,
				id: 'myRect',
				params: {
					x: 20,
					y: 20,
					width: 100,
					height: 100
				},
				blendMode: 'overlay',
				fill: 'blue',
				stroke: {
					fill: 'yellow',
					width: 5
				}
			});
		</codeblock>
		<br>
*/

/**
	@memberof CanvasRect
	@const {string} id
		READ-ONLY: STRING representing the id of the element
*/

/**
	@memberof CanvasRect
	@var {number} x		
		NUMBER representing the horizontal position of the element
*/

/**
	@memberof CanvasRect
	@var {number} left
				NUMBER representing a reference to the x property,
*/

/**
	@memberof CanvasRect
	@var {number} y 		
				NUMBER representing the vertical position of the element,
*/

/**
	@memberof CanvasRect
	@var {number} top
				NUMBER representing a reference to the y property,
*/

/**
	@memberof CanvasRect
	@var {number} width
				NUMBER representing the total width of the element,
*/

/**
	@memberof CanvasRect
	@var {number} height
				NUMBER representing the total height of the element,
*/

/**
	@memberof CanvasRect
	@var {number} rotation
				NUMBER representing the rotation, in degrees, of the element,
*/

/**
	@memberof CanvasRect
	@var {number} alpha
				NUMBER representing the opacity of the element,
*/

/**
	@memberof CanvasRect
	@var {number} opacity
				NUMBER representing a reference to the alpha property,
*/

/**
	@memberof CanvasRect
	@var {number} scale
				NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY,
*/

/**
	@memberof CanvasRect
	@var {number} scaleX
				NUMBER representing the horizontal scale of the element,
*/

/**
	@memberof CanvasRect
	@var {number} scaleY
				NUMBER representing the vertical scale of the element,
*/

/**
	@memberof CanvasRect
	@var {number} blendMode
				NUMBER representing the blend or masking style applied to the element,
*/

/**
	@memberof CanvasRect
	@var {number} visible
				BOOLEAN representing whether or not the element should be drawn,
*/

/**
	@memberof CanvasRect
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
	@memberof CanvasRect
	@var {string} fill
		STRING, gradient, or texture representing the color used to fill the shape,
*/

/**
	@memberof CanvasRect
	@var {string} strokeFill
		STRING, gradient, or texture representing the color used to fill the shape's stroke,
*/

/**
	@memberof CanvasRect
	@var {number} strokeWidth
		NUMBER representing the width of the shape's outline,
*/

/**
	@memberof CanvasRect
	@var {string} strokeCap
		STRING representing how the two ends of a line form: 'butt', 'round', and 'square',
*/

/**
	@memberof CanvasRect
	@var {string} strokeJoin
		STRING representing how two lines/corners form: 'round', 'bevel', and 'miter',
*/

/**
	@memberof CanvasRect
	@var {string} strokePosition
		STRING repsenting the position of the shape's stroke, 'outer' or 'center'; there is no 'inner',
*/

/**
	@memberof CanvasRect
	@var {number} strokeDashSize
				NUMBER representing the length of each segment in a dashed line,
*/

/**
	@memberof CanvasRect
	@var {number} strokeDashGap
		NUMBER representing the gap between each segment in a dashed line,
*/

/**
	@memberof CanvasRect
	@var {number} strokeDashOffset
		NUMBER representing the offset positioning of the dash segments,
*/

/**
	@memberof CanvasRect
	@var {string} shadowColor
		STRING representing the color of the drop shadow in RGBA format,
*/

/**
	@memberof CanvasRect
	@var {number} shadowBlur
		NUMBER representing the amount of blur on the drop shadow,
*/

/**
	@memberof CanvasRect
	@var {number} shadowAngle
		NUMBER representing the angle, in degrees, of the drop shadow,
*/

/**
	@memberof CanvasRect
	@var {number} shadowDistance
		NUMBER representing the distance of the drop shadow from the element,
*/
import CanvasShape from './CanvasShape'

class CanvasRect extends CanvasShape {
	constructor(rectObj) {
		rectObj.type = 'rect'
		super(rectObj)
	}

	_setShapeParams(args) {
		var CR = this
		CR.x = args[0]
		CR.y = args[1]
		CR.width = args[2]
		CR.height = args[3]
	}

	_prepDrawing(translation) {
		var CR = this
		if (translation) {
			CR.args[0] = -CR._offsetX * CR.stage.qualityScale
			CR.args[1] = -CR._offsetY * CR.stage.qualityScale
		} else {
			CR.args[0] = CR.x * CR.stage.qualityScale
			CR.args[1] = CR.y * CR.stage.qualityScale
		}

		CR.args[2] = CR.width * CR.stage.qualityScale
		CR.args[3] = CR.height * CR.stage.qualityScale

		CR.stage.ctx.rect.apply(CR.stage.ctx, CR.args)
	}
}

export default CanvasRect
