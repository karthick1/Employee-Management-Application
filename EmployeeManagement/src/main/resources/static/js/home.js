//Define an angular module for our app
var employeeApp = angular.module('employeeApp', [ 'ngRoute', 'ngTable' ]);

// Define Routing for app
// Uri /AddNewOrder -> template AddOrder.html and Controller AddOrderController
// Uri /ShowOrders -> template ShowOrders.html and Controller AddOrderController
employeeApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl : 'add-employee.html',
		controller : 'add-employee'
	}).when('/employee-details', { 
		templateUrl : 'employee-details.html',
		controller : 'employee-details'
	}).otherwise({
		redirectTo : '/'
	});
});
