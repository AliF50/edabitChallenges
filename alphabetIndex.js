//Create a function that takes a string and replaces each letter with its appropriate position in the alphabet.
/*Rules

Replace all letters with position in alphabet.
If anything in the string isn't a letter, ignore it.
a is 1, b is 2, c is 3, etc, etc.*/
function alphabetIndex(str) {
  str = str.toUpperCase();
  var resultingString = '';
  for(var i = 0; i < str.length; i++){
    if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90){
      resultingString += str[i].charCodeAt(0) - 64;
      if(i !== str.length){
        resultingString += ' ';
      }
    }
  }

  return resultingString.trim();
}
