angular.module('FinalApp')
	.controller("MainController",function($scope,$resource){
		Post = $resource("https://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});
		User = $resource("https://jsonplaceholder.typicode.com/users/:id",{id: "@id"});	


		$scope.publicaciones  = Post.query();// isArray=true
		//query() => Get /posts -> arreglo de posts
		$scope.usuarios  = User.query();
		console.log($scope.usuarios);

	})
	.controller("PostController",function($scope,$resource,$routeParams) {
		Post = $resource("https://jsonplaceholder.typicode.com/posts/:id",{id: "@id"});

		$scope.publicacion = Post.get({id: $routeParams.id});// isArray=false
		
	});