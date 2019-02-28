const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("How many numbers need to be generated? "));
let arr = [];



function rand10(){         //function for generating a random number between 0-10
    return Math.floor(Math.random() * 11);
}


function multiRand(){     //funtion for adding the random number to the array
        arr.push(rand10());
}

for(i=0; i < n; i++){     //loop for adding n numbers to the array
    multiRand(n);
}


console.log(arr);


/* By reusing the function rand10() created in Exercise 2, write a function named multiRand(n) that returns an array 
of n numbers between 1 and 10. You should not modify anything in rand10() to achieve this.

Write a documentation for the multiRand(n) function.

Use that function to create a program that will ask the number of random numbers to generate then display that 
same number of random numbers. */