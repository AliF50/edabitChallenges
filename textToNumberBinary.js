// Create a function that takes a string as an argument.
// The function must return a string containing 1s and 0s
//based on the string argument's words. If any word of the argument is equal to 'zero' or 'one'
//(case insensitive) you should consider it.
// The returned string's length should be a multiple of 8, if the string is not a multiple of
//8 you should remove the numbers in excess
// Examples

// "zero one zero one zero one zero one" ➞ "01010101"

// "Zero one zero ONE zero one zero one" ➞ "01010101"

// "zero one zero one zero one zero one one two"  ➞ "01010101"

// "one Zero zero one zero zero one one one one one zero oNe one one zero one zerO" ➞ "1001001111101110"

// "zero one zero one zero one zero three" ➞ ""

// "one one" ➞ ""
function textToNumberBinary(str) {
  var toReturn = '';
  str = str.split(' ');
  if(str.length < 8){
    return '';
  }else{
    for(var i = 0; i < str.length; i++){
      if(str[i].toLowerCase() === 'zero'){
        toReturn += '0';
      }else if(str[i].toLowerCase() === 'one'){
        toReturn += '1';
      }
    }
  }
  if(toReturn.length % 8 !== 0){
    var howManyToCut = toReturn.length % 8;
    toReturn = toReturn.substring(0, toReturn.length - howManyToCut);
  }
  return toReturn;
}
