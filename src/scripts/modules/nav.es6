/*
  @ Javascript toggle menu binding
*/
var $bind = $('.js-nav')
var $tabs = $('.jstabs > div')

$bind.click(function(e){
	var $this = $(this)
	var target = $this.attr('data-tab')

	$tabs.removeClass('is-active').eq(target-1).addClass('is-active')

	document.body.classList.toggle('menu-is-open')

	e.preventDefault()
})

