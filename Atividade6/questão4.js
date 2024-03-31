const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let populacaoA = 80000;
const taxaCrescimentoA = 0.03;
let populacaoB = 200000;
const taxaCrescimentoB = 0.015;
let anos = 0;

while (populacaoA < populacaoB) {
    populacaoA += populacaoA * taxaCrescimentoA;
    populacaoB += populacaoB * taxaCrescimentoB;
    anos++;
}

console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
