/**
 * This is a factory used to call rest API
 */
var employeeApp = angular.module('employeeApp');
// factory for Add New Employee
employeeApp.factory('newEmployeeFactory', function($window, $http, $q,
		$location) {
	// var url = automobileUserLoginUrl;
	// var url = 'http://localhost:8080/employee/save';
	var url = '/employee/save';
	return {
		addEmployee : function(data, callback) {
			console.log('factory value is : ' + JSON.stringify(data));
			var header = {};
			callback(callRest($window, $http, url, postMethod, header, JSON
					.stringify(data)));
		}
	};
});