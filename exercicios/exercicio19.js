/*

Escreva um programa que verifica se um número está dentro de um determinado intervalo.

*/

let primeiroValor = parseFloat(prompt("Informe o valor inicial do intervalo:"));
let segundoValor = parseFloat(prompt("Informe o valor final do intervalo:"));
let numero = parseFloat(prompt("Digite um número qualquer:"));
let minimo, maximo;
if(isNaN(primeiroValor) || isNaN(segundoValor) || isNaN(numero)) {
    console.log("Erro: Os valores informados não são válidos. Por favor, informe os valores inicial e final, e o número.");
} else {
    if(primeiroValor <= segundoValor) {
        minimo = primeiroValor;
        maximo = segundoValor;
    } else {
        minimo = segundoValor;
        maximo = primeiroValor;
    }
    if(numero >= minimo && numero <= maximo) {
        console.log(`${numero} está dentro do intervalo entre ${minimo} e ${maximo}.`);
    } else {
        console.log(`${numero} não está dentro do intervalo entre ${minimo} e ${maximo}.`);
    }
}