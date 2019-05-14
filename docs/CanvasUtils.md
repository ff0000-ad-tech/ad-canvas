<a name="CanvasUtils"></a>

## CanvasUtils
**Kind**: global class  
**Npmpackage**:   

* [CanvasUtils](#CanvasUtils)
    * [new CanvasUtils()](#new_CanvasUtils_new)
    * [.getImageData(source)](#CanvasUtils.getImageData)
    * [.setImageData(target, data)](#CanvasUtils.setImageData)

<a name="new_CanvasUtils_new"></a>

### new CanvasUtils()
Utilities for Canvas DOM elements<br>
<pre class="sunlight-highlight-javascript">
import { CanvasUtils } from 'ad-canvas'
</pre>

<a name="CanvasUtils.getImageData"></a>

### CanvasUtils.getImageData(source)
Gets the image data associated with a canvas

**Kind**: static method of [<code>CanvasUtils</code>](#CanvasUtils)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>canvas</code> \| <code>UICanvas</code> \| [<code>CanvasDrawer</code>](#CanvasDrawer) | a CANVAS DOM element or CanvasDrawer from whcih to get image data |

**Example**  
```js
CanvasUtils.getImageData(_myCanvas)
```
<a name="CanvasUtils.setImageData"></a>

### CanvasUtils.setImageData(target, data)
Applies image data to a canvas.

**Kind**: static method of [<code>CanvasUtils</code>](#CanvasUtils)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>canvas</code> \| <code>UICanvas</code> \| [<code>CanvasDrawer</code>](#CanvasDrawer) | a CANVAS DOM element or CanvasDrawer to apply image data |
| data | <code>array</code> | the image data to apply to the canvas |

**Example**  
```js
var _imageData = CanvasUtils.getImageData(_sourceCanvas)
CanvasUtils.setImageData(_targetCanvas, _imageData)
```
