angular.module('myApp', [
	'ngRoute',
	'myApp.user'
]).
config(['$routeProvider', function($routeProvider){
	$routeProvider.otherwise({
		redirectTo: '/user'
	});
}]);