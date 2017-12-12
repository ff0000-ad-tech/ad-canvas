/**
	@class Graphic
	@desc
		A simple, light weight class for rendering shapes and images on canvas element with assigned style to work with the particle system.
		Graphic.Shape is the parent class that remains netural to keep the flexiblity to create more classes based on needs in different projects.
		<br><br>

		To keep it practical while maintaining it as light as possible, there are four classes currently available:<br>
		<ul>
			<li>Graphic.Image</li>
			<li>Graphic.Sprite</li>
			<li>Graphic.Circle</li>
			<li>Graphic.Rect</li>
		</ul> 
*/
import { MathUtils, ObjectUtils } from 'ad-utils'

var Graphic = Graphic || {};

Graphic = {
	DEFAULTSIZE: 10,
	DEFAULTSTYLE: {
		x: 0,
		y: 0,
		alpha: 1,
		scale: 1,
		rotation: 0,
		transformOrigin: { x: 0.5, y: 0.5 },
		color: [ 255, 0, 0 ], 
		strokeWidth: 0,
		strokeColor: 'rgba(0, 0, 0, 1)'
	},
	Shape: function () {}
};




/**
	@class Graphic.Shape
	@desc
		The parent class of other Graphic classes. It handles color, alpha, translation, rotation and scaling. 

*/
Graphic.Shape.prototype = {
	
	hasPath: true,

	getRGBA: function( rgb, alpha ) {
		var r = ~~MathUtils.restrict( rgb[ 0 ], 0, 255 );
		var g = ~~MathUtils.restrict( rgb[ 1 ], 0, 255 );
		var b = ~~MathUtils.restrict( rgb[ 2 ], 0, 255 );
		var a = MathUtils.restrict( alpha, 0, 1 );

		return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
	},

	render: function ( ctx, style, frameCount ) {
		var self = this;

		style = style || {};
		style = ObjectUtils.default( style, self.style );
		style.scale = MathUtils.restrict( style.scale, 0, Infinity );
		style.alpha = MathUtils.restrict( style.alpha, 0, 1 );
		var w = self.width * style.scale;
		var h = self.height * style.scale;

		style.color = self.getRGBA( style.color, style.alpha );
		
		ctx.save();

		if( style.alpha < 1 && !self.hasPath ) { 
			ctx.globalAlpha = style.alpha;
		}
		
		ctx.translate( w * -style.transformOrigin.x, h * -style.transformOrigin.y );
		
		if( style.rotation !== 0 ) {
			var tw = style.x + w * style.transformOrigin.x;
			var th = style.y + h * style.transformOrigin.y;
			ctx.translate( tw, th );
			ctx.rotate( MathUtils.toRadians( style.rotation ));
			ctx.translate( -tw, -th );
		}

		if( self.hasPath ) {
			ctx.beginPath();
		}

		self.draw( ctx, style, w, h, frameCount );

		if( self.hasPath ) {
			ctx.closePath();
			ctx.fillStyle = style.color;
			ctx.fill();

			if ( style.strokeWidth > 0 ) {
				ctx.lineWidth = style.strokeWidth;
				ctx.strokeStyle = style.strokeColor;
				ctx.stroke();
			}
		}

		ctx.restore();
	}
};




/**
	@class Graphic.Image
	@desc
		A class for rendering images on canvas. The size parameter applys to width. The height
		is calculated base the the image width and height ratio and call draw method of the child class.
*/
Graphic.Image = function ( image, size, style ) {
	var self = this;

	self.hasPath = false;
	self.image = image;
	self.width = size || image.width;
	self.height = self.width * ( image.height / image.width );
	self.style = ObjectUtils.default( style || {}, Graphic.DEFAULTSTYLE );

	self.draw = function ( ctx, style, w, h ) {
		ctx.drawImage( self.image, style.x, style.y, w, h );
	}
}

Graphic.Image.prototype = Object.create( Graphic.Shape.prototype );





/**
	@class Graphic.Circle
	@param {number} size
		diameter of the circle
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@desc
		A class for rendering circles on canvas

*/
Graphic.Circle = function ( size, style ) {
	var self = this;

	self.width = size * 0.5 || Graphic.DEFAULTSIZE * 0.5;
	self.height = self.width;
	self.style = ObjectUtils.default( style || {}, Graphic.DEFAULTSTYLE );

	self.draw = function ( ctx, style, w ) {
		ctx.arc( style.x + w * 0.5, style.y + w * 0.5, w, 0, Math.PI * 2 );
	}
}

Graphic.Circle.prototype = Object.create( Graphic.Shape.prototype );







/**
	@class Graphic.Rect
	@param {number} width
		width of the rectangle
	@param {number} height
		height of the rectangle
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@desc
		A class for rendering rectangles on canvas.

*/
Graphic.Rect = function ( width, height, style ) {
	var self = this;

	self.width = width || Graphic.DEFAULTSIZE;
	self.height = height || Graphic.DEFAULTSIZE;
	self.style = ObjectUtils.default( style || {}, Graphic.DEFAULTSTYLE );

	self.draw = function ( ctx, style, w, h ) {
		ctx.rect( style.x, style.y, w, h );
	}
}

Graphic.Rect.prototype = Object.create( Graphic.Shape.prototype );






/**
	@class Graphic.Sprite
	@param {Image} image
		image of the sprite sheet
	@param {number} size
		display width of per frame
	@param {object} style
		Default to {@link Graphic.DEFAULTSTYLE}
	@param {object} spriteSetting
		Object with the following properties:

		@property {number} frameWidth
			width of per frame 

		@property {number} frameHeight
			height of per frame

		@property {number} frameNumber
			number of total frames

		@property {number} speed
			the speed of the animation

		@property {boolean} loop

	@desc
		A class for rendering spritesheet animation on canvas.

*/
Graphic.Sprite = function( image, size, style, spriteSetting ) {
	var self = this;

	self.hasPath = false;
	self.setting = spriteSetting;

	self.image = image;
	self.oriWidth = image.width;
	self.oriHeight = image.height;
	self.width = size || self.oriWidth;
	self.height = self.width * ( self.setting.frameWidth / self.setting.frameHeight );
	self.style = ObjectUtils.default( style || {}, Graphic.DEFAULTSTYLE );
	self.frameLen = ~~( 1 / self.setting.speed );
	self.colNumber = self.oriWidth / self.setting.frameWidth;

	self.draw = function( ctx, style, w, h, frameCount ) {
		var frameIndex = ~~( frameCount / self.frameLen );
		if( self.setting.loop ) {
			frameIndex = frameIndex % ( self.setting.frameNumber ); 
		} else {
			var fn = self.setting.frameNumber - 1;
			frameIndex = ( frameIndex > fn ) ? fn : frameIndex;
		}

		var fw = self.setting.frameWidth;
		var fh = self.setting.frameHeight;
		var ratio = w / fw;

		var sx = ( frameIndex * self.setting.frameWidth ) % self.oriWidth;
		var sy = ~~(( frameIndex  ) / self.colNumber ) * self.setting.frameHeight;

		//trace ( frameIndex, fw, fh, ratio, sx, sy )

		ctx.drawImage( self.image, sx, sy, fw, fh, style.x, style.y, fw * ratio, fh * ratio );
	}
}

Graphic.Sprite.prototype = Object.create( Graphic.Shape.prototype );


export default Graphic