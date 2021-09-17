const assertEqual = function(actual, expected) {

    if(actual === expected){
        console.log("Assertion Passed : " + actual + " === "+expected)
    }
    else{
        console.log("Assertion Failed : " + actual + " !== "+expected)
    }

};
const findKeyByValue = function(object, value) {
    const keysArray = Object.keys(object);
    for (let element of keysArray) {
      if (object[element] === value) 
      return element;
    }
  };
module.exports = findKeyByValue
const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);