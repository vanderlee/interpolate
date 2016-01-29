/*jslint devel: true, bitwise: true, regexp: true, browser: true, confusion: true, unparam: true, eqeq: true, white: true, nomen: true, plusplus: true, maxerr: 50, indent: 4 */
/*globals jQuery */

/*!
 * Interpolate
 *
 * Copyright (c) 2013-2016 Martijn W. van der Lee
 * Licensed under the MIT.
 */
/* CSS style interpolation.
 * Requires jQuery 1.8+.
 * Optionally jQueryUI for color support
 */

;(function($, undefined) {
	"use strict";

	/**
	 * .interpolate( propertyName, propertyValue[, blend[, easing]])
	 * .interpolate( propertyMap[, blend[, easing]])
	 *
	 * Smoothly blend a CSS property with the value for the element
	 *
	 * @param {string} name Name of the property
	 * @param {string} value Value of the property
	 * @param {float} blend Ratio of blending in range [0,1] (default `0.5`)
	 * @param {string} easing Easing method to use (default `linear`)
	 */
	$.fn.interpolate = function(name, value, blend, easing) {
		var elements = this;
		if ($.isPlainObject(name)) {
			easing = blend || 'linear';
			blend = $.isNumeric(value) ? value : .5;
			$.each(name, function(n, v) {
				$.each(elements, function() {
					$.Tween(this, {duration: 1}, n, v, easing).run(blend);
				});
			});
		} else {			
			blend = $.isNumeric(blend) ? blend : .5;
				$.each(elements, function() {
					$.Tween(this[0], {duration: 1}, name, value, easing || 'linear').run(blend);
				});
		}
		return this;
	};

	/**
	 * jQuery.interpolate( propertyMapStart, propertyMapEnd[, blend[, easing]])
	 *
	 * Smoothly blend between two maps of CSS properties.
	 *
	 * @param {object} start Set of CSS properties to blend from
	 * @param {object} end Set of CSS properties to blend into
	 * @param {float} blend Ratio of blending in range [0,1] (default `0.5`)
	 * @param {string} easing Easing method to use (default `linear`)
	 * @returns {object} Set of CSS properties representing the blended state
	 */
	$.interpolate = function(start, end, blend, easing) {
		var elem = $('<span/>'),
			state = $.extend({}, start);
		elem.css(state).interpolate(end, blend, easing);
		$.each(end, function(name, value) {
			state[name] = elem.css(name);
		});
		return state;
	};
}(jQuery));