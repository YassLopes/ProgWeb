const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const getNota = () => {
  rl.question('Por favor, insira uma nota entre 0 e 10: ', (nota) => {
    nota = Number(nota);

    if (isNaN(nota) || nota < 0 || nota > 10) {
      console.log("Valor inválido. Por favor, insira um número entre 0 e 10.");
      getNota();
    } else {
      console.log("Você inseriu uma nota válida: " + nota);
      rl.close();
    }
  });
};

getNota();
