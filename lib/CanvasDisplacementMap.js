/**
	@npmpackage
	@class CanvasDisplacementMap
	@param {object} imgObj
		an object containing the arguments for defining / orienting the image, see Properties for more info:
	@property {canvas|canvasDrawer|ImageId} source
		the CanvasDrawer instance or UICanvas / canvas element from which to get the image that will be displaced
	@property {canvas|canvasDrawer|ImageId} map
		the CanvasDrawer instance or UICanvas / canvas element from which to get the disaplcement map bitmap data to apply to the source
	@property {CanvasDrawer|UICanvas|canvas} target
		the CanvasDrawer instance or UICanvas / canvas element in which to draw the displaced image
	@property {object} params
		an OBJECT of optional parameters
		@property {number} params.x
			A NUMBER representing the X offset of the displacement
		@property {number} params.y
			A NUMBER representing the Y offset of the displacement
		@property {number} params.scaleX
			A NUMBER for how much distortion is applied to the X axis; defaults to 0
		@property {number} params.scaleY
			A NUMBER for how much distortion is applied to the Y axis; defaults to 0
		@property {number} params.channelX
			A NUMBER representing the color channel on which to displace the source bitmap data along the X axis; defaults to CanvasDisplaceChannel.RED
		@property {number} params.channelY
			A NUMBER representing the color channel on which to displace the source bitmap data along the Y axis; defaults to CanvasDisplaceChannel.RED
		@desc
			Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
			<br>
			<codeblock>
				// importing into an ES6 class
				import { CanvasDisplacementMap } from 'ad-canvas'
			</codeblock>
			<br><br>
			<b>Sample ::</b><br>
			Create a displacement map filter and tween the distortion from 0 to 1000 along the X:<br>
			<codeblock>
				T.mapFilter = new CanvasDisplacementMap({
					source: _canvasDrawerSource,
					map: _canvasDrawerMap,
					target: _canvasDrawerTarget
				})
			</codeblock>
			<br>
			*/

/**
	@memberof CanvasDisplacementMap
	@const {CanvasDrawer|UICanvas|canvas} source
		An instance of CanvasDrawer or a UICanvas / HTML Canvas from which to pull bitmap data
		*/

/**
	@memberof CanvasDisplacementMap
	@const {CanvasDrawer|UICanvas|canvas} map
		An instance of CanvasDrawer or a UICanvas / HTML Canvas from which to pull the displacement map bitmap data
		*/

/**
	@memberof CanvasDisplacementMap
	@const {CanvasDrawer|UICanvas|canvas} target
		An instance of CanvasDrawer or a UICanvas / HTML Canvas in which the source bitmap data is drawn with the map displacement data applied
		*/

/**
	@memberof CanvasDisplacementMap
	@const {number} x
		A NUMBER representing the X offset of the displacement
		*/

/**
	@memberof CanvasDisplacementMap
	@const {number} y
		A NUMBER representing the Y offset of the displacement
		*/

/**
	@memberof CanvasDisplacementMap
	@const {number} scaleX
		A NUMBER for how much distortion is applied to the X axis; defaults to 0
		*/

/**
	@memberof CanvasDisplacementMap
	@const {number} scaleY
		A NUMBER for how much distortion is applied to the Y axis; defaults to 0
		*/

/**
	@memberof CanvasDisplacementMap
	@const {CanvasDisplaceChannel | number} channelX
		A NUMBER representing the color channel on which to displace the source bitmap data along the X axis; defaults to CanvasDisplaceChannel.RED
		*/

/**
	@memberof CanvasDisplacementMap
	@const {CanvasDisplaceChannel | number} channelY
		A NUMBER representing the color channel on which to displace the source bitmap data along the Y axis; defaults to CanvasDisplaceChannel.RED
		*/

/**
	@memberof CanvasDisplacementMap
	@method draw
	@desc
		Take bitmap data from the map, use it to displace the source, and apply the distorted composite bitmap data to the target
		<b>NOTE::</b>
		<br>
		This is <b>much</b> different than CanvasDrawer.update(). It uses bitmap data and applies it to the canvas pixel by pixel, rather than redrawing it as a whole.
		<br>
		CanvasDrawer.update() will overwrite CanvasDisplacementMap.draw(), and vice-versa.
		<br>
		CanvasTweener would not be recommented because that uses CanvasDrawer.update() in order to redraw everything.
		In order to animate a displacement, TweenLite is acceptable because you're not animating a CanvasElement, you're animating the object properties of the DisplacementMap filter.
	@example

		// animate the amount of displacement along the X axis
		TweenLite.fromTo(T.mapFilter, 1, {
			scaleX: 0
		}, {
			scaleX: 1000, 
			// without this onUpdate method, the scaleX would change but the CanvasDisplacementMap wouldn't know to redraw
			onUpdate: function(){
				T.mapFilter.draw()
			}
		})
*/

import * as CanvasUtils from './CanvasUtils'
import * as CanvasDisplaceChannel from './CanvasDisplaceChannel'

export default class CanvasDisplacementMap {
	constructor(arg) {
		const T = this

		T.source = arg.source.canvas || arg.source
		T.map = arg.map.canvas || arg.map
		T.target = arg.target.canvas || arg.target
		//

		const _params = arg.params || {}

		T.x = _params.x || 0
		T.y = _params.y || 0
		T.scaleX = _params.scaleX || 0
		T.scaleY = _params.scaleY || 0
		T.channelX = _params.channelX >= 0 && _params.channelX <= 3 ? _params.channelX : CanvasDisplaceChannel.RED
		T.channelY = _params.channelY >= 0 && _params.channelY <= 3 ? _params.channelY : CanvasDisplaceChannel.RED
	}

	draw() {
		const T = this
		const _sourceData = CanvasUtils.getImageData(T.source)
		const _mapData = CanvasUtils.getImageData(T.map)
		const _targetDataX = CanvasUtils.getImageData(T.source)
		const _targetDataY = CanvasUtils.getImageData(T.source)
		const _pixelsLength = _mapData.data.length / 4
		let _colorValue
		let _alphaValue
		let _ratio
		let _ratioWithAlpha
		let _pixelShift
		let _sourcePosition
		let _targetPosition
		let x
		let y
		let i = 0
		while (i < _pixelsLength) {
			x = ((i % T.map.width) + T.x) | 0
			y = (((i / T.map.width) | 0) + T.y) | 0
			_colorValue = _mapData.data[i * 4 + T.channelX]
			_alphaValue = _mapData.data[i * 4 + CanvasDisplaceChannel.ALPHA]
			_ratio = (_colorValue / 0xff) * 2 - 1
			_ratioWithAlpha = _ratio * (_alphaValue / 0xff)
			_pixelShift = (_ratioWithAlpha * T.scaleX) | 0
			_sourcePosition = T.source.width * y + x
			_targetPosition = T.target.width * y + x + _pixelShift
			T._setPixels(_targetDataX, _targetPosition, _sourceData, _sourcePosition)
			i++
		}
		//
		i = 0
		while (i < _pixelsLength) {
			x = ((i % T.map.width) + T.x) | 0
			y = (((i / T.map.width) | 0) + T.y) | 0
			_colorValue = _mapData.data[i * 4 + T.channelY]
			_alphaValue = _mapData.data[i * 4 + CanvasDisplaceChannel.ALPHA]
			_ratio = (_colorValue / 0xff) * 2 - 1
			_ratioWithAlpha = _ratio * (_alphaValue / 0xff)
			_pixelShift = (_ratioWithAlpha * T.scaleY) | 0
			_sourcePosition = T.source.width * y + x
			_targetPosition = T.target.width * (y + _pixelShift) + x
			T._setPixels(_targetDataY, _targetPosition, _targetDataX, _sourcePosition)
			i++
		}
		CanvasUtils.setImageData(T.target, _targetDataY)
	}

	_setPixels(target, pos, source, i) {
		target.data[i * 4] = source.data[pos * 4]
		target.data[i * 4 + 1] = source.data[pos * 4 + 1]
		target.data[i * 4 + 2] = source.data[pos * 4 + 2]
		target.data[i * 4 + 3] = source.data[pos * 4 + 3]
	}
}

/*
NOTE: This is an ES6 version of the displacement script found here http://www.soundstep.com/blog/2012/04/25/javascript-displacement-mapping/
No original release notes below
/*
*/
