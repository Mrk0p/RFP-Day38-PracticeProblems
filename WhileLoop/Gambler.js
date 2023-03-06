let money = 100;
let bet = 1;
let winCount = 0;
let betCount = 0;

while (money > 0 && money < 200) {
  betCount++;
  if (Math.random() < 0.5) {
    // Win
    money += bet;
    winCount++;
  } else {
    // Lose
    money -= bet;
  }
}

console.log(`Final Money: ${money}`);
console.log(`Number of bets made: ${betCount}`);
console.log(`Number of times won: ${winCount}`);
