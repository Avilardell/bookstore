angular.module("bookApp")


.directive("listGenres", function(){

	return {
		templateUrl: '../../views/listGenres.html',
		controller: 'listGenres'
	};

		
})