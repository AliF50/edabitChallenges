// Create a function that takes an array of strings representing times
//('hours:minutes:seconds') and returns their sum as an array of integers ([hours, minutes, seconds]).
// Examples

// ['1:23:45'] ➞ [1, 23, 45]
// ['1:03:45', '1:23:05'] ➞ [2, 26, 50]
// ['5:39:42', '10:02:08', '8:26:33'] ➞ [24, 8, 23]
function timeSum(times) {
  var hours = 0, minutes = 0, seconds = 0;
  if(times.length === 0){
    return [0, 0, 0];
  }else{
    for(var i = 0; i < times.length; i++){
      times[i] = times[i].split(':');
      seconds += +times[i][2];
      if(seconds >= 60){
        minutes += Math.floor(seconds/60);
        seconds %= 60;
      }
      minutes += +times[i][1];
      if(minutes >= 60){
        hours += Math.floor(minutes/60);
        minutes %= 60;
      }
      hours += +times[i][0];
    }
  }
  return [hours, minutes, seconds];
}
