const readlineSync = require("readline-sync");

let name = readlineSync.question("What is your name?");
let firstName = readlineSync.question("What is your first name?");
let city = readlineSync.question("Which city do you live in?");

console.log ("Your name is " + firstName + " " + name + " " + "and you live in " + city + ".");