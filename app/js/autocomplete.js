(function (){
var app = angular.module('tripSnipModule'); 

app.controller("autoCompleteCtrl", function ($scope, $http){
	
		var allCountries = [];
		$scope.allcountries = allCountries;
		
		//retrieve API all countries
		$http.get("https://restcountries.eu/rest/v1/all")
			.then(function(response) {
				$scope.allCountryData = response.data;

					//this loops through all the countries and takes the name and puts it into the empty array(not user input)			
				for(var i = 0; i <$scope.allCountryData.length; i++) {
					var countryName = $scope.allCountryData[i].name;
					allCountries.push(countryName);	
				};
			});
		
	});

})();