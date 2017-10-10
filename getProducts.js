//You have an array of integers, and for each index you want
//to find the product of every integer except the integer at that index.
//Write a function that takes an array of integers and returns an array of the products.
function getProducts(arr) {
  var arrToReturn = [];
  for(var i = 0; i < arr.length; i++){
    arrToReturn.push(multiplierFunction(arr, i));
  }
  function multiplierFunction(arr, i){
    var multiplier = 1;
    for(var j = 0; j < arr.length; j++){
      if(j === i){
        continue;
      }else{
        multiplier *= arr[j];
      }
    }
    return multiplier;
  }
  return arrToReturn;
}
