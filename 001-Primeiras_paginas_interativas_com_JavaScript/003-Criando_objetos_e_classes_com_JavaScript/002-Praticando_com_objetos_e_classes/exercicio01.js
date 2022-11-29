/* 
  Crie um programa para representar carros,
  Os carros possuem uma marca, uma cor e um gasto médio de combustível por quilomêtro rodado.
  Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor
  gasto em reais para realizar este percuso
*/

class Carro {
  marca;
  cor;
  consumo;

  constructor(marca, cor, consumo) {
    this.marca = marca;
    this.cor = cor;
    this.consumo = consumo;
  }

  calcularGasto(distancia, precoCombustivel) {
    return (distancia / this.consumo) * precoCombustivel;
  }
}

const distancia = 100;
const gol = new Carro('Volkswagem', 'Cinza', 13);

console.log(gol.calcularGasto(distancia, 5).toFixed(2));

const palio = new Carro('Fiat', 'Vermelho', 12);
console.log(palio.calcularGasto(distancia, 5).toFixed(2));