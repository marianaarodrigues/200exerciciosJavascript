/*

Escreva um programa que imprime uma classificação baseada na nota de um aluno.

*/

let nota = parseFloat(prompt("Informe a nota do(a) estudante, de 0 a 10:"));
const notaInvalida = isNaN(nota) || nota < 0 || nota > 10;
if(notaInvalida) {
    console.log("Erro: O valor informado é inválido. Por favor, informe a nota de 0 a 10.");
} else {
    const mensagem = nota >= 7 ? "aprovado(a)" : "reprovado(a)";
    console.log(`Considerando que a nota mínima para aprovação é 7, estudade ${mensagem}.`);
}