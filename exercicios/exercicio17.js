/*

Escreva um programa que determina se um número é par ou ímpar.

*/

let numero = Number(prompt("Informe um número inteiro qualquer:"));

if (!Number.isInteger(numero)) {
    console.log("Erro: O valor informado não é válido. Por favor, digite um número inteiro.");
} else if (numero % 2 == 0) {
    console.log("O número informado é par.");
} else {
    console.log("O número informado é ímpar.");
}