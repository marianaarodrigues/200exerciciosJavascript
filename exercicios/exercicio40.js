/*

Usando um laço while, crie um programa que inverta uma string.

*/

let stringInformada = prompt("Digite uma palavra ou frase qualquer:");
let stringInvertida = "";
const n = stringInformada.length;
let i = n - 1;
while(i >= 0) {
    const caractere = stringInformada[i];
    stringInvertida = stringInvertida + caractere;
    i--;
}
console.log(`A palavra/frase "${stringInformada}" invertida fica "${stringInvertida}".`);