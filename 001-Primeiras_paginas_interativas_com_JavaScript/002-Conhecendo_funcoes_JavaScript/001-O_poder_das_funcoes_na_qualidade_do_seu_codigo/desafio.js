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

  Divida as partes do algorítimo em funções.
*/

function calcularImc(peso, altura) {
  return peso / (altura * altura);
}

function classificarImc(imc) {
  if (imc < 18.5) {
    return (imc.toFixed(2) + ' Abaixo do peso');
  } else if (imc <= 25) {
    return (imc.toFixed(2) + ' Peso normal');
  } else if (imc <= 30) {
    return (imc.toFixed(2) + ' Acima do peso');
  } else if (imc <= 40) {
    return (imc.toFixed(2) + ' Obeso');
  } else {
    return (imc.toFixed(2) + ' Obesidade grave');
  }
}

(function (){
  const peso = 95;
  const altura = 1.73;
  const imc = calcularImc(peso, altura);
  console.log(classificarImc(imc));
})();