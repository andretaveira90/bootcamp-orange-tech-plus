/*
  Elabore um algorítimo que calcule o que deve ser pago por um produto, considere o preço 
  normal de etiqueta e a escolha da condição de pagamento.

  Condições de pagamento:
  - À vista no débito, recebe 10% de desasconto;
  - À vista no dinheiro ou PIX, recebe 15% de desconto;
  - Em duas vezez, preço normal de etiqueta sem juros;
  - Acima de duas vezes, preço normal de etiqueta mais juros de 10%.
*/

const precoEtiqueta = 120;

const pagamentoDebito = 1;
const pagamentoDinheiro = 2;
const pagamento2Vezes = 3;
const pagamentoAcima2Vezes = 4;

const formaPagamento = 2;
let valorFinal = 0;

if (formaPagamento === 1) {
  valorFinal = precoEtiqueta - (precoEtiqueta * 0.1);
  console.log('Total: ' + valorFinal);
} else if (formaPagamento === 2) {
  valorFinal = precoEtiqueta - (precoEtiqueta * 0.15);
  console.log('Total: ' + valorFinal);
} else if (formaPagamento === 3) {
  valorFinal = precoEtiqueta;
  console.log('Total: ' + valorFinal);
} else if (formaPagamento === 4) {
  valorFinal = precoEtiqueta + (precoEtiqueta * 0.1);
  console.log('Total: ' + valorFinal);
} else {
  console.log('Opção inválida');
}