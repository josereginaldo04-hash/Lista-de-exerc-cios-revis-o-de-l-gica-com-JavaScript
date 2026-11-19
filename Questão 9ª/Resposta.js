function calcularTotalCarrinho(produtos) {
  let subtotal = 0;

  for (const item of produtos) {
    subtotal += item.preco * item.quantidade;
  }

  const temDesconto = subtotal > 200;
  const totalFinal = temDesconto ? subtotal * 0.9 : subtotal;

  return {
    subtotal: Number(subtotal.toFixed(2)),
    descontoAplicado: temDesconto ? Number((subtotal * 0.1).toFixed(2)) : 0,
    totalFinal: Number(totalFinal.toFixed(2)),
  };
}

const carrinho1 = [
  { nome: "Teclado Mecânico", preco: 150, quantidade: 2 }, // 300
  { nome: "Mouse Sem Fio", preco: 80, quantidade: 1 },     // 80 -> total 380 (> 200 -> 10% off = 342)
];

const carrinho2 = [
  { nome: "Caderno Universitário", preco: 25, quantidade: 3 }, // 75
  { nome: "Caneta Esferográfica", preco: 5, quantidade: 4 },   // 20 -> total 95 (<= 200 -> sem desconto)
];

const carrinho3 = [
  { nome: "Fone de Ouvido", preco: 120, quantidade: 2 }, // 240 -> total 240 (> 200 -> 10% off = 216)
];

console.log("--- Teste 1: Carrinho acima de R$ 200 ---");
console.log("Carrinho 1:", calcularTotalCarrinho(carrinho1));

console.log("\n--- Teste 2: Carrinho até R$ 200 ---");
console.log("Carrinho 2:", calcularTotalCarrinho(carrinho2));

console.log("\n--- Teste 3: Outro carrinho acima de R$ 200 ---");
console.log("Carrinho 3:", calcularTotalCarrinho(carrinho3));