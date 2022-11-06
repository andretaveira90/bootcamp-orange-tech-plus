/*
  Faça um programa para calcular o valor de uma viagem.

  Você terá 5 variáveis. Sendo elas:
  1 - Preço do etanol;
  2 - Preço da gasolina;
  3 - O tipo de combustível que está no seu carro;
  4 - Gasto médio de combutível do seu carro por KM;
  5 - Distância em kM da viagem.

  Imprima no console o valor que será gasto para realizar a viagem.
*/

const precoEtanol = 4.14;
const precoGasolina = 5.19;
const combustivelEmUso = 'Gasolina';
const distanciaEmKm = 100;
let consumoMedioKm = 0;
let valorFinal = 0;

if (combustivelEmUso === 'etanol' || combustivelEmUso === 'Etanol') {
  consumoMedioKm = 9;
  valorFinal = (distanciaEmKm / consumoMedioKm) * precoEtanol;
} else if (combustivelEmUso === 'gasolina' || combustivelEmUso === 'Gasolina') {
  consumoMedioKm = 13; 
  valorFinal = (distanciaEmKm / consumoMedioKm) * precoGasolina;
} else {
  console.log('Combustível não identificado');
}

console.log('Valor final gasto: ' + valorFinal);

