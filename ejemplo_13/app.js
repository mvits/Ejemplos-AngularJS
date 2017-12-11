angular.module('CustomDirective', [])
	.controller('AppCtrl',  function($scope,$http){
		$http.get('https://api.github.com/users/stiv15/repos')
			.then(
				function (data) {
					console.log(data.data);
					$scope.repos = data.data;
				},
				function (error) {
					console.log(error);
				});
	});