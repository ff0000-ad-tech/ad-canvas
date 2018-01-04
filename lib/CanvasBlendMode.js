/**
	@class CanvasBlendMode
	@desc
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

var CanvasBlendMode = {
	/**
		@memberof CanvasBlendMode
		@const {string} NONE
			Represents 'source-over'. Displays the source content over the destination content. This is the default setting.
			<br>
			<img src="../docs_images/canvasdrawer/blend_none.jpg" />
		@example
			CanvasBlendMode.NONE
	*/
	NONE: 'source-over',

	/**
		@memberof CanvasBlendMode
		@const {string} UNDER
			Represents 'destination-over'. Displays the destination content over the source content.
			<br>
			<img src="../docs_images/canvasdrawer/blend_under.jpg" />
		@example
			CanvasBlendMode.UNDER
	*/
	UNDER: 'destination-over',

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
	SOURCE_IN: 'source-in',

	/**
		@memberof CanvasBlendMode
		@const {string} SOURCE_OUT
			Represents 'source-out'. Displays the source content outside of the destination content. Only the part of the source content that is OUTSIDE the destination content is shown, and the destination content is transparent.
			<br>
			<img src="../docs_images/canvasdrawer/blend_sourceOut.jpg" />
		@example
			CanvasBlendMode.SOURCE_OUT
	*/
	SOURCE_OUT: 'source-out',

	/**
		@memberof CanvasBlendMode
		@const {string} SOURCE_ATOP
			Represents 'source-atop'. Displays the destination content on top of the source content. The part of the destination content that is outside the source content is not shown.
			<br>
			<img src="../docs_images/canvasdrawer/blend_sourceAtop.jpg" />
		@example
			CanvasBlendMode.SOURCE_ATOP
	*/
	SOURCE_ATOP: 'source-atop',

	/**
		@memberof CanvasBlendMode
		@const {string} DEST_IN
			Represents 'destination-in'. Displays the destination content within the source content. Only the part of the destination content that is INSIDE the source content is shown, and the source content is transparent.
			<br>
			<img src="../docs_images/canvasdrawer/blend_destIn.jpg" />
		@example
			CanvasBlendMode.DEST_IN
	*/
	DEST_IN: 'destination-in',

	/**
		@memberof CanvasBlendMode
		@const {string} DEST_OUT
			Represents 'destination-out'. Displays the destination content outside of the source content. Only the part of the destination content that is OUTSIDE the source content is shown, and the source content is transparent.
			<br>
			<img src="../docs_images/canvasdrawer/blend_destOut.jpg" />
		@example
			CanvasBlendMode.DEST_OUT
	*/
	DEST_OUT: 'destination-out',

	/**
		@memberof CanvasBlendMode
		@const {string} DEST_ATOP
			Represents 'destination-atop'. Displays the destination content on top of the source content. The part of the destination content that is outside the source content is not shown.
			<br>
			<img src="../docs_images/canvasdrawer/blend_destAtop.jpg" />
		@example
			CanvasBlendMode.DEST_ATOP
	*/
	DEST_ATOP: 'destination-atop',

	/**
		@memberof CanvasBlendMode
		@const {string} XOR
			Represents 'xor'. Only areas where the destination content and source content do not overlap are displayed. The parts that do overlap are not shown.
			<br>
			<img src="../docs_images/canvasdrawer/blend_xor.jpg" />
		@example
			CanvasBlendMode.XOR
	*/
	XOR: 'xor',

	/**
		@memberof CanvasBlendMode
		@const {string} COPY
			Represents 'copy'. Displays the source content. The destination content is ignored.
			<br>
			<img src="../docs_images/canvasdrawer/blend_copy.jpg" />
		@example
			CanvasBlendMode.COPY
	*/
	COPY: 'copy',

	// PROPER BLEND MODES
	/**
		@memberof CanvasBlendMode
		@const {string} ADD
			Represents 'lighter'. Where both shapes overlap, the color is values are added together.
		@example
			CanvasBlendMode.ADD
	*/
	ADD: 'lighter',

	// THE FOLLOWING BLEND MODES MIGHT NOT BE SUPPORTED BY INTERNET EXPLORER 11 (and earlier) OR SAFARI
	/**
		@memberof CanvasBlendMode
		@const {string} DARKEN
			Represents 'darken'. Retains the darkest pixels of both layers.
		@example
			CanvasBlendMode.DARKEN
	*/
	DARKEN: 'darken',

	/**
		@memberof CanvasBlendMode
		@const {string} LIGHTEN
			Represents 'lighten'. Retains the lightest pixels of both layers.
		@example
			CanvasBlendMode.LIGHTEN
	*/
	LIGHTEN: 'lighten',

	/**
		@memberof CanvasBlendMode
		@const {string} OVERLAY
			Represents 'overlay'. A combination of multiply and screen. Dark parts on the base layer become darker, and light parts become lighter.
		@example
			CanvasBlendMode.OVERLAY
	*/
	OVERLAY: 'overlay',

	/**
		@memberof CanvasBlendMode
		@const {string} MULTIPLY
			Represents 'multiply'. The pixels are of the top layer are multiplied with the corresponding pixel of the bottom layer. A darker picture is the result.
		@example
			CanvasBlendMode.MULTIPLY
	*/
	MULTIPLY: 'multiply',

	/**
		@memberof CanvasBlendMode
		@const {string} SCREEN
			Represents 'screen'. The pixels are inverted, multiplied, and inverted again. A lighter picture is the result (opposite of multiply)
		@example
			CanvasBlendMode.SCREEN
	*/
	SCREEN: 'screen',

	/**
		@memberof CanvasBlendMode
		@const {string} DODGE
			Represents 'color-dodge'. Divides the bottom layer by the inverted top layer.
		@example
			CanvasBlendMode.DODGE
	*/
	DODGE: 'color-dodge',

	/**
		@memberof CanvasBlendMode
		@const {string} BURN
			Represents 'color-burn'. Divides the inverted bottom layer by the top layer, and then inverts the result.
		@example
			CanvasBlendMode.BURN
	*/
	BURN: 'color-burn',

	/**
		@memberof CanvasBlendMode
		@const {string} HARD
		Represents 'hard-light'. A combination of multiply and screen like overlay, but with top and bottom layer swapped.
		@example
			CanvasBlendMode.HARD
	*/
	HARD: 'hard-light',

	/**
		@memberof CanvasBlendMode
		@const {string} SOFT
			Represents 'soft-light'. A softer version of hard-light. Pure black or white does not result in pure black or white.
		@example
			CanvasBlendMode.SOFT
	*/
	SOFT: 'soft-light',

	/**
		@memberof CanvasBlendMode
		@const {string} DIFFERENCE
			Represents 'difference'. Subtracts the bottom layer from the top layer or the other way round to always get a positive value.
		@example
			CanvasBlendMode.DIFFERENCE
	*/
	DIFFERENCE: 'difference',

	/**
		@memberof CanvasBlendMode
		@const {string} EXCLUSION
			Represents 'exclusion'. Like difference, but with lower contrast.
		@example
			CanvasBlendMode.EXCLUSION
	*/
	EXCLUSION: 'exclusion',

	/**
		@memberof CanvasBlendMode
		@const {string} HUE
			Represents 'hue'. Preserves the luma and chroma of the bottom layer, while adopting the hue of the top layer.
		@example
			CanvasBlendMode.HUE
	*/
	HUE: 'hue',

	/**
		@memberof CanvasBlendMode
		@const {string} SATURATION
			Represents 'saturation'. Preserves the luma and hue of the bottom layer, while adopting the chroma of the top layer.
		@example
			CanvasBlendMode.SATURATION
	*/
	SATURATION: 'saturation',

	/**
		@memberof CanvasBlendMode
		@const {string} COLOR
			Represents 'color'. Preserves the luma of the bottom layer, while adopting the hue and chroma of the top layer.
		@example
			CanvasBlendMode.COLOR
	*/
	COLOR: 'color',

	/**
		@memberof CanvasBlendMode
		@const {string} LUMINOSITY
			Represents 'luminosity'. Preserves the hue and chroma of the bottom layer, while adopting the luma of the top layer.
		@example
			CanvasBlendMode.LUMINOSITY
	*/
	LUMINOSITY: 'luminosity'
}
export default CanvasBlendMode
