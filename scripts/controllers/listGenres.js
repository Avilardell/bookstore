angular.module('bookApp')

.controller('listGenres', function($scope, genreService){

		genreService.getGenres(function(response){
			
			$scope.genres = response.data;

		});

		$scope.addGenre = function($event, genre){
			$event.preventDefault();
			
				this.genres.push({
					name: genre
				});

		};

		$scope.deleteGenre = function($index, genre){
			genreService.deleteGenre(genre);
			$scope.genres.splice($index, 1);
		}

})
