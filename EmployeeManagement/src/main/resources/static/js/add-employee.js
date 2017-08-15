// Controller for New Employee 
// This controller used to add new employee

employeeApp.controller('add-employee', function($scope, $http,
		newEmployeeFactory) {

	// Call Add Employee Submit button
	addNewEmployeeDetails($scope, $http, newEmployeeFactory);

});

// Function to Add New Employee details

function addNewEmployeeDetails($scope, $http, newEmployeeFactory) {
	$scope.submitForm = function() {
		// check to make sure the form is completely valid
		if ($scope.userForm.$valid) {
			var data = $scope.employee;
			newEmployeeFactory.addEmployee(getEmployeeData($scope), function(
					response) {
				response.then(function(result) {
					alert($scope.user.name + " details added successfully");
					$scope.user = "";
				}, function error(result) {
					// If any error while saving
				});
			});

		}
	};
}

// Function to get Employee data from the Form
function getEmployeeData($scope) {
	var data = {
		empName : $scope.user.name,
		emailId : $scope.user.email,
		mobileNo : $scope.user.mobileNo,
		address : $scope.user.address
	}
	return data;
}