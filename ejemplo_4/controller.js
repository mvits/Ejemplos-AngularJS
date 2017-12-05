angular.module('LaMiaPrimaApp', [])
	.controller('PrimaController', function($scope,$http){
		$scope.posts=[];
		$scope.newPost={};
		$http.get("https://jsonplaceholder.typicode.com/posts")
			.then(
				function(data){//success
					console.log(data.data);
					$scope.posts=data.data;
				},
				function(error) {//error
					console.log(error);
				}
			);

		$scope.addPost = function () {
			$http.post("https://jsonplaceholder.typicode.com/posts",
			{
				title: $scope.newPost.title,
				body: $scope.newPost.body,
				userId: 1
			})
			.then(
				function (data,status,headers,config) {//success
					console.log(data.data);
					$scope.posts.push(data.data);
					$scope.newPost = {};
				
				},
				function (error,status,headers,config) {//error
					console.log(error);
				}

			);
		}

	}); 