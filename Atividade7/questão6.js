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
      let numero = parseFloat(await question(`Insira o número ${i + 1} (entre 0 e 1000): `));

      while (isNaN(numero) || numero < 0 || numero > 1000) {
        console.log('Número inválido. Por favor, insira um número entre 0 e 1000.');
        numero = parseFloat(await question(`Insira o número ${i + 1} (entre 0 e 1000): `));
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
  