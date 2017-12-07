angular.module('LaMiaPrimaApp', [])
	.controller('PrimaController', function($scope,$http){
		$scope.posts=[];
		$scope.loading=false;

		$http.get("https://jsonplaceholder.typicode.com/posts")
			.then(
				function(data){//success

					$scope.posts=data.data;
				},
				function(error) {//error


				}
			);

	}); 