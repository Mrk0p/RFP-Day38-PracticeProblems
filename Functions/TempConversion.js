const prompt = require("prompt-sync")({sigint:true});
const temperature = parseInt(prompt("Enter The Tempreature "));

function degCToDegF (temperature){
    let degF = temperature * 1.8 + 32;
    if(degF>=32 && degF<=212){
        console.log(degF + " deg F ");
    }
    else{
        console.log("Invalid input")
    }
}
function degFToDegC (temperature){
    let degC = (temperature - 32) * 0.555;
    if(degC>=0 && degC<=100){
        console.log(degC+" deg C ");
    }
    else{
        console.log("Invalid input ")
    }
}

let input = parseInt(prompt("Enter The Input "));;

switch (input) {
    case 1:degCToDegF(temperature);
        break;
    case 2: degFToDegC(temperature);
        break;
    default:console.log("Invalid temperature.");
        break;
}