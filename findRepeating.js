// Create a function that accepts a string and groups repeated values.
//The groups should have the following structure: [[value_0, start_0, end_0, len_0],
//..., [value_k, start_k, end_k, len_k]].
// Examples

// 'a' ➞ [['a', 0, 0, 1]]

// 'aabbb' ➞  [['a', 0, 1, 2], ['b', 2, 4, 3]]

// '1337' ➞  [['1', 0, 0, 1], ['3', 1, 2, 2], ['7', 3, 3, 1]]

function findRepeating(str) {
  var result = [];
  var count = 0;
  for(var i = 0; i < str.length; i++){
   if(str[i] === str[i + 1]){
      count++;
    }else{
      result.push([str[i], i - count, i, count + 1]);
      count = 0;
    }
  }
  return result;
}
