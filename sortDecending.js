// /Create a function that takes any nonnegative number as an argument
//and return it with it's digits in descending order. Descending order is when you sort from highest to lowest.
function sortDecending(num) {
  return +num.toString().split('').sort(function(a, b){return b - a;}).join('');
}
