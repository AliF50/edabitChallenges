//Create a function that takes an array of numbers and returns the following statistics:
// Minimum Value
// Maximum Value
// Sequence Length
// Average Value
function minMaxLengthAverage(arr) {
  var total = 0;
  for(var i = 0; i < arr.length; i++){
    total += arr[i];
  }
  return [Math.min(...arr), Math.max(...arr), arr.length, total/arr.length];
}
