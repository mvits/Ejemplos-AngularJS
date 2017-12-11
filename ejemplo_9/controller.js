angular.module('LaMiaPrimaApp', [])
	.run(function($rootScope){
		$rootScope.nombre = "Stiv Verdugo"; // Abuelo (Herencia)
											// Mala practica llenar el rootScope de variables
	})
	.controller('PrimaController', function($scope){	
		$scope.nombre = "Goduver Vits"; // Padre (Herencia)
		setTimeout(function() {
			$scope.$apply(function () {
				$scope.nombre= '0j0°°°!!!';
			})
		},2000);

	})
	.controller('FiglioController', function($scope){
		// Hijo (Herencia)

		
	}); 