
/*
define procedure find_largest_even_number:
input: a pile of numbers, call it PILE

write "None" on sticky note, call it MAX_SO_FAR

foreach NUMBER in PILE, do the following:
  if NUMBER is even, then:
    if MAX_SO_FAR is "None" then:
      replace MAX_SO_FAR with NUMBER on sticky note
    otherwise, if NUMBER > MAX_SO_FAR, then:
      replace MAX_SO_FAR with NUMBER on sticky note
    end if
  end if
end foreach

hand back sticky note
end define procedure

let PILE be [10, 9, -2, 18, 101, 17]
call procedure find_largest_even_number with inputs: PILE // will give us 18

*/

function findLargestEvenNumber(numbers) {
    let maxSoFar = undefined;
  
    for(let number of numbers) {
      if (number % 2 === 0) {
        if (maxSoFar === undefined) {
          maxSoFar = number;
        } else if (number > maxSoFar) {
          maxSoFar = number;
        }
      }
    }
  
    return maxSoFar;
  }
  
  let pileOfNumbers = [10, 9, -2, 18, 101, 17];
  let result = findLargestEvenNumber(pileOfNumbers);
  
  console.log(result); // => 18