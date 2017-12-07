angular.module("mainModule",[])
	.filter("removeHtml",function () { // Filtro personalizado
		return function (texto) {
			return String(texto).replace(/<[^>]+>/gm,'');
		}
	})
	.controller('FiltersController', function($scope){
		$scope.mi_html= "<p>Il mio gioco</p>";

		$scope.mi_texto={};
		$scope.mi_texto.title = "Titolo";
		$scope.mi_texto.body = "Il mio paragrafo";

		$scope.costo=2;



		
	});