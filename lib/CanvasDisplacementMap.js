import * as CanvasUtils from './CanvasUtils'
import * as CanvasDisplaceChannel from './CanvasDisplaceChannel'

export default class CanvasDisplacementMap {
	constructor(arg) {
		const T = this

		T.source = arg.source.canvas || arg.source
		T.map = arg.map.canvas || arg.map
		T.target = arg.target.cavnas || arg.target
		//
		T.point = { x: arg.x || 0, y: arg.y || 0 }
		T.scaleX = arg.scaleX || 0
		T.scaleY = arg.scaleY || 0
		T.channelX = arg.channelX || CanvasDisplaceChannel.RED
		T.channelY = arg.channelY || CanvasDisplaceChannel.RED
		//
		if (T.channelX != 0 && T.channelX != 1 && T.channelX != 2 && T.channelX != 3) T.channelX = CanvasDisplaceChannel.RED
		if (T.channelY != 0 && T.channelY != 1 && T.channelY != 2 && T.channelY != 3) T.channelY = CanvasDisplaceChannel.RED

		//
		return T
	}

	draw() {
		const T = this
		var sourceData = CanvasUtils.getImageData(T.source)
		var mapData = CanvasUtils.getImageData(T.map)
		var targetDataX = CanvasUtils.getImageData(T.source)
		var targetDataY = CanvasUtils.getImageData(T.source)
		var pixelsLength = mapData.data.length / 4
		var colorValue, alphaValue, ratio, ratioWithAlpha, pixelShift, sourcePosition, targetPosition, x, y
		var i = 0
		while (i < pixelsLength) {
			x = ((i % T.map.width) + T.point.x) | 0
			y = (((i / T.map.width) | 0) + T.point.y) | 0
			colorValue = mapData.data[i * 4 + T.channelX]
			alphaValue = mapData.data[i * 4 + CanvasDisplaceChannel.ALPHA]
			ratio = (colorValue / 0xff) * 2 - 1
			ratioWithAlpha = ratio * (alphaValue / 0xff)
			pixelShift = (ratioWithAlpha * T.scaleX) | 0
			sourcePosition = T.source.width * y + x
			targetPosition = T.target.width * y + x + pixelShift
			T.setPixels(targetDataX, targetPosition, sourceData, sourcePosition)
			i++
		}
		i = 0
		while (i < pixelsLength) {
			x = ((i % T.map.width) + T.point.x) | 0
			y = (((i / T.map.width) | 0) + T.point.y) | 0
			colorValue = mapData.data[i * 4 + T.channelY]
			alphaValue = mapData.data[i * 4 + CanvasDisplaceChannel.ALPHA]
			ratio = (colorValue / 0xff) * 2 - 1
			ratioWithAlpha = ratio * (alphaValue / 0xff)
			pixelShift = (ratioWithAlpha * T.scaleY) | 0
			sourcePosition = T.source.width * y + x
			targetPosition = T.target.width * (y + pixelShift) + x
			T.setPixels(targetDataY, targetPosition, targetDataX, sourcePosition)
			i++
		}
		CanvasUtils.setImageData(T.target, targetDataY)
	}

	setPixels(target, pos, source, i) {
		const T = this
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
