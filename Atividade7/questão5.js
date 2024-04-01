const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise(resolve => readline.question(query, resolve));
  
  async function analisarNumeros() {
    const n = await question('Quantos números você deseja inserir? ');
    const totalNumeros = parseInt(n, 10);
  
    if (isNaN(totalNumeros) || totalNumeros <= 0) {
      console.log('Por favor, insira um número inteiro positivo.');
      readline.close();
      return;
    }
  
    let maior = -Infinity;
    let menor = Infinity;
    let soma = 0;
  
    for (let i = 0; i < totalNumeros; i++) {
      const num = await question(`Insira o número ${i + 1}: `);
      const numero = parseFloat(num);
  
      if (isNaN(numero)) {
        console.log('Por favor, insira um número válido.');
        i--; 
        continue;
      }
  
      soma += numero;
      if (numero > maior) maior = numero;
      if (numero < menor) menor = numero;
    }
  
    console.log(`Maior valor: ${maior}`);
    console.log(`Menor valor: ${menor}`);
    console.log(`Soma dos valores: ${soma}`);
  
    readline.close();
  }
  
  analisarNumeros();
  