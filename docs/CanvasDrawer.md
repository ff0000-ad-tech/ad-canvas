<a name="CanvasDrawer"></a>

## CanvasDrawer
**Kind**: global class  
**Npmpackage**:   
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | a STRING id suffix the canvas DOM element will go by; is appeneded to 'cd_' |
| target | <code>element</code> | the target DOM element in which to place the canvas element; if undefined, element will not be added to DOM |
| css | <code>object</code> | an optional CSS object defining the style of the canvas. If undefined, will size canvas to the width and height of the target DOM element. |
| clearCanvas | <code>boolean</code> | an optional BOOLEAN which determines if, on update, the CanvasDrawer clears the contents of its canvas before redrawing every CanvasElement; defaults to true. |
| retina | <code>boolean</code> | an optional BOOLEAN which determine whether or not to create the canvas and its elements at retina (double) resolution; defaults to false. |
| subPixeling | <code>boolean</code> | an optional BOOLEAN which will override retina to true but preserve certain width/height values to produce smoother sub-pixeling in animations; defaults to false. |
| debug | <code>boolean</code> | an optional BOOLEAN value of true will make the canvas background green; defaults to false. |


* [CanvasDrawer](#CanvasDrawer)
    * [new CanvasDrawer(arg)](#new_CanvasDrawer_new)
    * [.canvas](#CanvasDrawer.canvas) : <code>UICanvas</code>
    * [.ctx](#CanvasDrawer.ctx)
    * [.clearCanvas](#CanvasDrawer.clearCanvas) : <code>boolean</code>
    * [.qualityScale](#CanvasDrawer.qualityScale) : <code>number</code>
    * [.elements](#CanvasDrawer.elements) : <code>object</code>
    * [.elementsLength](#CanvasDrawer.elementsLength) : <code>number</code>
    * [.width](#CanvasDrawer.width) : <code>number</code>
    * [.height](#CanvasDrawer.height) : <code>number</code>
    * [.removeElement(target)](#CanvasDrawer.removeElement)
    * [.removeAllElements()](#CanvasDrawer.removeAllElements)
    * [.clear()](#CanvasDrawer.clear)
    * [.update()](#CanvasDrawer.update)

<a name="new_CanvasDrawer_new"></a>

### new CanvasDrawer(arg)
Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>	
<br>
<pre class="sunlight-highlight-javascript">
import { CanvasDrawer } from 'ad-canvas'
</pre>
<br><br>
Is the returned instance of CanvasDrawer.
<br><br>	
<b>NOTE::</b>
<ul>
	<li>The update() method is key to displaying any element added creating a new CanvasElement. If you add something and don't see it, you might not have used update()</li>
	<li>You <b>SHOULD NOT</b> run the update() method after every individual element is added, but rather <b>once</b> after the creation of all your elements</li>
</ul>


| Param | Type | Description |
| --- | --- | --- |
| arg | <code>object</code> | Settings are passed in via this object, see Properties for more info: |

**Example**  
```js
View.main.myCanvasDrawer = new CanvasDrawer({
	id: 'myCanvasDrawer', 
	target: View.main,
	css: {
		x: 0,
		y: 0,
		width: 300,
		height:	250
	},
	retina: true,
	debug: false
})
```
<a name="CanvasDrawer.canvas"></a>

### CanvasDrawer.canvas : <code>UICanvas</code>
the actual canvas DOM element in which the CanvasDrawer's instance draws

**Kind**: static property of [<code>CanvasDrawer</code>](#CanvasDrawer)  
<a name="CanvasDrawer.ctx"></a>

### CanvasDrawer.ctx
The context2d of the canvas DOM element

**Kind**: static property of [<code>CanvasDrawer</code>](#CanvasDrawer)  
<a name="CanvasDrawer.clearCanvas"></a>

### CanvasDrawer.clearCanvas : <code>boolean</code>
BOOLEAN for if the canvas drawer should clear itself on every update before re-drawing its CanvasElements

**Kind**: static property of [<code>CanvasDrawer</code>](#CanvasDrawer)  
<a name="CanvasDrawer.qualityScale"></a>

### CanvasDrawer.qualityScale : <code>number</code>
NUMBER representing the scale of the canvas DOM element: if retina or subPixeling were set to true, is equal to 2. Defaults to 1.

**Kind**: static property of [<code>CanvasDrawer</code>](#CanvasDrawer)  
<a name="CanvasDrawer.elements"></a>

### CanvasDrawer.elements : <code>object</code>
Object containing all of the drawing elements created through new CanvasElements.

**Kind**: static property of [<code>CanvasDrawer</code>](#CanvasDrawer)  
<a name="CanvasDrawer.elementsLength"></a>

### CanvasDrawer.elementsLength : <code>number</code>
Number of total elements

**Kind**: static property of [<code>CanvasDrawer</code>](#CanvasDrawer)  
<a name="CanvasDrawer.width"></a>

### CanvasDrawer.width : <code>number</code>
Number to set or retrieve the width of the canvas

**Kind**: static property of [<code>CanvasDrawer</code>](#CanvasDrawer)  
<a name="CanvasDrawer.height"></a>

### CanvasDrawer.height : <code>number</code>
Number to set or retrieve the width of the canvas

**Kind**: static property of [<code>CanvasDrawer</code>](#CanvasDrawer)  
<a name="CanvasDrawer.removeElement"></a>

### CanvasDrawer.removeElement(target)
Removes a specific CanvasElement from CanvasDrawer.elements by either its ID or a direct reference to the CanvasElement.

**Kind**: static method of [<code>CanvasDrawer</code>](#CanvasDrawer)  

| Param | Type | Description |
| --- | --- | --- |
| target | <code>element</code> \| <code>string</code> | the STRING ID used to reference an element or a reference to the ELEMENT itself |

**Example**  
```js
View.main.myCanvasDrawer.removeElement('smoke')
View.main.myCanvasDrawer.removeElement(View.main.myCanvasDrawer.elements.smoke)
```
<a name="CanvasDrawer.removeAllElements"></a>

### CanvasDrawer.removeAllElements()
Removes everything from CanvasDrawer.elements.

**Kind**: static method of [<code>CanvasDrawer</code>](#CanvasDrawer)  
**Example**  
```js
View.main.myCanvasDrawer.removeAllElements()
```
<a name="CanvasDrawer.clear"></a>

### CanvasDrawer.clear()
Wipes the canvas clean of any image data

**Kind**: static method of [<code>CanvasDrawer</code>](#CanvasDrawer)  
<a name="CanvasDrawer.update"></a>

### CanvasDrawer.update()
Clear and draw all draw items in the elements dictionary associated with this CanvasDrawer.
	<br><br>Renders CanvasElements in order of creation.
	<br><br>
	will not draw the item if <code>elements.visible !== true</code> or <code>elements.alpha === 0</code>

**Kind**: static method of [<code>CanvasDrawer</code>](#CanvasDrawer)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| array | <code>array</code> | an OPTIONAL array of CanvasElements associated with this CanvasDrawer; rather than rendering <b>all</b> of the CanvasElements <b>in order of creation</b> this will <b>only</b> the CanvasElements within the given array, and <b>in that order</b> - order of creation does not apply in this instance. |

