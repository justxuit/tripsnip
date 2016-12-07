(function(){ //IIFE


var app = angular.module('tripSnipModule');

app.factory("snippetStorage", function(){
  var snippetContent = {};

  return {
    setSnip: function (userInput){
      console.log(userInput);
      storedObj = userInput;
    },

    getSnip: function (){
      console.log(storedObj);
      return storedObj;
    };
  }

  var snippetArray = [
    {
      name: "Aruba",
      nativeName: "Aruba",
      capital: "Oranjestad",
      population: 107394,
      userText: "Aruba is cool. It's very warm here."
    },
    {
      name: "Belarus",
      nativeName: "Белару́сь",
      capital: "Minsk",
      population: 9485300,
      userText: "Much colder than Aruba. You'll probably need a jacket."
    },
    {
      "name": "Cambodia",
      "nativeName": "Kâmpŭchéa",
      "capital": "Phnom Penh",
      "population": 15405157,
      "userText": "No McDonald's here! What's the deal?!? :("
    }
  ];

});


})(); //END IIFE
