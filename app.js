var myApp = angular.module("myApp", ["ngRoute", "ngAnimate"]);

myApp.config(function($routeProvider){
	$routeProvider
		.when("/books",{
			templateUrl: "book_list.html",
			controller: "BookListCtrl"
		})
		.when("/cart",{
			templateUrl: "Cart_list.html",
			controller: "CartListCtrl"
		})
		.otherwise({ 
			redirectTo:"/books"
		});
});

myApp.factory("bookService", function(){
	var books = [
		{
			imgUrl: "adultery.jpeg",
			name: "Adultery",
			price: 205,
			rating: 4,
			binding: "Paperback",
			publisher: "Random House Bangladesh",
			releaseDate: "12-08-2014",
			details: "Linda, in her thirties, begins to question the routine and predictability of her days. In everybodys eyes, she has a perfect life-happy marriage, children and a career. Yet what she feels is an eno... View More"
		},
		{
			imgUrl: "geronimo.jpeg",
			name: "Geronimo Stilton Spacemice#2 : You're Mine, Captain!",
			price: 168,
			rating: 5,
			binding: "Paperback",
			publisher: "Scholastic",
			releaseDate: "01-07-2014",
			details: "Geronimo Stilton meets outer space in this cosmically fun spin-off series!Meet Geronimo StiltonixHe is a spacemouse - the Geronimo Stilton of a parallel universe! He is captain of the spaceship Mou... View More"
		},
		{
			imgUrl: "life-or-death.jpeg",
			name: "Life or Death",
			price: 339,
			rating: 4,
			binding: "Paperback",
			publisher: "Hachette Bangladesh",
			releaseDate: "01-04-2014",
			details: "Why would a man escape from prison the day before he's due to be released? Audie Palmer has spent a decade in prison for an armed robbery in which four people died, including two of his gang. Five... View More"
		},
		{
			imgUrl: "playing.jpeg",
			name: "Playing It My Way : My Autobiography",
			price: 599,
			rating: 5,
			binding: "Hardcover",
			publisher: "Hodder & Stoughton",
			releaseDate: "01-08-2014",
			details: "I knew that if I agreed to write my story, I would have to be completely honest, as thats the way I have always played the game and that would mean talking about a number of things I have not addr... View More"
		},
		{
			imgUrl: "the-fault.jpeg",
			name: "The Fault in Our Stars",
			price: 227,
			rating: 4.5,
			binding: "Paperback",
			publisher: "Penguin Books Ltd",
			releaseDate: "25-01-2013",
			details: "Despite the tumor-shrinking medical miracle that has bought her a few years, Hazel has never been anything but terminal, her final chapter inscribed upon diagnosis. But when a gorgeous plot twist n... View More"
		},
		{
			imgUrl: "wings-of-fire.jpeg",
			name: "Wings of Fire: An Autobiography",
			price: 124,
			rating: 5,
			binding: "Paperback",
			publisher: "Universities Press",
			releaseDate: "25-08-2000",
			details: "Wings of Fire traces the life and times of India's former president A.P.J. Abdul Kalam. It gives a glimpse of his childhood as well as his growth as India's Missile Man. Summary of the Book Wings... View More"
		}
	];
	return{
		getBooks : function(){
			return books;
		},
		addToCart: function(book){

		}
	}
});

myApp.factory("cartService", function(){
	var cart = [];

	return{
		getCart: function(){
			return cart;
		},
		addToCart: function(book){
			cart.push(book);
		},
		buy: function(book){
			alert("Thanks for buying: ", book.name);
		}
	}
});

myApp.controller("BookListCtrl", function($scope, bookService, cartService){
	$scope.books = bookService.getBooks();
	$scope.addToCart = function(book){
		cartService.addToCart(book);
	}
});

myApp.controller("CartListCtrl", function($scope, cartService){
	$scope.cart= cartService.getCart();
	$scope.buy = function(book){
		cartService.buy(book);
	}
});
myApp.controller("HeaderCtrl",function($scope, $location) {
	$scope.appDetails = {};
	$scope.appDetails.title = "BookShop";
	$scope.appDetails.tagline = " Find all the books in one place!!";
	$scope.nav ={};
	$scope.isActive = function(path){
		if(path == $location.path()) {
			return true;
		}
		return false;
	}
});


