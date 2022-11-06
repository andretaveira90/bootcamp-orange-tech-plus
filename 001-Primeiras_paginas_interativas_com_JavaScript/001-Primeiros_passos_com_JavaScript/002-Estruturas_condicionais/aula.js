const numero = 454659;
const numeroPar = (numero % 2) === 0;

// Estrutura condicional if else
if (numero === 0) {
  console.log("Número inválido");
} else if (numeroPar) {
  console.log("Número par");
} else {
  console.log("Numero impar");
}
