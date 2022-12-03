/* 
  Uma sala contém 5 alunos e para cada aluno foisorteado um número de 1 a 1000.
  Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior
  número sorteado.

  Dados de entrada:
  5
  50
  10
  98
  23

  saída:
  98
*/

const { gets, print } = require ('./funcoes-auxiliares');

// Caso a lista de entradas possa aumentar
const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  numerosSorteados.push(numeroSorteado);
}
print(numerosSorteados)

let maiorValor = 0;
for (let i = 0; i < numerosSorteados.length; i++) {
  const numeroSorteado = numerosSorteados[i];
  if (numeroSorteado > maiorValor) {
    maiorValor = numeroSorteado;
  }
}
print(maiorValor);


// Número de elementos fixos na lista
let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
  const numeroSorteado = gets();
  if (numeroSorteado > maiorValorEncontrado) {
    maiorValorEncontrado = numeroSorteado;
  }
}