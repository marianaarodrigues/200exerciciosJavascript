/*

Escreva um programa que verifica se um ano é bissexto.

*/

let ano = parseInt(prompt("Digite um ano qualquer:"));
if(isNaN(ano)) {
    console.log("Erro: O ano informado não é valido. Por favor, informe um ano qualquer.");
} else if((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    console.log(`${ano} é ano bissexto.`);
} else {
    console.log(`${ano} não é ano bissexto.`);
}