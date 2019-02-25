const readlineSync = require("readline-sync");

console.log("It works !!!");
console.log("hello");

let userName = readlineSync.question("Can you give me your name please?");
console.log("Hello " + userName);

let age = 25;
age = 36; //I get older
age = 18; //Getting younger

let htmlBadges = new Number(readlineSync.question("How many HTML badges do you have?"));
let cssBadges = new Number(readlineSync.question("How many css badges do you have?"));
let totalBadges = htmlBadges + cssBadges;
console.log("Woaw, you have " + totalBadges + "!");