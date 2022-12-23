/*  

Primal Strength
In number theory, a prime number is balanced if it is equidistant from the prime before it and the prime after it. It is therefore the arithmetic mean of those primes. For example, 5 is a balanced prime, two units away from 3, and two from 7. 211 is 12 units away from the previous prime, 199, and 12 away from the next, 223.

A prime that is greater than the arithmetic mean of the primes before and after it is called a strong prime. It is closer to the prime after it than the one before it. For example, the strong prime 17 is closer to 19 than it is to 13 (see note at bottom).

A prime that is lesser than the arithmetic mean of the primes before and after it is called weak prime. For example, 19.

Create a function that takes a prime number as input and returns "Strong" if it is a strong prime, "Weak" if it is a weak prime, or "Balanced".

Examples
primalStrength(211) ➞ "Balanced"

primalStrength(17) ➞ "Strong"

primalStrength(19) ➞ "Weak"


Notes
This definition of strong primes is not to be confused with strong primes as defined in cryptography, which are much more complicated than this. You are all welcome to make a challenge based on cryptographically strong primes.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


const isPrime = num => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }

    return true;
}

const primalStrength = (num) => {
    if (!isPrime(num) || num === 2)
        return false;

    let previous_prime = num - 1;
    let next_prime = num + 1;

    while (!isPrime(next_prime))
        next_prime++;

    while (!isPrime(previous_prime))
        previous_prime--;

    let mean = (previous_prime +
        next_prime) / 2;

    return num === mean ? "Balanced" : num < mean ? "Weak" : "Strong"
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function primalStrength(number) {
    const previousPrime = getPreviousPrime(number);
    const nextPrime = getNextPrime(number);
    const mean = (nextPrime + previousPrime) / 2;

    if (number > mean) return 'Strong';
    else if (number < mean) return 'Weak';
    else return 'Balanced';
}

const getPreviousPrime = (number) => {
    while (number >= 2) {
        number--;
        if (isPrime(number)) return number;
    }
}

const getNextPrime = (number) => {
    while (number <= Math.pow(number, 2)) {
        number++;
        if (isPrime(number)) return number;
    }
}

const isPrime = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return number > 1;
}



//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


function primalStrength(n) {
    const prevPrime = currPrime => {
        for (let i = currPrime - 1; i >= 2; i--) {
            let isPrime = true
            for (let j = 2; j < i; j++)
                if (i % j === 0) isPrime = false
            if (isPrime) return i
        }
    }
    const nextPrime = currPrime => {
        for (let i = currPrime + 1; i <= Number.MAX_SAFE_INTEGER; i++) {
            let isPrime = true
            for (let j = 2; j < i; j++)
                if (i % j === 0) isPrime = false
            if (isPrime) return i
        }
    }
    const mean = (prevPrime(n) + nextPrime(n)) / 2
    return n > mean ? 'Strong' : n < mean ? 'Weak' : 'Balanced'
}





/*

// Tests
Test.assertEquals(primalStrength(5), "Balanced")
Test.assertEquals(primalStrength(211), "Balanced")
Test.assertEquals(primalStrength(593), "Balanced")
Test.assertEquals(primalStrength(1693), "Strong")
Test.assertEquals(primalStrength(599), "Strong")
Test.assertEquals(primalStrength(2203), "Strong")
Test.assertEquals(primalStrength(19), "Weak")
Test.assertEquals(primalStrength(2971), "Weak")
Test.assertEquals(primalStrength(1493), "Weak")


// Console
Test Passed: Value == 'Balanced'
Test Passed: Value == 'Balanced'
Test Passed: Value == 'Balanced'
Test Passed: Value == 'Strong'
Test Passed: Value == 'Strong'
Test Passed: Value == 'Strong'
Test Passed: Value == 'Weak'
Test Passed: Value == 'Weak'
Test Passed: Value == 'Weak'

*/