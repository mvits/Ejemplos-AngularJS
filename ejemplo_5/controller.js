angular.module('ListaNotas', ["LocalStorageModule"])
	.controller('ControllerLista', function($scope,localStorageService){	
		
		if(localStorageService.get("listas")){
			$scope.todo = localStorageService.get("listas");
		}
		else{
			$scope.todo = [];
		}


		$scope.$watchCollection("todo",function(nuevoValor,antiguoValor) {
			localStorageService.set("listas",$scope.todo);
		});
		

		$scope.agregarNota = function() {
			$scope.todo.push($scope.newActv);
			$scope.newActv = {};
		}

		$scope.limpiar=function() {
			$scope.todo = [];
		}
	}); 