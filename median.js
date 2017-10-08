/*Create a function that takes an array of numbers as an argument. Return its median average.
Rules

Input can be any negative or positive number, including decimals.
Array being passed must contain at least four numbers.
If the return value contains a decimal, round to one decimal place.*/
function median(arr) {
  arr = arr.sort((a, b) => a - b);
  if(arr.length % 2 === 1){
    return arr[Math.round(arr.length/2 - 1)];
  }else{
    return Math.round((arr[Math.round(arr.length/2 - 1)] + arr[Math.round(arr.length/2)])/2 * 10)/10;
  }
}
