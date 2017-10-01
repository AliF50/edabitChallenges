//Create a function that takes an array of non-negative numbers and strings and returns a new array without the strings.
function filterArray(arr) {
  arr = arr.filter((element) => {
    return typeof(element) !== 'string';
  });
  return arr;
}
