/*  

Count 5s and Win

Arun is obsessed with primes, especially five. He considers a number to be luckiest if it has the highest number of five in it. If two numbers have the same frequency of five, Arun considers the larger of them to be luckiest, and if there is no five in any number, the first given number is considered luckiest. Help him choose the luckiest number.

Examples
getLuckiest([5, 12, 55, 11]) ➞ 55

getLuckiest([5, 12, -55,  11]) ➞ -55

getLuckiest([515, 1255, -55,  1]) ➞ 1255

getLuckiest([44, 12, 7, 40]) ➞ 44



Notes
Return null if given an empty array.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################



function getLuckiest(arr) {
    if (arr.length === 0) return null;

    // Rate the numbers based on how many 5s they contain
    let ratings = arr.map(num => {
        let chars = num.toString().split('');
        return chars.reduce((sum, c) => c === '5' ? ++sum : sum, 0);
    });

    // Get the highest rating
    let maxRating = Math.max(...ratings);

    // Filter out highest rated numbers and then select the highest
    if (maxRating > 0) {
        let selection = arr.filter((n, i) => ratings[i] === maxRating);
        return Math.max(...selection);
    }

    // If no number contains 5, return first number
    else return arr[0];
}







//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


const getLuckiest = arr => {
    if (arr.length === 0) {
        return null;
    }

    return arr.sort((a, b) => {
        const [a5, b5] = [a, b].map(x => countFives(x));
        const fiveDifference = b5 - a5;
        const fiveSum = b5 + a5;

        return fiveSum ? fiveDifference || b - a : 0;
    })[0];
}

const countFives = s => s.toString().split('5').length - 1;








//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function getLuckiest(arr) {
    let highestFive = null,
        fiveCount = null;
    arr.forEach(num => {
        const fives = Array.from(num.toString()).reduce((ac, cv) => cv === "5" ? ++ac : ac, 0)
        if (fives > fiveCount) {
            highestFive = num;
            fiveCount = fives;
        } else if (fives === fiveCount) {
            if (num > highestFive) {
                highestFive = num;
            }
        }
    })
    return highestFive ? highestFive : arr[0] || null
}





//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################


function getLuckiest(arr) {
    if (arr.length === 0) {
        return null
    }

    const topNumber = arr.map(value => ({ value, occurance: count5s(value) }))
        .sort((a, b) => b.occurance - a.occurance || b.value - a.value)
        .shift()

    return topNumber.occurance ? topNumber.value : arr[0]
}

const count5s = n => (String(n).match(/5/g) || []).length