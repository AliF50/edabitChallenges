//Write a function that takes two strings and determines whether they're anagrams or not.
function isAnagram(s1, s2) {
  s1 = s1.toLowerCase().split('').sort().join('');
  s2 = s2.toLowerCase().split('').sort().join('');
  return s1 === s2;
}
