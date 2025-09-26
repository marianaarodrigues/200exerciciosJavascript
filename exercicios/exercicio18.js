/*

Escreva um programa que verifica se uma pessoa pode dirigir com base na idade.

*/

let idade = parseInt(prompt("Informe a idade da pessoa:"));
if(isNaN(idade)) {
    console.log("Erro: O valor informado não é válido. Por favor, informe a idade da pessoa.");
} else if(idade >= 18) {
    console.log("A pessoa é maior de idade e pode dirigir.");
} else {
    console.log("A pessoa é menor de idade e não pode dirigir.");
}