angular.module("bookApp")

//to show the books table with all required information
.directive("listBooks", function(){

	return {
		templateUrl: '../../views/listBooks.html',
		controller: 'listBooks'
	};

		
})