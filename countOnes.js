//Count the amount of ones in
//the binary representation of an integer. So for example, since 12 is '1100' in binary, the return value should be 2.
function countOnes(i) {
  i = (i >>> 0).toString(2);
  i = i.split('');
  i = i.filter((char) => char === '1');
  return i.length;
}
