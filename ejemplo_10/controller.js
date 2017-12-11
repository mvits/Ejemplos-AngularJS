angular.module('ListaNotas', ["LocalStorageModule"])
	.factory('ServicioLista', function(localStorageService){
		var servicioLista = {} ;

		servicioLista.key = "listas";
		
		if(localStorageService.get(servicioLista.key)){
			servicioLista.actividades = localStorageService.get(servicioLista.key);
		}
		else{
			servicioLista.actividades = [];
		}

		servicioLista.agregar = function (nuevaActividad) {
			servicioLista.actividades.push(nuevaActividad);
			servicioLista.actualizarLocalStorage();

		};

		servicioLista.actualizarLocalStorage = function () {
			 localStorageService.set(servicioLista.key,servicioLista.actividades);
		};

		servicioLista.limpiar =function () {
			servicioLista.actividades = []; 
			servicioLista.actualizarLocalStorage();
			return servicioLista.getTodo();
		};

		servicioLista.getTodo = function () {
			return servicioLista.actividades;
		};

		servicioLista.eliminarActividad = function (item) {
			servicioLista.actividades = servicioLista.actividades.filter(function (actividad) {
				return actividad !== item;
			});
		/*
		[{},{},...]  -> servicioLista.actividades
		Filter valida true o false 
			 si la validación da false elimina el item del arreglo
			 si la validación da true conserva el item del arreglo
		*/

		servicioLista.actualizarLocalStorage();

		return servicioLista.getTodo();
		};

		return servicioLista;
	})
	.controller('ControllerLista', function($scope,ServicioLista){	
		

		$scope.todo = ServicioLista.getTodo();
		$scope.newActv = {};
	
		$scope.agregarNota = function() {
			ServicioLista.agregar($scope.newActv);
			$scope.newActv = {};
		}

		$scope.eliminarNota = function(item){
			$scope.todo = ServicioLista.eliminarActividad(item);
		}

		$scope.limpiarNota = function(item){
			$scope.todo = ServicioLista.limpiar();
		}


	}); 