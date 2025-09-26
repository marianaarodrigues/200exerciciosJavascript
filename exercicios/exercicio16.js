/*

Escreva um programa que determina o maior entre três números.

*/

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
let num3 = parseFloat(prompt("Digite o terceiro número:"));
if(isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    console.log("Erro: Os valores informados não são válidos. Por favor, digite três números quaisquer.");
} else if(num1 >= num2 && num1 >= num3) {
    console.log(`${num1} é o maior número.`);
} else if(num2 >= num1 && num2 >= num3) {
    console.log(`${num2} é o maior número.`);
} else if(num3 >= num1 && num3 >= num2) {
    console.log(`${num3} é o maior número.`);
}