// objective:
// Take the str parameter being passed and return the string true if the
// parameter is a palindrome, (the string is the same forward as it is backward)
// otherwise return the string false

// solution:
const assert = require("assert");

function Palindrome(str) {
  const init = str.split(" ").join("");
  const x = init.split("");
  const y = x.reverse();
  const z = y.join("");

  if (z === init) {
    return true;
  }

  return false;
}

const a1 = "A weight, suspended from pivot. It can swing freely.";
const r1 = "false";
const t1 = Palindrome(a1);
console.log(r1);
assert(r1, t1);
