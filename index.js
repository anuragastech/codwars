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
// answer
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


// qstions 

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




// Start the server
const port = process.env.PORT || 3012;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
