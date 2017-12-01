/**
	@class Ratio
	@desc
		Utilities for different ratio layouts; used by {@link UIImage} and deprecated Flipbook.
*/
var Ratio = (function(){
	function resize ( mode, source, target, returnObj ) {
		mode = mode || this.EXACT;
		returnObj || ( returnObj = {width:0,height:0} )
		if ( mode == this.EXACT ){
			returnObj.width = source.width;
			returnObj.height = source.height;
		} else if ( mode == this.STRETCH ){
			returnObj.width = target.width;
			returnObj.height = target.height;	
		} else {
			var s = source.width / source.height;
			var t = target.width / target.height;
			var a = mode == this.FILL ? s : t ;
			var b = mode == this.FILL ? t : s ;
			if (a < b){
				returnObj.height = source.height / (source.width / target.width);
				returnObj.width = target.width;
			} else {
				returnObj.width = source.width / (source.height / target.height);
				returnObj.height = target.height;
			}
		} 
		return returnObj;
	}

	return {
		resize 	: 	resize,

		/**
			@memberof Ratio
			@const {string} EXACT
				'auto' ~ Images display at the exact height and width of the source 
		*/
		EXACT 	: 	'auto',
	

		/**
			@memberof Ratio
			@const {string} FILL
				'cover' ~ Scales the image to fill the target without distortion while maintaining aspect ratio, may cause a crop. 
		*/
		FILL 	: 	'cover',


		/**
			@memberof Ratio
			@const {string} FIT
				'contain' ~ Scales to fit the full image without distortion while maintaining aspect ratio, may cause negative borders. 
		*/
		FIT 	: 	'contain',


		/**
			@memberof Ratio
			@const {string} STRETCH
				'100% 100%' ~ Images stretches to fill the target, may cause aspect ratio distortion. 
		*/
		STRETCH : 	'100% 100%'			
	}	
})();