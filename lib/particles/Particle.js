/**
	@class Particle
	@desc
		This Particle class is used along with {@link ParticleModel} and {@link Emitter} class. 
*/
var Particle = function ( ctx, model, fps ) {
	var self = this;
	//set up properties
	self.fps = fps;
	self.graphic = model.graphic;
	self.properties = model.generateIndividualProperties();
	self.frameCount = 0;
	self.ctx = ctx;

	self._lifeSpanFrameCount = ParticlesUtils.secToFrameCount( self.properties.lifeSpan, self.fps );
	self._force = new Vector2D( 0, 0 );
	self._hasAnimation = (function () {
		var ani = self.properties.animations;
		var i;
		for( var key in ani ) {
			if( ani[ key ].steps.length > 0 ) {
				return true;
			}
		}
		return false;
	}.bind( self )) ();

	self._hasTurbulence = (function () {
		var t = self.properties.turbulence;
		return t.rate !== 0 && t.x !== 0 && t.y !== 0;
	}.bind( self )) ();
}

Particle.prototype = {

	/**
		@memberof Particle
		@method update
		@desc
			Updates the properties of the particle
    */
	update: function () {
		var p = this.properties;
		var vel = p.velocity.clone();

		p.velocity.mult( 1 + p.acceleration );
		p.velocity.add( this._force );
		p.velocity.limit( p.maxSpeed );
		p.location.add( p.velocity );

		this._force.mult( 0 );

		if( this._hasTurbulence ) {

			if( !this.noiseStart ) {
				this.noiseStart = new Vector2D.random();
				this.noiseStart.mult( 250 );
			}

			var t = p.turbulence;
			this.noiseStart.add( new Vector2D( t.rate, t.rate ));

			var n = SimpleNoise2D.get( this.noiseStart.x, this.noiseStart.y );
			p.location.x += n.x * t.xAmplitude;
			p.location.y += n.y * t.yAmplitude;
		}

		p.style.x = p.location.x;
		p.style.y = p.location.y;

		this.frameCount++;
	},


	/** 
		@memberof Particle
		@method getAnimationStyle
		@desc
			Update the animated style of a particle
    */
	getAnimationStyle: function () {

		//TODO: optimize
		var p = this.properties;
		var style = {};
		var sec = ParticlesUtils.frameCountToSec( this.frameCount, this.fps );
		var offsetStyle = ParticlesUtils.easyTween( p.animations, p.lifeSpan, sec );

		// apply to each key
		for( key in p.style ) {
			if( offsetStyle[ key ] !== undefined ) {
				var val = p.style[ key ] * offsetStyle[ key ];
				style[ key ] = val;
 			} else {
 				style[ key ] = p.style[ key ];
 			}
		}
		return style;
	},


	/**
		@memberof Particle
		@method render
		@desc
			Renders the particle onto the canvas context.
	*/
	render: function () {

		var style = this._hasAnimation ? this.getAnimationStyle() : this.properties.style;
		this.graphic.render( this.ctx, style, this.frameCount );
	},


	/**
		@memberof Particle
		@method applyForce
		@desc
			Applies force to the particle.
	*/
	applyForce: function ( f ) {
		this._force.add( f );
	},


	/**
		@memberof Particle
		@method isDead
		@returns {boolean}
		@desc
			Returns a boolean of is the particle is dead depending on two situations:
			<br>
			<ol>
				<li>if it has reaches its lifespan, or</li>
				<li>if it is out of the canvas and if {@link EmitterData.killIfOutOfCanvas} is set to true</li>
			</ol>
    */
	isDead: function ( w, h, k ) {
		var p = this.properties;
		var remainingLife = this._lifeSpanFrameCount - this.frameCount;

		if( remainingLife <= 0 ) {
			return true;
		}

		if( k ) {
			var l = p.location;
			var g = this.graphic;
			var size = Math.max( g.width, g.height ) * p.style.scale;
			if( l.x - size > w  || l.y - size > h || l.x + size < 0 || l.y + size < 0 ) {
				return true;
			}
		}

		return false;
	},


	/**
		@memberof Particle
		@method checkWorld
		@param {array} w
			an array that contains left X, right X, top Y, bottom Y as values for the boundary
		@desc
			Remains the particle in the defined world boundaries by its body size and bounces it when it hits the boundaries.
	*/
	checkWorld: function ( w ) {

		var l = this.properties.location;
		var r = this.properties.bodySize;
		var x1 = w[ 0 ] + r;
		var x2 = w[ 1 ] - r;
		var y1 = w[ 2 ] + r;
		var y2 = w[ 3 ] - r;

		if ( l.x <= x1 ) {
			this._checkBorder( 'x', x1 );
		} else if ( l.x >= x2 ) {
			this._checkBorder( 'x', x2 );
		}

		if ( l.y <= y1 ) {
			this._checkBorder( 'y', y1 );
		} else if ( l.y >= y2 ) {
			this._checkBorder( 'y', y2 );
		}
	},


	/**
		@memberof Particle
		@method _checkBorder
		@param {string} axis
			String 'x' or 'y'
		@param {number} val - the location of the border on the X or Y axis

		@desc
			Check it the particle location reaches the border, if ture, it bounces to it.
	*/
	_checkBorder: function ( axis, val ) {
		//axis: x or y
		var p = this.properties;
		var v = p.velocity;
		var b = p.bounceAmount;

		if( axis === 'x' ) {
			v.x *= -b;
			v.y *= b;
			p.location.x = val;
		} else {
			v.x *= b;
			v.y *= -b;
			p.location.y = val;
		}
	}
}

export default Particle