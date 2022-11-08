/* 
  Um objeto é um conjunto de propriedades. E cada propriedade é formada por
  uma chave e um valor.
*/

// Declara-se uma constante e atribui-se a ela as propriedades desejadas.
// A estrutura deve ser chave : valor ( usando2 pontos para separar).
const pessoa = {
  nome: 'João',
  idade: 35,
  profissao: 'Autonômo'
}

// Acessar as propriedades do objeto individualmente:
// Usamos 1 ponto após o nome do objeto seguido pela propriedade desejada.
// O ponto representa o acesso ao "interior" do objeto.
console.log(pessoa.nome);

// Podemos adicionar propriedades ao objeto
// A sintaxe é: o nome do objeto.nova-propriedade = valor 
pessoa.altura = 1.72;
// Passando o nome do objeto para o console.log() mostramos todo seu conteudo
console.log(pessoa);

// Podemos utilizar funções dentro de um objeto. Chamamos essa função de método.
// A função deve ser atribuida como valor de uma propriedade.
const aluno = {
  nome : 'André',
  idade : 32,
  curso: 'ADS',

  descrever: function() {
    console.log(`Aluno: ${this.nome}, idade: ${this.idade}, cursando: ${this.curso}`);
  }
};

aluno.descrever();
// No exemplo acima, na impressão dos dados foi usada uma técnica chamada template string.
// Definida pelas crases duplas ao invés de aspas, e a concatenação do texto com o valor das 
// propriedades foi feito usando placeholders, que são o sinal de $ seguido por chaves, e o
// valor da propriedade é colocado dentro das chaves.


// Outra forma de acessar as propriedade do objeto:
console.log(aluno.nome);
console.log(aluno['nome']);