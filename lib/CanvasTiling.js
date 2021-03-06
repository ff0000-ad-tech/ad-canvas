/**
 * @npmpackage
 * @class CanvasTiling
 * @desc
 * Custom constants to identify how patterns will repeat.<br>
 * <codeblock>
 * import { CanvasTiling } from 'ad-canvas'
 * </codeblock>
 */

/**
 * @memberof CanvasTiling
 * @const {string} X
 * 	Represents 'repeat-x'. Used for fillStyle patterns with only horizontal repetiion (infinite columns, 1 rows).
 * @example
 * 	CanvasTiling.X
 */
export const X = 'repeat-x'

/**
 * @memberof CanvasTiling
 * @const {string} Y
 * 	Represents 'repeat-y'. Used for fillStyle patterns with only vertical repetiion (1 column, infinite rows).
 * @example
 * 	CanvasTiling.Y
 */
export const Y = 'repeat-y'

/**
 * @memberof CanvasTiling
 * @const {string} XY
 * 	Represents 'repeat'. Used for patterns which repeat infinitely vertically and horizontally.
 * @example
 * 	CanvasTiling.XY
 */
export const XY = 'repeat'

/**
 * @memberof CanvasTiling
 * @const {string} NONE
 * 	Represents 'no-repeat'. Used for fillStyle patterns with no repetition.
 * @example
 * 	CanvasTiling.NONE
 */
export const NONE = 'no-repeat'
