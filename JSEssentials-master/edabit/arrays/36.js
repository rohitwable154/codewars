// Given an integer array, transform that array into a mirror.

/* SOLUTION ONE */
// function mirror(arr) {
//   return [...arr, ...arr.reverse().splice(1)];
// }

/* SOLUTION TWO */
function mirror(arr) {
  return arr.concat(arr.slice(0, -1).reverse());
}

console.log(mirror([0, 2, 4, 6]));
//  ➞ [0, 2, 4, 6, 4, 2, 0]

console.log(mirror([1, 2, 3, 4, 5]));
//  ➞ [1, 2, 3, 4, 5, 4, 3, 2, 1]

console.log(mirror([3, 5, 6, 7, 8]));
//  ➞ [3, 5, 6, 7, 8, 7, 6, 5, 3]
