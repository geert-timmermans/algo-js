const readlineSync = require("readline-sync");

let n = parseInt(readlineSync.question("Give any number: "))
let e = [0,1];

n = Math.floor(n);

console.log(n);

function fibonacci(n){
    for (i = 2; i < n; i++){
        e[i] = e[i-1] + e[i-2];
    }
    let a = e[n-2];
    let b = e[n-1];
    return [a,b];
}

console.log(fibonacci(n));

/* Make a program that asks for an integer n and generates the n first Fibonacci numbers.

Yes, you'll have to search what the hell are Fibonacci numbers. */