(function (){
var app = angular.module('tripSnipModule');

app.controller("snipCreatorCtrl", function ($scope, $http, snippetStorage){
	//retrieve user-entered data
	$scope.retrieveCountryData = function(){
		console.log($scope.countrySearch);
		console.log($scope.note);

	//retrieve API data for user-entered country
	$http.get("https://restcountries.eu/rest/v1/name/" + $scope.countrySearch + "?fullText=true")
			.then(function(response) {
				$scope.countryData = response.data;
				//console.log($scope.countryData[0].nativeName);
				//set the fullData object
				var fullData = {
					name: $scope.countryData[0].name,
					nativeName: $scope.countryData[0].nativeName,
					capital: $scope.countryData[0].capital,
					population: $scope.countryData[0].population,
					note: $scope.note
				};
				console.log(fullData);
				//send all data to the service factory
				snippetStorage.setSnip(fullData);

				
			//if error in country search box 
			}, function errorCallback(response){
				alert("Please check the country spelling");
			});	
	
	
	


};
	


});

})();


