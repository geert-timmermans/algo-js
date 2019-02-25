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
