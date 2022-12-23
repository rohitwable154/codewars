/*  

Is It a Leap Year?
In a calendar year, it is exactly 365.25 days. But, eventually, this will lead to confusion because humans normally count by exact divisibility of 1 and not with decimal points. So, to avoid the latter, it was decided to add up all 0.25 days every four-year cycle and give that year 366 days (including February 29 as an intercalary day) and call it a leap year. The other three years in the four-year cycle would only contain 365 days and wouldn't be leap years.

In this challenge, though quite repetitive, we'll take it to a new level, where you are to determine if it's a leap year or not without the use of the Date() class, switch statements, if blocks, if-else blocks or ternary operation (x ? a : b) nor the logical operators AND (&&) and OR (||) with the exemption of the NOT (!) operator.

Return true if it's a leap year, false otherwise.

Examples
leapYear(2000) ➞ true
leapYear(1521) ➞ false
leapYear(1996) ➞ true
leapYear(1800) ➞ false
leapYear(2016) ➞ true

Notes
You can't use the Date class, switch statements, if statements in general, the ternary operator, or the logical operators (&&, ||).

*/




//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function leapYear(year) {
    // If can be divided by either one or all three of the divisors (odd number of divisors), it's a leap year.
    return [4, 100, 400].filter(divisor => {
        return year % divisor === 0;
    }).length % 2 === 1;
}





//#############################################################
//#                        MY SOLUTION                        #
//#############################################################

const leapYear = yr => Boolean((!(yr % 4) + !(yr % 100) + !(yr % 400)) % 2);






/*

// Tests
const noConditionals = fn => !RegExp(/if|else|switch|\?|&&|\|\||Date/, 'gm').test(fn)
Test.assertNotEquals(noConditionals(leapYear), false,
       "The use of class 'Date', 'switch', 'if', 'if-else', '&&', '||' or '?' is not allowed!")

let [yrVector, resVector] = [[
  2016, 1996, 1600, 2020, 2000, 2008, 1521, 1800, 2007, 2002, 1979, 2006], [
  true, true, true, true, true, true, false, false, false, false, false, false
]]
for (let i in yrVector) Test.assertEquals(leapYear(yrVector[i]), resVector[i])


// Console output
Test Passed: Value != false
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == true
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false
Test Passed: Value == false


*/