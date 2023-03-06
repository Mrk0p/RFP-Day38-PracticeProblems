const values = [
  Math.floor(Math.random() * 900) + 100,
  Math.floor(Math.random() * 900) + 100,
  Math.floor(Math.random() * 900) + 100,
  Math.floor(Math.random() * 900) + 100,
  Math.floor(Math.random() * 900) + 100
];

let minimum = values[0];
let maximum = values[0];
for (let i = 1; i < values.length; i++) {
  if (values[i] < minimum) {
    minimum = values[i];
  }
  if (values[i] > maximum) {
    maximum = values[i];
  }
}

console.log(`Random values: ${values.join(', ')}`);
console.log(`Minimum value: ${minimum}`);
console.log(`Maximum value: ${maximum}`);