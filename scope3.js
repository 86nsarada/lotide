const person = "Martha";

// BAD
const sayHelloBadly = function() {
  console.log(`Howdy, ${person}`);
}
sayHelloBadly(); // Works, but not ideal!

// GOOD
const sayHelloGoodly = function(name) {
  console.log(`Howdy, ${name}`);
}
sayHelloGoodly(person);

//Functions that take in parameters are more reusable, since they are less dependent on their surroundings, (i.e. their outer scope).

//From the example above, we can extract the sayHelloGoodly function and plop drop it into another piece of code. We can't do that with sayHelloBadly because the person variable would have to come along for the ride.


