//Write a function that does the following for the given values: add, subtract, divide and multiply . This is simply referred to as the basic arithmetic operations. The variables have to be defined, but in this challenge, it will be defined for you. All you have to do, is to check the variables, do some string to integer conversion, use some if conditions, and apply the arithmetic operation.

function operation(a, b, op) {
	a= parseInt(a);
	b= parseInt(b);
	switch(op) {
		case "add": return a+b;
		case "subtract": return a-b;
		case "multiply": return a*b;
		case "divide": return b!==0?a/b:'undefined';
	}
}