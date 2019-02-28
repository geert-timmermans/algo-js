const readlineSync = require("readline-sync");

let movie = {
    cast: [],
};


function askTvSerie(){
    movie.name = readlineSync.question("Name any movie: ");
    movie.year = parseInt(readlineSync.question("It\'s release date? "));
   do{
    var tussenstap = readlineSync.question("Name the cast member: ");
    movie.cast.push(tussenstap);
    
   }
   while (tussenstap != "");
}

askTvSerie();

console.log(movie.name);
console.log(movie.year);
console.log(movie.cast);


/* Create a function named askTvSerie() that will ask the user for the following data about its favorite TV serie:

Name
Production year
Names of the cast members (there can be as much as the user want)
That function must gather all the data in a single object and return it. The data structure must be elegant.

Create a program that use that function to generate a TV serie object and display it to the user in JSON format. */