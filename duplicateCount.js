// Create a function that takes a string and returns the number of alphanumeric characters that occur more than once.
// Examples

// "abcde" ➞ 0

// "aabbcde" ➞ 2

// "Indivisibilities" ➞ 2
function duplicateCount(str) {
  var strDict = {};
  var count = 0;
  for(var i = 0; i < str.length; i++){
    if(strDict[str[i]]){
      strDict[str[i]]++;
    }else{
      strDict[str[i]] = 1;
    }
  }
  for(var key in strDict){
    if(strDict[key] >= 2){
      count++;
    }
  }
  return count;
}
