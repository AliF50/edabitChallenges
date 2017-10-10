// Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology.
//The machines now interpret a series of consecutive dance moves in place of a PIN number.
// Create a program that converts a customer's PIN number to its dance equivalent.
//There is one dance move per digit in the PIN number. A list of dance moves is given in the code.
// Rules

// Each dance move will be selected from a list by index based on the current digit's
//value plus that digit's index value. If this value is greater than the last index value of the dance list,
//it should cycle to the beginning of the list.
// Valid input will always be a string of four digits. Output will be a string array.
// If the input is not four valid numbers, return the string, "Invalid input."
const MOVES =
      ["Shimmy", "Shake", "Pirouette", "Slide", "Box Step",
       "Headspin", "Dosado", "Pop", "Lock", "Arabesque"];
function danceConvert(pin){
  var danceArray = [];

  if(pin.length !== 4){
    return 'Invalid input.';
  }
  pin = pin.split('');
  for(var i = 0; i < pin.length; i++){
    if(isNaN(pin[i])){
      return 'Invalid input.';
    }else{
      danceArray.push(MOVES[(i + +pin[i]) % 10]);
    }
  }
  return danceArray;
}
