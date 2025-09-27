/*

Escreva um programa que determina a estação do ano com base no mês.

*/

let mesInformado = prompt("Digite o mês do ano:");
// Remover possíveis sinais diacríticos e colocar todas as letras minúsculas
let mes = mesInformado.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
switch(mes) {
    case "janeiro":
    case "fevereiro":
        console.log("Verão.");
        break;
    case "marco":
        console.log("01 de março a 20 de março: verão. 21 de março a 31 de março: outono.");
        break;
    case "abril":
    case "maio":
        console.log("Outono.");
        break;
    case "junho":
        console.log("01 de junho a 20 de junho: outono. 21 de junho a 30 de junho: inverno.");
        break;
    case "julho":
    case "agosto":
        console.log("Inverno.");
        break;
    case "setembro":
        console.log("01 de setembro a 22 de setembro: inverno. 23 de setembro a 30 de setembro: primavera.");
        break;
    case "outubro":
    case "novembro":
        console.log("Primavera.");
        break;
    case "dezembro":
        console.log("01 de dezembro a 20 de dezembro: primavera. 21 de dezembro a 31 de dezembro: verão.");
        break;
    default:
        console.log("Erro: O valor informado não é válido. Por favor, informe um mês do ano.");
        break;
}