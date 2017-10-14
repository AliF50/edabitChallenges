//Count the amount of coordinates on a two-dimensional grid that are inside a given circle.
//The function has four arguments: the points,
//the circle's center x, y and the circle's radius. For example:
function pointsInCircle(points, centerX, centerY, radius) {
  var count = 0;
  for(var i = 0; i < points.length; i++){
      if(Math.pow(points[i].x - centerX, 2) + Math.pow(points[i].y - centerY, 2) < Math.pow(radius, 2)){
        count++;
      }
  }
  return count;
}
