const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise(resolve => readline.question(query, resolve));
  
  async function gerarTabuada() {
    const numero = await question('Informe o número (entre 1 e 10) para gerar a tabuada: ');
    const numeroInt = parseInt(numero, 10);
  
    if (isNaN(numeroInt) || numeroInt < 1 || numeroInt > 10) {
      console.log('Por favor, insira um número inteiro entre 1 e 10.');
      readline.close();
      return;
    }
  
    console.log(`Tabuada de ${numeroInt}:`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${numeroInt} X ${i} = ${numeroInt * i}`);
    }
  
    readline.close();
  }
  
  gerarTabuada();
  