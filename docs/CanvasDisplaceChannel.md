<a name="CanvasDisplaceChannel"></a>

## CanvasDisplaceChannel
**Kind**: global class  
**Npmpackage**:   

* [CanvasDisplaceChannel](#CanvasDisplaceChannel)
    * [new CanvasDisplaceChannel()](#new_CanvasDisplaceChannel_new)
    * [.RED](#CanvasDisplaceChannel.RED) : <code>number</code>
    * [.GREEN](#CanvasDisplaceChannel.GREEN) : <code>number</code>
    * [.BLUE](#CanvasDisplaceChannel.BLUE) : <code>number</code>
    * [.ALPHA](#CanvasDisplaceChannel.ALPHA) : <code>number</code>

<a name="new_CanvasDisplaceChannel_new"></a>

### new CanvasDisplaceChannel()
Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
<br>
<pre class="sunlight-highlight-javascript">
import { CanvasDisplaceChannel } from 'ad-canvas'
</pre>
<b>What the map looks featuring red, green, blue, and alpha channels:</b>
<img src="../docs_images/canvasdrawer/channel_map.jpg" />

<a name="CanvasDisplaceChannel.RED"></a>

### CanvasDisplaceChannel.RED : <code>number</code>
Represents 0, which targets <span style='color: red;'>red</span> bitmap data in a CanvasDisplacementMap
  <br>
  <b>What the map looks like with only the red channel:</b>
  <br>
  <img src="../docs_images/canvasdrawer/channel_red.jpg" />
  <br>
  <b>The white parts are what CanvasDisplacementMap will displace; the black parts will remain unaffected:</b>
  <img src="../docs_images/canvasdrawer/channel_red2.jpg" />

**Kind**: static constant of [<code>CanvasDisplaceChannel</code>](#CanvasDisplaceChannel)  
**Example**  
```js
CanvasDisplaceChannel.RED
```
<a name="CanvasDisplaceChannel.GREEN"></a>

### CanvasDisplaceChannel.GREEN : <code>number</code>
Represents 1, which targets <span style='color: green;'>green</span> bitmap data in a CanvasDisplacementMap
    <br>
    <b>What the map looks like with only the green channel:</b>
    <br>
    <img src="../docs_images/canvasdrawer/channel_green.jpg" />
    <br>
    <b>The white parts are what CanvasDisplacementMap will displace; the black parts will remain unaffected:</b>
    <img src="../docs_images/canvasdrawer/channel_green2.jpg" />

**Kind**: static constant of [<code>CanvasDisplaceChannel</code>](#CanvasDisplaceChannel)  
**Example**  
```js
CanvasDisplaceChannel.GREEN
```
<a name="CanvasDisplaceChannel.BLUE"></a>

### CanvasDisplaceChannel.BLUE : <code>number</code>
Represents 2, which targets <span style='color: blue;'>blue</span> bitmap data in a CanvasDisplacementMap
    <br>
    <b>What the map looks like with only the blue channel:</b>
    <br>
    <img src="../docs_images/canvasdrawer/channel_blue.jpg" />
    <br>
    <b>The white parts are what CanvasDisplacementMap will displace; the black parts will remain unaffected:</b>
    <img src="../docs_images/canvasdrawer/channel_blue2.jpg" />

**Kind**: static constant of [<code>CanvasDisplaceChannel</code>](#CanvasDisplaceChannel)  
**Example**  
```js
CanvasDisplaceChannel.BLUE
```
<a name="CanvasDisplaceChannel.ALPHA"></a>

### CanvasDisplaceChannel.ALPHA : <code>number</code>
Represents 3, which targets <b>alpha</b> bitmap data in a CanvasDisplacementMap
    <br>
    <b>The white parts are what CanvasDisplacementMap will displace; the black parts will remain unaffected:</b>
    <img src="../docs_images/canvasdrawer/channel_alpha.jpg" />

**Kind**: static constant of [<code>CanvasDisplaceChannel</code>](#CanvasDisplaceChannel)  
**Example**  
```js
CanvasDisplaceChannel.ALPHA
```
