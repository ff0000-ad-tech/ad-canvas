/**
	@class Effects
	@desc
		Utilities for adding effects to elements
*/
import { MathUtils, ColorUtils } from 'ad-utils'

import * as Styles from './Styles'

var Effects = (function() {
	
	/* --------------------------------------------------------------------------------- */
	// PUBLIC METHODS

	/**
		@memberof Effects
		@method blur
		@param {object} obj
			object containing blur arguments, see Properties for more info:

			@property {element} obj.target
				dom element
			@property {number} obj.amount
				the level of blurriness
		@desc
			Blurs a dom element.
		
		
		@example
			//
			Effects.blur({
				target: _myDiv,
				amount: 10
			});
	*/
	function blur ( obj ) {
		if ( obj.amount >= 0 ) Styles.setCss( obj.target, { filter : 'blur(' + obj.amount + 'px)' });
	}


	/**
		@memberof Effects
		@method dropShadow
		@param {object} obj
			object containing drop shadow arguments, see Properties for more info:
			@property {element} obj.target
				dom element
			@property {number} obj.angle
				optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0.
			@property {number} obj.distance
				optional NUMBER for how far away the shadow will offset. Defaults to 0.
			@property {number} obj.size
				optional NUMBER for shadow radius. Defaults to 0.
			@property {number} obj.spread
				optional NUMBER for how much extra the shadow will increase before it begins its gradient fade. Defaults to 0.
			@property {string|object} obj.color
				optional color of shadow as a HEX STRING :"#ff0000", 
				RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
				or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
			@property {number} obj.alpha
				optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1.
			@property {boolean} obj.inner
				optional BOOLEAN to set the shadow as inset. Defaults to false.

		@desc
			Adds a drop shadow to a dom element. Follows the same use specs as Photoshop.
			
		@example
			//
			Effects.dropShadow({
				target:_myDiv,
				angle: 135,
				distance: 50,
				size: 20, 
				spread: 10,
				color: 'rgb(90, 0, 0)',
				alpha: 0.1,
				inner: true
			});
	*/
	function dropShadow ( obj ) {
		Styles.setCss( obj.target, { boxShadow : createShadow ( obj.angle || 0, obj.distance || 0, obj.size || 0, obj.spread || 0, obj.color || '#000000', obj.alpha, obj.inner ) });
	}


	/**
		@memberof Effects
		@method textDropShadow
		@param {object} obj
			object containing drop shadow arguments, see Properties for more info:
			@property {element} obj.target
				dom element
			@property {number} obj.angle
				optional NUMBER IN DEGREES for the angle at which the shadow will project. Defaults to 0.
			@property {number} obj.distance
				optional NUMBER for how far away the shadow will offset. Defaults to 0.
			@property {number} obj.size
				optional NUMBER for shadow radius. Defaults to 0.
			@property {string|object} obj.color
				optional color of shadow as a HEX STRING :"#ff0000", 
				RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
				or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
			@property {number} obj.alpha
				optional NUMBER of shadow opacity, if set will overwrite color.a. Defaults to 1.

		@desc
			Adds a drop shadow to text within a dom element. Follows the same use specs as Photoshop.
			
		@example
			//
			Effects.textDropShadow({
				target:_myText, 
				angle: 45, 
				distance: 15, 
				size: 1, 
				color: '#ff0000', 
				alpha: 0.5
			});
	*/
	function textDropShadow ( obj ) {
		Styles.setCss( obj.target, { textShadow : createShadow ( obj.angle || 0, obj.distance || 0, obj.size || 0, null, obj.color || '#000000', obj.alpha ) });
	}


	/**
		@memberof Effects
		@method glow
		@param {object} obj
			object containing glow arguments, see Properties for more info:
			@property {element} obj.target
				dom element
			@property {number} obj.size
				optional NUMBER for glow radius. Defaults to 0.
			@property {number} obj.spread
				optional NUMBER for how much extra the glow will increase before it begins its gradient fade. Defaults to 0.
			@property {string|object} obj.color
				optional color of glow as a HEX STRING :"#ff0000", 
				RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)", 
				or an RGB/A OBJECT:{r:255,g:0,b:0} / {r:255,g:0,b:0,a:1}. Defaults to "#000000".
			@property {number} obj.alpha
				optional NUMBER of glow opacity, if set will overwrite color.a. Defaults to 1.
			@property {boolean} obj.inner
				optional BOOLEAN to set the glow as inset. Defaults to false.

		@desc
			Adds a glow to a dom element. Follows the same use specs as Photoshop.
			
		@example
			//
			Effects.glow({
				target: _myDiv,
				size: 20, 
				spread: 0,
				color: 'rgb(90, 0, 0)',
				alpha: 0.5,
				inner: true
			});
	*/
	function glow ( obj){
		obj.angle = 0;
		obj.distance = 0;
		dropShadow( obj );
	}


	/**
		@memberof Effects
		@method linearGradient
		@param {object} obj
			object containing gradient arguments, see Properties for more info:
			@property {element} obj.target
				dom element
			@property {array} obj.colors
				ARRAY of colors as either a HEX STRING :"#ff0000" or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)".
			@property {number} obj.angle
				NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0.
		@desc
			Changes the background of a given dom element to be a linear gradient.
			<br><br>

			<b>Example</b><br>
			Adding a horizontal gradient from red, to blue, fading to a transparent yellow.
			<codeblock>
				Effects.linearGradient({
					target: _myDiv, 
					colors: ['red', 'blue', 'rgba(255, 255, 0, 0.5)'], 
					angle: 90
				});
			</codeblock>
	*/
	function linearGradient ( obj ) {
		Styles.setCss( obj.target, { background: 'linear-gradient(' + (obj.angle || 0) + 'deg, ' + obj.colors.toString() + ')' });
	}


	/**
		@memberof Effects
		@method radialGradient
		@param {object} obj
			object containing gradient arguments, see Properties for more info:
			@property {element} obj.target
				dom element
			@property {array} obj.colors
				ARRAY of colors as either a HEX STRING :"#ff0000" 
				or an RGB/A STRING: "rgb(255, 0, 0)" / "rgba(255, 0, 0, 1)". 
				<br><br>

				To add stops, append a % value to the color string: ["#ff0000 50%, "#00ff00 90%"].
			@property {number} obj.angle
				NUMBER IN DEGREES of angle to draw linear-gradient at. Defaults to 0.
		@desc
			Changes the background of a given dom element to be a radial gradient.
			<br><br>

			<b>Example</b><br>
			Adding a gradient from red to blue, with a very large choke on the blue.
			<codeblock>
				Effects.radialGradient({
					target: _myDiv, 
					colors: ['#ff0000', '#0000ff 10%']
				});
			</codeblock>
	*/
	function radialGradient ( obj ) {
		Styles.setCss( obj.target, { background: 'radial-gradient(' + obj.colors.toString() + ')' });
	}

	/* --------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function createShadow ( angle, distance, size, spread, color, alpha, inner ) {
		var val = ''
		var deg = angle * -1 + 180
		var rad = MathUtils.toRadians( deg );
		val += (Math.cos(rad) * distance).toFixed(8) + 'px ';
		val += (Math.sin(rad) * distance).toFixed(8) + 'px ';
		val += size + 'px';
		
		if( spread ) val += ' ' + spread + 'px';
		
		val += ' ' + ColorUtils.toRgbaString(color, alpha);

		inner = !!inner;
		if( inner ) val += ' inset';

		return val;
	}

	/* --------------------------------------------------------------------------------- */
	// PUBLIC ACCESS
	return {
		blur 			: blur,
		dropShadow 		: dropShadow,
		textDropShadow	: textDropShadow,
		linearGradient 	: linearGradient,
		radialGradient 	: radialGradient,
		glow		 	: glow
	}

})();

export default Effects