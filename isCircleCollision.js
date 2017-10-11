// Create a function that returns true if the given circles are intersecting.
//The circles are given as two arrays containing the values in the following order:
// Radius of the circle.
// Position on the x-axis.
// Position on the y-axis.
function isCircleCollision(c1,c2){
  var dx = c1[1] - c2[1];
  var dy = c1[2] - c2[2];
  var distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < c1[0] + c2[0]) {
      return true;
  }else{
    return false;
  }
}
