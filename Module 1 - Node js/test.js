console.time("execution") // Used to measure execution time
console.log("this is test.js file!")

console.time("loop")
for(let i=0; i < 20000; i++){}
console.timeEnd("loop")
console.timeEnd("execution");