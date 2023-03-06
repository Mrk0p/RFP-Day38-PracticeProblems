const prompt = require("prompt-sync")({sigint:true});
const number =parseInt(prompt("Enter The Number "));

switch (number) {
    case(10):
     console.log("Ten");
    break;
    case(100): 
    console.log("Hundred");
    break;
    case(1000): 
    console.log("Thousand");
    break;
    case(10000):
     console.log("Ten Thousand");
    break;
    case(100000): 
    console.log("One Lakh");
    break;
    default:
    console.log(" Valid Input ");
}