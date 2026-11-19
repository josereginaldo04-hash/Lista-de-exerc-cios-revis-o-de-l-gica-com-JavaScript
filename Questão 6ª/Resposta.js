function contarVogais(texto) {
  const vogais = "aeiouAEIOU";
  let contador = 0;

  for (const caractere of texto) {
    if (vogais.includes(caractere)) {
      contador++;
    }
  }

  return contador;
}

console.log("--- Testes: Caçador de Vogais ---");
console.log('"JavaScript" -> Vogais:', contarVogais("JavaScript"));
console.log('"Programacao Back-End" -> Vogais:', contarVogais("Programacao Back-End"));
console.log('"AEIOU e uoiea" -> Vogais:', contarVogais("AEIOU e uoiea"));