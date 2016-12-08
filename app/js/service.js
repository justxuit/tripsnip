(function(){ //IIFE

var app = angular.module('tripSnipModule');

app.factory("snippetStorage", function(){ //creates factory
  var storedObj = {};

  var snippetArray = [
    {
      name: "Aruba",
      nativeName: "Aruba",
      capital: "Oranjestad",
      population: 107394,
      note: "Aruba is cool. It's very warm here."
    },
    {
      name: "Belarus",
      nativeName: "Белару́сь",
      capital: "Minsk",
      population: 9485300,
      note: "Much colder than Aruba. You'll probably need a jacket."
    },
    {
      name: "Cambodia",
      nativeName: "Kâmpŭchéa",
      capital: "Phnom Penh",
      population: 15405157,
      note: "No McDonald's here! What's the deal?!? :("
    }
  ];

//puts the user's entry and API data into factory
  function setSnip(fullData){
    storedObj = fullData;
    snippetArray.push(storedObj);
    console.log(snippetArray);
  };

//retrieves the entire array of snips from factory
  function getSnip(){
    return snippetArray;
  };

  return {
    setSnip: setSnip,
    getSnip: getSnip
  }
});

})(); //END IIFE
