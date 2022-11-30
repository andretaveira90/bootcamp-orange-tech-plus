/*
  Crie um programa que seja capaz de percorrer uma lista de números e imprima cada nmúmero
  par encontrado.
*/

const numeros = [1, 4, 6, 35, 76, 30, 25, 86, 13, 89, 56, 97];

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(numeros[i]);
  }
}