<a name="CanvasElement"></a>

## CanvasElement
**Kind**: global class  
**Npmpackage**:   
<a name="new_CanvasElement_new"></a>

### new CanvasElement()
Is the returned instance of a CanvasElement, which makes up all [CanvasShape](#CanvasShape)s and [CanvasImage](#CanvasImage)s. Never called directly by a user.<br><br>
Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
<br>
<pre class="sunlight-highlight-javascript">
import { CanvasElement } from 'ad-canvas'
</pre>
<br><br>
<b>Properties available to every [CanvasElement](#CanvasElement), except where noted::</b><br>
<table>
	<tr>
		<td>id</td>	<td>STRING representing the name of the element</td>
	</tr>
	<tr>
		<td>x</td>	<td>NUMBER representing the horizontal position of the element</td>
	</tr>
	<tr>
		<td>y</td>	<td>NUMBER representing the vertical position of the element</td>
	</tr>
	<tr>
		<td>rotation</td>	<td>NUMBER representing the rotation, in degrees, of the element</td>
	</tr>
	<tr>
		<td>alpha </td>	<td>NUMBER representing the opacity of the element</td>
	</tr>
	<tr>
		<td>scale</td>	<td>NUMBER representing the scale of the element. Will compound with but not change values of scaleX or scaleY</td>
	</tr>
	<tr>
		<td>scaleX</td>	<td>NUMBER representing the horizontal scale of the element</td>
	</tr>
	<tr>
		<td>scaleY</td>	<td>NUMBER representing the vertical scale of the element</td>
	</tr>
	<tr>
		<td>blendMode</td>	<td>NUMBER representing the blend or masking style applied to the element</td>
	</tr>
	<tr>
		<td>visible</td>	<td>BOOLEAN representing whether or not the element should be drawn</td>
	</tr>
	<tr>
		<td>shadowColor</td>	<td>STRING representing the color of the drop shadow in RGBA format</td>
	</tr><tr>
		<td>shadowBlur</td>	<td>NUMBER representing the amount of blur on the drop shadow</td>
	</tr>
	<tr>
		<td>shadowAngle</td>	<td>NUMBER representing the angle, in degrees, of the drop shadow</td>
	</tr>
	<tr>
		<td>shadowDistance</td>	<td>NUMBER representing the distance of the drop shadow from the element</td>
	</tr>
	<tr>
		<td>transformOrigin</td>	<td>STRING representing the origin from which to perform scales and rotations. Written as two values in a string with either a '%' or 'px' marker (ie '50% 50%' or '5px 100px')</td>
	</tr>
</table>
<br><br>
<b>The following *ONLY* apply to [CanvasImage](#CanvasImage) instances::</b><br>
<table>
	<tr>
		<td>sourceX</td>	<td>NUMBER representing the horizontal value from which to start drawing data from the source image</td>
	</tr>
	<tr>
		<td>sourceY</td>	<td>NUMBER representing the vertical value from which to start drawing data from the source image</td>
	</tr>
	<tr>
		<td>sourceW</td>	<td>NUMBER representing the width value from which to draw data from the source image</td>
	</tr>
	<tr>
		<td>sourceH</td>	<td>NUMBER representing the height value from which to draw data from the source image</td>
	</tr>
</table>
<br><br>
<b>The following *ONLY* apply to [CanvasText](#CanvasText) instances::</b><br>
<table>
	<tr>
		<td>fontFamily</td>	<td>STRING representing the font name</td>
	</tr>
	<tr>
		<td>fontSize</td>	<td>NUMBER or STRING (12, '12', '12px', or '12pt') representing the font size</td>
	</tr>
	<tr>
		<td>lineHeight</td>	<td>NUMBER which determines the line height between lines of text with defined maxWidth values</td>
	</tr>
	<tr>
		<td>marginLeft</td>	<td>NUMBER representing the X offset of the text</td>
	</tr>
	<tr>
		<td>marginTop</td>	<td>NUMBER representing the Y offset of the text</td>
	</tr>
	<tr>
		<td>maxWidth</td>	<td>NUMBER which determines the maximum width of the text field, which is used to create MUTLI-LINE text</td>
	</tr>
	<tr>
		<td>alignText</td>	<td>STRING or Align constant defining text's horizontal alingment: 'center', 'left', or 'right'. Can also use Align.CENTER, Align.LEFT, or Align.RIGHT.</td>
	</tr>
</table>
<br><br>
<b>The following *ONLY* apply to [CanvasImage](#CanvasImage)s, [CanvasCircle](#CanvasCircle)s, and [CanvasRect](#CanvasRect)s instances::</b><br>
<table>
	<tr>
		<td>width</td>	<td>NUMBER representing the total width or diameter of the element</td>
	</tr>
	<tr>
		<td>height</td>	<td>NUMBER representing the total height or diameter of the element</td>
	</tr>
</table>
<br><br>
<b>The following *ONLY* apply to [CanvasCircle](#CanvasCircle)s, [CanvasRect](#CanvasRect)s, and [CanvasText](#CanvasText) instances (heretofore referred to as 'shapes')::</b><br>
<table>
	<tr>
		<td>fill</td>	<td>STRING, gradient, or texture representing the color used to fill the shape</td>
	</tr>
	<tr>
		<td>strokeFill</td>	<td>STRING, gradient, or texture representing the color used to fill the shape's stroke</td>
	</tr>
	<tr>
		<td>strokeWidth</td>	<td>NUMBER representing the width of the shape's outline</td>
	</tr>
	<tr>
		<td>strokeJoin</td>	<td>STRING representing how two lines/corners form: 'round', 'bevel', and 'miter'</td>
	</tr>
	<tr>
		<td>strokePosition</td>	<td>STRING repsenting the position of the shape's stroke, 'outer' or 'center'; there is no 'inner'</td>
	</tr>
	<tr>
		<td>strokeDashSize</td>	<td>NUMBER representing the length of each segment in a dashed line</td>
	</tr>
	<tr>
		<td>strokeDashGap</td>	<td>NUMBER representing the gap between each segment in a dashed line</td>
	</tr>
	<tr>
		<td>strokeDashOffset</td>	<td>NUMBER representing the offset positioning of the dash segments</td>
	</tr>
</table>
<br><br>

