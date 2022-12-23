const assert = require("assert");

function letterCount(str) {
  let letters = 0;
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ar = alphabet.split("");
  for (let i = 0; i < str.length; i += 1) {
    if (ar.indexOf(str[i]) > -1) {
      letters += 1;
    }
  }
  return letters;
}
// console.log(letterCount('Howdy World!!'));

const a1 = "hello";
const r1 = "5";
const t1 = letterCount(a1);
assert(r1, t1);
