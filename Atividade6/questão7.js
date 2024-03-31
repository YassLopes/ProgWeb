const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise((resolve) => readline.question(query, resolve));
  
  async function encontrarMaiorNumero() {
    let maiorNumero = -Infinity;
  
    for (let i = 0; i < 5; i++) {
      let numero = await question(`Insira o ${i + 1}º número: `);
      numero = parseFloat(numero);
  
      if (!isNaN(numero)) {
        if (numero > maiorNumero) {
          maiorNumero = numero;
        }
      } else {
        console.log("Por favor, insira um número válido.");
        i--;
      }
    }
  
    console.log(`O maior número inserido foi: ${maiorNumero}`);
    readline.close();
  }
  
  encontrarMaiorNumero();
  