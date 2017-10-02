//Create a function that takes an array of numbers and returns the mean average (fixed to two decimal places).
function mean(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++){
    sum += arr[i];
  }
  return Math.round(sum/arr.length*100)/100;
}
