//Create a function that takes an object and returns the keys and values as separate arrays.

function keysAndValues(obj) {
  var keys = [], values = [];
  for(var key in obj){
    keys.push(key);
    values.push(obj[key]);
  }
  return [keys, values];
}
