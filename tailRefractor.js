const lodash= require('lodash')
const assertEqual = require('./test/assertEqualTest');



const tail=function LastElementfromArray(elementarray){

    if(elementarray.length > 0){ 
       return lodash.tail(elementarray);
    }

}

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!

// assertEqual(tail([5,6,7]).length,2);
 assertEqual(tail([5,6,7])[0],6);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 3);
// assertEqual(tail(["Hello", "Lighthouse", "Labs"])[1], "Labs");
