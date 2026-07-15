// Gerado com o prompt: "Crie testes unitários com Jest para a função calcularTotalComDesconto, cobrindo casos de desconto 0%, 50% e valores inválidos"
const { calcularTotalComDesconto } = require('./pedidos');

test('não aplica desconto quando percentual é 0%', () => {
  expect(calcularTotalComDesconto(100, 0)).toBe(100);
});

test('aplica 50% de desconto corretamente', () => {
  expect(calcularTotalComDesconto(200, 50)).toBe(100);
});

test('lança erro quando percentual de desconto é maior que 100', () => {
  expect(() => calcularTotalComDesconto(100, 150)).toThrow();
});

test('lança erro quando valor total é negativo', () => {
  expect(() => calcularTotalComDesconto(-50, 10)).toThrow();
});

test('lança erro quando valorTotal não é um número', () => {
  expect(() => calcularTotalComDesconto('cem', 10)).toThrow();
});