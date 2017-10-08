//Given a string of varying length, write a function that accepts this string and returns a new string
//that swaps the first and last characters except under two conditions:
// If the length of the string is less than 2 OR the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".
function flipEndChars(str) {
  // Delete this comment, and write your code here. Good luck!
  if(str.length < 2 || typeof(str) !== 'string'){
    return 'Incompatible.';
  }else if(str[0] === str[str.length - 1]){
    return "Two's a pair.";
  }else{
    str = str.split('');
    var temp;
    temp = str[str.length - 1];
    str[str.length - 1] = str[0];
    str[0] = temp;
    return str.join('');
  }
}
