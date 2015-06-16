/*jslint devel: true, bitwise: true, regexp: true, browser: true, confusion: true, unparam: true, eqeq: true, white: true, nomen: true, plusplus: true, maxerr: 50, indent: 4 */
/*globals jQuery */

/*!
 * Interpolate
 *
 * Copyright (c) 2013-2015 Martijn W. van der Lee
 * Licensed under the MIT.
 */
/* CSS style interpolation.
 * Requires jQuery 1.8+.
 * Optionally jQueryUI for color support
 */

;(function($, undefined) {
	"use strict";

	/**
	 * .interpolate( propertyName, propertyValue [, blend] [, easing] )
	 * .interpolate( propertyMap [, blend] [, easing] )
	 */
	$.fn.interpolate = function(name, value, blend, easing) {		
		var _elem = this[0];
		if ($.isPlainObject(name)) {
			easing = blend || 'linear';
			blend = $.isNumeric(value) ? value : .5;
			$.each(name, function(n, v) {
				$.Tween(_elem, {duration: 1}, n, v, easing).run(blend);
			});
		} else {			
			blend = $.isNumeric(blend) ? blend : .5;
			$.Tween(_elem, {duration: 1}, name, value, easing || 'linear').run(blend);
		}
	}

	/**
	 * jQuery.interpolate( propertyMapStart, propertyMapEnd [, blend] [, easing] )
	 */
	$.interpolate = function(start, end, blend, easing) {
		var elem = $('<span/>'),
			state = $.extend({}, start);
		elem.css(state).interpolate(end, blend, easing);
		$.each(end, function(name, value) {
			state[name] = elem.css(name);
		});
		return state;
	}
}(jQuery));