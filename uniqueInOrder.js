//Create a function that takes a sequence of either strings or numbers,
//removes the surrounding duplicates and returns an array of items without
// any items with the same value next to each other and preserves the original order of items.
function uniqueInOrder(sequence) {
  if(typeof(sequence) === 'string'){
    sequence = sequence.split('');
  }
  for(var i = 1; i < sequence.length; i++){
    if(sequence[i] === sequence[i - 1]){
      sequence.splice(i, 1);
      i--;
    }
  }
  return sequence;
}
