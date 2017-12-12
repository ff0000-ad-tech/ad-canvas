import { MathUtils } from 'ad-utils'
import { Vector2D } from 'ad-geom'

var ParticlesUtils = ParticlesUtils || {};
//object

ParticlesUtils = {

	/* Style */
	easyTween: function ( animations, maxDuration, frameCount ) {
		var style = {};

		for( var key in animations ) {
			var obj = animations[ key ];
			var steps = obj.steps;
			var duration = ( obj.duration === 'max' ) ? maxDuration : ( obj.duration || maxDuration );
			var perc = obj.loop ? ( frameCount % duration ) / duration : frameCount / duration;
			perc = MathUtils.restrict( perc, 0, 1 );
			var i;
	
			for( i=0; i<steps.length-1; i++ ) {
				//check current and next
				var s1 = steps[ i ];
				var s2 = steps[ i + 1 ];

				if ( MathUtils.inRange( perc, s1.s, s2.s )) {
					val = [];
					val = MathUtils.rel( s1.v, s2.v, s1.s, s2.s, perc );
					style[ key ] = val;
					break;
				}
			}
		}
		return style;
	},

	randomNumInRange: function ( v, r, increment ) {
		if( !!!r ) {
			return v;
		}
		increment = increment || 0.01;
		return v + MathUtils.random( -r / 2, r / 2, increment );
	},

	randomArrayInRange: function ( v, r, increment ) {
		increment = increment || 0.01;
		var result = [];
		var i;
		for( i=0; i<v.length; i++ ) {
			result.push( this.randomNumInRange( v[ i ], r[ i ], increment ));
		}

		return result;
	},

	randomVectorInRange: function ( v, r, shape ) {

		var center = new Vector2D( v.x, v.y );
		var rx = r.x / 2;
		var ry = r.y / 2;
		var rnd;

		switch( shape ) {
			case 'rect':
				var x = MathUtils.random( -rx, rx, 0.01 );
				var y = MathUtils.random( -ry, ry, 0.01 );
				rnd = new Vector2D( x, y );
			break;

			case 'oval':
			default:
				var rnd = Vector2D.random();
				rnd.x *= rx * Math.random();
				rnd.y *= ry * Math.random();
		}

		center.add( rnd );

		return center;
	},

	secToFrameCount: function ( v, fps ) {
		return ~~( v * fps );
	},

	frameCountToSec: function ( v, fps ) {
		return v / fps;
	}
}


export default ParticlesUtils