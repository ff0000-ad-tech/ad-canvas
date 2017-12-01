/**
	@class CanvasLineTo
	@desc
		Custom constants to identify the functions used for drawing shapes based on lines and curves.
*/
var CanvasLineTo = new function() {
	return {
		/**
			@memberof CanvasLineTo
			@const {string} MOVE
				Represents 'moveTo'
			@example
				CanvasLineTo.MOVE
		*/
		MOVE: 'moveTo',

		/**
			@memberof CanvasLineTo
			@const {string} LINE
				Represents 'lineTo'.
			@example
				CanvasLineTo.LINE
		*/
		LINE: 'lineTo',

		/**
			@memberof CanvasLineTo
			@const {string} QUAD
				Represents 'quadraticCurveTo'.
			@example
				CanvasLineTo.QUAD
		*/
		QUAD: 'quadraticCurveTo',

		/**
			@memberof CanvasLineTo
			@const {string} BEZIER
				Represents 'bezierCurveTo'.
			@example
				CanvasLineTo.BEZIER
		*/
		BEZIER: 'bezierCurveTo',

		/**
			@memberof CanvasLineTo
			@const {string} ARC
				Represents 'arcTo'.
			@example
				CanvasLineTo.ARC
		*/
		ARC: 'arcTo'
	}
}