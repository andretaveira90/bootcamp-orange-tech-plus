const notas = [];

notas.push(5);
notas.push(6);
notas.push(9);
notas.push(6);
notas.push(7);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
  const nota = notas[i];
  soma += nota;
}

const media = soma / notas.length;
console.log(media);