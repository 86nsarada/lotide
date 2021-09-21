const lodash = require('lodash')
const assertEqual = require('./test/assertEqualTest');
const eqArrays = require('./eqArrays');




  const assertArraysEqual = function(arr1,arr2){
   const result = eqArrays(arr1,arr2)
      if (!result){
          console.log(`❌ ❌ ❌: Uh Oh! These arrays are NOT equal`)
      }
      else {
          console.log(`✅ ✅ ✅ : Congratulations! These arrays ARE equal`)
      }
  }

  assertEqual(assertArraysEqual([1,2,3],[4,2,3]))
  assertEqual(assertArraysEqual([1,2,3],[1,2,3]))


  module.exports = assertArraysEqual;