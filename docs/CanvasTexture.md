<a name="CanvasTexture"></a>

## CanvasTexture
**Kind**: global class  
**Npmpackage**:   

* [CanvasTexture](#CanvasTexture)
    * [new CanvasTexture()](#new_CanvasTexture_new)
    * [.makeLinearGradient(args)](#CanvasTexture.makeLinearGradient)
    * [.makeRadialGradient(args)](#CanvasTexture.makeRadialGradient)
    * [.makePattern(args)](#CanvasTexture.makePattern)

<a name="new_CanvasTexture_new"></a>

### new CanvasTexture()
Texture generating methods for [CanvasDrawer](#CanvasDrawer).<br>
<pre class="sunlight-highlight-javascript">
import { CanvasTexture } from 'ad-canvas'
</pre>

<a name="CanvasTexture.makeLinearGradient"></a>

### CanvasTexture.makeLinearGradient(args)
Returns a linear gradient between two given points as part of thie [CanvasDrawer](#CanvasDrawer)'s context element
<br><br>
<b>EXAMPLES</b><br>
adding a 100x100 rectangle at 0, 0 with a linear gradient going from coordinate 0,0 to coordinate 0,100 fading from solid black to transparent black:<br>
<pre class="sunlight-highlight-javascript">
View.main.myCanvasDrawer = new CanvasDrawer({
	id: 'myCanvasDrawer',
	target: View.main,
	css: {
		x: 0,
		y: 0,
		width: 300,
		height:	250
	},
	debug: false
});
var gradient = CanvasTexture.makeLinearGradient({
	target: View.main.myCanvasDrawer,
	xStart: 0,
	yStart: 0,
	xEnd: 0,
	yEnd: 200,
	colors: [
		{stopVal: 0, color: 'rgb(0, 0, 0)'},
		{stopVal: 1, color: 'rgba(0, 0, 0, 0)'}
	]
});
new CanvasRect({
	target: View.main.myCanvasDrawer,
	id: 'myRect',
	params: {
		x: 0,
		y: 0,
		width: 100,
		height: 100
	},
	fill: gradient,
});
</pre>

**Kind**: static method of [<code>CanvasTexture</code>](#CanvasTexture)  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | See properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) | the CanvasDrawer instance in which to create the gradient |
| x1 | <code>number</code> | X coordinate of start of gradient |
| y1 | <code>number</code> | Y coordinate of start of gradient |
| x2 | <code>number</code> | X coordinate of end of gradient |
| y2 | <code>number</code> | Y coordinate of end of gradient |
| colors | <code>array</code> | ARRAY of objects, see below for color object properites: |
| colors.color.stopVal | <code>number</code> | Percentage from 0-1 inclusive for where the color is at its maximum value, |
| colors.color.color | <code>string</code> | 'rgb()' or 'rgba()' string of color values |

<a name="CanvasTexture.makeRadialGradient"></a>

### CanvasTexture.makeRadialGradient(args)
Returns a radial gradient between two given points as part of thie CanvasDrawer's context element.
<br><br>
<b>EXAMPLES</b><br>
adding a circle with a radius of 400 at 0, 0 with a radial gradient starting from a radius of 50 to a radius of 200 and fading from solid red to transparent green: :
<pre class="sunlight-highlight-javascript">
View.main.myCanvasDrawer = new CanvasDrawer({
	id: 'myCanvasDrawer',
	target: View.main,
	css: {
		x: 0,
		y: 0,
		width: 300,
		height:	250
	},
	debug: false
});
var gradient = CanvasTexture.makeRadialGradient({
	target: View.main.myCanvasDrawer,
	xInner: 0,
	yInner: 0,
	radiusInner: 50,
	xOuter: 0,
	yOuter: 0,
	radiusOuter: 200,
	colors: [
		{stopVal: 0, color: 'rgb(255, 0, 0)'},
		{stopVal: 1, color: 'rgba(0, 255, 0, 0)'}
	]
});
new CanvasCircle({
	target: View.main.myCanvasDrawer,
	id: 'myCircle',
	params: {
		x:0,
		y:0,
		radius: 400,
		startAngle: 0,
		endAngle: 360
		},
	fill: gradient
});
</pre>

**Kind**: static method of [<code>CanvasTexture</code>](#CanvasTexture)  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | See properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) | the CanvasDrawer instance in which to create the gradient |
| x1 | <code>number</code> | X coordinate of start of gradient |
| y1 | <code>number</code> | Y coordinate of start of gradient |
| rad1 | <code>number</code> | Radius of start color of gradient |
| x2 | <code>number</code> | X coordinate of end of gradient |
| y2 | <code>number</code> | Y coordinate of end of gradient |
| rad2 | <code>number</code> | Radius of end color of gradient |
| colors | <code>array</code> | ARRAY of objects, see below for color object properites: |
| colors.color.stopVal | <code>number</code> | Percentage from 0-1 inclusive for where the color is at its maximum value, |
| colors.color.color | <code>string</code> | 'rgb()' or 'rgba()' string of color values |

<a name="CanvasTexture.makePattern"></a>

### CanvasTexture.makePattern(args)
Returns a pattern given an image source and repeat style.
<br><br>
<b>EXAMPLES:</b><br>
Adding a circle with a radius of 400 at 0, 0 with a pattern from an image named 'tileJPG' which only repeats horizontally:
<pre class="sunlight-highlight-javascript">
View.main.myCanvasDrawerPattern = new CanvasDrawer({
	id: 'myCanvasDrawer',
	target: View.main,
	css: {
		x: 0,
		y: 0,
		width: 300,
		height:	250
	},
	debug: false
});
var pattern = CanvasTexture.makePattern({
	target: View.main.myCanvasDrawerPattern,
	source: 'tileJPG',
	repeat: CanvasTiling.X
});
new CanvasCircle({
	target: View.main.myCanvasDrawer,
	id: 'myCircle',
	params: {
		x: 0,
		y: 0,
		radius: 400,
		startAngle: 0,
		endAngle: 360
	},
	fill: pattern
});
</pre>
<br><br>
Adding a circle with a radius of 400 at 0, 0 with a pattern from an the above canvas source which repeats horizontally and vertically:
<pre class="sunlight-highlight-javascript">
View.main.myCanvasDrawerCanvasTiling = new CanvasDrawer({
	id: 'myCanvasDrawer',
	target: View.main,
	css: {
		x: 0,
		y: 0,
		width: 300,
		height:	250
	},
	debug: false
});
var pattern = CanvasTexture.makePattern({
	target: View.main.myCanvasDrawer,
	source: View.main.myCanvasDrawerPattern.canvas,
	repeat: CanvasTiling.COVER
});
new CanvasCircle({
	target: View.main.myCanvasDrawer,
	id: 'myCircle',
	params: {
		x: 0,
		y: 0,
		radius: 400,
		startAngle: 0,
		endAngle: 360
	},
	fill: pattern
});
</pre>

**Kind**: static method of [<code>CanvasTexture</code>](#CanvasTexture)  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | See properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) | the CanvasDrawer instance in which to create the gradient |
| img | <code>canvas</code> \| <code>CanvasDrawerInstance</code> \| <code>ImageId</code> | A canvas element (CanvasDrawerInstance.canvas or CanvasDrawerInstance, NOT the ID of the DOM object), 		an image ID to be used by ImageManager.get(), 		or ImageManager.get('id') |
| repeat | <code>string</code> | STRING determining repeat style, see [CanvasTiling](#CanvasTiling). |

