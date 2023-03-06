let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
  const coin = Math.random() < 0.5 ? 'heads' : 'tails';
  if (coin === 'heads') {
    headsCount++;
  } else {
    tailsCount++;
  }
  console.log(`Coin: ${coin}, Heads: ${headsCount}, Tails: ${tailsCount}`);
}

if (headsCount === 11) {
  console.log('Heads wins!');
} else {
  console.log('Tails wins!');
}
