const readlineSync = require("readline-sync");

let name = readlineSync.question("What's your name? ");
let grandMotherName = readlineSync.question("What's your grandmothers name? ");

//console.log ("Today " + name + " was at the bank, " + grandMotherName + " asked " + name + " to help check her balance. So " +// name + " pushed her over.");
console.log (`Today ${name} was at the bank, ${grandMotherName} asked ${name} to help check her balance. So ${name} pushed her over`)