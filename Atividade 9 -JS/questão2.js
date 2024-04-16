const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const getInput = require('prompt-sync')();
let registroEstudantes = {};

// a função menu é feita para que usuário escolha dentre algumas opções, qual ele deseja
function menu() {
    while (true) {
        console.log('\nMenu de Opções:');
        console.log('1 - Incluir novo estudante');
        console.log('2 - Localizar estudante por ID');
        console.log('3 - Calcular a média das notas');
        console.log('0 - Encerrar programa');

        const escolha = parseInt(getInput('Selecione uma opção: '));

        switch (escolha) {
            case 0:
                console.log('Programa encerrado.');
                process.exit();
            case 1:
                incluirEstudante();
                break;
            case 2:
                localizarEstudante();
                break;
            case 3:
                calcularMediaNotas();
                break;
            default:
                console.log('Opção inválida. Por favor, tente novamente.');
        }
    }
}

//nesta função o  objetivo é fazer o registro do estudante, pedindo os dados e salvando o registro
function incluirEstudante() {
    const idEstudante = parseInt(getInput('Informe o ID do estudante: '));
    const nomeEstudante = getInput('Informe o nome do estudante: ');
    const notaEstudante = parseFloat(getInput('Informe a nota do estudante: '));

    registroEstudantes[idEstudante] = { nome: nomeEstudante, nota: notaEstudante };
    console.log('Estudante incluído com sucesso!');
}

// essa função é a função de busca do estudante pelo ID, onde o número do id é fornecido pelo usuário e após a busca o programa diz se o estudante foi ou não encontrado
// e se ele for encontrado, os dados do resgitro são apresentados
function localizarEstudante() {
    const idEstudante = parseInt(getInput('Informe o ID do estudante para busca: '));
    const detalhesEstudante = registroEstudantes[idEstudante];

    if (detalhesEstudante) {
        console.log('Estudante localizado:', detalhesEstudante);
    } else {
        console.log('Estudante não encontrado.');
    }
}

// a função calcula a média de notas dos estudantes com base nos registros realizados
function calcularMediaNotas() {
    const todosIds = Object.keys(registroEstudantes);

    if (todosIds.length === 0) {
        console.log('Não existem estudantes registrados para calcular a média.');
        return;
    }

    let somaNotas = 0;
    todosIds.forEach(id => {
        somaNotas += registroEstudantes[id].nota;
    });

    const mediaNotas = somaNotas / todosIds.length;
    console.log('Média das notas dos estudantes:', mediaNotas.toFixed(2));
}

menu();
