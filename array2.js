// PUSH POP SHIFT UNSHIFT
var teaLine = ["Kalam", "Salam", "Balam"];

teaLine.push("Jalam");
console.log("After push Array: " + teaLine);

teaLine.pop();
console.log("After pop Array: " + teaLine);

teaLine.unshift("Rahim", "Palam");
console.log("After unshift: " + teaLine);

teaLine.shift();
console.log("After shift: " + teaLine);

// -------------------------- Slice ------------------------------
// SLICE SYNTAX
// arr.slice([start[, end]])

var animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

// console.log("After slicing: " + animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]
// console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

// ------------------------- Splice --------------------------------
// REPLACE A ELEMENT (Splice)
// Syntax: let arrDeletedItems = arr.splice(start[, deleteCount[, item1[, item2[, ...]]]])

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]
