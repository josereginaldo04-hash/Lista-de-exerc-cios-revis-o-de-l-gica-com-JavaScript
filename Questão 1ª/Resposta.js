function calcularBoletim(nota1, nota2, nota3) {
  const media = (nota1 + nota2 + nota3) / 3;
  let situacao = "";

  if (media >= 7) {
    situacao = "Aprovado";
  } else if (media >= 5) {
    situacao = "Recuperação";
  } else {
    situacao = "Reprovado";
  }

  console.log(`Notas: ${nota1}, ${nota2}, ${nota3} | Média: ${media.toFixed(1)} | Situação: ${situacao}`);
  
  return { media: Number(media.toFixed(1)), situacao };
}

console.log("--- Testes do Boletim Automático ---");
calcularBoletim(8, 6, 7); 
calcularBoletim(5, 5, 6); 
calcularBoletim(3, 4, 2); 