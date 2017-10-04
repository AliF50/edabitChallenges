//Write a function that takes a string of one or more words as an argument and returns the same string,
//but with all five or more letter words reversed.
//Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
function reverse(str) {
  if(str.length < 5){
    return str;
  }
  else if(str.indexOf(' ') < 0 && str.length >= 5){
    str = str.split('').reverse().join('');
    return str;
  }else{
    str = str.split(' ');
    for(var i = 0; i < str.length; i++){
      if(str[i].length >= 5){
        str[i] = str[i].split('').reverse().join('');
      }
    }
    return str.join(' ');
  }
}
