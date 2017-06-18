angular.module("bookApp")

config(function($routeProvider) {

	$routeProvider
		.when('/books', {
			templateUrl	: '../views/listBooks.html',
			controller 	: './controllers/listBooks'
		})

		.otherwise({
			redirectTo: '/'
		})
})