angular.module('CustomDirective') // Utilizar modulo
	.controller('ReposController',  function($scope,$http){

		$scope.repos= [];

		$http.get('https://api.github.com/users/google/repos')
			.then(
				function (data) {
		
					$scope.posts = data.data;

					for (var i = data.data.length - 1; i >= 0; i--) {
						var repo = data.data[i];
						$scope.repos.push(repo.name);
					}
					//console.log($scope.repos);
				},
				function (error) {
					console.log(error);
				});

		$scope.optionSelected = function (data){

			$scope.$apply(function() {
				$scope.main_repo= data;
			});
		};
	})
	.controller('RepositorioController', function($scope,$http,$routeParams){
		$scope.repo={};
		console.log($routeParams);
		$http.get('https://api.github.com/repos/google/'+$routeParams.name)
			.then(
				function (data) {
		
					$scope.repo = data.data;
					console.log($scope.repo);
				},
				function (error) {
					console.log(error);
				});
		
	});