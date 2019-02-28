const readlinsSync = require("readline-sync");
let n = 0;

function rand100(){         //function for generating a random number between 0-10
    return Math.floor(Math.random() * 101);
}
let e = rand100();

do{
    n = parseInt(readlinsSync.question("Guess the number: "));
    if (n < e){
        console.log("Too Low");
    }   else if (n > e){
            console.log("Too High");
    }   else{
            console.log("Well guessed");
    }
}
while(n !== e)



/* Make a program that generates an integer between 1 and 100 (don't display it to the user).

Then the program should display "Guess the number" and ask the user to guess. If the user enters a number which 
is too low it should display "Too low" and re-ask the question. If the user enters a number which is too high it should 
display "Too high" and re-ask the question. If the user guess correctly it should display "Well guessed!" and exit. */