//Create a function that takes an array of names and returns an array with the first letter capitalized.
function capMe(arr) {
  for(var i = 0; i < arr.length; i++){
    arr[i] = arr[i].split('');
    arr[i][0] = arr[i][0].toUpperCase();
    for(var j = 1; j < arr[i].length; j++){
      arr[i][j] = arr[i][j].toLowerCase();
    }
    arr[i] = arr[i].join('');
  }
  return arr;
}
