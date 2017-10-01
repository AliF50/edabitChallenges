//Create a function that takes
// a string as an argument and converts the first character of each
//word to uppercase. Return the newly formatted string.
function makeTitle(str) {
  str = str.split(' ');
  for(var i = 0; i < str.length; i++){
    str[i] = str[i].split('');
    str[i][0] = str[i][0].toUpperCase();
    str[i] = str[i].join('');
  }
  return str.join(' ');
}

makeTitle('i like pizza');
