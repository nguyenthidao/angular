'use strict';

angular.module('myApp.user', ['ngRoute', 'firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/user', {
    templateUrl: 'user/user.html',
    controller: 'UserCtrl'
  });
}])

.controller('UserCtrl', [function($scope, $firebaseSimpleLogin) {
	var firebaseObj = new Firebase("https://instagram-ebd81.firebaseio.com");
	var loginObj = $firebaseSimpleLogin(firebaseObj);

	$scope.user = {};
	$scope.SingIn = function(event){
		event.preventDefault();
		var username = $scope.user.email;
		var password = $scope.user.password;
		
		loginObj.$login('password', {
			email: username,
			password: password
		})
		.then(function(user){
			console.log('Authentication successful');
		}, function(error){
			console.log('Authentication failure');
		});
		
	}
}]);