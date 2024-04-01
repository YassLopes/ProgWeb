const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise(resolve => readline.question(query, resolve));
  
  async function calcularFatorial() {
    let continuar = 's';
  
    while (continuar.toLowerCase() === 's') {
      const num = await question('Digite um número inteiro positivo menor que 16 para calcular o fatorial: ');
      const numero = parseInt(num, 10);
  
      if (isNaN(numero) || numero < 0 || numero >= 16) {
        console.log('Número inválido. Por favor, insira um número inteiro positivo e menor que 16.');
      } else {
        let fatorial = 1;
        for (let i = 1; i <= numero; i++) {
          fatorial *= i;
        }
        console.log(`O fatorial de ${numero} é: ${fatorial}`);
      }
  
      continuar = await question('Deseja calcular outro fatorial? (s/n): ');
    }
  
    readline.close();
  }
  
  calcularFatorial();
  