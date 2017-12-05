/**
	@class Align
	@desc
		Utility for aligning objects, which works for DOM elements and {@link CanvasDrawer} elements.  The x and y alignments are split up
		into separate assignemnts in one call. There are extra parameters that can be passed into the object to handle more complex logic.
		<br><br>

		<b>Notes:</b>
			<br>
			Align, by default, snaps to a full pixel. To change this, see <b>Sample 3</b> ( snap: false )
			<br><br>

		<b>Sample 1</b>
		<codeblock>
			// simple classic usage
			Align.set( myDiv, Align.LEFT ); // only align left
			Align.set( myDiv, Align.BOTTOM ); // only align bottom
			Align.set( myDiv, Align.CENTER ); // align both x and y to the center
		</codeblock>
		<br><br>
		
		<b>Sample 2</b>
		<codeblock>
			// simply align the x and y seperately
			Align.set( myDiv, {
				x: Align.RIGHT,
				y: Align.BOTTOM
			});
		</codeblock>
		<br><br>

		<b>Sample 3</b>
		<br>
		<b>'against'</b> is an object to which we align our given object, like making myDiv perfectly centered against myOtherDiv
		<br>
		<b>'against'</b> could also be a number, as in align myDiv centered against adParams.adWidth / 2
		<br>
		<br>
		<b>'outer'</b> is an optional complex parameter which determines how we align to the 'against' object; default to false
		<br>
		If <b>'against'</b> is a number, then <b>'outer'</b> will have no affect.
		<br>
		<br>
		<img src="../docs_images/align/align_c.jpg" />
		<br><br>
		<codeblock>
			// complex alignment, align in relation to another div with an offset shift of 10 pixels, without snapping to a whole pixel
			Align.set( myDiv, {
				x: {
					type: Align.RIGHT,
					against: myOtherDiv
					offset: 10,
					outer: true
				},
				y: {
					type: Align.BOTTOM,
					offset: 14
				},
				snap: false
			});
		</codeblock>
		<br><br>

		<b>Sample 4</b>
		<codeblock>
			// complex alignment, align in relation to a fixed number with an offset shift of 10 pixels
			Align.set( myDiv, {
				x: {
					type: Align.RIGHT,
					against: 200
					offset: 10,
				},
				y: {
					type: Align.BOTTOM,
					against: 30
					offset: 14
				},
			});
		</codeblock>
		<br><br>
*/
import * as Markup from './Markup'
import * as Styles from './Styles'

var Align = function() {

	/* 
		TODO - percentage vs px?
	*/

	var _rect = [{
		x: 'offsetWidth',
		y: 'offsetHeight',
		parent: 'parentNode'
	}, {
		x: 'width',
		y: 'height',
		parent: 'stage'
	}];

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PUBLIC METHODS
	function get( source, arg ) {
		var elem = source.canvas || Markup.get( source );
		var obj = {};
		var snap = arg.snap !== false;
		var sourceRect = isDomElement( source ) ? 0 : 1;

		if ( typeof arg == 'string' ) arg = calculate( arg );

		for ( var xy in arg ) {
			if ( xy == 'x' || xy == 'y' ) {

				var params = arg[xy];

				// the x or y is null or undefined, so skip this pass of the loop
				if ( !params ) continue;

				if ( typeof params == 'string' ) params = {
					type: params
				}

				var against;
				var againstDimension;
				var againstX = 0;
				var againstNumber = false;
				var offset = params.offset || 0;

				var _givenAgainst;
				if ( params.against !== undefined ) {
					_givenAgainst = true;
					against = params.against;
					var againstRect = 0;

					if ( isDomElement( against ) ) {
						if ( against.canvas ) againstRect = 1;
						else againstX = Styles.getCss( against, xy );
					} else if ( typeof against === 'number' ) {
						againstNumber = true;
						againstX = against;
					} else {
						againstX = against[xy];
						againstRect = 1;
					}

					againstDimension = _rect[againstRect][xy];

					if ( params.type === Align.CENTER ) arg[xy].outer = false;

				} else {
					against = elem[_rect[sourceRect].parent];
					againstDimension = _rect[sourceRect][xy];
				}

				var widthOrHeight = elem[_rect[sourceRect][xy]];

				switch ( source._type ) {
					case 'arc':
					case 'path':
						switch ( params.type ) {
							case Align.CENTER:
								widthOrHeight = 0;
								break;
							default:
								offset += widthOrHeight / 2;
								break;
						}
						break;
					case 'text':
						if ( xy === 'x' ) {
							switch ( source.alignText ) {
								case 'center':
									widthOrHeight = 0;
								case 'right':
									widthOrHeight *= -1;
							}
						}
						break;
				}

				// checks if qualityScale is available which means it is a CanvasDrawer or CanvasDrawer's canvas, 
				// without checking if it is the module directly
				widthOrHeight /= source.qualityScale || 1;

				var pos = calculate( params.type, widthOrHeight, againstNumber ? 0 : against[againstDimension] / (against.qualityScale || 1), !againstNumber && !!arg[xy].outer );

				if ( pos != null ) {
					pos += ( againstX + offset );
					obj[xy] = snap ? Math.round( pos ) : pos;
				}
			}
		}

		return obj;
	}

	function set( source, arg ) {
		var obj = get( source, arg );

		if ( isDomElement( source ) ) {
			var elem = source.canvas || Markup.get( source );
			Styles.setCss( elem, obj );
		} else {
			for ( var prop in obj ) source[prop] = obj[prop]
		}

		return obj;
	}



	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS	
	function calculate( mode, source, target, outer ) {
		//trace ( 'calculate()', mode, source, target, outer )
		// when only passing a string, this will create {x/y} from string
		var isConvert = arguments.length == 1;

		// Kenny Version 1.0
		/*switch ( mode ){
			case 'alignBottom' :
				if ( outer ) 
					source = 0
				if ( !isConvert )
					return target - source;
			
			case 'alignTop' :
				return isConvert ? { y:mode } : outer ? -source : 0 ;
							

			case 'alignRight' :
				if ( outer ) 
					target = 0
				if ( !isConvert )
					return target - source;
						
			case 'alignLeft' :
				return isConvert ? { x:mode } : outer ? target : 0 ;

			case 'alignCenter' :
				if ( outer ) 
					target = 0
				return isConvert ? { x:mode, y:mode } : ( target - source ) / 2;
			
			default :
				return null;
		}*/

		// Andrew Version 1.0
		/*switch ( mode ) {
			case 'alignBottom':
				if ( outer )
					source = target + source
				if ( !isConvert )
					return target - source;

			case 'alignTop':
				return isConvert ? {
					y: mode
				} : outer ? target : 0;


			case 'alignRight':
				if ( outer )
					target = 0
				if ( !isConvert )
					return target - source;

			case 'alignLeft':
				return isConvert ? {
					x: mode
				} : outer ? target : 0;

			case 'alignCenter':
				if ( outer )
					target = 0
				return isConvert ? {
					x: mode,
					y: mode
				} : ( target - source ) / 2;

			default:
				return null;
		}*/

		// Andrew Version 2.0
		switch ( mode ) {
			case 'alignBottom':
				if ( outer ) source = 0
				if ( !isConvert ) return target - source;

			case 'alignTop':
				return isConvert ? {
					y: mode
				} : outer ? -source : 0;


			case 'alignRight':
				if ( outer ) target += source
				if ( !isConvert ) return target - source;

			case 'alignLeft':
				return isConvert ? {
					x: mode
				} : outer ? -source : 0;

			case 'alignCenter':
				if ( outer )
					target = 0
				return isConvert ? {
					x: mode,
					y: mode
				} : ( target - source ) / 2;

			default:
				return null;
		}
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	// PRIVATE METHODS
	function isDomElement( elem ) {
		return elem instanceof HTMLElement || elem.canvas != undefined
	}

	/* ------------------------------------------------------------------------------------------------------------------------------- */
	return {
		/**
			@memberof Align
			@const {string} BOTTOM
				Synonymous with "alignBottom" 
		*/
		BOTTOM: 'alignBottom',


		/**
			@memberof Align
			@const {string} CENTER
				Synonymous with "alignCenter" 
		*/
		CENTER: 'alignCenter',


		/**
			@memberof Align
			@const {string} LEFT
				Synonymous with "alignLeft" 
		*/
		LEFT: 'alignLeft',


		/**
			@memberof Align
			@const {string} RIGHT
				Synonymous with "alignRight" 
		*/
		RIGHT: 'alignRight',


		/**
			@memberof Align
			@const {string} TOP
				Synonymous with "alignTop" 
		*/
		TOP: 'alignTop',


		/**
			@memberof Align
			@const {string} BOTTOM_LEFT
				Synonymous with "alignBottomLeft", used for {@link UITextField.alignText} 
		*/
		BOTTOM_LEFT: 'alignBottomLeft',


		/**
			@memberof Align
			@const {string} BOTTOM_RIGHT
				Synonymous with "alignBottomRight" used for {@link UITextField.alignText} 
		*/
		BOTTOM_RIGHT: 'alignBottomRight',


		/**
			@memberof Align
			@const {string} TOP_LEFT
				Synonymous with "alignTopLeft" used for {@link UITextField.alignText} 
		*/
		TOP_LEFT: 'alignTopLeft',


		/**
			@memberof Align
			@const {string} TOP_RIGHT
				Synonymous with "alignTopRight" used for {@link UITextField.alignText} 
		*/
		TOP_RIGHT: 'alignTopRight',


		/**
			@memberof Align
			@method get
			@desc
				Calculates but does not apply the amount the source element will move horizontally and/or vertically, relative to its parent 
				according to provided mode. The constants allow for picking which coordinate to apply.  
		*/
		get: get,


		/**
			@memberof Align
			@method set
			@desc
				Moves the source element horizontally and/or vertically, relative to its parent according to provided mode. The constants 
				allow for picking which coordinate to apply.  
		*/
		set: set,

		// used internally by Flipbook
		calculate: calculate
	}

}()
export default Align