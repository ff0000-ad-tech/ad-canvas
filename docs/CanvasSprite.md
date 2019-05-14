<a name="CanvasSprite"></a>

## CanvasSprite
**Kind**: global class  
**Npmpackage**:   
<a name="new_CanvasSprite_new"></a>

### new CanvasSprite()
Uses a [CanvasDrawer](#CanvasDrawer)'s [CanvasImage](#CanvasImage) to create either a traditional sprite animation or a sprite-atlas animation (using JSON data for positioning and sizing).<br>
<pre class="sunlight-highlight-javascript">
import { CanvasSprite } from 'ad-canvas'
</pre>
<br><br>
<b>NOTE::</b>
This class is a work in progress and was built specifically for <b>game dev</b>
<br>
This class <i>also</i> does not contain any sort of <b>play()</b> or <b>stop()</b> methods - it is independant of FrameRate. The idea is that this class allows you to update the CanvasImage's rendering data, but not necessarily redraw (update) your CanvasDrawer entirely.

**Example**  
```js
// creating a traditional sprite animation
var _mySprite = new CanvasSprite({
	element: _myCanvasImageRef,
	data: {
		total: 12,
		cols: 6,
		width: 300,
		height: 250
	}
});

_mySprite.nextFrame();

_mySprite.addEventListener('canvasSpriteComplete', function(){
	console.log('sprite animation has completed!')
})

// creating an Atlas-based sprite animation
var _myAtlasSprite = new CanvasSprite({
	element: _myCanvasImageRef,
	data: AnimationJSON.character,
	sequences: {
		run: [0, 4],
		jump: [5, 10],
		fall: [11, 16],
	},
	scale: _scale,
	id: 'character',
	offsetX: 10,
	offsetY: 2,
});

_myAtlasSprite.addEventListener('canvasSpriteComplete', function(){
	console.log('atlas animation has completed!')
})

_myAtlasSprite.sequence = 'fall';
_myAtlasSprite.nextFrame();
```
