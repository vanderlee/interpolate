interpolate
===========
Version 1.1

CSS interpolation, both on elements and objects with CSS rules.

Allows you to interpolate colors, distances and everything else that jQuery and 
jQueryUI can animate. Exposes the jQuery/jQueryUI code that interpolates for
smooth animations.

Documentation
-------------

### .interpolate()
Smoothly blend a CSS property with the value for the element

`.interpolate( name, value[, blend[, easing]] )`

* string `name` Name of the property
* string `value` Value of the property
* float `blend` Ratio of blending in range [0,1] (default `0.5`)
* string `easing` Easing method to use (default `linear`)

`.interpolate( map[, blend[, easing]] )`

* string `map` Set of CSS properties to blend into
* float `blend` Ratio of blending in range [0,1] (default `0.5`)
* string `easing` Easing method to use (default `linear`)

Both return the jQuery object on which it was called, so can be chained.

### jQuery.interpolate()
Smoothly blend between two maps of CSS properties.

`jQuery.interpolate( start, end[, blend[, easing]] )`

* object `start` Set of CSS properties to blend from
* object `end` Set of CSS properties to blend into
* float `blend` Ratio of blending in range [0,1] (default `0.5`)
* string `easing` Easing method to use (default `linear`)

Returns an object Set of CSS properties representing the blended state