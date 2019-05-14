<a name="CanvasDisplacementMap"></a>

## CanvasDisplacementMap
**Kind**: global class  
**Npmpackage**:   
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| source | <code>canvas</code> \| <code>canvasDrawer</code> \| <code>ImageId</code> | the CanvasDrawer instance or UICanvas / canvas element from which to get the image that will be displaced |
| map | <code>canvas</code> \| <code>canvasDrawer</code> \| <code>ImageId</code> | the CanvasDrawer instance or UICanvas / canvas element from which to get the disaplcement map bitmap data to apply to the source |
| target | [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code> | the CanvasDrawer instance or UICanvas / canvas element in which to draw the displaced image |
| params | <code>object</code> | an OBJECT of optional parameters |
| params.x | <code>number</code> | A NUMBER representing the X offset of the displacement |
| params.y | <code>number</code> | A NUMBER representing the Y offset of the displacement |
| params.scaleX | <code>number</code> | A NUMBER for how much distortion is applied to the X axis; defaults to 0 |
| params.scaleY | <code>number</code> | A NUMBER for how much distortion is applied to the Y axis; defaults to 0 |
| params.channelX | <code>number</code> | A NUMBER representing the color channel on which to displace the source bitmap data along the X axis; defaults to CanvasDisplaceChannel.RED |
| params.channelY | <code>number</code> | A NUMBER representing the color channel on which to displace the source bitmap data along the Y axis; defaults to CanvasDisplaceChannel.RED |


* [CanvasDisplacementMap](#CanvasDisplacementMap)
    * [new CanvasDisplacementMap(imgObj)](#new_CanvasDisplacementMap_new)
    * [.source](#CanvasDisplacementMap.source) : [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code>
    * [.map](#CanvasDisplacementMap.map) : [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code>
    * [.target](#CanvasDisplacementMap.target) : [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code>
    * [.x](#CanvasDisplacementMap.x) : <code>number</code>
    * [.y](#CanvasDisplacementMap.y) : <code>number</code>
    * [.scaleX](#CanvasDisplacementMap.scaleX) : <code>number</code>
    * [.scaleY](#CanvasDisplacementMap.scaleY) : <code>number</code>
    * [.channelX](#CanvasDisplacementMap.channelX) : [<code>CanvasDisplaceChannel</code>](#CanvasDisplaceChannel) \| <code>number</code>
    * [.channelY](#CanvasDisplacementMap.channelY) : [<code>CanvasDisplaceChannel</code>](#CanvasDisplaceChannel) \| <code>number</code>
    * [.draw()](#CanvasDisplacementMap.draw)

<a name="new_CanvasDisplacementMap_new"></a>

### new CanvasDisplacementMap(imgObj)
Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
<br>
<pre class="sunlight-highlight-javascript">
import { CanvasDisplacementMap } from 'ad-canvas'
</pre>
<br><br>
<b>Sample ::</b><br>
Create a displacement map filter and tween the distortion from 0 to 1000 along the X:<br>
<pre class="sunlight-highlight-javascript">
T.mapFilter = new CanvasDisplacementMap({
	source: _canvasDrawerSource,
	map: _canvasDrawerMap,
	target: _canvasDrawerTarget
})
</pre>


| Param | Type | Description |
| --- | --- | --- |
| imgObj | <code>object</code> | an object containing the arguments for defining / orienting the image, see Properties for more info: |

<a name="CanvasDisplacementMap.source"></a>

### CanvasDisplacementMap.source : [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code>
An instance of CanvasDrawer or a UICanvas / HTML Canvas from which to pull bitmap data

**Kind**: static constant of [<code>CanvasDisplacementMap</code>](#CanvasDisplacementMap)  
<a name="CanvasDisplacementMap.map"></a>

### CanvasDisplacementMap.map : [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code>
An instance of CanvasDrawer or a UICanvas / HTML Canvas from which to pull the displacement map bitmap data

**Kind**: static constant of [<code>CanvasDisplacementMap</code>](#CanvasDisplacementMap)  
<a name="CanvasDisplacementMap.target"></a>

### CanvasDisplacementMap.target : [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>UICanvas</code> \| <code>canvas</code>
An instance of CanvasDrawer or a UICanvas / HTML Canvas in which the source bitmap data is drawn with the map displacement data applied

**Kind**: static constant of [<code>CanvasDisplacementMap</code>](#CanvasDisplacementMap)  
<a name="CanvasDisplacementMap.x"></a>

### CanvasDisplacementMap.x : <code>number</code>
A NUMBER representing the X offset of the displacement

**Kind**: static constant of [<code>CanvasDisplacementMap</code>](#CanvasDisplacementMap)  
<a name="CanvasDisplacementMap.y"></a>

### CanvasDisplacementMap.y : <code>number</code>
A NUMBER representing the Y offset of the displacement

**Kind**: static constant of [<code>CanvasDisplacementMap</code>](#CanvasDisplacementMap)  
<a name="CanvasDisplacementMap.scaleX"></a>

### CanvasDisplacementMap.scaleX : <code>number</code>
A NUMBER for how much distortion is applied to the X axis; defaults to 0

**Kind**: static constant of [<code>CanvasDisplacementMap</code>](#CanvasDisplacementMap)  
<a name="CanvasDisplacementMap.scaleY"></a>

### CanvasDisplacementMap.scaleY : <code>number</code>
A NUMBER for how much distortion is applied to the Y axis; defaults to 0

**Kind**: static constant of [<code>CanvasDisplacementMap</code>](#CanvasDisplacementMap)  
<a name="CanvasDisplacementMap.channelX"></a>

### CanvasDisplacementMap.channelX : [<code>CanvasDisplaceChannel</code>](#CanvasDisplaceChannel) \| <code>number</code>
A NUMBER representing the color channel on which to displace the source bitmap data along the X axis; defaults to CanvasDisplaceChannel.RED

**Kind**: static constant of [<code>CanvasDisplacementMap</code>](#CanvasDisplacementMap)  
<a name="CanvasDisplacementMap.channelY"></a>

### CanvasDisplacementMap.channelY : [<code>CanvasDisplaceChannel</code>](#CanvasDisplaceChannel) \| <code>number</code>
A NUMBER representing the color channel on which to displace the source bitmap data along the Y axis; defaults to CanvasDisplaceChannel.RED

**Kind**: static constant of [<code>CanvasDisplacementMap</code>](#CanvasDisplacementMap)  
<a name="CanvasDisplacementMap.draw"></a>

### CanvasDisplacementMap.draw()
Take bitmap data from the map, use it to displace the source, and apply the distorted composite bitmap data to the target
	<b>NOTE::</b>
	<br>
	This is <b>much</b> different than CanvasDrawer.update(). It uses bitmap data and applies it to the canvas pixel by pixel, rather than redrawing it as a whole.
	<br>
	CanvasDrawer.update() will overwrite CanvasDisplacementMap.draw(), and vice-versa.
	<br>
	CanvasTweener would not be recommented because that uses CanvasDrawer.update() in order to redraw everything.
	In order to animate a displacement, TweenLite is acceptable because you're not animating a CanvasElement, you're animating the object properties of the DisplacementMap filter.

**Kind**: static method of [<code>CanvasDisplacementMap</code>](#CanvasDisplacementMap)  
**Example**  
```js
// animate the amount of displacement along the X axis
TweenLite.fromTo(T.mapFilter, 1, {
	scaleX: 0
}, {
	scaleX: 1000, 
	// without this onUpdate method, the scaleX would change but the CanvasDisplacementMap wouldn't know to redraw
	onUpdate: function(){
		T.mapFilter.draw()
	}
})
```
