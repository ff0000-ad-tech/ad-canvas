<a name="CanvasColoring"></a>

## CanvasColoring
**Kind**: global class  
**Npmpackage**:   

* [CanvasColoring](#CanvasColoring)
    * [new CanvasColoring()](#new_CanvasColoring_new)
    * [.hue(obj)](#CanvasColoring.hue)
    * [.saturation(obj)](#CanvasColoring.saturation)
    * [.contrast(obj)](#CanvasColoring.contrast)
    * [.tint(obj)](#CanvasColoring.tint)
    * [.transform(obj)](#CanvasColoring.transform)
    * [.invert(obj)](#CanvasColoring.invert)

<a name="new_CanvasColoring_new"></a>

### new CanvasColoring()
Apply letious color effects to a canvas given a Canvas element or CanvasDrawer instance.<br><br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
<br>
<pre class="sunlight-highlight-javascript">
import { CanvasColoring } from 'ad-canvas'
</pre> 
All examples in this class demonstrate effects applied to this image:<br>
<img src="../docs_images/canvasdrawer/default.jpg" /><br>

<a name="CanvasColoring.hue"></a>

### CanvasColoring.hue(obj)
<b>EXAMPLE::</b><br>
<pre class="sunlight-highlight-javascript">
// convert to full grayscale
CanvasColoring.hue({
	target: _myCanvasDrawer,
	amount: 180,
})
</pre>
<br>
<img src="../docs_images/canvasdrawer/hue.jpg" />

**Kind**: static method of [<code>CanvasColoring</code>](#CanvasColoring)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with paramaters for overall hue shift, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code> | a CanvasDrawer or CANVAS DOM to which the effect is applied |
| amount | <code>number</code> | amount to shift the colors in a range of 0-360 |

<a name="CanvasColoring.saturation"></a>

### CanvasColoring.saturation(obj)
<b>EXAMPLE::</b><br>
<pre class="sunlight-highlight-javascript">
// convert to full grayscale
CanvasColoring.saturation({
	target: _myCanvasDrawer,
	amount: 0,
})
</pre>
<br>
<img src="../docs_images/canvasdrawer/sat.jpg" />

**Kind**: static method of [<code>CanvasColoring</code>](#CanvasColoring)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with paramaters for overall saturation, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code> | a CanvasDrawer or CANVAS DOM to which the effect is applied |
| amount | <code>number</code> | a NUMBER representing the total saturation of the target. 0 = grayscale, 1 = full, original color |
| clear | <code>boolean</code> | a BOOLEAN which will redraw a CanvasDrawer (but not a canvas DOM element). Defaults to false, which will compound previous effects |

<a name="CanvasColoring.contrast"></a>

### CanvasColoring.contrast(obj)
Change the contrast of the target.
<br><br>
<b>EXAMPLE::</b><br>
<pre class="sunlight-highlight-javascript">
// get your whites whiter and brights brighter
CanvasColoring.contrast({
	target: _myCanvasDrawer,
	amount: 10,
})
</pre>
<br>
<img src="../docs_images/canvasdrawer/contrast.jpg" />

**Kind**: static method of [<code>CanvasColoring</code>](#CanvasColoring)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with paramaters for overall saturation, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code> | a CanvasDrawer or CANVAS DOM to which the effect is applied |
| amount | <code>number</code> | a NUMBER representing the contrast of the target. 0 = no contrast, 1 = original contrast, >1 = more and more, to infinity and beyond! |
| clear | <code>boolean</code> | a BOOLEAN which will redraw a CanvasDrawer (but not a canvas DOM element). Defaults to false, which will compound previous effects |

<a name="CanvasColoring.tint"></a>

### CanvasColoring.tint(obj)
Tint the target uniformly to a given color.
<br><br>
<b>EXAMPLE::</b><br>
<pre class="sunlight-highlight-javascript">
// tint to GREEN
CanvasColoring.tint({
	target: _myCanvasDrawer,
	color: 'rgb(0, 255, 0)',
	amount: 1
});
</pre>
<br>
<img src="../docs_images/canvasdrawer/tintGreen.jpg" />
<br><br>
<pre class="sunlight-highlight-javascript">
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
</pre>
<br>
<img src="../docs_images/canvasdrawer/tintMagenta.jpg" />
<br><br>
<pre class="sunlight-highlight-javascript">
// 50% tint to BLUE
CanvasColoring.tint({
	target: _myCanvasDrawer,
	color: '#0000ff',
	amount: 0.5
});
</pre>
<br>
<img src="../docs_images/canvasdrawer/tintBlue.jpg" />

**Kind**: static method of [<code>CanvasColoring</code>](#CanvasColoring)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with paramaters for overall saturation, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code> | a CanvasDrawer or CANVAS DOM to which the effect is applied |
| amount | <code>number</code> | a NUMBER representing the percentage of color to apply to the target. Defaults to 1, which is 100% color tinting |
| color | <code>string</code> \| <code>object</code> | a HEX, RGB/A STRING, or RGB/A OBJECT represeting the color to tint to. Color-name strings such as 'red' and 'blue' will throw errors |
| clear | <code>boolean</code> | a BOOLEAN which will redraw a CanvasDrawer (but not a canvas DOM element). Defaults to false, which will compound previous effects |

<a name="CanvasColoring.transform"></a>

### CanvasColoring.transform(obj)
Color Transforms the target to a given color by pulling colors out of image; preserves shading.
<br><br>
<b>EXAMPLE::</b><br>
<pre class="sunlight-highlight-javascript">
// pulls all colors EXCEPT for GREEN values out of the target
CanvasColoring.transform({
	target: _myCanvasDrawer,
	color: 'rgb(0, 255, 0)',
	amount: 1
});
</pre>
<br>
<img src="../docs_images/canvasdrawer/transGreen.jpg" />
<br><br>
<pre class="sunlight-highlight-javascript">
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
</pre>
<br>
<img src="../docs_images/canvasdrawer/transBlueRed.jpg" />
<br><br>
<pre class="sunlight-highlight-javascript">
// pulls 50% of all colors EXCEPT for BLUE values out of the target
CanvasColoring.transform({
	target: _myCanvasDrawer,
	color: '#0000ff',
	amount: 0.5
});
</pre>
<br>
<img src="../docs_images/canvasdrawer/transBlue.jpg" />
<br><br>

**Kind**: static method of [<code>CanvasColoring</code>](#CanvasColoring)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with paramaters for overall saturation, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code> | a CanvasDrawer or CANVAS DOM to which the effect is applied |
| amount | <code>number</code> | a NUMBER representing the percentage of color to apply to the target. Defaults to 1, which is 100% color transform |
| color | <code>string</code> \| <code>object</code> | a HEX, RGB/A STRING, or RGB/A OBJECT represeting the color to transform to. Color-name strings such as 'red' and 'blue' will throw errors |
| clear | <code>boolean</code> | a BOOLEAN which will redraw a CanvasDrawer (but not a canvas DOM element). Defaults to false, which will compound previous effects. |

<a name="CanvasColoring.invert"></a>

### CanvasColoring.invert(obj)
Invert the colors of the target.
<br><br>
<b>EXAMPLE::</b><br>
<pre class="sunlight-highlight-javascript">
CanvasColoring.invert({
	target: _myCanvasDrawer
});
</pre>
<br>
<img src="../docs_images/canvasdrawer/invert.jpg" />
<br><br>

**Kind**: static method of [<code>CanvasColoring</code>](#CanvasColoring)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with parameters for overall inversion, see Properties for more info: |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code> | a CanvasDrawer or CANVAS DOM to which the effect is applied |
| clear | <code>boolean</code> | a BOOLEAN which will redraw a CanvasDrawer (but not a canvas DOM element). Defaults to false, which will compound previous effects. |

