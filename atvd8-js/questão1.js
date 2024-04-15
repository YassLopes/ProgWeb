const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somaAteN(N, somaParcial = "", total = 0) {
    if (N === 1) {
        total += 1;
        somaParcial += `${N}`;
        return `${somaParcial}=${total}`;
    } else {
        let resultado = somaAteN(N - 1, somaParcial, total);
        let [partialSum, currentTotal] = resultado.split("="); 
        currentTotal = parseInt(currentTotal) + N;
        if (partialSum) {
            partialSum += `+${N}`;
        } else {
            partialSum = `${N}`;
        }
        return `${partialSum}=${currentTotal}`;
    }
}

rl.question('Digite o valor de N: ', (answer) => {
  const N = parseInt(answer);
  if (!isNaN(N) && N > 0) {
    const resultado = somaAteN(N);
    console.log("A soma de 1 até", N, "é:", resultado);
  } else {
    console.log("Por favor, digite um número inteiro positivo válido.");
  }
  
  rl.close();
});
