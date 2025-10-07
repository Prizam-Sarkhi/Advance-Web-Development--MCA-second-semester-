const fs = require("fs");
const name = "Prizam Sarkhi"

// Writing to the file
fs.writeFileSync("./Module 1 - Node js/practice problems/name.txt", name);

//Reading from the file
const data = fs.readFileSync("./Module 1 - Node js/practice problems/name.txt");
console.log("The name is : " + data);