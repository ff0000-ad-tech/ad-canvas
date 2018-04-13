/**
	@npmpackage
	@class CanvasLineTo
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasLineTo } from 'ad-canvas'
		</codeblock>
		<br><br>
		
		Custom constants to identify the functions used for drawing shapes based on lines and curves.
*/
/**
			@memberof CanvasLineTo
			@const {string} MOVE
				Represents 'moveTo'
			@example
				CanvasLineTo.MOVE
		*/
export const MOVE = 'moveTo'

/**
	@memberof CanvasLineTo
	@const {string} LINE
		Represents 'lineTo'.
	@example
		CanvasLineTo.LINE
*/
export const LINE = 'lineTo'

/**
	@memberof CanvasLineTo
	@const {string} QUAD
		Represents 'quadraticCurveTo'.
	@example
		CanvasLineTo.QUAD
*/
export const QUAD = 'quadraticCurveTo'

/**
	@memberof CanvasLineTo
	@const {string} BEZIER
		Represents 'bezierCurveTo'.
	@example
		CanvasLineTo.BEZIER
*/
export const BEZIER = 'bezierCurveTo'

/**
	@memberof CanvasLineTo
	@const {string} ARC
		Represents 'arcTo'.
	@example
		CanvasLineTo.ARC
*/
export const ARC = 'arcTo'
