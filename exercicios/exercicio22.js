/*

Escreva um programa que determina o número de dias em um mês.

*/

let mesInformado = prompt("Digite o mês do ano:");
// Remover possíveis sinais diacríticos e colocar todas as letras minúsculas
let mes = mesInformado.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
switch(mes) {
    case "janeiro":
    case "marco":
    case "maio":
    case "julho":
    case "agosto":
    case "outubro":
    case "dezembro":
        console.log(`${mesInformado} tem 31 dias.`);
        break;
    case "fevereiro":
        console.log(`${mesInformado} tem 28 dias em ano não bissexto, e 29 dias em ano bissexto.`);
        break;
    case "abril":
    case "junho":
    case "setembro":
    case "novembro":
        console.log(`${mesInformado} tem 30 dias.`);
        break;
    default:
        console.log("Erro: O valor informado não é válido. Por favor, informe um mês do ano.");
        break;
}