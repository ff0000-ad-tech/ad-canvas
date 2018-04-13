/**
	@npmpackage
	@class CanvasTexture
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasTexture } from 'ad-canvas'
		</codeblock>
		<br><br>
		
		Texture generating methods for {@link CanvasDrawer}.
*/
import { ImageManager } from 'ad-control'

/**
		@memberof CanvasTexture
		@method makeLinearGradient
		@param {object} args
			See properties for more info:
			@property {CanvasDrawer} target
				the CanvasDrawer instance in which to create the gradient
			@property {number} x1
				X coordinate of start of gradient
			@property {number} y1
				Y coordinate of start of gradient
			@property {number} x2
				X coordinate of end of gradient
			@property {number} y2
				Y coordinate of end of gradient
			@property {array} colors
				ARRAY of objects, see below for color object properites:
				@property {number} colors.color.stopVal
					Percentage from 0-1 inclusive for where the color is at its maximum value, 
				@property {string} colors.color.color
					'rgb()' or 'rgba()' string of color values
		@desc
			Returns a linear gradient between two given points as part of thie {@link CanvasDrawer}'s context element
			<br><br>
			<b>EXAMPLES</b><br>
			adding a 100x100 rectangle at 0, 0 with a linear gradient going from coordinate 0,0 to coordinate 0,100 fading from solid black to transparent black:<br>
			<codeblock>
				View.main.myCanvasDrawer = new CanvasDrawer({
					id: 'myCanvasDrawer', 
					target: View.main,
					css: {
						x: 0,
						y: 0,
						width: 300,
						height:	250
					},
					debug: false
				});
				var gradient = CanvasTexture.makeLinearGradient({
					target: View.main.myCanvasDrawer,
					xStart: 0,
					yStart: 0,
					xEnd: 0, 
					yEnd: 200, 
					colors: [	{stopVal: 0, color: 'rgb(0, 0, 0)'},
								{stopVal: 1, color: 'rgba(0, 0, 0, 0)'}
							]
				});
				new CanvasRect({
					target: View.main.myCanvasDrawer,
					id: 'myRect',
					params: {
						x: 0,
						y: 0,
						width: 100,
						height: 100
					},
					fill: gradient,
				});
			</codeblock>
			<br><br>
*/
export function makeLinearGradient(args) {
	var grd = args.target.ctx.createLinearGradient(
		args.xStart * args.target.qualityScale,
		args.yStart * args.target.qualityScale,
		args.xEnd * args.target.qualityScale,
		args.yEnd * args.target.qualityScale
	)
	for (var i = 0; i < args.colors.length; i++) grd.addColorStop(args.colors[i].stopVal, args.colors[i].color)
	return grd
}

/**
	@memberof CanvasTexture
	@method makeRadialGradient
	@param {object} args
		See properties for more info:
		@property {CanvasDrawer} target
			the CanvasDrawer instance in which to create the gradient
		@property {number} x1
			X coordinate of start of gradient
		@property {number} y1
			Y coordinate of start of gradient
		@property {number} rad1
			Radius of start color of gradient
		@property {number} x2
			X coordinate of end of gradient
		@property {number} y2
			Y coordinate of end of gradient
		@property {number} rad2
			Radius of end color of gradient
		@property {array} colors
			ARRAY of objects, see below for color object properites:
			@property {number} colors.color.stopVal
				Percentage from 0-1 inclusive for where the color is at its maximum value, 
			@property {string} colors.color.color
				'rgb()' or 'rgba()' string of color values
	@desc
		Returns a radial gradient between two given points as part of thie CanvasDrawer's context element.
		<br><br>
		<b>EXAMPLES</b><br>
		adding a circle with a radius of 400 at 0, 0 with a radial gradient starting from a radius of 50 to a radius of 200 and fading from solid red to transparent green: : 
		<codeblock>
			View.main.myCanvasDrawer = new CanvasDrawer({
				id: 'myCanvasDrawer', 
				target: View.main,
				css: {
					x: 0,
					y: 0,
					width: 300,
					height:	250
				},
				debug: false
			});
			var gradient = CanvasTexture.makeRadialGradient({
				target: View.main.myCanvasDrawer,
				xInner: 0,
				yInner: 0,
				radiusInner: 50,
				xOuter: 0,
				yOuter: 0,
				radiusOuter: 200,
				colors: [ 	{stopVal: 0, color: 'rgb(255, 0, 0)'},
								{stopVal: 1, color: 'rgba(0, 255, 0, 0)'} 
							]
			});
			new CanvasCircle({
				target: View.main.myCanvasDrawer,
				id: 'myCircle',
				params: {
					x:0,
					y:0,
					radius: 400,
					startAngle: 0,
					endAngle: 360
					}, 
				fill: gradient
			});
		</codeblock>
		<br><br>
*/
export function makeRadialGradient(args) {
	var grd = args.target.ctx.createRadialGradient(
		args.xInner * args.target.qualityScale,
		args.yInner * args.target.qualityScale,
		args.radiusInner * args.target.qualityScale,
		args.xOuter * args.target.qualityScale,
		args.yOuter * args.target.qualityScale,
		args.radiusOuter * args.target.qualityScale
	)
	for (var i = 0; i < args.colors.length; i++) grd.addColorStop(args.colors[i].stopVal, args.colors[i].color)
	return grd
}

/**
	@memberof CanvasTexture
	@method makePattern
	@param {object} args
		See properties for more info:
		@property {CanvasDrawer} target
			the CanvasDrawer instance in which to create the gradient
		@property {canvas|CanvasDrawerInstance|ImageId} img
			A canvas element (CanvasDrawerInstance.canvas or CanvasDrawerInstance, NOT the ID of the DOM object), 
			an image ID to be used by ImageManager.get(), 
			or ImageManager.get('id')
		@property {string} repeat
			STRING determining repeat style, see {@link CanvasTiling}.
	@desc
		Returns a pattern given an image source and repeat style.
		<br><br>
		<b>EXAMPLES:</b><br>
		Adding a circle with a radius of 400 at 0, 0 with a pattern from an image named 'tileJPG' which only repeats horizontally:
		<codeblock>
			View.main.myCanvasDrawerPattern = new CanvasDrawer({
				id: 'myCanvasDrawer', 
				target: View.main,
				css: {
					x: 0,
					y: 0,
					width: 300,
					height:	250
				},
				debug: false
			});
			var pattern = CanvasTexture.makePattern({
				target: View.main.myCanvasDrawerPattern,
				source: 'tileJPG', 
				repeat: CanvasTiling.X
			});
			new CanvasCircle({
				target: View.main.myCanvasDrawer,
				id: 'myCircle', 
				params: {
					x: 0,
					y: 0,
					radius: 400,
					startAngle: 0,
					endAngle: 360
				},
				fill: pattern
			});
		</codeblock>
		<br><br>
	Adding a circle with a radius of 400 at 0, 0 with a pattern from an the above canvas source which repeats horizontally and vertically:
	<codeblock>
		View.main.myCanvasDrawerCanvasTiling = new CanvasDrawer({
			id: 'myCanvasDrawer', 
			target: View.main,
			css: {
				x: 0,
				y: 0,
				width: 300,
				height:	250
			},
			debug: false
		});
		var pattern = CanvasTexture.makePattern({
			target: View.main.myCanvasDrawer,
			source: View.main.myCanvasDrawerPattern.canvas,
			repeat: CanvasTiling.COVER
		});
		new CanvasCircle({
			target: View.main.myCanvasDrawer,
			id: 'myCircle',
			params: {
				x: 0,
				y: 0,
				radius: 400,
				startAngle: 0,
				endAngle: 360
			},
			fill: pattern
		});
	</codeblock>
	<br><br>
*/
export function makePattern(args) {
	var _img = args.source
	var _repeat = args.repeat || 'repeat'
	var _isSourceCanvas = args.target._getIsSourceCanvas(_img)
	var _imgSrc = _isSourceCanvas ? (_img.tagName === 'CANVAS' ? _img : _img.canvas) : _img.tagName === 'IMG' ? _img : ImageManager.get(_img)
	var _pattern = args.target.ctx.createPattern(_imgSrc, _repeat)

	return _pattern
}
