var app = angular.module('tripSnipModule', []);

app.controller("snipCreatorCtrl", function ($scope){
  $scope.snippetData = [
    {
      country: "Spain",
      nativeName: "Espana",
      population: 2
    }
  ];
});


app.directive('snipCreator', function(){
  return {
    restrict: "E",
    templateUrl: "../partials/snip-template.html"
  };
});
