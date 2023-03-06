const prompt = require("prompt-sync")({sigint:true});
var number =parseInt(prompt("Enter The Number "));

for(var i = 0; i <= number; i++){
    console.log(" 2 ^ "+i+" = "+Math.pow(2,i));
}