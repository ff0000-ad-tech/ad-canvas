<a name="CanvasTweener"></a>

## CanvasTweener
**Kind**: global class  
**Npmpackage**:   

* [CanvasTweener](#CanvasTweener)
    * [new CanvasTweener()](#new_CanvasTweener_new)
    * [.tween](#CanvasTweener.tween) : <code>object</code>
    * [.init(target)](#CanvasTweener.init)
    * [.start(args)](#CanvasTweener.start)
    * [.kill()](#CanvasTweener.kill)

<a name="new_CanvasTweener_new"></a>

### new CanvasTweener()
Tween engine for [CanvasDrawer](#CanvasDrawer)<br>
<pre class="sunlight-highlight-javascript">
import { CanvasTweener } from 'ad-canvas'
</pre>

<a name="CanvasTweener.tween"></a>

### CanvasTweener.tween : <code>object</code>
Object containing functions to create a paused TweenLite animation which will re-draw this CanvasDrawer on tween.start().
<br><br>
These animation functions have the same parameters and formatting as Greensock tweens:<br>
<ul>
	<li>tween.to()</li>
	<li>tween.from()</li>
	<li>tween.fromTo()</li>
	<li>tween.set()</li>
</ul>
<br>
See greensock docs: {@link http://greensock.com/docs/#/HTML5/GSAP/TweenLite/ }
<br><br>
<b>PREFERRED METHOD</b><br>
First example uses [CanvasTwener](CanvasTwener) to execute the tweens:<br>
<pre class="sunlight-highlight-javascript">
// referring to an object to tween directly through the elements object
View.main.myCanvasDrawer.tween.to(View.main.myCanvasDrawer.elements.circle, 1, {x: 100 });

// referring to an object to tween by its ID, which is a string
View.main.myCanvasDrawer.tween.from('arc', 1, { x: 100 });
View.main.myCanvasDrawer.tween.start();
</pre>
<br><br>
<b>DISCOURAGED METHOD</b><br>
<pre class="sunlight-highlight-javascript">
TweenLite.to('circle', 3, {x: 100, onUpdate: View.main.myCanvasDrawer.update.bind(View.main.myCanvasDrawer)});
TweenLite.to('arc', 3, {x: 100,  onUpdate: View.main.myCanvasDrawer.update.bind(View.main.myCanvasDrawer)});
</pre>
<br><br>
<b>THE REASON WHY:</b><br>
Notice how directly calling TweenLite requires an <u>onUpdate</u> function for each tween?
<ul>
	<li>Doing so calls CanvasDrawer.update() simultaneously from two sources (one per tween; in this case, two in total), 
		increasing the work done to clear and re-draw the canvas </li>
	<li>Using TweenLite.to() instead of <code>CanvasDrawer.tween.to()</code> might make sense for single tweens, but not multiple starting at the same time.</li>
</ul>

**Kind**: static property of [<code>CanvasTweener</code>](#CanvasTweener)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| to | <code>function</code> |  |
| from | <code>function</code> |  |
| fromTo | <code>function</code> |  |
| set | <code>function</code> |  |
| start | <code>function</code> | [start](#CanvasTweener.start) |
| kill | <code>function</code> | [kill](#CanvasTweener.kill) |

<a name="CanvasTweener.init"></a>

### CanvasTweener.init(target)
Apply tweening capabilities to a given CanvasDrawer

**Kind**: static method of [<code>CanvasTweener</code>](#CanvasTweener)  

| Param | Type | Description |
| --- | --- | --- |
| target | [<code>CanvasElement</code>](#CanvasElement) \| [<code>CanvasDrawer</code>](#CanvasDrawer) | either a [CanvasElement](#CanvasElement) or a [CanvasDrawer](#CanvasDrawer) to which to apply and enable tweening |

**Example**  
```js
// directly to a CanvasDrawer
CanvasTweener.init(_myCanvasDrawer);

// using an element, for some reason
CanvasTweener.init(_myCanvasDrawer.elements.rectangle);
```
<a name="CanvasTweener.start"></a>

### CanvasTweener.start(args)
Starts tweening all tweens created by [CanvasDrawer.tween](CanvasDrawer.tween) and creates a dummy tween which runs [update](#CanvasDrawer.update) so drawings will get cleared and re-drawn
	<br><br>
	<b>NOTE!!!</b>
	This method is on the [tween](#CanvasTweener.tween) object!

**Kind**: static method of [<code>CanvasTweener</code>](#CanvasTweener)  

| Param | Type | Description |
| --- | --- | --- |
| args | <code>object</code> | An object with parameters for overall tween. See properties for more info. |

**Properties**

| Name | Type | Description |
| --- | --- | --- |
| delay | <code>number</code> | a NUMBER by which to delay the entirety of a CanvasDrawer tween. Defaults to 0 |
| timePadding | <code>number</code> | a NUMBER by which to pad the total duration of a CanvasDrawer tween. Useful if a tween appears to be completing early. Defaults to 0 |
| onStart | <code>function</code> | a FUNCTION to run at the beginning of the CanvasDrawer tween |
| onStartParams | <code>array</code> | an ARRAY of paramters for the onStart function |
| onUpdate | <code>function</code> | a FUNCTION to run during the life of the CanvasDrawer tween |
| onUpdateParams | <code>array</code> | an ARRAY of paramters for the onUpdate function |
| onComplete | <code>number</code> | a FUNCTION to run at the conclussion of the CanvasDrawer tween |
| onCompleteParams | <code>array</code> | an ARRAY of paramters for the onComplete function |

**Example**  
```js
View.main.myCanvasDrawer.tween.to(View.main.myCanvasDrawer.elements.circle, 1, {rotation: 360, width: 100, delay: 5 });
View.main.myCanvasDrawer.tween.to(View.main.myCanvasDrawer.elements.arc, 1, {rotation: 360, width: 100, delay: 5 });
View.main.myCanvasDrawer.tween.start( { delay: 2, timePadding: 0.02, onUpdate: trace, onUpdateParams:['look at this tween go!'] } );
```
<a name="CanvasTweener.kill"></a>

### CanvasTweener.kill()
Kills all active tweens of this [CanvasDrawer](#CanvasDrawer) instance; clears CanvasDrawer._allTweens as well
	<br><br>
	<b>NOTE!!!</b>
	This method is on the [tween](#CanvasTweener.tween) object!

**Kind**: static method of [<code>CanvasTweener</code>](#CanvasTweener)  
**Example**  
```js
// referring to an object to tween directly through the elements object
View.main.myCanvasDrawer.tween.to('circle', 1, {rotation: 360, width: 100, delay: 5 });
View.main.myCanvasDrawer.tween.start();
View.main.myCanvasDrawer.tween.kill();
```
