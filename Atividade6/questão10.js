const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise(resolve => readline.question(query, resolve));
  
  async function gerarNumerosIntervalo() {
    const num1 = parseInt(await question('Digite o primeiro número inteiro: '), 10);
    const num2 = parseInt(await question('Digite o segundo número inteiro: '), 10);
  
    if (isNaN(num1) || isNaN(num2)) {
      console.log('Por favor, insira números inteiros válidos.');
      readline.close();
      return;
    }
  
    const inicio = Math.min(num1, num2) + 1;
    const fim = Math.max(num1, num2);
  
    console.log(`Números inteiros no intervalo entre ${num1} e ${num2}:`);
    for (let i = inicio; i < fim; i++) {
      console.log(i);
    }
  
    readline.close();
  }
  
  gerarNumerosIntervalo();
  