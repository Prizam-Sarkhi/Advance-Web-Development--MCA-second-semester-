const calculator = require("../modules/calculator");

num1 = 10;
num2 = 5;

console.log("num1 = " , num1);
console.log("num2 = " , num2);

console.log("Addition : " , calculator.add(num1,num2));
console.log("Subtraction : " , calculator.subtract(num1,num2));
console.log("Product : " , calculator.multiply(num1,num2));
console.log("Division  : " , calculator.divide(num1,num2));
