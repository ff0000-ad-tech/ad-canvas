var FullScreen = new function(){
	var F = this;

	F.isFullScreen = function(){
		return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
	}

	F.enter = function( elem ){
		if ( F.isFullScreen() ) return;

		if ( elem.requestFullscreen ) {
			trace ( ' -> requestFullscreen' )
			elem.requestFullscreen();
		} else if ( elem.msRequestFullscreen ) {
			trace ( ' -> msRequestFullscreen' )
			elem.msRequestFullscreen();
		} else if ( elem.mozRequestFullScreen ) {
			trace ( ' -> mozRequestFullScreen' )
			elem.mozRequestFullScreen();
		} else if ( elem.webkitRequestFullscreen ) {
			trace ( ' -> webkitRequestFullscreen' )
			elem.webkitRequestFullscreen();
		}
	}

	F.exit = function(){
		if ( !F.isFullScreen() ) return;
		
		if (document.exitFullscreen) {
			trace ( ' -> exitFullscreen' )
			document.exitFullscreen();
		} else if (document.msExitFullscreen) {
			trace ( ' -> msExitFullscreen' )
			document.msExitFullscreen();
		} else if (document.mozCancelFullScreen) {
			trace ( ' -> mozCancelFullScreen' )
			document.mozCancelFullScreen();
		} else if (document.webkitExitFullscreen) {
			trace ( ' -> webkitExitFullscreen' )
			document.webkitExitFullscreen();
		}
	}
}
