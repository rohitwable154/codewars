"use strict";

/* 

Description:

Task

I have designed a number pyramid which is shown below, your task is to find the sum 
of the elements in the nth row and your code should less than 23 characters(trust me, 
	it's possible to code ;-)).
http://i.imgur.com/tzYVdIR.png

  */
//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################
nthRowSum = function nthRowSum(n) {
  return 3 * n-- * n + 1;
};