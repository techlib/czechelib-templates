/*
  @ Javascript toggle menu binding
*/
var classname = document.getElementsByClassName("js-menu-toggle")

var myFunction = function() {
  document.body.classList.toggle('menu-is-open')
}

Array.from(classname).forEach(function(element) {
  element.addEventListener('click', myFunction)
})
