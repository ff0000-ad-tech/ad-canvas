/**
	@npmpackage
	@class CanvasBlendMode
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasBlendMode } from 'ad-canvas'
		</codeblock>
		<br><br>
		
		See also {@link http://www.w3schools.com/tags/canvas_globalcompositeoperation.asp} and here 
		{@link https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation}
		<br><br>
		<b>WARNING: If you try to apply a blend mode of any kind (masking) to a CanvasImage whose source is an SVG, it will not render properly in FireFox. This is a known browser issue</b><br>
		<ul>
			<li>Try drawing the SVG into a dummy canvas and then use that dummy canvas as the image source in place of the SVG for your masking</li>
			<li>Use a PNG instead</li>
		</ul>
		<br><br>
		<b>DEFAULT / PLACEMENTS:</b><br>
		<ul>
			<li>NONE</li>
			<li>UNDER</li>
		</ul>
		<br><br>
		
		<b>MASKING BLENDS:</b><br>
			Use the existing canvas drawings to act as the mask to the given drawing with this mode:
			<ul>
				<li>SOURCE_IN</li>
				<li>SOURCE_OUT</li>
				<li>SOURCE_ATOP</li>
			</ul>
			<br><br>
			Use the given drawing with this mode to act as the mask to existing canvas drawings:
			<ul>
				<li>DEST_IN</li>
				<li>DEST_OUT</li>
				<li>DEST_ATOP</li>
			</ul>
			<br><br>
			Miscellaneous:
			<ul>
				<li>XOR</li>
				<li>COPY</li>
			</ul>
			<br><br>
		<b>UNIVERSAL BLEND MODES:</b>
			<ul>
				<li>ADD</li>
			</ul>
			<br><br>
		<b>NOT SUPPORTED BY THESE BROWSER VERSIONS AND EARLIER:</b><br>
		Internet Explorer, Edge 12, Opera Mini 8, Android Browser 4.3:</b>
			<ul>
				<li>DARKEN</li>
				<li>LIGHTEN</li>
				<li>OVERLAY</li>
				<li>MULTIPLY</li>
				<li>SCREEN</li>
				<li>DODGE</li>
				<li>BURN</li>
				<li>HARD</li>
				<li>SOFT</li>
				<li>DIFFERENCE</li>
				<li>EXCLUSION</li>
				<li>HUE</li>
				<li>SATURATION</li>
				<li>COLOR</li>
				<li>LUMINOSITY</li>
			</ul>
			<br><br>
*/

/**
		@memberof CanvasBlendMode
		@const {string} NONE
			Represents 'source-over'. Displays the source content over the destination content. This is the default setting.
			<br>
			<img src="../docs_images/canvasdrawer/blend_none.jpg" />
		@example
			CanvasBlendMode.NONE
	*/
export const NONE = 'source-over'

/**
	@memberof CanvasBlendMode
	@const {string} UNDER
		Represents 'destination-over'. Displays the destination content over the source content.
		<br>
		<img src="../docs_images/canvasdrawer/blend_under.jpg" />
	@example
		CanvasBlendMode.UNDER
*/
export const UNDER = 'destination-over'

// MASKS
/**
	@memberof CanvasBlendMode
	@const {string} SOURCE_IN
		Represents 'source-in'. Displays the source content within the destination content. Only the part of the source content that is INSIDE the destination content is shown, and the destination content is transparent.
		<br>
		<img src="../docs_images/canvasdrawer/blend_sourceIn.jpg" />
	@example
		CanvasBlendMode.SOURCE_IN
*/
export const SOURCE_IN = 'source-in'

/**
	@memberof CanvasBlendMode
	@const {string} SOURCE_OUT
		Represents 'source-out'. Displays the source content outside of the destination content. Only the part of the source content that is OUTSIDE the destination content is shown, and the destination content is transparent.
		<br>
		<img src="../docs_images/canvasdrawer/blend_sourceOut.jpg" />
	@example
		CanvasBlendMode.SOURCE_OUT
*/
export const SOURCE_OUT = 'source-out'

/**
	@memberof CanvasBlendMode
	@const {string} SOURCE_ATOP
		Represents 'source-atop'. Displays the destination content on top of the source content. The part of the destination content that is outside the source content is not shown.
		<br>
		<img src="../docs_images/canvasdrawer/blend_sourceAtop.jpg" />
	@example
		CanvasBlendMode.SOURCE_ATOP
*/
export const SOURCE_ATOP = 'source-atop'

/**
	@memberof CanvasBlendMode
	@const {string} DEST_IN
		Represents 'destination-in'. Displays the destination content within the source content. Only the part of the destination content that is INSIDE the source content is shown, and the source content is transparent.
		<br>
		<img src="../docs_images/canvasdrawer/blend_destIn.jpg" />
	@example
		CanvasBlendMode.DEST_IN
*/
export const DEST_IN = 'destination-in'

/**
	@memberof CanvasBlendMode
	@const {string} DEST_OUT
		Represents 'destination-out'. Displays the destination content outside of the source content. Only the part of the destination content that is OUTSIDE the source content is shown, and the source content is transparent.
		<br>
		<img src="../docs_images/canvasdrawer/blend_destOut.jpg" />
	@example
		CanvasBlendMode.DEST_OUT
*/
export const DEST_OUT = 'destination-out'

/**
	@memberof CanvasBlendMode
	@const {string} DEST_ATOP
		Represents 'destination-atop'. Displays the destination content on top of the source content. The part of the destination content that is outside the source content is not shown.
		<br>
		<img src="../docs_images/canvasdrawer/blend_destAtop.jpg" />
	@example
		CanvasBlendMode.DEST_ATOP
*/
export const DEST_ATOP = 'destination-atop'

/**
	@memberof CanvasBlendMode
	@const {string} XOR
		Represents 'xor'. Only areas where the destination content and source content do not overlap are displayed. The parts that do overlap are not shown.
		<br>
		<img src="../docs_images/canvasdrawer/blend_xor.jpg" />
	@example
		CanvasBlendMode.XOR
*/
export const XOR = 'xor'

/**
	@memberof CanvasBlendMode
	@const {string} COPY
		Represents 'copy'. Displays the source content. The destination content is ignored.
		<br>
		<img src="../docs_images/canvasdrawer/blend_copy.jpg" />
	@example
		CanvasBlendMode.COPY
*/
export const COPY = 'copy'

// PROPER BLEND MODES
/**
	@memberof CanvasBlendMode
	@const {string} ADD
		Represents 'lighter'. Where both shapes overlap, the color is values are added together.
	@example
		CanvasBlendMode.ADD
*/
export const ADD = 'lighter'

// THE FOLLOWING BLEND MODES MIGHT NOT BE SUPPORTED BY INTERNET EXPLORER 11 (and earlier) OR SAFARI
/**
	@memberof CanvasBlendMode
	@const {string} DARKEN
		Represents 'darken'. Retains the darkest pixels of both layers.
	@example
		CanvasBlendMode.DARKEN
*/
export const DARKEN = 'darken'

/**
	@memberof CanvasBlendMode
	@const {string} LIGHTEN
		Represents 'lighten'. Retains the lightest pixels of both layers.
	@example
		CanvasBlendMode.LIGHTEN
*/
export const LIGHTEN = 'lighten'

/**
	@memberof CanvasBlendMode
	@const {string} OVERLAY
		Represents 'overlay'. A combination of multiply and screen. Dark parts on the base layer become darker, and light parts become lighter.
	@example
		CanvasBlendMode.OVERLAY
*/
export const OVERLAY = 'overlay'

/**
	@memberof CanvasBlendMode
	@const {string} MULTIPLY
		Represents 'multiply'. The pixels are of the top layer are multiplied with the corresponding pixel of the bottom layer. A darker picture is the result.
	@example
		CanvasBlendMode.MULTIPLY
*/
export const MULTIPLY = 'multiply'

/**
	@memberof CanvasBlendMode
	@const {string} SCREEN
		Represents 'screen'. The pixels are inverted, multiplied, and inverted again. A lighter picture is the result (opposite of multiply)
	@example
		CanvasBlendMode.SCREEN
*/
export const SCREEN = 'screen'

/**
	@memberof CanvasBlendMode
	@const {string} DODGE
		Represents 'color-dodge'. Divides the bottom layer by the inverted top layer.
	@example
		CanvasBlendMode.DODGE
*/
export const DODGE = 'color-dodge'

/**
	@memberof CanvasBlendMode
	@const {string} BURN
		Represents 'color-burn'. Divides the inverted bottom layer by the top layer, and then inverts the result.
	@example
		CanvasBlendMode.BURN
*/
export const BURN = 'color-burn'

/**
	@memberof CanvasBlendMode
	@const {string} HARD
	Represents 'hard-light'. A combination of multiply and screen like overlay, but with top and bottom layer swapped.
	@example
		CanvasBlendMode.HARD
*/
export const HARD = 'hard-light'

/**
	@memberof CanvasBlendMode
	@const {string} SOFT
		Represents 'soft-light'. A softer version of hard-light. Pure black or white does not result in pure black or white.
	@example
		CanvasBlendMode.SOFT
*/
export const SOFT = 'soft-light'

/**
	@memberof CanvasBlendMode
	@const {string} DIFFERENCE
		Represents 'difference'. Subtracts the bottom layer from the top layer or the other way round to always get a positive value.
	@example
		CanvasBlendMode.DIFFERENCE
*/
export const DIFFERENCE = 'difference'

/**
	@memberof CanvasBlendMode
	@const {string} EXCLUSION
		Represents 'exclusion'. Like difference, but with lower contrast.
	@example
		CanvasBlendMode.EXCLUSION
*/
export const EXCLUSION = 'exclusion'

/**
	@memberof CanvasBlendMode
	@const {string} HUE
		Represents 'hue'. Preserves the luma and chroma of the bottom layer, while adopting the hue of the top layer.
	@example
		CanvasBlendMode.HUE
*/
export const HUE = 'hue'

/**
	@memberof CanvasBlendMode
	@const {string} SATURATION
		Represents 'saturation'. Preserves the luma and hue of the bottom layer, while adopting the chroma of the top layer.
	@example
		CanvasBlendMode.SATURATION
*/
export const SATURATION = 'saturation'

/**
	@memberof CanvasBlendMode
	@const {string} COLOR
		Represents 'color'. Preserves the luma of the bottom layer, while adopting the hue and chroma of the top layer.
	@example
		CanvasBlendMode.COLOR
*/
export const COLOR = 'color'

/**
	@memberof CanvasBlendMode
	@const {string} LUMINOSITY
		Represents 'luminosity'. Preserves the hue and chroma of the bottom layer, while adopting the luma of the top layer.
	@example
		CanvasBlendMode.LUMINOSITY
*/
export const LUMINOSITY = 'luminosity'
