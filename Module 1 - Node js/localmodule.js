const fs = require("fs"); // Local module in node
// Other local modules : http, url, path, os, crypto

fs.writeFileSync("demo.txt", "Hello World!");

const data = fs.readFileSync("demo.txt", "utf8");
console.log(data);

