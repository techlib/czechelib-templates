/**
 * Add active class to visible elements
 * ======================================
 * - jquery needed :)
 * - active on some resolution only
 * @offset - offset element from top + define in css to!
 */
var enableOn = window.innerWidth > 999
var $items = $('.animate')

var offset = 120

var visibleSectionsInit = function(){
	visibleSection()
}

var visibleSection = function() {
	var top = window.pageYOffset + window.innerHeight - offset

	// active items
	$items.each(function () {
			var $el = $(this);
			var animationStart = $el.offset().top
			var elOffsetTop = $el.data('offset-top')
			var elOffsetBottom = $el.data('offset-bottom')

			if(elOffsetTop || elOffsetTop == 0){
				var animationStart = animationStart - offset + elOffsetTop
			}

			if(elOffsetBottom || elOffsetBottom == 0){
				var elHeight = $el.outerHeight()

				var animationStart = animationStart - offset + elHeight - elOffsetBottom
			}

			if( top > animationStart){
				$el.addClass('is-visible')
			}else{
				// $el.removeClass('is-visible')
			}

	});
}

if(enableOn){

	window.addEventListener('scroll', function() {
    window.requestAnimationFrame(visibleSection)
	});
	// initial call
	visibleSectionsInit()
}
