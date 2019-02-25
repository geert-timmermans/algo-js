const readlineSync = require("readline-sync");

let shoeSize = readlineSync.question("What's your shoe size?");
let birthDate = readlineSync.question("What's your birth date?");

let sum = (shoeSize*2 + 5) * 50 - birthDate + 1766;

console.log (sum);