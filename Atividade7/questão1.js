const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise(resolve => readline.question(query, resolve));
  
  async function calcularPotencia() {
    const base = await question('Informe a base: ');
    const expoente = await question('Informe o expoente: ');
    let resultado = 1;
  
    const baseInt = parseInt(base, 10);
    const expoenteInt = parseInt(expoente, 10);
  
    if (isNaN(baseInt) || isNaN(expoenteInt)) {
      console.log('Por favor, insira números inteiros válidos.');
      readline.close();
      return;
    }
  
    for (let i = 0; i < expoenteInt; i++) {
      resultado *= baseInt;
    }
  
    console.log(`Resultado: ${baseInt} elevado a ${expoenteInt} = ${resultado}`);
    readline.close();
  }
  
  calcularPotencia();
  