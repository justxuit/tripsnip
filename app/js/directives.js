var app = angular.module('tripSnipModule');

app.directive('snipCreator', function(){
  return {
    restrict: "E",
    templateUrl: "../partials/snip-template.html"
  };
});
