<a name="CanvasText"></a>

## CanvasText
**Kind**: global class  
**Npmpackage**:   
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) | the CanvasDrawer element in which to draw the text |
| id | <code>string</code> | an optional STRING defining the name by which the text will be referenced. Defaults to 'canvasdItemX' where X = the number of 	elements in a [CanvasDrawer](#CanvasDrawer) |
| text | <code>string</code> | the string of text for the canvas textfield. Supports line breaks  <span><</span>br> |
| css | <code>object</code> | standard css object, see properties: |
| css.x | <code>number</code> | NUMBER X coordinate for where to draw the image data |
| css.y | <code>number</code> | NUMBER Y coordinate for where to draw the image data |
| css.fontSize | <code>number</code> \| <code>string</code> | NUMBER or STRING (12, '12', '12px', or '12pt') representing the font size |
| css.fontFamily | <code>string</code> | STRING defining the font name |
| css.alignText | <code>string</code> \| <code>Align</code> | STRING or Align constant defining text's horizontal alingment: 'center', 'left', or 'right'. Can also use Align.CENTER, Align.LEFT, or Align.RIGHT. |
| css.scale | <code>number</code> | NUMBER for uniform scale of the text, scaling from drawing center unless transformOrigin is changed. Will compound with but not change values of scaleX or scaleY |
| css.scaleX | <code>number</code> | NUMBER for X scale of the text, scaling from drawing center unless transformOrigin is changed |
| css.scaleY | <code>number</code> | NUMBER for Y scale of the text, scaling from drawing center unless transformOrigin is changed |
| css.rotation | <code>number</code> | NUMBER IN DEGREES for the start rotation of the text |
| css.transformOrigin | <code>string</code> | an optional STRING defining an element's origin for scale and rotation, written as two values in a string with either a '%' or 'px' marker. Defaults to '0% 0%' |
| css.alpha | <code>number</code> | NUMBER for alpha of the drawing |
| css.dropShadow | <code>object</code> | an optional OBJECT defining properties of the text's drop shadow, see following properties: |
| css.dropShadow.angle | <code>number</code> | NUMBER IN DEGREES for the angle to position the shadow |
| css.dropShadow.distance | <code>number</code> | NUMBER for how far away from the text the shadow is |
| css.dropShadow.blur | <code>number</code> | NUMBER for how blurry the shadow is |
| css.dropShadow.color | <code>string</code> \| <code>object</code> | optional color of shadow as either a HEX STRING :"#ff0000", 			RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 			or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to '#000000' |
| css.dropShadow.alpha | <code>number</code> | NUMBER for the alpha of the shadow. Defaults to 1, overrides the alpha of an RGBA color |
| offsetX | <code>number</code> | NUMBER representing the X offset of the text |
| offsetY | <code>number</code> | NUMBER representing the Y offset of the text |
| maxWidth | <code>number</code> | NUMBER which determines the maximum width of the text field, which is used to create MUTLI-LINE text |
| lineHeight | <code>number</code> | NUMBER which determines the line height between lines of text with defined maxWidth values |
| blendMode | <code>string</code> \| [<code>CanvasBlendMode</code>](#CanvasBlendMode) | an optional STRING for the globalCompositeOperation - controls overlays, screens, multiply, masking, etc. Defaults to 'source-over' |
| fill | <code>string</code> \| [<code>CanvasTexture</code>](#CanvasTexture) | an optional STRING or gradiant variable defining the color fill of the text. Defaults to none / invisible. |
| stroke | <code>object</code> | an optional OBJECT defining properties of the shape's stroke |
| stroke.fill | <code>string</code> \| [<code>CanvasTexture</code>](#CanvasTexture) | an optional STRING or gradiant variable defining the color fill of the shape stroke. Defaults to  none / invisible |
| stroke.width | <code>number</code> | an optional NUMBER value determining stroke width. Defaults to 0 |
| stroke.position | <code>string</code> | an optional STRING determining if the stroke will be 'outer' or 'center'. Defaults to 'outer', there is no 'inner' |
| stroke.cap | <code>string</code> | an optional STRING value determining a line's cap style: 'butt', 'round', and 'square'. Defaults to 'butt' 		<br> 		<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/lineCap.jpg" /> 		<br> |
| stroke.join | <code>string</code> | an optional STRING value determining how two lines/corners connect: 'round', 'bevel', and 'miter'. Defaults to 'round' 		<br> 		<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/lineJoin.jpg" /> 		<br> |
| dashSize | <code>number</code> | an optional NUMBER value determining the length of each segment in a dashed line |
| dashGap | <code>number</code> | an optional NUMBER value determining the gap between each segment in a dashed line. Defaults to 0, unless dashSize is defined, then defaults to dashSize |
| visible | <code>boolean</code> | an optional BOOLEAN that, when set to false, will not render the element. Defaults to true |


* [CanvasText](#CanvasText)
    * [new CanvasText(textObj)](#new_CanvasText_new)
    * [.x](#CanvasText.x) : <code>number</code>
    * [.left](#CanvasText.left) : <code>number</code>
    * [.y](#CanvasText.y) : <code>number</code>
    * [.top](#CanvasText.top) : <code>number</code>
    * [.rotation](#CanvasText.rotation) : <code>number</code>
    * [.alpha](#CanvasText.alpha) : <code>number</code>
    * [.opacity](#CanvasText.opacity) : <code>number</code>
    * [.scale](#CanvasText.scale) : <code>number</code>
    * [.scaleX](#CanvasText.scaleX) : <code>number</code>
    * [.scaleY](#CanvasText.scaleY) : <code>number</code>
    * [.blendMode](#CanvasText.blendMode) : <code>number</code>
    * [.visible](#CanvasText.visible) : <code>boolean</code>
    * [.transformOrigin](#CanvasText.transformOrigin) : <code>string</code>
    * [.fontFamily](#CanvasText.fontFamily) : <code>string</code>
    * [.fontSize](#CanvasText.fontSize) : <code>number</code>
    * [.lineHeight](#CanvasText.lineHeight) : <code>number</code>
    * [.maxWidth](#CanvasText.maxWidth) : <code>number</code>
    * [.alignText](#CanvasText.alignText) : <code>string</code>
    * [.fill](#CanvasText.fill) : <code>string</code>
    * [.strokeFill](#CanvasText.strokeFill) : <code>string</code>
    * [.strokeWidth](#CanvasText.strokeWidth) : <code>number</code>
    * [.strokeJoin](#CanvasText.strokeJoin) : <code>string</code>
    * [.strokePosition](#CanvasText.strokePosition) : <code>string</code>
    * [.strokeDashSize](#CanvasText.strokeDashSize) : <code>number</code>
    * [.strokeDashGap](#CanvasText.strokeDashGap) : <code>number</code>
    * [.strokeDashOffset](#CanvasText.strokeDashOffset) : <code>number</code>
    * [.shadowColor](#CanvasText.shadowColor) : <code>string</code>
    * [.shadowBlur](#CanvasText.shadowBlur) : <code>number</code>
    * [.shadowAngle](#CanvasText.shadowAngle) : <code>number</code>
    * [.shadowDistance](#CanvasText.shadowDistance) : <code>number</code>
    * [.id](#CanvasText.id) : <code>string</code>
    * [.width](#CanvasText.width) : <code>number</code>
    * [.height](#CanvasText.height) : <code>number</code>

<a name="new_CanvasText_new"></a>

### new CanvasText(textObj)
Add a text field to the drawer based on a given object, and return a reference to that text
<br><br>
<pre class="sunlight-highlight-javascript">
import { CanvasText } from 'ad-canvas'
</pre>
<br>
<b>NOTE</b><br>
<code>transformOrigin</code> is based on the text alignment. '0% 0%' for text aligned right will be at that text's TOP-RIGHT, '100% 0%' would be its TOP-LEFT.
Centered and left-aligned text's '0% 0%' is its TOP-LEFT.
<br><br>
<b>EXAMPLE</b><br>
Adding a red text field with a yellow 4px outer stroke and an overlay blend mode.
<pre class="sunlight-highlight-javascript">
var _myText = new CanvasText({
	target: View.main.myCanvasDrawer,
	id: 'textItem',
	text: 'Watch the Trailer',
	css: {
		x: 0,
		y: 0,
		fontSize: 40,
		fontFamily: 'FuturaBold',
		alignText: Align.LEFT,
		offsetX: -5,
		offsetY: 5,
		maxWidth: 50,
		lineHeight: 100
	},
	fill: 'red',
	stroke: {
		fill: 'yellow',
		position: 'outer',
		width: 4
	},
	blendMode: CanvasBlendMode.OVERLAY
})
</pre>


| Param | Type | Description |
| --- | --- | --- |
| textObj | <code>object</code> | an object containing the arguments for defining / orienting the text, see Properties for more info: |

<a name="CanvasText.x"></a>

### CanvasText.x : <code>number</code>
NUMBER representing the horizontal position of the element

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.left"></a>

### CanvasText.left : <code>number</code>
NUMBER representing a reference to the x property,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.y"></a>

### CanvasText.y : <code>number</code>
NUMBER representing the vertical position of the element,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.top"></a>

### CanvasText.top : <code>number</code>
NUMBER representing a reference to the y property,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.rotation"></a>

### CanvasText.rotation : <code>number</code>
**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.alpha"></a>

### CanvasText.alpha : <code>number</code>
NUMBER representing the opacity of the element,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.opacity"></a>

### CanvasText.opacity : <code>number</code>
NUMBER representing a reference to the alpha property,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.scale"></a>

### CanvasText.scale : <code>number</code>
NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.scaleX"></a>

### CanvasText.scaleX : <code>number</code>
NUMBER representing the horizontal scale of the element,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.scaleY"></a>

### CanvasText.scaleY : <code>number</code>
NUMBER representing the vertical scale of the element,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.blendMode"></a>

### CanvasText.blendMode : <code>number</code>
NUMBER representing the blend or masking style applied to the element,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.visible"></a>

### CanvasText.visible : <code>boolean</code>
BOOLEAN representing whether or not the element should be drawn,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.transformOrigin"></a>

### CanvasText.transformOrigin : <code>string</code>
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
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '50% 50%'
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10px 100px'
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10 100'
</pre>

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.fontFamily"></a>

### CanvasText.fontFamily : <code>string</code>
STRING representing the font name,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.fontSize"></a>

### CanvasText.fontSize : <code>number</code>
NUMBER or STRING (12, '12', '12px', or '12pt') representing the font size,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.lineHeight"></a>

### CanvasText.lineHeight : <code>number</code>
NUMBER which determines the line height between lines of text with defined maxWidth values,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.maxWidth"></a>

### CanvasText.maxWidth : <code>number</code>
NUMBER which determines the maximum width of the text field, which is used to create MUTLI-LINE text,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.alignText"></a>

### CanvasText.alignText : <code>string</code>
STRING or Align constant defining text's horizontal alingment: 'center', 'left', or 'right'. Can also use Align.CENTER, Align.LEFT, or Align.RIGHT,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.fill"></a>

### CanvasText.fill : <code>string</code>
STRING, gradient, or texture representing the color used to fill the text,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.strokeFill"></a>

### CanvasText.strokeFill : <code>string</code>
STRING, gradient, or texture representing the color used to fill the text's stroke,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.strokeWidth"></a>

### CanvasText.strokeWidth : <code>number</code>
NUMBER representing the width of the text's outline,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.strokeJoin"></a>

### CanvasText.strokeJoin : <code>string</code>
STRING representing how two lines/corners form: 'round', 'bevel', and 'miter',

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.strokePosition"></a>

### CanvasText.strokePosition : <code>string</code>
STRING repsenting the position of the text's stroke, 'outer' or 'center'; there is no 'inner',

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.strokeDashSize"></a>

### CanvasText.strokeDashSize : <code>number</code>
NUMBER representing the length of each segment in a dashed line,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.strokeDashGap"></a>

### CanvasText.strokeDashGap : <code>number</code>
NUMBER representing the gap between each segment in a dashed line,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.strokeDashOffset"></a>

### CanvasText.strokeDashOffset : <code>number</code>
NUMBER representing the offset positioning of the dash segments,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.shadowColor"></a>

### CanvasText.shadowColor : <code>string</code>
STRING representing the color of the drop shadow in RGBA format,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.shadowBlur"></a>

### CanvasText.shadowBlur : <code>number</code>
NUMBER representing the amount of blur on the drop shadow,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.shadowAngle"></a>

### CanvasText.shadowAngle : <code>number</code>
NUMBER representing the angle, in degrees, of the drop shadow,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.shadowDistance"></a>

### CanvasText.shadowDistance : <code>number</code>
NUMBER representing the distance of the drop shadow from the element,

**Kind**: static property of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.id"></a>

### CanvasText.id : <code>string</code>
READ-ONLY: STRING representing the id of the element

**Kind**: static constant of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.width"></a>

### CanvasText.width : <code>number</code>
READ-ONLY: NUMBER representing the approximate width of the text,

**Kind**: static constant of [<code>CanvasText</code>](#CanvasText)  
<a name="CanvasText.height"></a>

### CanvasText.height : <code>number</code>
READ-ONLY: NUMBER representing the approximate height of the text,

**Kind**: static constant of [<code>CanvasText</code>](#CanvasText)  
