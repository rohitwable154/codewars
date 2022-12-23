



/*

To the Power of _____
Create a function that takes a base number and an exponent number and returns the calculation.

Examples
calculateExponent(5, 5) ➞ 3125

calculateExponent(10, 10) ➞ 10000000000

calculateExponent(3, 3) ➞ 27
Notes
All test inputs will be positive integers.
Don't forget to return the result.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.



*/




/*  Solution 1   */


function calculateExponent(num, exp) {
    return Math.pow(num, exp)
   }


/*  Solution 2   */



function calculateExponent(num, exp) {
    return exp > 1 ? num * calculateExponent(num, exp - 1) :  num;
}



/*  Solution 3   */


const calculateExponent = (num, exp) => Math.pow(num, exp);


/*  Solution 4   */


function calculateExponent(num, exp) {
    var ini = 1;
    for (var i = 0 ; i < exp ; i++)
        {
            ini*=num;
        }
       return ini;
   }
