const prompt = require("prompt-sync")({sigint:true});
let number = parseInt(prompt("Enter The Number "));
let count = 0;

for( var i=2;i<number;i++){
    if(number%i==0){
      count = 1;
      break;
    }
  }
  
  if(count == 0){
    console.log(number+" is a prime number.");
  } else {
      console.log(number+" is not a prime number.");
  }