angular.module('FinalApp')
	.controller("MainController",function($scope,$resource,PostResource){
		
		User = $resource("https://jsonplaceholder.typicode.com/users/:id",{id: "@id"});	


		$scope.publicaciones  = PostResource.query();// isArray=true
		//query() => Get /posts -> arreglo de posts
		$scope.usuarios  = User.query();
		//console.log($scope.usuarios);


		$scope.removePublicacion = function (publicacion) {
			PostResource.delete({id: publicacion.id}, function(data){
				console.log(data);
				// $scope.publicaciones  = Post.query(); Si la Api eliminara realmente
			});
			$scope.publicaciones= $scope.publicaciones.filter(function (element) {
				return element.id !== publicacion.id;
			});
		}

	})
	.controller("PostController",function($scope,PostResource,$routeParams,$location) {
		$scope.titulo = "Editar Publicación"
		$scope.publicacion = PostResource.get({id: $routeParams.id});// isArray=false


		$scope.savePublicacion = function () {
			PostResource.update({id: $scope.publicacion.id},{data: $scope.publicacion},function(data){

				console.log(data);
				$location.path("/post/"+$scope.publicacion.id);
			});
		}


		
	})
	.controller('NewPostController', function($scope,PostResource,$location){
		
		$scope.publicacion = {};
		$scope.titulo= "Crear Publicación";

		$scope.savePublicacion = function () {
			PostResource.save({data: $scope.publicacion},function(data){

				console.log(data);
				$location.path("/");
			});
		}

	});