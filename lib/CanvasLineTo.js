/**
 * @npmpackage
 * @class CanvasLineTo
 * @desc
 * Custom constants to identify the functions used for drawing shapes based on lines and curves.
 * <codeblock>
 * import { CanvasLineTo } from 'ad-canvas'
 * </codeblock>
 */

/**
 * @memberof CanvasLineTo
 * @const {string} MOVE
 * 	Represents 'moveTo'
 * @example
 * 	CanvasLineTo.MOVE
 */
export const MOVE = 'moveTo'

/**
 * @memberof CanvasLineTo
 * @const {string} LINE
 * 	Represents 'lineTo'.
 * @example
 * 	CanvasLineTo.LINE
 */
export const LINE = 'lineTo'

/**
 * @memberof CanvasLineTo
 * @const {string} QUAD
 * 	Represents 'quadraticCurveTo'.
 * @example
 * 	CanvasLineTo.QUAD
 */
export const QUAD = 'quadraticCurveTo'

/**
 * @memberof CanvasLineTo
 * @const {string} BEZIER
 * 	Represents 'bezierCurveTo'.
 * @example
 * 	CanvasLineTo.BEZIER
 */
export const BEZIER = 'bezierCurveTo'

/**
 * @memberof CanvasLineTo
 * @const {string} ARC
 * 	Represents 'arcTo'.
 * @example
 * 	CanvasLineTo.ARC
 */
export const ARC = 'arcTo'
