// Create a function that accepts a string of space separated numbers and returns the highest and lowest number (as a string).
// Examples

// "1 2 3 4 5" ➞ "5 1"

// "1 2 -3 4 5" ➞ "5 -3"

// "1 9 3 4 -5" ➞ "9 -5"

// "13" ➞ "13 13"
function highLow(str) {
  str = str.split(' ');
  str = str.sort((a, b) => a - b);
  var min = Math.min(...str);
  var max = Math.max(...str);

  return max + ' ' + min;
}
