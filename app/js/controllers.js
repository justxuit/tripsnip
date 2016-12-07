(function (){
var app = angular.module('tripSnipModule');

app.controller("snipCreatorCtrl", function ($scope, $http){
	//retrieve user-entered data
	$scope.retrieveCountryData = function(){
		console.log($scope.countrySearch);
		console.log($scope.note);

	//retrieve API data for user-entered country
	$http.get("https://restcountries.eu/rest/v1/name/" + $scope.countrySearch + "?fullText=true").
			then(function(response) {
				$scope.countryData = response.data;
				console.log($scope.countryData[0].nativeName);
			}, function errorCallback(response){
				alert("Please check the country spelling");
			});	

	};



});

})();


