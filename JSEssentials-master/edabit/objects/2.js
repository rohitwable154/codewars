// Try finding your ancestors and offspring with code.

// Create a function that takes a number x and a character y ("m" for male, "f" for female), and returns the name of an ancestor (m/f) or descendant (m/f).

// If the number is negative, return the related ancestor.
// If positive, return the related descendant.
// You are generation 0. In the case of 0 (male or female), return "me!".

const tree = [
  { generation: -3, m: "great grandfather", f: "great grandmother" },
  { generation: -2, m: "grandfather", f: "grandmother" },
  { generation: -1, m: "father", f: "mother" },
  { generation: 0, m: "me!", f: "me!" },
  { generation: 1, m: "son", f: "daughter" },
  { generation: 2, m: "grandson", f: "granddaughter" },
  { generation: 3, m: "great grandson", f: "great granddaughter" },
];

function generation(x, y) {
  return tree.filter((obj) => obj.generation === x)[0][y];
}
console.log(generation(2, "f"));
//  ➞ "granddaughter"

console.log(generation(-3, "m"));
//  ➞ "great grandfather"

console.log(generation(1, "f"));
//  ➞ "daughter"
