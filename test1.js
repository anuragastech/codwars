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


function arrayDiff(a, b) {

    x=[]
   
   
   for (let i=1;i<=b.length;i++){
     x.push(a[i]-b[i])
     return x;
   }
 }
 