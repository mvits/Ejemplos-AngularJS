angular.module('LaMiaPrimaApp', [])
	.controller('PrimaController', function($scope){	
		$scope.nombre = "Stiv";
		$scope.nuevoEstado = {};
		$scope.estados =[
			{
				estado: "Nuevo",
				usuario: "vits"
			},
			{
				estado: "En Proceso",
				usuario: "zeuq"
			},
			{
				estado: "Resuelto",
				usuario: "sabish"
			}

		];
		$scope.agregarEstado = function() {
			$scope.estados.push($scope.nuevoEstado);
			$scope.nuevoEstado = {};
		}
	}); 