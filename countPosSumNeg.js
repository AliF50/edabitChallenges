// Create a function that takes an array of positive and negative numbers.
//Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.
function countPosSumNeg(nums) {
  var positiveCount = 0, negativeSum = 0;
  if(!nums || nums.length === 0){
    return [];
  }
  for(var i = 0; i < nums.length; i++){
    if(nums[i] > 0){
      positiveCount++;
    }else if(nums[i] < 0){
      negativeSum += nums[i];
    }
  }
  return [positiveCount, negativeSum];
}
