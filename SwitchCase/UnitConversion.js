
const prompt=require("prompt-sync")({sigint:true});
const conversionType = parseInt(prompt("Enter the conversion type:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet"+" "+":"));

const lengthValue = parseFloat(prompt("Enter the length value to convert:"));

let convertedLengthValue;

switch (conversionType) {
  case 1:
    convertedLengthValue = lengthValue * 12;
    console.log(`${lengthValue} feet = ${convertedLengthValue} inches`);
    break;
  case 2:
    convertedLengthValue = lengthValue / 3.281;
    console.log(`${lengthValue} feet = ${convertedLengthValue} meters`);
    break;
  case 3:
    convertedLengthValue = lengthValue / 12;
    console.log(`${lengthValue} inches = ${convertedLengthValue} feet`);
    break;
  case 4:
    convertedLengthValue = lengthValue * 3.281;
    console.log(`${lengthValue} meters = ${convertedLengthValue} feet`);
    break;
  default:
    console.log("Invalid conversion type. ");
}
