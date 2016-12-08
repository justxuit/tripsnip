(function(){


var app = angular.module('tripSnipModule'); //attaches the module created in app.js to this file.

app.controller("snipGetterCtrl", function($scope, snippetStorage){
	//sets new variable to equal data retrieved from factory
	var countryArray = snippetStorage.getSnip();

	//sets countryObj variable to scope so it can appear on html
	$scope.countryArray = countryArray;
		console.log(countryArray);

	//get total number of countries visited
	var totalCountriesVisited = countryArray.length;
	$scope.totalCountriesVisited = totalCountriesVisited;
		console.log(totalCountriesVisited);
});


})();
