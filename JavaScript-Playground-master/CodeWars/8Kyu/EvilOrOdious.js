/* 

8kyu - Evil or Odious

The number n is Evil if it has an even number of 1's in its binary expansion.
First ten: 3, 5, 6, 9, 10, 12, 15, 17, 18, 20

The number n is Odious if it has an odd number of 1's in its binary expansion.
First ten: 1, 2, 4, 7, 8, 11, 13, 14, 16, 19

You have to write a function that determine if a number is Evil of Odious, 
function should return "It's Evil!" in case of evil number and "It's Odious!" in 
case of odious number.

good luck :)

*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



function evil(n) {
    n = (n >>> 0).toString(2).replace(/0/g, "");
    return (n.length % 2 === 1) ? "It\'s Odious!" : "It's Evil!";
}