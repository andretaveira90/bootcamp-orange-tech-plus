// Definindo uma classe .
// Uma classe é basicamente um molde para criarmos objetos a partir dela.
// Os objetos herdam as propriedades da classe da qual foram criados/instanciados.

// Classe é a definição de como deve ser o objeto.
// Instância é a ocorrência de um objeto criado a partir da classe.
class Pessoa {
  // atributos/propriedades
  nome;
  idade;

  // Construtor. Pode ou não receber parâmetros para a criação de uma nova instância.
  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }

  descrever()  {
    console.log(`Nome: ${this.nome}, idade: ${this.idade}.`);
  }
}

// Instanciando um objeto a partir da classe Pessoa, passando os parâmetros exigidos no construtor:
const andre = new Pessoa('André', 32);
andre.descrever();

// Mudando o conteúdo da propriedade nome:
andre.nome = 'André Taveira';
andre.descrever();

