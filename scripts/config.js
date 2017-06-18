angular.module("bookApp")

// just in case to start using in-app routing url's
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