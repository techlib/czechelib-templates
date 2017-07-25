//
// Main project bundle
//

// Dependencies
//
require('./plugins')

//
// Lazy components initialization from initComponents queue
//
// Components declarations
var components = {
	'shapes': require('./components/shapes')
}
var instances = []

// Init function
var init = (component) => {
	if(component.name in components){
		var Component = components[component.name] // class
		var placement = (typeof component.place == 'string') ? document.querySelector(component.place) : component.place // DOM element
		var instance = new Component(placement, component.data || {}) // new instance

		instances.push(instance)
	}
}
// Instance only required components
initComponents.map(init)

// Allow lazy init of components after page load
initComponents = {
	push: init
}

// Modules
//
// import './modules/activeSticky'
import './modules/smoothScroll'
import './modules/animate'
// import './modules/toggleMenu'
// import './modules/nav'
// import './modules/toggleMenuLang'
import './modules/magnifi'
// import './modules/parallax'
// import './modules/gallery'
// import './modules/jstabs'
