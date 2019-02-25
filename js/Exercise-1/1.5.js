const readlineSync = require("readline-sync");

let number1 = readlineSync.question ("Give a number (ex: 1.23)");
let number2 = readlineSync.question ("Give a second number (ex: 1.23)");

let a = Math.floor(number1);

console.log (a*number2);