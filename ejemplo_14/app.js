angular.module('CustomDirective', [])
	.directive("mioAutocomplete",function () {
		function link (scope,element,attrs) {
			$(element).autocomplete({
				source: scope.$eval(attrs.mioAutocomplete),
				select: function (ev,ui) {
					ev.preventDefault();
					if (ui.item) {
						scope.optionSelected (ui.item.value);
					}
				},
				focus: function (ev,ui) {
					ev.preventDefault();
					$(this).val(ui.item.label);
				}
			});
		};
		return {
			link: link
		};
	})
	.directive("backImg",function () { // creación directiva
		return function (scope,element,attrs) {
			attrs.$observe("backImg", function (value) {
				element.css({
					"background": "url("+value+")",
					"background-size": "cover",
					"background-position": "center"
				});
			});
		}
	})

	/*background: url({{repo.owner.avatar_url}}); 
	  background-position: center;
	  background-size: cover;*/


	.controller('AppCtrl',  function($scope,$http){

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
	});