/*
  Faça um algorítimo que dado as 3 notas de um aluno em um semestre da faculdade , calcule e imprima
  a sua média e a sua classificação conforme a tabela abaixo:

  - Média menor que 5, reprovado;
  - Média entre 5 e 7, recuperação;
  - Média acima de 7, aprovado;
*/

const nota1 = 6.5;
const nota2 = 5;
const nota3 = 7;

const mediaNotas = (nota1 + nota2 + nota3) / 3;

console.log('Média: ' + mediaNotas.toFixed(2));

if (mediaNotas < 5) {
  console.log('Reprovado');
} else if (mediaNotas <= 7) {
  console.log('Recuperação');
} else {
  console.log('Aprovado');
}