const prompt = require("prompt-sync")({sigint:true});
const range =parseInt(prompt("Enter The Range "));

let value = 1;
let i = 1;
while(value<256 && i<=range){
    value = Math.pow(2,i);
    console.log(2+"^"+i+" = "+value);
    i++;
}