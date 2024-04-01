function gerarFibonacciAte500() {
    let atual = 1;
    let anterior = 0;

    console.log("Série de Fibonacci até que o valor seja maior que 500:");
    console.log(anterior); // Primeiro termo
    console.log(atual); // Segundo termo

    while (atual + anterior <= 700) {
        let proximo = atual + anterior;
        console.log(proximo);
        anterior = atual;
        atual = proximo;
    }
}

gerarFibonacciAte500();
