/* 
Faça um programa para calcular o valor gasto de combustível em uma viagem.

Você terá três variáveis. Sendo elas:
- Preço do combustível;
- Valor médio de gasto do carro;
- Distância em KM da viagem.

Imprima no console o valor que serpá gasto em comnbustível para realizar esta viagem.
*/

const precoCombustivel = 5.15;
const gastoMedioDoCarro = 12;
const distanciaEmQuilometros = 320;

const valorGastoEmCombustivel = (distanciaEmQuilometros / gastoMedioDoCarro) * precoCombustivel;
console.log(valorGastoEmCombustivel.toFixed(2));