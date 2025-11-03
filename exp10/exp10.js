// Get the number from command line argument
const num = parseFloat(process.argv[2]);

// Validate input
if (isNaN(num) || num === 0) {
  console.log("Please enter a valid number (non-zero).");
  process.exit(1);
}

// FOR loop
console.log(`\nMultiplication Table of ${num} using FOR loop:`);
for (let i = 1; i <= 10; i++) {
  console.log(`${num} x ${i} = ${(num * i).toFixed(2)}`);
}

// WHILE loop
console.log(`\nMultiplication Table of ${num} using WHILE loop:`);
let j = 1;
while (j <= 10) {
  console.log(`${num} x ${j} = ${(num * j).toFixed(2)}`);
  j++;
}

// DO-WHILE loop
console.log(`\nMultiplication Table of ${num} using DO-WHILE loop:`);
let k = 1;
do {
  console.log(`${num} x ${k} = ${(num * k).toFixed(2)}`);
  k++;
} while (k <= 10);

console.log("\nMultiplication tables generated successfully!");
