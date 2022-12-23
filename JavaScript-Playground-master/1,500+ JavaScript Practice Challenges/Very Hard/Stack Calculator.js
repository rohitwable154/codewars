/*  

Stack Calculator

A stack machine processes instructions by pushing and popping values to an internal stack. A simple example of this is a calculator.

The argument passed to run(instructions) will always be a string containing a series of instructions.
The instruction set of the calculator will be this:

+: Pop the last 2 values from the stack, add them, and push the result onto the stack.
-: Pop the last 2 values from the stack, subtract the lower one from the topmost one, and push the result.
*: Pop the last 2 values, multiply, and push the result.
/: Pop the last 2 values, divide the topmost one by the lower one, and push the result.
DUP: Duplicate (not double) the top value on the stack.
POP: Pop the last value from the stack and discard it.
PSH: Performed whenever a number appears as an instruction. Push the number to the stack.
Any other instruction (for example, a letter) should result in the value "Invalid instruction: [instruction]"


Examples
StackCalc("") ➞ 0

StackCalc("5 6 +") ➞ 11

StackCalc("3 DUP +") ➞ 6

StackCalc("6 5 5 7 * - /") ➞ 5

StackCalc("x y +") ➞ Invalid instruction: x


Notes
If there are no instructions, the value should remain 0.
The return value of get value() should be the topmost value on the stack.

*/






//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


class StackCalc {
    constructor() {
        this.stack = [];
        this.invalidInstruction = false;
    }

    run(instructions) {
        const instructionsArr = instructions.split(' ');

        for (let i = 0; i < instructionsArr.length; i++) {
            const instruction = instructionsArr[i];

            if ('+-*/'.indexOf(instruction) > -1) {
                const [x, y] = [this.stack.pop(), this.stack.pop()];

                if (typeof x === 'undefined' || typeof y === 'undefined') break;

                if (instruction === '+') this.stack.push(x + y);
                if (instruction === '-') this.stack.push(x - y);
                if (instruction === '*') this.stack.push(x * y);
                if (instruction === '/') this.stack.push(x / y);
            } else if (instruction === 'DUP') {
                this.stack.push(this.stack[this.stack.length - 1]);
            } else if (instruction === 'POP') {
                this.stack.pop();
            } else {

                if (/^\d+$/.test(instruction)) {
                    this.stack.push(parseFloat(instruction));
                } else {
                    this.invalidInstruction = instruction;

                    break;
                }
            }
        }
    }

    get value() {
        if (this.invalidInstruction) {
            return `Invalid instruction: ${this.invalidInstruction}`;
        }

        return this.stack[this.stack.length - 1] || 0;
    }
}





//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


// Stack Calculator class.
// 
// Although not necessary for the specification given in the question,
// I 'return this' from the functions so that you also can operate the 
// stack by operator chaining. For example, to multiply 3 and 2 you can
//   new StackCalc().run("3 2 *").value
// but, in addition, you can
//   new StackCalc().push(3).push(2).mul().value

class StackCalc {
    constructor() { this.stack = [] }

    get value() { return this.stack[this.stack.length - 1] || 0; }
    pop() { return this.stack.pop() || 0; }

    push(val) { this.stack.push(val); return this; }
    dup() { this.push(this.value); return this; }
    add() { this.push(this.pop() + this.pop()); return this; }
    sub() { this.push(this.pop() - this.pop()); return this; }
    mul() { this.push(this.pop() * this.pop()); return this; }
    div() { this.push(this.pop() / this.pop()); return this; }

    run(instructions) {
        for (let i of instructions.split(" "))
            switch (i) {
                case "+":
                    this.add();
                    break;
                case "-":
                    this.sub();
                    break;
                case "*":
                    this.mul();
                    break;
                case "/":
                    this.div();
                    break;
                case "DUP":
                    this.dup();
                    break;
                case "POP":
                    this.pop();
                    break;
                default:
                    if (i.length == 0) continue;
                    if (String(Number(i)) == i) this.push(Number(i));
                    else {
                        this.stack = [`Invalid instruction: ${i}`];
                        return this;
                    }
            }
        return this;
    }
}






/*  


const tests = [
  {
    arg: '12', ans: 12
  }, {
    arg: '5 6 +', ans: 11
  }, {
    arg: '3 6 -', ans: 3
  }, {
    arg: '3 DUP +', ans: 6
  }, {
    arg: '2 5 - 5 + DUP +', ans: 16
  }, {
    arg: '9 14 DUP + - 3 POP', ans: 19
  }, {
    arg: '1 2 3 4 5 POP POP POP', ans: 2
  }, {
    arg: '13 DUP 4 POP 5 DUP + DUP + -', ans: 7
  }, {
    arg: '6 5 5 7 * - /', ans: 5
  }, {
    arg: '4 2 4 * 3 + 5 + / 5 -', ans: 1
  }, {
    arg: '5 8 + 4 5 1 + POP 13 +', ans: 17
  }, {
    arg: 'x', ans: 'Invalid instruction: x'
  }, {
    arg: '4 6 + x', ans: 'Invalid instruction: x'
  }, {
    arg: 'y x *', ans: 'Invalid instruction: y'
  }, {
    arg: '', ans: 0
  }, {
    arg: '4 POP', ans: 0
  }
];
let machine;
for (let {arg, ans} of tests) {
	machine = new StackCalc();
  machine.run(arg);
  Test.assertEquals(machine.value, ans);
}




Test Passed: Value == 12
Test Passed: Value == 11
Test Passed: Value == 3
Test Passed: Value == 6
Test Passed: Value == 16
Test Passed: Value == 19
Test Passed: Value == 2
Test Passed: Value == 7
Test Passed: Value == 5
Test Passed: Value == 1
Test Passed: Value == 17
Test Passed: Value == 'Invalid instruction: x'
Test Passed: Value == 'Invalid instruction: x'
Test Passed: Value == 'Invalid instruction: y'
Test Passed: Value == 0
Test Passed: Value == 0

*/