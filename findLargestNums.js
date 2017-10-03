//Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.
function findLargestNums(arr) {
  var max = -Infinity;
  var resultingArray = [];
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      if(arr[i][j] >= max){
        max = arr[i][j];
      }
    }
    resultingArray.push(max);
    max = -Infinity;
  }
  return resultingArray;
}
