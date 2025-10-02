//Functions are first-class objects (can be assigned to variables, 
// passed as arguments, returned from other functions).

// Simple function
function greet(name){
    return `Hello ${name}`;
}
console.log(greet("Prizam"));

// Function as variable
const square = function (n){ return n * n;};
console.log(square(3));

// Arrow function
const multiply = (a,b) => a * b;
console.log(multiply(5,10));
