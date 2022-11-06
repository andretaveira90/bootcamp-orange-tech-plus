/* 
  Elabore um algorítimo que dado o peso e a altura de um adulto mostre sua condição de 
  acordo com a tabela abaixo:

  IMC em adultos:
  - Abaixo de 18.5, abaixo do peso;
  - Entre 18.5 e 25, peso normal;
  - Entre 25 e 30, acima do peso;
  - Entre 30 e 40, obeso;
  - Acima de 40, obesidade grave.

  Formula do IMC: 
    peso / (altura * altura)
*/

const peso = 95;
const altura = 1.73;

let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log(imc.toFixed(2) + ' Abaixo do peso');
} else if (imc <= 25) {
  console.log(imc.toFixed(2) + ' Peso normal');
} else if (imc <= 30) {
  console.log(imc.toFixed(2) + ' Acima do peso');
} else if (imc <= 40) {
  console.log(imc.toFixed(2) + ' Obeso');
} else {
  console.log(imc.toFixed(2) + ' Obesidade grave');
}
