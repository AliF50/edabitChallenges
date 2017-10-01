//Create a function that takes a string, checks if it has the same number of 'x's and 'o's and returns either true or false.

function XO(str) {
  str = str.split('');
  var countX = 0, countO = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === 'o' || str[i] === 'O'){
      countO++;
    }
    if(str[i] === 'x' || str[i] === 'X'){
      countX++;
    }
  }
  return countX === countO;
}
