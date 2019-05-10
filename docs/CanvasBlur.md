<a name="CanvasBlur"></a>

## CanvasBlur
**Kind**: global class  
**Npmpackage**:   

* [CanvasBlur](#CanvasBlur)
    * [new CanvasBlur()](#new_CanvasBlur_new)
    * [.set(obj)](#CanvasBlur.set)

<a name="new_CanvasBlur_new"></a>

### new CanvasBlur()
Blurs all the imagery of a canvas given a Canvas element or CanvasDrawer instance.<br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
<pre class="sunlight-highlight-javascript">
import { CanvasBlur } from 'ad-canvas'
</pre>

<a name="CanvasBlur.set"></a>

### CanvasBlur.set(obj)
Blur the content of a canvas DOM element
<br><br>

<b>EXAMPLES::</b><br>
Starting with this image::<br>
<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/default.jpg" />
<br><br>

Blur while preserving alpha::
<pre class="sunlight-highlight-javascript">
CanvasBlur.set({
	target: _myCanvasDrawer.canvas,
	amount: 3,
	alpha: true
});
</pre>
<br>
<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blur.jpg" />
<br><br>

Blur while preserving outline::<br>
<pre class="sunlight-highlight-javascript">
// because clear: true, will redraw the canvas to remove the previous blur of amount: 3
// alpha: false will preserve the outline of the target while blurring its innards
CanvasBlur.set({
	target: _myCanvasDrawer,
	amount: 10,
	clear: true,
	alpha: false
});
</pre>
<br>
<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blur_noAlpha.jpg" />
<br><br>

Blur content horizontally only::<br>
<pre class="sunlight-highlight-javascript">
CanvasBlur.set({
	target: _myCanvasDrawer,
	amount: {
		x: 20
	}
})
</pre>
<br>
<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blur_x.jpg" />

**Kind**: static method of [<code>CanvasBlur</code>](#CanvasBlur)  

| Param | Type | Description |
| --- | --- | --- |
| obj | <code>object</code> | an object with parameters for overall blurring, see properties for more information |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code> | a CanvasDrawer or CANVAS DOM element used to determine what to blur |
| amount | <code>number</code> \| <code>object</code> | a NUMBER by which blur the content of the target or an OBJECT containing unique X and Y blur amounts |
| amount.x | <code>number</code> | NUMBER by which to blur the content horizontally (will average with a given Y blur) |
| amount.y | <code>number</code> | NUMBER by which to blur the content vertically (will average with a given X blur) |
| alpha | <code>boolean</code> | a BOOLEAN to toggle whether or not to blur a target's alpha values. Defaults to false, which will blur the content but preserve the shape of the imagery |
| clear | <code>boolean</code> | a BOOLEAN which will redraw a CanvasDrawer (but not any other canvas element). Defaults to false, which will compound previous effects |

