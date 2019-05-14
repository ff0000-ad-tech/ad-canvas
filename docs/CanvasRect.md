<a name="CanvasRect"></a>

## CanvasRect
**Kind**: global class  
**Npmpackage**:   
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) | the [CanvasDrawer](#CanvasDrawer) element in which to draw the rectangle |
| id | <code>string</code> | an optional STRING defining the name by which the rectangle will be referenced. Defaults to 'canvasdItemX' where X = the number of elements in a [CanvasDrawer](#CanvasDrawer). |
| params | <code>object</code> | an object with the following properties: |
| params.x | <code>number</code> | NUMBER X coordinate for where to draw the image data |
| params.y | <code>number</code> | NUMBER Y coordinate for where to draw the image data |
| params.width | <code>number</code> | NUMBER for the width of the rectangle. Default to height value |
| params.height | <code>number</code> | NUMBER for the height of the rectangle. Defaults to width value |
| params.scale | <code>number</code> | NUMBER for uniform scale of the drawing, scaling from drawing center unless transformOrigin is changed. Will compound with but not change values of scaleX or scaleY |
| params.scaleX | <code>number</code> | NUMBER for X scale of the drawing, scaling from drawing center unless transformOrigin is changed |
| params.scaleY | <code>number</code> | NUMBER for Y scale of the drawing, scaling from drawing center unless transformOrigin is changed |
| params.rotation | <code>number</code> | NUMBER IN DEGREES for the start rotation of the given drawing |
| params.transformOrigin | <code>string</code> | an optional STRING defining an element's origin for scale and rotation, written as two values in a string with either a '%' or 'px' marker. Defaults to '50% 50%'. |
| params.alpha | <code>number</code> | NUMBER for alpha of the drawing |
| dropShadow | <code>object</code> | an optional OBJECT defining properties of the rectangle's drop shadow |
| dropShadow.angle | <code>number</code> | NUMBER IN DEGREES for the angle to position the shadow |
| dropShadow.distance | <code>number</code> | NUMBER for how far away from the rectangle the shadow is |
| dropShadow.blur | <code>number</code> | NUMBER for how blurry the shadow is |
| dropShadow.color | <code>string</code> \| <code>object</code> | optional color of shadow as either a HEX STRING :"#ff0000", 			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to '#000000' |
| dropShadow.alpha | <code>number</code> | NUMBER for the alpha of the shadow. Defaults to 1, overrides the alpha of an RGBA color |
| blendMode | <code>string</code> \| [<code>CanvasBlendMode</code>](#CanvasBlendMode) | an optional STRING for the globalCompositeOperation - controls overlays, screens, multiply, masking, etc. Defaults to 'source-over' |
| fill | <code>string</code> \| [<code>CanvasTexture</code>](#CanvasTexture) | an optional STRING or gradiant variable defining the color fill of the rectangle. Defaults to none / invisible |
| stroke | <code>object</code> | an optional OBJECT defining properties of the rectangle's stroke |
| stroke.fill | <code>string</code> \| [<code>CanvasTexture</code>](#CanvasTexture) | an optional STRING or gradiant variable defining the color fill of the rectangle stroke. Defaults to  none / invisible |
| stroke.width | <code>string</code> | an optional NUMBER value determining stroke width. Defaults to 0 |
| stroke.position | <code>string</code> | an optional STRING determining if the stroke will be 'outer' or 'center'. Defaults to 'outer', there is no 'inner' |
| stroke.cap | <code>string</code> | an optional STRING value determining a line's cap style: 'butt', 'round', and 'square'. Defaults to 'butt' 		<br> 		<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/lineCap.jpg" /> 		<br> |
| stroke.join | <code>string</code> | an optional STRING value determining how two lines/corners connect: 'round', 'bevel', and 'miter'. Defaults to 'miter' 		<br> 		<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/lineJoin.jpg" /> 		<br> |
| stroke.dashSize | <code>number</code> | an optional NUMBER value determining the length of each segment in a dashed line |
| stroke.dashGap | <code>number</code> | an optional NUMBER value determining the gap between each segment in a dashed line. Defaults to 0, unless dashSize is defined, then defaults to dashSize |
| stroke.dashOffset | <code>number</code> | an optional NUMBER value which offsets the positioning of the dash segments. A positive number moves them counter-clockwise. Defaults to 0 |
| visible | <code>boolean</code> | an optional BOOLEAN that, when set to false, will not render the element. Defaults to true |


* [CanvasRect](#CanvasRect)
    * [new CanvasRect(rectObj)](#new_CanvasRect_new)
    * [.x](#CanvasRect.x) : <code>number</code>
    * [.left](#CanvasRect.left) : <code>number</code>
    * [.y](#CanvasRect.y) : <code>number</code>
    * [.top](#CanvasRect.top) : <code>number</code>
    * [.width](#CanvasRect.width) : <code>number</code>
    * [.height](#CanvasRect.height) : <code>number</code>
    * [.rotation](#CanvasRect.rotation) : <code>number</code>
    * [.alpha](#CanvasRect.alpha) : <code>number</code>
    * [.opacity](#CanvasRect.opacity) : <code>number</code>
    * [.scale](#CanvasRect.scale) : <code>number</code>
    * [.scaleX](#CanvasRect.scaleX) : <code>number</code>
    * [.scaleY](#CanvasRect.scaleY) : <code>number</code>
    * [.blendMode](#CanvasRect.blendMode) : <code>number</code>
    * [.visible](#CanvasRect.visible) : <code>number</code>
    * [.transformOrigin](#CanvasRect.transformOrigin) : <code>string</code>
    * [.fill](#CanvasRect.fill) : <code>string</code>
    * [.strokeFill](#CanvasRect.strokeFill) : <code>string</code>
    * [.strokeWidth](#CanvasRect.strokeWidth) : <code>number</code>
    * [.strokeCap](#CanvasRect.strokeCap) : <code>string</code>
    * [.strokeJoin](#CanvasRect.strokeJoin) : <code>string</code>
    * [.strokePosition](#CanvasRect.strokePosition) : <code>string</code>
    * [.strokeDashSize](#CanvasRect.strokeDashSize) : <code>number</code>
    * [.strokeDashGap](#CanvasRect.strokeDashGap) : <code>number</code>
    * [.strokeDashOffset](#CanvasRect.strokeDashOffset) : <code>number</code>
    * [.shadowColor](#CanvasRect.shadowColor) : <code>string</code>
    * [.shadowBlur](#CanvasRect.shadowBlur) : <code>number</code>
    * [.shadowAngle](#CanvasRect.shadowAngle) : <code>number</code>
    * [.shadowDistance](#CanvasRect.shadowDistance) : <code>number</code>
    * [.id](#CanvasRect.id) : <code>string</code>

<a name="new_CanvasRect_new"></a>

### new CanvasRect(rectObj)
Add a rectangle shape to a [CanvasDrawer](#CanvasDrawer) based on a given object, and return a reference to that shape.
<pre class="sunlight-highlight-javascript">
import { CanvasRect } from 'ad-canvas'
</pre>
<br><br>
<b>EXAMPLE::</b><br>
Adding a rectangle with an overlay blend, blue fill, 5px yellow stroke<br>
<pre class="sunlight-highlight-javascript">
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
})
</pre>


| Param | Type | Description |
| --- | --- | --- |
| rectObj | <code>object</code> | an object containing the arguments for defining / orienting the rectangle, see Properties for more info: |

<a name="CanvasRect.x"></a>

### CanvasRect.x : <code>number</code>
NUMBER representing the horizontal position of the element

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.left"></a>

### CanvasRect.left : <code>number</code>
NUMBER representing a reference to the x property,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.y"></a>

### CanvasRect.y : <code>number</code>
NUMBER representing the vertical position of the element,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.top"></a>

### CanvasRect.top : <code>number</code>
NUMBER representing a reference to the y property,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.width"></a>

### CanvasRect.width : <code>number</code>
NUMBER representing the total width of the element,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.height"></a>

### CanvasRect.height : <code>number</code>
NUMBER representing the total height of the element,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.rotation"></a>

### CanvasRect.rotation : <code>number</code>
NUMBER representing the rotation, in degrees, of the element,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.alpha"></a>

### CanvasRect.alpha : <code>number</code>
NUMBER representing the opacity of the element,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.opacity"></a>

### CanvasRect.opacity : <code>number</code>
NUMBER representing a reference to the alpha property,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.scale"></a>

### CanvasRect.scale : <code>number</code>
NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.scaleX"></a>

### CanvasRect.scaleX : <code>number</code>
NUMBER representing the horizontal scale of the element,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.scaleY"></a>

### CanvasRect.scaleY : <code>number</code>
NUMBER representing the vertical scale of the element,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.blendMode"></a>

### CanvasRect.blendMode : <code>number</code>
NUMBER representing the blend or masking style applied to the element,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.visible"></a>

### CanvasRect.visible : <code>number</code>
BOOLEAN representing whether or not the element should be drawn,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.transformOrigin"></a>

### CanvasRect.transformOrigin : <code>string</code>
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
<pre class="sunlight-highlight-javascript">
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '50% 50%';
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10px 100px';
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10 100';
</pre>

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.fill"></a>

### CanvasRect.fill : <code>string</code>
STRING, gradient, or texture representing the color used to fill the shape,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.strokeFill"></a>

### CanvasRect.strokeFill : <code>string</code>
STRING, gradient, or texture representing the color used to fill the shape's stroke,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.strokeWidth"></a>

### CanvasRect.strokeWidth : <code>number</code>
NUMBER representing the width of the shape's outline,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.strokeCap"></a>

### CanvasRect.strokeCap : <code>string</code>
STRING representing how the two ends of a line form: 'butt', 'round', and 'square',

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.strokeJoin"></a>

### CanvasRect.strokeJoin : <code>string</code>
STRING representing how two lines/corners form: 'round', 'bevel', and 'miter',

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.strokePosition"></a>

### CanvasRect.strokePosition : <code>string</code>
STRING repsenting the position of the shape's stroke, 'outer' or 'center'; there is no 'inner',

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.strokeDashSize"></a>

### CanvasRect.strokeDashSize : <code>number</code>
NUMBER representing the length of each segment in a dashed line,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.strokeDashGap"></a>

### CanvasRect.strokeDashGap : <code>number</code>
NUMBER representing the gap between each segment in a dashed line,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.strokeDashOffset"></a>

### CanvasRect.strokeDashOffset : <code>number</code>
NUMBER representing the offset positioning of the dash segments,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.shadowColor"></a>

### CanvasRect.shadowColor : <code>string</code>
STRING representing the color of the drop shadow in RGBA format,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.shadowBlur"></a>

### CanvasRect.shadowBlur : <code>number</code>
NUMBER representing the amount of blur on the drop shadow,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.shadowAngle"></a>

### CanvasRect.shadowAngle : <code>number</code>
NUMBER representing the angle, in degrees, of the drop shadow,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.shadowDistance"></a>

### CanvasRect.shadowDistance : <code>number</code>
NUMBER representing the distance of the drop shadow from the element,

**Kind**: static property of [<code>CanvasRect</code>](#CanvasRect)  
<a name="CanvasRect.id"></a>

### CanvasRect.id : <code>string</code>
READ-ONLY: STRING representing the id of the element

**Kind**: static constant of [<code>CanvasRect</code>](#CanvasRect)  
