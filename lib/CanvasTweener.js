/**
	@class CanvasTweener
	@desc
		<a href="https://github.com/ff0000-ad-tech/ad-canvas">Github repo</a>
		<br><br>
		
		Tween engine for {@link CanvasDrawer}
*/

/**
	@memberof CanvasTweener
	@method init
	@param {CanvasElement|CanvasDrawer} target
		either a {@link CanvasElement} or a {@link CanvasDrawer} to which to apply and enable tweening
	@desc
		Apply tweening capabilities to a given CanvasDrawer
	@example
		// directly to a CanvasDrawer
		CanvasTweener.init(_myCanvasDrawer);
		
		// using an element, for some reason
		CanvasTweener.init(_myCanvasDrawer.elements.rectangle);
		(end)
*/

/**
	@memberof CanvasTweener
	@var {object} tween
	@property {function} to
	@property {function} from
	@property {function} fromTo
	@property {function} set
	@property {function} start 
		{@link CanvasTweener.start}
	@property {function} kill 
		{@link CanvasTweener.kill}
	@desc
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
		First example uses {@link CanvasTwener} to execute the tweens:<br>
		<codeblock>
			// referring to an object to tween directly through the elements object
			adData.elements.myCanvasDrawer.tween.to(adData.elements.myCanvasDrawer.elements.circle, 1, {x: 100 });
			// referring to an object to tween by its ID, which is a string
			adData.elements.myCanvasDrawer.tween.from('arc', 1, { x: 100 });
			adData.elements.myCanvasDrawer.tween.start();
		</codeblock>
		<br><br>
		<b>DISCOURAGED METHOD</b><br>
		<codeblock>
			TweenLite.to('circle', 3, {x: 100, onUpdate: adData.elements.myCanvasDrawer.update.bind(adData.elements.myCanvasDrawer)});
			TweenLite.to('arc', 3, {x: 100,  onUpdate: adData.elements.myCanvasDrawer.update.bind(adData.elements.myCanvasDrawer)});
		</codeblock>
		<br><br>
		<b>THE REASON WHY:</b><br>
		Notice how directly calling TweenLite requires an <u>onUpdate</u> function for each tween?
		<ul>
			<li>Doing so calls CanvasDrawer.update() simultaneously from two sources (one per tween; in this case, two in total), 
				increasing the work done to clear and re-draw the canvas </li>
			<li>Using TweenLite.to() instead of <code>CanvasDrawer.tween.to()</code> might make sense for single tweens, but not multiple starting at the same time.</li>
		</ul>
*/

/**
	@memberof CanvasTweener
	@method start
	@param {object} args
		An object with parameters for overall tween. See properties for more info.
		@property {number} delay
			a NUMBER by which to delay the entirety of a CanvasDrawer tween. Defaults to 0
		@property {number} timePadding
			a NUMBER by which to pad the total duration of a CanvasDrawer tween. Useful if a tween appears to be completing early. Defaults to 0
		@property {function} onStart
			a FUNCTION to run at the beginning of the CanvasDrawer tween
		@property {array} onStartParams
			an ARRAY of paramters for the onStart function
		@property {function} onUpdate
			a FUNCTION to run during the life of the CanvasDrawer tween
		@property {array} onUpdateParams
			an ARRAY of paramters for the onUpdate function
		@property {number} onComplete
			a FUNCTION to run at the conclussion of the CanvasDrawer tween
		@property {array} onCompleteParams
			an ARRAY of paramters for the onComplete function
	@desc
		Starts tweening all tweens created by {@link CanvasDrawer.tween} and creates a dummy tween which runs {@link CanvasDrawer.update} so drawings will get cleared and re-drawn
		<br><br>
		<b>NOTE!!!</b>
		This method is on the {@link CanvasTweener.tween} object!
	@example
		adData.elements.myCanvasDrawer.tween.to(adData.elements.myCanvasDrawer.elements.circle, 1, {rotation: 360, width: 100, delay: 5 });
		adData.elements.myCanvasDrawer.tween.to(adData.elements.myCanvasDrawer.elements.arc, 1, {rotation: 360, width: 100, delay: 5 });
		adData.elements.myCanvasDrawer.tween.start( { delay: 2, timePadding: 0.02, onUpdate: trace, onUpdateParams:['look at this tween go!'] } );
*/

/**
	@memberof CanvasTweener
	@method kill
	@desc
		Kills all active tweens of this {@link CanvasDrawer} instance; clears CanvasDrawer._allTweens as well
		<br><br>
		<b>NOTE!!!</b>
		This method is on the {@link CanvasTweener.tween} object!
	@example
		// referring to an object to tween directly through the elements object
		adData.elements.myCanvasDrawer.tween.to('circle', 1, {rotation: 360, width: 100, delay: 5 });
		adData.elements.myCanvasDrawer.tween.start();
		adData.elements.myCanvasDrawer.tween.kill();
	(end)
*/

import CanvasTweenerBase from './CanvasTweenerBase'

export function init(target) {
	let _ctBase = new CanvasTweenerBase(target.stage || target)
}