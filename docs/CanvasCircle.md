<a name="CanvasCircle"></a>

## CanvasCircle
**Kind**: global class  
**Npmpackage**:   
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) | the CanvasDrawer element in which to draw the circle. |
| id | <code>string</code> | an optional STRING defining the name by which the circle will be referenced. Defaults to 'canvasdItemX' where X = the number of elements in a CanvasDrawer. |
| params | <code>object</code> | an object with the following properites: |
| params.x | <code>number</code> | NUMBER X coordinate for where to draw the image data |
| params.y | <code>number</code> | NUMBER Y coordinate for where to draw the image data |
| params.radius | <code>number</code> | NUMBER for the radius of the circle |
| params.width | <code>number</code> | NUMBER for the width (diameter) of the circle. Overrides radius |
| params.startRad | <code>number</code> | NUMBER IN RADIANS for starting angle of circle's arc |
| params.endRad | <code>number</code> | NUMBER IN RADIANS for ending angle of circle's arc |
| params.startAngle | <code>number</code> | NUMBER IN DEGREES for starting angle of circle's arc (overrides startRad) |
| params.endAngle | <code>number</code> | NUMBER IN DEGREES for ending angle of circle's arc (overrides endRad) |
| params.scale | <code>number</code> | NUMBER for uniform scale of the drawing, scaling from drawing center unless transformOrigin is changed. Will compound with but not change values of scaleX or scaleY. |
| params.scaleX | <code>number</code> | NUMBER for X scale of the drawing, scaling from drawing center unless transformOrigin is changed |
| params.scaleY | <code>number</code> | NUMBER for Y scale of the drawing, scaling from drawing center unless transformOrigin is changed |
| params.rotation | <code>number</code> | NUMBER IN DEGREES for the start rotation of the given drawing |
| params.transformOrigin | <code>string</code> | an optional STRING defining an element's origin for scale and rotation, written as two values in a string with either a '%' or 'px' marker. Defaults to '50% 50%'. |
| params.alpha | <code>number</code> | NUMBER for alpha of the drawing |
| dropShadow | <code>number</code> | an optional OBJECT defining properties of the circle's drop shadow |
| dropShadow.angle | <code>number</code> | NUMBER IN DEGREES for the angle to position the shadow |
| dropShadow.distance | <code>number</code> | NUMBER for how far away from the circle the shadow is |
| dropShadow.blur | <code>number</code> | NUMBER for how blurry the shadow is |
| dropShadow.color | <code>string</code> \| <code>object</code> | optional color of shadow as either a HEX STRING :"#ff0000",  			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)",  			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to '#000000' |
| dropShadow.alpha | <code>number</code> | NUMBER for the alpha of the shadow. Defaults to 1, overrides the alpha of an RGBA color. |
| blendMode | <code>string</code> \| [<code>CanvasBlendMode</code>](#CanvasBlendMode) | an optional STRING for the globalCompositeOperation - controls overlays, screens, multiply, masking, etc. Defaults to 'source-over'. |
| fill | <code>string</code> \| [<code>CanvasTexture</code>](#CanvasTexture) | an optional STRING or gradiant variable defining the color fill of the circle. Defaults to none / invisible. |
| stroke | <code>string</code> | an optional OBJECT defining properties of the circle's stroke |
| stroke.fill | <code>string</code> \| [<code>CanvasTexture</code>](#CanvasTexture) | an optional STRING or gradiant variable defining the color fill of the circle stroke. Defaults to  none / invisible. |
| stroke.width | <code>number</code> | an optional NUMBER value determining stroke width. Defaults to 0. |
| stroke.position | <code>string</code> | an optional STRING determining if the stroke will be 'outer' or 'center'. Defaults to 'outer', there is no 'inner'. |
| stroke.cap | <code>string</code> | an optional STRING value determining a line's cap style: 'butt', 'round', and 'square'. Defaults to 'butt'. 		<br> 		<img src="../docs_images/canvasdrawer/lineCap.jpg" /> 		<br> |
| stroke.join | <code>string</code> | an optional STRING value determining how two lines/corners connect: 'round', 'bevel', and 'miter'. Defaults to 'miter'. 		<br> 		<img src="../docs_images/canvasdrawer/lineJoin.jpg" /> 		<br> |
| stroke.dashSize | <code>number</code> | an optional NUMBER value determining the length of each segment in a dashed line. |
| stroke.dashGap | <code>number</code> | an optional NUMBER value determining the gap between each segment in a dashed line. Defaults to 0, unless dashSize is defined, then defaults to dashSize. |
| stroke.dashOffset | <code>number</code> | an optional NUMBER value which offsets the positioning of the dash segments. A positive number moves them counter-clockwise. Defaults to 0. |
| closePath | <code>boolean</code> | an optional BOOLEAN which, on instantiation, determines if the path should be closed or not. Defaults to true; set to <b>false</b> if you don't want the first and last points connecting. |
| visible | <code>string</code> | an optional BOOLEAN that, when set to false, will not render the element. Defaults to true. |


* [CanvasCircle](#CanvasCircle)
    * [new CanvasCircle(circObj)](#new_CanvasCircle_new)
    * [.x](#CanvasCircle.x) : <code>number</code>
    * [.y](#CanvasCircle.y) : <code>number</code>
    * [.width](#CanvasCircle.width) : <code>number</code>
    * [.radius](#CanvasCircle.radius) : <code>number</code>
    * [.rotation](#CanvasCircle.rotation) : <code>number</code>
    * [.alpha](#CanvasCircle.alpha) : <code>number</code>
    * [.scale](#CanvasCircle.scale) : <code>number</code>
    * [.scaleX](#CanvasCircle.scaleX) : <code>number</code>
    * [.scaleY](#CanvasCircle.scaleY) : <code>number</code>
    * [.blendMode](#CanvasCircle.blendMode) : <code>number</code>
    * [.visible](#CanvasCircle.visible) : <code>boolean</code>
    * [.transformOrigin](#CanvasCircle.transformOrigin) : <code>string</code>
    * [.fill](#CanvasCircle.fill) : <code>string</code>
    * [.strokeFill](#CanvasCircle.strokeFill) : <code>string</code>
    * [.strokeWidth](#CanvasCircle.strokeWidth) : <code>number</code>
    * [.strokeCap](#CanvasCircle.strokeCap) : <code>string</code>
    * [.strokeJoin](#CanvasCircle.strokeJoin) : <code>string</code>
    * [.strokePosition](#CanvasCircle.strokePosition) : <code>string</code>
    * [.strokeDashSize](#CanvasCircle.strokeDashSize) : <code>number</code>
    * [.strokeDashGap](#CanvasCircle.strokeDashGap) : <code>number</code>
    * [.strokeDashOffset](#CanvasCircle.strokeDashOffset) : <code>number</code>
    * [.shadowColor](#CanvasCircle.shadowColor) : <code>string</code>
    * [.shadowBlur](#CanvasCircle.shadowBlur) : <code>number</code>
    * [.shadowAngle](#CanvasCircle.shadowAngle) : <code>number</code>
    * [.shadowDistance](#CanvasCircle.shadowDistance) : <code>number</code>
    * [.id](#CanvasCircle.id) : <code>string</code>

<a name="new_CanvasCircle_new"></a>

### new CanvasCircle(circObj)
Add a circle shape to a [CanvasDrawer](#CanvasDrawer) based on a given object, and return a reference to that shape.<br><br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
<pre class="sunlight-highlight-javascript">
import { CanvasCircle } from 'ad-canvas'
</pre>
<br><br> 
<b>Sample 1</b><br>
Adding an semi-circle arc with a red fill and no lines::<br>
<pre class="sunlight-highlight-javascript">
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
</pre>
<br><br>
<b>Sample 2</b><br>
adding the same circle using WIDTH and DEGREES instead of RADIUS and RADIANS::<br>
<pre class="sunlight-highlight-javascript">
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
})
</pre>


| Param | Type | Description |
| --- | --- | --- |
| circObj | <code>object</code> | an object containing the arguments for defining / orienting the circle, see Properties for more information |

<a name="CanvasCircle.x"></a>

### CanvasCircle.x : <code>number</code>
NUMBER representing the horizontal position of the element

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.y"></a>

### CanvasCircle.y : <code>number</code>
NUMBER representing the vertical position of the element

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.width"></a>

### CanvasCircle.width : <code>number</code>
NUMBER representing the total width or diameter of the element

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.radius"></a>

### CanvasCircle.radius : <code>number</code>
NUMBER representing the radius of the element,

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.rotation"></a>

### CanvasCircle.rotation : <code>number</code>
NUMBER representing the rotation, in degrees, of the element

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.alpha"></a>

### CanvasCircle.alpha : <code>number</code>
NUMBER representing the opacity of the element

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.scale"></a>

### CanvasCircle.scale : <code>number</code>
NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.scaleX"></a>

### CanvasCircle.scaleX : <code>number</code>
NUMBER representing the horizontal scale of the element

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.scaleY"></a>

### CanvasCircle.scaleY : <code>number</code>
NUMBER representing the vertical scale of the element

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.blendMode"></a>

### CanvasCircle.blendMode : <code>number</code>
NUMBER representing the blend or masking style applied to the element

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.visible"></a>

### CanvasCircle.visible : <code>boolean</code>
BOOLEAN representing whether or not the element should be drawn,

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.transformOrigin"></a>

### CanvasCircle.transformOrigin : <code>string</code>
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
<pre class="sunlight-highlight-javascript">
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '50% 50%';
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10px 100px';
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10 100';
</pre>

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.fill"></a>

### CanvasCircle.fill : <code>string</code>
STRING, gradient, or texture representing the color used to fill the shape

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.strokeFill"></a>

### CanvasCircle.strokeFill : <code>string</code>
STRING, gradient, or texture representing the color used to fill the shape's stroke

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.strokeWidth"></a>

### CanvasCircle.strokeWidth : <code>number</code>
NUMBER representing the width of the shape's outline

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.strokeCap"></a>

### CanvasCircle.strokeCap : <code>string</code>
STRING representing how the two ends of a line form: 'butt', 'round', and 'square',

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.strokeJoin"></a>

### CanvasCircle.strokeJoin : <code>string</code>
STRING representing how two lines/corners form: 'round', 'bevel', and 'miter'

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.strokePosition"></a>

### CanvasCircle.strokePosition : <code>string</code>
STRING repsenting the position of the shape's stroke, 'outer' or 'center'; there is no 'inner'

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.strokeDashSize"></a>

### CanvasCircle.strokeDashSize : <code>number</code>
NUMBER representing the length of each segment in a dashed line

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.strokeDashGap"></a>

### CanvasCircle.strokeDashGap : <code>number</code>
NUMBER representing the gap between each segment in a dashed line

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.strokeDashOffset"></a>

### CanvasCircle.strokeDashOffset : <code>number</code>
NUMBER representing the offset positioning of the dash segments

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.shadowColor"></a>

### CanvasCircle.shadowColor : <code>string</code>
STRING representing the color of the drop shadow in RGBA format

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.shadowBlur"></a>

### CanvasCircle.shadowBlur : <code>number</code>
NUMBER representing the amount of blur on the drop shadow

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.shadowAngle"></a>

### CanvasCircle.shadowAngle : <code>number</code>
NUMBER representing the angle, in degrees, of the drop shadow

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.shadowDistance"></a>

### CanvasCircle.shadowDistance : <code>number</code>
NUMBER representing the distance of the drop shadow from the element

**Kind**: static property of [<code>CanvasCircle</code>](#CanvasCircle)  
<a name="CanvasCircle.id"></a>

### CanvasCircle.id : <code>string</code>
READ-ONLY: STRING representing the id of the element

**Kind**: static constant of [<code>CanvasCircle</code>](#CanvasCircle)  
