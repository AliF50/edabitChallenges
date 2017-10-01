//Congratulations, you're the new CTO of Twitter. You've received direct orders from Jack Dorsey to silence Donald Trump,
//but not by deleting his account. How is that possible? By removing every vowel from his tweets, essentially neutering him.
function silenceTrump(str) {
  str = str.split('');
  for(var i = 0; i < str.length; i++){
    if(isVowel(str[i])){
      str.splice(i, 1);
      i--;
    }
  }
  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1
  }
  str = str.join('');
  return str;
}
