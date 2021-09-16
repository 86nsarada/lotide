const assertEqual = function(actual, expected) {

    if(actual === expected){
        console.log("Assertion Passed : " + actual + " === "+expected)
    }
    else{
        console.log("Assertion Failed : " + actual + " !== "+expected)
    }

}

const countLetters=function(letters){
    const item={}
const word=letters.split('')
    for(const value of word){
        const charater= word[value]
        if(character !== ''){
            item[character] += 1;

        }else 
        item[character] =1;
    }
    return item[character];
}

console.log(countLetters('sarada'));

