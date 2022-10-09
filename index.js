/*

ASSIGNMENT RULES

– All the answers must be written in JavaScript

– You can ask for help, reach the Teaching Assistants if needed

– You can Google / use StackOverflow BUT only when you think you need something we didn’t cover during lessons yet

– You can test your code in a separate file or de-commenting the single exercises in this one.

– You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you’re using macOS or Linux.

– Complete as many exercises as you can

*/

// JS Basics

/* EXERCISE A

Create a variable called test and assign a string value to it.

*/
console.log('\n ===================================EXERCISE A ===================================');
let test = "Hello Epicoder!"
console.log('TEST :', test);
console.log('====================================================================================');

/* EXERCISE B

Create a variable called sum and assign to it the result of the sum between the numbers 10 and 20.

*/
console.log('\n ===================================EXERCISE B ===================================');
let a = 10;
let b = 20;
let sum = a + b;
console.log('SUM :', sum);
console.log('====================================================================================');

/* EXERCISE C

Create a variable called random and assign to it a random number between 0 and 20 (it should be randomly created at each execution).

*/
console.log('\n ===================================EXERCISE C ===================================');
let random = Math.floor(Math.random() * 20);
console.log('RANDOM :', random);
console.log('====================================================================================');

/* EXERCISE D

Create a variable called me and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.

*/
console.log('\n ===================================EXERCISE D ===================================');
let me = {
    name: 'kajal',
    surname: 'lathiya',
    age: '26'
}
console.log('ME :', me);
console.log('====================================================================================');

/* EXERCISE E

Write a piece of code for programmatically removing the age property from the previously create object.

*/
console.log('\n ===================================EXERCISE E ===================================');
delete me.age;
console.log("REMOVE AGE:", me);
console.log('====================================================================================');

/* EXERCISE F

Write a piece of code for programmatically adding to the me object you defined before an array called skills, containing the programming languages you know right now.

*/
console.log('\n ===================================EXERCISE F ===================================');
me.skills = ['HTML', 'CSS', 'JavaScript', 'React',];
console.log("ADD SKILLS :", me);
console.log('====================================================================================');

/* EXERCISE G

Write a piece of code for programmatically removing the last skill from the skills array inside the me object.

*/
console.log('\n ===================================EXERCISE G ===================================');
me.skills.pop(me.skills.length - 1)
console.log('REMOVE LAST SKILL :', me);
console.log('====================================================================================');

console.log('\n ====================================== JS Functions ==============================');

// JS Functions

/* EXERCISE 1

Write a function called dice; it should randomize an integer number between 1 and 6.

*/
console.log('===================================EXERCISE 1 ======================================');
function dice(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
}

console.log('RANDOM NO :', dice(1, 6));

console.log('====================================================================================');

/* EXERCISE 2

Write a function called whoIsBigger which receives 2 numbers as parameters and returns the biggest one.

*/
console.log('\n ===================================EXERCISE 2 ===================================');
function whoIsBigger(a, b) {
    return console.log('BIGGEST NO:', Math.max(a, b));
}
whoIsBigger(15, 20);
console.log('====================================================================================');

/* EXERCISE 3

Write a function called splitMe which receives a string as a parameter and returns an array with every word in that string.

Ex.: splitMe("I love coding") => returns ["I", "Love", "Coding"]

*/
console.log('\n ===================================EXERCISE 3 ===================================');
function splitMe(str) {
    return console.log('SPIT ME:', str.split(''));
}
splitMe('Hello world!');
console.log('====================================================================================');

/* EXERCISE 4

Write a function called deleteOne which receives a string and a boolean as parameters.

If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.

*/
console.log('\n ===================================EXERCISE 4 ===================================');
function deleteOne(str, val) {
    if (val === true) {
        return console.log('REMOVE FRIST LETTER:', str.substring(1));
    } else {
        return console.log('REMOVE LAST LETTER:', str.slice(0, - 1));
    }
}
deleteOne('Epicoder', true);
deleteOne('Epicoder', false);

console.log('====================================================================================');

/* EXERCISE 5

Write a function called onlyLetters which receives a string as a parameter and returns it removing all the digits.

Ex.: onlyLetters("I have 4 dogs") => returns "I have dogs"

*/
console.log('\n ===================================EXERCISE 5 ===================================');
function onlyLetters(val) {
    return console.log('REMOVE DIGITS:', val.replace(/[0-9]/g, ''));
}
onlyLetters('I have 4 dogs')
console.log('====================================================================================');

/* EXERCISE 6

Write a function called isThisAnEmail which receives a string as a parameter and returns true if the string is a valid email address.

*/
console.log('\n ===================================EXERCISE 6 ===================================');
function isThisAnEmail(email) {
    var re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9]+\.([a-zA-Z]{2,5}|[a-zA-z]{2,5}\.[a-zA-Z]{2,5})$/
    return console.log('VALID EMAIL-ADDRESS:', re.test(email));;
}
isThisAnEmail('kajal@gmail.com');
console.log('====================================================================================');

/* EXERCISE 7

Write a function called whatDayIsIt that should return the current day of the week.

*/
console.log('\n ===================================EXERCISE 7 ===================================');
function whatDayIsIt() {
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thusday', 'Friday', 'Saturday'];
    let today = new Date().getDay()
    return console.log('Today:', days[today]);
}
whatDayIsIt();
console.log('====================================================================================');

/* EXERCISE 8

Write a function called rollTheDices which receives a number as a parameter.

It should invoke the dice() function defined in Ex1 the specified amount of times,

and return an object containing a sum property holding the sum of all values extracted

and a values array containing the single values of the dicerolls themselves.

Example: RollTheDices(3) => returns {

sum: 10

values: [3, 3, 4]

}

*/

console.log('\n ===================================EXERCISE 8 ===================================');
function rollTheDices(n) {
    let values = [];
    for (let i = 0; i < n; i++) {
        values.push(dice(1, 6));
    }
    let sum = values.reduce((a, b) => a + b);
    console.log('VALUES:', values);
    console.log('SUM:', sum);
    return values, sum;
}
rollTheDices(5);
console.log('====================================================================================');

/* EXERCISE 9

Write a function called howManyDays which receives a date as a parameter and returns the number of days
passed since that date.

*/
console.log('\n ===================================EXERCISE 9 ===================================');
function howManyDays(date) {
    let todayDate = '09/10/2022';
    // console.log('DAYS:', dated);
}
howManyDays('21/9/2022');
console.log('====================================================================================');

/* EXERCISE 10

Write a function called isTodayMyBirthday which should return true if today’s your birthday, false otherwise.

*/
console.log('\n ===================================EXERCISE 10 ===================================');
function isTodayMyBirthday() {
    let birthday = '11/07/1996';
    let d = new Date();
    let today = d.getDate() + '/' + (d.getMonth() + 1) + '/' + d.getFullYear();
    if (today === birthday) {
        return true;
    } else {
        return false;
    }
}
const res = isTodayMyBirthday();
console.log('TODAY"S MY BITHDAY:', res);
console.log('====================================================================================');

console.log('\n ==================================== JS Arrays & Objects =============================');
// JS Arrays & Objects

// NOTE: the movies array used in some exercises is defined at the end of this file
const movies = [

    {

        Title: "The Lord of the Rings: The Fellowship of the Ring",

        Year: "2001",

        imdbID: "tt0120737",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",

    },

    {

        Title: "The Lord of the Rings: The Return of the King",

        Year: "2003",

        imdbID: "tt0167260",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

        Title: "The Lord of the Rings: The Two Towers",

        Year: "2002",

        imdbID: "tt0167261",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",

    },

    {

        Title: "Lord of War",

        Year: "2005",

        imdbID: "tt0399295",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

        Title: "Lords of Dogtown",

        Year: "2005",

        imdbID: "tt0355702",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",

    },

    {

        Title: "The Lord of the Rings",

        Year: "1978",

        imdbID: "tt0077869",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",

    },

    {

        Title: "Lord of the Flies",

        Year: "1990",

        imdbID: "tt0100054",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",

    },

    {

        Title: "The Lords of Salem",

        Year: "2012",

        imdbID: "tt1731697",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",

    },

    {

        Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",

        Year: "1984",

        imdbID: "tt0087365",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",

    },

    {

        Title: "Lord of the Flies",

        Year: "1963",

        imdbID: "tt0057261",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",

    },

    {

        Title: "The Avengers",

        Year: "2012",

        imdbID: "tt0848228",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",

    },

    {

        Title: "Avengers: Infinity War",

        Year: "2018",

        imdbID: "tt4154756",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",

    },

    {

        Title: "Avengers: Age of Ultron",

        Year: "2015",

        imdbID: "tt2395427",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",

    },

    {

        Title: "Avengers: Endgame",

        Year: "2019",

        imdbID: "tt4154796",

        Type: "movie",

        Poster:

            "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",

    },

];
/* EXERCISE 11

Write a function called deleteProp which receives an object and a string as parameters,

and returns the given object after deleting its property named as the given string.

*/
console.log('=====================================EXERCISE 11 ===================================');
let obj = {
    fname: 'kajal',
    surname: 'lathiya',
    hobby: 'reading'
}
function deleteProp(obj, str) {
    delete obj[str];
    return console.log('DELETE PROPERTY:', obj);
};
deleteProp(obj, 'hobby');
console.log('====================================================================================');

/* EXERCISE 12

Write a function called oldestMovie which finds the oldest movie in the provided movies array.

*/
console.log('\n ===================================EXERCISE 12 ===================================');
function oldestMovie(array) {
    const result = array.filter(obj => obj.Year < '2000')
    return console.log('SHOW OLDEST MOVIES:', result);
}
oldestMovie(movies)
console.log('====================================================================================');

/* EXERCISE 13

Write a function called countMovies which returns the number of movies contained in the provided movies array.

*/
console.log('\n ===================================EXERCISE 13 ===================================');
function countMovies(array) {
    return console.log('NO. OF MOVIES:', array.length);
}
countMovies(movies);
console.log('====================================================================================');

/* EXERCISE 14

Write a function called onlyTheTitles which creates an array with just the titles of the movies contained in the provided movies array.

*/
console.log('\n ===================================EXERCISE 14 ==================================');
function onlyTheTitles(array) {
    let titleofMovies = array.map((obj) => {
        return obj.Title;
    })
    console.log('TITLE OF MOVIES:', titleofMovies);
}
onlyTheTitles(movies);
console.log('====================================================================================');

/* EXERCISE 15

Write a function called onlyInThisMillennium which returns only the movies produced in this millennium from the provided movies array.

*/
console.log('\n ===================================EXERCISE 15 ==================================');
function onlyInThisMillennium() {
    let arrayOfMovies = movies.filter(obj => obj.Year >= '2000');
    return console.log('arrayOfMovies', arrayOfMovies);
};
onlyInThisMillennium();
console.log('====================================================================================');

/* EXERCISE 16

Write a function called getMovieById which receives an id as a parameter and returns the movie with the given id from the provided movies array.

*/
console.log('\n ===================================EXERCISE 16 ===================================');
function getMovieById(id) {
    let res = movies[id];
    console.log('Movie:', res);
}
getMovieById(6)
console.log('====================================================================================');

/* EXERCISE 17

Write a function called sumAllTheYears which returns the sum of all the years in which the movies in the provided movies array have been produced.

*/
console.log('\n ===================================EXERCISE 17 ==================================');
function sumAllTheYears() {
    let yearsArray = movies.map((obj) => {
        return obj.Year;
    })
    let sumOfYears = 0;
    for (let i = 0; i < yearsArray.length; i++) {
        sumOfYears += parseInt(yearsArray[i]);
    }
    return console.log('SUM OF ALL YEARS IN THE MOVIES ARRAY:', sumOfYears);
}
sumAllTheYears()
console.log('====================================================================================');

/* EXERCISE 18

Write a function called searchByTitle which receives a string as a parameter and returns all the movies in the provided movies array which contain that string in the title.

*/
console.log('\n ===================================EXERCISE 18 ==================================');
function searchByTitle(str) {
    let newArrayMovie = movies.filter(obj => obj.Title.includes(str));
    console.log('MOVIES ARRAY:', newArrayMovie);
}
searchByTitle('Avengers');
console.log('====================================================================================');

/* EXERCISE 19

Write a function called searchAndDivide which receives a string as a parameter and returns an object;

this object should contain an array called match, made by all the movies from the provided movies array which contain the given string in the title,

and another array unmatch with all the remaining ones.

*/
console.log('\n ===================================EXERCISE 19 ==================================');
function searchAndDivide(str) {
    let temp = movies.filter(obj => obj.Title.includes(str));
    return console.log('temp-->', temp);
}
searchAndDivide('Lords')
console.log('====================================================================================');

/* EXERCISE 20

Write a function called "removeIndex" which receives a number as a parameter and returns the provided movies array without the element in the given position.

*/
console.log('\n ===================================EXERCISE 20 ==================================');
function removeIndex(id) {
    movies.splice(id, 1);
    return console.log('removeIndex: ', movies);
}
removeIndex(2);
console.log('====================================================================================');

// [EXTRAS] JS Advanced

/* EXERCISE 21

Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.

Example:

halfTree(3)

*

**

***

*/
console.log('\n ===================================EXERCISE 21 ==================================');
let star = '';
function halfTree(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            star += '*'
        }
        star += '\n';
    }
    console.log(star);
    return star;
}
halfTree(5);
console.log('====================================================================================');

/* EXERCISE 22

Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.

Example:

tree(3)

*

***

*****

*/
console.log('\n================================= EXERCISE 22 ===================================');
let string = '';

function tree(n) {
    for (let i = 1; i <= n; i++) {
        for (let k = 0; k < 2 * i - 1; k++) {
            string += "*";
        }
        string += "\n";
    }
    console.log(string);
    return string;

}
tree(4);
console.log('====================================================================================');

/* EXERCISE 23

Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.

*/
console.log('\n ===================================EXERCISE 23 ===================================');
function isItPrime(n) {
    if (n % 2 !== 0) {
        return true
    } else {
        return false
    }
}
let number = 23
const prime = isItPrime(number);
console.log(`Prime No ${number} :`, prime);

console.log('====================================================================================');

/* WHEN YOU ARE FINISHED

Commit and push the code to your personal GitHub repository; then post the link of your commit on the Homework section of today’s Eduflow.

*/

/* This movies array is used throughout the exercises. You’re not supposed to alter it. */

