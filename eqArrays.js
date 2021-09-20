const assertEqual = require('./assertEqual');



const stdev = function(arr) {
  /* IMPLEMENT ME */
  //stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
  let sum = 0 
  let arraySum = (arr.forEach(element => {
    sum = sum + element
  })) 

  let averageofArr = (sum/arr.length)
    let stdDevArr=[];

  arr.forEach(element => {
    let value = (element - averageofArr)
    let squereOfvalue = (value * value);

    stdDevArr.push(squereOfvalue)
  })

  let stdSum = 0
  let varaince = (stdDevArr.forEach(element => {
    stdSum = stdSum + element
  }))

  let orgvarince = (stdSum / stdDevArr.length)

    return Math.sqrt(orgvarince)
  };

const count = function(arr) {
  console.log(arr)
  if(arr){
    return arr.length;
  }
  else{
    return 0;
  }
};
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

module.exports = eqArrays;
//eqArrays([1, 2, 3], [1, 2, 3]) // => true
//eqArrays([1, 2, 3], [3, 2, 1]) // => false

//eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
//eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

console.log(count([1,2,3,4,5]));

console.log(stdev([-2,6,8,2,9]))