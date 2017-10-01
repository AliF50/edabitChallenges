// /Create a function that takes a string and returns a string in which each character is repeated once.
function doubleChar(str) {
  str = str.split('');
  for(var i = 0; i < str.length; i++){
    str.splice(i, 0, str[i]);
    i++;
  }
  return str.join('');
}
