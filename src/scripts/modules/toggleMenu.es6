/*
  @ Javascript toggle menu binding
*/
var toggler = document.getElementById("js-menu-toggle")

if(toggler){
  toggler.onclick = function(){
    document.body.classList.toggle('menu-is-open')
  }
}

var $container = $(document);

$container.on('click', '.dropdown-toggle', function(e){
	var $el = $(this)

	var $target = $el.nextAll('.dropdown-menu')

	$target.slideToggle('fast')

	e.preventDefault()
})
