const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise((resolve) => readline.question(query, resolve));
  
  async function calcularSomaEMedia() {
    let soma = 0;
    const quantidadeNumeros = 5;
  
    for (let i = 0; i < quantidadeNumeros; i++) {
        let numero = await question(`Insira o ${i + 1}º número: `);
        numero = parseFloat(numero);
  
      if (!isNaN(numero)) {
        soma += numero;
      } else {
        console.log("Por favor, insira um número válido.");
        i--;
      }
    }
  
    const media = soma / quantidadeNumeros;
    console.log(`A soma dos números é: ${soma}`);
    console.log(`A média dos números é: ${media}`);
  
    readline.close();
  }
  
  calcularSomaEMedia();
  