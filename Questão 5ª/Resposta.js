function encontrarMaiorNumero(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    return null;
  }

  let maior = numeros[0];

  for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maior) {
      maior = numeros[i];
    }
  }

  return maior;
}

console.log("--- Testes: Maior da Lista ---");
console.log("Lista [4, 19, 7, 12] -> Maior:", encontrarMaiorNumero([4, 19, 7, 12]));
console.log("Lista [-10, -3, -25, -1] -> Maior:", encontrarMaiorNumero([-10, -3, -25, -1]));
console.log("Lista [50, 15, 88, 42, 88] -> Maior:", encontrarMaiorNumero([50, 15, 88, 42, 88]));