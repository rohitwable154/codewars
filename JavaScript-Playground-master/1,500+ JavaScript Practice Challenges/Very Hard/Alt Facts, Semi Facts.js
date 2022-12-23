/*  

Alt Facts, Semi Facts

The factorial of a positive number n is the product of all numbers from 1 to n.

5! = 5 x 4 x 3 x 2 x 1 = 120
The semifactorial (also known as the double factorial) of a positive number n is the product of all numbers from 1 to n that have the same parity (i.e. odd or even) as n.

12!! = 12 x 10 x 8 x 6 x 4 x 2 = 46,080

7!! = 7 x 5 x 3 x 1 = 105
The alternating factorial of a positive number n is the sum of the consecutive factorials from n to 1, where every other factorial is multiplied by -1.

Alternating factorial of 1:

af(1) = 1!
Alternating factorial of 2:

af(2) = 2! + (-1)x(1!) = 2! - 1! = 2 -1 = 1
Alternating factorial of 3:

af(3) = 3! - 2! + 1! = 6 - 2 + 1 = 5
Create a function that takes a number n and returns the difference between the alternating factorial and semifactorial of n.

Examples
altSemi(1) ➞ 0
altSemi(2) ➞ -1
altSemi(3)➞ 2

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const factorial = n => n === 1 ? 1 : n * factorial(n - 1);

const sFactorial = n => n === 0 || n === 1 ? 1 : n * sFactorial(n - 2);

function aFactorial(n) {
    let result = 0,
        multiplier = 1;
    while (n !== 0) {
        result += factorial(n) * multiplier;
        multiplier *= -1;
        --n;
    }
    return result;
}

const altSemi = n => aFactorial(n) - sFactorial(n);





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function altSemi(n) {
    return alternating(n) - semi(n)
}

function factorial(n) {
    if (n === 0 || n === 1) return 1
    return n * factorial(n - 1)
}

function semi(n) {
    if (n === 0 || n === 1) return 1
    return n * semi(n - 2)
}

function alternating(n) {
    let sum = 0
    const parity = n % 2
    for (let i = n; i > 0; i--) {
        const p = i % 2 === parity ? 1 : -1
        sum += factorial(i) * p
    }
    return sum
}