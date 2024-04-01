const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise(resolve => readline.question(query, resolve));
  
  async function calcularFatorial() {
    const num = await question('Digite um número inteiro para calcular o fatorial: ');
    const numero = parseInt(num, 10);
  
    if (isNaN(numero) || numero < 0) {
      console.log('Por favor, insira um número inteiro não negativo.');
    } else {
      let fatorial = 1;
      for (let i = 1; i <= numero; i++) {
        fatorial *= i;
      }
      console.log(`O fatorial de ${numero} é: ${fatorial}`);
    }
  
    readline.close();
  }
  
  calcularFatorial();
  