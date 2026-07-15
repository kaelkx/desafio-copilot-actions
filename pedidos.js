// Gerado com o prompt: "Crie uma função em JavaScript que calcula o total de um pedido aplicando um desconto percentual, recebendo o valor total e a porcentagem de desconto"
function calcularTotalComDesconto(valorTotal, percentualDesconto) {
  if (typeof valorTotal !== 'number' || typeof percentualDesconto !== 'number') {
    throw new Error('Valor total e percentual de desconto devem ser números.');
  }
  if (valorTotal < 0 || percentualDesconto < 0 || percentualDesconto > 100) {
    throw new Error('Valores inválidos: valor total não pode ser negativo e o desconto deve estar entre 0 e 100.');
  }

  const desconto = (valorTotal * percentualDesconto) / 100;
  const totalComDesconto = valorTotal - desconto;

  return Number(totalComDesconto.toFixed(2));
}

module.exports = { calcularTotalComDesconto };