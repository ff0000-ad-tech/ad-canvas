/**
	@npmpackage
	@class CanvasBlendMode
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasDisplaceChannel } from 'ad-canvas'
		</codeblock>
			<br><br>
      <br>
    <b>What the map looks featuring red, green, blue, and alpha channels:</b>
    <img src="../docs_images/canvasdrawer/map.jpg" />
*/

/**
	@memberof CanvasDisplaceChannel
	@const {number} RED
		Represents 0, which targets <span style='color: red;'>red</span> bitmap data in a CanvasDisplacementMap
		<br>
		<b>What the map looks like with only the red channel:</b>
		<img src="../docs_images/canvasdrawer/channel_red.jpg" />
		<br>
		<b>The white parts are what CanvasDisplacementMap will displace; the black parts will remain unaffected:</b>
		<img src="../docs_images/canvasdrawer/channel_red2.jpg" />
	@example
    CanvasDisplaceChannel.RED
    */
export const RED = 0

/**
       @memberof CanvasDisplaceChannel
       @const {number} GREEN
           Represents 1, which targets <span style='color: green;'>green</span> bitmap data in a CanvasDisplacementMap
           <br>
           <b>What the map looks like with only the green channel:</b>
           <img src="../docs_images/canvasdrawer/channel_green.jpg" />
           <br>
           <b>The white parts are what CanvasDisplacementMap will displace; the black parts will remain unaffected:</b>
           <img src="../docs_images/canvasdrawer/channel_green2.jpg" />
       @example
       CanvasDisplaceChannel.GREEN
       */
export const GREEN = 1

/**
       @memberof CanvasDisplaceChannel
       @const {number} BLUE
           Represents 2, which targets <span style='color: blue;'>blue</span> bitmap data in a CanvasDisplacementMap
           <br>
           <b>What the map looks like with only the blue channel:</b>
           <img src="../docs_images/canvasdrawer/channel_blue.jpg" />
           <br>
           <b>The white parts are what CanvasDisplacementMap will displace; the black parts will remain unaffected:</b>
           <img src="../docs_images/canvasdrawer/channel_blue2.jpg" />
       @example
       CanvasDisplaceChannel.BLUE
       */
export const BLUE = 2

/**
       @memberof CanvasDisplaceChannel
       @const {number} ALPHA
           Represents 3, which targets <b>alpha</b> bitmap data in a CanvasDisplacementMap
           <br>
           <b>The white parts are what CanvasDisplacementMap will displace; the black parts will remain unaffected:</b>
           <img src="../docs_images/canvasdrawer/channel_alpha.jpg" />
       @example
       CanvasDisplaceChannel.ALPHA
       */
export const ALPHA = 3
