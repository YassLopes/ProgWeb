const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somaRecursiva(N, somaParcial = "") {
    if (N === 1) {
        return { soma: `1${somaParcial}`, resultado: 1 };
    } else {
        let resAnterior = somaRecursiva(N - 1, ` + 1/${N}${somaParcial}`);
        return { soma: resAnterior.soma, resultado: resAnterior.resultado + 1/N };
    }
}

rl.question('Digite o valor de N: ', (answer) => {
  const N = parseInt(answer);
  if (!isNaN(N) && N > 0) {
    const resultado = somaRecursiva(N);
    console.log(`O resultado da soma 1 +...+ 1/${N} para N = ${N} é: ${resultado.soma} = ${resultado.resultado}`);
  } else {
    console.log("Por favor, digite um número inteiro positivo válido.");
  }
  
  rl.close();
});
