/*

Escreva um programa que verifica as cores de um semáforo.

*/

let corInformada = prompt("Informe uma cor do semáforo:");
let cor = corInformada.toLowerCase();
switch(cor) {
    case "vermelho":
        console.log("PARE.");
        break;
    case "amarelo":
        console.log("ATENÇÃO.");
        break;
    case "verde":
        console.log("SIGA.");
        break;
    default:
        console.log("Erro: O valor informado não é válido. Por favor, informe uma cor do semáforo.");
        break;
}