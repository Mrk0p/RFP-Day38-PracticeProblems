const prompt = require("prompt-sync")({sigint:true});
const number = parseInt(prompt("Enter a number: "));

let placeValue;

if (number < 10) {
  placeValue = "unit";
} 
else if (number < 100) {
  placeValue = "Ten";
} 
else if (number < 1000) {
  placeValue = "Tundred";
}
 else if (number < 10000) {
  placeValue = "Thousand";
} 
else if (number < 100000) {
  placeValue = "Ten Thousand";
}
 else {
  placeValue = "One Lakh";
}

console.log(`${number} ${placeValue}`);



