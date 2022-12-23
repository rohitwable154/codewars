// Write a function that takes an array and a number (n) as arguments
// It should return the last n array elements
// If the array has less than n elements, return all

function myFunction(arr, num) {
  if (arr.length <= num) {
    return arr;
  } else {
    return arr.splice(arr.length - num);
  }
}

console.log(myFunction([1, 2, 3, 4, 5], 2));
// Expected[(4, 5)];
console.log(myFunction([1, 2, 3], 6));
// Expected[(1, 2, 3)];
console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8], 3));
// Expected[(6, 7, 8)];
