//Create a function that takes an array of numbers and returns the smallest number in the set.
function findSmallestNum(arr) {
  arr = arr.sort(function(a, b){
    return a - b;
  });
  return arr[0];
}
