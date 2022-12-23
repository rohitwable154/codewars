/*
Description:
Implement this

[2,5,1,3].max() // returns 5
[1,2,3,8,4,9,7,42,99].max() // returns 99
[2,'5',1,3].max() // returns 5
[2,5,1,'ab'].max() // returns NaN
Array will contain at least one item.
*/
Array.prototype.max = function() {
  return Math.max(...this);
};
