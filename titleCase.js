const titleCase  = function(text) {
    // Your code in here ...
    let sentence=text.toLowerCase().split(" ");
    //console.log(sentence)
    for(let i=0; i< sentence.length; i++){
        sentence[i]=sentence[i][0].toUpperCase()+sentence[i].slice(1)
        //console.log(sentence.join(''));

    }
    //sentence.join('');
    return sentence;
  };

  console.log(titleCase("i am good"))
  
  //module.exports = titleCase