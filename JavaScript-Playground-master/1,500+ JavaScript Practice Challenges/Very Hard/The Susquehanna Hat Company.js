/*  

The Susquehanna Hat Company

This fabled hat company has 5 production lines running simultaneously. The speed of each production line varies depending on the style and quality of the hat being produced. You will be given the number of hats required and an array of production line speeds.
Your job is to devise a function that will find the number of minutes elapsed for exactly n hats to be finished. If exactly n hats cannot be made in any time frame, return "None". The speeds given are the number of minutes required to make one hat.




Examples

hats([5, [1, 1, 1, 1, 1]]) ➞ "1 minute"
// If each line makes a hat in 1 min, it takes 1 min to make 5 hats.
hats([3, [23, 11, 19, 9, 36]]) ➞ "18 minutes"
hats([650, [23, 11, 19, 9, 36]]) ➞ "2001 minutes"
hats([9, [23, 11, 19, 9, 36]]) ➞ "None"

*/





//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const gcd = (a, b) => b ? gcd(b, a % b) : a;
const lcm = (a, b) => a * b / gcd(a, b);

function hats([req, lines]) {
    const l = lines.reduce(lcm);
    const m = lines.reduce((a, c) => a + l / c, 0);

    let elapsed = l * ~~(req / m);
    let remaining = req % m;

    while (remaining > 0) {
        elapsed++;
        for (let line of lines)
            if (elapsed % line === 0)
                remaining--;
    }

    return remaining ? "None" : `${elapsed} minute${elapsed > 1 ? "s" : ""}`;
}