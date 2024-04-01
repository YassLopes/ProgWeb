const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise(resolve => readline.question(query, resolve));
  
  async function verificarPrimoEDivisores() {
    const num = await question('Digite um número inteiro para verificar se é primo: ');
    const numero = parseInt(num, 10);
  
    if (isNaN(numero) || numero < 2) {
      console.log('Número inválido. Por favor, insira um número inteiro maior ou igual a 2.');
      readline.close();
      return;
    }
  
    let divisores = [];
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) {
        divisores.push(i);
        if (i !== numero / i) {
          divisores.push(numero / i);
        }
      }
    }
  
    if (divisores.length === 0) {
      console.log(`${numero} é um número primo.`);
    } else {
      console.log(`${numero} não é um número primo. Mas ele é divisível por ${divisores.join(', ')}.`);
    }
  
    readline.close();
  }
  
  verificarPrimoEDivisores();
  