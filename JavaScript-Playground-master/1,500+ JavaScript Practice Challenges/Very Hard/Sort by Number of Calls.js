/*  

Sort by Number of Calls
Create a function that takes a list of functions and sorts them in ascending order based on how many calls are needed for them to return a non-function.

Examples
f1 = _ => "hello"
// f1() ➞ "hello"

f2 = _ => _ => "edabit"
// f2()() ➞ "edabit"

f3 = _ => _ => _ => "user"
// f3()()() ➞ "user"

funcSort([f2, f3, f1]) ➞ [f1, f2, f3]
// [f2, f3, f1] ➞ [2, 3, 1] ➞ [1, 2, 3] ➞ [f1, f2, f3]

funcSort([f1, f2, f3]) ➞ [f1, f2, f3]
// [f1, f2, f3] ➞ [1, 2, 3] ➞ [1, 2, 3] ➞ [f1, f2, f3]

funcSort([f2, "func"]) ➞ ["func", f2]
// [f2, "func"] ➞ [2, 0] ➞ [0, 2] ➞ ["func", f2]


Notes

Treat non-functions as needing zero calls.
Every function will be called with empty parameters.
Every function will need to be called at least once.
The potentially returned values include Numbers, Booleans, and Strings, among others.

*/



//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


funcSort = arr => {
    f = g => typeof g == 'function' ? 1 + f(g()) : 0
    return arr.sort((x, y) => f(x) - f(y))
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function funcSort(arr) {
    return arr.map(function makeCallToGetCount(f) {
            let count = 0;
            let fEx = f;
            while (typeof fEx === 'function') {
                fEx = fEx();
                count++;
            }
            return {
                f: f,
                count: count
            }
        })
        .sort(function compare(fWithCounterA, fWithCounterB) {
            return fWithCounterA.count - fWithCounterB.count;
        })
        .map((fWithCounter) => fWithCounter.f);

}



//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const funcSort = (arr) => {
    return arr
        .map(func => {
            if (!isFunc(func)) return { f: func, count: 0 };

            const f = func;
            let count = 0;
            while (isFunc(func)) {
                func = func();
                count++;
            }

            return { f, count };
        })
        .sort((a, b) => a.count - b.count)
        .map(obj => obj.f);
}

const isFunc = (value) => {
    return value && {}.toString.call(value) === '[object Function]';
}




//#################################################################################

/*  


//Tests
// example functions
f1 = _ => "hello"
f2 = _ => _ => "edabit"
f3 = _ => _ => _ => "user"

// examples
Test.assertSimilar(funcSort([f2, f3, f1]), [f1, f2, f3], 'Example 1')
Test.assertSimilar(funcSort([f2, 'func']), ['func', f2], 'Example 2')

// create functions f5 to f14 to be used in tests
rand = max => Math.floor(Math.random() * max)

for (k = 5; k < 15; k++) {
	r = ['"func"', '0', 'null', '[]', '{}', 'true', '1.0'][rand(6)]
	eval('f' + k.toString() + ' = ' + '_ => '.repeat(k) + r)
}

// create 12 random tests
for (k = 0; k < 12; k++) {
	r = ["'func'", '0', 'null', '[]', '{}', 'true', '1.0'][rand(6)]
	g = n => 'f' + n.toString()
	l = [...Array(5 + rand(5)).keys()].map(k => 5 + rand(10))
	sl = [...l].sort((x,y) => x - y)
	lf = '[' + l.map(k => g(k)).toString().replace('f5', r) + ']'
	slf = '[' + sl.map(k => g(k)).toString().replace('f5', r) + ']'

	eval('Test.assertSimilar(funcSort(' + lf + '), ' +
		slf + ', "List: ' + lf + '")')
}


//#################################################################################


//Console Output
Test Passed: Value == '[[Function: f1], [Function: f2], [Function: f3]]'
Test Passed: Value == "['func', [Function: f2]]"
Test Passed: Value == '[null, [Function: f5], [Function: f6], [Function: f8], [Function: f8], [Function: f9], [Function: f11], [Function: f11]]'
Test Passed: Value == '[[Function: f8], [Function: f9], [Function: f10], [Function: f10], [Function: f11], [Function: f13], [Function: f14], [Function: f14]]'
Test Passed: Value == '[null, [Function: f5], [Function: f6], [Function: f8], [Function: f9], [Function: f10], [Function: f10], [Function: f11], [Function: f12]]'
Test Passed: Value == '[0, [Function: f5], [Function: f5], [Function: f10], [Function: f10], [Function: f12], [Function: f12], [Function: f14]]'
Test Passed: Value == '[0, [Function: f6], [Function: f9], [Function: f9], [Function: f12], [Function: f13]]'
Test Passed: Value == "['func', [Function: f5], [Function: f6], [Function: f8], [Function: f8], [Function: f13], [Function: f14]]"
Test Passed: Value == '[[], [Function: f7], [Function: f7], [Function: f7], [Function: f10], [Function: f10], [Function: f12], [Function: f14], [Function: f14]]'
Test Passed: Value == '[[Function: f7], [Function: f8], [Function: f10], [Function: f11], [Function: f11], [Function: f12], [Function: f13]]'
Test Passed: Value == '[[Function: f8], [Function: f11], [Function: f11], [Function: f12], [Function: f13], [Function: f14]]'
Test Passed: Value == '[[Function: f6], [Function: f6], [Function: f7], [Function: f8], [Function: f10], [Function: f10], [Function: f13]]'
Test Passed: Value == '[{}, [Function: f6], [Function: f7], [Function: f8], [Function: f11]]'
Test Passed: Value == '[true, [Function: f5], [Function: f7], [Function: f8], [Function: f8], [Function: f10], [Function: f12], [Function: f13]]'


*/