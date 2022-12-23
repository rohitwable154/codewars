/*

Exactly Three
You are given a number n. Determine whether n has exactly 3 divisors or not.

Examples
isExactlyThree(4) ➞ true
// 4 has only 3 divisors: 1, 2 and 4

isExactlyThree(12) ➞ false
// 12 has 6 divisors: 1, 2, 3, 4, 6, 12

isExactlyThree(25) ➞ true
// 25 has only 3 divisors: 1, 5, 25


Notes
1 ≤ n ≤ 10^12

*/






//#############################################################
//#    My SOLUTION 
//#############################################################


p = n => { for (i = n ** .5 | 0; n % i; i--); return i == 1 && n > 1 }

function isExactlyThree(n) {
    x = n ** .5
    return x % 1 == 0 && p(x)
}





//#############################################################
//#  Alternative possible SOLUTION 
//#############################################################




////////////////////////////////////////////////////////////
//		Sub Function
////////////////////////////////////////////////////////////

function FNC_Prime_Number_Checker(number) {

    var divisor = 2

    while (divisor < number)

        if (number % divisor == 0) { return false; } else { divisor += 1; }

    return true;

}

////////////////////////////////////////////////////////////
//		MAIN FUNCTION
////////////////////////////////////////////////////////////

function isExactlyThree(n) {

    var test_a = n ** 0.5
    var test_b = FNC_Prime_Number_Checker(test_a)

    if (n > 1 && test_a % 1 == 0 && test_b == true) { return true; } else { return false; }

}