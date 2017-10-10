// Create a function that takes both a string and an array of numbers as arguments.
//Rearrange the letters in the string to be in the order specified by the index numbers.
// Return the "remixed" string.
// Examples

// remix("abcd", [0, 3, 1, 2]) ➞ "acdb"
// The string you'll be returning will have: "a" at index 0, "b" at index 3, "c" at index 1, "d" at index 2,
//because the order of those characters maps to their corresponding numbers in the index array.
function remix(str, arr) {
  var resultingString = [];
  for(var i = 0; i < str.length; i++){
    resultingString[arr[i]] = str[i];
  }
  return resultingString.join('');
}
