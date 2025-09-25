/*

Escreva um programa que verifica a situação de um estudante de acordo com sua média final.

*/

let media = parseFloat(prompt("Informe a média do(a) estudante, de 0 a 10:"));
const mediaInvalida = isNaN(media) || media < 0 || media > 10;
if(mediaInvalida) {
    console.log("Erro: O valor informado não é válido. Por favor, digite a média, de 0 a 10.");
} else {
    const resultado = media >= 7.0 ? "aprovado(a)" : "reprovado(a)";
    console.log(`Estudante ${resultado}.`);
}