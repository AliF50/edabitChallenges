// A point on the screen (pt1) wants to move a certain distance
//(dist) closer to another point on the screen (pt2)
//The function has three arguments, two of which are objects with x & y values,
//and the third being the distance, e.g. {x:50, y:60}, {x: 100, y: 100}, 10.
//The expected result is a similar object with the new co-ordinate.
// Examples

// {x: 50, y: 60}, {x: 100, y: 100}, 10 ➞ {x: 58, y: 66}

// {x: 0, y: 0}, {x: 100, y: 0}, 10 ➞ {x: 10, y: 0}

// {x: 0, y: 0}, {x: 100, y: 100}, 10 ➞ {x: 7, y: 7}

// {x: 250, y: 10}, {x: -20, y: 35}, 55 ➞ {x: 195, y: 15}

function getNextPosition(pt1, pt2, dist) {
  var d = Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
  var t = dist/d;
  var x = Math.round((1 - t)*pt1.x + t*pt2.x);
  var y = Math.round((1 - t)*pt1.y + t*pt2.y);
  return {x: x, y: y};
}

