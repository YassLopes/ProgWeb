const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function potenciaRecursivaEficiente(x, k) {
    if (k === 0) {
        return 1;
    }
    else if (k < 0) {
        return 1 / potenciaRecursivaEficiente(x, -k);
    }
    else if (k % 2 === 0) {
        let halfPower = potenciaRecursivaEficiente(x, k / 2);
        return halfPower * halfPower;
    }
    else {
        return x * potenciaRecursivaEficiente(x, k - 1);
    }
}

rl.question('Digite o valor de x: ', (xInput) => {
    const x = parseInt(xInput);
    rl.question('Digite o valor de k: ', (kInput) => {
        const k = parseInt(kInput);
        if (!isNaN(x) && !isNaN(k)) {
            const resultado = potenciaRecursivaEficiente(x, k);
            console.log(`O resultado de ${x} elevado a ${k} é: ${resultado}`);
        } else {
            console.log("Por favor, digite números inteiros válidos para x e k.");
        }
        rl.close();
    });
});
