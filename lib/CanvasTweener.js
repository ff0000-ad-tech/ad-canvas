/**
	@npmpackage
	@class CanvasTweener
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasTweener } from 'ad-canvas'
		</codeblock>
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
			View.main.myCanvasDrawer.tween.to(View.main.myCanvasDrawer.elements.circle, 1, {x: 100 });
			// referring to an object to tween by its ID, which is a string
			View.main.myCanvasDrawer.tween.from('arc', 1, { x: 100 });
			View.main.myCanvasDrawer.tween.start();
		</codeblock>
		<br><br>
		<b>DISCOURAGED METHOD</b><br>
		<codeblock>
			TweenLite.to('circle', 3, {x: 100, onUpdate: View.main.myCanvasDrawer.update.bind(View.main.myCanvasDrawer)});
			TweenLite.to('arc', 3, {x: 100,  onUpdate: View.main.myCanvasDrawer.update.bind(View.main.myCanvasDrawer)});
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
		View.main.myCanvasDrawer.tween.to(View.main.myCanvasDrawer.elements.circle, 1, {rotation: 360, width: 100, delay: 5 });
		View.main.myCanvasDrawer.tween.to(View.main.myCanvasDrawer.elements.arc, 1, {rotation: 360, width: 100, delay: 5 });
		View.main.myCanvasDrawer.tween.start( { delay: 2, timePadding: 0.02, onUpdate: trace, onUpdateParams:['look at this tween go!'] } );
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
		View.main.myCanvasDrawer.tween.to('circle', 1, {rotation: 360, width: 100, delay: 5 });
		View.main.myCanvasDrawer.tween.start();
		View.main.myCanvasDrawer.tween.kill();
*/

export function init(target) {
	let _ctBase = new CanvasTweenerBase()
	_ctBase.init(target.stage || target)
}

//
class CanvasTweenerBase {
	constructor() {}

	init(target) {
		let CTB = this
		CTB._drawer = target

		CTB._drawer.tween = {
			to: function(target, time, args) {
				CTB._tweenEngine('to', [target, time, args])
			},
			from: function(target, time, args) {
				CTB._tweenEngine('from', [target, time, args])
			},
			fromTo: function(target, time, argsFrom, argsTo) {
				CTB._tweenEngine('fromTo', [target, time, argsFrom, argsTo])
			},
			set: function(target, args) {
				CTB._tweenEngine('set', [target, args])
			},
			start: function(args) {
				CTB._tweenStart(args)
			},
			kill: function() {
				CTB._tweenKill()
			}
		}
	}

	/* ------------------------------------------------
			The primary engine which handles all the tweening
			
			CALLED ONLY FROM CanvasDrawer.tween();
			*/

	_tweenEngine(tweenFun, args) {
		let CTB = this
		//var _tempStartFun;

		args[0] = typeof args[0] === 'string' ? CTB._drawer.elements[args[0]] : args[0]

		// this for loop updates an element's transformOrigin based on the tween argument object
		// then removes the transformOrigin property from the tween argument object
		// if we didn't remove the property, we would tween the value of transformOrigin, rather that around that origin
		var _argIndex = {
			to: 2,
			from: 2,
			fromTo: 3,
			set: 1
		}
		if (args[_argIndex[tweenFun]].transformOrigin) {
			args[0].transformOrigin = args[_argIndex[tweenFun]].transformOrigin
			delete args[_argIndex[tweenFun]].transformOrigin
		}

		// changing a tween.from() to a tween.to() to bypass a glitch caused by tween.from with a delay
		if (tweenFun === 'from') {
			tweenFun = 'to'
			var _from = {}
			var _val
			// args[2] for tween.fun is all the arguments passed to tween, such as rotation or alpha
			for (var item in args[2]) {
				// if args[0][item] is undefined, it means the CanvasElement doesn't have that property
				// eg CanvasElements don't have 'delay' or 'onUpdate' properties, so we ignore those cases
				// we only change properties that do exist, like rotation, scale, or alpha
				if (args[0][item] != undefined) {
					_from[item] = args[2][item]
					// this changes the target values to the current values
					args[2][item] = args[0][item]

					_val = String(_from[item]).replace(/=/g, '')
					// this changes the current values to the target values
					if (_val.indexOf('-') >= 0 || _val.indexOf('+') >= 0) args[0][item] += Number(_val)
					else args[0][item] = Number(_val)
				}
			}
		}

		args[args.length - 1].paused = args[args.length - 1].paused === false ? false : true
		var _newTween = TweenLite[tweenFun].apply(CTB, args)
		CTB._drawer._allTweens['newTween' + CTB._drawer._allTweensSize++] = _newTween
		if (args[args.length - 1].paused === false) CTB._tweenStart()
	}

	/* ------------------------------------------------
		The start function for all of this CanvasDrawer's tweens
		
		CALLED ONLY FROM CanvasDrawer.tween.start();
		*/
	_tweenStart(args) {
		let CTB = this
		var _duration = 0
		var _tweenDuration
		var _args = args || []

		for (var dI in CTB._drawer._allTweens) {
			CTB._drawer._allTweens[dI].delay(CTB._drawer._allTweens[dI].delay() + (_args.delay || 0))

			_tweenDuration = CTB._drawer._allTweens[dI].duration() + CTB._drawer._allTweens[dI].delay()

			if (_tweenDuration > _duration) _duration = _tweenDuration
			CTB._drawer._allTweens[dI].play()
		}

		// if a _dummyTween already exists from a previous tween.start() then we stop it then add to it
		if (CTB._drawer._dummyTween) {
			if (_tweenDuration < _duration) _tweenDuration = _duration
			CTB._drawer._dummyTween.kill()
		}

		var _startFun = null
		var _updateFun
		var _completeFun

		if (_args.onStart) {
			_startFun = function() {
				_args.onStart.apply(this, _args.onStartParams ? _args.onStartParams : null)
			}
		}

		if (_args.onUpdate) {
			_updateFun = function() {
				_args.onUpdate.apply(this, _args.onUpdateParams ? _args.onUpdateParams : null)
				CTB._drawer.update()
			}
		} else {
			_updateFun = CTB._drawer.update.bind(CTB._drawer)
		}

		if (_args.onComplete) {
			_completeFun = function() {
				CTB._tweenKill()
				_args.onComplete.apply(this, _args.onCompleteParams ? _args.onCompleteParams : null)
			}
		} else {
			_completeFun = CTB._tweenKill.bind(CTB)
		}

		_duration += _args.timePadding && _args.timePadding > 0 ? _args.timePadding : 0

		CTB._drawer._dummyTween = TweenLite.to({}, _duration, {
			onStart: _startFun,
			onUpdate: _updateFun,
			onComplete: _completeFun,
			delay: _args.delay || 0
		})
		//_updateFun();
	}

	/* ------------------------------------------------
		The kill function for all of this CanvasDrawer's tweens
		
		CALLED ONLY FROM CanvasDrawer.tween.kill();
		*/

	_tweenKill() {
		let CTB = this

		for (var item in CTB._drawer._allTweens) {
			if (CTB._drawer._allTweens[item]) CTB._drawer._allTweens[item].kill()
			delete CTB._drawer._allTweens[item]
		}

		CTB._drawer._allTweens = {}
		CTB._drawer._allTweensSize = 0

		if (CTB._drawer._dummyTween) CTB._drawer._dummyTween.kill()
		CTB._drawer._dummyTween = null
	}
}
// export default CanvasTweenerBase
