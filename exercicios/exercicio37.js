/*

Usando um laço while, imprima a soma dos quadrados dos primeiros 10 números naturais.

*/

// Considerando que os números naturais começam com 1: 1, 2, 3, 4, 5, ...
let soma = 0;
let i = 1;
while(i <= 10) {
    soma += i * i;
    i++;
}
console.log(`A soma dos quadrados dos primeiros 10 números naturais é: ${soma}.`);