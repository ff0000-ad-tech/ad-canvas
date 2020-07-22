/**
	@npmpackage
	@class CanvasImage
	@param {object} imgObj
		an object containing the arguments for defining / orienting the image, see Properties for more info:
	@property {CanvasDrawer} target
		the CanvasDrawer element in which to draw the image
	@property {canvas|CanvasDrawer|ImageId} source
		a canvas element (CanvasDrawer.canvas or CanvasDrawer, NOT the ID of the DOM object), an image ID to be used by ImageManager.get(), or ImageManager.get('id')
	@property {string} id
		an optional STRING defining the name by which the image will be referenced. Defaults to 'canvasdItemX' where X = the number of elements in a {@link CanvasDrawer}
	
	@property {object} params
		an OBJECT of optional parameters
		@property {number} params.sourceX
			left X NUMBER from where to get the image data
		@property {number} params.sourceY
			top Y NUMBER from where to get the image data
		@property {number} params.sourceW
			NUMBER width value from where to get the image data
		@property {number} params.sourceH
			NUMBER height value from where to get the image data
		@property {number} params.x
			NUMBER X coordinate for where to draw the image data
		@property {number} params.y
			NUMBER Y coordinate for where to draw the image data
		@property {number} params.width
			NUMBER width value for how wide to draw the image
		@property {number} params.height
			NUMBER height value for how tall to draw the image
		@property {number} params.scale
			NUMBER for uniform scale of the drawing, scaling from drawing center unless transformOrigin is changed. Will compound with but not change values of scaleX or scaleY.
		@property {number} params.scaleX
			NUMBER for X scale of the drawing, scaling from drawing center unless transformOrigin is changed
		@property {number} params.scaleY
			NUMBER for Y scale of the drawing, scaling from drawing center unless transformOrigin is changed
		@property {number} params.rotation
			NUMBER IN DEGREES for the start rotation of the given drawing
		@property {string} params.transformOrigin
			an optional STRING defining an element's origin for scale and rotation, written as two values in a string with either a '%' or 'px' marker. Defaults to '50% 50%'.
		@property {number} params.alpha
			NUMBER for alpha of the drawing
		@property {object} fitTo
			OBJECT containing sizing and origin data in which the CanvasImage should fit, without distortion of the aspect ratio; <b>will overwrite aspectRatio</b>
			@property {object} fitTo.class
					CLASS to load the Image Fitting code - this should only be <b>ImageUtils.fitCanvasImageAtCoordinate</b> which is imported from `ad-utils` - it contains code which may be superfluous when not desired
			@property {number} fitTo.width
				NUMBER determining the width to fit the CanvasImage into - affects CanvasImage.width and CanvasImage.sourceW
			@property {number} fitTo.height
				NUMBER determining the height to fit the CanvasImage into - affects CanvasImage.height and CanvasImage.sourceH
		@property {object} fitTo.origin
				OBJECT containing orientation coordinates for the image's fitTo positioning
		@property {number} fitTo.origin.x
				NUMBER for X coordinate around which to focus resizing and fitting of the image horizontally
		@property {number} fitTo.origin.y
				NUMBER for Y coordinate around which to focus resizing and fitting of the image vertically
		@property {number} fitTo.debugClass
			CLASS which is used to draw into the canvas debug information displaying the coordinate origin on which to fit the image. <b>Please only use CanvasRect from 'ad-canvas' as the debugClass</b>
		@property {boolean} aspectRatio
			BOOLEAN determining if the image should conform to its natural aspect ratio if only width or height - <b>NOT BOTH</b> - params are provided. Defaults to false
		@property {number} dropShadow
			an optional OBJECT defining properties of the image's drop shadow
			@property {number} dropShadow.angle
				NUMBER IN DEGREES for the angle to position the shadow
			@property {number} dropShadow.distance
				NUMBER for how far away from the image the shadow is
			@property {number} dropShadow.blur
				NUMBER for how blurry the shadow is
			@property {string|object} dropShadow.color
				optional color of shadow as either a HEX STRING :"#ff0000", 
				RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
				or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to '#000000'
			@property {number} dropShadow.alpha
				NUMBER for the alpha of the shadow. Defaults to 1, overrides the alpha of an RGBA color
		@property {string|CanvasBlendMode} blendMode
			an optional STRING for the globalCompositeOperation - controls overlays, screens, multiply, masking, etc. Defaults to 'source-over'. <b>Will not work on SVG image sources in Firefox.</b>
		@property {boolean} visible
			an optional BOOLEAN that, when set to false, will not render the element. Defaults to true
		@desc
			Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
			<br>
			<codeblock>
				// importing into an ES6 class
				import { CanvasImage } from 'ad-canvas'
			</codeblock>
			<br><br>
		
			Add a canvas-image or bitmap-image source to the drawer based on a given object, and return a reference to that {@link CanvasElement}; requires {@link ImageManager}.
			<br><br>
			<b>Sample 1::</b><br>
			Define a source either with the image name or {@link ImageManager.get}:<br>
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
					retina: true,
					debug: false
				});
				new CanvasImage({
					target: View.main.myCanvasDrawer,
					source: 'smoke',
					id: 'smoke',
					params: {
						x: 0,
						y: 0,
						width: 256,
						height: 256
					}
				});
				let _myImage = new CanvasImage({
					target: View.main.myCanvasDrawer,
					source: ImageManager.get('smoke'),
					id: 'smoke',
					params: {
						x: 0,
						y: 0,
						width: 256,
						height: 256
					}
				});
			</codeblock>
			<br><br>
			<b>Sample 2::</b><br>
			Define a source with an existing canvas element by referring to the {@link CanvasDrawer} or the CanvasDrawer's HTMLCanvasElement element directly:<br>
			<codeblock>
				let originalCD = new CanvasDrawer({
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
				// referring to the CanvasDrawer object
				let _myImage = new CanvasImage({
					target: View.main.myCanvasDrawer,
					source: originalCD,
					id: 'smoke',
					params: {
						x: 0,
						y: 0,
						width: 256,
						height: 256
					}
				});
				// referring to the CanvasDrawer object's HTMLCanvasElement element
				let _myImage2 = new CanvasImage({
					target: View.main.myCanvasDrawer,
					source: originalCD.canvas,
					id: 'smoke2',
					params: {
						x: 0,
						y: 0,
						width: 256,
						height: 256
					}
				});
			</codeblock>
			<br><br>
			<b>Sample 3::</b><br>
			Create a CanvasImage with fitTo information focused on a certain point:<br>
			<codeblock>
				let canvasDrawer = new CanvasDrawer({
					id: 'myCanvasDrawer', 
					target: View.main,
					css: {
						width: 300,
						height:	250
					},
					debug: false
				});

				// without debug information
				let _myImage = new CanvasImage({
					target: canvasDrawer,
					source: 'image',
					fitTo: {
						class: ImageUtils.fitCanvasImageAtCoordinate,
						width: canvasDrawer.width,
						height: canvasDrawer.height,
						origin: {
							x: 421,
							y: 229
						}
					}
				});

				// the same definition, only with a debug class (only use CanvasRect) attached to draw the exact focal position of the fit
				let _myImage2 = new CanvasImage({
					target: canvasDrawer,
					source: 'image',
					params: {
						width: 256,
						height: 256
					},
					fitTo: {
						class: ImageUtils.fitCanvasImageAtCoordinate,
						width: canvasDrawer.width,
						height: canvasDrawer.height,
						origin: {
							x: 421,
							y: 229
						},
						debugClass: CanvasRect
					}
				});
			</codeblock>
			<br>
			*/

/**
	@memberof CanvasImage
	@const {string} id
		READ-ONLY: STRING representing the id of the element
		*/

/**
	@memberof CanvasImage
	@var {number} x
		NUMBER representing the horizontal position of the element,
		*/

/**
	@memberof CanvasImage
	@var {number} y 		
		NUMBER representing the vertical position of the element,
		*/

/**
	@memberof CanvasImage
	@var {number} width
		NUMBER representing the total width of the element,
		*/

/**
	@memberof CanvasImage
	@var {number} sourceX
		NUMBER representing the horizontal value from which to start drawing data from the source image,
		*/

/**
	@memberof CanvasImage
	@var {number} sourceY
		NUMBER representing the vertical value from which to start drawing data from the source image,
		*/

/**
	@memberof CanvasImage
	@var {number} sourceW
		NUMBER representing the width value from which to draw data from the source image,
		*/

/**
	@memberof CanvasImage
	@var {number} sourceH
		NUMBER representing the height value from which to draw data from the source image,
		*/

/**
	@memberof CanvasImage
	@var {number} height
		NUMBER representing the total height of the element,
		*/

/**
	@memberof CanvasImage
	@var {number} rotation
		NUMBER representing the rotation, in degrees, of the element,
		*/

/**
	@memberof CanvasImage
	@var {number} alpha
		NUMBER representing the opacity of the element,
		*/

/**
	@memberof CanvasImage
	@var {number} scale
		NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY,
		*/

/**
	@memberof CanvasImage
	@var {number} scaleX
		NUMBER representing the horizontal scale of the element,
		*/

/**
	@memberof CanvasImage
	@var {number} scaleY
		NUMBER representing the vertical scale of the element,
		*/

/**
	@memberof CanvasImage
	@var {number} blendMode
		NUMBER representing the blend or masking style applied to the element. <b>Will not work on SVG image sources in Firefox.</b>
		*/

/**
	@memberof CanvasImage
	@var {number} visible
		BOOLEAN representing whether or not the element should be drawn,
		*/

/**
	@memberof CanvasImage
	@var {string} transformOrigin
		STRING representing the origin from which to perform scales and rotations. Written as two values in a string with either a '%' or 'px' marker (ie '50% 50%' or '5px 100px').
		<br><br>
		<b>NOTE::</b><br>
		<ul>
			<li>'50% 50%' is centered, based on percentage</li>
			<li>'50px 50px' is 50 px away from '0% 0%' vertically and horizontally</li>
			<li>'50 50' is the same as '50px 50px'</li>
			<li>Values can be mixed: '50% 10px', for instance</li>
		</ul>
		<br><br>
	@example
		View.main.myCanvasDrawer.elements.smoke.transformOrigin = '50% 50%';
		View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10px 100px';
		View.main.myCanvasDrawer.elements.smoke.transformOrigin = '10 100';
		*/

/**
	@memberof CanvasImage
	@var {string} shadowColor
		STRING representing the color of the drop shadow in RGBA format,
		*/

/**
	@memberof CanvasImage
	@var {number} shadowBlur
		NUMBER representing the amount of blur on the drop shadow,
		*/

/**
	@memberof CanvasImage
	@var {number} shadowAngle
		NUMBER representing the angle, in degrees, of the drop shadow,
		*/

/**
	@memberof CanvasImage
	@var {number} shadowDistance
		NUMBER representing the distance of the drop shadow from the element,
		*/

import CanvasElement from './CanvasElement'
import { Align } from 'ad-view'
import { ImageManager } from 'ad-control'
import { Device } from 'ad-external'

class CanvasImage extends CanvasElement {
	constructor(imgObj) {
		let _params = (imgObj.params = imgObj.params || {})
		super(imgObj, 'image')

		let CI = this

		let _isSourceCanvas = imgObj.target._getIsSourceCanvas(imgObj.source)

		if (imgObj.source.tagName === 'VIDEO') CI.src = imgObj.source
		else
			CI.src = _isSourceCanvas
				? imgObj.source.tagName === 'CANVAS'
					? imgObj.source
					: imgObj.source.canvas
				: imgObj.source.tagName === 'IMG'
				? imgObj.source
				: ImageManager.get(imgObj.source)

		let _imgSourceWidth = CI.src.width || CI.src.getAttribute('width')
		let _imgSourceHeight = CI.src.height || CI.src.getAttribute('height')

		CI.x = _params.x || 0
		CI.y = _params.y || 0

		let _imageScale = CI.stage._imageScale

		// if our CanvasImage is meant to fit within a certain space, we have to format the sourceW, sourceH, sourceX, and sourceY
		if (imgObj.fitTo) {
			// imgObj.fitTo(CI, _imgSourceWidth, _imgSourceHeight, _imageScale)
			imgObj.fitTo.class(CI, _params, imgObj.fitTo, _imgSourceWidth, _imgSourceHeight)
		} else if (imgObj.aspectRatio) {
			let _isMissingW = _params.width === undefined
			let _isMissingH = _params.height === undefined

			if (!_isMissingW && _isMissingH) {
				CI.width = _params.width
				CI.height = _imgSourceHeight * (_params.width / _imgSourceWidth)
			} else if (!_isMissingH && _isMissingW) {
				CI.height = _params.height
				CI.width = _imgSourceWidth * (_params.height / _imgSourceHeight)
			}
		} else {
			CI.width = _params.width === undefined ? _imgSourceWidth / _imageScale : _params.width
			CI.height = _params.height === undefined ? _imgSourceHeight / _imageScale : _params.height
		}

		CI.sourceX = _params.sourceX || 0
		CI.sourceY = _params.sourceY || 0
		CI.sourceW = Math.floor(_params.sourceW || _imgSourceWidth || CI.width * _imageScale)
		CI.sourceH = Math.floor(_params.sourceH || _imgSourceHeight || CI.height * _imageScale)

		CI.transformOrigin = _params.transformOrigin || imgObj.transformOrigin || '50% 50%'
		if (imgObj.align) Align.set(CI, imgObj.align)
	}

	warn(prop) {
		let CI = this
		let _dimProp
		let _dimSource
		switch (prop) {
			case 'X':
			case 'Y':
				_dimProp = prop === 'X' ? 'W' : 'H'
				_dimSource = prop === 'X' ? 'width' : 'height'
				break
			case 'W':
			case 'H':
				_dimProp = prop === 'W' ? 'X' : 'Y'
				_dimSource = prop === 'W' ? 'width' : 'height'
				break
		}
		let _errorProp = `_error${prop}`
		let _amount = CI['_source' + prop] + CI['source' + _dimProp] - CI.src[_dimSource]
		if (!CI[_errorProp] && _amount > 0) {
			console.log('')
			console.warn(`WARNING: on ${CI.stage.canvas.id}.elements.${CI.id}`)
			console.log(
				`\tthe combined source${prop} and source${_dimProp} values exceed the ${_dimSource} of the CanvasImage.src by ${_amount} pixels, and will not render properly in most browsers`
			)
			console.log(`\tsource${prop}: ${CI['_source' + prop]}, source${_dimProp}: ${CI['source' + _dimProp]}`)
			console.log(`\t\tconsider revising your source${_dimProp}\r\r`)
		}
		CI[_errorProp] = _amount > 0
		return CI[_errorProp]
	}

	draw(trans) {
		let CI = this

		try {
			if (CI.warn('X')) return
			if (CI.warn('Y')) return

			let _x, _y
			if (trans) {
				_x = -CI._offsetX
				_y = -CI._offsetY
			} else {
				_x = CI.x
				_y = CI.y
			}
			CI.stage.ctx.drawImage(
				CI.src,
				CI.sourceX,
				CI.sourceY,
				CI.sourceW,
				CI.sourceH,
				_x * CI.stage.qualityScale,
				_y * CI.stage.qualityScale,
				CI.width * CI.stage.qualityScale,
				CI.height * CI.stage.qualityScale
			)

			CI._errorThrown = false
		} catch (err) {
			if (CI._errorThrown) return
			CI._errorThrown = true
			console.error('')
			console.error(err)
			console.error(
				"ERROR: Source for CanvasDrawer: '" +
					CI.stage.canvas.id +
					"' element: '" +
					CI.id +
					"' failed to load; the image source of " +
					CI.src +
					' may not be named or loaded properly.'
			)
			console.error(
				'ERROR: CanvasImage requires defined width, height, sourceW, and sourceH values for SVGs, and that data could be undefined:'
			)
			console.log(
				'\t On',
				String(
					Device.os + ' ' + Device.osVersion + ': ' + Device.browser + ' - ' + Device.browserVersion
				).toUpperCase(),
				':'
			)
			console.log(
				'\t width:',
				CI.width,
				', height:',
				CI.height,
				', sourceW:',
				CI.sourceW,
				', sourceH:',
				CI.sourceH,
				'\r\r'
			)
			console.log(
				'\t if these values are all defined, it is possible the sourceW or sourceH are too large: for instance, an SVG width of 452.6 cannot be rounded to 453, it must be 452'
			)
		}
	}
}
export default CanvasImage
