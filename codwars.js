let counter =1;
function age (number){
  if (counter>number){


    return ;
  }else {
    console.log("what ");
    counter++;
  }return age(number)
}
age(5);