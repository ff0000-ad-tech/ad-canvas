/** 
	@npmpackage
	@class CanvasUtils
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasUtils } from 'ad-canvas'
		</codeblock>
		<br><br>
		
		Utilities for Canvas DOM elements
*/

/**
	@memberof CanvasUtils
	@method getImageData
	@param {canvas|UICanvas|CanvasDrawer} source
		a CANVAS DOM element or CanvasDrawer from whcih to get image data
	@desc
		Gets the image data associated with a canvas
	@example	
		CanvasUtils.getImageData(_myCanvas);
*/
export function getImageData(source) {
	var _canvas = source.canvas || source
	try {
		return _canvas.context2d.getImageData(0, 0, _canvas.width, _canvas.height)
	} catch (err) {
		_returnError(source, 'get')
	}
}

/**
	@memberof CanvasUtils
	@method setImageData
	@param {canvas|UICanvas|CanvasDrawer} target
		a CANVAS DOM element or CanvasDrawer to apply image data
	@param {array} data
		the image data to apply to the canvas
	@desc
		Applies image data to a canvas.
	@example
		var _imageData = CanvasUtils.getImageData(_sourceCanvas);
		CanvasUtils.setImageData(_targetCanvas, _imageData);
*/
export function setImageData(target, data) {
	var _canvas = target.canvas || target
	try {
		_canvas.context2d.putImageData(data, 0, 0)
	} catch (err) {
		_returnError(target, 'set')
	}
}

//
function _returnError(source, getOrSet) {
	var _output = 'Unable to ' + getOrSet + ' image data, try a Local Server or network connection.\n- And/or -\n'
	if (source.canvas) {
		_output += "ImageManager failed to load ONE or ALL of the following as 'forCanvas':"
		for (var dI in source.elements) {
			if (source.elements[dI]._type === 'image') {
				var _src = source.elements[dI].src
				_output += '\n\t' + _src.id + ': ' + _src.src
			}
		}
	}
	_output += '\nMake sure images used on Canvas elements are loaded using the model: '
	_output += "ImageManager.addToLoad ( 'http://some/full/file/path/sample.png', { forCanvas:true });"

	throw new Error(_output)
}
