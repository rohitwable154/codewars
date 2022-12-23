



/*

Half, Quarter and Eighth
Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

Examples
halfQuarterEighth(6) ➞ [3, 1.5, 0.75]

halfQuarterEighth(22) ➞ [11, 5.5, 2.75]

halfQuarterEighth(25) ➞ [12.5, 6.25, 3.125]
Notes
The order of the array is: half, quarter, eighth.



*/






/*  Solution 1   */


const halfQuarterEighth = n => {
    let newArray = [];
    for (let i = 0; i <= 2; i++) {
      n = n / 2;
      newArray.push(n);
    }
    return newArray;
  };


/*  Solution 2   */

const halfQuarterEighth = n => [n / 2, n / 4, n / 8];

const halfQuarterEighth = (n) => {
	return [n/2, n/4, n/8]
}


/*  Solution 3   */



const halfQuarterEighth = (n) => {
	return [n/2, n/4, n/8];
}