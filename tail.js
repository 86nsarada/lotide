const lodash= require('lodash')

const assertEqual = function(actual, expected) {

    if(actual === expected){
        console.log("Assertion Passed : " + actual + " === "+expected)
    }
    else{
        console.log("Assertion Failed : " + actual + " !== "+expected)
    }

};

const tail=function LastElementfromArray(elementarray){

    if(elementarray.length > 0){ 
       return lodash.tail(elementarray);
    }

}

//const words = ["Yo Yo", "Lighthouse", "Labs"];
//tail(words); // no need to capture the return value since we are not checking it
//assertEqual(words.length, 3); // original array should still have 3 elements!

assertEqual(tail([5,6,7]).length,2);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 3);