const lodash= require('lodash')
const assertArrayEqual = require('./test/assertArrayEqualTest');

  const middle = function(array) {
let newArr = [];
  if (array.length <= 2 && array.length > 0){
    //   console.log("The array has only 1 or 2 elements") 
  } else if (array.length % 2 === 0){
      newArr =[array[(array.length/2)-1],array[array.length/2]]
    //   console.log("The array has an even number of elements"); 
  } else if (array.length % 2 !== 0){
      newArr = [array[Math.floor(array.length/2)]]
    //   console.log("The array has an odd number of elements")
  }
  return newArr;  
}
module.exports = middle;
assertArrayEqual(middle([1]),[]) // => []
assertArrayEqual(middle([1, 2]),[]) // => []
// assertEqual(middle([1, 2, 3, 4])) // => [2, 3]
// assertEqual(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
// assertEqual(middle([1, 2, 3])) // => [2]
// assertEqual(middle([1, 2, 3, 4, 5])) // => [3]