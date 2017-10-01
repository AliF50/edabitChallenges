//Create a function that returns all values in an array that aren't' odd.
function noOdds(arr) {
  arr = arr.filter(function(number){
    return number % 2 === 0;
  });
  return arr;
}
