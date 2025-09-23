/*

Escreva um programa que recebe um número e verifica se ele é positivo, negativo ou zero.    

*/

let numero = parseFloat(prompt("Digite um número qualquer:"));
if(isNaN(numero)) {
    console.log("Erro: Valor informado não é válido. Por favor, digite um número qualquer.");
} else if(numero < 0) {
    console.log(`O número ${numero} é negativo.`);
} else if(numero == 0) {
    console.log(`O número ${numero} é igual a zero.`);
} else {
    console.log(`O número ${numero} é positivo.`);
}