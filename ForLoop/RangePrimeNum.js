const prompt = require("prompt-sync")({sigint:true});
let number1 = parseInt(prompt("Enter The Number1 "));
let number2 = parseInt(prompt("Enter The Number2 "));

let count = 0;
console.log(" Prime number betweem range ");

for(var i=number1;i<number2;i++){
  count = 0;
  for(var j=2;j<i;j++){
    if(i%j==0){
      count = 1;
      break;
    }
  }
  if(count == 0){
  console.log(i)
  }
}