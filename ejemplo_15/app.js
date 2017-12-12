angular.module('CustomDirective', ["ngRoute"])
.config(function($routeProvider) {
	$routeProvider
		.when("/",{
			controller: "ReposController",
			templateUrl : "templates/home.html"
		})
		.when("/repo/:name",{
			controller: "RepositorioController",
			templateUrl : "templates/repo.html"
		});
});