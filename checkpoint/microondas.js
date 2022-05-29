let readlineSync = require("../checkpoint/lib/readline-sync");

let tmPipoca = 10;
let tmMacarrao = 8;
let tmCarne = 15;
let tmFeijao = 12;
let tmBrigadeiro = 8;

console.log(`
  Bem-vindo ao nosso Microondas ultra rápido, escolha abaixo. 

  1 - Pipoca       10 segundos (Padrão).
  2 - Macarrão     08 segundos (Padrão). 
  3 - Carne        15 segundos (Padrão).         
  4 - Feijão       12 segundos (Padrão).
  5 - Brigadeiro   08 segundos (Padrão).

  `);

let option = readlineSync.question("Digite sua opcao: ");
let timer = readlineSync.question("Digite seu tempo: ");

if (
  (option == 1 && timer == tmPipoca) ||
  (option == 2 && timer == tmMacarrao) ||
  (option == 3 && timer == tmFeijao) ||
  (option == 4 && timer == tmCarne) ||
  (option == 5 && timer == tmBrigadeiro)
) {
  console.log("Prato pronto, bom apetite!!");
} else if (
  (option == 1 && timer <= tmPipoca) ||
  (option == 2 && timer <= tmMacarrao) ||
  (option == 3 && timer <= tmFeijao) ||
  (option == 4 && timer <= tmCarne) ||
  (option == 5 && timer <= tmBrigadeiro)
) {
  console.log("Tempo insulficiente!!");
}
else if (
  (option == 1 && timer > tmPipoca && timer <= 19)||
  (option == 2 && timer > tmMacarrao && timer <= 15) ||
  (option == 3 && timer > tmFeijao && timer <= 29) ||
  (option == 4 && timer > tmCarne && timer <= 23) ||
  (option == 5 && timer > tmBrigadeiro && timer <= 15)
) {
  console.log("Seu prato quase queimou!!");
} else if (
  (option == 1 && timer > tmPipoca * 2 && timer < tmPipoca*3) ||
  (option == 2 && timer > tmMacarrao * 2 && timer < tmMacarrao*3) ||
  (option == 3 && timer > tmFeijao * 2  && timer < tmFeijao*3) ||
  (option == 4 && timer > tmCarne * 2 && timer < tmCarne *3) ||
  (option == 5 && timer > tmBrigadeiro * 2 && timer < tmBrigadeiro*3)
) {
  console.log("O prato queimou!!");
} else if (
  (option == 1 && timer >= tmPipoca * 3) ||
  (option == 2 && timer >= tmMacarrao * 3) ||
  (option == 3 && timer >= tmFeijao * 3) ||
  (option == 4 && timer >= tmCarne * 3) ||
  (option == 5 && timer >= tmBrigadeiro * 3)
) {
  console.log("Kabumm!!!");
} else {
  console.log("Prato inexistente, tente novamente!");
}
