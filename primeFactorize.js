// Write a program to find all the prime factors of a given number.
// The program must return an array containing all the prime factors, sorted in ascending order.
// Remember that 1 is neither prime nor composite and should not be included in your output array.
// Examples

// 25 ➞ [5, 5]

// 19 ➞ [19]

// 77 ➞ [7, 11]
function primeFactorize(num) {
  var primeFactors = [];

  function isPrime(num){
    var count = 0;
    for(var i = 1; i <= num; i++){
      if(num % i === 0){
        count++;
      }
    }
    return count <= 2;
  }
  for(var i = 2; i <= num; i++){
    if(isPrime(i) && num % i === 0){
      primeFactors.push(i);
      num = num/i;
      i = 1;
    }
  }
  return primeFactors;
}
