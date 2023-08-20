/*
Faça um programa para calcular o valor de uma viagem.

Voce terá 3 variáveis, Sendo elas:
  1 - Preço do combustível;
  2 - Gasto médio de combustível do carro por KM;
  3 - Distância em KM da viagem;

  Imprima no console o valor que será gasto de combustível do para realizar está viagem.
*/

const valueFuel = 6.39;
let car_consumption = 12;
let distance = 270;

let calc =  (distance / car_consumption) * valueFuel;

console.log(`O valor gasto de combustível para realizar esta viagem será de R$${calc.toFixed(2)}.`);