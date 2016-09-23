//<script src="https://cdnjs.cloudflare.com/ajax/libs/angular.js/1.5.7/angular.js"></script>

var UserService = angular.module('UserService', []);

UserService.factory('UserApi', function($http) {

	var urlBase = "http://localhost:8080/my-user-app/mvc/users";
	var UserApi = {};

	UserApi.getUsers = function() {
		return $http.get(urlBase + "/allusers");
	};
	
	UserApi.createUser = function(user){
		return $http.post(urlBase + '/insert', user);
	};
	
	UserApi.updateUser = function(userToUpdate){
		
		var request = $http({
			method: 'put',
			url:urlBase+'/update',
			data:userToUpdate
		});
		return requset;
	};
	
	UserApi.deleteUser = function(userToDelete){
		var request = $http({
			method: 'delete',
			url:urlBase+'/delete',
			data:userToDelete
		});
		return requset;
	};
	
	return UserApi;
});