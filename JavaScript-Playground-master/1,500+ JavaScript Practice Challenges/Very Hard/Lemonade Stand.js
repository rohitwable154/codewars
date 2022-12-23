/*  

Lemonade Stand

At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you, and order one at a time (in the order specified by bills).

Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Return true if and only if you can provide every customer with correct change.

Examples
lemonade([5, 5, 5, 10, 20]) ➞ true

lemonade([5, 5, 10, 10, 20]) ➞ false

lemonade([10, 10]) ➞ false

lemonade([5, 5, 10]) ➞ true


Notes
You don't have any change in hand at first.
bills is an integer array.
bills[i] will be either 5, 10, or 20.


*/


//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function lemonade(bills) {
    return bills.filter(x => x == 5).length >= bills.filter(x => x != 5).length
}



//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function lemonade(bills) {
    let reg = {
        fives: 0,
        tens: 0,
        twentys: 0,
    };

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            reg.fives++;
        }

        if (bills[i] > 5) {
            const dueBack = bills[i] - 5;

            if (dueBack === 15) {
                if (reg.fives < 1 && reg.tens < 1) {
                    return false;
                }
                reg.fives--;
                reg.tens--;
                reg[bills[i]]++;
            }

            if (dueBack === 5) {
                if (reg.fives < 1) {
                    return false;
                }
                reg.fives--;
                reg[bills[i]]++;
            }
        }
    }

    return true;
}





//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################



const lemonade = (bills) =>
    bills.indexOf(5) < 0 ? false :
    bills.sort((a, b) => a - b)
    .reduce((a, b) => a + (b == 5 ? 5 : b == 10 ? 0 : -15), 0) > -1;