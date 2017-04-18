require('todomvc-app-css/index.css')
window.$ = require('jquery')

var coala = require('coala')
var todo = require('./pages/todo.html')

coala.todoMVC = coala.mount(todo, '#app')

coala.router({
	routes: {
		'/:status': function(status) {
			coala.todoMVC.trigger('filter', status)
		}
	}
})
