const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise(resolve => readline.question(query, resolve));
  
  async function encontrarPrimos() {
    const n = await question('Digite um número inteiro N para encontrar todos os primos entre 1 e N: ');
    const numeroN = parseInt(n, 10);
    let totalDivisoes = 0;
  
    if (isNaN(numeroN) || numeroN < 2) {
      console.log('Por favor, insira um número inteiro maior ou igual a 2.');
      readline.close();
      return;
    }
  
    console.log(`Números primos entre 1 e ${numeroN}:`);
    for (let num = 2; num <= numeroN; num++) {
      let ehPrimo = true;
  
      for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
        totalDivisoes++;
        if (num % divisor === 0) {
          ehPrimo = false;
          break;
        }
      }
  
      if (ehPrimo) {
        console.log(num);
      }
    }
  
    console.log(`Total de divisões executadas para encontrar os números primos: ${totalDivisoes}`);
    readline.close();
  }
  
  encontrarPrimos();
  