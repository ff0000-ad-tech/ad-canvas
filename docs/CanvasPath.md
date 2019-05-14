<a name="CanvasPath"></a>

## CanvasPath
**Kind**: global class  
**Npmpackage**:   
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) | the [CanvasDrawer](#CanvasDrawer) element in which to draw the shape |
| id | <code>string</code> | an optional STRING defining the name by which the path will be referenced. Defaults to 'canvasdItemX' where X = the number of elements in a [CanvasDrawer](#CanvasDrawer) |
| params | <code>object</code> | Object with the following properties: |
| params.x | <code>number</code> | NUMBER X coordinate for the shape's center point |
| params.y | <code>number</code> | NUMBER Y coordinate for shape's center point |
| params.scale | <code>number</code> | NUMBER for uniform scale of the drawing, scaling from drawing center unless transformOrigin is changed. Will compound with but not change values of scaleX or scaleY |
| params.scaleX | <code>number</code> | NUMBER for X scale of the drawing, scaling from drawing center unless transformOrigin is changed |
| params.scaleY | <code>number</code> | NUMBER for Y scale of the drawing, scaling from drawing center unless transformOrigin is changed |
| params.rotation | <code>number</code> | NUMBER IN DEGREES for the start rotation of the given drawing |
| params.transformOrigin | <code>string</code> | an optional STRING defining an element's origin for scale and rotation, written as two values in a string with either a '%' or 'px' marker. Defaults to '50% 50%'. |
| params.alpha | <code>number</code> | NUMBER for alpha of the drawing |
| points | <code>array</code> | ARRAY OF OBJECTS to define the point placement and draw type of the path. Each Point object has following signature: |
| points.point.fun | <code>function</code> | a reference to the [CanvasLineTo](#CanvasLineTo) function to use |
| points.point.points | <code>array</code> | Array contains whatever points the line function requires |
| dropShadow | <code>object</code> | an optional OBJECT defining properties of the shape's drop shadow |
| dropShadow.angle | <code>number</code> | NUMBER IN DEGREES for the angle to position the shadow |
| dropShadow.distance | <code>number</code> | NUMBER for how far away from the image the shadow is |
| dropShadow.blur | <code>number</code> | NUMBER for how blurry the shadow is |
| dropShadow.color | <code>string</code> \| <code>object</code> | optional color of shadow as either a HEX STRING :"#ff0000", 			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to '#000000' |
| dropShadow.alpha | <code>number</code> | NUMBER for the alpha of the shadow. Defaults to 1, overrides the alpha of an RGBA color |
| blendMode | <code>string</code> \| [<code>CanvasBlendMode</code>](#CanvasBlendMode) | an optional STRING for the globalCompositeOperation - controls overlays, screens, multiply, masking, etc. Defaults to 'source-over' |
| fill | <code>string</code> | an optional STRING or gradiant variable defining the color fill of the shape. Defaults to none / invisible |
| stroke | <code>object</code> | an optional OBJECT defining properties of the shape's stroke. Object has the following properties: |
| stroke.fill | <code>string</code> | an optional STRING or gradiant variable defining the color fill of the shape stroke. Defaults to  none / invisible |
| stroke.width | <code>number</code> | an optional NUMBER value determining stroke width. Defaults to 0 |
| stroke.position | <code>string</code> | an optional STRING determining if the stroke will be 'outer' or 'center'. Defaults to 'outer', there is no 'inner' |
| stroke.cap | <code>string</code> | an optional STRING value determining a line's cap style: 'butt', 'round', and 'square'. Defaults to 'butt' 			<br> 			<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/lineCap.jpg" /> |
| stroke.join | <code>string</code> | an optional STRING value determining how two lines/corners connect: 'round', 'bevel', and 'miter'. Defaults to 'miter' 			<br> 			<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/lineJoin.jpg" /> |
| stroke.dashSize | <code>number</code> | an optional NUMBER value determining the length of each segment in a dashed line |
| stroke.dashGap | <code>number</code> | an optional NUMBER value determining the gap between each segment in a dashed line. Defaults to 0, unless dashSize is defined, then defaults to dashSize |
| stroke.dashOffset | <code>number</code> | an optional NUMBER value which offsets the positioning of the dash segments. A positive number moves them counter-clockwise. Defaults to 0 |
| closePath | <code>boolean</code> | an optional BOOLEAN which, on instantiation, determines if the path should be closed or not. Defaults to true; set to <b>false</b> if you don't want the first and last points connecting. |
| drawScale | <code>number</code> | an optional NUMBER which does a one-time recalculation of the given points to a new scale. Usefull for changing a shape's size without a transform scale or recalculating points beforehand |
| visible | <code>boolean</code> | an optional BOOLEAN that, when set to false, will not render the element. Defaults to true. |


* [CanvasPath](#CanvasPath)
    * [new CanvasPath(pathObj)](#new_CanvasPath_new)
    * [.x](#CanvasPath.x) : <code>number</code>
    * [.y](#CanvasPath.y) : <code>number</code>
    * [.rotation](#CanvasPath.rotation) : <code>number</code>
    * [.alpha](#CanvasPath.alpha) : <code>number</code>
    * [.scale](#CanvasPath.scale) : <code>number</code>
    * [.scaleX](#CanvasPath.scaleX) : <code>number</code>
    * [.scaleY](#CanvasPath.scaleY) : <code>number</code>
    * [.blendMode](#CanvasPath.blendMode) : <code>number</code>
    * [.visible](#CanvasPath.visible) : <code>boolean</code>
    * [.length](#CanvasPath.length) : <code>number</code>
    * [.transformOrigin](#CanvasPath.transformOrigin) : <code>string</code>
    * [.fill](#CanvasPath.fill) : <code>string</code>
    * [.strokeFill](#CanvasPath.strokeFill) : <code>string</code>
    * [.strokeWidth](#CanvasPath.strokeWidth) : <code>number</code>
    * [.strokeCap](#CanvasPath.strokeCap) : <code>string</code>
    * [.strokeJoin](#CanvasPath.strokeJoin) : <code>string</code>
    * [.strokePosition](#CanvasPath.strokePosition) : <code>string</code>
    * [.strokeDashSize](#CanvasPath.strokeDashSize) : <code>number</code>
    * [.strokeDashGap](#CanvasPath.strokeDashGap) : <code>number</code>
    * [.strokeDashOffset](#CanvasPath.strokeDashOffset) : <code>number</code>
    * [.shadowColor](#CanvasPath.shadowColor) : <code>string</code>
    * [.shadowBlur](#CanvasPath.shadowBlur) : <code>number</code>
    * [.shadowAngle](#CanvasPath.shadowAngle) : <code>number</code>
    * [.shadowDistance](#CanvasPath.shadowDistance) : <code>number</code>
    * [.id](#CanvasPath.id) : <code>string</code>
    * [.width](#CanvasPath.width) : <code>number</code>
    * [.height](#CanvasPath.height) : <code>number</code>

<a name="new_CanvasPath_new"></a>

### new CanvasPath(pathObj)
Add a path shape to a [CanvasDrawer](#CanvasDrawer) based on a given object containing lines and coordinate data, and return a reference to that shape
<pre class="sunlight-highlight-javascript">
import { CanvasPath } from 'ad-canvas'
</pre>
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
<pre class="sunlight-highlight-javascript">
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
</pre>


| Param | Type | Description |
| --- | --- | --- |
| pathObj | <code>object</code> | an object containing the arguments for defining / orienting the circle, see Properties for more info: |

<a name="CanvasPath.x"></a>

### CanvasPath.x : <code>number</code>
NUMBER representing the horizontal position of the element,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.y"></a>

### CanvasPath.y : <code>number</code>
NUMBER representing the vertical position of the element,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.rotation"></a>

### CanvasPath.rotation : <code>number</code>
NUMBER representing the rotation, in degrees, of the element,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.alpha"></a>

### CanvasPath.alpha : <code>number</code>
NUMBER representing the opacity of the element,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.scale"></a>

### CanvasPath.scale : <code>number</code>
NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.scaleX"></a>

### CanvasPath.scaleX : <code>number</code>
NUMBER representing the horizontal scale of the element,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.scaleY"></a>

### CanvasPath.scaleY : <code>number</code>
NUMBER representing the vertical scale of the element,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.blendMode"></a>

### CanvasPath.blendMode : <code>number</code>
NUMBER representing the blend or masking style applied to the element,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.visible"></a>

### CanvasPath.visible : <code>boolean</code>
BOOLEAN representing whether or not the element should be drawn,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.length"></a>

### CanvasPath.length : <code>number</code>
NUMBER representing the approximate length of a path

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.transformOrigin"></a>

### CanvasPath.transformOrigin : <code>string</code>
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

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
**Example**  
```js
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '50% 50%';
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10px 100px';
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10 100';
```
<a name="CanvasPath.fill"></a>

### CanvasPath.fill : <code>string</code>
STRING, gradient, or texture representing the color used to fill the shape,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.strokeFill"></a>

### CanvasPath.strokeFill : <code>string</code>
STRING, gradient, or texture representing the color used to fill the shape's stroke,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.strokeWidth"></a>

### CanvasPath.strokeWidth : <code>number</code>
NUMBER representing the width of the shape's outline,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.strokeCap"></a>

### CanvasPath.strokeCap : <code>string</code>
STRING representing how the two ends of a line form: 'butt', 'round', and 'square',

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.strokeJoin"></a>

### CanvasPath.strokeJoin : <code>string</code>
STRING representing how two lines/corners form: 'round', 'bevel', and 'miter',

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.strokePosition"></a>

### CanvasPath.strokePosition : <code>string</code>
STRING repsenting the position of the shape's stroke, 'outer' or 'center'; there is no 'inner',

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.strokeDashSize"></a>

### CanvasPath.strokeDashSize : <code>number</code>
NUMBER representing the length of each segment in a dashed line,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.strokeDashGap"></a>

### CanvasPath.strokeDashGap : <code>number</code>
NUMBER representing the gap between each segment in a dashed line,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.strokeDashOffset"></a>

### CanvasPath.strokeDashOffset : <code>number</code>
NUMBER representing the offset positioning of the dash segments,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.shadowColor"></a>

### CanvasPath.shadowColor : <code>string</code>
STRING representing the color of the drop shadow in RGBA format,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.shadowBlur"></a>

### CanvasPath.shadowBlur : <code>number</code>
NUMBER representing the amount of blur on the drop shadow,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.shadowAngle"></a>

### CanvasPath.shadowAngle : <code>number</code>
NUMBER representing the angle, in degrees, of the drop shadow,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.shadowDistance"></a>

### CanvasPath.shadowDistance : <code>number</code>
NUMBER representing the distance of the drop shadow from the element,

**Kind**: static property of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.id"></a>

### CanvasPath.id : <code>string</code>
READ-ONLY: STRING representing the id of the element

**Kind**: static constant of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.width"></a>

### CanvasPath.width : <code>number</code>
READ-ONLY: NUMBER representing the approximate width of the text,

**Kind**: static constant of [<code>CanvasPath</code>](#CanvasPath)  
<a name="CanvasPath.height"></a>

### CanvasPath.height : <code>number</code>
READ-ONLY: NUMBER representing the approximate height of the text,

**Kind**: static constant of [<code>CanvasPath</code>](#CanvasPath)  
