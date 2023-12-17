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


// Start the server
const port = process.env.PORT || 3012;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
