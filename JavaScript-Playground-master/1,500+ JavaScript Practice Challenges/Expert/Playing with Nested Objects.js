/*

Playing with Nested Objects
Create a function that takes an object and returns an object of all entries having unique marks. If the marks are the same, take who is eldest.

Examples
getObject({
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 17, name: "julie", marks: "400" },
  "2": { age: 16, name: "Robin", marks: "200" },
  "3": { age: 16, name: "Bella", marks: "300" }
}) ➞ {
  "0": { age: 18, name: "john", marks: "400" },
  "1": { age: 16, name: "Robin", marks: "200" },
  "2": { age: 16, name: "Bella", marks: "300" }
}

getObject({
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 17, name: 'julie', marks: '400'},
  2: {age: 16, name: 'Robin', marks: '200'},
  3: {age: 16, name: 'Bella', marks: '300'},
  4: {age: 16, name: 'john', marks: '250'},
  5: {age: 15, name: 'julie', marks: '250'}
}) ➞    {
  0: {age: 18, name: 'john', marks: '400'},
  1: {age: 16, name: 'Robin', marks: '200'},
  2: {age: 16, name: 'Bella', marks: '300'},
  3: {age: 16, name: 'john', marks: '250'}
}


Notes
Check the examples above for clarification.

*/



//#############################################################
//#    My SOLUTION 
//#############################################################


function getObject(args) {
    let a = {},
        i = 0;
    for (let k in args) {
        const obj = args[k];
        if (!(obj.marks in a) || obj.age > a[obj.marks][1].age)
            a[obj.marks] = [i++, obj];
    }
    return Object.fromEntries(Object.values(a));
}



//#############################################################
//#  Alternative SOLUTION 
//#############################################################


function getObject(args) {
    const sorted = Object.entries(args).sort((a, b) => {
        if (a.marks > b.marks) return -1;
        if (a.marks < b.marks) return 1;
        if (a.age > b.age) return -1;
        if (a.age < b.age) return 1;

    });


    const marks = sorted.map(([, v]) => v.marks);


    const indexes = [];

    marks.map((el, i, a) => {
        if (a[i] == a[i + 1]) {

            return indexes.push(i + 1);
        }
    });


    indexes.map(el => delete args[el]);

    return Object.entries(args).reduce((obj, [, v], i) => ({...obj, [i]: v }), {});

}





//#######################################################################

/*

Test Passed: Value == '{\n' +
  "  '0': { age: 18, name: 'john', marks: '400' },\n" +
  "  '1': { age: 16, name: 'Robin', marks: '200' },\n" +
  "  '2': { age: 16, name: 'Bella', marks: '300' }\n" +
  '}'
Test Passed: Value == '{\n' +
  "  '0': { age: 18, name: 'john', marks: '400' },\n" +
  "  '1': { age: 16, name: 'Robin', marks: '200' },\n" +
  "  '2': { age: 16, name: 'Bella', marks: '300' },\n" +
  "  '3': { age: 16, name: 'john', marks: '250' }\n" +
  '}'


*/