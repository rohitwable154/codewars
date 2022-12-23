/*

Collatz Conjecture
A Collatz sequence is generated like this. Start with a positive number. If it's even, halve it. If it's odd, multiply it by three and add one. Repeat the process with the resulting number. The Collatz Conjecture is that every sequence eventually reaches 1 (continuing past 1 just results in an endless repeat of the sequence: 4, 2, 1).

The length of the sequence from starting number to 1 varies widely.

Create a function that takes a number as an argument and returns an array of two elements — the number of steps in the Collatz sequence of the number, and the highest number reached.

Examples
collatz(2) ➞ [2, 2]
// seq = [2, 1]

collatz(3) ➞ [8, 16]
// seq = [3, 10, 5, 16, 8, 4, 2, 1]

collatz(7) ➞ [17, 52]
// seq = [7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1]

collatz(8) ➞ [4, 8]
// seq = [8, 4, 2, 1]
Notes
(Improbable) Bonus: Find a positive starting number that doesn't reach 1, and score a place in Math history plus a cash prize.

*/


//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################




/*  Solution 1   */


function collatz(n) {
    let [len, max] = [1, n];
    while (n > 1) {
        n = n % 2 ? n * 3 + 1 : n / 2;
        len++;
        if (n > max) max = n;
    }
    return [len, max];
}




/*  Solution 2   */

const collatz = (n, c = 1, m = n, x = n % 2 ? 3 * n + 1 : n / 2) => n === 1 ? [c, m] : collatz(x, c + 1, Math.max(x, m));





/*  Solution 3   */


const collatz = n => {
    const arr = [];
    arr.push(n);
    while (arr[arr.length - 1] !== 1) {
        if (arr[arr.length - 1] % 2 === 0) { arr.push(arr[arr.length - 1] / 2) } else { arr.push(arr[arr.length - 1] * 3 + 1) }
    }
    return [arr.length, Math.max(...arr)]
}