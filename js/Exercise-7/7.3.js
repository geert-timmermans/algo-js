const readlineSync = require ("readline-sync");

let n = parseInt(readlineSync.question("Give any positive number: "));
let e = [];
n = Math.floor(n);

function divisors(n){
    for(i = 2; i < n; i++){
        if((n% i) === 0){
            e.push(i);
        }
    }
}

divisors(n)
console.log(e);


/* Make a program that asks for a positive integer. Then display all the divisors of that integer which are not 1 or itself.

Examples:

7 => nothing (it's a prime number)
10 => 2 5
9187 => nothing (it's a prime number too)
134234 => 2 41 82 1637 3274 67117 */