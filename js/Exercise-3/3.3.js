let arr = ["Nick","Eva","Daphne","Gregory"];

let arrcopy = arr;

console.log(arr);
console.log(arrcopy);

let arr2 = [1,2,3,9,10];
let arr2copy = [];

for (i = 0; i < arr2.length; i++){
    arr2copy.push(arr2[i]);
}

console.log(arr2);
console.log(arr2copy);

//Write a program that will create a duplicate of a given array.

//Bonus: make a first version that will only do it using push(). 
//Make a second version that uses a single method call to perform the copy. 
//(You'll have to search on the MDN or Google for this one.)