//A palindrome is a word, phrase, number or other sequence of characters which
//reads the same backward or forward, such as madam or kayak.
//Write a function that takes a String and determines whether it's a Palindrome or not. The function should return a boolean.
function isPalindrome(string) {
  string = string.toLowerCase();
  string = string.replace(/[^A-Z0-9]/ig, '');
  return string === string.split('').reverse().join('');
}
