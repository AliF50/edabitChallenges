// Create a function that returns the data type of a given variable. These are the eight data types
//this challenge will be testing for:
// Array
// Object
// String
// Number
// Boolean
// Null
// Undefined
// Date
function dataType(value) {
  if(value === null){
    return 'null';
  }else if(value === undefined){
    return 'undefined';
  }
  else if(typeof(value) === 'boolean'){
    return 'boolean';
  }else if(typeof(value) === 'string'){
    return 'string';
  }else if(typeof(value) === 'number'){
    return 'number';
  }else if(typeof(value) === 'object'){
    if(Array.isArray(value)){
      return 'array';
    }else if(value instanceof Date){
      return 'date';
    }else if(value instanceof Object){
      return 'object';
    }
  }
}
