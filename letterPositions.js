const assertArraysEqual = function(arr1,arr2){
    const result = eqArrays(arr1,arr2)
      if (!result){
          console.log("Uh Oh! These arrays are NOT equal")
      }
      else {
          console.log("Congratulations! These arrays ARE equal")
      }
  }
  const eqArrays = function(arr1,arr2) {
      if (arr1.length !== arr2.length) {
          return false;
        }
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }
        return true;
    };
  

  
/*function letterPositions (phrase) {
    const results = {}; 
    const letters = phrase.split('');
    for (let index = 0; index < letters.length; index++) {
        const character = letters[index];
        if (!results[character]) {
            results[character] = [index];
        } else {
            results[character].push[index];
        }
    }
    return results;   
}*/
const letterPositions = function(sentence) {
    const results = {};
    for (let i = 0; i < sentence.length; i++) {
      if (sentence[i] !== " ") {
        results[sentence[i]] ? results[sentence[i]].push(i) : results[sentence[i]] = [i];
      }
    }
    return results;
  };
  
module.exports = letterPositions;
console.log(letterPositions("hello"))
assertArraysEqual(letterPositions("hello").e, [1]);
//console.log(assertArraysEqual(letterPositions("lighthouse in the house").i,[1,11]));  