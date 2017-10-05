//The museum of incredible dull things wants to get rid of some exhibitions.
//Betty, the interior architect, comes up with a plan to remove the most boring exhibitions.
//She gives them a rating, and then removes the one with the lowest rating. However, just as she
//finished rating all exhibitions, she's off to an important meeting, so she asks you to write a program
//that tells her the ratings of the items after the lowest one is removed.
//Rules

//Create a function that takes an array of numbers and remove the smallest value.
// If there are multiple elements with the same value, remove the one with a lower index.
//If you get an empty array, return an empty array.

function removeSmallest(arr) {
  var minimum = Infinity;
  var index;
  if(arr.length === 0){
    return [];
  }
  for(var i = 0; i < arr.length; i++){
    if(arr[i] < minimum){
      minimum = arr[i];
      index = i;
    }
  }
  arr.splice(index, 1);
  return arr;
}
