/* 
  Refatore o programa de calculo de juros, usando funções.
*/

function aplicarDesconto(valor, desconto) {
  return valor - (valor * (desconto / 100));
}

function aplicarJuros(valor, juros) {
  return valor + (valor * (juros / 100));
}

const precoEtiqueta = 120;
const formaPagamento = 2;

(function definirValorFinal() {
  if (formaPagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10));
  }
  if (formaPagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15));
  }
  if (formaPagamento === 3) {
    console.log(aplicarDesconto(precoEtiqueta, 0));
  }
  if (formaPagamento === 4) {
    console.log(aplicarJuros(precoEtiqueta, 10));
  }
})();