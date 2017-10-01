// Create a function that takes a string and returns the number (count) of vowels contained within it.
function countVowels(str) {
  var count = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === 'A' || str[i] === 'a' || str[i] === 'E' || str[i] === 'e' ||
      str[i] === 'I' || str[i] === 'i' || str[i] === 'O' || str[i] === 'o' ||
      str[i] === 'U' || str[i] === 'u')
        count++;
  }
       return count;
}
