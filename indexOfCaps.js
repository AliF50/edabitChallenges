//Create a function that takes a single string as argument and returns an ordered list
//containing the indexes of all capital letters in the string.
function indexOfCaps(str) {
  var resultingArray = [];
  for(var i = 0; i < str.length; i++){
    if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90){
      resultingArray.push(i);
    }
  }
  return resultingArray;
}
