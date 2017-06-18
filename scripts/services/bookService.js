angular.module("bookApp")

/*services are global, so they provide
controllers the ability to acces external data*/
.service('bookService', function($http){
		
		this.getBooks = function(callback){
			//data access with a Promise to make it async
			$http.get('../../data/books.json').then(callback)
			};

		this.deleteBook = function(book, $index){
			console.log("book to be deleted: " + book.title);
		};

		this.saveBook = function(book){
			
		};

})