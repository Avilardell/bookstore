angular.module('bookApp')

.controller('listGenres', function($scope, genreService){

		genreService.getGenres(function(response){
			
			$scope.genres = response.data;

		});

		$scope.addGenre = function($event, genre){
			$event.preventDefault();//Prevents default form action (reloading)
				// add a new genre object to the array
				this.genres.push({
					name: genre
				});

		};
			/*delete a genere by accessing its own
			 index at the array */
		$scope.deleteGenre = function($index, genre){
			genreService.deleteGenre(genre);
			$scope.genres.splice($index, 1);
		}

})
