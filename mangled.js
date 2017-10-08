//Create a function that takes a string and replaces every letter
//with the letter following it in the alphabet ("c" becomes "d", "z" becomes "a", "b" becomes "c", etc).
//Then capitalize every vowel (a, e, i, o, u) and return the new modified string.
/*Rules

Replace every letter with the letter following it in the alphabet.
Capitalize every vowel.
"y" is not considered a vowel.*/
function mangled(str) {
  str = str.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u']
  for(var i = 0; i < str.length; i++){
    if(str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90 ||
       str[i].charCodeAt(0) >= 97 && str[i].charCodeAt(0) <= 122)
      if(str[i] === 'z'){
        str[i] = 'a';
      }else if(str[i] === 'Z'){
        str[i] = 'z';
      }else{
        str[i] = String.fromCharCode(str[i].charCodeAt(0) + 1);
        if(vowels.indexOf(str[i]) > -1){
          str[i] = str[i].toUpperCase();
        }
      }
  }
  return str.join('');
}
