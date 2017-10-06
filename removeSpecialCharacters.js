//Create a function that takes a string, removes all "special" characters (e.g. !@#$%^&\*)
//and returns the new string. The only non-alphanumeric characters allowed are dashes (-) and underscores (_).
function removeSpecialCharacters(str) {
  var resultingString = '';
  for(var i = 0; i < str.length; i++){
    if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90 ||
       str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122 ||
       str[i].charCodeAt(0) >= 48 && str[i].charCodeAt(0) <= 57  ||
       (str[i] === '-' || str[i] === '_' || str[i] === ' ')){
      resultingString += str[i];
    }
  }
  return resultingString;
}
