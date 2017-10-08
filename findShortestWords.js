// Create a function that accepts a string as an argument.
// Find its shortest word(s) and return them as an array sorted alphabetically (if there are multiple shortest words).
// Rules

// Periods, commas and other special characters don't count as part of a word's length.
// Return words in lowercase only.
// Sort words alphabetically.

function findShortestWords(str) {
  str = str.replace(/[^a-z\d\s]+/gi, '')
  str = str.replace(/[0-9]/g, '');
  str = str.split(' ');
  var min = Infinity;
  var arrHoldingWords = [];
  for(var i = 0; i < str.length; i++) //remove ''
    if(str[i] === ''){
      str.splice(i, 1);
      i--;
    }
  }
  for(var i = 0; i < str.length; i++) //find the lowest length string count
    if(str[i].length <= min){
      min = str[i].length;
    }
  }
  for(var i = 0; i < str.length; i++){ //load the lowest counts into array
    if(str[i].length === min){
      arrHoldingWords.push(str[i].toLowerCase());
    }
  }
  return arrHoldingWords.sort();
}
