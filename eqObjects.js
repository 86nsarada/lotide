const assertEqual = function(actual, expected) {

    if(actual === expected){
        console.log("Assertion Passed : " + actual + " === "+expected)
    }
    else{
        console.log("Assertion Failed : " + actual + " !== "+expected)
    }

};
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
module.exports = eqObjects
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
