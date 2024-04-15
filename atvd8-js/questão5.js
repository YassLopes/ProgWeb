const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function numeroPell(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;
    return 2 * numeroPell(n - 1) + numeroPell(n - 2);
}

rl.question('Digite o valor de N para calcular o N-ésimo número de Pell: ', (nInput) => {
    const n = parseInt(nInput);
    if (!isNaN(n) && n >= 0) {
        const pellNumber = numeroPell(n);
        console.log(`O número de Pell para N=${n} é: ${pellNumber}`);
    } else {
        console.log("Por favor, digite um número inteiro positivo válido.");
    }
    rl.close();
});
