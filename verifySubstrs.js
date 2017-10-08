//Write a function that takes 4 string arguments.
//You will be comparing the first string to the 3 next strings.
//Verify if the 1st string starts with the 2nd string, includes the 3rd string, and ends with the 4th string.
//If the 1st string passes all the checks, return the string "My head, body, and tail.", otherwise, return "Incomplete.".
function verifySubstrs(mainStr, head, body, tail) {
  if(mainStr.startsWith(head) && mainStr.includes(body) && mainStr.endsWith(tail)){
    return 'My head, body, and tail.';
  }
  return 'Incomplete.'
}
