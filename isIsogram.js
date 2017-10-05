//An isogram is a word that has no repeating letters, consecutive or nonconsecutive.
//Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".
function isIsogram(str) {
  var letterObj = {};
  for(var i = 0; i < str.length; i++){
    if(letterObj[str[i].toLowerCase()]){
      return false;
    }else{
      letterObj[str[i].toLowerCase()] = 1;
    }
  }
  return true;
}
