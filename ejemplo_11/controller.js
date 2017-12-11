angular.module('ListaNotas', ["LocalStorageModule"])
	.service('ServicioLista', function(localStorageService){
		
		this.key = "listas";
		
		if(localStorageService.get(this.key)){
			this.actividades = localStorageService.get(this.key);
		}
		else{
			this.actividades = [];
		}

		this.agregar = function (nuevaActividad) {
			this.actividades.push(nuevaActividad);
			this.actualizarLocalStorage();

		};

		this.actualizarLocalStorage = function () {
			 localStorageService.set(this.key,this.actividades);
		};

		this.limpiar =function () {
			this.actividades = []; 
			this.actualizarLocalStorage();
			return this.getTodo();
		};

		this.getTodo = function () {
			return this.actividades;
		};

		this.eliminarActividad = function (item) {
			this.actividades = this.actividades.filter(function (actividad) {
				return actividad !== item;
			});
		/*
		[{},{},...]  -> this.actividades
		Filter valida true o false 
			 si la validación da false elimina el item del arreglo
			 si la validación da true conserva el item del arreglo
		*/

		this.actualizarLocalStorage();

		return this.getTodo();
		};

		
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