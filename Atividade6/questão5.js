const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  const question = (query) => new Promise((resolve) => readline.question(query, resolve));
  
  async function calcularCrescimento() {
    const populacaoA = await question("Informe a população do país A: ");
    const taxaCrescimentoA = await question("Informe a taxa de crescimento anual do país A (em %): ");
    const populacaoB = await question("Informe a população do país B: ");
    const taxaCrescimentoB = await question("Informe a taxa de crescimento anual do país B (em %): ");
  
    let popa = parseFloat(populacaoA), tca = parseFloat(taxaCrescimentoA) / 100,
        popb = parseFloat(populacaoB), tcb = parseFloat(taxaCrescimentoB) / 100;
  
    if (isNaN(popa) || isNaN(tca) || isNaN(popb) || isNaN(tcb) || popa <= 0 || tca <= 0 || popb <= 0 || tcb <= 0) {
      console.log("Por favor, informe valores válidos para todas as entradas.");
      return false;
    }
  
    let anos = 0;
    while (popa < popb) {
      popa += popa * tca;
      popb += popb * tcb;
      anos++;
    }
  
    console.log(`Serão necessários ${anos} anos para que a população do país A ultrapasse ou iguale a população do país B.`);
    return true;
  }
  
  async function iniciarCalculo() {
    let continuar = true;
    while (continuar) {
      const sucesso = await calcularCrescimento();
      if (sucesso) {
        const resposta = await question("Deseja realizar outro cálculo? (s/n): ");
        continuar = resposta.toLowerCase() === 's';
      } else {
        continuar = false;
      }
    }
    readline.close();
  }
  
  iniciarCalculo();
  