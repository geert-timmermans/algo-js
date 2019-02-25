const readlineSync = require("readline-sync");

let num = parseInt(readlineSync.question(`What's your favorit number? `));

if (num == 42){
    console.log(`perfect`);
} else{

    while (num !== 42){
        console.log("Are you sure? ");
        num = parseInt(readlineSync.question(`What's your favorit number? `));

}
}