const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const readInput = require('prompt-sync')();
let listaDeEstudantes = [];

// a função menu é feita para que usuário escolha dentre algumas opções, qual ele deseja
function menuPrincipal() {
    while (true) {
        console.log('\nMenu Principal:');
        console.log('1 - Registrar estudante');
        console.log('2 - Procurar estudante por ID');
        console.log('3 - Calcular média de notas');
        console.log('0 - Sair do programa');

        const escolha = parseInt(readInput('Escolha uma opção: '));

        switch (escolha) {
            case 0:
                console.log('Saindo do programa.');
                process.exit();
            case 1:
                registrarEstudante();
                break;
            case 2:
                encontrarEstudantePorID();
                break;
            case 3:
                calcularMediaNotas();
                break;
            default:
                console.log('Opção inválida. Por favor, escolha uma das opções listadas.');
        }
    }
}

//nesta função o  objetivo é fazer o registro do estudante, pedindo os dados e salvando o registro
function registrarEstudante() { 
    const idEstudante = parseInt(readInput('Insira o ID do estudante: '));
    const nomeEstudante = readInput('Insira o nome do estudante: ');
    const notaEstudante = parseFloat(readInput('Insira a nota do estudante: '));

    listaDeEstudantes.push({ id: idEstudante, nome: nomeEstudante, nota: notaEstudante });
    console.log('Estudante registrado com sucesso!');
}

// essa função é a função de busca do estudante pelo ID, onde o número do id é fornecido pelo usuário e após a busca o programa diz se o estudante foi ou não encontrado
// e se ele for encontrado, os dados do resgitro são apresentados
function encontrarEstudantePorID() {
    const idPesquisa = parseInt(readInput('Insira o ID do estudante para busca: '));
    const resultado = listaDeEstudantes.find(estudante => estudante.id === idPesquisa);

    if (resultado) {
        console.log('Estudante encontrado:', resultado);
    } else {
        console.log('Estudante não encontrado.');
    }
}

// a função calcula a média de notas dos estudantes com base nos registros realizados
function calcularMediaNotas() {
    if (listaDeEstudantes.length === 0) {
        console.log('Não existem estudantes registrados.');
        return;
    }

    // aqui é feito um calculo básico de média
    const somaNotas = listaDeEstudantes.reduce((soma, estudante) => soma + estudante.nota, 0);
    const media = somaNotas / listaDeEstudantes.length;
    console.log('Média de notas dos estudantes:', media.toFixed(2));
}

menuPrincipal();
