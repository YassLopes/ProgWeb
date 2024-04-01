const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise(resolve => readline.question(query, resolve));
  
  async function calcularMediaNotas() {
    const n = await question('Quantas notas você deseja inserir? ');
    const numeroNotas = parseInt(n, 10);
  
    if (isNaN(numeroNotas) || numeroNotas <= 0) {
      console.log('Por favor, insira um número inteiro positivo.');
      readline.close();
      return;
    }
  
    let somaNotas = 0;
  
    for (let i = 0; i < numeroNotas; i++) {
      const nota = await question(`Insira a nota ${i + 1}: `);
      const valorNota = parseFloat(nota);
  
      if (isNaN(valorNota)) {
        console.log('Valor inválido inserido. Por favor, insira apenas números.');
        i--;
        continue;
      }
  
      somaNotas += valorNota;
    }
  
    const media = somaNotas / numeroNotas;
    console.log(`A média aritmética das notas é: ${media.toFixed(2)}`);
  
    readline.close();
  }
  
  calcularMediaNotas();
  