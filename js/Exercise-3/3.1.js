let arr1 = [1,2,3,4,5];
let arr2 = [100,101,102];
let sum = 0;
let sum2 = 0;

for (i = 0; i < arr1.length; i++){
            sum += arr1[i];
}

console.log(sum);

for (e = 0; e < arr2.length; e++) {
            sum2 +=  arr2[e];
}

console.log(sum2);

//Write a program that will add all the elements of an array.

//Test it with the following arrays:

//[1, 2, 3, 4, 5] => 15
//[100, 101, 102] => 303