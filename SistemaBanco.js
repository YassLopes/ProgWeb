let prompt = require('prompt-sync')();

mainmenu();

function mainmenu(){

    console.log("Bem-Vindo ao Sistema Bancário!");

    console.log("Escolha uma opção:\n 1 - Verificar Saldo \n 2 - Saque \n 3 - Depósito \n 4 - Transferência \n 5 - Cheque Especial \n 6 - Atualização de Cadastro \n 7 - Limite de Crédito");
    let operacao = Number(prompt("Digite a opção desejada: "));

    if(operacao==1){
        function verificarSaldo() {
            let saldo = Number(prompt("Digite o saldo:"));
        
            if (saldo > 0) {
                console.log("Saldo positivo");
            } else {
                console.log("Saldo negativo");
            }
        }
        verificarSaldo();
    } else if (operacao==2){
        let valorSaque = Number(prompt("Digite o valor desejado: "));
        let saldoAtual = 1000;

        function realizarSaque(saldoAtual, valorSaque) {
            if (valorSaque <= saldoAtual) {
            saldoAtual -= valorSaque;
            console.log("Saque realizado com sucesso. Saldo atual: R$ " + saldoAtual.toFixed(2));
            } else {
              console.log("Saldo insuficiente");
             }
        }
        realizarSaque(saldoAtual, valorSaque);
    } else if (operacao==3){
        let valorDeposito = Number(prompt("Digite o valor do deposito: "));
        let saldoAtual = 1000;

        function realizarDeposito(saldoAtual, valorDeposito) {
        saldoAtual += valorDeposito;
        console.log(`Depósito realizado com sucesso. Novo saldo: R$${saldoAtual.toFixed(2)}`);
        }  
        realizarDeposito(saldoAtual, valorDeposito);
    } else if (operacao==4){
        let saldoOrigem = Number(prompt("Digite o valor do saldo origem: "));
        let saldoDestino = Number(prompt("Digite o valor do saldo destino: "));
        let valorTransferencia = Number(prompt("Digite o valor da transferência: "));
        let limiteTransferencia = 1000;

        function realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia) {
            if (valorTransferencia <= saldoOrigem && valorTransferencia <= limiteTransferencia) {
            saldoOrigem -= valorTransferencia;
            saldoDestino += valorTransferencia;
            console.log("Transferência realizada com sucesso");
            } else if (valorTransferencia > saldoOrigem) {
            console.log("Saldo insuficiente para transferência");
            } else {
            console.log("Valor excede o limite de transferência");
            }
        }
        realizarTransferencia(saldoOrigem, saldoDestino, valorTransferencia, limiteTransferencia);
    } else if (operacao==5){
        let saldo = Number(prompt("Digite o valor do saldo: "));

        function checarChequeEspecial(saldo) {
            if (saldo < 0) {
            console.log("Dentro do limite do cheque especial");
            } else {
            console.log("Fora do limite do cheque especial");
            }
        }
        checarChequeEspecial(saldo); 
    } else if (operacao==6){
        let cadastroAtivoInput = prompt("O cadastro está ativo? (Digite 'true' para sim, 'false' para não)");
        let cadastroAtivo = cadastroAtivoInput.toLowerCase() === 'true';
        let saldo = Number(prompt("Digite o valor do saldo: "));

        function atualizarCadastro(cadastroAtivo, saldo) {
            if (cadastroAtivo) {
            if (saldo > 0) {
                console.log("Cadastro ativo e saldo positivo");
            } else {
                console.log("Cadastro ativo mas precisa regularizar saldo");
            }
            } else {
            console.log("Por favor, atualize seu cadastro");
            }
        }
        atualizarCadastro(cadastroAtivo, saldo);
    } else if (operacao==7){
        let renda = Number(prompt("Digite o valor da sua renda: "));
        let dividas = Number(prompt("Digite o valor das suas dívidas: "));

        function limiteCredito(renda, dividas){
            if (renda<=dividas){
                console.log("Você não possui score para solicitar crédito.");
            } else if (renda>dividas){
                console.log("Você possui score para solicitar crédito!");
            }
        }
        limiteCredito(renda, dividas);

    } else {
        console.log("Opção inválida.");
        mainmenu();
    }
}
