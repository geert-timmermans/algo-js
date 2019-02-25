function calcSurface(a,b){                 //definieren van de functie
    return a * b;
}

const readlineSync = require("readline-sync");  //definieren van de variabelen dmv vragen
let width = parseInt(readlineSync.question("Give the width of a rectangle: "));
let length = parseInt(readlineSync.question("And the length? "))

console.log(calcSurface(width, length));   //oproepen van de functie in een console.log




/*Create a function named calcSurface that takes the length and width of a rectangle and returns its surface. 
Then create a program that asks the length and width of a rectangle to the user then displays the surface of 
that rectangle. That program must use the function you created.

Write a documentation for the calcSurface function.*/ 