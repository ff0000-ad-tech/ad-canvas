/**
	@class Countdown
	@desc
		<span style="color:#ff0000"><b>WARN:</b><br>
		This class has been deprecated.  See the DateSchedule.getCountdown()
		</span>

		<br><br>

		A utility that maintains the remaining days, hours, minutes, and seconds to the target date.
	@example
		var countdown = new Countdown();
		countdown.init( '2015-08-28 12:00:00', DateUtils.TZ_LOCAL );
		var intervalId = setInterval( updateClock, 1000 );
		function updateClock() {
			if( countdown.isComplete())
				clearInterval( intervalId );
			trace( 'countdown clock: ' + 
				TextUtils.pad( countdown.getDays(), 2 ) + ':' + 
				TextUtils.pad( countdown.getHours(), 2 ) + ':' + 
				TextUtils.pad( countdown.getMinutes(), 2 ) + ':' + 
				TextUtils.pad( countdown.getSeconds(), 2 )
			);
		}	
*/
var Countdown = function() {
		
	/** 
		@memberof Countdown
		@method init
		@param {Date} _targetDate
			a date in the future
		@param {object} _tzDesignation
			{@link DateUtils} constant representing a timezone
		@desc
			Starts a timer that will dispatch an update event every second counting down to the specified date
	*/
	this.init = function( _targetDate, _tzDesignation ) {
		trace( 'Countdown.init(), to: ' + _targetDate + ', tzDesignation: ' + _tzDesignation );
		this.targetDate = typeof _targetDate == 'Date' ? _targetDate : DateUtils.parseToDate( _targetDate );
		this.tzDesignation = _tzDesignation || DateUtils.TZ_LOCAL;
		this.complete = false;
	}



	/** 
		@memberof Countdown
		@method isComplete
		@returns {boolean}
	*/
	this.isComplete = function() { 
		return this.complete;
	}



	/** 
		@memberof Countdown
		@method getDays
		@returns {number}
			The number of days left until the target-date. 
	*/
	this.getDays = function() {
		var remaining = this.update();
		return remaining ? Math.floor( remaining.days ) : 0;
	}


	/** 
		@memberof Countdown
		@method getHours
		@returns {number}
			The number of hours left until the target-date. 
	*/
	this.getHours = function() {
		var remaining = this.update();
		return remaining ? Math.floor( remaining.hours ) : 0;
	}
	

	/** 
		@memberof Countdown
		@method getMinutes
		@returns {number}
			The number of minutes left until the target-date. 
	*/
	this.getMinutes = function() {
		var remaining = this.update();
		return remaining ? Math.floor( remaining.minutes ) : 0;
	}
	

	/** 
		@memberof Countdown
		@method getSeconds
		@returns {number}
			The number of seconds left until the target-date. 
	*/
	this.getSeconds = function() {
		var remaining = this.update();
		return remaining ? Math.floor( remaining.seconds ) : 0;
	}
	


	/* -- INTERNAL ------------------------------------------------
	 *
	 *
	 */
	this.targetDate;
	this.tzDesignation;
	this.complete;

	this.update = function() {
		var now = DateUtils.getNow( this.tzDesignation );
		var timeDifference = DateUtils.getTimeDifference( now, this.targetDate );
		if( !timeDifference ) {
			trace( 'Countdown - countdown is over!!' );
			this.complete = true;
		}
		else return timeDifference;
	}
	
	
}
