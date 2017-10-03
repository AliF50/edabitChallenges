//Create a function that accepts an array as an argument. Remove all duplicate items from the array and return the new array.
function removeDups(arr) {
  var uniqueValues = [];
  for(var i = 0; i < arr.length; i++){
    if(uniqueValues.indexOf(arr[i]) < 0){
      uniqueValues.push(arr[i]);
    }
  }
  return uniqueValues;
}
