let prompt = require('prompt-sync')();

menuEscolha();
function menuEscolha(){

    console.log(" Bem-vindo! Desejo que você tenha uma ótima experiência :)")

    console.log("Digite 1 - Definir número impar ou par")
    console.log("Digite 2 - Calcular média de um array")
    console.log("Digite 3 - Retornar a string com todas as letras em CAIXA ALTA")
    console.log("Digite 4 - Saber se um número é primo")
    console.log("Digite 5 - Inverter a ordem dos elementos em um array")
    console.log("Digite 6 - Calular porcentagem")
    console.log("Digite 7 - Cerificar se uma palavra é um palíndromo")
    console.log("Digite 8 - Conversão em binário")
    console.log("Digite 9 - Calculo de numero fatorial")

    let escolha = Number(prompt("Digite a opção desejada: "));

    if(escolha == 1){

        let numero = Number(prompt("Digite o número para saber se é ímpar ou par: "));
        let resultado = imparPar(numero);
        
        if (resultado) {
            console.log("O número é par.");
        } else {
            console.log("O número é ímpar.");
        }
        
     
    }
    else if(escolha == 2){
        let array = [];

        while (true) {
            let numero = Number(prompt("Digite um número para armazenar no array (digite 0 para parar): "));
            if (numero === 0) {
                mediaArray(array); 
                break; 
            }
            array.push(numero); 
                    }
    }
    else if (escolha == 3){
        let strings = prompt("Digite o texto a ser convertido em caixa alta: ");
        let textoConvertido = converterMaiusculo(strings);
        console.log(textoConvertido);
    }
    else if (escolha == 4){
        let numero = Number(prompt("Digite um número Inteiro pra saber se é primo: "));
        numeroPrimo(numero);
    }
    else if (escolha == 5){
        let array = [];

        while (true) {
            let numero = Number(prompt("Digite um número para armazenar no array (digite 0 para parar): "));
            if (numero === 0) {
                inverterArray(array);
                break; 
            }
            array.push(numero); 
                    }
        
    }
    else if (escolha == 6){
        console.log("Calular porcentagem")
        let valor = parseFloat(prompt("Digite o valor:"));
        let porcentagem = parseFloat(prompt("Digite a porcentagem:"));

        calcularPorcentagem(valor, porcentagem);
    }
    else if (escolha == 7){
        let texto = prompt("Digite a palavra pra saber se é um palíndromo : ");
        let resultado = verificarPalindromo(texto);
        if (resultado) {
            console.log("É um palíndromo");
        } else {
            console.log("Não é um palíndromo");
        }

    }
    else if (escolha == 8){
        let numero = Number(prompt("Digite um número inteiro pra converter em binário: "));
        let resultado = converterBinario(numero);
        console.log(resultado);
    }
    else if(escolha == 9){
        let numero = Number(prompt("Digite um número inteiro para calcular o fatorial: "));
        let fatorial = calcularFatorial(numero);
        console.log(fatorial);
    }
    else{
        console.log("DIGITE UMA OPÇÃO VÁLIDA")
    }

}

function imparPar(numero){
    
        if (numero % 2 === 0) {
            return true;
        } else {
            return false; 
        }
    
}

function mediaArray(array){
    let total = 0;
    console.log(array);

    for(let i = 0; i < array.length; i++){
        total = total + array[i];
    }
    total = total / array.length;
    console.log("A média dos números no array é:", total);    
} 

function converterMaiusculo(strings) {
    strings = strings.toUpperCase();
    return strings;
}

function numeroPrimo(numero) {
       
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            console.log("O número não é primo.");
            return;
        }
    }
    
    console.log("O número é primo.");
}

function inverterArray(array){

    console.log("Array digitado "+array);
    console.log(" ");
    
    console.log("Array invertido ");
    for(let i = array.length - 1; i >= 0; i--){
        console.log(array[i]);
    }
}

function calcularPorcentagem(valor, porcentagem) {


    let total = valor * (1 + (porcentagem / 100));

    console.log(` ${valor} + ${porcentagem}% = ${total}`);
}

function verificarPalindromo(texto) {
    let palindromo = true;
    for (let i = 0; i < texto.length / 2; i++) {
        if (texto[i] !== texto[texto.length - 1 - i]) {
            palindromo = false;
            break;
        }
    }
    return palindromo;
}

function converterBinario(numero) {
        if (numero === 0) {
            return '0';
        }

        let binario = '';

        while (numero > 0) {
            binario = (numero % 2) + binario;
            numero = Math.floor(numero / 2);
        }

        return binario;
}

function calcularFatorial(numero) {

        if (numero === 0 || numero === 1) {
            return 1; // O fatorial de 0 e 1 é 1
        } else {
            let resultado = 1;
            for (let i = 2; i <= numero; i++) {
                resultado *= i;
            }
            return resultado;
        }
        
}