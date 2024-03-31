const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const solicitarCredenciais = () => {
  rl.question('Insira o nome de usuário: ', (usuario) => {
    rl.question('Insira a senha: ', (senha) => {
      if (senha === usuario) {
        console.log('Erro: A senha não pode ser igual ao nome de usuário. Por favor, tente novamente.');
        solicitarCredenciais();
      } else {
        console.log('Credenciais aceitas!');
        rl.close();
      }
    });
  });
};

solicitarCredenciais();
