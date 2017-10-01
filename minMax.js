// Ben has a very simple idea to make some profit: he buys something and sells it again.
// Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price.
// Instead, he's going to buy it for the lowest possible price and sell it at the highest.
// Create a function that accepts an array of numbers and return both the minimum and maximum numbers, in that order.
function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}
