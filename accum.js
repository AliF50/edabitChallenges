//Create a function that takes a string and returns a new string with each character accumulating by +1, separated by a dash.
// Rules

// Increment each letter by +1.
// Capitalize the first character of each set.
function accum(str) {
  var resultingString = '';
  function individualCharacter(i, character){
    resultingString += character.toUpperCase();
    for(var j = 0; j < i; j++){
      resultingString += character.toLowerCase();
    }
    if(i !== str.length - 1){
      resultingString += '-';
    }
  }
  for(var i = 0; i < str.length; i++){
    individualCharacter(i, str[i]);
  }
  return resultingString;
}
