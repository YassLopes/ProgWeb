const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function tribonacci(n) {
    if (n === 0 || n === 1) return 0;
    if (n === 2) return 1;
    return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
}

rl.question('Digite o valor de N para calcular o N-ésimo termo da sequência de Tribonacci: ', (nInput) => {
    const n = parseInt(nInput);
    if (!isNaN(n) && n >= 0) {
        const tribonacciNumber = tribonacci(n);
        console.log(`O termo ${n} da sequência de Tribonacci é: ${tribonacciNumber}`);
    } else {
        console.log("Por favor, digite um número inteiro positivo válido.");
    }
    rl.close();
});
