/**
	@class ParticleModel
	@desc
		This ParticleModel class is used along with {@link Particle} and {@link Emitter} class.
*/
import { ObjectUtils } from 'ad-utils'
import { Vector2D } from 'ad-geom'
import ParticleUtils from 'ParticleUtils'
import Graphic from 'Graphic'

var particleId = 0;
var ParticleModel = function ( graphic, properties ) {
	var self = this;

	self.graphic = graphic;
	self.originalProperties = properties || {};
	self.defaultProperties = {};
	self.properties = self.originalProperties;

	// hold its own properties
	// but generate for partical to actually use
	self.setDefaultProperties = function ( obj ) {
		self.defaultProperties = obj;
		self.properties = ObjectUtils.default( self.originalProperties, obj, true );
	}

	self.generateIndividualProperties = function () {
		var psu = ParticlesUtils;

		var rn = function ( obj ) {
			return psu.randomNumInRange( obj.value, obj.range );
		};
		
		var p = self.properties;
		var vel = Vector2D.degreeToVector( rn( p.velocityAngle ));
		var scale = rn( p.scale );
		var speed = rn( p.speed );
		var loc = psu.randomVectorInRange( p.origin.value, p.origin.range, p.origin.shape );

		var result = {
			id: particleId,
			lifeSpan: rn( p.lifeSpan ),
			location: loc,
			velocity: vel.mult( speed ),
			turbulence: p.turbulence,
			maxSpeed: p.maxSpeed,
			acceleration: p.acceleration,
			bounceAmount: p.bounceAmount,
			bodySize: self._getBodySize( scale ),
			style: {
				x: location.x,
				y: location.y,
				alpha: rn( p.alpha ),
				scale: scale,
				rotation: rn( p.rotation ),
				transformOrigin: p.transformOrigin,
				color: ParticlesUtils.randomArrayInRange( p.color.value, p.color.range )
			},

			animations: p.animations
		};

		particleId++;
		return result;
	}

	self._getBodySize = function ( scale ) {
		if( self.properties.bodySize !== undefined ) {
			return self.properties.bodySize * scale;
		}
		if( self.graphic instanceof Graphic.Circle ) {
			return self.graphic.width * scale; 
		} else {
			return Math.max( self.graphic.width, self.graphic.height ) * scale * 0.5;
		}
	}

}

export default ParticleModel