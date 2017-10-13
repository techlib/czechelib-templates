//
// Main project bundle
//

// Dependencies
//
require('../plugins')

// Components declarations
var components = {
	'shapes': require('../components/shapes')
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

//= require ./bootstrap/transition
//= require ./bootstrap/alert
//= require ./bootstrap/button
//= require ./bootstrap/carousel
// = require ./bootstrap/collapse
import 'bootstrap/collapse.js'
//= require ./bootstrap/dropdown
//= require ./bootstrap/modal
//= require ./bootstrap/tab
//= require ./bootstrap/affix
//= require ./bootstrap/scrollspy
//= require ./bootstrap/tooltip
//= require ./bootstrap/popover
