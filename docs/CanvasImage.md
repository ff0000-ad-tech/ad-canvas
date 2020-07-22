<a name="CanvasImage"></a>

## CanvasImage

**Kind**: global class  
**Npmpackage**:  
**Properties**

| Name                   | Type                                                                                      | Description                                                                                                                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| target                 | [<code>CanvasDrawer</code>](#CanvasDrawer)                                                | the CanvasDrawer element in which to draw the image                                                                                                                                                    |
| source                 | <code>canvas</code> \| [<code>CanvasDrawer</code>](#CanvasDrawer) \| <code>ImageId</code> | a canvas element (CanvasDrawer.canvas or CanvasDrawer, NOT the ID of the DOM object), an image ID to be used by ImageManager.get(), or ImageManager.get('id')                                          |
| id                     | <code>string</code>                                                                       | an optional STRING defining the name by which the image will be referenced. Defaults to 'canvasdItemX' where X = the number of elements in a [CanvasDrawer](#CanvasDrawer)                             |
| params                 | <code>object</code>                                                                       | an OBJECT of optional parameters                                                                                                                                                                       |
| params.sourceX         | <code>number</code>                                                                       | left X NUMBER from where to get the image data                                                                                                                                                         |
| params.sourceY         | <code>number</code>                                                                       | top Y NUMBER from where to get the image data                                                                                                                                                          |
| params.sourceW         | <code>number</code>                                                                       | NUMBER width value from where to get the image data                                                                                                                                                    |
| params.sourceH         | <code>number</code>                                                                       | NUMBER height value from where to get the image data                                                                                                                                                   |
| params.x               | <code>number</code>                                                                       | NUMBER X coordinate for where to draw the image data                                                                                                                                                   |
| params.y               | <code>number</code>                                                                       | NUMBER Y coordinate for where to draw the image data                                                                                                                                                   |
| params.width           | <code>number</code>                                                                       | NUMBER width value for how wide to draw the image                                                                                                                                                      |
| params.height          | <code>number</code>                                                                       | NUMBER height value for how tall to draw the image                                                                                                                                                     |
| params.scale           | <code>number</code>                                                                       | NUMBER for uniform scale of the drawing, scaling from drawing center unless transformOrigin is changed. Will compound with but not change values of scaleX or scaleY.                                  |
| params.scaleX          | <code>number</code>                                                                       | NUMBER for X scale of the drawing, scaling from drawing center unless transformOrigin is changed                                                                                                       |
| params.scaleY          | <code>number</code>                                                                       | NUMBER for Y scale of the drawing, scaling from drawing center unless transformOrigin is changed                                                                                                       |
| params.rotation        | <code>number</code>                                                                       | NUMBER IN DEGREES for the start rotation of the given drawing                                                                                                                                          |
| params.transformOrigin | <code>string</code>                                                                       | an optional STRING defining an element's origin for scale and rotation, written as two values in a string with either a '%' or 'px' marker. Defaults to '50% 50%'.                                     |
| params.alpha           | <code>number</code>                                                                       | NUMBER for alpha of the drawing                                                                                                                                                                        |
| fitTo                  | <code>object</code>                                                                       | OBJECT containing sizing and origin data in which the CanvasImage should fit, without distortion of the aspect ratio; <b>will overwrite aspectRatio</b>                                                |
| fitTo.class            | <code>Class</code>                                                                        | CLASS to load the Image Fitting code - this should only be <b>ImageUtils.fitCanvasImageAtCoordinate</b> which is imported from `ad-utils` - it contains code which may be superfluous when not desired |
| fitTo.width            | <code>number</code>                                                                       | NUMBER determining the width to fit the CanvasImage into - affects CanvasImage.width and CanvasImage.sourceW                                                                                           |
| fitTo.height           | <code>number</code>                                                                       | NUMBER determining the height to fit the CanvasImage into - affects CanvasImage.height and CanvasImage.sourceH                                                                                         |
| fitTo.origin           | <code>object</code>                                                                       | OBJECT containing orientation coordinates for the image's fitTo positioning                                                                                                                            |
| fitTo.origin.x         | <code>number</code>                                                                       | NUMBER for X coordinate around which to focus resizing and fitting of the image horizontally                                                                                                           |
| fitTo.origin.y         | <code>number</code>                                                                       | NUMBER for Y coordinate around which to focus resizing and fitting of the image vertically                                                                                                             |
| fitTo.debugClass       | <code>Class</code>                                                                        | CLASS which is used to draw into the canvas debug information displaying the coordinate origin on which to fit the image. <i>Please only use <b>CanvasRect</b> from `ad-canvas` as the debugClass</i>  |
| aspectRatio            | <code>boolean</code>                                                                      | BOOLEAN determining if the image should conform to its natural aspect ratio if only width or height - <b>NOT BOTH</b> - params are provided. Defaults to false                                         |
| dropShadow             | <code>number</code>                                                                       | an optional OBJECT defining properties of the image's drop shadow                                                                                                                                      |
| dropShadow.angle       | <code>number</code>                                                                       | NUMBER IN DEGREES for the angle to position the shadow                                                                                                                                                 |
| dropShadow.distance    | <code>number</code>                                                                       | NUMBER for how far away from the image the shadow is                                                                                                                                                   |
| dropShadow.blur        | <code>number</code>                                                                       | NUMBER for how blurry the shadow is                                                                                                                                                                    |
| dropShadow.color       | <code>string</code> \| <code>object</code>                                                | optional color of shadow as either a HEX STRING :"#ff0000", RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to '#000000'     |
| dropShadow.alpha       | <code>number</code>                                                                       | NUMBER for the alpha of the shadow. Defaults to 1, overrides the alpha of an RGBA color                                                                                                                |
| blendMode              | <code>string</code> \| [<code>CanvasBlendMode</code>](#CanvasBlendMode)                   | an optional STRING for the globalCompositeOperation - controls overlays, screens, multiply, masking, etc. Defaults to 'source-over'. <b>Will not work on SVG image sources in Firefox.</b>             |
| visible                | <code>boolean</code>                                                                      | an optional BOOLEAN that, when set to false, will not render the element. Defaults to true                                                                                                             |

-   [CanvasImage](#CanvasImage)
    -   [new CanvasImage(imgObj)](#new_CanvasImage_new)
    -   [.x](#CanvasImage.x) : <code>number</code>
    -   [.y](#CanvasImage.y) : <code>number</code>
    -   [.width](#CanvasImage.width) : <code>number</code>
    -   [.sourceX](#CanvasImage.sourceX) : <code>number</code>
    -   [.sourceY](#CanvasImage.sourceY) : <code>number</code>
    -   [.sourceW](#CanvasImage.sourceW) : <code>number</code>
    -   [.sourceH](#CanvasImage.sourceH) : <code>number</code>
    -   [.height](#CanvasImage.height) : <code>number</code>
    -   [.rotation](#CanvasImage.rotation) : <code>number</code>
    -   [.alpha](#CanvasImage.alpha) : <code>number</code>
    -   [.scale](#CanvasImage.scale) : <code>number</code>
    -   [.scaleX](#CanvasImage.scaleX) : <code>number</code>
    -   [.scaleY](#CanvasImage.scaleY) : <code>number</code>
    -   [.blendMode](#CanvasImage.blendMode) : <code>number</code>
    -   [.visible](#CanvasImage.visible) : <code>number</code>
    -   [.transformOrigin](#CanvasImage.transformOrigin) : <code>string</code>
    -   [.shadowColor](#CanvasImage.shadowColor) : <code>string</code>
    -   [.shadowBlur](#CanvasImage.shadowBlur) : <code>number</code>
    -   [.shadowAngle](#CanvasImage.shadowAngle) : <code>number</code>
    -   [.shadowDistance](#CanvasImage.shadowDistance) : <code>number</code>
    -   [.id](#CanvasImage.id) : <code>string</code>

<a name="new_CanvasImage_new"></a>

### new CanvasImage(imgObj)

Add a canvas-image or bitmap-image source to the drawer based on a given object, and return a reference to that [CanvasElement](#CanvasElement); requires [ImageManager](ImageManager).

<pre class="sunlight-highlight-javascript">
import { CanvasImage } from 'ad-canvas'
</pre>

<br><br>
<b>Sample 1::</b><br>
Define a source either with the image name or [ImageManager.get](ImageManager.get):<br>

<pre class="sunlight-highlight-javascript">
View.main.myCanvasDrawer = new CanvasDrawer({
	id: 'myCanvasDrawer', 
	target: View.main,
	css: {
		width: 300,
		height:	250
	},
	retina: true,
	debug: false
});
new CanvasImage({
	target: View.main.myCanvasDrawer,
	source: 'smoke',
	id: 'smoke',
	params: {
		width: 256,
		height: 256
	}
});
let _myImage = new CanvasImage({
	target: View.main.myCanvasDrawer,
	source: ImageManager.get('smoke'),
	id: 'smoke',
	params: {
		width: 256,
		height: 256
	}
});
</pre>

<br><br>
<b>Sample 2::</b><br>
Define a source with an existing canvas element by referring to the [CanvasDrawer](#CanvasDrawer) or the CanvasDrawer's HTMLCanvasElement element directly:<br>

<pre class="sunlight-highlight-javascript">
let originalCD = new CanvasDrawer({
	id: 'myCanvasDrawer', 
	target: View.main,
	css: {
		width: 300,
		height:	250
	},
	debug: false
});

// referring to the CanvasDrawer objectw
let _myImage = new CanvasImage({
	target: View.main.myCanvasDrawer,
	source: originalCD,
	id: 'smoke',
	params: {
		width: 256,
		height: 256
	}
});

// referring to the CanvasDrawer object's HTMLCanvasElement element
let _myImage2 = new CanvasImage({
	target: View.main.myCanvasDrawer,
	source: originalCD.canvas,
	id: 'smoke2',
	params: {
		width: 256,
		height: 256
	}
});
</pre>

<br><br>
<b>Sample 3::</b><br>
Create a CanvasImage with fitTo information focused on a certain point:<br>

<pre class="sunlight-highlight-javascript">
let canvasDrawer = new CanvasDrawer({
	id: 'myCanvasDrawer', 
	target: View.main,
	css: {
		width: 300,
		height:	250
	},
	debug: false
});

// without debug information
let _myImage = new CanvasImage({
	target: canvasDrawer,
	source: 'image',
	fitTo: {
		class: ImageUtils.fitCanvasImageAtCoordinate,
		width: canvasDrawer.width,
		height: canvasDrawer.height,
		origin: {
			x: 421,
			y: 229
		}
	}
});

// the same definition, only with a debug class (only use CanvasRect) attached to draw the exact focal position of the fit
let _myImage2 = new CanvasImage({
	target: canvasDrawer,
	source: 'image',
	params: {
		width: 256,
		height: 256
	},
	fitTo: {
		class: ImageUtils.fitCanvasImageAtCoordinate,
		width: canvasDrawer.width,
		height: canvasDrawer.height,
		origin: {
			x: 421,
			y: 229
		},
		debugClass: CanvasRect
	}
});
</pre>

| Param  | Type                | Description                                                                                          |
| ------ | ------------------- | ---------------------------------------------------------------------------------------------------- |
| imgObj | <code>object</code> | an object containing the arguments for defining / orienting the image, see Properties for more info: |

<a name="CanvasImage.x"></a>

### CanvasImage.x : <code>number</code>

NUMBER representing the horizontal position of the element,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.y"></a>

### CanvasImage.y : <code>number</code>

NUMBER representing the vertical position of the element,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.width"></a>

### CanvasImage.width : <code>number</code>

NUMBER representing the total width of the element,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.sourceX"></a>

### CanvasImage.sourceX : <code>number</code>

NUMBER representing the horizontal value from which to start drawing data from the source image,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.sourceY"></a>

### CanvasImage.sourceY : <code>number</code>

NUMBER representing the vertical value from which to start drawing data from the source image,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.sourceW"></a>

### CanvasImage.sourceW : <code>number</code>

NUMBER representing the width value from which to draw data from the source image,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.sourceH"></a>

### CanvasImage.sourceH : <code>number</code>

NUMBER representing the height value from which to draw data from the source image,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.height"></a>

### CanvasImage.height : <code>number</code>

NUMBER representing the total height of the element,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.rotation"></a>

### CanvasImage.rotation : <code>number</code>

NUMBER representing the rotation, in degrees, of the element,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.alpha"></a>

### CanvasImage.alpha : <code>number</code>

NUMBER representing the opacity of the element,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.scale"></a>

### CanvasImage.scale : <code>number</code>

NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.scaleX"></a>

### CanvasImage.scaleX : <code>number</code>

NUMBER representing the horizontal scale of the element,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.scaleY"></a>

### CanvasImage.scaleY : <code>number</code>

NUMBER representing the vertical scale of the element,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.blendMode"></a>

### CanvasImage.blendMode : <code>number</code>

NUMBER representing the blend or masking style applied to the element. <b>Will not work on SVG image sources in Firefox.</b>

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.visible"></a>

### CanvasImage.visible : <code>number</code>

BOOLEAN representing whether or not the element should be drawn,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.transformOrigin"></a>

### CanvasImage.transformOrigin : <code>string</code>

STRING representing the origin from which to perform scales and rotations. Written as two values in a string with either a '%' or 'px' marker (ie '50% 50%' or '5px 100px').
<br><br>
<b>NOTE::</b><br>

<ul>
<li>'50% 50%' is centered, based on percentage</li>
<li>'50px 50px' is 50 px away from '0% 0%' vertically and horizontally</li>
<li>'50 50' is the same as '50px 50px'</li>
<li>Values can be mixed: '50% 10px', for instance</li>
</ul>
<br><br>

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
**Example**

```js
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '50% 50%'
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10px 100px'
View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10 100'
```

<a name="CanvasImage.shadowColor"></a>

### CanvasImage.shadowColor : <code>string</code>

STRING representing the color of the drop shadow in RGBA format,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.shadowBlur"></a>

### CanvasImage.shadowBlur : <code>number</code>

NUMBER representing the amount of blur on the drop shadow,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.shadowAngle"></a>

### CanvasImage.shadowAngle : <code>number</code>

NUMBER representing the angle, in degrees, of the drop shadow,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.shadowDistance"></a>

### CanvasImage.shadowDistance : <code>number</code>

NUMBER representing the distance of the drop shadow from the element,

**Kind**: static property of [<code>CanvasImage</code>](#CanvasImage)  
<a name="CanvasImage.id"></a>

### CanvasImage.id : <code>string</code>

READ-ONLY: STRING representing the id of the element

**Kind**: static constant of [<code>CanvasImage</code>](#CanvasImage)
