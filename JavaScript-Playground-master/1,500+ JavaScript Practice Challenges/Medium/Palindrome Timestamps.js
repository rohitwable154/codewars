/*

Palindrome Timestamps

Create a function that takes two times of day (hours, minutes, seconds) and returns the amount of occurences of palendrome timestamps.

A palendrome timestamp should be read the same hours : minutes : seconds as seconds : minutes : hours, keeping in mind the second's and hour's digits will reverse. For example, 02 : 11 : 20 is a palendrome timestamp.

Examples
palendromeTimestamps(2, 12, 22, 4, 35, 10) ➞ 14

palendromeTimestamps(12, 12, 12, 13, 13, 13) ➞ 6

palendromeTimestamps(6, 33, 15, 9, 55, 10) ➞ 0


Notes
Expect military time.
Include the given time parameters if they happen to be palendromes.
The parameter timestamps are chronological.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


f = n => (n + '').padStart(2, 0)

function palendromeTimestamps(a, b, c, A, B, C) {
    s = f(a) + f(b) + f(c)
    r = s == [...s].reverse().join `` ? 1 : 0
    while ('' + a + b + c != '' + A + B + C) {
        c = ++c % 60
        b = c ? b : ++b % 60
        a = c || b ? a : ++a
        s = f(a) + f(b) + f(c)
        r += s == [...s].reverse().join `` ? 1 : 0
    }
    return r
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function palendromeTimestamps(a, b, c, A, B, C) {
    s = f(a) + f(b) + f(c)
    r = s == [...s].reverse().join `` ? 1 : 0
    while ('' + a + b + c != '' + A + B + C) {
        c = ++c % 60
        b = c ? b : ++b % 60
        a = c || b ? a : ++a
        s = f(a) + f(b) + f(c)
        r += s == [...s].reverse().join `` ? 1 : 0
    }
    return r
}