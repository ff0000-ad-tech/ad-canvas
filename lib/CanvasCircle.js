/**
	@npmpackage
	@class CanvasCircle
	@param {object} circObj
		an object containing the arguments for defining / orienting the circle, see Properties for more information
	@property {CanvasDrawer} target
		the CanvasDrawer element in which to draw the circle.
	@property {string} id
		an optional STRING defining the name by which the circle will be referenced. Defaults to 'canvasdItemX' where X = the number of elements in a CanvasDrawer.
	
	@property {object} params
		an object with the following properites:
		@property {number} params.x
			NUMBER X coordinate for where to draw the image data
		@property {number} params.y
			NUMBER Y coordinate for where to draw the image data
		@property {number} params.radius
			NUMBER for the radius of the circle
		@property {number} params.width
			NUMBER for the width (diameter) of the circle. Overrides radius
		@property {number} params.startRad
			NUMBER IN RADIANS for starting angle of circle's arc
		@property {number} params.endRad
			NUMBER IN RADIANS for ending angle of circle's arc
		@property {number} params.startAngle
			NUMBER IN DEGREES for starting angle of circle's arc (overrides startRad)
		@property {number} params.endAngle
			NUMBER IN DEGREES for ending angle of circle's arc (overrides endRad)
		@property {number} params.scale
			NUMBER for uniform scale of the drawing, scaling from drawing center unless transformOrigin is changed. Will compound with but not change values of scaleX or scaleY.
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
		@property {number} dropShadow
			an optional OBJECT defining properties of the circle's drop shadow
			@property {number} dropShadow.angle
				NUMBER IN DEGREES for the angle to position the shadow
			@property {number} dropShadow.distance
				NUMBER for how far away from the circle the shadow is
			@property {number} dropShadow.blur
				NUMBER for how blurry the shadow is
			@property {string|object} dropShadow.color
				optional color of shadow as either a HEX STRING :"#ff0000", 
				RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
				or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to '#000000'
			@property {number} dropShadow.alpha
				NUMBER for the alpha of the shadow. Defaults to 1, overrides the alpha of an RGBA color.
	@property {string|CanvasBlendMode} blendMode
		an optional STRING for the globalCompositeOperation - controls overlays, screens, multiply, masking, etc. Defaults to 'source-over'.
	@property {string|CanvasTexture} fill
		an optional STRING or gradiant variable defining the color fill of the circle. Defaults to none / invisible.
	@property {string} stroke
		an optional OBJECT defining properties of the circle's stroke
		@property {string|CanvasTexture} stroke.fill
			an optional STRING or gradiant variable defining the color fill of the circle stroke. Defaults to  none / invisible.
		@property {number} stroke.width
			an optional NUMBER value determining stroke width. Defaults to 0.
		@property {string} stroke.position
			an optional STRING determining if the stroke will be 'outer' or 'center'. Defaults to 'outer', there is no 'inner'.
		@property {string} stroke.cap
			an optional STRING value determining a line's cap style: 'butt', 'round', and 'square'. Defaults to 'butt'.
			<br>
			<img src="../docs_images/canvasdrawer/lineCap.jpg" />
			<br>
		@property {string} stroke.join
			an optional STRING value determining how two lines/corners connect: 'round', 'bevel', and 'miter'. Defaults to 'miter'.
			<br>
			<img src="../docs_images/canvasdrawer/lineJoin.jpg" />
			<br>
		@property {number} stroke.dashSize
			an optional NUMBER value determining the length of each segment in a dashed line.
		@property {number} stroke.dashGap
			an optional NUMBER value determining the gap between each segment in a dashed line. Defaults to 0, unless dashSize is defined, then defaults to dashSize.
		@property {number} stroke.dashOffset
			an optional NUMBER value which offsets the positioning of the dash segments. A positive number moves them counter-clockwise. Defaults to 0.
	@property {boolean} closePath
			an optional BOOLEAN which, on instantiation, determines if the path should be closed or not. Defaults to true; set to <b>false</b> if you don't want the first and last points connecting.
	@property {string} visible
		an optional BOOLEAN that, when set to false, will not render the element. Defaults to true.
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasCircle } from 'ad-canvas'
		</codeblock>
		<br><br>
		
		Add a circle shape to a {@link CanvasDrawer} based on a given object, and return a reference to that shape.
		<br><br>
	
		<b>Sample 1</b><br>
		Adding an semi-circle arc with a red fill and no lines::<br>
		<codeblock>
			var _myShape = new CanvasCircle({
				target: View.main.myCanvasDrawer,
				id: 'myCircle', 
				params: {
					x: 150,
					y: 125,
					radius: 100,
					startRad: MathUtils.toRadians(0),
					endRad: MathUtils.toRadians(180)
				},
				fill: 'red'
			});
		</codeblock>
		<br><br>
		<b>Sample 2</b><br>
		adding the same circle using WIDTH and DEGREES instead of RADIUS and RADIANS::<br>
		<codeblock>
			var _myShape = new CanvasCircle({
				target: View.main.myCanvasDrawer,
				id: 'myCircle', 
				params: {
					x:150, 
					y:125, 
					width:200, 
					startAngle:0, 
					endAngle:180 
				}, 
				fill: 'red'
			});
		</codeblock>
		<br><br>
*/

/**
	@memberof CanvasCircle
	@const {string} id
		READ-ONLY: STRING representing the id of the element
*/

/**
	@memberof CanvasCircle
	@var {number} x
		NUMBER representing the horizontal position of the element
*/

/**
	@memberof CanvasCircle
	@var {number} y
		NUMBER representing the vertical position of the element
*/

/**
	@memberof CanvasCircle
	@var {number} width
		NUMBER representing the total width or diameter of the element
*/

/**
	@memberof CanvasCircle
	@var {number} radius
		NUMBER representing the radius of the element,
*/

/**
	@memberof CanvasCircle
	@var {number} rotation
		NUMBER representing the rotation, in degrees, of the element
*/

/**
	@memberof CanvasCircle
	@var {number} alpha
		NUMBER representing the opacity of the element
*/

/**
	@memberof CanvasCircle
	@var {number} scale
		NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY
*/

/**
	@memberof CanvasCircle
	@var {number} scaleX
		NUMBER representing the horizontal scale of the element
*/

/**
	@memberof CanvasCircle
	@var {number} scaleY
		NUMBER representing the vertical scale of the element
*/

/**
	@memberof CanvasCircle
	@var {number} blendMode
		NUMBER representing the blend or masking style applied to the element
*/

/**
	@memberof CanvasCircle
	@var {boolean} visible
		BOOLEAN representing whether or not the element should be drawn,
*/

/**
	@memberof CanvasCircle
	@var {string} transformOrigin
		STRING representing the origin from which to perform scales and rotations. Written as two values in a string with either a '%' or 'px' marker (ie '50% 50%' or '5px 100px').
		<br><br>
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
	@memberof CanvasCircle
	@var {string} fill
		STRING, gradient, or texture representing the color used to fill the shape
*/

/**
	@memberof CanvasCircle
	@var {string} strokeFill
		STRING, gradient, or texture representing the color used to fill the shape's stroke
*/

/**
	@memberof CanvasCircle
	@var {number} strokeWidth
		NUMBER representing the width of the shape's outline
*/

/**
	@memberof CanvasCircle
	@var {string} strokeCap
		STRING representing how the two ends of a line form: 'butt', 'round', and 'square',
*/

/**
	@memberof CanvasCircle
	@var {string} strokeJoin
		STRING representing how two lines/corners form: 'round', 'bevel', and 'miter'
*/

/**
	@memberof CanvasCircle
	@var {string} strokePosition
		STRING repsenting the position of the shape's stroke, 'outer' or 'center'; there is no 'inner'
*/

/**
	@memberof CanvasCircle
	@var {number} strokeDashSize
		NUMBER representing the length of each segment in a dashed line
*/

/**
	@memberof CanvasCircle
	@var {number} strokeDashGap
		NUMBER representing the gap between each segment in a dashed line
*/

/**
	@memberof CanvasCircle
	@var {number} strokeDashOffset
		NUMBER representing the offset positioning of the dash segments
*/

/**
	@memberof CanvasCircle
	@var {string} shadowColor
		STRING representing the color of the drop shadow in RGBA format
*/

/**
	@memberof CanvasCircle
	@var {number} shadowBlur
		NUMBER representing the amount of blur on the drop shadow
*/

/**
	@memberof CanvasCircle
	@var {number} shadowAngle
		NUMBER representing the angle, in degrees, of the drop shadow
*/

/**
	@memberof CanvasCircle
	@var {number} shadowDistance
		NUMBER representing the distance of the drop shadow from the element
*/
import CanvasShape from './CanvasShape'
import { MathUtils } from 'ad-utils'

class CanvasCircle extends CanvasShape {
	constructor(circObj) {
		circObj.type = 'arc'
		super(circObj)
	}

	get startAngle() {
		return MathUtils.toDegrees(this.args[3])
	}
	set startAngle(value) {
		this.args[3] = MathUtils.toRadians(value)
	}

	get endAngle() {
		return MathUtils.toDegrees(this.args[4])
	}
	set endAngle(value) {
		this.args[4] = MathUtils.toRadians(value)
	}

	get startRad() {
		return this.args[3]
	}
	set startRad(value) {
		this.args[3] = value
	}

	get endRad() {
		return this.args[4]
	}
	set endRad(value) {
		this.args[4] = value
	}

	_setShapeParams(args) {
		const CC = this
		CC.x = args[0]
		CC.y = args[1]
		CC.width = CC.height = args[2] * 2
	}

	_prepDrawing(translation) {
		const CC = this
		if (translation) {
			CC.args[0] = -CC._offsetX * CC.stage.qualityScale
			CC.args[1] = -CC._offsetY * CC.stage.qualityScale
		} else {
			CC.args[0] = CC.x * CC.stage.qualityScale
			CC.args[1] = CC.y * CC.stage.qualityScale
		}

		CC.args[2] = CC.width / 2 * CC.stage.qualityScale

		// arCC can't have negative radius, so this prevents that from happening
		if (CC.args[2] < 0) CC.args[2] = 0

		CC.stage.ctx.arc.apply(CC.stage.ctx, CC.args)
	}
}

export default CanvasCircle
