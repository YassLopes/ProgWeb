const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

for (let i = 1; i <= 20; i++) {
    console.log(i);
  }

let numeros = '';

for (let i = 1; i <= 20; i++) {
  numeros += i + ' ';
}

console.log(numeros.trim()); 