let tpPipoca = 10;
let tpMacarrao = 8;
let tpCarne = 15;
let tpFeijao = 12;
let tpBrigadeiro = 8;

console.log(`
    Estas são as opções diponiveis, aproveite:

  1 - Pipoca       10 segundos.
  2 - Macarrão     08 segundos. 
  3 - Carne        15 segundos.         
  4 - Feijão       12 segundos.
  5 - Brigadeiro   08 segundos.
  `);

function microondas (option,timer) {

if (
  (option == 1 && timer == tpPipoca) ||
  (option == 2 && timer == tpMacarrao) ||
  (option == 3 && timer == tpFeijao) ||
  (option == 4 && timer == tpCarne) ||
  (option == 5 && timer == tpBrigadeiro)
) {
  console.log("Prato pronto, bom apetite!!!");
} else if (
  (option == 1 && timer <= tpPipoca) ||
  (option == 2 && timer <= tpMacarrao) ||
  (option == 3 && timer <= tpFeijao) ||
  (option == 4 && timer <= tpCarne) ||
  (option == 5 && timer <= tpBrigadeiro)
) {
  console.log("Tempo insuficiente!");
}
else if (
  (option == 1 && timer > tpPipoca && timer <= tpPipoca * 1.5)||
  (option == 2 && timer > tpMacarrao && timer <= tpMacarrao * 1.5) ||
  (option == 3 && timer > tpFeijao && timer <= tpFeijao * 1.5 ) ||
  (option == 4 && timer > tpCarne && timer <= tpCarne * 1.5) ||
  (option == 5 && timer > tpBrigadeiro && timer <= tpBrigadeiro * 1.5)
) {
  console.log("Esta otimo!");
} else if (
  (option == 1 && timer > tpPipoca && timer <= tpPipoca * 2)||
  (option == 2 && timer > tpMacarrao && timer <= tpMacarrao * 2) ||
  (option == 3 && timer > tpFeijao && timer <= tpFeijao * 2 ) ||
  (option == 4 && timer > tpCarne && timer <= tpCarne * 2) ||
  (option == 5 && timer > tpBrigadeiro && timer <= tpBrigadeiro * 2)
) {
  console.log("Passou um pouco!");
} else if (
  (option == 1 && timer > tpPipoca * 2 && timer < tpPipoca*3) ||
  (option == 2 && timer > tpMacarrao * 2 && timer < tpMacarrao*3) ||
  (option == 3 && timer > tpFeijao * 2  && timer < tpFeijao*3) ||
  (option == 4 && timer > tpCarne * 2 && timer < tpCarne *3) ||
  (option == 5 && timer > tpBrigadeiro * 2 && timer < tpBrigadeiro*3)
) {
  console.log("A comida queimou!");
} else if (
  (option == 1 && timer >= tpPipoca * 3) ||
  (option == 2 && timer >= tpMacarrao * 3) ||
  (option == 3 && timer >= tpFeijao * 3) ||
  (option == 4 && timer >= tpCarne * 3) ||
  (option == 5 && timer >= tpBrigadeiro * 3)
) {
  console.log("Kabumm!");
} else {
  console.log("Prato inexistente!");
}
}
microondas (1,1)  // Escolha aqui o tempo para os pratos.