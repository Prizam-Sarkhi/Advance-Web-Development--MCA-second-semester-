const Buff = Buffer.alloc(10);
console.log(Buff);

const Buff2 = Buffer.from("Prizam");
console.log(Buff2); // Will display Hex representation
console.log(Buff2.toString()); // Will display the original string
