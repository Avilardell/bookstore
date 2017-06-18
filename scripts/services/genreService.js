angular.module("bookApp")


.service('genreService', function($http){

		this.getGenres = function(callback){
			$http.get('../../data/genres.json').then(callback)
		};

		this.deleteGenre = function(genre, $index){
			
		};

		this.saveGenre = function(genre){


		};
})
