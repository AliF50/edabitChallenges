// Create a function that accepts an array of two strings and checks if the
//letters in the second string are present in the first string.
// Examples

// ["trances", "nectar"] ➞ true

// ["compadres", "DRAPES"] ➞ true

// ["parses", "parsecs"] ➞ false
function letterCheck(arr) {
  var string1 = arr[0].toLowerCase();
  var string2 = arr[1].toLowerCase();

  for(var i = 0; i < string2.length; i++){
    if(string1.indexOf(string2[i]) >= 0){
      continue;
    }else{
      return false;
    }
  }
  return true;
}
