


/* define procedure find_largest_number:
input: a pile of numbers, call it PILE

look at first NUMBER in pile and write it on sticky note, call it MIN_SO_FAR

foreach NUMBER in PILE, do the following:
  if NUMBER < MIN_SO_FAR, then:
    replace MIN_SO_FAR with NUMBER on sticky note
  end if
end foreach

hand back MIN_SO_FAR sticky note
end define procedure

let PILE be [10, 9, -2, 100, 17]
call procedure find_largest_number with inputs: PILE // will give us 100
*/





function findSmallestNumber(numbers) {
    let minSoFar = numbers[0];
  
    for(let number of numbers) {
      if (number < minSoFar) {
        minSoFar = number;
      }
    }
  
    return minSoFar;
  }
  
  let pileOfNumbers = [1, 4, 10, 9, -3, 20, 18];
  let smallestNumber = findSmallestNumber(pileOfNumbers);
  
  console.log(smallestNumber);