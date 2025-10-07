/*

Usando um laço for, crie um programa que calcule o fatorial de um número.

*/

let numero = parseInt(prompt("Digite um número inteiro não negativo, para cálculo do fatorial:"));
const numeroInvalido = isNaN(numero) || numero < 0;
if(numeroInvalido) {
    console.log("Erro: O valor informado não é válido. Por favor, digite um número inteiro não negativo.");
} else {
    let resultado = 1;
    for(let i = 0; i < numero; i++) {
        resultado = resultado * (numero - i);
    }
    console.log(`O fatorial de ${numero} é ${resultado}.`);
}