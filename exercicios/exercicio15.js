/*

Escreva um programa que verifica se uma palavra é um palíndromo.

*/

let palavraInformada = prompt("Digite uma palavra qualquer:");
// Remover possíveis acentos e colocar todas as letras minúsculas
let palavra = palavraInformada.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
let n = palavra.length;
let contagem = 0;
if(n % 2 == 1) {
    for(let i = 0; i < (n - 1)/2; i++) {
        if(palavra[i] == palavra[(n - 1) - i]) {
            contagem++;
        }
    }
    if(contagem == (n - 1)/2) {
        console.log(`A palavra ${palavraInformada} é um palíndromo.`);
    } else {
        console.log(`A palavra ${palavraInformada} não é palíndromo.`);
    }
} else {
    for(let i = 0; i < n/2; i++) {
        if(palavra[i] == palavra[(n - 1) - i]) {
            contagem++;
        }
    }
    if(contagem == n/2) {
        console.log(`A palavra ${palavraInformada} é um palíndromo.`);
    } else {
        console.log(`A palavra ${palavraInformada} não é palíndromo.`);
    }
}