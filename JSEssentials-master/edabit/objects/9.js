// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

/* SOLUTION ONE */
// function mapping(arr) {
//   //   return arr.reduce((obj, a) => ((obj[a] = a.toUpperCase()), obj), {});
//   return arr.reduce((obj, a) => {
//     obj[a] = a.toUpperCase();
//     return obj;
//   }, {});
// }

/* SOLUTION TWO */
function mapping(arr) {
    let obj = {}
    arr = arr.forEach(item => obj[item] = item.toUpperCase())
    return obj
}

console.log(mapping(["p", "s"]));
//  ➞ { "p": "P", "s": "S" }

console.log(mapping(["a", "b", "c"]));
//  ➞ { "a": "A", "b": "B", "c": "C" }

console.log(mapping(["a", "v", "y", "z"]));
//  ➞ { "a": "A", "v": "V", "y": "Y", "z": "Z" }
