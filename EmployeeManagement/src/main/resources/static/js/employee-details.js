/**
 * This is Employee Details controller for used to process CURD operations
 * 
 */
employeeApp.controller('employee-details', [ '$scope', '$http', 'NgTableParams',
		function($scope, $http, NgTableParams) {
			// Call employee list function
			clickEmployeeListBtn($scope, $http, NgTableParams);
			// Call employee Add function
			clickAddEmpBtn($scope, $http, NgTableParams);
			// Call Update function
			clickUpdateEmployeeBtn($scope, $http, NgTableParams);
			// Call delete function
			clickDeleteEmployeeBtn($scope, $http, NgTableParams);
			// Call rest form function
			resetEmployeeData($scope, $http, NgTableParams);
			// Selected row data
			$scope.setSelectedEmpData = function(obj) {
				$scope.employee = obj;
			}
			} ]);

/**
 * Function for Employee List button click
 * @param $scope
 * @param $http
 * @param NgTableParams
 * @returns
 */
function clickEmployeeListBtn($scope, $http, NgTableParams){
	$scope.getEmployees = function() {
		getEmployesList($scope, $http, NgTableParams)
	}
	
}


/**
 * Function for Employee Add button click
 * @param $scope
 * @param $http
 * @param NgTableParams
 * @returns
 */
function clickAddEmpBtn($scope, $http, NgTableParams){
	$scope.submitEmployeeForm = function() {
		if ($scope.emplayeeForm.$valid) {
			saveOrUpdateEmployee($scope, $http, NgTableParams);
		}
	};
	
}


/**
 * Function for Employee Update button click
 * @param $scope
 * @param $http
 * @param NgTableParams
 * @returns
 */
function clickUpdateEmployeeBtn($scope, $http, NgTableParams){
	$scope.updateEmployee  = function() {
		if ($scope.emplayeeForm.$valid) {
			saveOrUpdateEmployee($scope, $http, NgTableParams);
		}
	};
	}

/**
 * Function for Employee Delete button click
 * @param $scope
 * @param $http
 * @param NgTableParams
 * @returns
 */
function clickDeleteEmployeeBtn($scope, $http, NgTableParams){
	$scope.deleteEmployee = function() {
		deleteEmployee($scope, $http, NgTableParams);
	};
	
	}

/**
 * Function for Employee Reset button click
 * @param $scope
 * @param $http
 * @param NgTableParams
 * @returns
 */
function resetEmployeeData($scope, $http, NgTableParams) {
	$scope.resetEmployeeForm = function() {
		$scope.employee = null;
	};
}


/**
 * Load employee data
 * @param NgTableParams
 * @param response
 * @returns
 */
function loadEmpTable($scope, NgTableParams, response) {
	$scope.employeeTable = new NgTableParams({
		page : 1,
		count : 10
	}, {
		data : response.data
	});
}
/**
 * Function to used to get employee list
 * @param $scope
 * @param $http
 * @param NgTableParams
 * @returns
 */
function getEmployesList($scope, $http, NgTableParams) {
	var url = 'http://localhost:8080/employee/list';

	var config = {
		headers : {
			'Content-Type' : 'application/json;charset=utf-8;',
		}
	}

	$http.get(url, config).then(function(response) {
		$scope.employess = response.data;
		loadEmpTable($scope, NgTableParams, response);
		// alert(response.data);
	}, function(response) {
		alert("Error!!..");

	});
}

/**
 * Function used to save or update the employee details
 * @param $scope
 * @param $http
 * @param NgTableParams
 * @returns
 */
function saveOrUpdateEmployee($scope, $http, NgTableParams) {
	var url = 'http://localhost:8080/employee/save';
	var config = {
		headers : {
			'Content-Type' : 'application/json;charset=utf-8;'
		}
	}
	var data = $scope.employee;

	$http.post(url, data, config).then(function(response) {
		getEmployesList($scope, $http, NgTableParams);
		$scope.employee = null;
	}, function(response) {

	});

}

/**
 * Function used to delete employee
 * @param $scope
 * @param $http
 * @param NgTableParams
 * @returns
 */
function deleteEmployee($scope, $http, NgTableParams) {
	var url = 'http://localhost:8080/employee/delete';
	var config = {
		headers : {
			'Content-Type' : 'application/json;charset=utf-8;',
			'employeeId' : $scope.employee.empId
		}
	}
	
	$http.delete(url, config).then(function(response) {
	    	   getEmployesList($scope, $http, NgTableParams);
	    	   $scope.employee = null;
	       }, function(response){
	         // failure call back
	       });
}