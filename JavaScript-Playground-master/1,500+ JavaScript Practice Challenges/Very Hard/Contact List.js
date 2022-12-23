/*  

Contact List
Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).

Examples
sortContacts([
  "John Locke",
  "Thomas Aquinas",
  "David Hume",
  "Rene Descartes"
], "ASC") ➞ [
  "Thomas Aquinas",
  "Rene Descartes",
  "David Hume",
  "John Locke"
]

// Aquinas (A) < Descartes (D) < Hume (H) < Locke (L)

sortContacts([
  "Paul Erdos",
  "Leonhard Euler",
  "Carl Gauss"
], "DESC") ➞ [
  "Carl Gauss",
  "Leonhard Euler",
  "Paul Erdos"
]

// Gauss (G) > Erdos (ER) > Euler (EU)

sortContacts([], "DESC") ➞ []

sortContacts(null, "DESC") ➞ []

sortContacts(undefined, "DESC") ➞ []


Notes
An array with a single name should be trivially returned.
An empty array, or an input of null or undefined should return an empty array.


*/





//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function sortContacts(names, sort) {
    let sortedAsc = (names || []).sort((nameA, nameB) =>
        nameA.split(" ")[1] < nameB.split(" ")[1] ? -1 : 1
    );
    return sort == "ASC" ? sortedAsc : sortedAsc.reverse();
}





//#############################################################
//#                        MY SOLUTION                        #
//#############################################################


function sortContacts(names, sort) {
    function srt(a, b) {
        let as = a.split(" ")[1],
            bs = b.split(" ")[1];
        if (as < bs) { return -1 };
        if (as > bs) { return 1 };
        return 0;
    }
    return (!names || !sort) ? [] : sort == "ASC" ? names.sort(srt) : names.sort(srt).reverse();
}






/*


// Tests
Test.assertSimilar(sortContacts(['John Locke', 'Thomas Aquinas', 'David Hume', 'Rene Descartes'], 'ASC'), ['Thomas Aquinas', 'Rene Descartes', 'David Hume', 'John Locke'])
Test.assertSimilar(sortContacts(['Paul Erdos', 'Leonhard Euler', 'Carl Gauss'], 'DESC'), ['Carl Gauss', 'Leonhard Euler', 'Paul Erdos'])
Test.assertSimilar(sortContacts(['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'], 'DESC'), ['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt'])
Test.assertSimilar(sortContacts(['Al Gore', 'Barack Obama'], 'ASC'), ['Al Gore', 'Barack Obama'])
Test.assertSimilar(sortContacts(['Albert Einstein'], 'ASC'), ['Albert Einstein'])
Test.assertSimilar(sortContacts([], 'DESC'), [])
Test.assertSimilar(sortContacts(null, 'DESC'), [])
Test.assertSimilar(sortContacts(undefined, 'DESC'), [])



// Console output
Test Passed: Value == "['Thomas Aquinas', 'Rene Descartes', 'David Hume', 'John Locke']"
Test Passed: Value == "['Carl Gauss', 'Leonhard Euler', 'Paul Erdos']"
Test Passed: Value == "['Michael Phelps', 'Jesse Owens', 'Michael Jordan', 'Usain Bolt']"
Test Passed: Value == "['Al Gore', 'Barack Obama']"
Test Passed: Value == "['Albert Einstein']"
Test Passed: Value == '[]'
Test Passed: Value == '[]'
Test Passed: Value == '[]'



*/