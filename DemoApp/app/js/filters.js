'use strict';

eventsApp.filter('durations', function() {
	return function(duration) {
		switch(duration) {
			case 1:
				return "Half Hour";
			case 2:
				return "1 hour";
			case 3:
				return "Half Day";
		}
	}
})