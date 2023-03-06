const prompt = require("prompt-sync")({sigint:true});
let number = parseInt(prompt("Enter The Number "));
let harmonicNum = 0;

for( var i=1;i<=number;i++){
    harmonicNum += 1/i;
}

console.log("Harmonic Number = "+harmonicNum);