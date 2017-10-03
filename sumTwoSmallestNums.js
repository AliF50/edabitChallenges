//Create a function that takes an array of numbers and
//returns the sum of the two lowest positive integers. No floats or empty arrays will be used in any of the test cases.
function sumTwoSmallestNums(arr) {
  arr = arr.filter((num) => //Remove negatives
    return num > 0;
  });
  arr = arr.sort((a, b) => a - b);
  return arr[0] + arr[1];
}
