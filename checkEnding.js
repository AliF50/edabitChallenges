//Create a function that takes a two strings and returns true if the first argument ends with the 2nd argument (also a string).
function checkEnding(str1, str2) {
  for(var i = 0; i < str2.length; i++){

    if(str1[str1.length - str2.length + i] === str2[i]){
      continue;
    }else{
      return false;
    }
  }
  return true;
}
