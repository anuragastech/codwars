const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// app.use(bodyParser.json());



// let counter =1;
// function age (number){
//   if (counter>number){


//     return ;
//   }else {
//     console.log("what ");
//     counter++;
//   }return age(number)
// }
// age(5);


//  var a=[4,8,9,6,5,65,8];
// function test (h){
//     return h*2
// }
// var j=a.map(test);
// console.log(j);
// ------------------------------------------------------------

// Find Maximum and Minimum Values of a List  ?????
// Answer
var min = function(list){
    return Math.min(...list)
}

var max = function(list){
    
    return Math.max(...list)
}


// ---------------------------------------------------------------------------
// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.?????
// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
    var capitalIndexes = [];
    for (let i = 0; i < word.length; i++) {
      if (word[i] === word[i].toUpperCase()) {
        capitalIndexes.push(i);
      }
    }
    return capitalIndexes;
  };

// ------------------------------------

// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

// Try to do it without using if statements!
// answer //





// qstn

// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7



function basicOp(operation, value1, value2)
{
  // Code
  if( operation == "+") {
    return value1 + value2
  }
  if( operation == "-") {
    return value1 - value2
  }
  if( operation == "*") {
    return value1 * value2
  }
  if( operation == "/") {
    return value1 / value2
  }
}



function smallEnough(a, limit) {
  for (let i = 0; i < a.length; i++) {
    if (a[i] > limit) {
      return false; 
    }
  }
  return true; 
}
// ------------------------------------
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// Examples:(Input1, Input2 --> Output (explanation)))

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
answer
function addBinary(a,b) {
  return (a + b).toString(2);
}
// -------------------------------
// qatons
// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// answer


function twiceAsOld(dadYearsOld, sonYearsOld) {
  if (dadYearsOld < 0 || sonYearsOld < 0 || isNaN(dadYearsOld) || isNaN(sonYearsOld)) {
      return "Please provide valid positive ages.";
  }

  let ageDifference = dadYearsOld - 2 * sonYearsOld;

  let result = Math.abs(ageDifference);

  return result;
}


qstions 

// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


// answers 
(1)
function nameShuffler(str){
  //Shuffle It
  let char=str.split('')
  for(let i=1;i<=char.length;i+=2){
    if(str.length>=2){
let temp=char[i-1]
char[i-1]=temp;
    }
    x=char.join('')
    return x;
  }
}
(2)
function nameShuffler(str) {
  const words = str.split(' ');

  if (words.length >= 2) {
    const swappedNames = [words[words.length - 1], ...words.slice(1, words.length - 1), words[0]];

    const swappedString = swappedNames.join(' ');

    return swappedString;
  } else {
    return str;
  }
}
(3)
function nameShuffler(str) {
  const names = str.split(' ');

  return names.length >= 2 ? names[1] + ' ' + names[0] : str;
}



qstion 
// Complete the function which converts a binary number (given as a string) to a decimal number.


answer
function binToDec(bin){
  return parseInt(bin,2);
}


qstion 
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"



answer

function reverseWords(str) {
  return str.split(' ').map(function(word){
    return word.split('').reverse().join('');
  }).join(' ');
}


question 
// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105

// Zero alone is fine, don't worry about it. Poor guy anyway
answer
function noBoringZeros(n) {
  let x = n.toString();

  if (x === '0') {
    return 0;
  }

  for (let i = x.length - 1; i >= 0; i--) {
    if (x[i] !== '0') {
      return parseInt(x.substring(0, i + 1));
    }
  }
}

question
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
// Task

// Given a year, return the century it is in.
// Examples

// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20
answer
function century(year) {
  // Finish this :)
  
    var x = Math.floor(year / 100);
    if (year % 100 === 0)
        return x;
    else
       
  return x + 1;
}

question
// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
answer
function problem(x){
  //your code here

  if (typeof x === 'string') {
    return 'Error';
  }

  const result = (x * 50) + 6;
  return result;
}


question
// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]
 
answer
function distinct(a) {
 

  return a.filter((item,
      index) => a.indexOf(item) === index);
}
// console.log(removeDuplicates(a));


question

// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
// Notes:

// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.'

answer
function minValue(values){
  //your code here
    const x = [...new Set(values)];

    const y = x.sort((a, b) => a - b);

    const result = parseInt(y.join(''));

    return result;
}

question 
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

answer

function updateLight(current) {
  
  //your code here!
  
  if(current=='green'){
         return 'yellow';

  }
    if(current=='yellow'){
         return 'red';

  }
  if(current=='red'){
         return 'green';

  }
    if(current=='red'){
         return 'green';

  }
         return 'unknown'; 
 
}

question 

// Start the server
const port = process.env.PORT || 3012;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
