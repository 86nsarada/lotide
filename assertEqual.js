const sum = function(a,b){

    return a+b;
}

const assertEqual = function(actual, expected) {

    if(actual === expected){
        console.log("✅✅✅ Assertion Passed : " + actual + " === "+expected)
    }
    else{
        console.log("🛑🛑🛑Assertion Failed : " + actual + " !== "+expected)
    }

};
const name='sarada'
console.log(`hello,${name}!`);

const name1 = 'ranjit'
console.log('hello,' + name1+'!');

console.assert(sum(1,3) === 4)

console.assert(sum(1,3) === 5)

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

assertEqual(1, 2);

module.exports = assertEqual;

// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//       console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//     }
//   };
//   module.exports = assertEqual;