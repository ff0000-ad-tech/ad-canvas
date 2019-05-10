<a name="CanvasBlendMode"></a>

## CanvasBlendMode
**Kind**: global class  
**Npmpackage**:   

* [CanvasBlendMode](#CanvasBlendMode)
    * [new CanvasBlendMode()](#new_CanvasBlendMode_new)
    * [.NONE](#CanvasBlendMode.NONE) : <code>string</code>
    * [.UNDER](#CanvasBlendMode.UNDER) : <code>string</code>
    * [.SOURCE_IN](#CanvasBlendMode.SOURCE_IN) : <code>string</code>
    * [.SOURCE_OUT](#CanvasBlendMode.SOURCE_OUT) : <code>string</code>
    * [.SOURCE_ATOP](#CanvasBlendMode.SOURCE_ATOP) : <code>string</code>
    * [.DEST_IN](#CanvasBlendMode.DEST_IN) : <code>string</code>
    * [.DEST_OUT](#CanvasBlendMode.DEST_OUT) : <code>string</code>
    * [.DEST_ATOP](#CanvasBlendMode.DEST_ATOP) : <code>string</code>
    * [.XOR](#CanvasBlendMode.XOR) : <code>string</code>
    * [.COPY](#CanvasBlendMode.COPY) : <code>string</code>
    * [.ADD](#CanvasBlendMode.ADD) : <code>string</code>
    * [.DARKEN](#CanvasBlendMode.DARKEN) : <code>string</code>
    * [.LIGHTEN](#CanvasBlendMode.LIGHTEN) : <code>string</code>
    * [.OVERLAY](#CanvasBlendMode.OVERLAY) : <code>string</code>
    * [.MULTIPLY](#CanvasBlendMode.MULTIPLY) : <code>string</code>
    * [.SCREEN](#CanvasBlendMode.SCREEN) : <code>string</code>
    * [.DODGE](#CanvasBlendMode.DODGE) : <code>string</code>
    * [.BURN](#CanvasBlendMode.BURN) : <code>string</code>
    * [.HARD](#CanvasBlendMode.HARD) : <code>string</code>
    * [.SOFT](#CanvasBlendMode.SOFT) : <code>string</code>
    * [.DIFFERENCE](#CanvasBlendMode.DIFFERENCE) : <code>string</code>
    * [.EXCLUSION](#CanvasBlendMode.EXCLUSION) : <code>string</code>
    * [.HUE](#CanvasBlendMode.HUE) : <code>string</code>
    * [.SATURATION](#CanvasBlendMode.SATURATION) : <code>string</code>
    * [.COLOR](#CanvasBlendMode.COLOR) : <code>string</code>
    * [.LUMINOSITY](#CanvasBlendMode.LUMINOSITY) : <code>string</code>

<a name="new_CanvasBlendMode_new"></a>

### new CanvasBlendMode()
Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
<br>
<pre class="sunlight-highlight-javascript">
import { CanvasBlendMode } from 'ad-canvas'
</pre>
See also [http://www.w3schools.com/tags/canvas_globalcompositeoperation.asp](http://www.w3schools.com/tags/canvas_globalcompositeoperation.asp) and here
[https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
<br><br>
<b>WARNING: If you try to apply a blend mode of any kind (masking) to a CanvasImage whose source is an SVG, it will not render properly in FireFox. This is a known browser issue</b><br>
<ul>
	<li>Try drawing the SVG into a dummy canvas and then use that dummy canvas as the image source in place of the SVG for your masking</li>
	<li>Use a PNG instead</li>
</ul>
<br><br>
<b>DEFAULT / PLACEMENTS:</b><br>
<ul>
	<li>NONE</li>
	<li>UNDER</li>
</ul>
<br><br>

<b>MASKING BLENDS:</b><br>
	Use the existing canvas drawings to act as the mask to the given drawing with this mode:
	<ul>
		<li>SOURCE_IN</li>
		<li>SOURCE_OUT</li>
		<li>SOURCE_ATOP</li>
	</ul>
	<br><br>
	Use the given drawing with this mode to act as the mask to existing canvas drawings:
	<ul>
		<li>DEST_IN</li>
		<li>DEST_OUT</li>
		<li>DEST_ATOP</li>
	</ul>
	<br><br>
	Miscellaneous:
	<ul>
		<li>XOR</li>
		<li>COPY</li>
	</ul>
	<br><br>
<b>UNIVERSAL BLEND MODES:</b>
	<ul>
		<li>ADD</li>
	</ul>
	<br><br>
<b>NOT SUPPORTED BY THESE BROWSER VERSIONS AND EARLIER:</b><br>
Internet Explorer, Edge 12, Opera Mini 8, Android Browser 4.3:</b>
	<ul>
		<li>DARKEN</li>
		<li>LIGHTEN</li>
		<li>OVERLAY</li>
		<li>MULTIPLY</li>
		<li>SCREEN</li>
		<li>DODGE</li>
		<li>BURN</li>
		<li>HARD</li>
		<li>SOFT</li>
		<li>DIFFERENCE</li>
		<li>EXCLUSION</li>
		<li>HUE</li>
		<li>SATURATION</li>
		<li>COLOR</li>
		<li>LUMINOSITY</li>
	</ul>
	<br><br>

<a name="CanvasBlendMode.NONE"></a>

### CanvasBlendMode.NONE : <code>string</code>
Represents 'source-over'. Displays the source content over the destination content. This is the default setting.
	<br>
	<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blend_none.jpg" />

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.NONE
```
<a name="CanvasBlendMode.UNDER"></a>

### CanvasBlendMode.UNDER : <code>string</code>
Represents 'destination-over'. Displays the destination content over the source content.
	<br>
	<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blend_under.jpg" />

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.UNDER
```
<a name="CanvasBlendMode.SOURCE_IN"></a>

### CanvasBlendMode.SOURCE\_IN : <code>string</code>
Represents 'source-in'. Displays the source content within the destination content. Only the part of the source content that is INSIDE the destination content is shown, and the destination content is transparent.
	<br>
	<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blend_sourceIn.jpg" />

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.SOURCE_IN
```
<a name="CanvasBlendMode.SOURCE_OUT"></a>

### CanvasBlendMode.SOURCE\_OUT : <code>string</code>
Represents 'source-out'. Displays the source content outside of the destination content. Only the part of the source content that is OUTSIDE the destination content is shown, and the destination content is transparent.
	<br>
	<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blend_sourceOut.jpg" />

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.SOURCE_OUT
```
<a name="CanvasBlendMode.SOURCE_ATOP"></a>

### CanvasBlendMode.SOURCE\_ATOP : <code>string</code>
Represents 'source-atop'. Displays the destination content on top of the source content. The part of the destination content that is outside the source content is not shown.
	<br>
	<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blend_sourceAtop.jpg" />

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.SOURCE_ATOP
```
<a name="CanvasBlendMode.DEST_IN"></a>

### CanvasBlendMode.DEST\_IN : <code>string</code>
Represents 'destination-in'. Displays the destination content within the source content. Only the part of the destination content that is INSIDE the source content is shown, and the source content is transparent.
	<br>
	<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blend_destIn.jpg" />

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.DEST_IN
```
<a name="CanvasBlendMode.DEST_OUT"></a>

### CanvasBlendMode.DEST\_OUT : <code>string</code>
Represents 'destination-out'. Displays the destination content outside of the source content. Only the part of the destination content that is OUTSIDE the source content is shown, and the source content is transparent.
	<br>
	<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blend_destOut.jpg" />

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.DEST_OUT
```
<a name="CanvasBlendMode.DEST_ATOP"></a>

### CanvasBlendMode.DEST\_ATOP : <code>string</code>
Represents 'destination-atop'. Displays the destination content on top of the source content. The part of the destination content that is outside the source content is not shown.
	<br>
	<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blend_destAtop.jpg" />

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.DEST_ATOP
```
<a name="CanvasBlendMode.XOR"></a>

### CanvasBlendMode.XOR : <code>string</code>
Represents 'xor'. Only areas where the destination content and source content do not overlap are displayed. The parts that do overlap are not shown.
	<br>
	<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blend_xor.jpg" />

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.XOR
```
<a name="CanvasBlendMode.COPY"></a>

### CanvasBlendMode.COPY : <code>string</code>
Represents 'copy'. Displays the source content. The destination content is ignored.
	<br>
	<img src="https://github.com/ff0000-ad-tech/ad-docs/blob/master/assets/ad-canvas/blend_copy.jpg" />

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.COPY
```
<a name="CanvasBlendMode.ADD"></a>

### CanvasBlendMode.ADD : <code>string</code>
Represents 'lighter'. Where both shapes overlap, the color is values are added together.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.ADD
```
<a name="CanvasBlendMode.DARKEN"></a>

### CanvasBlendMode.DARKEN : <code>string</code>
Represents 'darken'. Retains the darkest pixels of both layers.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.DARKEN
```
<a name="CanvasBlendMode.LIGHTEN"></a>

### CanvasBlendMode.LIGHTEN : <code>string</code>
Represents 'lighten'. Retains the lightest pixels of both layers.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.LIGHTEN
```
<a name="CanvasBlendMode.OVERLAY"></a>

### CanvasBlendMode.OVERLAY : <code>string</code>
Represents 'overlay'. A combination of multiply and screen. Dark parts on the base layer become darker, and light parts become lighter.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.OVERLAY
```
<a name="CanvasBlendMode.MULTIPLY"></a>

### CanvasBlendMode.MULTIPLY : <code>string</code>
Represents 'multiply'. The pixels are of the top layer are multiplied with the corresponding pixel of the bottom layer. A darker picture is the result.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.MULTIPLY
```
<a name="CanvasBlendMode.SCREEN"></a>

### CanvasBlendMode.SCREEN : <code>string</code>
Represents 'screen'. The pixels are inverted, multiplied, and inverted again. A lighter picture is the result (opposite of multiply)

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.SCREEN
```
<a name="CanvasBlendMode.DODGE"></a>

### CanvasBlendMode.DODGE : <code>string</code>
Represents 'color-dodge'. Divides the bottom layer by the inverted top layer.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.DODGE
```
<a name="CanvasBlendMode.BURN"></a>

### CanvasBlendMode.BURN : <code>string</code>
Represents 'color-burn'. Divides the inverted bottom layer by the top layer, and then inverts the result.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.BURN
```
<a name="CanvasBlendMode.HARD"></a>

### CanvasBlendMode.HARD : <code>string</code>
Represents 'hard-light'. A combination of multiply and screen like overlay, but with top and bottom layer swapped.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.HARD
```
<a name="CanvasBlendMode.SOFT"></a>

### CanvasBlendMode.SOFT : <code>string</code>
Represents 'soft-light'. A softer version of hard-light. Pure black or white does not result in pure black or white.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.SOFT
```
<a name="CanvasBlendMode.DIFFERENCE"></a>

### CanvasBlendMode.DIFFERENCE : <code>string</code>
Represents 'difference'. Subtracts the bottom layer from the top layer or the other way round to always get a positive value.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.DIFFERENCE
```
<a name="CanvasBlendMode.EXCLUSION"></a>

### CanvasBlendMode.EXCLUSION : <code>string</code>
Represents 'exclusion'. Like difference, but with lower contrast.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.EXCLUSION
```
<a name="CanvasBlendMode.HUE"></a>

### CanvasBlendMode.HUE : <code>string</code>
Represents 'hue'. Preserves the luma and chroma of the bottom layer, while adopting the hue of the top layer.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.HUE
```
<a name="CanvasBlendMode.SATURATION"></a>

### CanvasBlendMode.SATURATION : <code>string</code>
Represents 'saturation'. Preserves the luma and hue of the bottom layer, while adopting the chroma of the top layer.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.SATURATION
```
<a name="CanvasBlendMode.COLOR"></a>

### CanvasBlendMode.COLOR : <code>string</code>
Represents 'color'. Preserves the luma of the bottom layer, while adopting the hue and chroma of the top layer.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.COLOR
```
<a name="CanvasBlendMode.LUMINOSITY"></a>

### CanvasBlendMode.LUMINOSITY : <code>string</code>
Represents 'luminosity'. Preserves the hue and chroma of the bottom layer, while adopting the luma of the top layer.

**Kind**: static constant of [<code>CanvasBlendMode</code>](#CanvasBlendMode)  
**Example**  
```js
CanvasBlendMode.LUMINOSITY
```
