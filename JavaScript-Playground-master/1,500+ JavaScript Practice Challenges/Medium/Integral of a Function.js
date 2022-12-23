/*

Integral of a Function

Create a function that takes numbers b, m, and n as arguments and returns the definite integral of the function f(x)=(b+1)*x^b with respect to x from x=m to x=n, where b, m, and n are constants.

Examples
integral(0, 2, 5) ➞ 3

integral(2, 4, 7) ➞ 279

integral(5, 9, 3) ➞ -530712


Notes
^ in the context of this challenge means "to the power of", also known as the "exponent" operator.
Assume that b will be an integer greater than or equal to 0.
m and n can be any integer, both positive and negative.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const integral = (b, ...bounds) => (
    bounds.reverse().map(n => n ** (b + 1)).reduce((a, e) => a - e)
);



//#############################################################
//#  SOLUTION 2  
//#############################################################


const integral = (b, m, n) => n ** (b + 1) - m ** (b + 1);


const integral = (b, m, n) => Math.pow(n, b + 1) - Math.pow(m, b + 1);