'use strict';

angular.module("bookApp")


.controller("listBooks", function($scope, bookService, genreService){

		bookService.getBooks(function(response){
			/* a callback funtion to previously load
			books scope before firing other functions */
			$scope.books = response.data;
			
			});

		//Add the whole book information
		$scope.addBook = function($event, title, genre, price){
			$event.preventDefault(); //Prevents default form action (reloading)
			if (title != undefined && price != undefined) {
				
				//adds a new object at the final of the array

				this.books.push({
					title: title,
					genre: genre,
					price: price
			});
			console.log(title + ' ' + genre);
			} else {
					// avoids saving blank data
				alert("Complete the information before saving");
			};
		};

		$scope.deleteBook = function(book, $index){
			
			/* through the bookservice api, we identify the book index
			and splice this item index from the array */
			bookService.deleteBook(book);
			$scope.books.splice($index, 1);
		};

		$scope.saveBook = function(book){
			bookService.saveBook(book);
		};

		genreService.getGenres(function(response){

			$scope.genres = response.data;
			
			});


})