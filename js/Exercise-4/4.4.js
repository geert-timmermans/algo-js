const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("How many numbers need to be generated? "));
let arr = [];
let sum = 0;

function average(arr){
    return(sum/arr.length);
}

function min(arr){
    return Math.min(...arr);
}

function max(arr){
    return Math.max(...arr);
}


function rand10(){         //function for generating a random number between 0-10
    return Math.floor(Math.random() * 11);
}


function multiRand(n){     //funtion for adding the random number to the array
        arr.push(rand10());
}

for(i=0; i < n; i++){     //loop for adding n numbers to the array
    multiRand(n);
    sum += arr[i];
}


console.log(arr);
console.log(Math.round(average(arr)));
console.log(min(arr));
console.log(max(arr));



/* Create a function named average(arr) that takes an array of numbers as argument and returns the average.

Create a function named min(arr) that takes an array of numbers as argument and returns the minimum element.

Create a function named max(arr) that takes an array of numbers as argument and returns the maximum element.

Create a program that asks a number to the user then generate that same amount of random numbers but also displays 
their average, min and max. To do so, use the three functions you just created as well as the multiRand(n) function 
created in Exercise 3.

Write a documentation for all the functions you created. */