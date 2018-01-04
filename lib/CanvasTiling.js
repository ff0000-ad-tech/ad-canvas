/**
	@class CanvasTiling
	@desc
		Custom constants to identify how patterns will repeat.
*/
var CanvasTiling = new function() {
	return {
		/**
			@memberof CanvasTiling
			@const {string} COVER
				Represents 'repeat'. Used for patterns which repeat infinitely vertically and horizontally.
			@example
				CanvasTiling.COVER
		*/
		COVER: 'repeat',

		/**
			@memberof CanvasTiling
			@const {string} X
				Represents 'repeat-x'. Used for fillStyle patterns with only horizontal repetiion (infinite columns, 1 rows).
			@example
				CanvasTiling.X
		*/
		X: 'repeat-x',

		/**
			@memberof CanvasTiling
			@const {string} Y
				Represents 'repeat-y'. Used for fillStyle patterns with only vertical repetiion (1 column, infinite rows).
			@example
				CanvasTiling.Y
		*/
		Y: 'repeat-y',

		/**
			@memberof CanvasTiling
			@const {string} NONE
				Represents 'no-repeat'. Used for fillStyle patterns with no repetition.
			@example
				CanvasTiling.NONE
		*/
		NONE: 'no-repeat'
	}
}()
export default CanvasTiling
