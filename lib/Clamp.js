/**
	@class Clamp
	@desc
		Utility for resizing a DOM element to the size of all its content, sort of like shrink wrapping.
		<br><br>
		
		This will clamp the bounds and potentially move the x and y so that visually the content stays where it is. There is the option to clamp 
		both horizontally and vertically, or you can just do one. Additionally there is a optional object to add some buffer space on any of the sides.

	@example
		// clamp both directions
		Clamp.set( View.main.myDiv, Clamp.XY );
		
		// clamp both directions while adding some buffer padding on each side
		Clamp.set( View.main.myDiv, Clamp.XY, {
			top : 5,
			left : 10,
			bottom : 5,
			right : 10
		});

		// clamp only horizontally and add a buffer padding on the left
		Clamp.set( View.main.myDiv, Clamp.X, {
			left : 10
		});
*/
var Clamp = function() {

	var _rect = {
		x : [ 'offsetWidth', 'width', 'left', 'right' ],
		y : [ 'offsetHeight', 'height', 'top', 'bottom' ]
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS
	function set ( source, type, buffer, move ){
		var elem = Markup.get( source );
		move = move !== false		
		
		var children = elem.childNodes;
		var childCoordinates = [];	
		
		var direction = {};
		if ( /(x)/gi.exec( type ) ) direction.x = {};
		if ( /(y)/gi.exec( type ) ) direction.y = {};

		for ( var i = 0; i < children.length; i++ ){
			var child = children[i];
			
			childCoordinates[i] = {};

			for ( var xy in direction ){
				
				var xyValue = Styles.getCss ( child, xy );
				var whValue = child [ _rect[xy][0] ];

				var add = xyValue + whValue;

				var xyDirection = direction[xy]
				
				if ( i == 0 ){
					xyDirection.min = xyValue;
					xyDirection.max = add;
				}
				
				if ( xyValue < xyDirection.min ) 
					xyDirection.min = xyValue;
				
				if ( xyDirection.max < add ) 
					xyDirection.max = add;
				
				childCoordinates[i][xy] = xyValue;
			}
		}

		// process the optional buffer
		var _buffer = {
			top : 0,
			bottom : 0,
			left : 0,
			right : 0
		}

		if ( buffer ){
			for ( var prop in _buffer ){
				_buffer [ prop ] = isNaN(buffer) ? ( buffer [ prop ] || 0 ) : buffer;
			}
		}		

		// resize and move the container
		var css = {};
		for ( var xy in direction ){
			var d = direction[xy]
			
			if ( move ) css [ xy ] = d.min + Styles.getCss ( elem, xy ) - _buffer [ _rect[xy][2] ]
			
			css [ _rect[xy][1] ] = d.max - d.min + _buffer [ _rect[xy][2] ] + _buffer [ _rect[xy][3] ];
		}
		
		Styles.setCss( elem, css )

		// move all the children
		for ( i = 0; i < children.length; i++ ){
			var child = children[i];
			var css = {}

			for ( var xy in direction ){
				css [ xy ] = childCoordinates[i][xy] - direction[xy].min + _buffer [ _rect[xy][2] ]
			}

			Styles.setCss( child, css )
		}
		
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	return {
		/**
			@memberof Clamp
			@const {string} X
				Synonymous with "clampX" - clamp on the horizontal direction only 
		*/
		X 	: 	'clampX',


		/**
			@memberof Clamp
			@const {string} Y
				Synonymous with "clampY" - clamp on the vertical direction only 
		*/
		Y 	: 	'clampY',

		/**
			@memberof Clamp
			@const {string} XY
				Synonymous with "clampXY" - clamp on all sides 
		*/
		XY 	: 	'clampXY',
		
		/**
			@memberof Clamp
			@method set
			@param {element} source
				The DOM element to resize and move.
			@param {string} type
				A String/Constant representing what directions to clamp on.
			@param {object} buffer
				(optional) An Object that has the values to add buffer padding to each side. See properties for more info:

				@property {number} buffer.left
					Amount of left padding
				@property {number} buffer.right
					Amount of right padding
				@property {number} buffer.top
					Amount of top padding
				@property {number} buffer.bottom
					Amount of bottom padding
			@desc
				Resizes and moves the source element horizontally and/or vertically, relative to all its children. 
		*/
		set 	: 	set
	}

}()
