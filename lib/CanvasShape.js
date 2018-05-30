/** 
	@npmpackage
	@class CanvasShape
	@desc
		Import from <a href="https://github.com/ff0000-ad-tech/ad-canvas">ad-canvas</a>
		<br>
		<codeblock>
			// importing into an ES6 class
			import { CanvasShape } from 'ad-canvas'
		</codeblock>
		<br><br>
		
		Is the returned instance of a {@link CanvasShape}, which makes up all {@link CanvasCircle}s, {@link CanvasRect}s, and 
		{@link CanvasPath}s. Never called directly by a user.
*/
import CanvasElement from './CanvasElement'
import { Align } from 'ad-view'
import { MathUtils } from 'ad-utils'

class CanvasShape extends CanvasElement {
	constructor(shapeObj) {
		super(shapeObj, shapeObj.type)
		var CS = this

		CS.drawScale = shapeObj.drawScale || 1
		CS.fill = shapeObj.fill

		var _stroke = shapeObj.stroke

		CS.strokeFill = _stroke.fill || null
		CS.strokeWidth = _stroke.width || 0
		CS.strokeCap = _stroke.cap || 'butt'
		CS.strokeJoin = _stroke.join || 'miter'
		CS.strokeDashSize = _stroke.dashSize || 10000
		CS.strokeDashGap = _stroke.dashGap || 0
		CS.strokeDashOffset = _stroke.dashOffset || 0
		CS.strokePosition = _stroke.position || 'outer'

		CS._closePath = shapeObj.closePath != false

		if (CS.strokeDashGap === 0 && CS.strokeDashSize != 10000) CS.strokeDashGap = CS.strokeDashSize

		CS._setDrawArgs(shapeObj)

		if (shapeObj.align) Align.set(CS, shapeObj.align)
	}
	/* ------------------------------------------------
			sets various arguments defining an elements.args paramter given an initial shapeObj
			for line drawings, an argument (dItem.drawArgs) will be defined so the initial drawing paramters will be separated from any translated values
	
			CALLED ONLY FROM CanvasShape();
		*/
	_setDrawArgs(shapeObj) {
		var CS = this
		var _params = shapeObj.params || [0, 0, 0, 0, 0]
		switch (CS._type) {
			case 'rect':
				_params = [_params.x || 0, _params.y || 0, _params.width || _params.height, _params.height || _params.width]
				break
			case 'arc':
				var _startVal = _params.startAngle === undefined ? _params.startRad : MathUtils.toRadians(_params.startAngle)
				var _endVal = _params.endAngle === undefined ? _params.endRad : MathUtils.toRadians(_params.endAngle)

				if (!_startVal) _startVal = 0
				if (!_endVal) _endVal = 2 * Math.PI

				_params = [_params.x || 0, _params.y || 0, _params.width >= 0 ? _params.width / 2 : _params.radius, _startVal, _endVal]
				break
		}

		CS.args = _params
		CS._setShapeParams(shapeObj.points || _params, shapeObj)

		CS.transformOrigin =
			_params.transformOrigin || shapeObj.transformOrigin || (shapeObj.params ? shapeObj.params.transformOrigin : null) || '50% 50%'
		// (CS._type === 'rect' ? '0 0' : '50% 50%')
	}

	draw(translation, isArc) {
		var CS = this

		if (CS.strokeDashSize > 0 && CS.strokeDashGap > 0)
			CS.stage.ctx.setLineDash([CS.strokeDashSize * CS.stage.qualityScale, CS.strokeDashGap * CS.stage.qualityScale])
		CS.stage.ctx.lineDashOffset = CS.strokeDashOffset

		var _outer = CS.strokePosition === 'outer'
		var _strokeDepth = CS.strokeWidth > 0

		CS.stage.ctx.beginPath()
		CS.stage.ctx.strokeStyle = CS.strokeFill
		CS.stage.ctx.lineWidth = CS.strokeWidth * CS.stage.qualityScale * (_outer ? 2 : 1)
		CS.stage.ctx.lineCap = CS.strokeCap
		CS.stage.ctx.lineJoin = CS.strokeJoin

		CS._prepDrawing(translation)
		if (CS._closePath) CS.stage.ctx.closePath()

		if (_outer && _strokeDepth) CS.stage.ctx.stroke()
		if (CS.fill) {
			CS.stage.ctx.fillStyle = CS.fill
			CS.stage.ctx.fill()
		}
		if (!_outer && _strokeDepth) {
			// this commented out area was originally used to prevent errors of shadow displays when strokePosition === 'center'

			// CS.stage.ctx.shadowColor = 'rgba(0, 0, 0, 0)';
			// CS.stage.ctx.shadowOffsetX = 0;
			// CS.stage.ctx.shadowOffsetY = 0;
			// CS.stage.ctx.shadowBlur = 0;
			CS.stage.ctx.stroke()
		}
	}
}

export default CanvasShape
