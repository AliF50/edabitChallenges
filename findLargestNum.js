//Create a function that takes an array of numbers. Return the largest number in the array.
function findLargestNum(arr) {
  arr = arr.sort(function(a, b){
    return b - a;
  });
  return arr[0];
}
