//Create a function that takes two integers as arguments (num1, num2) and returns true if a number
// repeats three times in a row at any place in num1 AND that same number repeats two times in a row in num2.
function trouble(num1, num2) {
  num1 = num1.toString();
  num2 = num2.toString();
  num1 = num1.split('');
  num2 = num2.split('');
  var numbers = [];
  for(var i = 0; i < num1.length - 2; i++){
    if(num1[i] === num1[i + 1] && num1[i] === num1[i + 2]){
      numbers.push(num1[i]);
    }
  }
  if(numbers.length === 0){
    return false;
  }else{
    for(var i = 0; i < num2.length - 1; i++){
      if(num2[i] === num2[i + 1] && numbers.indexOf(num2[i]) >= 0){
        return true;
      }
    }
  }

  return false;
}
