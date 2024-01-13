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
// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code


answer
const findDifference = (a, b) =>
Math.abs(a.reduce((acc, val) =>
 acc * val, 1) - b.reduce((acc, val) => acc * val, 1));

 question 
//  Write a function to split a string and convert it into an array of words.
// Examples (Input ==> Output):

// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

answer
function stringToArray(string){

	// code code code

    const x = string.split(' ');

    return x;
}

question 
// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

answers 
var countSheep = function (num){

  let x = "";
  for (let i = 1; i <= num; i++) {
      x += `${i} sheep...`;
  }
  return x.trim();
}
question 

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input

//     customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.

// output

// The function should return an integer, the total time required.

answer 
function queueTime(customers, n) {
  //TODO

    const x = new Array(n).fill(0);
 
   for(let waitTime of customers){
      const minWaitTime = x.indexOf(Math.min(...x));
      x[minWaitTime] += waitTime;
   }
   return Math.max(...x);
}
questions 
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

answer 
function accum(s) {
	// your code

  var letters = s.split(''), words = [];

  for(var i = 0; i < letters.length; i++) {
    words.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
  }

  return words.join('-');
}
questions
// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

// Example:

// Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].

// Addendum:

answers 

"use strict";

function flattenAndSort(array) {
  let x = array.reduce(function(acc, cv) {
    return acc.concat(cv);
  }, []);

  let sorted = x.sort((a, b) => a - b);

  return sorted;
}

question 
// Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

// Write a function which takes a list of strings and returns each line prepended by the correct number.

// The numbering starts at 1. The format is n: string. Notice the colon and space in between.

// Examples: (Input --> Output)

// [] --> []
// ["a", "b", "c"] --> ["1: a", "2: b", "3: c"]

answer 
var number=function(array){
  //your awesome code here
  return array.map((x, index) => `${index + 1}: ${x}`);
}

question 
// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5

// Let's assume that all numbers in the input will be integer values.

answer 
function sumDigits(number) {

  const digits = Math.abs(number).toString().split('');

  const sum = digits.reduce((acc, digit) => acc + parseInt(digit), 0);

  return sum;
}

question 
// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
// 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
// 4 --> 0 (because 4 is already a one-digit number)
answer 
function persistence(num, count = 0) {
  if (num < 10) {
      return count;
  } else {
      const newvalue = num
          .toString()
          .split('')
          .reduce((product, digit) => product * parseInt(digit), 1);

      return persistence(newvalue, count + 1);
  }
}
questions 
// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55

// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

//     Find the unique number (this kata)
//     Find the unique string
//     Find The Unique

Answer 
function findUniq(arr) {
  // do magic

    const count = {};

    // Iterate through the array and count occurrences
    for (let num of arr) {
        count[num] = (count[num] || 0) + 1;
    }

    for (let num in count) {
        if (count[num] === 1) {
            return parseFloat(num); 
        }
    }
}
question 
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

answer
function isPangram(string) {
  const lowercaseString = string.toLowerCase();

  const alphabet = Array(26).fill(false);

  for (const char of lowercaseString) {
      if (/[a-z]/.test(char)) {
          alphabet[char.charCodeAt(0) - 'a'.charCodeAt(0)] = true;
      }
  }

  return alphabet.every((isPresent) => isPresent);
}

question 
// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
// Examples

//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
answers 

function digitalRoot(n) {
  const digits = n.toString().split('').map(Number);

  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  if (sum > 9) {
    return digitalRoot(sum);
  } else {
    return sum;
  }
}
questions 
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

answer 
function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

question 
// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5

Answer 
function litres(time) {
  let x = Math.floor(time * 0.5);
  return x;
}








// Start the server
const port = process.env.PORT || 3012;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
