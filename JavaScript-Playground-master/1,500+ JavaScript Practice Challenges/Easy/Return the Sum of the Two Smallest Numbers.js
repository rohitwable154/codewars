/*  

Return the Sum of the Two Smallest Numbers

Create a function that takes a list of numbers and returns the sum of the two lowest positive numbers.

Examples
sum_two_smallest_nums([19, 5, 42, 2, 77]) ➞ 7

sum_two_smallest_nums([10, 343445353, 3453445, 3453545353453]) ➞ 3453455

sum_two_smallest_nums([2, 9, 6, -1]) ➞ 8

sum_two_smallest_nums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]) ➞ 563

sum_two_smallest_nums([3683, 2902, 3951, -475, 1617, -2385]) ➞ 4519

Notes
Don't count negative numbers.
Floats and empty lists will not be used in any of the test cases.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#############################################################
//#    SOLUTION 1
//#############################################################


def sum_two_smallest_nums(lst):
    return sum(sorted([x
        for x in lst
        if x > 0
    ])[: 2])




//#############################################################
//#    SOLUTION 2
//#############################################################


def sum_two_smallest_nums(lst):
    positive_num = []
    [positive_num.append(x) for x in lst
        if x > 0
    ]
positive_num.sort()
answer = positive_num[0] + positive_num[1]
return answer


//#############################################################
//#    SOLUTION 3
//#############################################################





//#############################################################
//#    SOLUTION 4
//#############################################################