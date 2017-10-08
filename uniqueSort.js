//Given an array of numbers, write a function that returns an array that...
//Has all duplicate elements removed.
//Is sorted from least value to greatest value.
function uniqueSort(arr) {
  var uniqueArr = [];
  for(var i = 0; i < arr.length; i++){
    if(uniqueArr.indexOf(arr[i]) < 0){
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr.sort((a, b) => a- b);
}
