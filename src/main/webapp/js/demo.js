var MyApp = angular.module("MyApp", [ 'ngRoute', 'UserService' ]);

MyApp.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when('/Create', {
		templateUrl : 'views/create.html',
		controller : 'CreateController'
	}).when('/Update', {

		templateUrl : 'views/update.html',
		controller : 'UpdateController'
	}).when('/Delete', {
		templateUrl : 'views/delete.html',
		controller : 'DeleteController'
	}).when('/Home', {
		templateUrl : 'views/home.html',
		controller : 'HomeController'
	}).otherwise({
		redirectTo : 'Home',
	});

} ]);

MyApp.controller("CreateController", function($scope, UserApi) {
	// $scope.message = "In create";

	$scope.AddUser = function() {

		var userAdd = {
			'name' : $scope.name,
			'gender' : $scope.gender,
			'age' : $scope.age,
			'skills' : $scope.skills,
			'address' : $scope.address,
			'role' : $scope.role
		};
		UserApi.createUser(userAdd).success(function(response) {
			alert("user added");
			$scope.name = undefined;
			$scope.gender = undefined;
			$scope.age = undefined;
			$scope.skills = undefined;
			$scope.address = undefined;
			$scope.role = undefined;
		}).error(function(error) {
			alert("Error creating a user");
		});
	}
});

MyApp.controller("DeleteController", function($scope) {

	$scope.selectedItem = "Select A User";
	$scope.isDeleteItemVisible = "false";
	getEmployees();
	function getEmployees() {
		UserApi.getUsers().success(function(users) {
			$scope.users = users;
		}).error(function(error) {
			$scope.status = 'Unable to load user data: ' + error.message;
		})
	};

	$scope.dropboxitemselected = function(item) {
		$scope.isDeleteItemVisible = "true";
		$scope.selectedItem = item.Id;
		$scope.name = item.Name;
		$scope.gender = item.Gender;
		$scope.age = item.Age;
		$scope.skills = item.Skills;
		$scope.address = item.Address;
		$scope.role = item.Role;
	};
	
	$scope.DeleteUser = function() {
		
	}
	
	
	
});

MyApp.controller("UpdateController", function($scope, UserApi) {

	$scope.selectedItem = "Select A User";
	$scope.isDeleteItemVisible = "false";
	getEmployees();
	function getEmployees() {
		UserApi.getUsers().success(function(users) {
			$scope.users = users;
		}).error(function(error) {
			$scope.status = 'Unable to load user data: ' + error.message;
		})
	};

	$scope.dropboxitemselected = function(item) {
		$scope.isDeleteItemVisible = "true";
		$scope.selectedItem = item.Id;
		$scope.name = item.Name;
		$scope.gender = item.Gender;
		$scope.age = item.Age;
		$scope.skills = item.Skills;
		$scope.address = item.Address;
		$scope.role = item.Role;
	};

	$scope.UpdateUser = function() {

		var userToUpdate = {
			'idusers' : $scope.id,
			'name' : $scope.name,
			'gender' : $scope.gender,
			'age' : $scope.age,
			'skills' : $scope.skills,
			'address' : $scope.address,
			'role' : $scope.role
		};

		UserApi.updateUser(userToUpdate)
			.success(function (response){
				alert("user updated");
				$scope.name = undefined;
				$scope.gender = undefined;
				$scope.age = undefined;
				$scope.skills = undefined;
				$scope.address = undefined;
				$scope.role = undefined;
				$scope.selectedItem = "Select User";
				$scope.isDeleteItemVisible = "false";
				getEmployees();
				
			}).
			error(function (response){
				alert("error in adding");
				
			});
	}

});

MyApp.controller("HomeController", function($scope, UserApi) {

	getEmployees();
	function getEmployees() {

		UserApi.getUsers().success(function(users) {
			$scope.users = users;
		}).error(function(error) {
			$scope.status = 'Unable to load user data: ' + error.message;
		})
	}
});
