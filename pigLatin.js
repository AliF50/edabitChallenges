// Create a function that takes a string of words and moves the first letter of each
//word to the end of it, then adds 'ay' to the end of the word. This is called "Pig Latin"
//and it gets more complicated than the rules in this particular challenge. I've intentionally
//kept things simple, otherwise this would quickly turn into an extremely tedious challenge.
// Rules

// Move the first letter of each word to the end of the word.
// Add "ay" to the end of the word.
// Words starting with a vowel (A, E, I, O, U) simply have "WAY" appended to the end.
function pigLatin(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];
  str = str.split(' ');
  var toReturn = str.map((word, i) => {
    if(word[word.length - 1] === '.' && vowels.indexOf(word[0].toLowerCase()) >= 0){
      return word.substring(0, word.length - 1) + 'way' + '.';
    }else if(word[word.length - 1] === '.' && vowels.indexOf(word[0].toLowerCase()) < 0){
      return word.substring(1, word.length - 1) + word [0] + 'ay' + '.';
    }else if(vowels.indexOf(word[0].toLowerCase()) >= 0){
      return word + 'way';
    }else{
      if(i === 0){
        if((word[word.length - 1] !== '!' && word[word.length - 1] !== '.')){
          return word.substring(1, 2).toUpperCase() + word.substring(2, word.length) + word[0].toLowerCase() + 'ay';
        }else{
          return word.substring(1, 2).toUpperCase() + word.substring(2, word.length - 1) + word[0].toLowerCase() + 'ay' + word[word.length - 1];
        }
      }else{
         return word.substring(1, 2) + word.substring(2, word.length) + word[0].toLowerCase() + 'ay';
      }

    }
  });
  return toReturn.join(' ');
}
