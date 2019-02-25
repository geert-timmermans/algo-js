const readlineSync = require("readline-sync");

let num1 = readlineSync.question("Give a number without decimals:");
let num2 = readlineSync.question("Give another full number:");

console.log (num1% num2);