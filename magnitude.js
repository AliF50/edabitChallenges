// You will be implementing a basic case of the map-reduce pattern in programming.
//Use the built in JavaScript array functions .map and .reduce to solve the following problem.
// Given a vector stored as an array of numbers, find the magnitude of the vector
//(this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.
// Rules

// The array can have any length.
// The values in the array can be all real numbers.
// Use both .map() and .reduce in your solution.
// Don't use Math.hypot() in the solution
var magnitude = vector => Math.sqrt(vector.map((value) => Math.pow(value, 2)).reduce((sum, value) => sum + value, 0));//code goes here
