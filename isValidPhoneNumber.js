// Create a function that accepts a string and returns true if it's in the format of a
//proper phone number and false if it's not. Assume any integer from 0-9 (in the appropriate spots)
//will produce a valid phone number. This is what a valid phone number looks like: (123) 456-7890

// Examples

// "(123) 456-7890" ➞ true

// "1111)555 2345" ➞ false

// "098) 123 4567" ➞ false
function isValidPhoneNumber(str) {
  if(str.match(/^\(\d\d\d\) \d\d\d-\d\d\d\d$/)){
    return true;
  }else{
    return false;
  }
}
