var app = angular.module('tripSnipModule');

app.controller("snipCreatorCtrl", function ($scope){
  $scope.snippetData = [
    {
      country: "Spain",
      nativeName: "Espana",
      population: 2
    }
  ];
});


