
/*

define procedure count_smaller_than
input:
  - a pile of numbers, call it PILE
  - a specific number, call it CUTOFF

label a sticky note COUNT_SO_FAR, write 0 on it

foreach NUMBER in PILE, do the following:
  if NUMBER < CUTOFF, then:
    replace value of COUNT_SO_FAR with value of COUNT_SO_FAR plus 1
  end if
end foreach

return COUNT_SO_FAR sticky note
end define procedure

let PILE be [1, 15, -10, 3, 15, 88]
call procedure count_smaller_than with inputs: PILE, 10  // will give 3 since there are three numbers smaller than 10
call procedure count_smaller_than with inputs: PILE, 0   // will give 1 since there is one number smaller than 0
call procedure count_smaller_than with inputs: PILE, 50  // will give 5 since there are five numbers smaller than 50

*/




function countSmallerThan(numbers, cutoff) {
    let countSoFar = 0;
  
    for(let number of numbers) {
      if (number < cutoff) {
        countSoFar = countSoFar + 1;
      }
    }
  
    return countSoFar;
  }
  
  let pile = [1, 15, -10, 3, 15, 88];
  let countBelow10 = countSmallerThan(pile, 10);
  let countBelow0 = countSmallerThan(pile, 0);
  let countBelow50 = countSmallerThan(pile, 50);
  
  console.log(`There are #{countBelow10} numbers smaller than 10 in the list.`);
  console.log(`There are #{countBelow0} numbers smaller than 0 in the list.`);
  console.log(`There are #{countBelow50} numbers smaller than 50 in the list.`);