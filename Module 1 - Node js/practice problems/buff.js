const str = "Advance Web Dev";
const buffer = Buffer.from(str);

// Will print the buffer object
console.log("Buffer in hex format : " , buffer);

// Will print it as a string (because + is added)
console.log("Buffer in string format : " + buffer);

// Will print it as a string (because .toString() is used)
console.log("Buffer in string/utf8 format : " , buffer.toString());