//Create a function that takes an array of strings. Return all words in the array that are exactly four letters.
function isFourLetters(arr) {
  arr = arr.filter((word) => {
    return word.length === 4;
  });
  return arr;
}
