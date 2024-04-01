const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise(resolve => readline.question(query, resolve));
  
  async function contarParesEImpares() {
    let contPares = 0;
    let contImpares = 0;
  
    for (let i = 0; i < 10; i++) {
      const numero = parseInt(await question(`Digite o número ${i + 1}: `), 10);
  
      if (!isNaN(numero)) {
        if (numero % 2 === 0) {
          contPares++;
        } else {
          contImpares++;
        }
      } else {
        console.log("Por favor, insira um número inteiro válido.");
        i--;
      }
    }
  
    console.log(`Quantidade de números pares: ${contPares}`);
    console.log(`Quantidade de números ímpares: ${contImpares}`);
  
    readline.close();
  }
  
  contarParesEImpares();
  