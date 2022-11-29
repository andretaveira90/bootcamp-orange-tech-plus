/* 
  Crie uma classe para representar pessoas.
  Para cada pessoa teremos os atributos nome, peso e altura.
  As pessoas devem ter a capacidade de dizer o valor do seu IMC.
  Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC.
*/

class Pessoa {
  nome; 
  peso; 
  altura;

  constructor(nome, peso, altura) {
    this.nome = nome;
    this.peso = peso;
    this.altura = altura;
  }

  calcularIMC() {
    return this.peso / (this.altura * this.altura);
  }

  classificarImc() {
    const imc = this.calcularIMC();

    if (imc < 18.5) {
      return 'Abaixo do peso';
    } else if (imc < 25) {
      return 'Peso normal'; 
    } else if (imc < 30) {
      return 'Acima do peso';
    } else if (imc < 40) {
      return 'Obeso';
    } else {
      return 'Obesidade grave!';
    }
  }
}

const pessoa = new Pessoa('José', 70, 1.75);
console.log(`Olá, sou o ${pessoa.nome} e meu IMC é: ${pessoa.calcularIMC().toFixed(2)}`);
console.log('Classificação: ' + pessoa .classificarImc());