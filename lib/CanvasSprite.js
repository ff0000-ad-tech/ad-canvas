/** 
	@npmpackage
	@class CanvasSprite
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasSprite } from 'ad-canvas'
		</codeblock>
		<br><br>
		Uses a {@link CanvasDrawer}'s {@link CanvasImage} to create either a traditional sprite animation or a sprite-atlas animation (using JSON data for positioning and sizing).
		<br><br>

		<b>NOTE::</b>
		This class is a work in progress and was built specifically for <b>game dev</b>
		<br>
		This class <i>also</i> does not contain any sort of <b>play()</b> or <b>stop()</b> methods - it is independant of FrameRate. The idea is that this class allows you to update the CanvasImage's rendering data, but not necessarily redraw (update) your CanvasDrawer entirely.

	@example
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

	@example
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
*/
function CanvasSprite(arg) {
	// create a simple span DOM element for dispatching events on
	var C = document.createElement('span')

	/** ----------------------------------------------------------------------------------------------- */
	// PUBLIC PROPERTIES
	C.element = arg.element
	C.data = arg.data
	if (C.data.total) {
		C.total = C.data.total - 1
		C.updateFun = updateSprite
		C.cols = C.data.cols
		C.width = C.data.width
		C.height = C.data.height
	} else {
		C.total = C.data.fs.length - 1
		C.updateFun = updateAtlas
	}
	C.callback = arg.callback
	C.frame = 0
	C.sequences = arg.sequences || {}
	C.id = arg.id || 'none'
	C.loopTarget = (C.data.loopTarget || 1) - 1
	if (C.data.loopTarget === 'stop') C.loopTarget = C.total
	C.speedScale = C.data.speedScale || 1

	/** ----------------------------------------------------------------------------------------------- */
	// PRIVATE PROPERTIES
	var _sequenceName = 'all'
	var _sequence
	var _scale = arg.scale || 1
	var _offX = arg.offsetX || 0
	var _offY = arg.offsetY || 0
	var _endReached
	var _startReached

	/** ----------------------------------------------------------------------------------------------- */
	// GETTER | SETTERS

	// get : mySprite.sequence() // 'default'
	// set : mySprite.sequence ( 'walk' );
	C.sequence = function(name) {
		// GET
		if (name == undefined) return _sequenceName

		// SET
		_sequence = C.sequences[name]
		_sequenceName = name
		C.frame = _sequence[0] === 1 ? 0 : _sequence[0]
		C.total = _sequence[1]

		C.updateFun()
	}

	/** ----------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS
	C.nextFrame = function() {
		if (_endReached) {
			C.dispatchEvent(new CustomEvent('canvasSpriteComplete'))
			_endReached = false
		}

		C.updateFun()
		C.frame += C.speedScale
		if (C.frame > C.total) {
			_endReached = true
			C.frame = _sequence[0]
		}
	}

	C.prevFrame = function() {
		if (_startReached) {
			C.dispatchEvent(new CustomEvent('canvasSpriteComplete'))
			_startReached = false
		}

		C.updateFun()
		C.frame -= C.speedScale
		if (C.frame <= -1) {
			_startReached = true
			C.frame = C.total
		}
	}

	C.gotoFrame = function(frameNum) {
		// trace('CanvasSprite.gotoFrame()', frameNum);
		C.frame = frameNum
		if (C.frame > C.total || C.frame < _sequence[0]) C.frame = _sequence[0]
		C.updateFun()
	}

	/** ----------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function updateAtlas() {
		var coor = C.data.fs[C.frame]
		var f = coor.f
		var off = coor.s

		C.element._sourceX = f.x
		C.element._sourceY = f.y
		C.element._sourceW = f.w
		C.element._sourceH = f.h

		C.element.x = ~~((off.x + _offX) * _scale)
		C.element.y = ~~((off.y + _offY) * _scale)

		C.element.width = ~~(f.w * _scale)
		C.element.height = ~~(f.h * _scale)

		if (C.callback) C.callback()
	}

	function updateSprite() {
		C.element._sourceX = (C.frame % C.cols) * C.width
		C.element._sourceY = Math.floor(C.frame / C.cols) * C.height

		if (C.callback) C.callback()

		// C.element.sourceY = f.y;
	}

	/** ----------------------------------------------------------------------------------------------- */
	// INIT
	C.sequences.all = [C.loopTarget, C.total]
	C.sequence(_sequenceName)

	return C
}
export default CanvasSprite
