const eqObjects = function(object1, object2) {
    let value1 = Object.keys(object1)
    console.log(value1)
    let value2 = Object.keys(object2)
    console.log(value2)
    //comparing length
    if(value1.length !== value2.length ){
    return false;
    }else 
    for(let element of value1){
        if(object1[element] !== object2[element]){
            return false
        }
    }
    return true;
};

  
  const assertObjectsEqual = function(actual,expected){
   const inspect = require(`util`).inspect;
   if (actual !== expected) {

    console.log(`Assertion Failed:  ${inspect(ab)} !== ${inspect(ba)}`);   
   } else {
    console.log(`Assertion Passed:  ${inspect(ab)} === ${inspect(ba)}`); 
}
  }
  module.exports = assertObjectsEqual;
   const ab = { a: "4", b: "2"};
  const ba = { b: "2", a: "1"};
console.log(assertObjectsEqual(ab,ba),false);