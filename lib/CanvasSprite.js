/** 
	@class CanvasSprite
	@desc
		Uses a {@link CanvasDrawer}'s {@link CanvasImage} to create an animated sprite using JSON data for positioning and sizing.
		<br><br>

		<b>NOTE::</b>
		This class is a work in progress and was built specifically for <b>game dev</b>

	@example
		var _mySprite = new CanvasSprite({
			element: _myCanvasDrawer.elements.character,
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

		_mySprite.sequence = 'fall';
		_mySprite.nextFrame();
*/
function CanvasSprite(arg) {

	// create a simple span DOM element for dispatching events on
	var C = document.createElement('span');

	/** ----------------------------------------------------------------------------------------------- */
	// PUBLIC PROPERTIES
	C.sheet = arg.sheet;
	C.element = arg.element;
	C.data = arg.data;
	if (C.data.frameNumber) {
		C.total = C.data.frameNumber;
		C.updateFun = updateSprite;
		C.rows = C.data.rows;
		C.cols = C.data.cols;
		C.width = C.data.width;
		C.height = C.data.height;
	} else {
		C.total = C.data.fs.length - 1
		C.updateFun = updateAtlas;
	}
	C.callback = arg.callback;
	C.frame = 0;
	C.sequences = arg.sequences || {}
	C.id = arg.id || 'none';

	/** ----------------------------------------------------------------------------------------------- */
	// PRIVATE PROPERTIES
	var _sequenceName = 'all';
	var _sequence;
	var _scale = arg.scale || 1;
	var _offX = arg.offsetX || 0;
	var _offY = arg.offsetY || 0;

	/** ----------------------------------------------------------------------------------------------- */
	// GETTER | SETTERS

	// get : mySprite.sequence() // 'default'
	// set : mySprite.sequence ( 'walk' );
	C.sequence = function(name) {
		// GET
		if (name == undefined) return _sequenceName;

		// SET
		_sequence = C.sequences[name];
		_sequenceName = name;
		C.frame = _sequence[0];
		C.total = _sequence[1];

		C.updateFun();
	}

	/** ----------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS
	C.nextFrame = function() {
		C.updateFun();
		if (++C.frame >= C.total) {
			C.dispatchEvent(new CustomEvent('canvasSpriteComplete'));
			C.frame = _sequence[0];
		}
		// trace(C.frame, C.total);
	}

	C.gotoFrame = function(frameNum) {
		C.frame = frameNum;
		if (C.frame > C.total || C.frame < _sequence[0]) C.frame = _sequence[0];
		C.updateFun();
	}

	/** ----------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function updateAtlas() {
		var coor = C.data.fs[C.frame];
		var f = coor.f;
		var off = coor.s;

		C.element._sourceX = f.x;
		C.element._sourceY = f.y;
		C.element._sourceW = f.w;
		C.element._sourceH = f.h;

		C.element.x = ~~((off.x + _offX) * _scale);
		C.element.y = ~~((off.y + _offY) * _scale);

		C.element.width = ~~(f.w * _scale);
		C.element.height = ~~(f.h * _scale);

		if (C.callback) C.callback();
	}

	function updateSprite() {
		C.element._sourceX = (C.frame % C.cols) * C.width;
		C.element._sourceY = Math.floor(C.frame / C.cols) * C.height;

		if (C.callback) C.callback();
		// C.element.sourceY = f.y;
	}

	/** ----------------------------------------------------------------------------------------------- */
	// INIT
	C.sequences.all = [0, C.total];
	C.sequence(_sequenceName);

	return C;
}
export default CanvasSprite