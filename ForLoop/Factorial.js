const prompt = require("prompt-sync")({sigint:true});
let number = parseInt(prompt("Enter The Number "));
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial = factorial * i;
}
console.log(" Factorial Of "+number+" = "+factorial)