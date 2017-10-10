//Write a function that takes a string of brackets and checks wether they are balanced or not.
function isBalanced(string) {
  var holdingStack = [];
  var openingBrackets = ['(', '[', '{'];
  var closingBrackets = [')', ']', '}'];
  if(string){
   for(var i = 0; i < string.length; i++){
      if(openingBrackets.indexOf(string[i]) >= 0){
        holdingStack.push(string[i]);
      }else if(closingBrackets.indexOf(string[i]) >= 0){
        if(holdingStack.length === 0 || holdingStack.pop() !== openingBrackets[closingBrackets.indexOf(string[i])]){
          return false;
        }
      }else{
        continue;
      }
   }
  }else{
    return undefined;
  }
  return true;
}
