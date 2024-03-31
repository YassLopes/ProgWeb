const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const perguntar = (questao) => new Promise(resolve => rl.question(questao, resolve));

const validarDados = async () => {
  let nome;
  do {
    nome = await perguntar('Digite o seu nome: ');
    if (nome.length <= 3) {
      console.log('Erro: o nome deve ter mais de 3 caracteres.');
    }
  } while (nome.length <= 3);

  let idade;
  do {
    idade = await perguntar('Digite a sua idade: ');
    idade = parseInt(idade, 10);
    if (isNaN(idade) || idade < 0 || idade > 150) {
      console.log('Erro: a idade deve estar entre 0 e 150.');
    }
  } while (isNaN(idade) || idade < 0 || idade > 150);

  let salario;
  do {
    salario = await perguntar('Digite o seu salário: ');
    salario = parseFloat(salario);
    if (isNaN(salario) || salario <= 0) {
      console.log('Erro: o salário deve ser maior que zero.');
    }
  } while (isNaN(salario) || salario <= 0);

  let sexo;
  do {
    sexo = await perguntar('Digite o seu sexo (f ou m): ');
    if (sexo !== 'f' && sexo !== 'm') {
      console.log('Erro: o sexo deve ser "f" ou "m".');
    }
  } while (sexo !== 'f' && sexo !== 'm');

  let estadoCivil;
  do {
    estadoCivil = await perguntar('Digite o seu estado civil (s, c, v, d): ');
    if (!['s', 'c', 'v', 'd'].includes(estadoCivil)) {
      console.log('Erro: o estado civil deve ser um dos seguintes: s, c, v, d.');
    }
  } while (!['s', 'c', 'v', 'd'].includes(estadoCivil));

  console.log(`Cadastro realizado com sucesso!\nNome: ${nome}\nIdade: ${idade}\nSalário: ${salario}\nSexo: ${sexo}\nEstado Civil: ${estadoCivil}`);
  rl.close();
};

validarDados();
