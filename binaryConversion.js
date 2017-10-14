// Create a function that takes a string of 1's and 0's (binary) as an argument
//and return the equivalent decoded ASCII text. Characters can be in the range of "00000000" to "11111111",
//which means every eight digits of binary input represents a single character.
// a = 01100001
// b = 01100010
// c = 01100011
// If you were to combine these characters into the string "abc", the corresponding binary would be
//011000010110001001100011. Use the resources tab for more info on how to approach this.
function binaryConversion(str) {
  var ret = [];
  var finalStr = '';
  chunk(str, 8);
  function chunk(str, n) {
    for(var i = 0, len = str.length; i < len; i += n) {
       ret.push(str.substr(i, n));
    }
  };
   for (var i = 0; i < ret.length; i++) {
        finalStr += String.fromCharCode((parseInt(ret[i], 2)));
    }
  return finalStr;
}
