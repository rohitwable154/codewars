// Create a function to check whether the given parameter is an Object or not.

/* SOLUTION ONE */
// function isObject(value) {
//   return value instanceof Object;
// }

/* SOLUTION TWO */
function isObject(value) {
  return value === Object(value);
}

console.log(
  isObject(function add(x, y) {
    return x + y;
  })
);
//  ➞ true

console.log(isObject(new RegExp("^[a-zA-Z0-9]+$", "g")));
//  ➞ true

console.log(isObject(null));
//  ➞ false

console.log(isObject(""));
//  ➞ false
