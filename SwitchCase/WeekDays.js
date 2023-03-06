const prompt = require("prompt-sync")({sigint:true});
const number = parseInt(prompt("Enter a number: "));


let dayOfWeek;

switch (number) {
  case 1:
    dayOfWeek = "Sunday";
    break;
  case 2:
    dayOfWeek = "Monday";
    break;
  case 3:
    dayOfWeek = "Tuesday";
    break;
  case 4:
    dayOfWeek = "Wednesday";
    break;
  case 5:
    dayOfWeek = "Thursday";
    break;
  case 6:
    dayOfWeek = "Friday";
    break;
  case 7:
    dayOfWeek = "Saturday";
    break;
  default:
    console.log("Invalid number .");
}

if (dayOfWeek) {
  console.log(dayOfWeek);
}
