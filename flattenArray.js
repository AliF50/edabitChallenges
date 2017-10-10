// Write a function that takes an array. This array can have all kinds of items, even other arrays.
// The function should return a single, flat, one-dimensional, array with all elements. Here are the conditions:
// If the item is an Array, you should include each item in it and the following still apply:
// If the item is a Function, you should include the function's output, not the function itself.
// If the item is an plain Object or a Primitive, include it as it is.
function flattenArray(array) {
  const flat = [];
  if(!array){
    return [];
  }
  array.forEach(item => {
    if (Array.isArray(item)) {
      flat.push(...flattenArray(item));
    }else if(typeof item === 'function'){
      flat.push(item());
    } else {
      flat.push(item);
    }
  });

  return flat;
}
