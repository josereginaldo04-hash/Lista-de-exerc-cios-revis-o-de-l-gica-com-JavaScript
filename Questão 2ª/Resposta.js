function verificarParOuImpar(numero) {
  if (numero % 2 === 0) {
    return "par";
  } else {
    return "ímpar";
  }
}
console.log("--- Verificando números de 1 a 10 ---");
for (let i = 1; i <= 10; i++) {
  const resultado = verificarParOuImpar(i);
  console.log(`Número ${i}: ${resultado}`);
}