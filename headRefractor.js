const lodash = require('lodash')
const assertEqual = require('./assertEqual');



const head=function FirstElementfromArray(elementarray){

    if(elementarray.length > 0){ 
    
       return lodash.head(elementarray)
    }
}

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

