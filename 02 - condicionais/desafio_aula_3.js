/*
Faça um programa para calcular o valor de uma viagem.

Voce terá 5 variáveis, Sendo elas:
  1 - Preço do etanol;
  2 - Preço da gasolina;
  3 - Tipo de combustível do seu veiculo;
  4 - Gasto médio de combustível do carro por KM;
  5 - Distância em KM da viagem;

  Imprima no console o valor que será gasto de combustível do para realizar está viagem.
*/


const etanol = 4.72;
const gasolina = 6.13;
const tipoCombustivel = 'Etanol';
const consumoCarroGasolina = 12;
const consumoCarroEtanol = 9;
const distance = 270;

if (tipoCombustivel === 'Gasolina') {
    let calc =  (distance / consumoCarroGasolina) * gasolina;
    console.log(`O valor gasto de combustível para realizar esta viagem será de R$${calc.toFixed(2)}.`);
} else {
    let calc =  (distance / consumoCarroEtanol) * etanol;
    console.log(`O valor gasto de combustível para realizar esta viagem será de R$${calc.toFixed(2)}.`);
};
