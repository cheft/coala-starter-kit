var coala = require('coala')
var todo = require('./components/todo.html')

coala.todoMVC = coala.mount(todo, '#app')

coala.router({
	routes: {
		'/:status': function(status) {
			coala.todoMVC.trigger('filter', status)
		}
	}
});
