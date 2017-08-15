// This is common js for common functions

var getMethod = 'GET';
var get = 'GET';
var postMethod = 'POST';
var deleteMethod = 'DELETE';
var contentType = 'application/json';

// Function to call Rest API that returns a promise
function callRest($window, $http, url, method, headers, data) {
	// url = getUrl(url);
	headers = angular.extend(headers, {
		'Content-Type' : 'application/json'
	});
	// alert(headers);
	return $http({
		method : method,
		url : url,
		headers : headers,
		data : data
	});

}
