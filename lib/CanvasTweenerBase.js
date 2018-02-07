class CanvasTweenerBase {
	constructor(target) {
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
export default CanvasTweenerBase