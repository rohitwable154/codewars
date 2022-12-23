
/*
define procedure find_largest_number:
input: a pile of numbers, call it PILE

look at first NUMBER in pile and write it on sticky note, call it MAX_SO_FAR

foreach NUMBER in PILE, do the following:
  if NUMBER > MAX_SO_FAR, then:
    replace MAX_SO_FAR with NUMBER on sticky note
  end if
end foreach

hand back MAX_SO_FAR sticky note
end define procedure

let PILE be [10, 9, -2, 100, 17]
call procedure find_largest_number with inputs: PILE // will give us 100

*/






function findLargestNumber(pile) {
    let maxSoFar = pile[0];
  
    for(let number of pile) {
      if (number > maxSoFar) {
        maxSoFar = number;
      }
    }
  
    return maxSoFar;
  }
  
  let pileOfNumbers = [1, 4, 10, 9, -3, 20, 18];
  let largestNumber = findLargestNumber(pileOfNumbers);
  
  console.log(largest_number);