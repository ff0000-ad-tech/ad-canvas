/** 
	@class Emitter
	@desc
		( v1.1 )
		<br><br>

		Emitter is a particle system that emits and controls particles and renders on a canvas element.
		It comes with some basic physic features such as gravity, force, bounce and world boundary. 
		<br><br>

		The default setting is in <code>js/EmitterData.js</code> that comes with standard-particles template. 
		To tweak the default data, launch particle simulator in AdApp and work with the interface. When you have 
		reached your desired effect, copy the genrated code back to <code>js/EmitterData.js</code>.
		<br><br>

		For more info about the simulator, visit
		{@link https://confluence.ff0000.com/display/AT/PARTICLES }
	
	@example
		//create a canvas element
		adData.elements.particleCanvas = new UICanvas({
			id: 'particle-canvas',
			target: adData.elements.redAdContainer,
			css: {
				width: adParams.adWidth,
				height: adParams.adHeight
			}
		});
		
		//create an instance of Emitter
		adData.particleSystem = new Emitter();

		//initiate the emitter with the target canvas element
		adData.particleSystem.init( adData.elements.particleCanvas );
		
		//start emitting
		adData.particleSystem.emit();
		
		//stop emitting
		adData.particleSystem.stopEmitting();

*/
var Emitter = function () {
	var self = this;

	self.G = new Vector2D( 0, 0.1 );
	self.customBehaiver = { emitter: [ ], particle: [ ]};

	/**
		@memberof Emitter
		@method init
		@param {CanvasElement} canvasElement
			a canvas element
		@param {object} setting
			optional, contains fps and emitterData as properties to overide the frame rate and EmitterData, see Properties for more info:
		@property {EmitterData}  emitterData
		@property {number} fps
			default fps(60)

		@desc
			Initiates the Emitter.

		@example
			var myEmitter = new Emitter();

			//init emitter with default setting
			myEmitter.init( canvasElement );


			//init emitter with custom setting
			var customSetting = {
				fps: 30,
				emitterData: myCustomEmitterData
			};
			myEmitter.init( canvasElement, customSetting );
    */
	self.init = function ( canvasElement, setting ) {

		setting = setting || {};
		var data = setting.emitterData || EmitterData;
		self.fps = setting.fps || 60;

		//canvas
		self.canvas = canvasElement;
		self.ctx = canvasElement.getContext( '2d' );
		self.ctxWidth = canvasElement.width;
		self.ctxHeight = canvasElement.height;

		self.active = false;
		self.frameCount = 0;
		self.startEmitFrame = 0;
		self.frameEmittedCount = 0;

		self.liveParticles = [];
		self.particles = [];
		self.models = [];

		self.properties = {};
		self.setProperties( data );

		self._drawBackground();

		FrameRate.register( self, self._run, self.fps );
	}


	/**
		@memberof Emitter
		@method set
		@param {string} key
			the name of the property (supports nested object key)
		@param {number|string|object|array} val
			the value of the property
		@param {boolean} triggerChange
			optional, it is for internal use
		@desc
			Sets a sinlge property of emitter properties. To set multiple properties at once, please use setProperties.
	
		@example
			myEmitter.set( 'emitRate', 0.1 );

			myEmitter.set( 'origin.value.x', 0 );
    */
	self.set = function ( key, val, triggerChange ) {
		triggerChange = ( triggerChange === undefined ) ? true : triggerChange;
		ObjectUtils.objectifier.set( key, val, self.properties );

		if( triggerChange ) {
			self._afterPropertyChanged([ key.split( '.' )[ 0 ] ]);
		}
	}


	/**
		@memberof Emitter
		@method get
		@param {string} key
			the name of the property (supports nested object key)
		@returns {number|string|object|array}
			The value of the property
		@desc
			Gets a sinlge property of emitter properties.

		@example
			var rate = myEmitter.get( 'emitRate' );
			var lifeSpanValue = myEmitter.get( 'lifeSpan.value' );
    */
	self.get = function ( key ) {
		return ObjectUtils.objectifier.get( key, self.properties );
		// return ParticlesUtils.objectifier( key.split( '.' ), false, self.properties );
	}


	/**
		@memberof Emitter
		@method setProperties
		@param {object} obj
			an object containing properties and values
		@desc
			Sets a group of properties of emitter properties (supports nested object key)

		@example
			myEmitter.setProperties({
				'emitRate': 0.1,
				'background.type': 'none',
				'origin.value.x': 100
			});
    */
	self.setProperties = function ( obj ) {
		var keyArr = [];

		for( var key in obj ) {
			self.set( key, obj[ key ], false );
			keyArr.push( key.split( '.' )[ 0 ] );
		}

		self._afterPropertyChanged( keyArr );
	}


	/**
		@memberof Emitter
		@method addCustomBehavier
		@param {string} type
			'particle' or 'emitter'
		@param {function} func
			function to add
		@desc
			Adds on custom behavier in the run loop. If the type is 'particle' function, it will be called in each particle iteration in the run loop
			with the iterated particle as the first parameter and an array of all particles as the second. If the type is 'emitter', it will be called
			in each run loop with the emitter as a parameter. 

		@example
	        	function customParticleBehavier1 ( particle, particleGroup ) {
				var particleLocation = particle.properties.location;
				var i;
				//if there is another particle in the range of 60, set the color to red
				//otherwise set it to yellow
			    for( i=0; i<particleGroup.length; i++ ) {
			        var particle2 = particleGroup[ i ];
			        var dist = particleLocation.dist( particle2.properties.location );
			        if( dist < 60 ) {
			            particle.properties.style.color = [ 255, 0, 0 ];
			        } else {
			            particle.properties.style.color = [ 255, 255, 0 ];
			        }
			    }
        		}

        		function customParticleBehavier2 ( particle, particleGroup ) {
				particle.properties.style.scale = particle.properties.location.y * 0.1;
        		} 

	        	function customEmitterBehavier ( emitter ) {
	    			//animate the gravityAmount using frameCount
				emitter.set( 'gravityAmount', Math.sin( emitter.frameCount * 0.1 ));
			};

			myEmitter.addCustomBehavier( 'particle', customParticleBehavier1 );
			myEmitter.addCustomBehavier( 'particle', customParticleBehavier2 );
			myEmitter.addCustomBehavier( 'emitter', customEmitterBehavier );
    */
	self.addCustomBehavier = function ( type, func ) {
		this.customBehaiver[ type ].push( func );
	}


	/**
		@memberof Emitter
		@method removeCustomBehavier
		@param {string} type
			'particle' or 'emitter'
		@param {function} func
			function to remove
		@desc
			Removes the custom behavier added.

		@example
			myEmitter.removeCustomBehavier( 'particle', customParticleBehavier1 );
			myEmitter.removeCustomBehavier( 'emitter', customEmitterBehavier );
    */
	this.removeCustomBehavier = function ( type, func ) {
		var arr = this.customBehaiver[ type ];
		var i;
		for( i=0; i<arr.length; i++ ) {
			if( arr[ i ] === func ) {
				this.customBehaiver[ type ].splice( i, 1 );
			}
		}
	}


	/**
		@memberof Emitter
		@method emit
		@desc
			Starts emitting particles.

		@example
			myEmitter.emit();
    */
	self.emit = function () {
		self.active = true;
		self.startEmitFrame = self.frameCount;

		if( self.properties.emitRate === 0 ) {
			//emit once
			self.createParticles( self.properties.emitAmount );
		}
	}


	/**
		@memberof Emitter
		@method stopEmitting
		@desc
			Stops emitting particles.

		@example
			myEmitter.stopEmitting();
    */
	self.stopEmitting = function () {
		self.active = false;
	}


	/**
		@memberof Emitter
		@method empty
		@desc
			Emptys all particles.

		@example
			myEmitter.empty();
    */
	self.empty = function () {

		self.particles.forEach( function ( a ) {
			a = null;
		});
		self.particles = [];
	}


	/**
		@memberof Emitter
		@method pause
		@desc
			Pause the run loop ( freeze it! ).
		@example
			myEmitter.pause();
    */
	self.pause = function () {
		FrameRate.unregister( self, self._run );
	}


	/**
		@memberof Emitter
		@method resume
		@desc
			Resume the run loop after pause.
		@example
			myEmitter.resume();
    */
	self.resume = function () {
		FrameRate.register( self, self._run, self.fps );
	}
	

	/**
		@memberof Emitter
		@name tween
		@property {function} tween.to
			{@link Emitter.to}
		@desc
			Creates a object to hold tween functions:

	*/
	self.tween = {};


	/**
		@memberof Emitter
		@method to
		@param {number} duration
			duration of the tween in seconds
		@param {object} props
			properties to use
		@desc
			It creates a TweenLite animation for tweening emitter properties.
			( The purpose of this is to tween multiple nested keys in property object, since TweenLite doesn't support nested keys. )
			<br><br>
			<b>NOTE!!!</b>
			This method is on the {@link Emitter.tween} object!

		@example
	        	myEmitter.tween.to( 0.3, {
				'emitRate': 1,
				'velocity.value.angle': 45,
				'origin.value.x': 100,
				'origin.value.y': 350,
				delay: 1,
				onComplete: function () {
					trace( 'Done!' );
				}
     	   	});
    */
	self.tween.to = function ( duration, props ) {
		props = props || {};

		// var self = self;
		var onUpdate = props.onUpdate || null;
		var delay = props.delay || 0;

		delete props.delay;

		return TweenLite.delayedCall( delay, function () {

			//strip out emitter properties
			var emitterProps = {};
			for( var k in props ) {
				if( self.get( k ) !== undefined ) {
					emitterProps[ k ] = self.get( k );
				}
			}

			props.onUpdate = function () {
				if( onUpdate ) { onUpdate(); }
				self.setProperties( emitterProps );
			}
			TweenLite.to( emitterProps, duration, props );
		});
	}


	/**
		@memberof Emitter
		@method createParticles
		@param {number} amount
			the amount of particles to create
		@desc
			Creates particles from the particle models of the emitter. 
    */
	self.createParticles = function ( amount ) {
		self.frameEmittedCount ++;

		if( self.models.length <= 0 ) { return; }
		var p = self.properties;
		var map = self.probabilityMap;
		var i;

		for( i=0; i<amount; i++ ) {
			var ms = self.models;
			var index;
			
			if( self.particles.length >= p.maxParticleAmount ) {
				return;
			}

			if( p.pickRandomModel ) {
				//select model base on probability
				var num = MathUtils.random( 0, self.totalProbability, 0.01 );
				var j;
				for( j=0; j<map.length-1; j++ ) {
					if( MathUtils.inRange( num, map[ j ], map[ j + 1 ] )) {
						index = j;
						break;						
					}
				}
			} else {
				index = ( self.frameEmittedCount - 1 ) % ( ms.length );
			}

			self.particles.push( new Particle( self.ctx, ms[ index ], self.fps ));
		}
	}


	/**
		@memberof Emitter
		@method addModel
		@param {object} modelObj
			the object of the particle model to be added
		@desc
			Add a particle model
		@example
	        	var modelObj = {
					type: "Circle",
		            width: 12,
		            properties: {},
		            id: 'model5'
	        	};
	        	myEmitter.addModel( modelObj );
	*/
	self.addModel = function ( modelObj ) {
		self.properties.particleModels.push( modelObj );
		self._afterPropertyChanged([ 'particleModels' ]);
	}


	/**
		@memberof Emitter
		@method removeModel
		@param {string} id
			the id of the particle model to be removed
		@desc
			Remove a particle model by its id
		@example
	        	myEmitter.removeModel( 'model5' );
	*/
	self.removeModel = function ( id ) {
		var i;
		var index = null;
		var pm = self.properties.particleModels;
		for( i=0; i<pm.length; i++ ) {
			if( id === pm[ i ].id ) { 
				index = i;
				break;
			}
		}

		if( index !== null ) { 
			pm.splice( index, 1 );
			self._afterPropertyChanged([ 'particleModels' ]);
		}
	}

	self._drawBackground = function () {

		var p = self.properties;
		var bg = p.background;
		if( p.clearCanvas ) {
			if( self.frameCount > 0 ){
				self.ctx.globalAlpha = bg.alpha;
			}
			switch( bg.type ) {
				case 'color':
					self.ctx.beginPath();
					self.ctx.rect( 0, 0, self.ctxWidth, self.ctxHeight );
					self.ctx.fillStyle = bg.color;
					self.ctx.fill();
					self.ctx.closePath();
				break;
				case 'image':
					self.ctx.drawImage( ImageManager.get( bg.image ), 0, 0, self.ctxWidth, self.ctxHeight );
				break;
				default:
					self.ctx.clearRect ( 0, 0, self.ctxWidth, self.ctxHeight );
			}
			self.ctx.globalAlpha = 1;
		}
	}

	self._afterPropertyChanged = function ( keys ) {
		keys = keys || [];

		//convert globalForce to vector
		if( keys.indexOf( 'globalForce' ) > -1 ) {
			var force = self.properties.globalForce;
			self._globalForce = Vector2D.degreeToVector( force.angle ).mult( force.amount );
		}

		//create models if it's changed
		if( keys.indexOf( 'particleModels' ) > -1 ) {

			self.models = [];
			self.totalProbability = 0;
			var map = [];
			var pm = self.properties.particleModels;
			for( i=0; i<pm.length; i++ ) {
				var pmi = pm[ i ]
				var g;
				var m;

				switch( pmi.type ) {
					case 'Image':
						g = new Graphic[ pmi.type ]( ImageManager.get( pmi.image ), pmi.width, pmi.style );
					break;
					case 'Sprite':
						g = new Graphic[ pmi.type ]( ImageManager.get( pmi.image ), pmi.width, pmi.style, pmi.spriteSetting );
					break;
					case 'Circle':
						g = new Graphic[ pmi.type ]( pmi.width, pmi.style );
					break;
					case 'Rect':
						g = new Graphic[ pmi.type ]( pmi.width, pmi.height, pmi.style );
					break;
				}

				m = new ParticleModel( g, pmi.properties );
				m.setDefaultProperties( self.properties );
				self.models.push( m );

				map.push( self.totalProbability );

				var p = ( pmi.probability === undefined ) ? 1 : pmi.probability;
				self.totalProbability += p;
			}
			map.push( self.totalProbability );
			self.probabilityMap = map;

		} else {
			var prop = self.properties;
			self.models.forEach( function ( a ) {
				a.setDefaultProperties( prop );
			});
		}
	}.bind( self )

	self._run = function () {
		var p = self.properties;

		self._drawBackground();

		var i;
		for( i=0; i<self.particles.length; i++ ) {
			var a = this.particles[ i ];
			if( !a.isDead( self.ctxWidth, self.ctxHeight, p.killIfOutOfCanvas )) {
				self.liveParticles.push( a );
				a.update();
				a.applyForce( self._globalForce );
				if( p.gravityAmount !== 0 ) {
					var gravity = self.G.clone();
					gravity.mult( p.gravityAmount );
					a.applyForce( gravity );
				}

				if( p.world.active ) {
					a.checkWorld( p.world.value );
				}

				if( self.customBehaiver.particle !== 0 ) {
					var m;
					for( m=0; m<self.customBehaiver.particle.length; m++ ) {
						var func = self.customBehaiver.particle [ m ].call( func, a, self.particles );
					}
				}

				a.render();

			} else {
				a = null;
			}
		};
		//discard dead particles
		self.particles = self.liveParticles;
		self.liveParticles = [];

		if( self.customBehaiver.emitter !== 0 ) {
			var m;
			for( m=0; m<self.customBehaiver.emitter.length; m++ ) {
				var func = self.customBehaiver.emitter[ m ].call( func, self );
			}
		}

		//emit if active
		if( self.active ) {
			//emit if on frame
			var f = self.frameCount - self.startEmitFrame;
			if( f % ~~( 1 / p.emitRate ) === 0 ) {
				self.createParticles( p.emitAmount );
			}
		}

		self.frameCount ++;
	}

}

export default Emitter