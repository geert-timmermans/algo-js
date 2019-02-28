const readlineSync = require("readline-sync");

let numMin = parseInt(readlineSync.question("Give your minimum number. "));
let numMax = parseInt(readlineSync.question("Give your maximum number. "));
let numCur = parseInt(readlineSync.question("Choose a number in between min and max? "));

if ((numMin < numCur) && (numMax > numCur)){
    console.log(numCur);
}   else if (numMin >= numMax){
    //console.log("You don't understand anything");
    console.log(`Better luck next time`)
}


/* Ask the user to enter three numbers: min, max and current. Display if current is between min and max.

Bonus: if min is greater than max, display an error message to explain the user he's doesn't understand 
anything then exit the program. (It must not ask any other question.)

Bonus 2: be polite in the error messages. (facultative */