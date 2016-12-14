(function(){

var app = angular.module('tripSnipModule');

//snipcreator
app.directive('snipCreator', function(){
  return {
    restrict: "E",
    templateUrl: "./partials/snip-template.html"
  };
});

//autocomplete - combining jquery and angular
//iElement.autocomplete - iElement references element where directive is to be used, runs the the .autocomplete method from jquery-ui
//Source is where to get autocomplete data.  It looks for the ui-items attribute.
//Select - Triggered when an item is selected from the menu. The default action is to replace the text field's value with the value of the selected item.
//Select runs immediately, triggered upon user input with a delay of 0 milliseconds.  Otherwise, angular does not recognize that the value of the input box has changed.
app.directive('autoComplete', function($timeout) {
    return function(scope, iElement, iAttrs) {
            iElement.autocomplete({
                source: scope[iAttrs.uiItems],
                select: function() {
                    $timeout(function() {
                      iElement.trigger('input');
                    }, 0);
				}
			});
	};
});

})();
