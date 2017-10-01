//Create a function that returns true if a number is a prime, and false if it is not.
// A prime is a natural number that is only divisible by 1 and itself.
function isPrime(num){

  if(num === 1){
    return false;
  }
  var count = 0;
  for(var i = 1; i <= num; i++){
    if(num % i === 0){
      count++;
    }
  }
  if(count >= 3){
    return false;
  }else{
    return true;
  }
}
